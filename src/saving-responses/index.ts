import { DataSource } from 'typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { DBResponse } from './response-entity'
import { TwitterTsError } from '../models/exceptions'

interface AddResponseOptions {
  endpointType: string
  method: string
  endpoint: string
  url: string
  requestHeaders: string
  requestBody: string
  responseType: string
  statusCode: number
  responseHeaders: string
  responseBody: string
}

/**
 * レスポンスを保存するデータベース
 */
export class ResponsesDatabase {
  private dataSource: DataSource

  constructor() {
    const configuration = {
      DB_FILEPATH: process.env.RESPONSES_DB_FILEPATH,
      DB_HOSTNAME: process.env.RESPONSES_DB_HOSTNAME,
      DB_PORT: process.env.RESPONSES_DB_PORT,
      DB_USERNAME: process.env.RESPONSES_DB_USERNAME,
      DB_PASSWORD: process.env.RESPONSES_DB_PASSWORD,
      DB_DATABASE: process.env.RESPONSES_DB_DATABASE,
    }

    // DB_FILEPATHがある場合はSQLiteを使用する
    if (configuration.DB_FILEPATH !== undefined) {
      ResponsesDatabase.printDebug('Using SQLite for responses database')
      this.dataSource = new DataSource({
        type: 'sqlite',
        database: configuration.DB_FILEPATH,
        synchronize: true,
        logging: process.env.PRINT_DB_LOGS === 'true',
        namingStrategy: new SnakeNamingStrategy(),
        entities: [DBResponse],
        subscribers: [],
        migrations: [],
      })
      return
    }

    // DB_HOSTNAMEがある場合はMySQLを使用する
    if (configuration.DB_HOSTNAME === undefined) {
      throw new TwitterTsError('Responses database hostname is not specified')
    }
    ResponsesDatabase.printDebug('Using MySQL for responses database')

    // DB_PORTがintパースできない場合はエラー
    // DB_PORTがundefinedの場合はデフォルトポートを使用する
    const port = this.parsePort(configuration.DB_PORT)

    this.dataSource = new DataSource({
      type: 'mysql',
      host: configuration.DB_HOSTNAME || 'localhost',
      port,
      username: configuration.DB_USERNAME || 'root',
      password: configuration.DB_PASSWORD,
      database: configuration.DB_DATABASE || 'twitter-ts',
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
      ResponsesDatabase.printDebug('Responses database initialized')
      return true
    } catch (error) {
      ResponsesDatabase.printDebug(
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
    const response = new DBResponse()
    response.endpointType = options.endpointType
    response.method = options.method
    response.endpoint = options.endpoint
    response.url = options.url
    response.requestHeaders = options.requestHeaders
    response.requestBody = options.requestBody
    response.responseType = options.responseType
    response.statusCode = options.statusCode
    response.responseHeaders = options.responseHeaders
    response.responseBody = options.responseBody
    return response.save()
  }

  public async close(): Promise<void> {
    if (!this.dataSource.isInitialized) {
      throw new TwitterTsError('Responses database is not initialized')
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
    if (process.env.NODE_ENV !== 'development') {
      return
    }
    if (error !== undefined) {
      // eslint-disable-next-line no-console
      console.error(`[TwitterTs@ResponsesDatabase] ${text}`, error)
      return
    }
    // eslint-disable-next-line no-console
    console.debug(`[TwitterTs@ResponsesDatabase] ${text}`)
  }
}
