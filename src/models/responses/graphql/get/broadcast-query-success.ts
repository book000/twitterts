/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL GET BroadcastQuery 成功レスポンスモデル */

export interface GraphQLGetBroadcastQuerySuccessResponse {
  data: {
    broadcast: {
      available_for_replay: boolean
      broadcast_id: string
      camera_rotation: number
      chat_option: number
      end_time: number
      height: number
      id: string
      image_url: string
      image_url_medium: string
      image_url_small: string
      is_high_latency?: boolean
      media_key: string
      ping_time: number
      private_chat: boolean
      start_time: number
      state: string
      status: string
      source?: string
      total_watched: number
      total_watching: number
      user_results: {
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
              url: {
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
            url: string
            verified: boolean
            want_retweets: boolean
            withheld_in_countries: unknown[]
            following?: boolean
            verified_type?: string
          }
          professional?: {
            rest_id: string
            professional_type: string
            category: {
              id: number
              name: string
              icon_name: string
            }[]
          }
        }
      }
      version: number
      view_count_graph?: number[]
      width: number
      edited_replay?: {
        title_edited: boolean
      }
      periscope_user?: {
        display_name: string
        profile_image_url: string
        rest_id: string
        username: string
      }
      pre_live_slate_url?: string
      scheduled_start_time?: number
      tweet_results?: {
        result: {
          __typename: string
          rest_id: string
          core: {
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
                    url: {
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
                  pinned_tweet_ids_str: unknown[]
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
                professional: {
                  rest_id: string
                  professional_type: string
                  category: unknown[]
                }
              }
            }
          }
          card: {
            rest_id: string
            legacy: {
              binding_values: {
                key: string
                value: {
                  string_value?: string
                  type: string
                  scribe_key?: string
                  user_value?: {
                    id_str: string
                    path: unknown[]
                  }
                  image_value?: {
                    height: number
                    width: number
                    url: string
                  }
                  boolean_value?: boolean
                  image_color_value?: {
                    palette: {
                      rgb: {
                        blue: number
                        green: number
                        red: number
                      }
                      percentage: number
                    }[]
                  }
                }
              }[]
              card_platform: {
                platform: {
                  audience: {
                    name: string
                  }
                  device: {
                    name: string
                    version: string
                  }
                }
              }
              name: string
              url: string
              user_refs_results: {
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
                      url: {
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
                    pinned_tweet_ids_str: unknown[]
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
                  professional: {
                    rest_id: string
                    professional_type: string
                    category: unknown[]
                  }
                }
              }[]
            }
          }
          unmention_data: {}
          edit_control: {
            edit_tweet_ids: string[]
            editable_until_msecs: string
            is_edit_eligible: boolean
            edits_remaining: string
          }
          is_translatable: boolean
          views: {
            count: string
            state: string
          }
          source: string
          legacy: {
            bookmark_count: number
            bookmarked: boolean
            created_at: string
            conversation_id_str: string
            display_text_range: number[]
            entities: {
              hashtags: {
                indices: number[]
                text: string
              }[]
              symbols: unknown[]
              timestamps: unknown[]
              urls: {
                display_url: string
                expanded_url: string
                url: string
                indices: number[]
              }[]
              user_mentions: {
                id_str: string
                name: string
                screen_name: string
                indices: number[]
              }[]
            }
            favorite_count: number
            favorited: boolean
            full_text: string
            is_quote_status: boolean
            lang: string
            possibly_sensitive: boolean
            possibly_sensitive_editable: boolean
            quote_count: number
            reply_count: number
            retweet_count: number
            retweeted: boolean
            user_id_str: string
            id_str: string
          }
        }
      }
    }
  }
}
