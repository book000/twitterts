import { Logger } from '@book000/node-utils'
import { mergeSchemas } from 'genson-js/dist'
import { compile } from 'json-schema-to-typescript'
import path from 'node:path'
import fs from 'node:fs'
import { Utils } from './utils'
import { ResponseDatabase, EndPointWithCount } from '../saving-responses'

/**
 * 単一の型定義生成オプション（TwitterGenerateTypes.generateType）
 */
interface GenerateTypeOptions {
  /**
   * 保存先ファイルパス設定
   */
  path: {
    /**
     * スキーマファイルのパス
     */
    schema: string

    /**
     * 型定義ファイルのパス
     */
    types: string
  }

  /**
   * リクエスト名
   */
  name: string

  /**
   * 型定義の tsdoc
   */
  tsDocument: string

  /**
   * エラーを無視するかどうか
   */
  ignoreError: boolean

  /**
   * 1ページあたりのレスポンス数
   */
  limit: number
}

/**
 * 複数型定義生成オプション（TwitterGenerateTypes.generateTypes）
 */
interface GenerateTypesOptions {
  /**
   * 保存先ディレクトリパス設定
   */
  directory: {
    /**
     * スキーマファイルのディレクトリパス
     */
    schema: string

    /**
     * 型定義ファイルのディレクトリパス
     */
    types: string
  }
  /** 並列処理をするかどうか */
  parallel: boolean

  /**
   * 1ページあたりのレスポンス数
   */
  limit: number

  /**
   * エンドポイントの配列
   */
  endpoints: EndPointWithCount[]
}

/**
 * 型定義生成クラス
 */
export class TwitterTypesGenerator {
  /**
   * レスポンスを保存するデータベース
   */
  private readonly responseDatabase: ResponseDatabase

  /**
   * @param responseDatabase レスポンスを保存するデータベース
   */
  constructor(responseDatabase: ResponseDatabase) {
    this.responseDatabase = responseDatabase
  }

  /**
   * エンドポイントの型定義を生成する
   *
   * @param options 単一の型定義生成オプション
   * @param endpoint エンドポイントの情報
   */
  private async generateType(
    options: GenerateTypeOptions,
    endpoint: EndPointWithCount
  ): Promise<void> {
    const logger = Logger.configure('TwitterGenerateTypes.generateType')

    logger.info(`🔍 Generating: ${options.name}`)

    const limit = options.limit
    const count = endpoint.count
    const maxPage = Math.ceil(count / limit) + 1

    let mergedSchema
    for (let page = 1; page <= maxPage; page++) {
      logger.info(
        `📖  Reading: ${endpoint.method} ${endpoint.endpoint} (page: ${page}/${maxPage})`
      )
      const schemata = await this.responseDatabase.getSchemata(endpoint, {
        page,
        limit,
      })

      for (const { schema } of schemata) {
        const parsedSchema = JSON.parse(schema)
        mergedSchema = mergedSchema
          ? mergeSchemas([mergedSchema, parsedSchema])
          : parsedSchema
      }
    }
    if (!mergedSchema) {
      logger.warn(`⚠️ ${options.name}: No responses`)
      return
    }

    fs.mkdirSync(path.dirname(options.path.schema), { recursive: true })
    fs.writeFileSync(options.path.schema, JSON.stringify(mergedSchema, null, 2))

    fs.mkdirSync(path.dirname(options.path.types), { recursive: true })
    const types = await compile(
      mergedSchema,
      options.name,
      Utils.getCompileOptions(options.tsDocument)
    )
    fs.writeFileSync(options.path.types, types)
    logger.info(`📝 Successful: ${options.name} (from ${count} responses)`)
  }

  /**
   * 保存されたデバッグレスポンスを元に、全てのエンドポイントの型定義を生成する。
   *
   * @param options 型定義生成オプション
   */
  public async generateTypes(options: GenerateTypesOptions): Promise<void> {
    const logger = Logger.configure('TwitterGenerateTypes.generateTypes')

    const endpoints = options.endpoints
    const generators = []
    let endpointCount = 0
    for (const endpoint of endpoints) {
      endpointCount++
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
      const schemaPath = `${options.directory.schema}/${filename}.json`
      const typesPath = `${options.directory.types}/${filename}.ts`
      const type =
        endpoint.endpointType.toLocaleLowerCase() === 'graphql'
          ? 'GraphQL'
          : null
      if (!type) continue

      logger.info(
        `🔧 Creating generator: ${name} (StatusCode: ${endpoint.statusCode}) [${endpointCount}/${endpoints.length}]`
      )
      const generator = this.generateType(
        {
          path: {
            schema: schemaPath,
            types: typesPath,
          },
          name,
          tsDocument: `${type} ${endpoint.method} ${endpoint.endpoint} ${
            endpoint.statusCode.toString().startsWith('2') ? '成功' : '失敗'
          }レスポンスモデル`,
          ignoreError: !endpoint.statusCode.toString().startsWith('2'),
          limit: options.limit,
        },
        endpoint
      )
      if (options.parallel) {
        generators.push(generator)
      } else {
        await generator
      }
    }
    await Promise.all(generators)
  }
}
