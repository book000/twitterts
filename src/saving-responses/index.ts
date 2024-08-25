import { TwitterTsError } from '../models/exceptions'
import { HttpMethod, RequestType } from '../scraper'
import { GraphQLEndpoint } from '../models/responses/endpoints'
import crypto from 'node:crypto'
import { createPool, Pool, RowDataPacket } from 'mysql2/promise'
import { ulid } from 'ulid'

export interface AddResponseOptions {
  endpointType: RequestType
  method: HttpMethod
  endpoint: string
  url: string | null
  requestHeaders: string | null
  requestBody: string | null
  responseType: string
  statusCode: number
  responseHeaders: string | null
  responseBody: string
}

/**
 * レスポンスを保存するデータベースのオプション
 */
export interface ResponseDatabaseOptions {
  /**
   * ホスト名 (MySQL のみ)
   */
  hostname?: string

  /**
   * ポート (MySQL のみ)
   */
  port?: string

  /**
   * ユーザー名 (MySQL のみ)
   */
  username?: string

  /**
   * パスワード (MySQL のみ)
   */
  password?: string

  /**
   * データベース名 (MySQL のみ)
   */
  database?: string
}

interface GetResponseRangeOptions {
  page?: number
  limit?: number
}

interface InformationSchemaTable extends RowDataPacket {
  table_name: string
}

interface DBResponse extends RowDataPacket {
  endpointType: RequestType
  method: HttpMethod
  endpoint: string
  url: string | null
  urlHash: string
  requestHeaders: string | null
  requestBody: string | null
  responseType: string
  statusCode: number
  responseHeaders: string | null
  responseBody: string
  createdAt: Date
}

interface CountResponse extends RowDataPacket {
  count: number
}

export interface ResponseEndPoint {
  endpointType: RequestType
  method: HttpMethod
  endpoint: GraphQLEndpoint
  statusCode: number
}

interface ResponseEndPointResponse extends RowDataPacket {
  endpointType: RequestType
  method: HttpMethod
  endpoint: GraphQLEndpoint
  statusCode: number
}

export interface ResponseEndPointWithCount {
  endpointType: RequestType
  method: HttpMethod
  endpoint: GraphQLEndpoint
  statusCode: number
  count: number
}

interface partitionNameRow extends RowDataPacket {
  PARTITION_NAME: string | null
}

/**
 * レスポンスを保存するデータベース
 */
export class ResponseDatabase {
  private pool: Pool
  private partitions: string[] = []
  private initialized = false

  constructor(options: ResponseDatabaseOptions = {}) {
    const configuration = {
      DB_HOSTNAME: options.hostname ?? process.env.RESPONSE_DB_HOSTNAME,
      DB_PORT: options.port ?? process.env.RESPONSE_DB_PORT,
      DB_USERNAME: options.username ?? process.env.RESPONSE_DB_USERNAME,
      DB_PASSWORD: options.password ?? process.env.RESPONSE_DB_PASSWORD,
      DB_DATABASE: options.database ?? process.env.RESPONSE_DB_DATABASE,
    }

    // DB_PORTがintパースできない場合はエラー
    // DB_PORTがundefinedの場合はデフォルトポートを使用する
    const port = this.parsePort(configuration.DB_PORT)

    this.pool = createPool({
      host: configuration.DB_HOSTNAME,
      port,
      user: configuration.DB_USERNAME,
      password: configuration.DB_PASSWORD,
      database: configuration.DB_DATABASE,
      connectionLimit: 1,
      namedPlaceholders: true,
    })
  }

