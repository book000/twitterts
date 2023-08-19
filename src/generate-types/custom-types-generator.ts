import { Logger } from '@book000/node-utils'
import {
  createCompoundSchema,
  mergeSchemas,
  createSchema,
  Schema,
} from 'genson-js/dist'
import { compile } from 'json-schema-to-typescript'
import { join, dirname } from 'node:path'
import { CustomSearchTimelineEntry } from '../models/responses/custom/custom-search-timeline-entry'
import { CustomTimelineTweetEntry } from '../models/responses/custom/custom-timeline-tweet-entry'
import { CustomUserLikeTweetEntry } from '../models/responses/custom/custom-user-like-tweet-entry'
import { CustomUserTweetEntry } from '../models/responses/custom/custom-user-tweet-entry'
import { GraphQLGetHomeLatestTimelineSuccessResponse } from '../models/responses/graphql/get/home-latest-timeline-success'
import { GraphQLGetHomeTimelineSuccessResponse } from '../models/responses/graphql/get/home-timeline-success'
import { GraphQLGetLikesSuccessResponse } from '../models/responses/graphql/get/likes-success'
import { GraphQLGetSearchTimelineSuccessResponse } from '../models/responses/graphql/get/search-timeline-success'
import { GraphQLGetUserByRestIdSuccessResponse } from '../models/responses/graphql/get/user-by-rest-id-success'
import { GraphQLGetUserByScreenNameSuccessResponse } from '../models/responses/graphql/get/user-by-screen-name-success'
import { GraphQLGetUserTweetsSuccessResponse } from '../models/responses/graphql/get/user-tweets-success'
import fs from 'node:fs'
import { Result, Utils } from './utils'

/**
 * カスタム型定義を生成するクラス
 */
