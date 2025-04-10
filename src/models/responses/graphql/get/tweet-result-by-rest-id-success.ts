/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET TweetResultByRestId 成功レスポンスモデル */

export interface GraphQLGetTweetResultByRestIdSuccessResponse {
  data: {
    tweetResult: {
      result: {
        __typename: string
        core: {
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
                verified_type: string
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
        edit_control: {
          edit_tweet_ids: string[]
          editable_until_msecs: string
          edits_remaining: string
          is_edit_eligible: boolean
        }
        has_birdwatch_notes: boolean
        is_translatable: boolean
        legacy: {
          bookmark_count: number
          bookmarked: boolean
          conversation_id_str: string
          created_at: string
          display_text_range: number[]
          entities: {
            hashtags: unknown[]
            media: {
              additional_media_info: {
                monetizable: boolean
              }
              allow_download_status: {
                allow_download: boolean
              }
              display_url: string
              expanded_url: string
              ext_media_availability: {
                status: string
              }
              id_str: string
              indices: number[]
              media_key: string
              media_results: {
                result: {
                  media_key: string
                }
              }
              media_url_https: string
              original_info: {
                focus_rects: unknown[]
                height: number
                width: number
              }
              sizes: {
                large: {
                  h: number
                  resize: string
                  w: number
                }
                medium: {
                  h: number
                  resize: string
                  w: number
                }
                small: {
                  h: number
                  resize: string
                  w: number
                }
                thumb: {
                  h: number
                  resize: string
                  w: number
                }
              }
              type: string
              url: string
              video_info: {
                aspect_ratio: number[]
                duration_millis: number
                variants: {
                  bitrate?: number
                  content_type: string
                  url: string
                }[]
              }
            }[]
            symbols: unknown[]
            timestamps: unknown[]
            urls: unknown[]
            user_mentions: unknown[]
          }
          extended_entities: {
            media: {
              additional_media_info: {
                monetizable: boolean
              }
              allow_download_status: {
                allow_download: boolean
              }
              display_url: string
              expanded_url: string
              ext_media_availability: {
                status: string
              }
              id_str: string
              indices: number[]
              media_key: string
              media_results: {
                result: {
                  media_key: string
                }
              }
              media_url_https: string
              original_info: {
                focus_rects: unknown[]
                height: number
                width: number
              }
              sizes: {
                large: {
                  h: number
                  resize: string
                  w: number
                }
                medium: {
                  h: number
                  resize: string
                  w: number
                }
                small: {
                  h: number
                  resize: string
                  w: number
                }
                thumb: {
                  h: number
                  resize: string
                  w: number
                }
              }
              type: string
              url: string
              video_info: {
                aspect_ratio: number[]
                duration_millis: number
                variants: {
                  bitrate?: number
                  content_type: string
                  url: string
                }[]
              }
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
          scopes: {
            followers: boolean
          }
          user_id_str: string
        }
        rest_id: string
        source: string
        unmention_data: {}
        views: {
          count: string
          state: string
        }
      }
    }
  }
}