  /**
   * データソースを初期化する
   *
   * @returns 初期化に成功したかどうか
   */
  public async init(): Promise<boolean> {
    const tableName = 'responses'
    const createTableSql =
      'CREATE TABLE `' +
      tableName +
      '` (' +
      "  `id` char(36) NOT NULL COMMENT 'ID'," +
      "  `endpoint_type` varchar(10) NOT NULL COMMENT 'エンドポイントの種別'," +
      "  `method` varchar(10) NOT NULL COMMENT 'エンドポイントのメソッド'," +
      "  `endpoint` varchar(255) NOT NULL COMMENT 'エンドポイントの名前'," +
      "  `url` text DEFAULT NULL COMMENT 'リクエストURL'," +
      "  `url_hash` varchar(255) NOT NULL COMMENT 'リクエストURLのハッシュ値'," +
      "  `request_headers` longtext DEFAULT NULL COMMENT 'リクエストヘッダー'," +
      "  `request_body` longtext DEFAULT NULL COMMENT 'リクエストボディ'," +
      "  `response_type` varchar(10) NOT NULL COMMENT 'レスポンスの種別'," +
      "  `status_code` int(11) NOT NULL COMMENT 'レスポンスのステータスコード'," +
      "  `response_headers` longtext DEFAULT NULL COMMENT 'レスポンスヘッダー'," +
      "  `response_body` longtext NOT NULL COMMENT 'レスポンスボディ'," +
      "  `created_at` datetime(3) NOT NULL COMMENT 'データ登録日時' DEFAULT CURRENT_TIMESTAMP(3)," +
      '  PRIMARY KEY (`created_at`),' +
      '  UNIQUE KEY `unique_response` (`endpoint_type`,`method`,`endpoint`,`url_hash`,`created_at`),' +
      '  KEY `idx_id_createdat` (`id`,`created_at`),' +
      '  KEY `idx_endpoint_method_status` (`endpoint_type`,`method`,`endpoint`,`status_code`)' +
      ') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci'

    // テーブルが存在しない場合はテーブルを作成する
    const [tables] = await this.pool.query<InformationSchemaTable[]>(
      'SELECT table_name FROM information_schema.tables WHERE table_name = :tableName',
      { tableName }
    )
    await (tables.length === 0
      ? this.pool.query(createTableSql)
      : this.migrateTable())

    this.initialized = true

    // 現在のパーティションを取得する
    this.partitions = await this.fetchPartitions()

    // パーティションの初期作成 (パーティションがひとつも設定されていない場合)
    if (this.partitions.length === 0) {
      await this.initPartition()
    }

    return true
  }

  /**
   * テーブルをマイグレーションする
   */
  private async migrateTable(): Promise<void> {
    // プライマリキーがid, created_atではない場合は削除する
    const [columns] = await this.pool.query<RowDataPacket[]>(
      'SHOW COLUMNS FROM responses'
    )
    const isPrimaryKeyCreatedAt = columns.some(
      (column) =>
        column.Field === 'created_at' &&
        column.Key === 'PRI' &&
        column.Extra === ''
    )

    if (!isPrimaryKeyCreatedAt) {
      await this.pool.query('ALTER TABLE responses DROP PRIMARY KEY')
    }

    // id列がない場合は追加する
    const [idColumn] = await this.pool.query<RowDataPacket[]>(
      'SHOW COLUMNS FROM responses WHERE Field = "id"'
    )
    if (idColumn.length === 0) {
      await this.pool.query(
        'ALTER TABLE responses ADD COLUMN `id` CHAR(36) NULL'
      )
      // すべてのレコードにレコードごとで一意のIDを付与する
      const [rows] = await this.pool.query<DBResponse[]>(
        'SELECT * FROM responses'
      )
      for (const row of rows) {
        await this.pool.query(
          'UPDATE responses SET id = :id WHERE created_at = :createdAt',
          {
            id: ulid(),
            createdAt: row.createdAt,
          }
        )
      }
      await this.pool.query(
        'ALTER TABLE responses MODIFY COLUMN `id` CHAR(36) NOT NULL'
      )
    }

    // プライマリキーを付けなおす
    if (!isPrimaryKeyCreatedAt) {
      await this.pool.query(
        'ALTER TABLE responses ADD PRIMARY KEY (`created_at`)'
      )
    }

    // ユニークキーがない場合は追加する
    const [uniqueKeyResponse] = await this.pool.query<RowDataPacket[]>(
      'SHOW INDEX FROM responses WHERE Key_name = "unique_response"'
    )
    if (uniqueKeyResponse.length === 0) {
      await this.pool.query(
        'ALTER TABLE responses ADD UNIQUE KEY `unique_response` (`endpoint_type`,`method`,`endpoint`,`url_hash`,`created_at`)'
      )
    }

    const [uniqueKeyidCreatedAt] = await this.pool.query<RowDataPacket[]>(
      'SHOW INDEX FROM responses WHERE Key_name = "idx_id_createdat"'
    )
    if (uniqueKeyidCreatedAt.length === 0) {
      await this.pool.query(
        'ALTER TABLE responses ADD UNIQUE KEY `idx_id_createdat` (`id`,`created_at`)'
      )
    }

    // idx_から始まるインデックスは、idx_endpoint_method_statusかidx_id_createdatのみとする。それ以外は削除する
    const [indexes] = await this.pool.query<RowDataPacket[]>(
      'SHOW INDEX FROM responses WHERE Key_name LIKE "idx_%" AND Key_name NOT IN ("idx_endpoint_method_status", "idx_id_createdat")'
    )
    for (const index of indexes) {
      await this.pool.query(
        `ALTER TABLE responses DROP INDEX ${index.Key_name}`
      )
    }
  }

