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

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
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

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (legacy.entities.symbols) {
      for (const symbol of legacy.entities.symbols) {
        entities.symbols = entities.symbols ?? []
        // @ts-expect-error number[] to [number, number]
        entities.symbols.push(symbol)
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
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

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
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

    const urls = legacy.entities.description.urls
    for (const url of urls) {
      entities.description.urls = entities.description.urls ?? []
      entities.description.urls.push({
        display_url: url.display_url,
        expanded_url: url.expanded_url,
        indices: [url.indices[0], url.indices[1]],
        url: url.url,
      })
    }

    if (legacy.entities.url?.urls) {
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

    const geo = legacy.geo

    return {
      // @ts-expect-error geo.coordinates は number[] | undefined
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      coordinates: [geo.coordinates[1], geo.coordinates[0]],
      // @ts-expect-error geo.type は string
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
    if ('place' in legacy) {
      return
    }

    const place = legacy.place
    if (!place) {
      return
    }

    return {
      attributes: ('attributes' in place
        ? place.attributes
        : {}) as Place['attributes'],
      bounding_box: {
        coordinates: place.bounding_box.coordinates.map((coordinate) =>
          coordinate.map(
            (coordinate) => [coordinate[1], coordinate[0]] as [number, number]
          )
        ),
        type: place.bounding_box.type,
      },
      contained_within: ('contained_within' in place
        ? place.contained_within
        : []) as Place['contained_within'],
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
    // userResult.rest_id は null である可能性もある
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    const userId = userResult.rest_id ?? userResult.id
    if (!userId) {
      throw new ResponseParseError('Failed to get user id')
    }
    return {
      id: Number(legacy.id_str),
      source: tweet.source ?? 'NULL',
      truncated: false,
      user: {
        id: Number(userId),
        id_str: userId,
        ...userResult.legacy,
      },
      ...legacy,
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
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
    if (!response.data.user) {
      throw new ResponseParseError('Failed to get user data')
    }
    const user = response.data.user.result

    const createdAt = user.legacy.created_at ?? user.core?.created_at
    if (!createdAt) {
      throw new ResponseParseError('Failed to get user created_at')
    }

    const name = user.legacy.name ?? user.core?.name
    if (!name) {
      throw new ResponseParseError('Failed to get user name')
    }

    const screenName = user.legacy.screen_name ?? user.core?.screen_name
    if (!screenName) {
      throw new ResponseParseError('Failed to get user screen_name')
    }

    const verified = user.legacy.verified ?? user.verification?.verified
    if (verified === undefined) {
      throw new ResponseParseError('Failed to get user verified status')
    }

    return {
      created_at: createdAt,
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
      name,
      profile_banner_url: user.legacy.profile_banner_url,
      profile_image_url_https: user.legacy.profile_image_url_https ?? '',
      protected:
        'protected' in user.legacy && user.legacy.protected
          ? user.legacy.protected
          : false,
      screen_name: screenName,
      // @ts-expect-error statusの型が異なるため
      status: 'status' in user && user.status ? user.status : undefined,
      statuses_count: user.legacy.statuses_count,
      url: user.legacy.url,
      verified,
      withheld_in_countries: user.legacy.withheld_in_countries,
      // @ts-expect-error withheld_scopeがunknownのため
      withheld_scope:
        'withheld_scope' in user.legacy
          ? user.legacy.withheld_scope
          : undefined,
    }
  },
}
