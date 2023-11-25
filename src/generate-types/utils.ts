import { Options } from 'json-schema-to-typescript'

/**
 * ユーティリティ
 */
export const Utils = {
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
