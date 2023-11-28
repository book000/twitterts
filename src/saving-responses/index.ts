import { DataSource } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { DBResponse } from './response-entity'
import { TwitterTsError } from '../models/exceptions'
import { HttpMethod, RequestType } from '../scraper'
import { GraphQLEndpoint } from '../models/responses/endpoints'
import crypto from 'node:crypto'

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

export interface ResponseEndPoint {
  endpointType: RequestType
  method: HttpMethod
  endpoint: GraphQLEndpoint
  statusCode: number
}
export type ResponseEndPointWithCount = ResponseEndPoint & { count: number }

interface GetResponseRangeOptions {
  page?: number
  limit?: number
}

/**
 * レスポンスを保存するデータベース
 */
export class ResponseDatabase {
  private dataSource: DataSource
  private partitions: string[] = []

  constructor(options: ResponseDatabaseOptions = {}) {
    const configuration = {
      DB_HOSTNAME: options.hostname || process.env.RESPONSE_DB_HOSTNAME,
      DB_PORT: options.port || process.env.RESPONSE_DB_PORT,
      DB_USERNAME: options.username || process.env.RESPONSE_DB_USERNAME,
      DB_PASSWORD: options.password || process.env.RESPONSE_DB_PASSWORD,
      DB_DATABASE: options.database || process.env.RESPONSE_DB_DATABASE,
    }

    // DB_PORTがintパースできない場合はエラー
    // DB_PORTがundefinedの場合はデフォルトポートを使用する
    const port = this.parsePort(configuration.DB_PORT)

    this.dataSource = new DataSource({
      type: 'mysql',
      host: configuration.DB_HOSTNAME,
      port,
      username: configuration.DB_USERNAME,
      password: configuration.DB_PASSWORD,
      database: configuration.DB_DATABASE,
      synchronize: true,
      logging: process.env.PRINT_DB_LOGS === 'true',
      namingStrategy: new SnakeNamingStrategy(),
      entities: [DBResponse],
      subscribers: [],
      migrations: [],
      timezone: '+09:00',
      supportBigNumbers: true,
      bigNumberStrings: true,
    })
  }

  /**
   * データソースを初期化する
   *
   * @returns 初期化に成功したかどうか
   */
  public async init(): Promise<boolean> {
    if (this.dataSource.isInitialized) {
      return true
    }
    try {
      await this.dataSource.initialize()
      ResponseDatabase.printDebug('Responses database initialized')
      return true
    } catch (error) {
      ResponseDatabase.printDebug(
        'Responses database initialization failed',
        error as Error
      )
      return false
    }
  }

  /**
   * データソースをマイグレーションする
   */
  public async migrate(): Promise<void> {
    if (!this.dataSource.isInitialized) {
      throw new TwitterTsError('Responses database is not initialized')
    }
    if (this.dataSource.migrations.length === 0) {
      return
    }
    await this.dataSource.runMigrations()
  }

  /**
   * データソーススキーマを同期する
   */
  public async sync(): Promise<void> {
    if (!this.dataSource.isInitialized) {
      throw new TwitterTsError('Responses database is not initialized')
    }
    await this.dataSource.synchronize()

    // 現在のパーティションを取得する
    this.partitions = await this.getPartitions()

    // パーティションの初期作成 (パーティションがひとつも設定されていない場合)
    if (this.partitions.length === 0) {
      await this.initPartition()
    }
  }