  /**
   * レスポンスを追加する
   *
   * @param options レスポンスの追加オプション
   * @returns 追加されたレスポンス
   */
  public async addResponse(options: AddResponseOptions): Promise<void> {
    if (!this.initialized) {
      throw new TwitterTsError('Responses database is not initialized')
    }
    const now = new Date()
    await this.addPartition(now)

    const insertSql =
      'INSERT IGNORE INTO responses SET ' +
      'id = :id, ' +
      'endpoint_type = :endpointType, ' +
      'method = :method, ' +
      'endpoint = :endpoint, ' +
      'url = :url, ' +
      'url_hash = :urlHash, ' +
      'request_headers = :requestHeaders, ' +
      'request_body = :requestBody, ' +
      'response_type = :responseType, ' +
      'status_code = :statusCode, ' +
      'response_headers = :responseHeaders, ' +
      'response_body = :responseBody, ' +
      'created_at = :createdAt'
    await this.pool.query(insertSql, {
      id: ulid(),
      endpointType: options.endpointType,
      method: options.method,
      endpoint: options.endpoint,
      url: options.url,
      urlHash: crypto
        .createHash('sha256')
        .update(options.url ?? '')
        .digest('hex'),
      requestHeaders: options.requestHeaders,
      requestBody: options.requestBody,
      responseType: options.responseType,
      statusCode: options.statusCode,
      responseHeaders: options.responseHeaders,
      responseBody: options.responseBody,
      createdAt: now,
    })
  }

