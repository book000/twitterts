/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL GET UserByScreenName 成功レスポンスモデル */

export interface GraphQLGetUserByScreenNameSuccessResponse {
  data: {
    user: {
      result: {
        __typename: string
        id: string
        rest_id: string
        affiliates_highlighted_label: {
          label?: {
            url: {
              url: string
              urlType: string
            }
            badge: {
              url: string
            }
            description: string
            userLabelType: string
            userLabelDisplayType: string
          }
        }
        has_graduated_access: boolean
        is_blue_verified: boolean
        profile_image_shape: string
        legacy: {
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
          needs_phone_verification?: boolean
          followed_by?: boolean
          following?: boolean
          muting?: boolean
        }
        smart_blocked_by: boolean
        smart_blocking: boolean
        legacy_extended_profile: {
          birthdate?: {
            day: number
            month: number
            visibility: string
            year_visibility: string
            year?: number
          }
        }
        is_profile_translatable: boolean
        verification_info: {
          reason?: {
            description: {
              text: string
              entities: {
                from_index: number
                to_index: number
                ref: {
                  url: string
                  url_type: string
                }
              }[]
            }
            verified_since_msec: string
            override_verified_year: number
          }
        }
        highlights_info: {
          can_highlight_tweets: boolean
          highlighted_tweets: string
        }
        business_account: {}
        creator_subscriptions_count: number
        professional?: {
          rest_id: string
          professional_type: string
          category: {
            id: number
            name: string
            icon_name: string
          }[]
        }
        super_follow_eligible?: boolean
        has_hidden_subscriptions_on_profile?: boolean
      }
    }
  }
}
