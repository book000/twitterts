/* eslint-disable unicorn/prevent-abbreviations */
import { join, parse } from 'node:path'
import fs from 'node:fs'
import { Logger } from '@book000/node-utils'
import { ResponseDatabase } from './saving-responses'
import { HttpMethod, RequestType } from './scraper'
import { DBResponse } from './saving-responses/response-entity'

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
    const baseDirectory = join(parentDirectory, ...baseDirectories)
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
    const baseDirectory = join(parentDirectory, ...baseDirectories)
    return fs
      .readdirSync(baseDirectory, { withFileTypes: true })
      .filter((dirent) => dirent.isFile() && dirent.name.endsWith('.json'))
      .map((dirent) => join(baseDirectory, dirent.name))
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
      process.env.DEBUG_OUTPUT_DIRECTORY || './data/responses'

    logger.info('📁 Directories')
    logger.info(`  📂 Debug output: ${debugOutputDirectory}`)

    const responseDatabase = new ResponseDatabase()
    logger.info('Initialize responses database')
    const result = await responseDatabase.init()
    if (!result) {
      return
    }
    logger.info('Migrate responses database')
    await responseDatabase.migrate()
    logger.info('Sync responses database')
    await responseDatabase.sync()

    const dataSource = responseDatabase.getDataSource()

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
      let fileCount = 0
      let lastPercentage = 0
      const transactionStartTime = Date.now()
      await dataSource.transaction(async (transaction) => {
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

          const { name: fileName } = parse(path)
          const unixTime = Number.parseInt(fileName)
          const createdAt = new Date(unixTime)

          const dbResponse = new DBResponse()
          dbResponse.endpointType = endpointType
          dbResponse.method = endpointMethod
          dbResponse.endpoint = endpointName
          dbResponse.url = null
          dbResponse.urlHash = ''
          dbResponse.requestHeaders = null
          dbResponse.requestBody = null
          dbResponse.responseType = 'JSON'
          dbResponse.statusCode = endpointStatus
          dbResponse.responseHeaders = null
          dbResponse.responseBody = JSON.stringify(response)
          dbResponse.createdAt = createdAt
          await transaction.save(dbResponse).catch((error) => {
            if (
              error.message.includes('UNIQUE constraint failed') ||
              error.message.includes('Duplicate entry')
            ) {
              return
            }
            logger.error(`Failed to save response: ${path} (${error.message})`)
          })

          // 10% ごとにログを出力する
          const percentage = Math.floor((fileCount / jsonFiles.length) * 100)
          if (percentage % 10 === 0 && percentage !== lastPercentage) {
            logger.info(
              `⌛ [${fileCount}/${jsonFiles.length}] files saved (${percentage}%)`
            )
            lastPercentage = percentage
          }
        }

        logger.info(`📝 transaction finishing...`)
      })
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
  new MigrateSavedResponse().run()
})()
