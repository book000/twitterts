/* eslint-disable @typescript-eslint/no-empty-object-type */

/** 検索タイムラインツイートモデル */

export interface CustomSearchTimelineEntry {
  entryId: string
  sortIndex: string
  content: {
    entryType: string
    __typename: string
    itemContent: {
      itemType: string
      __typename: string
      tweet_results: {
        result: {
          __typename: string
          rest_id: string
          core: {
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
                parody_commentary_fan_label: string
                is_blue_verified: boolean
                profile_image_shape: string
                legacy: {
                  following: boolean
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
                  profile_banner_url?: string
                  profile_image_url_https: string
                  profile_interstitial_type: string
                  screen_name: string
                  statuses_count: number
                  translator_type: string
                  url?: string
                  verified: boolean
                  want_retweets: boolean
                  withheld_in_countries: unknown[]
                  needs_phone_verification?: boolean
                  verified_type?: string
                  followed_by?: boolean
                  protected?: boolean
                }
                tipjar_settings: {
                  is_enabled?: boolean
                  bitcoin_handle?: string
                  ethereum_handle?: string
                  venmo_handle?: string
                  patreon_handle?: string
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
                super_follow_eligible?: boolean
              }
            }
          }
          unmention_data: {}
          edit_control: {
            edit_tweet_ids?: string[]
            editable_until_msecs?: string
            is_edit_eligible?: boolean
            edits_remaining?: string
            initial_tweet_id?: string
            edit_control_initial?: {
              edit_tweet_ids: string[]
              editable_until_msecs: string
              is_edit_eligible: boolean
              edits_remaining: string
            }
          }
          is_translatable: boolean
          views: {
            count?: string
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
              media?: {
                display_url: string
                expanded_url: string
                id_str: string
                indices: number[]
                media_key: string
                media_url_https: string
                type: string
                url: string
                ext_media_availability: {
                  status: string
                }
                features?: {
                  large: {
                    faces: {
                      x: number
                      y: number
                      h: number
                      w: number
                    }[]
                  }
                  medium: {
                    faces: {
                      x: number
                      y: number
                      h: number
                      w: number
                    }[]
                  }
                  small: {
                    faces: {
                      x: number
                      y: number
                      h: number
                      w: number
                    }[]
                  }
                  orig: {
                    faces: {
                      x: number
                      y: number
                      h: number
                      w: number
                    }[]
                  }
                  all?: {
                    tags: {
                      user_id: string
                      name: string
                      screen_name: string
                      type: string
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
                  focus_rects: {
                    x: number
                    y: number
                    w: number
                    h: number
                  }[]
                }
                allow_download_status?: {
                  allow_download: boolean
                }
                media_results: {
                  result: {
                    media_key: string
                  }
                }
                source_status_id_str?: string
                source_user_id_str?: string
                additional_media_info?: {
                  monetizable: boolean
                  source_user?: {
                    user_results: {
                      result: {
                        __typename: string
                        id: string
                        rest_id: string
                        affiliates_highlighted_label: {}
                        has_graduated_access: boolean
                        parody_commentary_fan_label: string
                        is_blue_verified: boolean
                        profile_image_shape: string
                        legacy: {
                          following: boolean
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
                          profile_image_url_https: string
                          profile_interstitial_type: string
                          screen_name: string
                          statuses_count: number
                          translator_type: string
                          verified: boolean
                          want_retweets: boolean
                          withheld_in_countries: unknown[]
                        }
                        tipjar_settings: {}
                      }
                    }
                  }
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
                ext_alt_text?: string
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
                ext_media_availability: {
                  status: string
                }
                features?: {
                  large: {
                    faces: {
                      x: number
                      y: number
                      h: number
                      w: number
                    }[]
                  }
                  medium: {
                    faces: {
                      x: number
                      y: number
                      h: number
                      w: number
                    }[]
                  }
                  small: {
                    faces: {
                      x: number
                      y: number
                      h: number
                      w: number
                    }[]
                  }
                  orig: {
                    faces: {
                      x: number
                      y: number
                      h: number
                      w: number
                    }[]
                  }
                  all?: {
                    tags: {
                      user_id: string
                      name: string
                      screen_name: string
                      type: string
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
                  focus_rects: {
                    x: number
                    y: number
                    w: number
                    h: number
                  }[]
                }
                allow_download_status?: {
                  allow_download: boolean
                }
                media_results: {
                  result: {
                    media_key: string
                  }
                }
                source_status_id_str?: string
                source_user_id_str?: string
                additional_media_info?: {
                  monetizable: boolean
                  source_user?: {
                    user_results: {
                      result: {
                        __typename: string
                        id: string
                        rest_id: string
                        affiliates_highlighted_label: {}
                        has_graduated_access: boolean
                        parody_commentary_fan_label: string
                        is_blue_verified: boolean
                        profile_image_shape: string
                        legacy: {
                          following: boolean
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
                          profile_image_url_https: string
                          profile_interstitial_type: string
                          screen_name: string
                          statuses_count: number
                          translator_type: string
                          verified: boolean
                          want_retweets: boolean
                          withheld_in_countries: unknown[]
                        }
                        tipjar_settings: {}
                      }
                    }
                  }
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
            scopes?: {
              followers: boolean
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
            place?: {
              bounding_box: {
                coordinates: number[][][]
                type: string
              }
              country: string
              country_code: string
              full_name: string
              name: string
              id: string
              place_type: string
              url: string
            }
          }
          previous_counts?: {
            bookmark_count: number
            favorite_count: number
            quote_count: number
            reply_count: number
            retweet_count: number
          }
          quoted_status_result?: {
            result: {
              __typename: string
              rest_id?: string
              core?: {
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
                    parody_commentary_fan_label: string
                    is_blue_verified: boolean
                    profile_image_shape: string
                    legacy: {
                      following: boolean
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
                      url?: string
                      verified: boolean
                      want_retweets: boolean
                      withheld_in_countries: unknown[]
                      verified_type?: string
                    }
                    tipjar_settings: {}
                    professional?: {
                      rest_id: string
                      professional_type: string
                      category: unknown[]
                    }
                  }
                }
              }
              unmention_data?: {}
              edit_control?: {
                edit_tweet_ids: string[]
                editable_until_msecs: string
                is_edit_eligible: boolean
                edits_remaining: string
              }
              is_translatable?: boolean
              views?: {
                count?: string
                state: string
              }
              source?: string
              legacy?: {
                bookmark_count: number
                bookmarked: boolean
                created_at: string
                conversation_id_str: string
                display_text_range: number[]
                entities: {
                  hashtags: unknown[]
                  media?: {
                    display_url: string
                    expanded_url: string
                    id_str: string
                    indices: number[]
                    media_key: string
                    media_url_https: string
                    type: string
                    url: string
                    ext_media_availability: {
                      status: string
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
                      focus_rects: {
                        x: number
                        y: number
                        w: number
                        h: number
                      }[]
                    }
                    allow_download_status?: {
                      allow_download: boolean
                    }
                    video_info?: {
                      aspect_ratio: number[]
                      variants: {
                        bitrate?: number
                        content_type: string
                        url: string
                      }[]
                      duration_millis?: number
                    }
                    media_results: {
                      result: {
                        media_key: string
                      }
                    }
                    features?: {
                      large: {
                        faces: {
                          x: number
                          y: number
                          h: number
                          w: number
                        }[]
                      }
                      medium: {
                        faces: {
                          x: number
                          y: number
                          h: number
                          w: number
                        }[]
                      }
                      small: {
                        faces: {
                          x: number
                          y: number
                          h: number
                          w: number
                        }[]
                      }
                      orig: {
                        faces: {
                          x: number
                          y: number
                          h: number
                          w: number
                        }[]
                      }
                    }
                    additional_media_info?: {
                      monetizable: boolean
                    }
                  }[]
                  symbols: unknown[]
                  timestamps: unknown[]
                  urls: {
                    display_url: string
                    expanded_url: string
                    url: string
                    indices: number[]
                  }[]
                  user_mentions: unknown[]
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
                    ext_media_availability: {
                      status: string
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
                      focus_rects: {
                        x: number
                        y: number
                        w: number
                        h: number
                      }[]
                    }
                    allow_download_status?: {
                      allow_download: boolean
                    }
                    video_info?: {
                      aspect_ratio: number[]
                      variants: {
                        bitrate?: number
                        content_type: string
                        url: string
                      }[]
                      duration_millis?: number
                    }
                    media_results: {
                      result: {
                        media_key: string
                      }
                    }
                    features?: {
                      large: {
                        faces: {
                          x: number
                          y: number
                          h: number
                          w: number
                        }[]
                      }
                      medium: {
                        faces: {
                          x: number
                          y: number
                          h: number
                          w: number
                        }[]
                      }
                      small: {
                        faces: {
                          x: number
                          y: number
                          h: number
                          w: number
                        }[]
                      }
                      orig: {
                        faces: {
                          x: number
                          y: number
                          h: number
                          w: number
                        }[]
                      }
                    }
                    additional_media_info?: {
                      monetizable: boolean
                    }
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
              }
              tweet?: {
                rest_id: string
                core: {
                  user_results: {
                    result: {
                      __typename: string
                      id: string
                      rest_id: string
                      affiliates_highlighted_label: {}
                      has_graduated_access: boolean
                      parody_commentary_fan_label: string
                      is_blue_verified: boolean
                      profile_image_shape: string
                      legacy: {
                        following: boolean
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
                      professional: {
                        rest_id: string
                        professional_type: string
                        category: unknown[]
                      }
                      tipjar_settings: {}
                    }
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
                  conversation_control: {
                    policy: string
                    conversation_owner_results: {
                      result: {
                        __typename: string
                        legacy: {
                          screen_name: string
                        }
                      }
                    }
                  }
                  conversation_id_str: string
                  display_text_range: number[]
                  entities: {
                    hashtags: unknown[]
                    media: {
                      display_url: string
                      expanded_url: string
                      id_str: string
                      indices: number[]
                      media_key: string
                      media_url_https: string
                      type: string
                      url: string
                      ext_media_availability: {
                        status: string
                      }
                      features: {
                        large: {
                          faces: {
                            x: number
                            y: number
                            h: number
                            w: number
                          }[]
                        }
                        medium: {
                          faces: {
                            x: number
                            y: number
                            h: number
                            w: number
                          }[]
                        }
                        small: {
                          faces: {
                            x: number
                            y: number
                            h: number
                            w: number
                          }[]
                        }
                        orig: {
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
                        focus_rects: {
                          x: number
                          y: number
                          w: number
                          h: number
                        }[]
                      }
                      allow_download_status: {
                        allow_download: boolean
                      }
                      media_results: {
                        result: {
                          media_key: string
                        }
                      }
                    }[]
                    symbols: unknown[]
                    timestamps: unknown[]
                    urls: unknown[]
                    user_mentions: unknown[]
                  }
                  extended_entities: {
                    media: {
                      display_url: string
                      expanded_url: string
                      id_str: string
                      indices: number[]
                      media_key: string
                      media_url_https: string
                      type: string
                      url: string
                      ext_media_availability: {
                        status: string
                      }
                      features: {
                        large: {
                          faces: {
                            x: number
                            y: number
                            h: number
                            w: number
                          }[]
                        }
                        medium: {
                          faces: {
                            x: number
                            y: number
                            h: number
                            w: number
                          }[]
                        }
                        small: {
                          faces: {
                            x: number
                            y: number
                            h: number
                            w: number
                          }[]
                        }
                        orig: {
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
                        focus_rects: {
                          x: number
                          y: number
                          w: number
                          h: number
                        }[]
                      }
                      allow_download_status: {
                        allow_download: boolean
                      }
                      media_results: {
                        result: {
                          media_key: string
                        }
                      }
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
              limitedActionResults?: {
                limited_actions: {
                  action: string
                  prompt: {
                    __typename: string
                    cta_type: string
                    headline: {
                      text: string
                      entities: unknown[]
                    }
                    subtext: {
                      text: string
                      entities: unknown[]
                    }
                  }
                }[]
              }
              note_tweet?: {
                is_expandable: boolean
                note_tweet_results: {
                  result: {
                    id: string
                    text: string
                    entity_set: {
                      hashtags: unknown[]
                      symbols: unknown[]
                      urls: {
                        display_url: string
                        expanded_url: string
                        url: string
                        indices: number[]
                      }[]
                      user_mentions: unknown[]
                    }
                    richtext: {
                      richtext_tags: unknown[]
                    }
                    media: {
                      inline_media: unknown[]
                    }
                  }
                }
              }
            }
          }
          card?: {
            rest_id: string
            legacy: {
              binding_values: {
                key: string
                value: {
                  string_value?: string
                  type: string
                  scribe_key?: string
                  image_value?: {
                    height: number
                    width: number
                    url: string
                  }
                  user_value?: {
                    id_str: string
                    path: unknown[]
                  }
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
                  parody_commentary_fan_label: string
                  is_blue_verified: boolean
                  profile_image_shape: string
                  legacy: {
                    following: boolean
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
                  professional: {
                    rest_id: string
                    professional_type: string
                    category: {
                      id: number
                      name: string
                      icon_name: string
                    }[]
                  }
                  tipjar_settings: {}
                }
              }[]
            }
          }
          note_tweet?: {
            is_expandable: boolean
            note_tweet_results: {
              result: {
                id: string
                text: string
                entity_set: {
                  hashtags: {
                    indices: number[]
                    text: string
                  }[]
                  symbols: unknown[]
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
                  timestamps?: unknown[]
                }
                richtext?: {
                  richtext_tags: {
                    from_index: number
                    to_index: number
                    richtext_types: string[]
                  }[]
                }
                media?: {
                  inline_media: unknown[]
                }
              }
            }
          }
        }
      }
      tweetDisplayType: string
      highlights?: {
        textHighlights: {
          startIndex: number
          endIndex: number
        }[]
      }
      promotedMetadata?: {
        advertiser_results: {
          result: {
            __typename: string
            id: string
            rest_id: string
            affiliates_highlighted_label: {}
            has_graduated_access: boolean
            parody_commentary_fan_label: string
            is_blue_verified: boolean
            profile_image_shape: string
            legacy: {
              following: boolean
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
            tipjar_settings: {}
          }
        }
        adMetadataContainer: {
          renderLegacyWebsiteCard: boolean
        }
        disclosureType: string
        experimentValues: {
          key: string
          value: string
        }[]
        impressionId: string
        impressionString: string
        clickTrackingInfo: {
          urlParams: {
            key: string
            value: string
          }[]
        }
      }
    }
    feedbackInfo?: {
      feedbackKeys: string[]
    }
    clientEventInfo: {
      component: string
      element: string
      details: {
        timelinesDetails: {
          controllerData: string
        }
      }
    }
  }
}
