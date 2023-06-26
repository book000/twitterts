import { Entities, ExtendedEntities } from 'twitter-d'
import { CustomTweetLegacyObject } from './models/responses/custom/custom-tweet-legacy-object'

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
}
