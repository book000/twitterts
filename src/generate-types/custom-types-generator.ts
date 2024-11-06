import { Logger } from '@book000/node-utils'
import { createCompoundSchema, mergeSchemas, Schema } from 'genson-js/dist'
import { compile } from 'json-schema-to-typescript'
import path from 'node:path'
import fs from 'node:fs'
import { Utils } from './utils'
import { ResponseDatabase, EndPoint } from '../saving-responses'
import { EndPointResponseType } from '../models/responses/endpoints'

/**
 * カスタム型定義を生成するクラス
 */
export class CustomTypesGenerator {
  /**
   * レスポンスを保存するデータベース
   */
  private readonly responseDatabase: ResponseDatabase
  private readonly schemaDirectory: string
  private readonly typesDirectory: string
  private readonly limit: number

  /**
   * @param responseDatabase レスポンスを保存するデータベース
   * @param schemaDirectory スキーマ保存ディレクトリ
   * @param typesDirectory 型定義保存ディレクトリ
   */
  constructor(
    responseDatabase: ResponseDatabase,
    schemaDirectory: string,
    typesDirectory: string,
    limit: number
  ) {
    this.responseDatabase = responseDatabase
    this.schemaDirectory = schemaDirectory
    this.typesDirectory = typesDirectory
    this.limit = limit
  }

  /**
   * 検索タイムラインツイートモデル（CustomSearchTimelineEntry）のカスタム型定義を生成する
   */
  private async runGraphQLSearchTimeline(): Promise<void> {
    const logger = Logger.configure(
      'CustomTypesGenerator:runGraphQLSearchTimeline'
    )
    logger.info('📝 Creating CustomSearchTimelineEntry')

    const schema = await this.createSchemaFromResponse(
      {
        endpointType: 'GRAPHQL',
        endpoint: 'SearchTimeline',
        method: 'GET',
        statusCode: 200,
      },
      (response) => {
        if (!('data' in response)) {
          return []
        }

        return response.data.search_by_raw_query.search_timeline.timeline.instructions
          .filter(
            (instruction) =>
              instruction.type === 'TimelineAddEntries' && instruction.entries
          )
          .flatMap((instruction) =>
            instruction.entries?.filter(
              (entry) =>
                entry.entryId.startsWith('tweet-') ||
                entry.entryId.startsWith('promoted-tweet') ||
                entry.entryId.startsWith('promotedTweet')
            )
          )
      }
    )
    if (!schema) {
      logger.warn('⏭️ Schema not found. Skip')
      return
    }

    await this.generateTypeFromSchema(
      schema,
      'CustomSearchTimelineEntry',
      '検索タイムラインツイートモデル'
    )
  }

  /**
   * ユーザーツイートモデル（CustomUserTweetEntry）のカスタム型定義を生成する
   */
  private async runGraphQLUserTweets(): Promise<void> {
    const logger = Logger.configure('CustomTypesGenerator:runGraphQLUserTweets')

    const schema = await this.createSchemaFromResponse(
      {
        endpointType: 'GRAPHQL',
        endpoint: 'UserTweets',
        method: 'GET',
        statusCode: 200,
      },
      (response) => {
        if (!('data' in response)) {
          return []
        }
        if (
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          response.data.user.result.timeline_v2.timeline.instructions ===
          undefined
        ) {
          return []
        }
        return response.data.user.result.timeline_v2.timeline.instructions
          .filter(
            (instruction) =>
              instruction.type === 'TimelineAddEntries' && instruction.entries
          )
          .flatMap((instruction) =>
            instruction.entries?.filter(
              (entry) =>
                entry.entryId.startsWith('tweet-') ||
                entry.entryId.startsWith('promoted-tweet') ||
                entry.entryId.startsWith('promotedTweet')
            )
          )
      }
    )
    if (!schema) {
      logger.warn('⏭️ Schema not found. Skip')
      return
    }

    await this.generateTypeFromSchema(
      schema,
      'CustomUserTweetEntry',
      'ユーザーツイートモデル'
    )
  }

