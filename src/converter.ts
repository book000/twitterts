import {
  Coordinates,
  Entities,
  ExtendedEntities,
  FullUser,
  Place,
  Status,
  UserEntities,
} from 'twitter-d'
import { CustomTweetLegacyObject } from './models/responses/custom/custom-tweet-legacy-object'
import { CustomTweetObject } from './models/responses/custom/custom-tweet-object'
import { ResponseParseError } from './models/exceptions'
import { CustomUserLegacyObject } from './models/responses/custom/custom-user-legacy-object'
import { GraphQLGetUserByScreenNameSuccessResponse } from './models/responses/graphql/get/user-by-screen-name-success'
import { CustomEntityVideoInfoObject } from './models/responses/custom/custom-entity-video-info-object'
import { VideoInfo } from 'twitter-d/types/video_info'

/**
 * オブジェクトを変換するクラス
 */
export const ObjectConverter = {
  /**
   * ツイートのレガシーオブジェクトからエンティティを変換する
   *
   * @param legacy ツイートのレガシーオブジェクト
   * @returns エンティティ
   */
  convertTweetEntities(legacy: CustomTweetLegacyObject): Entities {
    const entities: Entities = {}

    if (legacy.entities.hashtags) {
      for (const hashtag of legacy.entities.hashtags) {
        entities.hashtags = entities.hashtags ?? []
        entities.hashtags.push({
          indices: [hashtag.indices[0], hashtag.indices[1]],
          text: hashtag.text,
        })
      }
    }

    if (legacy.entities.media) {
      for (const media of legacy.entities.media) {
        entities.media = entities.media ?? []
        entities.media.push({
          display_url: media.display_url,
          expanded_url: media.expanded_url,
          id: Number(media.id_str),
          id_str: media.id_str,
          indices: [media.indices[0], media.indices[1]],
          media_url_https: media.media_url_https,
          media_url: media.media_url_https,
          type: media.type,
          url: media.url,
          sizes: {
            large: {
              h: media.sizes.large.h,
              w: media.sizes.large.w,
              resize: media.sizes.large.resize,
            },
            medium: {
              h: media.sizes.medium.h,
              w: media.sizes.medium.w,
              resize: media.sizes.medium.resize,
            },
            small: {
              h: media.sizes.small.h,
              w: media.sizes.small.w,
              resize: media.sizes.small.resize,
            },
            thumb: {
              h: media.sizes.thumb.h,
              w: media.sizes.thumb.w,
              resize: media.sizes.thumb.resize,
            },
          },
          video_info: this.convertToVideoInfo(media.video_info),
        })
      }
    }

    if (legacy.entities.symbols) {
      for (const symbol of legacy.entities.symbols) {
        entities.symbols = entities.symbols ?? []
        // @ts-ignore
        entities.symbols.push(symbol)
      }
    }

    if (legacy.entities.urls) {
      for (const url of legacy.entities.urls) {
        entities.urls = entities.urls ?? []
        entities.urls.push({
          display_url: url.display_url,
          expanded_url: url.expanded_url,
          indices: [url.indices[0], url.indices[1]],
          url: url.url,
        })
      }
    }

    if (legacy.entities.user_mentions) {
      for (const userMention of legacy.entities.user_mentions) {
        entities.user_mentions = entities.user_mentions ?? []
        entities.user_mentions.push({
          id: Number(userMention.id_str),
          id_str: userMention.id_str,
          indices: [userMention.indices[0], userMention.indices[1]],
          name: userMention.name,
          screen_name: userMention.screen_name,
        })
      }
    }

    return entities
  },

  /**
   * ツイートのレガシーオブジェクトから拡張エンティティを変換する
   *
   * @param legacy ツイートのレガシーオブジェクト
   * @returns 拡張エンティティ
   */
  convertExtendedEntities(legacy: CustomTweetLegacyObject): ExtendedEntities {
    const extendedEntities: ExtendedEntities = {}

    if (legacy.extended_entities?.media) {
      for (const media of legacy.extended_entities.media) {
        extendedEntities.media = extendedEntities.media ?? []
        extendedEntities.media.push({
          display_url: media.display_url,
          expanded_url: media.expanded_url,
          id: Number(media.id_str),
          id_str: media.id_str,
          indices: [media.indices[0], media.indices[1]],
          media_url_https: media.media_url_https,
          media_url: media.media_url_https,
          type: media.type,
          url: media.url,
          sizes: {
            large: {
              h: media.sizes.large.h,
              w: media.sizes.large.w,
              resize: media.sizes.large.resize,
            },
            medium: {
              h: media.sizes.medium.h,
              w: media.sizes.medium.w,
              resize: media.sizes.medium.resize,
            },
            small: {
              h: media.sizes.small.h,
              w: media.sizes.small.w,
              resize: media.sizes.small.resize,
            },
            thumb: {
              h: media.sizes.thumb.h,
              w: media.sizes.thumb.w,
              resize: media.sizes.thumb.resize,
            },
          },
          video_info: this.convertToVideoInfo(media.video_info),
        })
      }
    }

    return extendedEntities
  },

  /**
   * ユーザーのレガシーオブジェクトからユーザーエンティティを変換する
   *
   * @param legacy ユーザーのレガシーオブジェクト
   * @returns ユーザーエンティティ
   */
  convertUserEntities(legacy: CustomUserLegacyObject): UserEntities {
    const entities: UserEntities = {
      description: {},
    }

    const urls = legacy.entities.description.urls as {
      display_url: string
      expanded_url: string
      indices: number[]
      url: string
    }[]
    for (const url of urls) {
      entities.description.urls = entities.description.urls ?? []
      entities.description.urls.push({
        display_url: url.display_url,
        expanded_url: url.expanded_url,
        indices: [url.indices[0], url.indices[1]],
        url: url.url,
      })
    }

    if (legacy.entities?.url?.urls) {
      for (const url of legacy.entities.url.urls) {
        entities.url = entities.url ?? {}
        entities.url.urls = entities.url.urls ?? []
        entities.url.urls.push({
          display_url: url.display_url,
          expanded_url: url.expanded_url,
          indices: [url.indices[0], url.indices[1]],
          url: url.url,
        })
      }
    }

    return entities
  },

  /**
   * ツイートのレガシーオブジェクトから座標を変換する
   *
   * @param legacy ツイートのレガシーオブジェクト
   * @returns 座標
   */
  convertCoordinates(legacy: CustomTweetLegacyObject): Coordinates | undefined {
    if (!('geo' in legacy) || !legacy.geo) {
      return
    }

    const geo = legacy.geo as {
      coordinates: number[]
      type: string
    }

    return {
      coordinates: [geo.coordinates[1], geo.coordinates[0]],
      type: geo.type,
    }
  },

  /**
   * ツイートのレガシーオブジェクトから場所を変換する
   *
   * @param legacy ツイートのレガシーオブジェクト
   * @returns 場所
   */
  convertPlace(legacy: CustomTweetLegacyObject): Place | undefined {
    if (!legacy.place) {
      return
    }

    const place = legacy.place as {
      attributes: Record<string, never>
      bounding_box: {
        coordinates: number[][][]
        type: string
      }
      contained_within: string[] | null | undefined
      country_code: string
      country: string
      full_name: string
      id: string
      name: string
      place_type: string
      url: string
    }

    return {
      attributes: place.attributes,
      bounding_box: {
        coordinates: place.bounding_box.coordinates.map((coordinate) =>
          coordinate.map(
            (coordinate) => [coordinate[1], coordinate[0]] as [number, number]
          )
        ),
        type: place.bounding_box.type,
      },
      contained_within: place.contained_within as string[] | null | undefined,
      country_code: place.country_code,
      country: place.country,
      full_name: place.full_name,
      id: place.id,
      name: place.name,
      place_type: place.place_type,
      url: place.url,
    }
  },

  convertToVideoInfo(
    videoInfo: CustomEntityVideoInfoObject | undefined
  ): VideoInfo | undefined {
    if (!videoInfo) {
      return
    }

    return {
      aspect_ratio: [videoInfo.aspect_ratio[0], videoInfo.aspect_ratio[1]],
      duration_millis: videoInfo.duration_millis,
      variants: videoInfo.variants.map((variant) => ({
        bitrate: variant.bitrate,
        content_type: variant.content_type,
        url: variant.url,
      })),
    }
  },

  /**
   * GraphQLのレスポンスにあるツイートオブジェクトをStatusに変換する。
   *
   * @param tweet ツイートオブジェクト
   * @returns Status
   */
  convertToStatus(tweet: CustomTweetObject): Status {
    // ここはエラー出てもts-ignoreで黙らせるのではなく、型定義を変更するべき。
    // ObjectConverterで適宜対応（number[] -> [number, number] で大体死んでる）
    const legacy = tweet.legacy ?? tweet.tweet?.legacy ?? undefined
    if (!legacy) {
      throw new ResponseParseError('Failed to get legacy')
    }
    const userResult =
      tweet.core?.user_results.result ??
      tweet.tweet?.core?.user_results.result ??
      undefined
    if (!userResult) {
      throw new ResponseParseError('Failed to get userResult')
    }
    return {
      id: Number(legacy.id_str),
      source: tweet.source ?? 'NULL',
      truncated: false,
      user: {
        id: Number(userResult.rest_id),
        id_str: userResult.rest_id,
        ...userResult.legacy,
      },
      ...legacy,
      display_text_range: legacy.display_text_range
        ? [legacy.display_text_range[0], legacy.display_text_range[1]]
        : undefined,
      entities: ObjectConverter.convertTweetEntities(
        legacy as CustomTweetLegacyObject
      ),
      extended_entities: ObjectConverter.convertExtendedEntities(
        legacy as CustomTweetLegacyObject
      ),
      coordinates: ObjectConverter.convertCoordinates(
        legacy as CustomTweetLegacyObject
      ),
      place: ObjectConverter.convertPlace(legacy as CustomTweetLegacyObject),
    }
  },

  /**
   * GraphQLのレスポンスにあるユーザーオブジェクトをFullUserに変換する。
   *
   * @param response GraphQLのレスポンス
   * @returns FullUser
   */
  convertToFullUser(
    response: GraphQLGetUserByScreenNameSuccessResponse
  ): FullUser {
    const user = response.data.user.result

    return {
      created_at: user.legacy.created_at,
      default_profile_image: user.legacy.default_profile_image,
      default_profile: user.legacy.default_profile,
      description: user.legacy.description,
      entities: this.convertUserEntities(user.legacy),
      favourites_count: user.legacy.favourites_count,
      followers_count: user.legacy.followers_count,
      friends_count: user.legacy.friends_count,
      id_str: user.rest_id,
      id: Number(user.rest_id),
      listed_count: user.legacy.listed_count,
      location: user.legacy.location,
      name: user.legacy.name,
      profile_banner_url: user.legacy.profile_banner_url,
      profile_image_url_https: user.legacy.profile_image_url_https,
      protected:
        'protected' in user.legacy ? (user.legacy.protected as boolean) : false,
      screen_name: user.legacy.screen_name,
      // @ts-ignore
      status: user.legacy.status,
      statuses_count: user.legacy.statuses_count,
      url: user.legacy.url,
      verified: user.legacy.verified,
      // @ts-ignore
      withheld_in_countries: user.legacy.withheld_in_countries,
      // @ts-ignore
      withheld_scope: user.legacy.withheld_scope,
    }
  },
}
