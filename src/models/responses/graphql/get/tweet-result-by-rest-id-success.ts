/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET TweetResultByRestId 成功レスポンスモデル */

export interface GraphQLGetTweetResultByRestIdSuccessResponse {
  data: {
    tweetResult: {
      result?: {
        __typename: string
        core: {
          user_results: {
            result: {
              __typename: string
              affiliates_highlighted_label: {}
              has_graduated_access?: boolean
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
                verified_type?: string
                want_retweets?: boolean
                withheld_in_countries: unknown[]
              }
              parody_commentary_fan_label: string
              profile_image_shape: string
              rest_id: string
              tipjar_settings: {
                bandcamp_handle?: string
                bitcoin_handle?: string
                cash_app_handle?: string
                ethereum_handle?: string
                gofundme_handle?: string
                is_enabled?: boolean
                patreon_handle?: string
                pay_pal_handle?: string
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
            }
          }
        }
        edit_control: {
          edit_tweet_ids?: string[]
          editable_until_msecs?: string
          edits_remaining?: string
          is_edit_eligible?: boolean
          edit_control_initial?: {
            edit_tweet_ids: string[]
            editable_until_msecs: string
            edits_remaining: string
            is_edit_eligible: boolean
          }
          initial_tweet_id?: string
        }
        has_birdwatch_notes?: boolean
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
            media?: {
              additional_media_info?: {
                monetizable: boolean
                description?: string
                embeddable?: boolean
                title?: string
                source_user?: {
                  user_results: {
                    result: {
                      __typename: string
                      affiliates_highlighted_label: {}
                      id: string
                      is_blue_verified: boolean
                      legacy: {
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
                        withheld_in_countries: unknown[]
                      }
                      parody_commentary_fan_label: string
                      professional: {
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
                      tipjar_settings: {
                        bandcamp_handle: string
                        bitcoin_handle: string
                        cash_app_handle: string
                        ethereum_handle: string
                        gofundme_handle: string
                        is_enabled: boolean
                        patreon_handle: string
                        pay_pal_handle: string
                        venmo_handle: string
                      }
                    }
                  }
                }
              }
              allow_download_status?: {
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
                focus_rects: {
                  h: number
                  w: number
                  x: number
                  y: number
                }[]
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
              video_info?: {
                aspect_ratio: number[]
                duration_millis: number
                variants: {
                  bitrate?: number
                  content_type: string
                  url: string
                }[]
              }
              features?: {
                large: {
                  faces: {
                    h: number
                    w: number
                    x: number
                    y: number
                  }[]
                }
                medium: {
                  faces: {
                    h: number
                    w: number
                    x: number
                    y: number
                  }[]
                }
                orig: {
                  faces: {
                    h: number
                    w: number
                    x: number
                    y: number
                  }[]
                }
                small: {
                  faces: {
                    h: number
                    w: number
                    x: number
                    y: number
                  }[]
                }
              }
              source_status_id_str?: string
              source_user_id_str?: string
              ext_alt_text?: string
            }[]
            symbols: unknown[]
            timestamps: unknown[]
            urls: {
              display_url: string
              expanded_url: string
              indices: number[]
              url: string
            }[]
            user_mentions: unknown[]
          }
          extended_entities?: {
            media: {
              additional_media_info?: {
                monetizable: boolean
                description?: string
                embeddable?: boolean
                title?: string
                source_user?: {
                  user_results: {
                    result: {
                      __typename: string
                      affiliates_highlighted_label: {}
                      id: string
                      is_blue_verified: boolean
                      legacy: {
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
                        withheld_in_countries: unknown[]
                      }
                      parody_commentary_fan_label: string
                      professional: {
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
                      tipjar_settings: {
                        bandcamp_handle: string
                        bitcoin_handle: string
                        cash_app_handle: string
                        ethereum_handle: string
                        gofundme_handle: string
                        is_enabled: boolean
                        patreon_handle: string
                        pay_pal_handle: string
                        venmo_handle: string
                      }
                    }
                  }
                }
              }
              allow_download_status?: {
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
                focus_rects: {
                  h: number
                  w: number
                  x: number
                  y: number
                }[]
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
              video_info?: {
                aspect_ratio: number[]
                duration_millis: number
                variants: {
                  bitrate?: number
                  content_type: string
                  url: string
                }[]
              }
              features?: {
                large: {
                  faces: {
                    h: number
                    w: number
                    x: number
                    y: number
                  }[]
                }
                medium: {
                  faces: {
                    h: number
                    w: number
                    x: number
                    y: number
                  }[]
                }
                orig: {
                  faces: {
                    h: number
                    w: number
                    x: number
                    y: number
                  }[]
                }
                small: {
                  faces: {
                    h: number
                    w: number
                    x: number
                    y: number
                  }[]
                }
              }
              source_status_id_str?: string
              source_user_id_str?: string
              ext_alt_text?: string
            }[]
          }
          favorite_count: number
          favorited: boolean
          full_text: string
          id_str: string
          is_quote_status: boolean
          lang: string
          possibly_sensitive?: boolean
          possibly_sensitive_editable?: boolean
          quote_count: number
          reply_count: number
          retweet_count: number
          retweeted: boolean
          scopes?: {
            followers: boolean
          }
          user_id_str: string
          quoted_status_id_str?: string
          quoted_status_permalink?: {
            display: string
            expanded: string
            url: string
          }
          conversation_control?: {
            conversation_owner_results: {
              result: {
                __typename: string
                legacy: {
                  screen_name: string
                }
              }
            }
            policy: string
          }
        }
        rest_id: string
        source: string
        unmention_data: {}
        views: {
          count: string
          state: string
        }
        card?: {
          legacy: {
            binding_values: {
              key: string
              value: {
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
                affiliates_highlighted_label: {}
                id: string
                is_blue_verified: boolean
                legacy: {
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
                  verified_type?: string
                  withheld_in_countries: unknown[]
                }
                parody_commentary_fan_label: string
                profile_image_shape: string
                rest_id: string
                tipjar_settings: {
                  bandcamp_handle: string
                  bitcoin_handle: string
                  cash_app_handle: string
                  ethereum_handle: string
                  gofundme_handle: string
                  is_enabled: boolean
                  patreon_handle: string
                  pay_pal_handle: string
                  venmo_handle: string
                }
              }
            }[]
          }
          rest_id: string
        }
        quoted_status_result?: {
          result: {
            __typename: string
            core: {
              user_results: {
                result: {
                  __typename: string
                  affiliates_highlighted_label: {}
                  id: string
                  is_blue_verified: boolean
                  legacy: {
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
                    verified: boolean
                    withheld_in_countries: unknown[]
                    url?: string
                    verified_type?: string
                  }
                  parody_commentary_fan_label: string
                  profile_image_shape: string
                  rest_id: string
                  tipjar_settings: {
                    bandcamp_handle: string
                    bitcoin_handle: string
                    cash_app_handle: string
                    ethereum_handle: string
                    gofundme_handle: string
                    is_enabled: boolean
                    patreon_handle: string
                    pay_pal_handle: string
                    venmo_handle: string
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
                }
              }
            }
            edit_control: {
              edit_tweet_ids: string[]
              editable_until_msecs: string
              edits_remaining: string
              is_edit_eligible: boolean
            }
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
                media?: {
                  allow_download_status?: {
                    allow_download: boolean
                  }
                  display_url: string
                  expanded_url: string
                  ext_media_availability: {
                    status: string
                  }
                  features?: {
                    large: {
                      faces: {
                        h: number
                        w: number
                        x: number
                        y: number
                      }[]
                    }
                    medium: {
                      faces: {
                        h: number
                        w: number
                        x: number
                        y: number
                      }[]
                    }
                    orig: {
                      faces: {
                        h: number
                        w: number
                        x: number
                        y: number
                      }[]
                    }
                    small: {
                      faces: {
                        h: number
                        w: number
                        x: number
                        y: number
                      }[]
                    }
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
                    focus_rects: {
                      h: number
                      w: number
                      x: number
                      y: number
                    }[]
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
                  additional_media_info?: {
                    monetizable: boolean
                  }
                  video_info?: {
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
              extended_entities?: {
                media: {
                  allow_download_status?: {
                    allow_download: boolean
                  }
                  display_url: string
                  expanded_url: string
                  ext_media_availability: {
                    status: string
                  }
                  features?: {
                    large: {
                      faces: {
                        h: number
                        w: number
                        x: number
                        y: number
                      }[]
                    }
                    medium: {
                      faces: {
                        h: number
                        w: number
                        x: number
                        y: number
                      }[]
                    }
                    orig: {
                      faces: {
                        h: number
                        w: number
                        x: number
                        y: number
                      }[]
                    }
                    small: {
                      faces: {
                        h: number
                        w: number
                        x: number
                        y: number
                      }[]
                    }
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
                    focus_rects: {
                      h: number
                      w: number
                      x: number
                      y: number
                    }[]
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
                  additional_media_info?: {
                    monetizable: boolean
                  }
                  video_info?: {
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
              possibly_sensitive?: boolean
              possibly_sensitive_editable?: boolean
              quote_count: number
              reply_count: number
              retweet_count: number
              retweeted: boolean
              user_id_str: string
              quoted_status_id_str?: string
              quoted_status_permalink?: {
                display: string
                expanded: string
                url: string
              }
              in_reply_to_screen_name?: string
              in_reply_to_status_id_str?: string
              in_reply_to_user_id_str?: string
              conversation_control?: {
                conversation_owner_results: {
                  result: {
                    __typename: string
                    legacy: {
                      screen_name: string
                    }
                  }
                }
                policy: string
              }
            }
            rest_id: string
            source: string
            unmention_data: {}
            views: {
              count: string
              state: string
            }
            quotedRefResult?: {
              result: {
                __typename: string
                rest_id: string
              }
            }
            card?: {
              legacy: {
                binding_values: {
                  key: string
                  value: {
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
                    affiliates_highlighted_label: {}
                    id: string
                    is_blue_verified: boolean
                    legacy: {
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
                      withheld_in_countries: unknown[]
                    }
                    parody_commentary_fan_label: string
                    profile_image_shape: string
                    rest_id: string
                    tipjar_settings: {
                      bandcamp_handle: string
                      bitcoin_handle: string
                      cash_app_handle: string
                      ethereum_handle: string
                      gofundme_handle: string
                      is_enabled: boolean
                      patreon_handle: string
                      pay_pal_handle: string
                      venmo_handle: string
                    }
                  }
                }[]
              }
              rest_id: string
            }
            note_tweet?: {
              is_expandable: boolean
              note_tweet_results: {
                result: {
                  entity_set: {
                    hashtags: unknown[]
                    symbols: unknown[]
                    urls: unknown[]
                    user_mentions: unknown[]
                    timestamps?: unknown[]
                  }
                  id: string
                  media?: {
                    inline_media: unknown[]
                  }
                  richtext?: {
                    richtext_tags: unknown[]
                  }
                  text: string
                }
              }
            }
          }
        }
        birdwatch_pivot?: {
          destinationUrl: string
          footer: {
            entities: {
              fromIndex: number
              ref: {
                type: string
                url: string
                urlType: string
              }
              toIndex: number
            }[]
            text: string
          }
          iconType: string
          note: {
            rest_id: string
          }
          shorttitle: string
          subtitle: {
            entities: {
              fromIndex: number
              ref: {
                type: string
                url: string
                urlType: string
              }
              toIndex: number
            }[]
            text: string
          }
          title: string
          visualStyle: string
        }
        previous_counts?: {
          bookmark_count: number
          favorite_count: number
          quote_count: number
          reply_count: number
          retweet_count: number
        }
      }
    }
  }
}
