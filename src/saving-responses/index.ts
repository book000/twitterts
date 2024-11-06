import { TwitterTsError } from '../models/exceptions'
import { HttpMethod, RequestType } from '../scraper'
import { GraphQLEndpoint } from '../models/responses/endpoints'
import crypto from 'node:crypto'
import {
  createPool,
  format,
  Pool,
  ResultSetHeader,
  RowDataPacket,
} from 'mysql2/promise'
import { ulid } from 'ulid'
import { Schema } from 'genson-js/dist'
import stringify from 'json-stable-stringify'

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
  id: string
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

interface DBSchema extends RowDataPacket {
  endpointType: RequestType
  method: HttpMethod
  endpoint: string
  url: string | null
  urlHash: string
  statusCode: number
  schema: string
  schema_hash: string
  isError: 0 | 1
}

interface CountResponse extends RowDataPacket {
  count: number
}

export interface EndPoint {
  endpointType: RequestType
  method: HttpMethod
  endpoint: GraphQLEndpoint
  statusCode: number
}

interface EndPointResponse extends RowDataPacket {
  endpointType: RequestType
  method: HttpMethod
  endpoint: GraphQLEndpoint
  statusCode: number
}

export interface EndPointWithCount {
  endpointType: RequestType
  method: HttpMethod
  endpoint: GraphQLEndpoint
  statusCode: number
  count: number
}

interface partitionNameRow extends RowDataPacket {
  PARTITION_NAME: string | null
}

export interface BulkAddTypeRecord {
  response: DBResponse
  schema: Schema
  isErrorResponse: boolean
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
    const responsesTableName = 'responses'
    const createResponsesTableSql =
      'CREATE TABLE `' +
      responsesTableName +
      '` (' +
      "  `id` char(36) NOT NULL COMMENT 'ID'," +
      "  `endpoint_type` varchar(10) NOT NULL COMMENT 'エンドポイントの種別'," +
      "  `method` varchar(10) NOT NULL COMMENT 'エンドポイントのメソッド'," +
      "  `endpoint` varchar(255) NOT NULL COMMENT 'エンドポイントの名前'," +
      "  `url` text DEFAULT NULL COMMENT 'リクエストURL'," +
      "  `url_hash` varchar(64) NOT NULL COMMENT 'リクエストURLのハッシュ値'," +
      "  `request_headers` longtext DEFAULT NULL COMMENT 'リクエストヘッダー'," +
      "  `request_body` longtext DEFAULT NULL COMMENT 'リクエストボディ'," +
      "  `response_type` varchar(10) NOT NULL COMMENT 'レスポンスの種別'," +
      "  `status_code` int(11) NOT NULL COMMENT 'レスポンスのステータスコード'," +
      "  `response_headers` longtext DEFAULT NULL COMMENT 'レスポンスヘッダー'," +
      "  `response_body` longtext NOT NULL COMMENT 'レスポンスボディ'," +
      "  `created_at` datetime(3) NOT NULL COMMENT 'データ登録日時' DEFAULT CURRENT_TIMESTAMP(3)," +
      '  PRIMARY KEY (`created_at`),' +
      '  UNIQUE KEY `unique_response` (`endpoint_type`,`method`,`endpoint`,`url_hash`,`created_at`),' +
      '  KEY `idx_id` (`id`),' +
      '  KEY `idx_id_createdat` (`id`,`created_at`),' +
      '  KEY `idx_endpoint_method_status` (`endpoint_type`,`method`,`endpoint`,`status_code`)' +
      ') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci'

    // responsesテーブルが存在しない場合はテーブルを作成する
    const [tables] = await this.pool.query<InformationSchemaTable[]>(
      'SELECT table_name FROM information_schema.tables WHERE table_schema = :database AND table_name = :tableName',
      {
        database: process.env.RESPONSE_DB_DATABASE,
        tableName: responsesTableName,
      }
    )
    await (tables.length === 0
      ? this.pool.query(createResponsesTableSql)
      : Promise.resolve())

