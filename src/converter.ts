import {
  Coordinates,
  Entities,
  ExtendedEntities,
  Place,
  Status,
} from 'twitter-d'
import { CustomTweetLegacyObject } from './models/responses/custom/custom-tweet-legacy-object'
import { CustomTweetObject } from './models/responses/custom/custom-tweet-object'
import { ResponseParseError } from './models/exceptions'

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
  convertEntity(legacy: CustomTweetLegacyObject): Entities {
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
  convertExtendedEntity(legacy: CustomTweetLegacyObject): ExtendedEntities {
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
        })
      }
    }

    return extendedEntities
  },

  /**
   * ツイートのレガシーオブジェクトから座標を変換する
   *
   * @param legacy ツイートのレガシーオブジェクト
   * @returns 座標
   */
  convertCoordinates(legacy: CustomTweetLegacyObject): Coordinates | undefined {
    if (!legacy.geo) {
      return
    }

    return {
      coordinates: [legacy.geo.coordinates[1], legacy.geo.coordinates[0]],
      type: legacy.geo.type,
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

    return {
      attributes: legacy.place.attributes,
      bounding_box: {
        coordinates: legacy.place.bounding_box.coordinates.map((coordinate) =>
          coordinate.map(
            (coordinate) => [coordinate[1], coordinate[0]] as [number, number]
          )
        ),
        type: legacy.place.bounding_box.type,
      },
      contained_within: legacy.place.contained_within as
        | string[]
        | null
        | undefined,
      country_code: legacy.place.country_code,
      country: legacy.place.country,
      full_name: legacy.place.full_name,
      id: legacy.place.id,
      name: legacy.place.name,
      place_type: legacy.place.place_type,
      url: legacy.place.url,
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
      // eslint-disable-next-line no-console
      console.log(tweet)
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
      entities: ObjectConverter.convertEntity(
        legacy as CustomTweetLegacyObject
      ),
      extended_entities: ObjectConverter.convertExtendedEntity(
        legacy as CustomTweetLegacyObject
      ),
      coordinates: ObjectConverter.convertCoordinates(
        legacy as CustomTweetLegacyObject
      ),
      place: ObjectConverter.convertPlace(legacy as CustomTweetLegacyObject),
    }
  },
}
