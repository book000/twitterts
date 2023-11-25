import { Logger } from '@book000/node-utils'
import { Utils } from './utils'
import fs from 'node:fs'
import {
  ResponseDatabase,
  ResponseEndPointWithCount,
} from 'src/saving-responses'

/**
 * レスポンス種別
 */
type RequestType = 'GraphQL'

/**
 * エンドポイントのまとめ型定義（src/models/responses/endpoints.ts）を生成するクラス
 */
export class EndPointTypeGenerator {
  private readonly responseDatabase: ResponseDatabase
  private readonly typesDirectory: string

  /**
   * @param responseDatabase レスポンスを保存するデータベース
   * @param typesDirectory 型定義の出力先ディレクトリ
   */
  constructor(responseDatabase: ResponseDatabase, typesDirectory: string) {
    this.responseDatabase = responseDatabase
    this.typesDirectory = typesDirectory
  }

  /**
   * TypeScript インポート文群を生成する
   *
   * @param endpoints エンドポイントの配列
   * @returns インポート文群
   */
  generateImport(endpoints: ResponseEndPointWithCount[]): string {
    // import { GraphQLGetUserTweetsResponse } from './graphql/get/user-tweets'
    return endpoints
      .map((endpoint) => {
        const name = Utils.getName(
          endpoint.endpointType,
          endpoint.endpoint,
          endpoint.method,
          endpoint.statusCode.toString()
        )
        const filename = Utils.getFilename(
          endpoint.endpointType,
          endpoint.endpoint,
          endpoint.method,
          endpoint.statusCode.toString()
        )
        return `import { ${name} } from './${filename}'`
      })
      .filter((value, index, self) => self.indexOf(value) === index)
      .join('\n')
  }

  /**
   * メソッド名の配列を取得する
   *
   * @param endpoints エンドポイントの配列
   * @param type エンドポイントの種類
   * @returns メソッド名の配列
   */
  getMethods(
    endpoints: ResponseEndPointWithCount[],
    type: RequestType
  ): string[] {
    return endpoints
      .filter(
        (endpoint) => endpoint.endpointType.toLowerCase() === type.toLowerCase()
      )
      .map((endpoint) => endpoint.method)
      .filter((value, index, self) => self.indexOf(value) === index)
  }

  /**
   * エンドポイント名群（<TYPE><METHOD>Endpoint）の定義を生成する
   *
   * @param endpoints エンドポイントの配列
   * @param type エンドポイントの種類
   * @param method メソッド名
   * @returns エンドポイント名群の定義
   */
  generateEndPointType(
    endpoints: ResponseEndPointWithCount[],
    type: RequestType,
    method: string
  ): string | null {
    const head = `export type ${type}${method}Endpoint =`
    const types = endpoints
      .filter(
        (endpoint) =>
          endpoint.endpointType.toLowerCase() === type.toLowerCase() &&
          endpoint.method === method
      )
      .filter(
        (value, index, self) =>
          self.findIndex((endpoint) => endpoint.endpoint === value.endpoint) ===
          index
      )
      .map((result) => {
        return `  | '${result.endpoint}'`
      })
    if (types.length === 0) {
      return null
    }
    return `${head}\n${types.join('\n')}`
  }