  /**
   * ユーザーいいねツイートモデル（CustomUserLikeTweetEntry）のカスタム型定義を生成する
   */
  private async runGraphQLUserLikeTweets(): Promise<void> {
    const logger = Logger.configure(
      'CustomTypesGenerator:runGraphQLUserLikeTweets'
    )

    const schema = await this.createSchemaFromResponse(
      {
        endpointType: 'GRAPHQL',
        endpoint: 'Likes',
        method: 'GET',
        statusCode: 200,
      },
      (response) => {
        if (!('data' in response)) {
          return []
        }
        if (
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          response.data.user.result.timeline_v2.timeline.instructions ===
          undefined
        ) {
          return []
        }
        return response.data.user.result.timeline_v2.timeline.instructions
          .filter(
            (instruction) =>
              // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
              instruction.type === 'TimelineAddEntries' && instruction.entries
          )
          .flatMap((instruction) =>
            instruction.entries.filter(
              (entry) =>
                entry.entryId.startsWith('tweet-') ||
                entry.entryId.startsWith('promoted-tweet') ||
                entry.entryId.startsWith('promotedTweet')
            )
          )
      }
    )
    if (!schema) {
      logger.warn('⏭️ Schema not found. Skip')
      return
    }

    await this.generateTypeFromSchema(
      schema,
      'CustomUserLikeTweetEntry',
      'ユーザーいいねツイートエントリモデル'
    )
  }

  /**
   * GET・POSTメソッド共通のホームタイムラインモデルのカスタム型定義を生成する
   */
  private async runGraphQLTimeline(): Promise<void> {
    const logger = Logger.configure('CustomTypesGenerator:runGraphQLTimeline')
    const endpoints: EndPoint[] = [
      {
        endpointType: 'GRAPHQL',
        endpoint: 'HomeTimeline',
        method: 'GET',
        statusCode: 200,
      },
      {
        endpointType: 'GRAPHQL',
        endpoint: 'HomeTimeline',
        method: 'POST',
        statusCode: 200,
      },
      {
        endpointType: 'GRAPHQL',
        endpoint: 'HomeLatestTimeline',
        method: 'GET',
        statusCode: 200,
      },
      {
        endpointType: 'GRAPHQL',
        endpoint: 'HomeLatestTimeline',
        method: 'POST',
        statusCode: 200,
      },
    ]

    const schemas = []
    for (const endpoint of endpoints) {
      const endpointSchema = await this.createSchemaFromResponse(endpoint)
      if (!endpointSchema) {
        logger.warn(
          `⏭️ ${endpoint.method} ${endpoint.endpoint} Schema not found. Skip`
        )
        continue
      }

      schemas.push(endpointSchema)
    }
    if (schemas.length === 0) {
      logger.warn('⏭️ Schema not found. Skip')
      return
    }

    await this.generateTypeFromSchema(
      mergeSchemas(schemas),
      'CustomGraphQLTimelineSuccessResponse',
      'ホームタイムラインモデル'
    )
  }

  /**
   * タイムラインツイートモデル（CustomTimelineTweetEntry）のカスタム型定義を生成する
   */
  private async runGraphQLTimelineTweetEntry(): Promise<void> {
    const logger = Logger.configure(
      'CustomTypesGenerator:runGraphQLTimelineTweetEntry'
    )
    const endpoints: {
      endpointType: 'GRAPHQL'
      endpoint: 'HomeTimeline' | 'HomeLatestTimeline'
      method: 'GET' | 'POST'
      statusCode: 200
    }[] = [
      {
        endpointType: 'GRAPHQL',
        endpoint: 'HomeTimeline',
        method: 'GET',
        statusCode: 200,
      },
      {
        endpointType: 'GRAPHQL',
        endpoint: 'HomeTimeline',
        method: 'POST',
        statusCode: 200,
      },
      {
        endpointType: 'GRAPHQL',
        endpoint: 'HomeLatestTimeline',
        method: 'GET',
        statusCode: 200,
      },
      {
        endpointType: 'GRAPHQL',
        endpoint: 'HomeLatestTimeline',
        method: 'POST',
        statusCode: 200,
      },
    ]

    const schemas = []
    for (const endpoint of endpoints) {
      const endpointSchema = await this.createSchemaFromResponse(
        endpoint,
        (response) => {
          if (!('data' in response)) {
            return []
          }
          if (!response.data.home.home_timeline_urt?.instructions) {
            return []
          }
          return response.data.home.home_timeline_urt.instructions
            .filter(
              (instruction) =>
                instruction.type === 'TimelineAddEntries' && instruction.entries
            )
            .flatMap((instruction) =>
              instruction.entries?.filter(
                (entry) =>
                  entry.entryId.startsWith('tweet-') ||
                  entry.entryId.startsWith('promoted-tweet') ||
                  entry.entryId.startsWith('promotedTweet')
              )
            )
        }
      )
      if (!endpointSchema) {
        logger.warn(
          `⏭️ ${endpoint.method} ${endpoint.endpoint} Schema not found. Skip`
        )
        continue
      }

      schemas.push(endpointSchema)
    }
    if (schemas.length === 0) {
      logger.warn('⏭️ Schema not found. Skip')
      return
    }

    await this.generateTypeFromSchema(
      mergeSchemas(schemas),
      'CustomTimelineTweetEntry',
      'ホームタイムラインツイートエントリモデル'
    )
  }

