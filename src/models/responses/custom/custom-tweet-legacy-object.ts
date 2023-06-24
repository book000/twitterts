/* eslint-disable @typescript-eslint/ban-types */

/** レスポンスツイートレガシーオブジェクト */

export interface CustomTweetLegacyObject {
  bookmark_count: number
  bookmarked: boolean
  created_at: string
  conversation_id_str: string
  display_text_range: number[]
  entities: {
    media?: {
      display_url: string
      expanded_url: string
      id_str: string
      indices: number[]
      media_url_https: string
      type: string
      url: string
      features: {
        large?: {
          faces: {
            x: number
            y: number
            h: number
            w: number
          }[]
        }
        medium?: {
          faces: {
            x: number
            y: number
            h: number
            w: number
          }[]
        }
        small?: {
          faces: {
            x: number
            y: number
            h: number
            w: number
          }[]
        }
        orig?: {
          faces: {
            x: number
            y: number
            h: number
            w: number
          }[]
        }
      }
      sizes: {
        large: {
          h: number
          w: number
          resize: string
        }
        medium: {
          h: number
          w: number
          resize: string
        }
        small: {
          h: number
          w: number
          resize: string
        }
        thumb: {
          h: number
          w: number
          resize: string
        }
      }
      original_info: {
        height: number
        width: number
        focus_rects?: {
          x: number
          y: number
          w: number
          h: number
        }[]
      }
      source_status_id_str?: string
      source_user_id_str?: string
    }[]
    user_mentions: {
      id_str: string
      name: string
      screen_name: string
      indices: number[]
    }[]
    urls: {
      display_url: string
      expanded_url: string
      url: string
      indices: number[]
    }[]
    hashtags: {
      indices: number[]
      text: string
    }[]
    symbols: unknown[]
  }
  extended_entities?: {
    media: {
      display_url: string
      expanded_url: string
      id_str: string
      indices: number[]
      media_key: string
      media_url_https: string
      type: string
      url: string
      additional_media_info?: {
        title?: string
        description?: string
        embeddable?: boolean
        monetizable: boolean
        source_user?: {
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
              professional?: {
                rest_id: string
                professional_type: string
                category: unknown[]
              }
            }
          }
        }
        call_to_actions?: {
          visit_site: {
            url: string
          }
        }
      }
      mediaStats?: {
        viewCount: number
      }
      ext_media_availability: {
        status: string
      }
      features: {
        large?: {
          faces: {
            x: number
            y: number
            h: number
            w: number
          }[]
        }
        medium?: {
          faces: {
            x: number
            y: number
            h: number
            w: number
          }[]
        }
        small?: {
          faces: {
            x: number
            y: number
            h: number
            w: number
          }[]
        }
        orig?: {
          faces: {
            x: number
            y: number
            h: number
            w: number
          }[]
        }
      }
      sizes: {
        large: {
          h: number
          w: number
          resize: string
        }
        medium: {
          h: number
          w: number
          resize: string
        }
        small: {
          h: number
          w: number
          resize: string
        }
        thumb: {
          h: number
          w: number
          resize: string
        }
      }
      original_info: {
        height: number
        width: number
        focus_rects?: {
          x: number
          y: number
          w: number
          h: number
        }[]
      }
      video_info?: {
        aspect_ratio: number[]
        duration_millis?: number
        variants: {
          content_type: string
          url: string
          bitrate?: number
        }[]
      }
      source_status_id_str?: string
      source_user_id_str?: string
      ext_alt_text?: string
    }[]
  }
  favorite_count: number
  favorited: boolean
  full_text: string
  is_quote_status: boolean
  lang: string
  possibly_sensitive?: boolean
  possibly_sensitive_editable?: boolean
  quote_count: number
  reply_count: number
  retweet_count: number
  retweeted: boolean
  user_id_str: string
  id_str: string
  place?: {
    attributes: {}
    bounding_box: {
      coordinates: number[][][]
      type: string
    }
    contained_within: unknown[]
    country: string
    country_code: string
    full_name: string
    name: string
    id: string
    place_type: string
    url: string
  }
  quoted_status_id_str?: string
  quoted_status_permalink?: {
    url: string
    expanded: string
    display: string
  }
  in_reply_to_screen_name?: string
  in_reply_to_status_id_str?: string
  in_reply_to_user_id_str?: string
}
