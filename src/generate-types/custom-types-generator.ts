import { Logger } from '@book000/node-utils'
import { createCompoundSchema, mergeSchemas, Schema } from 'genson-js/dist'
import { compile } from 'json-schema-to-typescript'
import { join, dirname } from 'node:path'
import fs from 'node:fs'
import { Utils } from './utils'
import { ResponseDatabase, ResponseEndPoint } from '../saving-responses'
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

  /**
   * @param responseDatabase レスポンスを保存するデータベース
   * @param schemaDirectory スキーマ保存ディレクトリ
   * @param typesDirectory 型定義保存ディレクトリ
   */
  constructor(
    responseDatabase: ResponseDatabase,
    schemaDirectory: string,
    typesDirectory: string
  ) {
    this.responseDatabase = responseDatabase
    this.schemaDirectory = schemaDirectory
    this.typesDirectory = typesDirectory
  }

  /**
   * 検索タイムラインツイートモデル（CustomSearchTimelineEntry）のカスタム型定義を生成する
   */
  private async runGraphQLSearchTimeline(): Promise<void> {
    const logger = Logger.configure(
      'CustomTypesGenerator:runGraphQLSearchTimeline'
    )

    const schema = await this.createSchemaFromResponse(
      {
        endpointType: 'GRAPHQL',
        endpoint: 'SearchTimeline',
        method: 'GET',
        statusCode: 200,
      },
      (response) => {
        return response.data.search_by_raw_query.search_timeline.timeline.instructions
          .filter(
            (instruction) =>
              instruction.type === 'TimelineAddEntries' && instruction.entries
          )
          .flatMap(
            (instruction) =>
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
        return response.data.user.result.timeline_v2.timeline.instructions
          .filter(
            (instruction) =>
              instruction.type === 'TimelineAddEntries' && instruction.entries
          )
          .flatMap(
            (instruction) =>
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
        return response.data.user.result.timeline_v2.timeline.instructions
          .filter(
            (instruction) =>
              instruction.type === 'TimelineAddEntries' && instruction.entries
          )
          .flatMap(
            (instruction) =>
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
      'CustomUserLikeTweetEntry',
      'ユーザーいいねツイートエントリモデル'
    )
  }

  /**
   * GET・POSTメソッド共通のホームタイムラインモデルのカスタム型定義を生成する
   */
  private async runGraphQLTimeline(): Promise<void> {
    const logger = Logger.configure('CustomTypesGenerator:runGraphQLTimeline')
    const endpoints: ResponseEndPoint[] = [
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
          return response.data.home.home_timeline_urt.instructions
            .filter(
              (instruction) =>
                instruction.type === 'TimelineAddEntries' && instruction.entries
            )
            .flatMap(
              (instruction) =>
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
    const promises = await Promise.all([
      // HomeTimeline
      this.createSchemaFromResponse(
        {
          endpointType: 'GRAPHQL',
          endpoint: 'HomeTimeline',
          method: 'GET',
          statusCode: 200,
        },
        (response) =>
          this.getTweetObjectsFromInstructions(
            response.data.home.home_timeline_urt.instructions
          ).flat()
      ),
      // HomeLatestTimeline
      this.createSchemaFromResponse(
        {
          endpointType: 'GRAPHQL',
          endpoint: 'HomeLatestTimeline',
          method: 'GET',
          statusCode: 200,
        },
        (response) =>
          this.getTweetObjectsFromInstructions(
            response.data.home.home_timeline_urt.instructions
          ).flat()
      ),
      // SearchTimeline
      this.createSchemaFromResponse(
        {
          endpointType: 'GRAPHQL',
          endpoint: 'SearchTimeline',
          method: 'GET',
          statusCode: 200,
        },
        (response) =>
          this.getTweetObjectsFromInstructions(
            response.data.search_by_raw_query.search_timeline.timeline
              .instructions
          ).flat()
      ),
      // UserTweets
      this.createSchemaFromResponse(
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

          return this.getTweetObjectsFromInstructions(
            response.data.user.result.timeline_v2.timeline.instructions
          ).flat()
        }
      ),
      // Likes
      this.createSchemaFromResponse(
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
      this.createSchemaFromResponse(
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

          return this.getTweetObjectsFromInstructions(
            response.data.threaded_conversation_with_injections_v2.instructions
          ).flat()
        }
      ),
    ])
    const schemas = promises.filter((schema): schema is Schema => !!schema)
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
      entries?: Array<{
        entryId: string
        sortIndex: string
        content: {
          itemContent?: {
            tweet_results?: {
              result?: unknown
            }
          }
        }
      }>
    }[]
  ): unknown[] {
    return instructions
      .filter(
        (instruction) =>
          instruction.type === 'TimelineAddEntries' && instruction.entries
      )
      .flatMap(
        (instruction) =>
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
    const promises = await Promise.all([
      // SearchTimeline
      this.createSchemaFromResponse(
        {
          endpointType: 'GRAPHQL',
          endpoint: 'SearchTimeline',
          method: 'GET',
          statusCode: 200,
        },
        (response) =>
          this.getTweetLegacyObjectsFromInstructions(
            response.data.search_by_raw_query.search_timeline.timeline
              .instructions
          ).flat()
      ),
      // UserTweets
      this.createSchemaFromResponse(
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
    ])
    const schemas = promises.filter((schema): schema is Schema => !!schema)
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
      entries?: Array<{
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
      }>
    }[]
  ): unknown[] {
    return instructions
      .filter(
        (instruction) =>
          instruction.type === 'TimelineAddEntries' && instruction.entries
      )
      .flatMap(
        (instruction) =>
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
    const promises = await Promise.all([
      // SearchTimeline
      this.createSchemaFromResponse(
        {
          endpointType: 'GRAPHQL',
          endpoint: 'SearchTimeline',
          method: 'GET',
          statusCode: 200,
        },
        (response) =>
          this.getVideoInfoFromInstructions(
            response.data.search_by_raw_query.search_timeline.timeline
              .instructions
          ).flat()
      ),
      // UserTweets
      this.createSchemaFromResponse(
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
            // @ts-ignore 暫定的に型を無視
            response.data.user.result.timeline_v2.timeline.instructions
          ).flat()
        }
      ),
    ])
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
      entries?: Array<{
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
                tweet?: {
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
        }
      }>
    }[]
  ): unknown[] {
    return instructions
      .filter(
        (instruction) =>
          instruction.type === 'TimelineAddEntries' && instruction.entries
      )
      .flatMap(
        (instruction) =>
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
  private async createSchemaFromResponse<E extends ResponseEndPoint>(
    endpoint: E,
    customizer?: (
      response: EndPointResponseType<
        E['method'],
        E['endpointType'],
        E['endpoint']
      >
    ) => object
  ): Promise<Schema | null> {
    const logger = Logger.configure(
      'CustomTypesGenerator.createSchemaFromResponse'
    )
    const count = await this.responseDatabase.getResponseCount(endpoint)
    if (count === 0) {
      logger.info(`⏭️ Skip ${endpoint.method} ${endpoint.endpoint}`)
      return null
    }

    const limit = 100
    const maxPage = Math.ceil(count / limit) + 1
    let schema
    for (let page = 1; page <= maxPage; page++) {
      logger.info(
        `📖 Reading: ${endpoint.method} ${endpoint.endpoint} (page: ${page}/${maxPage})`
      )
      const responses = await this.responseDatabase.getResponses(endpoint, {
        page,
        limit,
      })
      let responseBodys: any[] = responses
        .filter((response) => response.responseType === 'JSON')
        .map((response) => response.responseBody)
        .filter((body) => body.length > 0)
        .map((body) => JSON.parse(body))
      if (customizer) {
        responseBodys = responseBodys.flatMap((body) => customizer(body))
      }

      const pageSchema = createCompoundSchema(responseBodys)
      schema = schema ? mergeSchemas([schema, pageSchema]) : pageSchema
    }

    if (!schema) {
      throw new Error('No schema found')
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
    if (!schema) {
      throw new Error('No schema found')
    }

    const kebabName = name.replaceAll(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    const schemaPath = join(this.schemaDirectory, 'custom', `${kebabName}.json`)
    const typesPath = join(this.typesDirectory, 'custom', `${kebabName}.ts`)

    fs.mkdirSync(dirname(schemaPath), { recursive: true })
    fs.writeFileSync(schemaPath, JSON.stringify(schema, null, 2))

    fs.mkdirSync(dirname(typesPath), { recursive: true })
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
      for (const generator of generators) {
        await generator()
      }
    }
  }
}
