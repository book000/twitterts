import fs from 'node:fs'
import { compile, Options } from 'json-schema-to-typescript'
import { Logger } from '@book000/node-utils'
import {
  createCompoundSchema,
  createSchema,
  mergeSchemas,
  Schema,
} from 'genson-js'
import { dirname, join } from 'node:path'
import { GraphQLGetSearchTimelineResponse } from './models/responses/graphql/get/search-timeline'
import { CustomSearchTimelineEntry } from './models/responses/custom/custom-search-timeline-entry'

/**
 * json-schema-to-typescript のコンパイルオプションを作成・取得する
 *
 * @param tsDocument コンパイル結果の先頭に追加する tsdoc
 * @returns コンパイルオプション
 */
function getCompileOptions(tsDocument?: string): Partial<Options> {
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
}

/**
 * 型定義生成インスタンスオプション（TwitterGenerateTypes）
 */
interface TwitterGenerateTypesOptions {
  /**
   * デバッグデータの出力先ディレクトリ
   */
  debugOutputDirectory: string
}

/**
 * レスポンスファイル群からの、エンドポイントごとのレスポンス群型
 */
interface Result {
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
}

// --- ここまで作業済み

/**
 * ユーティリティ
 */
const Utils = {
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
    rawStatus: string
  ) {
    const type =
      rawType === 'graphql' ? 'GraphQL' : rawType === 'rest' ? 'REST' : null
    if (!type) {
      throw new Error(`Invalid type: ${rawType}`)
    }
    const method = this.toCamelCase(rawMethod)
    const name = this.capitalize(rawName)
    const status = rawStatus.startsWith('2') ? '' : 'Error'

    return `${type}${method}${name}${status}Response`
  },

  /**
   * キャメルケースに変換する
   *
   * @param string 変換する文字列
   * @returns キャメルケース変換後の文字列
   */
  toCamelCase(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
  },

  /**
   * 先頭文字を大文字に変換する
   *
   * @param string 変換する文字列
   * @returns 変換後の文字列
   */
  capitalize(string: string) {
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
  ) {
    const type = rawType.toLowerCase()
    const method = rawMethod.toLowerCase()
    const name = rawName.replaceAll(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    const status = rawStatus.startsWith('2') ? '' : '-error'

    return `${type}/${method}/${name}${status}`
  },
}

/**
 * レスポンス種別
 */
type RequestType = 'GraphQL' | 'REST'

/**
 * 型定義生成クラス
 */
class TwitterTypesGenerator {
  /**
   * 型定義生成クラスのオプション
   */
  private readonly options: TwitterGenerateTypesOptions

  /**
   * @param options 型定義生成クラスのオプション
   */
  constructor(options: TwitterGenerateTypesOptions) {
    this.options = options
  }

  /**
   * ディレクトリ内にあるディレクトリ群を取得する
   *
   * @param baseDirectories ディレクトリを取得するディレクトリパス
   * @returns ディレクトリ群
   */
  getDirectories(baseDirectories: string[] = []) {
    const baseDirectory = join(
      this.options.debugOutputDirectory,
      ...baseDirectories
    )
    return fs
      .readdirSync(baseDirectory)
      .filter(
        (directory) =>
          !['.', '..'].includes(directory) &&
          fs.statSync(`${baseDirectory}/${directory}`).isDirectory()
      )
  }

  /**
   * ディレクトリ内にある JSON ファイル群を取得する
   *
   * @param baseDirectories ファイルを取得するディレクトリパス
   * @returns JSON ファイル群
   */
  getJSONFiles(baseDirectories: string[] = []) {
    const baseDirectory = join(
      this.options.debugOutputDirectory,
      ...baseDirectories
    )
    return fs
      .readdirSync(baseDirectory)
      .filter(
        (file) =>
          !['.', '..'].includes(file) &&
          fs.statSync(join(baseDirectory, file)).isFile() &&
          file.endsWith('.json')
      )
      .map((file) => join(baseDirectory, file))
  }

  /**
   * レスポンスデバッグ出力 JSON ファイルを元に、エンドポイントごとの情報をまとめて取得する
   *
   * @returns エンドポイントごとの情報
   */
  get(): Result[] {
    const results = []
    for (const type of this.getDirectories()) {
      for (const name of this.getDirectories([type])) {
        for (const method of this.getDirectories([type, name])) {
          for (const statusCode of this.getDirectories([type, name, method])) {
            results.push({
              type,
              name,
              method,
              statusCode,
              paths: this.getJSONFiles([type, name, method, statusCode]),
            })
          }
        }
      }
    }
    return results
  }