  /**
   * レスポンスを取得する
   *
   * @param endpoint エンドポイントの情報。指定しない場合はすべてのレスポンスを取得する
   * @param rangeOptions 取得するレスポンスの範囲
   *
   * @returns レスポンスの配列
   */
  public async getResponses(
    endpoint: ResponseEndPoint,
    rangeOptions?: GetResponseRangeOptions
  ): Promise<DBResponse[]> {
    if (!this.initialized) {
      throw new TwitterTsError('Responses database is not initialized')
    }
    const options = rangeOptions ?? {}
    const page = options.page
    const limit = options.limit

    // ResponseEndPointWithCountで来る場合があるので、ResponseEndPointに変換する
    const endpointValue = {
      endpointType: endpoint.endpointType,
      method: endpoint.method,
      endpoint: endpoint.endpoint,
      statusCode: endpoint.statusCode,
    }
    if (page === undefined || limit === undefined) {
      const [results] = await this.pool.query<DBResponse[]>(
        `SELECT
            endpoint_type AS endpointType,
            method,
            endpoint,
            url,
            url_hash AS urlHash,
            request_headers AS requestHeaders,
            request_body AS requestBody,
            response_type AS responseType,
            status_code AS statusCode,
            response_headers AS responseHeaders,
            response_body AS responseBody,
            created_at AS createdAt
        FROM
            responses
        WHERE
            endpoint_type = :endpointType
            AND method = :method
            AND endpoint = :endpoint
            AND status_code = :statusCode
        ORDER BY
            created_at DESC`,
        endpointValue
      )

      return results
    }

    if (page <= 0 || limit <= 0) {
      throw new TwitterTsError(
        `Responses database range is invalid (page: ${page}, limit: ${limit})`
      )
    }

    const [results] = await this.pool.query<DBResponse[]>(
      `SELECT
            endpoint_type AS endpointType,
            method,
            endpoint,
            url,
            url_hash AS urlHash,
            request_headers AS requestHeaders,
            request_body AS requestBody,
            response_type AS responseType,
            status_code AS statusCode,
            response_headers AS responseHeaders,
            response_body AS responseBody,
            created_at AS createdAt
        FROM
            responses
        WHERE
            endpoint_type = :endpointType
            AND method = :method
            AND endpoint = :endpoint
            AND status_code = :statusCode
        ORDER BY
            created_at DESC
        LIMIT
          :offset,
          :limit`,
      {
        ...endpointValue,
        offset: (page - 1) * limit,
        limit,
      }
    )

    return results
  }

  /**
   * レスポンスの数を取得する
   *
   * @param endpoint エンドポイントの情報。指定しない場合はすべてのレスポンスを取得する
   * @returns レスポンスの数
   */
  public async getResponseCount(endpoint: ResponseEndPoint): Promise<number> {
    if (!this.initialized) {
      throw new TwitterTsError('Responses database is not initialized')
    }
    const endpointValue = {
      endpointType: endpoint.endpointType,
      method: endpoint.method,
      endpoint: endpoint.endpoint,
      statusCode: endpoint.statusCode,
    }

    const [results] = await this.pool.query<CountResponse[]>(
      'SELECT COUNT(id) AS count FROM responses WHERE endpoint_type = :endpointType AND method = :method AND endpoint = :endpoint AND status_code = :statusCode',
      endpointValue
    )

    return results[0].count
  }

  /**
   * エンドポイントを取得する
   */
  public async getEndpoints(
    filterEndpointType: RequestType | null = null
  ): Promise<ResponseEndPointWithCount[]> {
    if (!this.initialized) {
      throw new TwitterTsError('Responses database is not initialized')
    }

    // エンドポイント一覧を取得する
    let sql =
      'SELECT DISTINCT endpoint_type AS endpointType, method, endpoint, status_code AS statusCode FROM responses'
    if (filterEndpointType !== null) {
      sql += ' WHERE endpoint_type = :endpointType'
    }
    const [results] = await this.pool.query<ResponseEndPointResponse[]>(
      sql,
      filterEndpointType === null ? {} : { endpointType: filterEndpointType }
    )

    const responseEndpoints: ResponseEndPointWithCount[] = await Promise.all(
      results.map(async (result) => {
        const count = await this.getResponseCount(result)
        return {
          ...result,
          count,
        }
      })
    )

    return responseEndpoints
  }

  /**
   * パーティションを取得する
   *
   * @returns パーティションの配列
   */
  private async fetchPartitions(): Promise<string[]> {
    if (!this.initialized) {
      throw new TwitterTsError('Responses database is not initialized')
    }

    const [results] = await this.pool.query<partitionNameRow[]>(
      'SELECT PARTITION_NAME FROM INFORMATION_SCHEMA.PARTITIONS WHERE TABLE_NAME = "responses"'
    )

    return results
      .map((v) => {
        return v.PARTITION_NAME
      })
      .filter((v: string | null): v is string => v !== null)
  }