  /**
   * レスポンスを追加する
   *
   * @param options レスポンスの追加オプション
   * @returns 追加されたレスポンス
   */
  public async addResponse(
    options: AddResponseOptions
  ): Promise<DBResponse | undefined> {
    if (!this.dataSource.isInitialized) {
      throw new TwitterTsError('Responses database is not initialized')
    }
    const now = new Date()
    await this.addPartition(now)

    const response = new DBResponse()
    response.endpointType = options.endpointType
    response.method = options.method
    response.endpoint = options.endpoint
    response.url = options.url
    response.urlHash = crypto
      .createHash('sha256')
      .update(options.url || '')
      .digest('hex')
    response.requestHeaders = options.requestHeaders
    response.requestBody = options.requestBody
    response.responseType = options.responseType
    response.statusCode = options.statusCode
    response.responseHeaders = options.responseHeaders
    response.responseBody = options.responseBody
    response.createdAt = now
    return response.save().catch((error) => {
      if (error.code === 'ER_DUP_ENTRY') {
        // eslint-disable-next-line unicorn/no-useless-undefined
        return undefined
      }
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
    endpoint?: ResponseEndPoint | ResponseEndPoint[],
    rangeOptions?: GetResponseRangeOptions
  ): Promise<DBResponse[]> {
    if (!this.dataSource.isInitialized) {
      throw new TwitterTsError('Responses database is not initialized')
    }
    const options = rangeOptions || {}
    const page = options.page
    const limit = options.limit

    // ResponseEndPointWithCountで来る場合があるので、ResponseEndPointに変換する
    // 配列でない場合は配列に変換する
    const endpoints = endpoint
      ? Array.isArray(endpoint)
        ? endpoint.map((v) => ({
            endpointType: v.endpointType,
            method: v.method,
            endpoint: v.endpoint,
            statusCode: v.statusCode,
          }))
        : [
            {
              endpointType: endpoint.endpointType,
              method: endpoint.method,
              endpoint: endpoint.endpoint,
              statusCode: endpoint.statusCode,
            },
          ]
      : undefined
    if (page === undefined || limit === undefined) {
      return DBResponse.find({ where: endpoints, order: { id: 'DESC' } })
    }

    if (page <= 0 || limit <= 0) {
      throw new TwitterTsError(
        `Responses database range is invalid (page: ${page}, limit: ${limit})`
      )
    }

    return DBResponse.find({
      where: endpoints,
      order: { id: 'DESC' },
      skip: (page - 1) * limit,
      take: limit,
    })
  }

  /**
   * レスポンスの数を取得する
   *
   * @param endpoint エンドポイントの情報。指定しない場合はすべてのレスポンスを取得する
   * @returns レスポンスの数
   */
  public async getResponseCount(
    endpoint?: ResponseEndPoint | ResponseEndPoint[]
  ): Promise<number> {
    if (!this.dataSource.isInitialized) {
      throw new TwitterTsError('Responses database is not initialized')
    }
    const endpoints = endpoint
      ? Array.isArray(endpoint)
        ? endpoint
        : [endpoint]
      : undefined
    return DBResponse.count({ where: endpoints })
  }

  /**
   * エンドポイントを取得する
   */
  public async getEndpoints(): Promise<ResponseEndPointWithCount[]> {
    if (!this.dataSource.isInitialized) {
      throw new TwitterTsError('Responses database is not initialized')
    }
    // endpointType, endpointの組み合わせを取得する
    return DBResponse.createQueryBuilder()
      .groupBy('endpoint_type, method, endpoint, status_code')
      .select([
        'endpoint_type AS endpointType',
        'method',
        'endpoint',
        'status_code AS statusCode',
        'COUNT(*) AS count',
      ])
      .getRawMany<ResponseEndPointWithCount>()
  }

  /**
   * パーティションを取得する
   *
   * @returns パーティションの配列
   */
  private async getPartitions(): Promise<string[]> {
    if (!this.dataSource.isInitialized) {
      throw new TwitterTsError('Responses database is not initialized')
    }
    if (this.partitions.length > 0) {
      return this.partitions
    }
    const partitions = await this.dataSource.query(
      'SELECT PARTITION_NAME FROM INFORMATION_SCHEMA.PARTITIONS WHERE TABLE_NAME = "responses"'
    )
    this.partitions = partitions.map((v: { PARTITION_NAME: string }) => {
      return v.PARTITION_NAME
    })
    return this.partitions
  }

  /**
   * 日付パーティションを追加する
   *
   * @param date 日付
   */
  public async addPartition(date: Date): Promise<void> {
    if (!this.dataSource.isInitialized) {
      throw new TwitterTsError('Responses database is not initialized')
    }
    // pYYYYMMの形式でパーティションを作成する
    const partitionName = `p${date.toISOString().slice(0, 7).replace('-', '')}`
    if (this.partitions.includes(partitionName)) {
      return
    }
    await this.dataSource.query(
      `ALTER TABLE responses ADD PARTITION (PARTITION ${partitionName} VALUES LESS THAN ('${date
        .toISOString()
        .slice(0, 10)}'))`
    )
    this.partitions.push(partitionName)
  }

  /**
   * 日付パーティションを初期化する
   */
  public async initPartition(): Promise<void> {
    if (!this.dataSource.isInitialized) {
      throw new TwitterTsError('Responses database is not initialized')
    }
    const partitionName = 'pmax'
    if (this.partitions.includes(partitionName)) {
      return
    }
    await this.dataSource.query(
      `ALTER TABLE responses PARTITION BY RANGE (TO_DAYS(createdAt)) (PARTITION ${partitionName} VALUES LESS THAN MAXVALUE)`
    )
    this.partitions.push(partitionName)
  }

  public async close(): Promise<void> {
    if (!this.dataSource.isInitialized) {
      return
    }
    await this.dataSource.destroy()
  }

  public isInitialized(): boolean {
    return this.dataSource.isInitialized
  }

  /**
   * データソースを取得する
   *
   * @returns データソース
   */
  public getDataSource(): DataSource {
    return this.dataSource
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
      // eslint-disable-next-line no-console
      console.error(`[TwitterTs@ResponseDatabase] ${text}`, error)
      return
    }
    // eslint-disable-next-line no-console
    console.debug(`[TwitterTs@ResponseDatabase] ${text}`)
  }
}
