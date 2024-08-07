import nodePath from 'node:path'
import fs from 'node:fs'
import { Logger } from '@book000/node-utils'
import { ResponseDatabase } from './saving-responses'
import { HttpMethod, RequestType } from './scraper'
import mysql2 from 'mysql2/promise'

interface EndPointFolder {
  /**
   * エンドポイントの種別（graphql または rest）
   */
  type: string

  /**
   * レスポンスの名前
   */
  name: string

  /**
   * レスポンスの HTTP メソッド
   */
  method: string

  /**
   * レスポンスのステータスコード
   */
  statusCode: string
}

interface ResponseType {
  endpointType: RequestType
  method: HttpMethod
  endpoint: string
  url: string | null
  urlHash: string
  requestHeaders: string | null
  requestBody: string | null
  responseType: 'JSON' | 'TEXT'
  statusCode: number
  responseHeaders: string | null
  responseBody: string
  createdAt: Date
}

/**
 * ファイルで保存していたレスポンスをDBに移行する
 */
class MigrateSavedResponse {
  /**
   * ディレクトリ内にあるディレクトリ群のディレクトリ名を取得する
   *
   * @param parentDirectory ディレクトリを取得する親ディレクトリパス
   * @param baseDirectories ディレクトリを取得する子ディレクトリパス群
   * @returns ディレクトリ群のディレクトリ名
   */
  getDirectories(
    parentDirectory: string,
    baseDirectories: string[] = []
  ): string[] {
    const baseDirectory = nodePath.join(parentDirectory, ...baseDirectories)
    return fs
      .readdirSync(baseDirectory, {
        withFileTypes: true,
      })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)
  }

  /**
   * ディレクトリ内にある JSON ファイル群を取得する
   *
   * @param parentDirectory ファイルを取得する親ディレクトリパス
   * @param baseDirectories ファイルを取得するディレクトリパス
   * @returns JSON ファイルのフルパス群
   */
  getJSONFiles(
    parentDirectory: string,
    baseDirectories: string[] = []
  ): string[] {
    const baseDirectory = nodePath.join(parentDirectory, ...baseDirectories)
    return fs
      .readdirSync(baseDirectory, { withFileTypes: true })
      .filter((dirent) => dirent.isFile() && dirent.name.endsWith('.json'))
      .map((dirent) => nodePath.join(baseDirectory, dirent.name))
  }

  getEndPointFolders(debugOutputDirectory: string): EndPointFolder[] {
    const folders: EndPointFolder[] = []

    for (const type of this.getDirectories(debugOutputDirectory)) {
      for (const name of this.getDirectories(debugOutputDirectory, [type])) {
        for (const method of this.getDirectories(debugOutputDirectory, [
          type,
          name,
        ])) {
          for (const statusCode of this.getDirectories(debugOutputDirectory, [
            type,
            name,
            method,
          ])) {
            folders.push({
              type,
              name,
              method,
              statusCode,
            })
          }
        }
      }
    }

    return folders
  }

  formatSeconds(seconds: number): string {
    const hour = Math.floor(seconds / 3600)
    const minute = Math.floor((seconds % 3600) / 60)
    const second = Math.floor(seconds % 60)
    return `${hour}:${minute}:${second}`
  }

  async run(): Promise<void> {
    const logger = Logger.configure('MigrateSavedResponse:run')

    const debugOutputDirectory =
      process.env.DEBUG_OUTPUT_DIRECTORY ?? './data/responses'

    logger.info('📁 Directories')
    logger.info(`  📂 Debug output: ${debugOutputDirectory}`)

    const responseDatabase = new ResponseDatabase()
    logger.info('🚀 Initialize responses database')
    const result = await responseDatabase.init()
    if (!result) {
      return
    }

    logger.info('🔍 Loading debug output folders')
    const startTime = Date.now()
    const endPointFolders = this.getEndPointFolders(debugOutputDirectory)
    const endTime = Date.now()
    const time = endTime - startTime
    logger.info(`🕐 ${time}ms`)
    logger.info(`🔍 ${endPointFolders.length} folders found`)

    logger.info('📝 Saving responses to database')
    let folderCount = 0
    for (const folder of endPointFolders) {
      folderCount++

      const endpointType: RequestType | null =
        folder.type.toLocaleLowerCase() === 'graphql'
          ? 'GRAPHQL'
          : folder.type.toLocaleLowerCase() === 'rest'
            ? 'REST'
            : null
      if (!endpointType) {
        throw new Error(`Invalid type: ${folder.type}`)
      }
      const endpointMethod: HttpMethod =
        folder.method.toUpperCase() as HttpMethod
      const endpointName = folder.name
      const endpointStatus = Number.parseInt(folder.statusCode)

      const jsonFiles = this.getJSONFiles(debugOutputDirectory, [
        folder.type,
        folder.name,
        folder.method,
        folder.statusCode,
      ])
      if (jsonFiles.length === 0) {
        continue
      }

      logger.info(
        `📁 [${folderCount}/${endPointFolders.length}] ${endpointType} ${endpointMethod} ${endpointName} ${endpointStatus} (${jsonFiles.length} files)`
      )
      const bulkInsertData: ResponseType[] = []
      const transactionStartTime = Date.now()
      let fileCount = 0
      for (const path of jsonFiles) {
        fileCount++
        // JSONC ファイルを読み込む
        const data = fs
          .readFileSync(path, 'utf8')
          .split('\n')
          .filter((line) => !line.startsWith('//'))
          .join('\n')
          .trim()
        const response = this.parse(path, data)
        if (!response) {
          continue
        }

        const { name: fileName } = nodePath.parse(path)
        const unixTime = Number.parseInt(fileName)
        const createdAt = new Date(unixTime)

        bulkInsertData.push({
          endpointType,
          method: endpointMethod,
          endpoint: endpointName,
          url: null,
          urlHash: '',
          requestHeaders: null,
          requestBody: null,
          responseType: 'JSON',
          statusCode: endpointStatus,
          responseHeaders: null,
          responseBody: JSON.stringify(response),
          createdAt,
        })

        await responseDatabase.addPartition(createdAt)

        // 100件ごとに保存する
        if (bulkInsertData.length === 100) {
          logger.info(
            `📝 [${fileCount}/${jsonFiles.length}] Bulk inserting responses to database`
          )
          await this.bulkInsert(responseDatabase, bulkInsertData)
          bulkInsertData.length = 0
        }
      }

      if (bulkInsertData.length > 0) {
        logger.info(
          `📝 [${fileCount}/${jsonFiles.length}] Bulk inserting responses to database`
        )
        await this.bulkInsert(responseDatabase, bulkInsertData)
        bulkInsertData.length = 0
      }

      const transactionEndTime = Date.now()
      const transactionTime = transactionEndTime - transactionStartTime
      logger.info(
        `✅ [${folderCount}/${
          endPointFolders.length
        }] transaction finished (${this.formatSeconds(transactionTime / 1000)})`
      )
    }

    logger.info('📝 Saving responses to database finished')

    logger.info('🔚 Closing responses database')
    await responseDatabase.close()
    logger.info('✅ Closed responses database')
  }

  async bulkInsert(
    responseDatabase: ResponseDatabase,
    bulkInsertData: ResponseType[]
  ): Promise<void> {
    const logger = Logger.configure('MigrateSavedResponse:bulkInsert')
    const pool = responseDatabase.getPool()
    const bulkInsertStartTime = Date.now()

    await pool.beginTransaction()
    const sql = mysql2.format(
      `INSERT IGNORE INTO responses (endpointType, method, endpoint, url, urlHash, requestHeaders, requestBody, responseType, statusCode, responseHeaders, responseBody, createdAt) VALUES ?`,
      [
        bulkInsertData.map((data) => {
          return [
            data.endpointType,
            data.method,
            data.endpoint,
            data.url,
            data.urlHash,
            data.requestHeaders,
            data.requestBody,
            data.responseType,
            data.statusCode,
            data.responseHeaders,
            data.responseBody,
            data.createdAt,
          ]
        }),
      ]
    )

    await pool.query(sql).catch((error: unknown) => {
      logger.error('Failed to insert responses', error as Error)
    })
    const bulkInsertEndTime = Date.now()
    const bulkInsertTime = bulkInsertEndTime - bulkInsertStartTime
    logger.info(
      `✅ Bulk inserted responses to database (${this.formatSeconds(
        bulkInsertTime / 1000
      )})`
    )
  }

  parse(path: string, data: string): unknown {
    try {
      return JSON.parse(data)
    } catch (error) {
      const logger = Logger.configure('MigrateSavedResponse:parse')
      logger.error(`Failed to parse JSON: ${path}`, error as Error)
      return null
    }
  }
}

;(async () => {
  await new MigrateSavedResponse().run()
})()
