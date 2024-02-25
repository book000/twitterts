/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL GET Viewer 成功レスポンスモデル */

export interface GraphQLGetViewerSuccessResponse {
  data: {
    viewer: {
      has_community_memberships: boolean
      create_community_action_result: {
        __typename: string
        reason: string
        message: string
      }
      user_features: {
        feature: string
        enabled: boolean
      }[]
      user_results: {
        result: {
          __typename: string
          id: string
          rest_id: string
          affiliates_highlighted_label: {}
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
                urls: unknown[]
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
            needs_phone_verification: boolean
            normal_followers_count: number
            pinned_tweet_ids_str: string[]
            possibly_sensitive: boolean
            profile_banner_url: string
            profile_image_url_https: string
            profile_interstitial_type: string
            screen_name: string
            statuses_count: number
            translator_type: string
            verified: boolean
            want_retweets: boolean
            withheld_in_countries: unknown[]
            url?: string
          }
          legacy_extended_profile: {
            birthdate?: {
              day: number
              month: number
              year: number
              visibility: string
              year_visibility: string
            }
          }
          is_profile_translatable: boolean
          super_follows_application_status: string
          creator_subscriptions_count: number
        }
      }
      educationFlags: {
        flag: string
        timestamp: number
      }[]
      is_tfe_restricted_session: boolean
      is_active_creator: boolean
      super_followers_count: number
    }
    is_super_follow_subscriber: boolean
  }
}