export class CustomTypesGenerator {
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
  private async runGraphQLSearchTimeline(): Promise<void> {
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
      const response =
        Utils.parseJsonc<GraphQLGetSearchTimelineSuccessResponse>(
          fs.readFileSync(path, 'utf8')
        )
      const entries =
        response.data.search_by_raw_query.search_timeline.timeline.instructions
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
      const fileSchema = createCompoundSchema(entries)
      schema = schema ? mergeSchemas([schema, fileSchema]) : fileSchema
    }
    if (!schema) {
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
    const results = this.results.filter(
      (result) =>
        result.type === 'graphql' &&
        result.name === 'UserTweets' &&
        result.method === 'GET' &&
        result.statusCode === '200'
    )
    if (results.length === 0) {
      return
    }
    const paths = results.flatMap((result) => result.paths)

    let schema
    for (const path of paths) {
      const response = Utils.parseJsonc<GraphQLGetUserTweetsSuccessResponse>(
        fs.readFileSync(path, 'utf8')
      )
      const entries =
        response.data.user.result.timeline_v2.timeline.instructions
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
      const fileSchema = createCompoundSchema(entries)
      schema = schema ? mergeSchemas([schema, fileSchema]) : fileSchema
    }
    if (!schema) {
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
    const results = this.results.filter(
      (result) =>
        result.type === 'graphql' &&
        result.name === 'Likes' &&
        result.method === 'GET' &&
        result.statusCode === '200'
    )
    if (results.length === 0) {
      return
    }
    const paths = results.flatMap((result) => result.paths)

    let schema
    for (const path of paths) {
      const response = Utils.parseJsonc<GraphQLGetLikesSuccessResponse>(
        fs.readFileSync(path, 'utf8')
      )
      const entries =
        response.data.user.result.timeline_v2.timeline.instructions
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
      const fileSchema = createCompoundSchema(entries)
      schema = schema ? mergeSchemas([schema, fileSchema]) : fileSchema
    }
    if (!schema) {
      return
    }

    await this.generateTypeFromSchema(
      schema,
      'CustomUserLikeTweetEntry',
      'ユーザーいいねツイートエントリモデル'
    )
  }

  private async runGraphQLTimelineInstruction(): Promise<void> {
    const homeTimelineResults = this.results.filter(
      (result) =>
        result.type === 'graphql' &&
        result.name === 'HomeTimeline' &&
        (result.method === 'GET' || result.method === 'POST') &&
        result.statusCode === '200'
    )
    const homeLatestTimelineResults = this.results.filter(
      (result) =>
        result.type === 'graphql' &&
        result.name === 'HomeLatestTimeline' &&
        (result.method === 'GET' || result.method === 'POST') &&
        result.statusCode === '200'
    )
    if (
      homeTimelineResults.length === 0 &&
      homeLatestTimelineResults.length === 0
    ) {
      return
    }
    const hometimelinePaths = homeTimelineResults.flatMap(
      (result) => result.paths
    )
    const homeLatestTimelinePaths = homeLatestTimelineResults.flatMap(
      (result) => result.paths
    )

    let schema
    for (const path of hometimelinePaths) {
      const response = Utils.parseJsonc<GraphQLGetHomeTimelineSuccessResponse>(
        fs.readFileSync(path, 'utf8')
      )
      const entries = response.data.home.home_timeline_urt.instructions
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
      const fileSchema = createCompoundSchema(entries)
      schema = schema ? mergeSchemas([schema, fileSchema]) : fileSchema
    }

    for (const path of homeLatestTimelinePaths) {
      const response =
        Utils.parseJsonc<GraphQLGetHomeLatestTimelineSuccessResponse>(
          fs.readFileSync(path, 'utf8')
        )
      const instructions = response.data.home.home_timeline_urt.instructions
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
      const fileSchema = createCompoundSchema(instructions)
      schema = schema ? mergeSchemas([schema, fileSchema]) : fileSchema
    }

    if (!schema) {
      return
    }

    await this.generateTypeFromSchema(
      schema,
      'CustomTimelineTweetEntry',
      'ホームタイムラインツイートエントリモデル'
    )
  }

  // --- twitter-d 変換用オブジェクト

  /**
   * レスポンスツイートオブジェクト（CustomTweetObject）のカスタム型定義を生成する
   */
  private async runTweetObject(): Promise<void> {
    // 各レスポンスからツイートオブジェクトを抽出
    const schemas = [
      // HomeTimeline
      this.results
        .filter(
          (result) =>
            result.type === 'graphql' &&
            result.name === 'HomeTimeline' &&
            result.method === 'GET' &&
            result.statusCode === '200'
        )
        .flatMap((result) => result.paths)
        .flatMap((path) => {
          const response =
            Utils.parseJsonc<GraphQLGetHomeTimelineSuccessResponse>(
              fs.readFileSync(path, 'utf8')
            )
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
        })
        .map((entry) => {
          return (entry as CustomTimelineTweetEntry).content.itemContent
            .tweet_results.result
        })
        .filter((entry) => !!entry)
        .map((entry) => {
          return {
            ...entry,
            __entryId: 'string',
          }
        })
        .map((entry) => createSchema(entry)),
      // HomeLatestTimeline
      this.results
        .filter(
          (result) =>
            result.type === 'graphql' &&
            result.name === 'HomeLatestTimeline' &&
            result.method === 'GET' &&
            result.statusCode === '200'
        )
        .flatMap((result) => result.paths)
        .flatMap((path) => {
          const response =
            Utils.parseJsonc<GraphQLGetHomeLatestTimelineSuccessResponse>(
              fs.readFileSync(path, 'utf8')
            )
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
        })
        .map((entry) => {
          return (entry as CustomTimelineTweetEntry).content.itemContent
            .tweet_results.result
        })
        .filter((entry) => !!entry)
        .map((entry) => {
          return {
            ...entry,
            __entryId: 'string',
          }
        })
        .map((entry) => createSchema(entry)),
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
          const response =
            Utils.parseJsonc<GraphQLGetSearchTimelineSuccessResponse>(
              fs.readFileSync(path, 'utf8')
            )
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
        })
        .map((entry) => {
          return (entry as CustomSearchTimelineEntry).content.itemContent
            .tweet_results.result
        })
        .filter((entry) => !!entry)
        .map((entry) => {
          return {
            ...entry,
            __entryId: 'string',
          }
        })
        .map((entry) => createSchema(entry)),
      // UserTweets
      this.results
        .filter(
          (result) =>
            result.type === 'graphql' &&
            result.name === 'UserTweets' &&
            result.method === 'GET' &&
            result.statusCode === '200'
        )
        .flatMap((result) => result.paths)
        .flatMap((path) => {
          const response =
            Utils.parseJsonc<GraphQLGetUserTweetsSuccessResponse>(
              fs.readFileSync(path, 'utf8')
            )
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
        })
        .map((entry) => {
          return (entry as CustomUserTweetEntry).content.itemContent
            .tweet_results.result
        })
        .filter((entry) => !!entry)
        .map((entry) => {
          return {
            ...entry,
            __entryId: 'string',
          }
        })
        .map((entry) => createSchema(entry)),
      // Likes
      this.results
        .filter(
          (result) =>
            result.type === 'graphql' &&
            result.name === 'Likes' &&
            result.method === 'GET' &&
            result.statusCode === '200'
        )
        .flatMap((result) => result.paths)
        .flatMap((path) => {
          const response = Utils.parseJsonc<GraphQLGetLikesSuccessResponse>(
            fs.readFileSync(path, 'utf8')
          )
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
        })
        .map((entry) => {
          return (entry as CustomUserLikeTweetEntry).content.itemContent
            .tweet_results.result
        })
        .filter((entry) => !!entry)
        .map((entry) => {
          return {
            ...entry,
            __entryId: 'string',
          }
        })
        .map((entry) => createSchema(entry)),
    ].flat()

