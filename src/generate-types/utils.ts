import { Options } from 'json-schema-to-typescript'
import { join } from 'node:path'
import fs from 'node:fs'

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
   * ディレクトリ内にあるディレクトリ群を取得する
   *
   * @param parentDirectory ディレクトリを取得する親ディレクトリパス
   * @param baseDirectories ディレクトリを取得する子ディレクトリパス群
   * @returns ディレクトリ群
   */
  getDirectories(
    parentDirectory: string,
    baseDirectories: string[] = []
  ): string[] {
    const baseDirectory = join(parentDirectory, ...baseDirectories)
    return fs
      .readdirSync(baseDirectory)
      .filter(
        (directory) =>
          !['.', '..'].includes(directory) &&
          fs.statSync(`${baseDirectory}/${directory}`).isDirectory()
      )
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
      .readdirSync(baseDirectory)
      .filter(
        (file) =>
          !['.', '..'].includes(file) &&
          fs.statSync(join(baseDirectory, file)).isFile() &&
          file.endsWith('.json')
      )
      .map((file) => join(baseDirectory, file))
  },

  /**
   * レスポンスデバッグ出力 JSON ファイルを元に、エンドポイントごとの情報をまとめて取得する
   *
   * @returns エンドポイントごとの情報
   */
  getEndPointResponses(debugOutputDirectory: string): Result[] {
    const results = []
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
            results.push({
              type,
              name,
              method,
              statusCode,
              paths: this.getJSONFiles(debugOutputDirectory, [
                type,
                name,
                method,
                statusCode,
              ]),
            })
          }
        }
      }
    }
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
}
