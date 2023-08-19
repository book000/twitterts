import { Logger } from '@book000/node-utils'
import { createSchema, mergeSchemas } from 'genson-js/dist'
import { compile } from 'json-schema-to-typescript'
import { dirname } from 'node:path'
import fs from 'node:fs'
import { Result, Utils } from './utils'

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
}

/**
 * 型定義生成クラス
 */
export class TwitterTypesGenerator {
  /**
   * エンドポイントごとのレスポンス群
   */
  private readonly results: Result[]

  /**
   * @param options 型定義生成クラスのオプション
   */
  constructor(results: Result[]) {
    this.results = results
  }

  /**
   * エンドポイントの型定義を生成する
   *
   * @param options 単一の型定義生成オプション
   * @param result エンドポイントごとのレスポンス情報
   */
  private async generateType(
    options: GenerateTypeOptions,
    result: Result
  ): Promise<void> {
    const logger = Logger.configure('TwitterGenerateTypes.generateType')

    if (result.paths.length === 0) {
      return
    }

    logger.info(`🔍 Generating: ${options.name}`)

    let schema
    for (const path of result.paths) {
      const data = Utils.parseJsonc(fs.readFileSync(path, 'utf8'))
      const fileSchema = createSchema(data)
      schema = schema ? mergeSchemas([schema, fileSchema]) : fileSchema
    }
    if (!schema) {
      throw new Error('No schema found')
    }

    fs.mkdirSync(dirname(options.path.schema), { recursive: true })
    fs.writeFileSync(options.path.schema, JSON.stringify(schema, null, 2))

    fs.mkdirSync(dirname(options.path.types), { recursive: true })
    const types = await compile(
      schema,
      options.name,
      Utils.getCompileOptions(options.tsDocument)
    )
    fs.writeFileSync(options.path.types, types)
    logger.info(
      `📝 Successful: ${options.name} (from ${result.paths.length} files)`
    )
  }

  /**
   * 保存されたデバッグレスポンスを元に、全てのエンドポイントの型定義を生成する。
   *
   * @param options 型定義生成オプション
   */
  public async generateTypes(options: GenerateTypesOptions): Promise<void> {
    const generators = []
    for (const result of this.results) {
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
      const schemaPath = `${options.directory.schema}/${filename}.json`
      const typesPath = `${options.directory.types}/${filename}.ts`
      const type = result.type === 'graphql' ? 'GraphQL' : null
      if (!type) continue

      const generator = this.generateType(
        {
          path: {
            schema: schemaPath,
            types: typesPath,
          },
          name,
          tsDocument: `${type} ${result.method} ${result.name} ${
            result.statusCode.startsWith('2') ? '成功' : '失敗'
          }レスポンスモデル`,
        },
        result
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