    // schemataテーブルが存在しない場合はテーブルを作成する
    const schemataTableName = 'schemata'
    const createSchemataTableSql =
      'CREATE TABLE `' +
      schemataTableName +
      '` (' +
      "  `id` char(36) NOT NULL COMMENT 'ID'," +
      "  `endpoint_type` varchar(10) NOT NULL COMMENT 'エンドポイントの種別'," +
      "  `method` varchar(10) NOT NULL COMMENT 'エンドポイントのメソッド'," +
      "  `endpoint` varchar(255) NOT NULL COMMENT 'エンドポイントの名前'," +
      "  `url` text DEFAULT NULL COMMENT 'リクエストURL'," +
      "  `url_hash` varchar(64) NOT NULL COMMENT 'リクエストURLのハッシュ値'," +
      "  `status_code` int(11) NOT NULL COMMENT 'レスポンスのステータスコード'," +
      "  `schema` longtext NOT NULL COMMENT '生成された型データ'," +
      "  `schema_hash` varchar(64) NOT NULL COMMENT '生成された型データのハッシュ値'," +
      "  `is_error` tinyint(1) NOT NULL COMMENT 'エラーレスポンスかどうか'," +
      '  PRIMARY KEY (`id`),' +
      '  UNIQUE KEY `unique_schema` (`endpoint_type`,`method`,`endpoint`,`url_hash`,`status_code`,`schema_hash`),' +
      '  KEY `idx_endpoint_method_status_schemata` (`endpoint_type`,`method`,`endpoint`,`status_code`)' +
      ') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci'

    const [schemataTables] = await this.pool.query<InformationSchemaTable[]>(
      'SELECT table_name FROM information_schema.tables WHERE table_schema = :database AND table_name = :tableName',
      {
        database: process.env.RESPONSE_DB_DATABASE,
        tableName: schemataTableName,
      }
    )

    await (schemataTables.length === 0
      ? this.pool.query(createSchemataTableSql)
      : Promise.resolve())

    // schema_mappingテーブルが存在しない場合はテーブルを作成する
    // schema_id は schemata テーブルの id に対応する。schemata テーブルの当該レコードが削除された場合は schema_mapping テーブルの当該レコードも削除する
    // responses テーブルと response_id の間にはリレーションシップを作れない（パーティションのため）。
    const schemaMappingTableName = 'schema_mapping'
    const createSchemaMappingTableSql =
      'CREATE TABLE `' +
      schemaMappingTableName +
      '` (' +
      "  `response_id` char(36) NOT NULL COMMENT 'responses テーブルの該当レコード ID'," +
      "  `schema_id` char(36) NOT NULL COMMENT 'schemata テーブルの該当レコード ID'," +
      '  FOREIGN KEY (`schema_id`) REFERENCES schemata(`id`) ON DELETE CASCADE,' +
      '  PRIMARY KEY (`response_id`,`schema_id`),' +
      '  KEY `idx_response_id` (`response_id`),' +
      '  KEY `idx_schema_id` (`schema_id`)' +
      ') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci'

    const [schemataMappingTables] = await this.pool.query<
      InformationSchemaTable[]
    >(
      'SELECT table_name FROM information_schema.tables WHERE table_schema = :database AND table_name = :tableName',
      {
        database: process.env.RESPONSE_DB_DATABASE,
        tableName: schemaMappingTableName,
      }
    )

    await (schemataMappingTables.length === 0
      ? this.pool.query(createSchemaMappingTableSql)
      : Promise.resolve())