    await this.generateTypeFromSchema(
      mergeSchemas(schemas),
      'CustomTweetObject',
      'レスポンスツイートオブジェクト'
    )
  }

  /**
   * レスポンスツイートレガシーオブジェクト（CustomTweetLegacyObject）のカスタム型定義を生成する
   */
  private async runTweetLegacyObject(): Promise<void> {
    // 各レスポンスからレガシーツイートオブジェクトを抽出
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
          const response =
            Utils.parseJsonc<GraphQLGetSearchTimelineSuccessResponse>(
              fs.readFileSync(path, 'utf8')
            )
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
        })
        .map((entry) => {
          return (entry as CustomSearchTimelineEntry).content.itemContent
            .tweet_results.result.legacy
        })
        .map((entry) => createSchema(entry)),
      // UserTweets: tweet_results.result.legacy
      this.results
        .filter(
          (result) =>
            result.type === 'graphql' &&
            result.name === 'UserTweets' &&
            result.method === 'GET' &&
            result.statusCode === '200'
        )
        .flatMap((result) => result.paths)
        .flatMap((path) => {
          const response =
            Utils.parseJsonc<GraphQLGetUserTweetsSuccessResponse>(
              fs.readFileSync(path, 'utf8')
            )
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
        })
        .filter(
          (entry) =>
            (entry as CustomUserTweetEntry).content.itemContent.tweet_results
              .result.legacy !== undefined
        )
        .map((entry) => {
          return (entry as CustomUserTweetEntry).content.itemContent
            .tweet_results.result.legacy
        })
        .map((entry) => createSchema(entry)),
      // UserTweets: tweet_results.result.tweet?.legacy
      this.results
        .filter(
          (result) =>
            result.type === 'graphql' &&
            result.name === 'UserTweets' &&
            result.method === 'GET' &&
            result.statusCode === '200'
        )
        .flatMap((result) => result.paths)
        .flatMap((path) => {
          const response =
            Utils.parseJsonc<GraphQLGetUserTweetsSuccessResponse>(
              fs.readFileSync(path, 'utf8')
            )
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
        })
        .filter(
          (entry) =>
            (entry as CustomUserTweetEntry).content.itemContent.tweet_results
              .result.tweet?.legacy !== undefined
        )
        .map((entry) => {
          return (entry as CustomUserTweetEntry).content.itemContent
            .tweet_results.result.tweet?.legacy
        })
        .map((entry) => createSchema(entry)),
    ].flat()

    await this.generateTypeFromSchema(
      mergeSchemas(schemas),
      'CustomTweetLegacyObject',
      'レスポンスツイートレガシーオブジェクト'
    )
  }

  /**
   * レスポンスユーザーレガシーオブジェクト（CustomUserLegacyObject）のカスタム型定義を生成する
   */
  private async runUserLegacyObject(): Promise<void> {
    // 各レスポンスからレガシーユーザーオブジェクトを抽出
    const schemas = [
      // UserByRestId
      this.results
        .filter(
          (result) =>
            result.type === 'graphql' &&
            result.name === 'UserByRestId' &&
            result.method === 'GET' &&
            result.statusCode === '200'
        )
        .flatMap((result) => result.paths)
        .flatMap((path) => {
          const response =
            Utils.parseJsonc<GraphQLGetUserByRestIdSuccessResponse>(
              fs.readFileSync(path, 'utf8')
            )
          return response.data.user.result.legacy
        })
        .map((entry) => createSchema(entry)),
      // UserByScreenName
      this.results
        .filter(
          (result) =>
            result.type === 'graphql' &&
            result.name === 'UserByScreenName' &&
            result.method === 'GET' &&
            result.statusCode === '200'
        )
        .flatMap((result) => result.paths)
        .flatMap((path) => {
          const response =
            Utils.parseJsonc<GraphQLGetUserByScreenNameSuccessResponse>(
              fs.readFileSync(path, 'utf8')
            )
          return response.data.user.result.legacy
        })
        .map((entry) => createSchema(entry)),
    ].flat()

    await this.generateTypeFromSchema(
      mergeSchemas(schemas),
      'CustomUserLegacyObject',
      'レスポンスユーザーレガシーオブジェクト'
    )
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
      this.runGraphQLTimelineInstruction.bind(this),
      this.runTweetObject.bind(this),

      // twitter-d 変換用オブジェクト
      this.runTweetLegacyObject.bind(this),
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