  // --- twitter-d 変換用オブジェクト

  /**
   * レスポンスツイートオブジェクト（CustomTweetObject）のカスタム型定義を生成する
   */
  private async runTweetObject(): Promise<void> {
    const logger = Logger.configure('CustomTypesGenerator:runTweetObject')

    // 各レスポンスからツイートオブジェクトを抽出
    const results = [
      // HomeTimeline
      await this.createSchemaFromResponse(
        {
          endpointType: 'GRAPHQL',
          endpoint: 'HomeTimeline',
          method: 'GET',
          statusCode: 200,
        },
        (response) => {
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          if (response.data.home.home_timeline_urt.instructions === undefined) {
            return []
          }
          return this.getTweetObjectsFromInstructions(
            response.data.home.home_timeline_urt.instructions
          ).flat()
        }
      ),
      // HomeLatestTimeline
      await this.createSchemaFromResponse(
        {
          endpointType: 'GRAPHQL',
          endpoint: 'HomeLatestTimeline',
          method: 'GET',
          statusCode: 200,
        },
        (response) => {
          if (!('data' in response)) {
            return []
          }
          if (
            response.data.home.home_timeline_urt?.instructions === undefined
          ) {
            return []
          }
          return this.getTweetObjectsFromInstructions(
            response.data.home.home_timeline_urt.instructions
          ).flat()
        }
      ),
      // SearchTimeline
      await this.createSchemaFromResponse(
        {
          endpointType: 'GRAPHQL',
          endpoint: 'SearchTimeline',
          method: 'GET',
          statusCode: 200,
        },
        (response) => {
          if (!('data' in response)) {
            return []
          }
          if (
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            response.data.search_by_raw_query.search_timeline.timeline
              .instructions === undefined
          ) {
            return []
          }

          return this.getTweetObjectsFromInstructions(
            response.data.search_by_raw_query.search_timeline.timeline
              .instructions
          ).flat()
        }
      ),
      // UserTweets
      await this.createSchemaFromResponse(
        {
          endpointType: 'GRAPHQL',
          endpoint: 'UserTweets',
          method: 'GET',
          statusCode: 200,
        },
        (response) => {
          if (!('data' in response)) {
            return []
          }
          if (
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            response.data.user.result.timeline_v2.timeline.instructions ===
            undefined
          ) {
            return []
          }

          return this.getTweetObjectsFromInstructions(
            response.data.user.result.timeline_v2.timeline.instructions
          ).flat()
        }
      ),
      // Likes
      await this.createSchemaFromResponse(
        {
          endpointType: 'GRAPHQL',
          endpoint: 'Likes',
          method: 'GET',
          statusCode: 200,
        },
        (response) => {
          if (!('data' in response)) {
            return []
          }

          return this.getTweetObjectsFromInstructions(
            response.data.user.result.timeline_v2.timeline.instructions
          ).flat()
        }
      ),
      // TweetDetail
      await this.createSchemaFromResponse(
        {
          endpointType: 'GRAPHQL',
          endpoint: 'TweetDetail',
          method: 'GET',
          statusCode: 200,
        },
        (response) => {
          if (!('data' in response)) {
            return []
          }

          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          if (!response.data.threaded_conversation_with_injections_v2) {
            return []
          }

          return this.getTweetObjectsFromInstructions(
            response.data.threaded_conversation_with_injections_v2.instructions
          ).flat()
        }
      ),
    ].flat()
    const schemas = results.filter((schema): schema is Schema => !!schema)
    if (schemas.length === 0) {
      logger.warn('⏭️ Schema not found. Skip')
      return
    }

    await this.generateTypeFromSchema(
      mergeSchemas(schemas),
      'CustomTweetObject',
      'レスポンスツイートオブジェクト'
    )
  }