    await this.migrateTable()

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
  private async migrateTable(): Promise<Record<string, string>> {
    const migrationProcesses = [
      'Table:responses, Check PRIMARY KEY',
      'Table:responses, Check UNIQUE KEY',
      'Table:responses, Check INDEX',
      'Table:schemata, Check PRIMARY KEY',
      'Table:schemata, Check UNIQUE KEY',
      'Table:schema_mapping, Check PRIMARY KEY',
      'Table:schema_mapping, Check INDEX',
    ] as const
    const migrationResults: {
      [key in (typeof migrationProcesses)[number]]: string
    } = (() => {
      const acc: { [key in (typeof migrationProcesses)[number]]: string } =
        {} as any
      for (const process of migrationProcesses) {
        acc[process] = 'UNKNOWN'
      }
      return acc
    })()

    // --- responses テーブル ---
    // PRIMARY KEY の確認。存在し、created_at が PRIMARY KEY になっていることを確認する
    // PRIMARY KEY が存在しない場合は作成する
    // PRIMARY KEY が created_at ではない場合は created_at に変更する
    const [primaryKeyResults] = await this.pool.query<InformationSchemaTable[]>(
      'SELECT * FROM information_schema.KEY_COLUMN_USAGE WHERE TABLE_NAME = "responses" AND CONSTRAINT_NAME = "PRIMARY"'
    )
    if (primaryKeyResults.length === 0) {
      await this.pool.query(
        'ALTER TABLE responses ADD PRIMARY KEY (id), DROP PRIMARY KEY created_at'
      )
      migrationResults['Table:responses, Check PRIMARY KEY'] = 'ALTERED'
    }
    if (
      primaryKeyResults.length === 1 &&
      primaryKeyResults[0].COLUMN_NAME !== 'created_at'
    ) {
      await this.pool.query(
        'ALTER TABLE responses DROP PRIMARY KEY, ADD PRIMARY KEY (created_at)'
      )
      migrationResults['Table:responses, Check PRIMARY KEY'] =
        'DROP_AND_ALTERED'
    }

    // UNIQUE KEY の確認。存在し、unique_response が UNIQUE KEY になっていることを確認する
    // UNIQUE KEY が存在しない場合は作成する
    const [uniqueKeyResults] = await this.pool.query<InformationSchemaTable[]>(
      'SELECT * FROM information_schema.KEY_COLUMN_USAGE WHERE TABLE_NAME = "responses" AND CONSTRAINT_NAME = "unique_response"'
    )
    if (uniqueKeyResults.length === 0) {
      await this.pool.query(
        'ALTER TABLE responses ADD UNIQUE KEY unique_response (endpoint_type, method, endpoint, url_hash, created_at)'
      )
      migrationResults['Table:responses, Check UNIQUE KEY'] = 'ALTERED'
    }

    // INDEX の確認
    // idx_id が存在することを確認する。存在しない場合は作成する
    // 生成に時間がかかりすぎるためコメントアウト
    /*
    const [idxIdResults] = await this.pool.query<InformationSchemaTable[]>(
      'SELECT * FROM information_schema.STATISTICS WHERE TABLE_NAME = "responses" AND INDEX_NAME = "idx_id"'
    )
    if (idxIdResults.length === 0) {
      await this.pool.query('CREATE INDEX idx_id ON responses (id)')
      migrationResults['Table:responses, Check INDEX'] = 'CREATED'
    }
    */

    // idx_id_createdat が存在することを確認する。存在しない場合は作成する
    const [idxIdCreatedAtResults] = await this.pool.query<
      InformationSchemaTable[]
    >(
      'SELECT * FROM information_schema.STATISTICS WHERE TABLE_NAME = "responses" AND INDEX_NAME = "idx_id_createdat"'
    )
    if (idxIdCreatedAtResults.length === 0) {
      await this.pool.query(
        'CREATE INDEX idx_id_createdat ON responses (id, created_at)'
      )
      migrationResults['Table:responses, Check INDEX'] = 'CREATED'
    }

    // idx_endpoint_method_status が存在することを確認する。存在しない場合は作成する
    const [idxEndpointMethodStatusResults] = await this.pool.query<
      InformationSchemaTable[]
    >(
      'SELECT * FROM information_schema.STATISTICS WHERE TABLE_NAME = "responses" AND INDEX_NAME = "idx_endpoint_method_status"'
    )
    if (idxEndpointMethodStatusResults.length === 0) {
      await this.pool.query(
        'CREATE INDEX idx_endpoint_method_status ON responses (endpoint_type, method, endpoint, status_code)'
      )
      migrationResults['Table:responses, Check INDEX'] = 'CREATED'
    }

    // --- schemata テーブル ---
    // PRIMARY KEY の確認。存在し、id が PRIMARY KEY になっていることを確認する
    // PRIMARY KEY が存在しない場合は作成する
    // PRIMARY KEY が id ではない場合は id に変更する
    const [schemataPrimaryKeyResults] = await this.pool.query<
      InformationSchemaTable[]
    >(
      'SELECT * FROM information_schema.KEY_COLUMN_USAGE WHERE TABLE_NAME = "schemata" AND CONSTRAINT_NAME = "PRIMARY"'
    )
    if (schemataPrimaryKeyResults.length === 0) {
      await this.pool.query('ALTER TABLE schemata ADD PRIMARY KEY (id)')
      migrationResults['Table:schemata, Check PRIMARY KEY'] = 'ALTERED'
    }
    if (
      schemataPrimaryKeyResults.length === 1 &&
      schemataPrimaryKeyResults[0].COLUMN_NAME !== 'id'
    ) {
      await this.pool.query(
        'ALTER TABLE schemata DROP PRIMARY KEY, ADD PRIMARY KEY (id)'
      )
      migrationResults['Table:schemata, Check PRIMARY KEY'] = 'DROP_AND_ALTERED'
    }

    // UNIQUE KEY の確認。存在し、unique_schema が UNIQUE KEY になっていることを確認する
    // UNIQUE KEY が存在しない場合は作成する
    const [schemataUniqueKeyResults] = await this.pool.query<
      InformationSchemaTable[]
    >(
      'SELECT * FROM information_schema.KEY_COLUMN_USAGE WHERE TABLE_NAME = "schemata" AND CONSTRAINT_NAME = "unique_schema"'
    )
    if (schemataUniqueKeyResults.length === 0) {
      await this.pool.query(
        'ALTER TABLE schemata ADD UNIQUE KEY unique_schema (endpoint_type, method, endpoint, url_hash, status_code, schema_hash)'
      )
      migrationResults['Table:schemata, Check UNIQUE KEY'] = 'ALTERED'
    }

    // --- schema_mapping テーブル ---
    // PRIMARY KEY の確認。存在し、response_id が PRIMARY KEY になっていることを確認する
    // PRIMARY KEY が存在しない場合は作成する
    // PRIMARY KEY が response_id ではない場合は response_id に変更する
    const [schemaMappingPrimaryKeyResults] = await this.pool.query<
      InformationSchemaTable[]
    >(
      'SELECT * FROM information_schema.KEY_COLUMN_USAGE WHERE TABLE_NAME = "schema_mapping" AND CONSTRAINT_NAME = "PRIMARY"'
    )
    if (schemaMappingPrimaryKeyResults.length === 0) {
      await this.pool.query(
        'ALTER TABLE schema_mapping ADD PRIMARY KEY (response_id, schema_id)'
      )
      migrationResults['Table:schema_mapping, Check PRIMARY KEY'] = 'ALTERED'
    }
    if (
      schemaMappingPrimaryKeyResults.length === 1 &&
      schemaMappingPrimaryKeyResults[0].COLUMN_NAME !== 'response_id'
    ) {
      await this.pool.query(
        'ALTER TABLE schema_mapping DROP PRIMARY KEY, ADD PRIMARY KEY (response_id, schema_id)'
      )
      migrationResults['Table:schema_mapping, Check PRIMARY KEY'] =
        'DROP_AND_ALTERED'
    }

    // INDEX の確認
    // idx_response_id が存在することを確認する。存在しない場合は作成する
    const [schemaMappingIdxResponseIdResults] = await this.pool.query<
      InformationSchemaTable[]
    >(
      'SELECT * FROM information_schema.STATISTICS WHERE TABLE_NAME = "schema_mapping" AND INDEX_NAME = "idx_response_id"'
    )
    if (schemaMappingIdxResponseIdResults.length === 0) {
      await this.pool.query(
        'CREATE INDEX idx_response_id ON schema_mapping (response_id)'
      )
      migrationResults['Table:schema_mapping, Check INDEX'] = 'CREATED'
    }

    // idx_schema_id が存在することを確認する。存在しない場合は作成する
    const [schemaMappingIdxSchemaIdResults] = await this.pool.query<
      InformationSchemaTable[]
    >(
      'SELECT * FROM information_schema.STATISTICS WHERE TABLE_NAME = "schema_mapping" AND INDEX_NAME = "idx_schema_id"'
    )
    if (schemaMappingIdxSchemaIdResults.length === 0) {
      await this.pool.query(
        'CREATE INDEX idx_schema_id ON schema_mapping (schema_id)'
      )
      migrationResults['Table:schema_mapping, Check INDEX'] = 'CREATED'
    }

    return migrationResults
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

    const insertSql = `INSERT
        IGNORE INTO responses
      SET
        id = :id,
        endpoint_type = :endpointType,
        method = :method,
        endpoint = :endpoint,
        url = :url,
        url_hash = :urlHash,
        request_headers = :requestHeaders,
        request_body = :requestBody,
        response_type = :responseType,
        status_code = :statusCode,
        response_headers = :responseHeaders,
        response_body = :responseBody,
        created_at = :createdAt`
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
   * @deprecated 単一エンドポイントのスキーマを生成する場合にはこのメソッドは推奨されません。代わりに getSchemata を使用してください。
   */
  public async getResponses(
    endpoint: EndPoint,
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
            id,
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
            responses USE INDEX (idx_endpoint_method_status)
        WHERE
            endpoint_type = :endpointType
            AND method = :method
            AND endpoint = :endpoint
            AND status_code = :statusCode`,
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
            id,
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
            responses USE INDEX (idx_endpoint_method_status)
        WHERE
            endpoint_type = :endpointType
            AND method = :method
            AND endpoint = :endpoint
            AND status_code = :statusCode
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
   * @deprecated 単一エンドポイントのスキーマを生成する場合にはこのメソッドは推奨されません。代わりに getSchemata を使用してください。
   */
  public async getResponseCount(endpoint: EndPoint): Promise<number> {
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
      'SELECT COUNT(*) AS count FROM responses WHERE endpoint_type = :endpointType AND method = :method AND endpoint = :endpoint AND status_code = :statusCode',
      endpointValue
    )

    return results[0].count
  }

  /**
   * スキーマを取得する
   *
   * @param endpoint エンドポイントの情報。指定しない場合はすべてのスキーマを取得する
   * @param rangeOptions 取得するスキーマの範囲
   *
   * @returns スキーマの配列
   */
  public async getSchemata(
    endpoint: EndPoint,
    rangeOptions?: GetResponseRangeOptions
  ): Promise<DBSchema[]> {
    if (!this.initialized) {
      throw new TwitterTsError('Responses database is not initialized')
    }
    const options = rangeOptions ?? {}
    const page = options.page
    const limit = options.limit

    // SchemaEndPointWithCountで来る場合があるので、SchemaEndPointに変換する
    const endpointValue = {
      endpointType: endpoint.endpointType,
      method: endpoint.method,
      endpoint: endpoint.endpoint,
      statusCode: endpoint.statusCode,
    }
    if (page === undefined || limit === undefined) {
      const [results] = await this.pool.query<DBSchema[]>(
        `SELECT
            endpoint_type AS endpointType,
            method,
            endpoint,
            url,
            url_hash AS urlHash,
            status_code AS statusCode,
            \`schema\`,
            schema_hash AS schemaHash,
            is_error AS isError
        FROM
            schemata USE INDEX (idx_endpoint_method_status_schemata)
        WHERE
            endpoint_type = :endpointType
            AND method = :method
            AND endpoint = :endpoint
            AND status_code = :statusCode`,
        endpointValue
      )

      return results
    }

