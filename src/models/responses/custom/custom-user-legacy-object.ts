/* eslint-disable @typescript-eslint/ban-types */

/** レスポンスユーザーレガシーオブジェクト */

export interface CustomUserLegacyObject {
  can_dm: boolean
  can_media_tag: boolean
  created_at: string
  default_profile: boolean
  default_profile_image: boolean
  description: string
  entities: {
    description: {
      urls: {
        display_url: string
        expanded_url: string
        url: string
        indices: number[]
      }[]
    }
    url?: {
      urls: {
        display_url: string
        expanded_url: string
        url: string
        indices: number[]
      }[]
    }
  }
  fast_followers_count: number
  favourites_count: number
  followers_count: number
  friends_count: number
  has_custom_timelines: boolean
  is_translator: boolean
  listed_count: number
  location: string
  media_count: number
  name: string
  normal_followers_count: number
  pinned_tweet_ids_str: string[]
  possibly_sensitive: boolean
  profile_banner_url?: string
  profile_image_url_https: string
  profile_interstitial_type: string
  screen_name: string
  statuses_count: number
  translator_type: string
  url?: string
  verified: boolean
  want_retweets: boolean
  withheld_in_countries: unknown[]
  followed_by?: boolean
  following?: boolean
  muting?: boolean
  needs_phone_verification?: boolean
  protected?: boolean
  verified_type?: string
  blocking?: boolean
}
