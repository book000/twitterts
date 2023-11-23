import { Options } from 'json-schema-to-typescript'
import { basename, join } from 'node:path'
import fs from 'node:fs'
import { parse } from 'jsonc-parser'
import { Logger } from '@book000/node-utils'

/**
 * レスポンスファイル群からの、エンドポイントごとのレスポンス群型
 */
export interface Result {
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

  /**
   * このエンドポイントに該当するレスポンスのパス群
   */
  paths: string[]
}

/**
 * ユーティリティ
 */
export const Utils = {
  /**
   * JSONC をパースする
   *
   * @param data パースする JSONC 文字列
   * @returns パース結果
   */
  parseJsonc<T = any>(data: string): T {
    return parse(data)
  },

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
  },

  /**
   * ディレクトリ内にある JSON ファイル群を取得する
   *
   * @param parentDirectory ファイルを取得する親ディレクトリパス
   * @param baseDirectories ファイルを取得するディレクトリパス
   * @returns JSON ファイル群
   */
  getJSONFiles(
    parentDirectory: string,
    baseDirectories: string[] = []
  ): string[] {
    const baseDirectory = join(parentDirectory, ...baseDirectories)
    return fs
      .readdirSync(baseDirectory, { withFileTypes: true })
      .filter((dirent) => dirent.isFile() && dirent.name.endsWith('.json'))
      .map((dirent) => dirent.name)
  },

  /**
   * レスポンスデバッグ出力 JSON ファイルを元に、エンドポイントごとの情報をまとめて取得する
   *
   * @returns エンドポイントごとの情報
   */
  getEndPointResponses(debugOutputDirectory: string): Result[] {
    const logger = Logger.configure('Utils:getEndPointResponses')
    const results = []
    const deleteFiles: string[] = []
    const now = Date.now()

    logger.info('🔍 Loading debug output files')
    for (const type of this.getDirectories(debugOutputDirectory)) {
      for (const name of this.getDirectories(debugOutputDirectory, [type])) {
        const endpointDirectories = this.getDirectories(debugOutputDirectory, [
          type,
          name,
        ])
        let endpointDirectoryCount = 0
        for (const method of endpointDirectories) {
          endpointDirectoryCount++
          logger.info(
            `📁 ${type}/${name}/${method} (${endpointDirectoryCount}/${endpointDirectories.length})`
          )
          for (const statusCode of this.getDirectories(debugOutputDirectory, [
            type,
            name,
            method,
          ])) {
            const paths = this.getJSONFiles(debugOutputDirectory, [
              type,
              name,
              method,
              statusCode,
            ])

            const filteredPaths = paths.filter((path) => {
              const file = basename(path)
              if (!file) {
                return false
              }
              const unixtime = Number.parseInt(file.split('.')[0])
              return now - unixtime <= 1000 * 60 * 60 * 24 * 30
            })

            deleteFiles.push(
              ...paths.filter((path) => !filteredPaths.includes(path))
            )

            results.push({
              type,
              name,
              method,
              statusCode,
              paths: filteredPaths,
            })
          }
          logger.info(`  📄 ${results.length} files loaded`)
        }
      }
    }

    logger.info(`🔍 ${results.length} files loaded`)
    logger.info('🚮 Deleting old files')
    const startTime = Date.now()
    let deleteFilesCount = 0
    for (const deleteFile of deleteFiles) {
      deleteFilesCount++
      fs.unlinkSync(deleteFile)

      if (deleteFilesCount % 100 === 0) {
        const deletedPath = deleteFile.replace(debugOutputDirectory, '')
        const elapsedTime = Date.now() - startTime
        const estimatedTime =
          (elapsedTime / deleteFilesCount) *
          (deleteFiles.length - deleteFilesCount)
        const formattedEstimatedTime = this.formatSeconds(estimatedTime)
        logger.info(
          `🚮 ${deleteFilesCount} files deleted (Just deleted: ${deletedPath}) ETA: ${formattedEstimatedTime}`
        )
      }
    }

    logger.info(`🚮 ${deleteFilesCount} files deleted`)

    return results
  },

  /**
   * レスポンスの型定義名を取得する
   *
   * @param rawType リクエストの種別（graphql または rest）
   * @param rawName レスポンスの名前
   * @param rawMethod レスポンスの HTTP メソッド
   * @param rawStatus レスポンスのステータスコード
   * @returns 型定義名
   */
  getName(
    rawType: string,
    rawName: string,
    rawMethod: string,
    rawStatus: string | null
  ): string {
    const type =
      rawType.toLocaleLowerCase() === 'graphql'
        ? 'GraphQL'
        : rawType.toLocaleLowerCase() === 'rest'
          ? 'REST'
          : null
    if (!type) {
      throw new Error(`Invalid type: ${rawType}`)
    }
    const method = this.toCamelCase(rawMethod)
    const name = this.capitalize(rawName)
    const status =
      rawStatus === null ? '' : rawStatus.startsWith('2') ? 'Success' : 'Error'

    return `${type}${method}${name}${status}Response`
  },

  /**
   * キャメルケースに変換する
   *
   * @param string 変換する文字列
   * @returns キャメルケース変換後の文字列
   */
  toCamelCase(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  },

  /**
   * 先頭文字を大文字に変換する
   *
   * @param string 変換する文字列
   * @returns 変換後の文字列
   */
  capitalize(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1)
  },

  /**
   * ファイル名を取得する
   *
   * @param rawType リクエストの種別（graphql または rest）
   * @param rawName レスポンスの名前
   * @param rawMethod レスポンスの HTTP メソッド
   * @param rawStatus レスポンスのステータスコード
   * @returns ファイル名
   */
  getFilename(
    rawType: string,
    rawName: string,
    rawMethod: string,
    rawStatus: string
  ): string {
    const type = rawType.toLowerCase()
    const method = rawMethod.toLowerCase()
    const name = rawName.replaceAll(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    const status = rawStatus.startsWith('2') ? '-success' : '-error'

    return `${type}/${method}/${name}${status}`
  },

  /**
   * json-schema-to-typescript のコンパイルオプションを作成・取得する
   *
   * @param tsDocument コンパイル結果の先頭に追加する tsdoc
   * @returns コンパイルオプション
   */
  getCompileOptions(tsDocument?: string): Partial<Options> {
    const compileOptions: Partial<Options> = {
      bannerComment: '/* eslint-disable @typescript-eslint/ban-types */',
      additionalProperties: false,
      enableConstEnums: true,
      strictIndexSignatures: true,
      style: {
        semi: false,
        singleQuote: true,
      },
      unknownAny: true,
    }
    if (tsDocument) {
      compileOptions.bannerComment = `${compileOptions.bannerComment}\n\n/** ${tsDocument} */`
    }
    return compileOptions
  },

  formatSeconds(seconds: number): string {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds - hours * 3600) / 60)
    const _seconds = Math.floor(seconds - hours * 3600 - minutes * 60)
    return `${hours}h ${minutes}m ${_seconds}s`
  },
}
