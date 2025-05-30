 

/** GraphQL GET UserByRestId 成功レスポンスモデル */

export interface GraphQLGetUserByRestIdSuccessResponse {
  data: {
    user: {
      result: {
        __typename: string
        affiliates_highlighted_label: {
          label?: {
            badge: {
              url: string
            }
            description: string
            url?: {
              url: string
              urlType: string
            }
            userLabelDisplayType?: string
            userLabelType: string
            longDescription?: {
              entities: {
                fromIndex: number
                ref: {
                  mention_results: {
                    result: {
                      __typename: string
                      legacy: {
                        screen_name: string
                      }
                      rest_id: string
                    }
                  }
                  screen_name: string
                  type: string
                }
                toIndex: number
              }[]
              text: string
            }
          }
        }
        business_account: {
          affiliates_count?: number
        }
        creator_subscriptions_count: number
        has_graduated_access?: boolean
        has_hidden_subscriptions_on_profile: boolean
        highlights_info: {
          can_highlight_tweets: boolean
          highlighted_tweets: string
        }
        id: string
        is_blue_verified: boolean
        legacy: {
          can_dm?: boolean
          can_media_tag?: boolean
          created_at: string
          default_profile: boolean
          default_profile_image: boolean
          description: string
          entities: {
            description: {
              urls: {
                display_url: string
                expanded_url: string
                indices: number[]
                url: string
              }[]
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
          following?: boolean
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
          want_retweets?: boolean
          withheld_in_countries: string[]
          verified_type?: string
          followed_by?: boolean
          notifications?: boolean
        }
        parody_commentary_fan_label: string
        premium_gifting_eligible?: boolean
        professional?: {
          category: {
            icon_name: string
            id: number
            name: string
          }[]
          professional_type: string
          rest_id: string
        }
        profile_image_shape: string
        rest_id: string
        tipjar_settings?: {
          is_enabled?: boolean
          bitcoin_handle?: string
          ethereum_handle?: string
          venmo_handle?: string
          patreon_handle?: string
          cash_app_handle?: string
          bandcamp_handle?: string
          gofundme_handle?: string
          pay_pal_handle?: string
        }
        user_seed_tweet_count: number
        super_follow_eligible?: boolean
      }
    }
  }
  errors?: {
    code: number
    extensions: {
      code: number
      kind: string
      name: string
      source: string
      tracing: {
        trace_id: string
      }
      retry_after?: number
    }
    kind: string
    locations: {
      column: number
      line: number
    }[]
    message: string
    name: string
    path: string[]
    source: string
    tracing: {
      trace_id: string
    }
    retry_after?: number
  }[]
}
