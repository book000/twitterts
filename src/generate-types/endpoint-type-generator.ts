import { Logger } from '@book000/node-utils'
import { Result, Utils } from './utils'
import fs from 'node:fs'

/**
 * レスポンス種別
 */
type RequestType = 'GraphQL' | 'REST'

/**
 * エンドポイントのまとめ型定義（src/models/responses/endpoints.ts）を生成するクラス
 */
export class EndPointTypeGenerator {
  private readonly results: Result[]
  private readonly typesDirectory: string

  /**
   * @param results エンドポイントごとのレスポンス情報
   * @param typesDirectory 型定義の出力先ディレクトリ
   */
  constructor(results: Result[], typesDirectory: string) {
    this.results = results.filter((result) =>
      result.paths.some((path) => path.endsWith('.json'))
    )
    this.typesDirectory = typesDirectory
  }

  /**
   * TypeScript インポート文群を生成する
   *
   * @returns インポート文群
   */
  generateImport(): string {
    // import { GraphQLGetUserTweetsResponse } from './graphql/get/user-tweets'
    return this.results
      .map((result) => {
        const name = Utils.getName(
          result.type,
          result.name,
          result.method,
          result.statusCode
        )
        const filename = Utils.getFilename(
          result.type,
          result.name,
          result.method,
          result.statusCode
        )
        return `import { ${name} } from './${filename}'`
      })
      .filter((value, index, self) => self.indexOf(value) === index)
      .join('\n')
  }

  /**
   * メソッド名の配列を取得する
   *
   * @param type エンドポイントの種類
   * @returns メソッド名の配列
   */
  getMethods(type: RequestType): string[] {
    return this.results
      .filter((result) => result.type === type.toLowerCase())
      .map((result) => result.method)
      .filter((value, index, self) => self.indexOf(value) === index)
  }

  /**
   * エンドポイント名群（<TYPE><METHOD>Endpoint）の定義を生成する
   *
   * @param type エンドポイントの種類
   * @param method メソッド名
   * @returns エンドポイント名群の定義
   */
  generateEndPointType(type: RequestType, method: string): string | null {
    const head = `export type ${type}${method}Endpoint =`
    const types = this.results
      .filter(
        (result) =>
          result.type === type.toLowerCase() && result.method === method
      )
      .filter(
        (value, index, self) =>
          self.findIndex((v) => v.name === value.name) === index
      )
      .map((result) => {
        return `  | '${result.name}'`
      })
    if (types.length === 0) {
      return null
    }
    return `${head}\n${types.join('\n')}`
  }

  /**
   * エンドポイント名を元に、成功・失敗のレスポンス型定義をまとめる型定義（<TYPE><METHOD>Response）を生成する。
   *
   * @param type エンドポイントの種類
   * @param method メソッド名
   */
  generateResponseMergeType(type: RequestType, method: string): string {
    const names = this.results
      .filter((result) => result.type === type.toLowerCase())
      .map((result) => result.name)
      .filter((value, index, self) => self.indexOf(value) === index)

    const types = names.map((name) => {
      const successType = Utils.getName(type, name, method, '200')
      const errorType = Utils.getName(type, name, method, '400')
      const responseType = Utils.getName(type, name, method, null)

      const isExistsSuccess = this.results.some(
        (result) =>
          result.type === type.toLowerCase() &&
          result.name === name &&
          result.method === method &&
          result.statusCode.startsWith('2')
      )
      const isExistsError = this.results.some(
        (result) =>
          result.type === type.toLowerCase() &&
          result.name === name &&
          result.method === method &&
          !result.statusCode.startsWith('2')
      )

      const tsDocument = `/** ${type} ${name} ${method} レスポンスモデル */`
      if (isExistsSuccess && isExistsError) {
        return `${tsDocument}\nexport type ${responseType} = ${successType} | ${errorType}`
      }
      if (isExistsSuccess) {
        return `${tsDocument}\nexport type ${responseType} = ${successType}`
      }
      if (isExistsError) {
        return `${tsDocument}\nexport type ${responseType} = ${errorType}`
      }
      return ''
    })
    return types.filter((type) => type !== '').join('\n')
  }

  /**
   * エンドポイント名を元に、レスポンス型定義を紐づけるような型定義（<TYPE><METHOD>EndPointResponseType）を生成する。
   *
   * @param type エンドポイントの種類
   * @param method メソッド名
   * @returns レスポンス型定義を紐づけるような型定義
   */
  generateResponseType(type: RequestType, method: string): string {
    const head = `export type ${type}${method}EndPointResponseType<T extends ${type}${method}Endpoint> =`
    const types = this.results
      .filter(
        (result) =>
          result.type === type.toLowerCase() && result.method === method
      )
      .filter(
        (value, index, self) =>
          self.findIndex((v) => v.name === value.name) === index
      )
      .map((result) => {
        const name = Utils.getName(
          result.type,
          result.name,
          result.method,
          null
        )
        return `  T extends '${result.name}' ? ${name} :`
      })
    return `${head}\n${types.join('\n')}\n  never`
  }

  /**
   * エンドポイントの種類と HTTP メソッドを元に、「レスポンス型定義を紐づけるような型定義」を生成する。
   *
   * @param types エンドポイントの種類の配列
   * @returns レスポンス型定義を紐づけるような型定義
   */
  generateEndpointResponseType(types: readonly RequestType[]): string {
    const head =
      'export type EndPointResponseType<M extends HttpMethod, T extends RequestType, N extends GraphQLEndpoint | RESTEndpoint> = '

    const results = []
    for (const type of types) {
      const methods = this.getMethods(type)
      if (methods.length === 0) {
        continue
      }

      if (types.at(0) !== type) {
        results.push(':')
      }

      results.push(`T extends '${type.toUpperCase()}' ?`)

      for (const method of methods) {
        // 最後以外は : をつける
        if (methods.at(0) !== method) {
          results.push(':')
        }

        results.push(
          `M extends '${method}' ?`,
          `  N extends ${type}${method}Endpoint ?`,
          `    ${type}${method}EndPointResponseType<N> :`,
          '    never'
        )
      }

      results.push('  : never')
    }

    return `${head}\n${results.join('\n')}\n: never`
  }

  /**
   * エンドポイントのまとめ型定義（src/models/responses/endpoints.ts）を生成する
   */
  generate(): void {
    const logger = Logger.configure('EndPointTypeGenerator.generate')

    const types = ['GraphQL', 'REST'] as const

    const data = []

    const imports = this.generateImport()
    data.push(
      imports,
      "import { HttpMethod, RequestType } from '../../scraper'"
    )

    for (const type of types) {
      const unionTypes: string[] = []

      const methods = this.getMethods(type)
      for (const method of methods) {
        const mergeTypes = this.generateResponseMergeType(type, method)
        const endpointType = this.generateEndPointType(type, method)
        const responseType = this.generateResponseType(type, method)

        if (!endpointType || !responseType) {
          continue
        }

        data.push(mergeTypes, endpointType, responseType)

        unionTypes.push(`  | ${type}${method}Endpoint`)
      }

      if (unionTypes.length === 0) {
        unionTypes.push('  | never')
      }
      data.push(`export type ${type}Endpoint =\n${unionTypes.join('\n')}\n`)
    }

    data.push(this.generateEndpointResponseType(types))

    fs.writeFileSync(
      `${this.typesDirectory}/endpoints.ts`,
      data.map((d) => d.trim()).join('\n\n')
    )
    logger.info(`📝 ${this.typesDirectory}/endpoints.ts`)
  }
}