  private getTweetObjectsFromInstructions(
    instructions: {
      type: string
      entries?: {
        entryId: string
        sortIndex: string
        content: {
          itemContent?: {
            tweet_results?: {
              result?: unknown
            }
          }
        }
      }[]
    }[]
  ): unknown[] {
    return instructions
      .filter(
        (instruction) =>
          instruction.type === 'TimelineAddEntries' && instruction.entries
      )
      .flatMap((instruction) =>
        instruction.entries?.filter(
          (entry) =>
            entry.entryId.startsWith('tweet-') ||
            entry.entryId.startsWith('promoted-tweet') ||
            entry.entryId.startsWith('promotedTweet')
        )
      )
      .map((entry) => {
        return entry?.content.itemContent?.tweet_results?.result
      })
      .filter((entry): entry is NonNullable<typeof entry> => !!entry)
      .map((entry) => {
        return {
          ...entry,
          __entryId: 'string',
        }
      })
  }

  /**
   * レスポンスツイートレガシーオブジェクト（CustomTweetLegacyObject）のカスタム型定義を生成する
   */
  private async runTweetLegacyObject(): Promise<void> {
    const logger = Logger.configure('CustomTypesGenerator:runTweetLegacyObject')

    // 各レスポンスからレガシーツイートオブジェクトを抽出
    const results = [
      // SearchTimeline
      await this.createSchemaFromResponse(
        {
          endpointType: 'GRAPHQL',
          endpoint: 'SearchTimeline',
          method: 'GET',
          statusCode: 200,
        },
        (response) => {
          if (!('data' in response)) {
            return []
          }

          return this.getTweetLegacyObjectsFromInstructions(
            response.data.search_by_raw_query.search_timeline.timeline
              .instructions
          ).flat()
        }
      ),
      // UserTweets
      await this.createSchemaFromResponse(
        {
          endpointType: 'GRAPHQL',
          endpoint: 'UserTweets',
          method: 'GET',
          statusCode: 200,
        },
        (response) => {
          if (!('data' in response)) {
            return []
          }

          return this.getTweetLegacyObjectsFromInstructions(
            response.data.user.result.timeline_v2.timeline.instructions
          ).flat()
        }
      ),
    ].flat()
    const schemas = results.filter((schema): schema is Schema => !!schema)
    if (schemas.length === 0) {
      logger.warn('⏭️ Schema not found. Skip')
      return
    }

    await this.generateTypeFromSchema(
      mergeSchemas(schemas),
      'CustomTweetLegacyObject',
      'レスポンスツイートレガシーオブジェクト'
    )
  }

  private getTweetLegacyObjectsFromInstructions(
    instructions: {
      type: string
      entries?: {
        entryId: string
        sortIndex: string
        content: {
          itemContent?: {
            tweet_results?: {
              result?: {
                legacy?: unknown
                tweet?: {
                  legacy?: unknown
                }
              }
            }
          }
        }
      }[]
    }[]
  ): unknown[] {
    return instructions
      .filter(
        (instruction) =>
          instruction.type === 'TimelineAddEntries' && instruction.entries
      )
      .flatMap((instruction) =>
        instruction.entries?.filter(
          (entry) =>
            entry.entryId.startsWith('tweet-') ||
            entry.entryId.startsWith('promoted-tweet') ||
            entry.entryId.startsWith('promotedTweet')
        )
      )
      .flatMap((entry) => {
        return [
          entry?.content.itemContent?.tweet_results?.result?.legacy,
          entry?.content.itemContent?.tweet_results?.result?.tweet?.legacy,
        ]
      })
      .filter((legacy): legacy is NonNullable<typeof legacy> => !!legacy)
  }

