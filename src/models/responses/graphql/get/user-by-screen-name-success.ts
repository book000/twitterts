/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET UserByScreenName 成功レスポンスモデル */

export interface GraphQLGetUserByScreenNameSuccessResponse {
  data: {
    user?: {
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
        is_profile_translatable: boolean
        legacy: {
          can_dm?: boolean
          can_media_tag?: boolean
          created_at?: string
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
          location?: string
          media_count: number
          name?: string
          normal_followers_count: number
          pinned_tweet_ids_str: string[]
          possibly_sensitive: boolean
          profile_banner_url?: string
          profile_image_url_https?: string
          profile_interstitial_type: string
          screen_name?: string
          statuses_count: number
          translator_type: string
          url?: string
          verified?: boolean
          want_retweets?: boolean
          withheld_in_countries: string[]
          followed_by?: boolean
          protected?: boolean
          needs_phone_verification?: boolean
          verified_type?: string
          notifications?: boolean
        }
        legacy_extended_profile?: {
          birthdate?: {
            day?: number
            month?: number
            visibility: string
            year?: number
            year_visibility: string
          }
        }
        parody_commentary_fan_label: string
        premium_gifting_eligible?: boolean
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
            verified_since_msec?: string
          }
        }
        professional?: {
          category: {
            icon_name: string
            id: number
            name: string
          }[]
          professional_type: string
          rest_id: string
        }
        super_follow_eligible?: boolean
        verification?: {
          verified: boolean
          verified_type?: string
        }
        location?: {
          location: string
        }
        privacy?: {
          protected: boolean
        }
        avatar?: {
          image_url: string
        }
        dm_permissions?: {
          can_dm: boolean
        }
        media_permissions?: {
          can_media_tag: boolean
        }
        relationship_perspectives?: {
          following: boolean
          blocking?: boolean
        }
        core?: {
          created_at: string
          name: string
          screen_name: string
        }
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