  /**
   * 日付パーティションを追加する
   *
   * @param date 日付
   */
  public async addPartition(date: Date): Promise<void> {
    if (!this.initialized) {
      throw new TwitterTsError('Responses database is not initialized')
    }
    // pYYYYMMの形式でパーティションを作成する
    const partitionName = `p${date.toISOString().slice(0, 7).replace('-', '')}`
    if (this.partitions.includes(partitionName)) {
      return
    }
    // 翌月の1日の日付を取得する
    const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1)
    await this.pool
      .query(
        `ALTER TABLE responses REORGANIZE PARTITION pmax INTO (PARTITION ${partitionName} VALUES LESS THAN (` +
          `TO_DAYS('${nextMonth.toISOString().slice(0, 10)}')` +
          `), PARTITION pmax VALUES LESS THAN MAXVALUE)`
      )
      .catch((error: unknown) => {
        if ((error as { code: string }).code === 'ER_SAME_NAME_PARTITION') {
          return
        }
        throw error
      })
    this.partitions.push(partitionName)
  }

  /**
   * 日付パーティションを初期化する
   */
  public async initPartition(): Promise<void> {
    if (!this.initialized) {
      throw new TwitterTsError('Responses database is not initialized')
    }
    const partitionName = 'pmax'
    if (this.partitions.includes(partitionName)) {
      return
    }
    await this.pool.query(
      `ALTER TABLE responses PARTITION BY RANGE (TO_DAYS(created_at)) (PARTITION ${partitionName} VALUES LESS THAN MAXVALUE)`
    )
    this.partitions.push(partitionName)
  }

  /**
   * 日付パーティションを削除する。削除されるとデータは失われる
   *
   * @param partitionName パーティション名
   */
  public async dropPartition(partitionName: string): Promise<void> {
    if (!this.initialized) {
      throw new TwitterTsError('Responses database is not initialized')
    }
    if (!this.partitions.includes(partitionName)) {
      return
    }
    await this.pool.query(
      `ALTER TABLE responses DROP PARTITION ${partitionName}`
    )
    this.partitions = this.partitions.filter((v) => v !== partitionName)
  }

  /**
   * データソースをクローズする
   */
  public async close(): Promise<void> {
    if (!this.initialized) {
      return
    }
    await this.pool.end()
  }

  public isInitialized(): boolean {
    return this.initialized
  }

  public getPartitions(): string[] {
    return this.partitions
  }

  public convertPartitonNameToDate(partitionName: string): Date {
    const year = Number.parseInt(partitionName.slice(1, 5))
    const month = Number.parseInt(partitionName.slice(5, 7))
    return new Date(year, month - 1)
  }

  /**
   * プールを取得する
   *
   * @returns プール
   */
  public getPool(): Pool {
    return this.pool
  }

  /**
   * 環境変数で指定されたデータベースのポートをパースする。
   * 数値にパースできない場合と1以上でない場合はエラーを投げる。
   * undefinedの場合は、各データベースのデフォルトポートを使用する
   *
   * @param port データベースのポート
   * @returns パースされたポート
   */
  private parsePort(port: string | undefined): number {
    if (port === undefined) {
      return 3306
    }

    const parsedPort = Number.parseInt(port)
    if (Number.isNaN(parsedPort) || parsedPort <= 0) {
      throw new TwitterTsError('Responses database port is invalid')
    }

    return parsedPort
  }

  public static printDebug(text: string, error?: Error): void {
    if (
      process.env.NODE_ENV !== 'development' &&
      process.env.NODE_ENV !== 'test'
    ) {
      return
    }
    if (error !== undefined) {
      console.error(`[TwitterTs@ResponseDatabase] ${text}`, error)
      return
    }

    console.debug(`[TwitterTs@ResponseDatabase] ${text}`)
  }
}