  /**
   * レスポンスユーザーレガシーオブジェクト（CustomUserLegacyObject）のカスタム型定義を生成する
   */
  private async runUserLegacyObject(): Promise<void> {
    const logger = Logger.configure('CustomTypesGenerator:runUserLegacyObject')
    const endpoints: {
      endpointType: 'GRAPHQL'
      endpoint: 'UserByRestId' | 'UserByScreenName'
      method: 'GET'
      statusCode: 200
    }[] = [
      {
        endpointType: 'GRAPHQL',
        endpoint: 'UserByRestId',
        method: 'GET',
        statusCode: 200,
      },
      {
        endpointType: 'GRAPHQL',
        endpoint: 'UserByScreenName',
        method: 'GET',
        statusCode: 200,
      },
    ]

    const schemas = []
    for (const endpoint of endpoints) {
      const endpointSchema = await this.createSchemaFromResponse(
        endpoint,
        (response) => {
          if (!('data' in response)) {
            return null
          }

          if (!response.data.user.result.legacy) {
            return null
          }

          return response.data.user.result.legacy
        }
      )
      if (!endpointSchema) {
        logger.warn(
          `⏭️ ${endpoint.method} ${endpoint.endpoint} Schema not found. Skip`
        )
        continue
      }

      schemas.push(endpointSchema)
    }
    if (schemas.length === 0) {
      logger.warn('⏭️ Schema not found. Skip')
      return
    }

    await this.generateTypeFromSchema(
      mergeSchemas(schemas),
      'CustomUserLegacyObject',
      'レスポンスユーザーレガシーオブジェクト'
    )
  }

  /**
   * エンティティ動画情報オブジェクト（CustomEntityVideoInfoObject）のカスタム型定義を生成する
   */
  private async runEntityVideoInfoObject(): Promise<void> {
    const logger = Logger.configure(
      'CustomTypesGenerator:runEntityVideoInfoObject'
    )

    // 各レスポンスからレガシーツイートオブジェクトを抽出
    const promises = [
      // SearchTimeline
      await this.createSchemaFromResponse(
        {
          endpointType: 'GRAPHQL',
          endpoint: 'SearchTimeline',
          method: 'GET',
          statusCode: 200,
        },
        (response) => {
          if (!('data' in response)) {
            return []
          }

          return this.getVideoInfoFromInstructions(
            response.data.search_by_raw_query.search_timeline.timeline
              .instructions
          ).flat()
        }
      ),
      // UserTweets
      await this.createSchemaFromResponse(
        {
          endpointType: 'GRAPHQL',
          endpoint: 'UserTweets',
          method: 'GET',
          statusCode: 200,
        },
        (response) => {
          if (!('data' in response)) {
            return []
          }

          return this.getVideoInfoFromInstructions(
            response.data.user.result.timeline_v2.timeline.instructions
          ).flat()
        }
      ),
    ].flat()
    const schemas = promises.filter((schema): schema is Schema => !!schema)
    if (schemas.length === 0) {
      logger.warn('⏭️ Schema not found. Skip')
      return
    }

    await this.generateTypeFromSchema(
      mergeSchemas(schemas),
      'CustomEntityVideoInfoObject',
      'エンティティ動画情報オブジェクト'
    )
  }

  private getVideoInfoFromInstructions(
    instructions: {
      type: string
      entries?: {
        entryId: string
        sortIndex: string
        content: {
          itemContent?: {
            tweet_results?: {
              result?: {
                legacy?: {
                  extended_entities?: {
                    media?: {
                      video_info?: {
                        variants?: unknown[]
                      }
                    }[]
                  }
                }
              }
            }
          }
        }
      }[]
    }[]
  ): unknown[] {
    return instructions
      .filter(
        (instruction) =>
          instruction.type === 'TimelineAddEntries' && instruction.entries
      )
      .flatMap((instruction) =>
        instruction.entries?.filter(
          (entry) =>
            entry.entryId.startsWith('tweet-') ||
            entry.entryId.startsWith('promoted-tweet') ||
            entry.entryId.startsWith('promotedTweet')
        )
      )
      .flatMap((entry) => {
        return [entry?.content.itemContent?.tweet_results?.result?.legacy]
      })
      .filter((legacy): legacy is NonNullable<typeof legacy> => !!legacy)
      .flatMap((legacy) => {
        return [
          legacy.extended_entities?.media?.flatMap((media) => {
            return media.video_info
          }),
        ]
      })
      .filter(
        (videoInfo): videoInfo is NonNullable<typeof videoInfo> => !!videoInfo
      )
  }