  /**
   * エンドポイントの型定義を生成する
   *
   * @param options 単一の型定義生成オプション
   * @param result エンドポイントごとのレスポンス情報
   */
  async generateType(options: GenerateTypeOptions, result: Result) {
    const logger = Logger.configure('TwitterGenerateTypes.generateType')

    if (result.paths.length === 0) {
      return
    }
    let schema
    for (const path of result.paths) {
      const data = JSON.parse(fs.readFileSync(path, 'utf8'))
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
      getCompileOptions(options.tsDocument)
    )
    fs.writeFileSync(options.path.types, types)
    logger.info(`📝 ${options.name} (from ${result.paths.length} files)`)
  }

  /**
   * 保存されたデバッグレスポンスを元に、全てのエンドポイントの型定義を生成する。
   * カスタム型定義の生成（CustomTypeGenerator）や、エンドポイントのまとめ型定義も生成（EndPointTypeGenerator）する。
   *
   * @param options 型定義生成オプション
   */
  async generateTypes(options: GenerateTypesOptions) {
    const results = this.get()
    for (const result of results) {
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
      const type =
        result.type === 'graphql'
          ? 'GraphQL'
          : result.type === 'rest'
          ? 'REST'
          : null

      await this.generateType(
        {
          path: {
            schema: schemaPath,
            types: typesPath,
          },
          name,
          tsDocument: `${type} ${result.method} ${result.name} ${
            result.statusCode.startsWith('2') ? '' : 'エラー'
          }レスポンスモデル`,
        },
        result
      )
    }

    new CustomTypeGenerator(
      results,
      options.directory.schema,
      options.directory.types
    ).generate()
    new EndPointTypeGenerator(results, options.directory.types).generate()
  }

  /**
   * デバッグレスポンスを元に、型定義を生成するメイン関数
   */
  static async main() {
    const debugOutputDirectory =
      process.env.DEBUG_OUTPUT_DIRECTORY || './data/responses'
    const schemaDirectory = process.env.SCHEMA_DIRECTORY || './data/schema'
    const typesDirectory =
      process.env.TYPES_DIRECTORY || './src/models/responses'

    const tgt = new TwitterTypesGenerator({
      debugOutputDirectory,
    })
    await tgt.generateTypes({
      directory: {
        schema: schemaDirectory,
        types: typesDirectory,
      },
    })
  }
}

/**
 * カスタム型定義を生成するクラス
 */
class CustomTypeGenerator {
  private readonly results: Result[]
  private readonly schemaDirectory: string
  private readonly typesDirectory: string

  /**
   * @param results エンドポイントごとのレスポンス情報
   * @param schemaDirectory スキーマ保存ディレクトリ
   * @param typesDirectory 型定義保存ディレクトリ
   */
  constructor(
    results: Result[],
    schemaDirectory: string,
    typesDirectory: string
  ) {
    this.results = results
    this.schemaDirectory = schemaDirectory
    this.typesDirectory = typesDirectory
  }

  /**
   * 検索タイムラインツイートモデル（CustomSearchTimelineEntry）のカスタム型定義を生成する
   */
  runGraphQLSearchTimeline() {
    const results = this.results.filter(
      (result) =>
        result.type === 'graphql' &&
        result.name === 'SearchTimeline' &&
        result.method === 'GET' &&
        result.statusCode === '200'
    )
    if (results.length === 0) {
      return
    }
    const paths = results.flatMap((result) => result.paths)

    let schema
    for (const path of paths) {
      const response: GraphQLGetSearchTimelineResponse = JSON.parse(
        fs.readFileSync(path, 'utf8')
      )
      const entries =
        response.data.search_by_raw_query.search_timeline.timeline.instructions
          .filter(
            (instruction) =>
              instruction.type === 'TimelineAddEntries' && instruction.entries
          )
          .flatMap((instruction) =>
            instruction.entries?.filter((entry) =>
              entry.entryId.startsWith('tweet-')
            )
          )
      const fileSchema = createCompoundSchema(entries)
      schema = schema ? mergeSchemas([schema, fileSchema]) : fileSchema
    }
    if (!schema) {
      return
    }

    this.generateTypeFromSchema(
      schema,
      'CustomSearchTimelineEntry',
      '検索タイムラインツイートモデル'
    )
  }

  // --- twitter-d 変換用オブジェクト

