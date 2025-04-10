/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET BroadcastQuery 成功レスポンスモデル */

export interface GraphQLGetBroadcastQuerySuccessResponse {
  data: {
    broadcast: {
      available_for_replay: boolean
      broadcast_id: string
      camera_rotation: number
      chat_option: number
      height: number
      id: string
      image_url?: string
      image_url_medium?: string
      image_url_small?: string
      is_high_latency?: boolean
      media_key: string
      periscope_user?: {
        display_name: string
        profile_image_url: string
        rest_id: string
        username: string
      }
      ping_time?: number
      private_chat: boolean
      source?: string
      start_time?: number
      state: string
      status: string
      total_watched?: number
      total_watching: number
      user_results: {
        result: {
          __typename: string
          affiliates_highlighted_label: {
            label?: {
              badge: {
                url: string
              }
              description: string
              url: {
                url: string
                urlType: string
              }
              userLabelDisplayType: string
              userLabelType: string
            }
          }
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
                urls: {
                  display_url: string
                  expanded_url: string
                  indices: number[]
                  url: string
                }[]
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
            verified_type?: string
          }
          parody_commentary_fan_label: string
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
          super_follow_eligible?: boolean
          tipjar_settings: {
            is_enabled?: boolean
            venmo_handle?: string
          }
        }
      }
      version: number
      width: number
      end_time?: number
      tweet_results?: {
        result: {
          __typename: string
          card: {
            legacy: {
              binding_values: {
                key: string
                value: {
                  boolean_value?: boolean
                  image_color_value?: {
                    palette: {
                      percentage: number
                      rgb: {
                        blue: number
                        green: number
                        red: number
                      }
                    }[]
                  }
                  image_value?: {
                    height: number
                    url: string
                    width: number
                  }
                  scribe_key?: string
                  string_value?: string
                  type: string
                  user_value?: {
                    id_str: string
                    path: unknown[]
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
                  affiliates_highlighted_label: {
                    label?: {
                      badge: {
                        url: string
                      }
                      description: string
                      url: {
                        url: string
                        urlType: string
                      }
                      userLabelDisplayType: string
                      userLabelType: string
                    }
                  }
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
                        urls: {
                          display_url: string
                          expanded_url: string
                          indices: number[]
                          url: string
                        }[]
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
                    verified_type?: string
                    want_retweets: boolean
                    withheld_in_countries: unknown[]
                  }
                  parody_commentary_fan_label: string
                  profile_image_shape: string
                  rest_id: string
                  tipjar_settings: {
                    is_enabled?: boolean
                    venmo_handle?: string
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
                }
              }[]
            }
            rest_id: string
          }
          core: {
            user_results: {
              result: {
                __typename: string
                affiliates_highlighted_label: {
                  label?: {
                    badge: {
                      url: string
                    }
                    description: string
                    url: {
                      url: string
                      urlType: string
                    }
                    userLabelDisplayType: string
                    userLabelType: string
                  }
                }
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
                      urls: {
                        display_url: string
                        expanded_url: string
                        indices: number[]
                        url: string
                      }[]
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
                  verified_type?: string
                  want_retweets: boolean
                  withheld_in_countries: unknown[]
                }
                parody_commentary_fan_label: string
                profile_image_shape: string
                rest_id: string
                tipjar_settings: {
                  is_enabled?: boolean
                  venmo_handle?: string
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
              }
            }
          }
          edit_control: {
            edit_tweet_ids: string[]
            editable_until_msecs: string
            edits_remaining: string
            is_edit_eligible: boolean
          }
          grok_analysis_button?: boolean
          is_translatable: boolean
          legacy: {
            bookmark_count: number
            bookmarked: boolean
            conversation_id_str: string
            created_at: string
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
                indices: number[]
                url: string
              }[]
              user_mentions: {
                id_str: string
                indices: number[]
                name: string
                screen_name: string
              }[]
            }
            favorite_count: number
            favorited: boolean
            full_text: string
            id_str: string
            is_quote_status: boolean
            lang: string
            possibly_sensitive: boolean
            possibly_sensitive_editable: boolean
            quote_count: number
            reply_count: number
            retweet_count: number
            retweeted: boolean
            user_id_str: string
            scopes?: {
              followers: boolean
            }
          }
          rest_id: string
          source: string
          unmention_data: {}
          views: {
            count: string
            state: string
          }
          grok_analysis_followups?: unknown[]
        }
      }
      view_count_graph?: number[]
      edited_replay?: {
        title_edited?: boolean
        start_time?: number
      }
      pre_live_slate_url?: string
      scheduled_start_time?: number
      timedout_time?: number
    }
  }
}