  /**
   * レスポンス情報からスキーマを生成する。
   * customizer が指定されている場合、レスポンスをカスタマイズした上でスキーマを生成する。
   *
   * @param endpoint レスポンス情報
   * @param customizer レスポンスをカスタマイズする関数
   * @returns スキーマ
   */
  private async createSchemaFromResponse<E extends EndPoint>(
    endpoint: E,
    customizer?: (
      response: EndPointResponseType<
        E['method'],
        E['endpointType'],
        E['endpoint']
      >
    ) => object | null
  ): Promise<Schema | null> {
    const logger = Logger.configure(
      'CustomTypesGenerator.createSchemaFromResponse'
    )
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    const count = await this.responseDatabase.getResponseCount(endpoint)
    if (count === 0) {
      logger.info(`⏭️ Skip ${endpoint.method} ${endpoint.endpoint}`)
      return null
    }

    const limit = this.limit
    const maxPage = Math.ceil(count / limit) + 1
    let schema
    for (let page = 1; page <= maxPage; page++) {
      logger.info(
        `📖 Reading: ${endpoint.method} ${endpoint.endpoint} (page: ${page}/${maxPage})`
      )
      // eslint-disable-next-line @typescript-eslint/no-deprecated
      const responses = await this.responseDatabase.getResponses(endpoint, {
        page,
        limit,
      })
      let responseBodies: any[] = responses
        .filter((response) => response.responseType === 'JSON')
        .map((response) => response.responseBody)
        .filter((body) => body.length > 0)
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        .map((body) => JSON.parse(body))
      if (customizer) {
        responseBodies = responseBodies
          .map((body) => {
            try {
              return customizer(body)
            } catch (error) {
              logger.error(
                `🚨 Failed to customize ${endpoint.method} ${endpoint.endpoint}`,
                error as Error
              )
              return null
            }
          })
          .filter((body): body is NonNullable<typeof body> => !!body)
          .flat()
      }

      const pageSchema = createCompoundSchema(responseBodies)
      schema = schema ? mergeSchemas([schema, pageSchema]) : pageSchema
    }

    if (!schema) {
      logger.warn(
        `⏭️ Schema not found: ${endpoint.method} ${endpoint.endpoint}`
      )
      return null
    }

    return schema
  }

  /**
   * カスタム型定義を、スキーマを元に生成する
   *
   * @param schema スキーマ
   * @param name 型名
   * @param tsDocument 型定義の tsdoc（1 行で記述）
   */
  private async generateTypeFromSchema(
    schema: Schema,
    name: string,
    tsDocument: string
  ): Promise<void> {
    const logger = Logger.configure(
      'CustomTypeGenerator.generateTypeFromSchema'
    )

    const kebabName = name.replaceAll(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    const schemaPath = path.join(
      this.schemaDirectory,
      'custom',
      `${kebabName}.json`
    )
    const typesPath = path.join(
      this.typesDirectory,
      'custom',
      `${kebabName}.ts`
    )

    fs.mkdirSync(path.dirname(schemaPath), { recursive: true })
    fs.writeFileSync(schemaPath, JSON.stringify(schema, null, 2))

    fs.mkdirSync(path.dirname(typesPath), { recursive: true })
    const types = await compile(
      schema,
      name,
      Utils.getCompileOptions(tsDocument)
    )
    fs.writeFileSync(typesPath, types)
    logger.info(`📝 ${name}`)
  }

  /**
   * カスタム型定義を生成する
   */
  async generate(parallel: boolean): Promise<void> {
    const logger = Logger.configure('CustomTypesGenerator.generate')
    const generators = [
      this.runGraphQLSearchTimeline.bind(this),
      this.runGraphQLUserTweets.bind(this),
      this.runGraphQLUserLikeTweets.bind(this),
      this.runGraphQLTimeline.bind(this),
      this.runGraphQLTimelineTweetEntry.bind(this),
      this.runTweetObject.bind(this),

      // twitter-d 変換用オブジェクト
      this.runTweetLegacyObject.bind(this),
      this.runEntityVideoInfoObject.bind(this),
      this.runUserLegacyObject.bind(this),
    ]

    if (parallel) {
      await Promise.all(generators.map((generator) => generator()))
    } else {
      let generateCount = 0
      for (const generator of generators) {
        generateCount++
        const functionName = generator.name.replace('bound ', '')
        logger.info(
          `🔍 Generating ${functionName} (${generateCount}/${generators.length})`
        )

        await generator()
      }
    }
  }
}