    if (page <= 0 || limit <= 0) {
      throw new TwitterTsError(
        `Responses database range is invalid (page: ${page}, limit: ${limit})`
      )
    }

    const [results] = await this.pool.query<DBSchema[]>(
      `SELECT
            endpoint_type AS endpointType,
            method,
            endpoint,
            url,
            url_hash AS urlHash,
            status_code AS statusCode,
            \`schema\`,
            schema_hash AS schemaHash,
            is_error AS isError
        FROM
            schemata USE INDEX (idx_endpoint_method_status_schemata)
        WHERE
            endpoint_type = :endpointType
            AND method = :method
            AND endpoint = :endpoint
            AND status_code = :statusCode
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
   * スキーマの数を取得する
   *
   * @param endpoint エンドポイントの情報。指定しない場合はすべてのスキーマを取得する
   * @returns スキーマの数
   */
  public async getSchemaCount(endpoint: EndPoint): Promise<number> {
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
      'SELECT COUNT(*) AS count FROM schemata WHERE endpoint_type = :endpointType AND method = :method AND endpoint = :endpoint AND status_code = :statusCode',
      endpointValue
    )

    return results[0].count
  }

  /**
   * エンドポイントを取得する
   */
  public async getEndpoints(
    filterEndpointType: RequestType | null = null
  ): Promise<EndPointWithCount[]> {
    if (!this.initialized) {
      throw new TwitterTsError('Responses database is not initialized')
    }

    // エンドポイント一覧を取得する
    let sql =
      'SELECT DISTINCT endpoint_type AS endpointType, method, endpoint, status_code AS statusCode FROM schemata'
    if (filterEndpointType !== null) {
      sql += ' WHERE endpoint_type = :endpointType'
    }
    const [results] = await this.pool.query<EndPointResponse[]>(
      sql,
      filterEndpointType === null ? {} : { endpointType: filterEndpointType }
    )

    const schemaEndpoints: EndPointWithCount[] = await Promise.all(
      results.map(async (result) => {
        const count = await this.getSchemaCount(result)
        return {
          ...result,
          count,
        }
      })
    )

    return schemaEndpoints
  }

  /**
   * 型が生成されていないレスポンスを取得する。responseTypeがJSONのもののみ取得する
   */
  public async getNotGeneratedSchemaResponses(
    limit: number
  ): Promise<DBResponse[]> {
    if (!this.initialized) {
      throw new TwitterTsError('Responses database is not initialized')
    }

    const [results] = await this.pool.query<DBResponse[]>(
      `SELECT
        r.id,
        r.endpoint_type AS endpointType,
        r.method,
        r.endpoint,
        r.url,
        r.url_hash AS urlHash,
        r.request_headers AS requestHeaders,
        r.request_body AS requestBody,
        r.response_type AS responseType,
        r.status_code AS statusCode,
        r.response_headers AS responseHeaders,
        r.response_body AS responseBody,
        r.created_at AS createdAt
      FROM
        responses r
      LEFT JOIN
        schema_mapping tm
      ON
        r.id = tm.response_id
      WHERE
        tm.response_id IS NULL
        AND r.response_type = 'JSON'
        AND r.response_body IS NOT NULL
        AND r.response_body != ''
      LIMIT
        :limit`,
      { limit }
    )

    return results
  }

  /**
   * 型が生成されていないレスポンスの数を取得する。responseTypeがJSONのもののみ取得する
   *
   * @returns レスポンスの数
   */
  public async getNotGeneratedSchemaResponseCount(): Promise<number> {
    if (!this.initialized) {
      throw new TwitterTsError('Responses database is not initialized')
    }

    const [results] = await this.pool.query<CountResponse[]>(
      `SELECT
        COUNT(*) AS count
      FROM
        responses r
      LEFT JOIN
        schema_mapping tm
      ON
        r.id = tm.response_id
      WHERE
        tm.response_id IS NULL
        AND r.response_type = 'JSON'
        AND r.response_body IS NOT NULL
        AND r.response_body != ''`
    )

    return results[0].count
  }

  /**
   * 型を追加する処理を一括実行する
   */
  public async bulkAddSchema(records: BulkAddTypeRecord[]): Promise<void> {
    if (!this.initialized) {
      throw new TwitterTsError('Responses database is not initialized')
    }

    // schemataテーブルに追加する。すでに存在する場合は無視する
    const insertSchemataSql =
      'INSERT IGNORE INTO schemata (`id`, `endpoint_type`, `method`, `endpoint`, `url`, `url_hash`, `status_code`, `schema`, `schema_hash`, `is_error`) VALUES ?'
    const schemataRecords = records.map((record) => {
      const schemaJson = stringify(record.schema)
      return [
        ulid(),
        record.response.endpointType,
        record.response.method,
        record.response.endpoint,
        record.response.url,
        record.response.urlHash,
        record.response.statusCode,
        schemaJson,
        crypto.createHash('sha256').update(schemaJson).digest('hex'),
        record.isErrorResponse ? 1 : 0,
      ]
    })
    const insertSchemataFormattedSql = format(insertSchemataSql, [
      schemataRecords,
    ])
    await this.pool.execute({
      sql: insertSchemataFormattedSql,
      namedPlaceholders: false,
    })

    // schema_mappingテーブルに追加する。すでに存在する場合は無視する
    const insertSchemaMappingSql = `INSERT
        IGNORE INTO schema_mapping
      SET
        response_id = :responseId,
        schema_id = (
          SELECT
            id
          FROM
            schemata
          WHERE
            endpoint_type = :endpointType
            AND method = :method
            AND endpoint = :endpoint
            AND url_hash = :urlHash
            AND status_code = :statusCode
            AND schema_hash = :schemaHash
        )`
    for (const record of records) {
      await this.pool.query(insertSchemaMappingSql, {
        responseId: record.response.id,
        endpointType: record.response.endpointType,
        method: record.response.method,
        endpoint: record.response.endpoint,
        urlHash: record.response.urlHash,
        statusCode: record.response.statusCode,
        schemaHash: crypto
          .createHash('sha256')
          .update(stringify(record.schema))
          .digest('hex'),
      })
    }
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
   * テーブルのレコードを最適化する。以下の処理を行う
   * - schema_mapping テーブルのレコードのうち、responses テーブルに存在しない response_id を持つレコードを削除する
   * - schemata テーブルのレコードのうち、schema_mapping テーブルに存在しない schema_id を持つレコードを削除する
   */
  public async optimizeTableRecords(): Promise<{
    deletedTypeMappingCount: number
    deletedSchemataCount: number
  }> {
    if (!this.initialized) {
      throw new TwitterTsError('Responses database is not initialized')
    }
    // schema_mapping テーブルのレコードのうち、responses テーブルに存在しない response_id を持つレコードを削除する
    const [deletedTypeMappingRows] = await this.pool.query<ResultSetHeader>(
      `DELETE tm FROM schema_mapping tm LEFT JOIN responses r ON tm.response_id = r.id WHERE r.id IS NULL`
    )

    // schemata テーブルのレコードのうち、schema_mapping テーブルに存在しない schema_id を持つレコードを削除する
    const [deletedSchemataRows] = await this.pool.query<ResultSetHeader>(
      `DELETE s FROM schemata s LEFT JOIN schema_mapping tm ON s.id = tm.schema_id WHERE tm.schema_id IS NULL`
    )

    const deletedTypeMappingCount = deletedTypeMappingRows.affectedRows
    const deletedSchemataCount = deletedSchemataRows.affectedRows

    return {
      deletedTypeMappingCount,
      deletedSchemataCount,
    }
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