  /**
   * エンドポイント名を元に、成功・失敗のレスポンス型定義をまとめる型定義（<TYPE><METHOD>Response）を生成する。
   *
   * @param endpoints エンドポイントの配列
   * @param type エンドポイントの種類
   * @param method メソッド名
   */
  generateResponseMergeType(
    endpoints: ResponseEndPointWithCount[],
    type: RequestType,
    method: string
  ): string {
    const names = endpoints
      .filter(
        (endpoint) => endpoint.endpointType.toLowerCase() === type.toLowerCase()
      )
      .map((endpoint) => endpoint.endpoint)
      .filter((value, index, self) => self.indexOf(value) === index)

    const types = names.map((name) => {
      const successType = Utils.getName(type, name, method, '200')
      const errorType = Utils.getName(type, name, method, '400')
      const responseType = Utils.getName(type, name, method, null)

      const isExistsSuccess = endpoints.some(
        (endpoint) =>
          endpoint.endpointType.toLowerCase() === type.toLowerCase() &&
          endpoint.endpoint === name &&
          endpoint.method === method &&
          endpoint.statusCode.toString().startsWith('2')
      )
      const isExistsError = endpoints.some(
        (endpoint) =>
          endpoint.endpointType.toLowerCase() === type.toLowerCase() &&
          endpoint.endpoint === name &&
          endpoint.method === method &&
          !endpoint.statusCode.toString().startsWith('2')
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
   * @param endpoints エンドポイントの配列
   * @param type エンドポイントの種類
   * @param method メソッド名
   * @returns レスポンス型定義を紐づけるような型定義
   */
  generateResponseType(
    endpoints: ResponseEndPointWithCount[],
    type: RequestType,
    method: string
  ): string {
    const head = `export type ${type}${method}EndPointResponseType<T extends ${type}${method}Endpoint> =`
    const types = endpoints
      .filter(
        (endpoint) =>
          endpoint.endpointType.toLowerCase() === type.toLowerCase() &&
          endpoint.method === method
      )
      .filter(
        (value, index, self) =>
          self.findIndex((endpoint) => endpoint.endpoint === value.endpoint) ===
          index
      )
      .map((endpoint) => {
        const name = Utils.getName(
          endpoint.endpointType,
          endpoint.endpoint,
          endpoint.method,
          null
        )
        return `  T extends '${endpoint.endpoint}' ? ${name} :`
      })
    return `${head}\n${types.join('\n')}\n  never`
  }

  /**
   * エンドポイントの種類と HTTP メソッドを元に、「レスポンス型定義を紐づけるような型定義」を生成する。
   *
   * @param endpoints エンドポイントの配列
   * @param types エンドポイントの種類の配列
   * @returns レスポンス型定義を紐づけるような型定義
   */
  generateEndpointResponseType(
    endpoints: ResponseEndPointWithCount[],
    types: readonly RequestType[]
  ): string {
    const head =
      'export type EndPointResponseType<M extends HttpMethod, T extends RequestType, N extends GraphQLEndpoint> = '

    const results = []
    for (const type of types) {
      const methods = this.getMethods(endpoints, type)
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

  private async getEndpoints(
    types: readonly string[]
  ): Promise<ResponseEndPointWithCount[]> {
    const endpoints = await this.responseDatabase.getEndpoints()
    const lowerTypes = new Set(types.map((type) => type.toLowerCase()))
    return endpoints.filter((endpoint) =>
      lowerTypes.has(endpoint.endpointType.toLowerCase())
    )
  }

  /**
   * エンドポイントのまとめ型定義（src/models/responses/endpoints.ts）を生成する
   */
  async generate(): Promise<void> {
    const logger = Logger.configure('EndPointTypeGenerator.generate')

    const types = ['GraphQL'] as const
    const endpoints = await this.getEndpoints(types)

    const data = []

    const imports = this.generateImport(endpoints)
    data.push(
      imports,
      "import { HttpMethod, RequestType } from '../../scraper'"
    )

    for (const type of types) {
      const unionTypes: string[] = []

      const methods = this.getMethods(endpoints, type)
      for (const method of methods) {
        const mergeTypes = this.generateResponseMergeType(
          endpoints,
          type,
          method
        )
        const endpointType = this.generateEndPointType(endpoints, type, method)
        const responseType = this.generateResponseType(endpoints, type, method)

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

    data.push(this.generateEndpointResponseType(endpoints, types))

    fs.writeFileSync(
      `${this.typesDirectory}/endpoints.ts`,
      data.map((d) => d.trim()).join('\n\n')
    )
    logger.info(`📝 ${this.typesDirectory}/endpoints.ts`)
  }
}
