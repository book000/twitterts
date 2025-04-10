/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET UserByScreenName 成功レスポンスモデル */

export interface GraphQLGetUserByScreenNameSuccessResponse {
  data: {
    user: {
      result: {
        __typename: string
        affiliates_highlighted_label: {}
        business_account: {}
        creator_subscriptions_count: number
        has_graduated_access: boolean
        has_hidden_subscriptions_on_profile: boolean
        highlights_info: {
          can_highlight_tweets: boolean
          highlighted_tweets: string
        }
        id: string
        is_blue_verified: boolean
        is_profile_translatable: boolean
        legacy: {
          can_dm: boolean
          can_media_tag: boolean
          created_at: string
          default_profile: boolean
          default_profile_image: boolean
          description: string
          entities: {
            description: {
              urls: unknown[]
            }
            url?: {
              urls: {
                display_url: string
                expanded_url: string
                indices: number[]
                url: string
              }[]
            }
          }
          fast_followers_count: number
          favourites_count: number
          followers_count: number
          following: boolean
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
          profile_banner_url: string
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
          protected?: boolean
          needs_phone_verification?: boolean
        }
        legacy_extended_profile: {
          birthdate?: {
            day: number
            month: number
            visibility: string
            year: number
            year_visibility: string
          }
        }
        parody_commentary_fan_label: string
        premium_gifting_eligible: boolean
        profile_image_shape: string
        rest_id: string
        tipjar_settings: {}
        user_seed_tweet_count: number
        verification_info: {
          is_identity_verified: boolean
          reason?: {
            description: {
              entities: {
                from_index: number
                ref: {
                  url: string
                  url_type: string
                }
                to_index: number
              }[]
              text: string
            }
            verified_since_msec: string
          }
        }
      }
    }
  }
}
