/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET PinnedTimelines 成功レスポンスモデル */

export interface GraphQLGetPinnedTimelinesSuccessResponse {
  data: {
    pinned_timelines?: {
      pinned_timelines: {
        __typename: string
        list: {
          created_at: number
          custom_banner_media: {
            media_info: {
              original_img_height: number
              original_img_url: string
              original_img_width: number
              salient_rect: {
                height: number
                left: number
                top: number
                width: number
              }
            }
          }
          custom_banner_media_results: {
            result: {
              __typename: string
              id: string
              media_id: string
              media_info: {
                __typename: string
                color_info: {
                  palette: {
                    percentage: number
                    rgb: {
                      blue: number
                      green: number
                      red: number
                    }
                  }[]
                }
                original_img_height: number
                original_img_url: string
                original_img_width: number
                salient_rect: {
                  height: number
                  left: number
                  top: number
                  width: number
                }
              }
              media_key: string
            }
          }
          default_banner_media: {
            media_info: {
              original_img_height: number
              original_img_url: string
              original_img_width: number
              salient_rect: {
                height: number
                left: number
                top: number
                width: number
              }
            }
          }
          default_banner_media_results: {
            result: {
              __typename: string
              id: string
              media_id: string
              media_info: {
                __typename: string
                original_img_height: number
                original_img_url: string
                original_img_width: number
                salient_rect: {
                  height: number
                  left: number
                  top: number
                  width: number
                }
              }
              media_key: string
            }
          }
          description: string
          facepile_urls: string[]
          followers_context: string
          following: boolean
          id: string
          id_str: string
          is_member: boolean
          member_count: number
          members_context: string
          mode: string
          muting: boolean
          name: string
          pinning: boolean
          subscriber_count: number
          user_results: {
            result: {
              __typename: string
              affiliates_highlighted_label: {}
              has_graduated_access: boolean
              id: string
              is_blue_verified: boolean
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
                  url: {
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
                url: string
                verified: boolean
                want_retweets: boolean
                withheld_in_countries: unknown[]
              }
              parody_commentary_fan_label: string
              profile_image_shape: string
              rest_id: string
              tipjar_settings: {}
            }
          }
        }
      }[]
    }
  }
  errors?: {
    code: number
    extensions: {
      code: number
      kind: string
      name: string
      retry_after: number
      source: string
      tracing: {
        trace_id: string
      }
    }
    kind: string
    locations: {
      column: number
      line: number
    }[]
    message: string
    name: string
    path: string[]
    retry_after: number
    source: string
    tracing: {
      trace_id: string
    }
  }[]
}