  /**
   * レスポンスツイートレガシーオブジェクト（CustomTweetLegacyObject）のカスタム型定義を生成する
   */
  runTweetLegacyObject() {
    // 各レスポンスからハッシュタグオブジェクトを抽出
    const schemas = [
      // SearchTimeline
      this.results
        .filter(
          (result) =>
            result.type === 'graphql' &&
            result.name === 'SearchTimeline' &&
            result.method === 'GET' &&
            result.statusCode === '200'
        )
        .flatMap((result) => result.paths)
        .flatMap((path) => {
          const response: GraphQLGetSearchTimelineResponse = JSON.parse(
            fs.readFileSync(path, 'utf8')
          )
          return response.data.search_by_raw_query.search_timeline.timeline.instructions
            .filter(
              (instruction) =>
                instruction.type === 'TimelineAddEntries' && instruction.entries
            )
            .flatMap((instruction) =>
              instruction.entries?.filter((entry) =>
                entry.entryId.startsWith('tweet-')
              )
            )
        })
        .map((entry) => {
          return (entry as CustomSearchTimelineEntry).content.itemContent
            .tweet_results.result.legacy
        })
        .map((entities) => createSchema(entities)),
    ].flat()

    this.generateTypeFromSchema(
      mergeSchemas(schemas),
      'CustomTweetLegacyObject',
      'レスポンスツイートレガシーオブジェクト'
    )
  }

  /**
   * カスタム型定義を、スキーマを元に生成する
   *
   * @param schema スキーマ
   * @param name 型名
   * @param tsDocument 型定義の tsdoc（1 行で記述）
   */
  async generateTypeFromSchema(
    schema: Schema,
    name: string,
    tsDocument: string
  ) {
    const logger = Logger.configure(
      'CustomTypeGenerator.generateTypeFromSchema'
    )
    if (!schema) {
      throw new Error('No schema found')
    }

    const kebabName = name.replaceAll(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    const schemaPath = join(this.schemaDirectory, 'custom', `${kebabName}.json`)
    const typesPath = join(this.typesDirectory, 'custom', `${kebabName}.ts`)

    fs.mkdirSync(dirname(schemaPath), { recursive: true })
    fs.writeFileSync(schemaPath, JSON.stringify(schema, null, 2))

    fs.mkdirSync(dirname(typesPath), { recursive: true })
    const types = await compile(schema, name, getCompileOptions(tsDocument))
    fs.writeFileSync(typesPath, types)
    logger.info(`📝 ${name}`)
  }

  /**
   * カスタム型定義を生成する
   */
  generate() {
    this.runGraphQLSearchTimeline()

    // twitter-d 変換用オブジェクト
    this.runTweetLegacyObject()
  }
}

/**
 * エンドポイントのまとめ型定義（src/models/responses/endpoints.ts）を生成するクラス
 */
class EndPointTypeGenerator {
  private readonly results: Result[]
  private readonly typesDirectory: string

  /**
   * @param results エンドポイントごとのレスポンス情報
   * @param typesDirectory 型定義の出力先ディレクトリ
   */
  constructor(results: Result[], typesDirectory: string) {
    this.results = results
    this.typesDirectory = typesDirectory
  }

  /**
   * TypeScript インポート文群を生成する
   *
   * @returns インポート文群
   */
  generateImport() {
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
      .join('\n')
  }

  /**
   * メソッド名の配列を取得する
   *
   * @param type エンドポイントの種類
   * @returns メソッド名の配列
   */
  getMethods(type: RequestType) {
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
  generateEndPointType(type: RequestType, method: string) {
    const head = `export type ${type}${method}Endpoint =`
    const types = this.results
      .filter(
        (result) =>
          result.type === type.toLowerCase() && result.method === method
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
   * エンドポイント名を元に、レスポンス型定義を紐づけるような型定義（<TYPE><METHOD>EndPointResponseType）を生成する。
   *
   * @param type エンドポイントの種類
   * @param method メソッド名
   * @returns レスポンス型定義を紐づけるような型定義
   */
  generateResponseType(type: RequestType, method: string) {
    const head = `export type ${type}${method}EndPointResponseType<T extends ${type}${method}Endpoint> =`
    const types = this.results
      .filter((result) => result.type === type.toLowerCase())
      .map((result) => {
        const name = Utils.getName(
          result.type,
          result.name,
          result.method,
          result.statusCode
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
  generateEndpointResponseType(types: readonly RequestType[]) {
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
          `  M extends '${method}' ?`,
          `    N extends ${type}${method}Endpoint ?`,
          `      ${type}${method}EndPointResponseType<N> :`,
          '      never :',
          '    never'
        )
      }
    }

    return `${head}\n${results.join('\n')}`
  }

  /**
   * エンドポイントのまとめ型定義（src/models/responses/endpoints.ts）を生成する
   */
  generate() {
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
        const endpointType = this.generateEndPointType(type, method)
        const responseType = this.generateResponseType(type, method)

        if (!endpointType || !responseType) {
          continue
        }

        data.push(endpointType, responseType)

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

;(async () => {
  const logger = Logger.configure('generate-types')
  try {
    await TwitterTypesGenerator.main()
  } catch (error) {
    logger.error('An error occurred while generating types', error as Error)
  }
})()
