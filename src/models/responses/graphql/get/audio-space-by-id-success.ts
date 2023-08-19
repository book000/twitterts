/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL GET AudioSpaceById 成功レスポンスモデル */

export interface GraphQLGetAudioSpaceByIdSuccessResponse {
  data: {
    audioSpace: {
      metadata: {
        rest_id: string
        state: string
        title: string
        media_key: string
        created_at: number
        started_at: number
        ended_at: string
        replay_start_time?: number
        updated_at: number
        disallow_join: boolean
        narrow_cast_space_type: number
        is_employee_only: boolean
        is_locked: boolean
        is_space_available_for_replay: boolean
        is_space_available_for_clipping: boolean
        conversation_controls: number
        total_replay_watched: number
        total_live_listeners: number
        creator_results: {
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
              verified_type?: string
              want_retweets: boolean
              withheld_in_countries: unknown[]
            }
          }
        }
        scheduled_start?: number
      }
      is_subscribed: boolean
      sharings: {
        items: unknown[]
        slice_info: {}
      }
      participants: {
        total: number
        admins: {
          periscope_user_id: string
          start: number
          twitter_screen_name: string
          display_name: string
          avatar_url: string
          is_verified: boolean
          is_muted_by_admin: boolean
          is_muted_by_guest: boolean
          user_results: {
            rest_id: string
            result: {
              __typename: string
              identity_profile_labels_highlighted_label: {
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
              has_nft_avatar: boolean
              is_blue_verified: boolean
              legacy: {
                verified_type?: string
              }
            }
          }
        }[]
        speakers: {
          periscope_user_id: string
          start: number
          twitter_screen_name: string
          display_name: string
          avatar_url: string
          is_verified: boolean
          is_muted_by_admin: boolean
          is_muted_by_guest: boolean
          user_results: {
            rest_id: string
            result: {
              __typename: string
              identity_profile_labels_highlighted_label: {
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
              has_nft_avatar: boolean
              is_blue_verified: boolean
              legacy: {}
            }
          }
        }[]
        listeners: {
          periscope_user_id: string
          twitter_screen_name: string
          display_name: string
          avatar_url: string
          is_verified: boolean
          user_results: {
            rest_id: string
            result: {
              __typename: string
              identity_profile_labels_highlighted_label: {}
              has_nft_avatar: boolean
              is_blue_verified: boolean
              legacy: {}
            }
          }
        }[]
      }
    }
  }
}
