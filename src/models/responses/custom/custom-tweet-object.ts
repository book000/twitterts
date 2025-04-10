/* eslint-disable @typescript-eslint/no-empty-object-type */

/** レスポンスツイートオブジェクト */

export interface CustomTweetObject {
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
            url?: {
              url: string
              urlType: string
            }
            badge: {
              url: string
            }
            description: string
            userLabelType: string
            userLabelDisplayType?: string
            longDescription?: {
              text: string
              entities: {
                fromIndex: number
                toIndex: number
                ref: {
                  type: string
                  screen_name: string
                  mention_results: {
                    result: {
                      __typename: string
                      legacy: {
                        screen_name: string
                      }
                      rest_id: string
                    }
                  }
                }
              }[]
            }
          }
        }
        has_graduated_access: boolean
        parody_commentary_fan_label: string
        is_blue_verified: boolean
        profile_image_shape?: string
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
                display_url?: string
                expanded_url?: string
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
          withheld_in_countries: string[]
          followed_by?: boolean
          verified_type?: string
          protected?: boolean
          withheld_scope?: string
          needs_phone_verification?: boolean
        }
        tipjar_settings: {
          is_enabled?: boolean
          bitcoin_handle?: string
          cash_app_handle?: string
          venmo_handle?: string
          ethereum_handle?: string
          patreon_handle?: string
          gofundme_handle?: string
          bandcamp_handle?: string
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
  unmention_data?: {
    hydrate?: {
      unmentioned_users_results: {
        rest_id: string
      }[]
    }
  }
  edit_control?: {
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
          reason?: string
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
        media_results: {
          result?: {
            media_key?: string
            grok_image_annotation?: {
              prompt: string
              upsampled_prompt: string
            }
          }
        }
        allow_download_status?: {
          allow_download?: boolean
        }
        source_status_id_str?: string
        source_user_id_str?: string
        additional_media_info?: {
          monetizable: boolean
          title?: string
          description?: string
          embeddable?: boolean
          source_user?: {
            user_results: {
              result: {
                __typename: string
                id: string
                rest_id: string
                affiliates_highlighted_label?: {
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
                parody_commentary_fan_label?: string
                is_blue_verified: boolean
                profile_image_shape?: string
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
                  verified: boolean
                  want_retweets: boolean
                  withheld_in_countries: string[]
                  url?: string
                  verified_type?: string
                  blocking?: boolean
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
                tipjar_settings?: {
                  is_enabled?: boolean
                  bitcoin_handle?: string
                  patreon_handle?: string
                  cash_app_handle?: string
                  venmo_handle?: string
                  ethereum_handle?: string
                  bandcamp_handle?: string
                  gofundme_handle?: string
                  pay_pal_handle?: string
                }
                super_follow_eligible?: boolean
              }
            }
          }
          call_to_actions?: {
            visit_site?: {
              url: string
            }
            watch_now?: {
              url: string
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
        sensitive_media_warning?: {
          graphic_violence?: boolean
          other?: boolean
          adult_content?: boolean
        }
      }[]
      symbols: {
        indices: number[]
        text: string
      }[]
      timestamps: unknown[]
      urls: {
        display_url: string
        expanded_url?: string
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
          reason?: string
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
        media_results: {
          result?: {
            media_key?: string
            grok_image_annotation?: {
              prompt: string
              upsampled_prompt: string
            }
          }
        }
        allow_download_status?: {
          allow_download?: boolean
        }
        source_status_id_str?: string
        source_user_id_str?: string
        additional_media_info?: {
          monetizable: boolean
          title?: string
          description?: string
          embeddable?: boolean
          source_user?: {
            user_results: {
              result: {
                __typename: string
                id: string
                rest_id: string
                affiliates_highlighted_label?: {
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
                parody_commentary_fan_label?: string
                is_blue_verified: boolean
                profile_image_shape?: string
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
                  verified: boolean
                  want_retweets: boolean
                  withheld_in_countries: string[]
                  url?: string
                  verified_type?: string
                  blocking?: boolean
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
                tipjar_settings?: {
                  is_enabled?: boolean
                  bitcoin_handle?: string
                  patreon_handle?: string
                  cash_app_handle?: string
                  venmo_handle?: string
                  ethereum_handle?: string
                  bandcamp_handle?: string
                  gofundme_handle?: string
                  pay_pal_handle?: string
                }
                super_follow_eligible?: boolean
              }
            }
          }
          call_to_actions?: {
            visit_site?: {
              url: string
            }
            watch_now?: {
              url: string
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
        sensitive_media_warning?: {
          graphic_violence?: boolean
          other?: boolean
          adult_content?: boolean
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
    scopes?: {
      followers: boolean
    }
    user_id_str: string
    id_str: string
    retweeted_status_result?: {
      result: {
        __typename: string
        rest_id?: string
        core?: {
          user_results: {
            result: {
              __typename: string
              id: string
              rest_id: string
              affiliates_highlighted_label?: {
                label?: {
                  url?: {
                    url: string
                    urlType: string
                  }
                  badge: {
                    url: string
                  }
                  description: string
                  userLabelType: string
                  userLabelDisplayType?: string
                  longDescription?: {
                    text: string
                    entities: {
                      fromIndex: number
                      toIndex: number
                      ref: {
                        type: string
                        screen_name: string
                        mention_results: {
                          result: {
                            __typename: string
                            legacy: {
                              screen_name: string
                            }
                            rest_id: string
                          }
                        }
                      }
                    }[]
                  }
                }
              }
              has_graduated_access: boolean
              parody_commentary_fan_label?: string
              is_blue_verified: boolean
              profile_image_shape?: string
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
                      display_url?: string
                      expanded_url?: string
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
                withheld_in_countries: string[]
                verified_type?: string
                followed_by?: boolean
                protected?: boolean
              }
              tipjar_settings?: {
                is_enabled?: boolean
                venmo_handle?: string
                bitcoin_handle?: string
                ethereum_handle?: string
                patreon_handle?: string
                bandcamp_handle?: string
                cash_app_handle?: string
                gofundme_handle?: string
                pay_pal_handle?: string
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
        unmention_data?: {
          hydrate?: {
            unmentioned_users_results: {
              rest_id: string
            }[]
          }
        }
        edit_control?: {
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
                reason?: string
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
                result?: {
                  media_key?: string
                  grok_image_annotation?: {
                    prompt: string
                    upsampled_prompt: string
                  }
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
                        verified: boolean
                        want_retweets: boolean
                        withheld_in_countries: unknown[]
                        url?: string
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
                      tipjar_settings: {
                        is_enabled?: boolean
                      }
                      super_follow_eligible?: boolean
                    }
                  }
                }
                title?: string
                description?: string
                call_to_actions?: {
                  watch_now?: {
                    url: string
                  }
                  visit_site?: {
                    url: string
                  }
                }
                embeddable?: boolean
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
              sensitive_media_warning?: {
                graphic_violence?: boolean
                other?: boolean
                adult_content?: boolean
              }
            }[]
            symbols: {
              indices: number[]
              text: string
            }[]
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
                reason?: string
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
                result?: {
                  media_key?: string
                  grok_image_annotation?: {
                    prompt: string
                    upsampled_prompt: string
                  }
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
                        verified: boolean
                        want_retweets: boolean
                        withheld_in_countries: unknown[]
                        url?: string
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
                      tipjar_settings: {
                        is_enabled?: boolean
                      }
                      super_follow_eligible?: boolean
                    }
                  }
                }
                title?: string
                description?: string
                call_to_actions?: {
                  watch_now?: {
                    url: string
                  }
                  visit_site?: {
                    url: string
                  }
                }
                embeddable?: boolean
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
              sensitive_media_warning?: {
                graphic_violence?: boolean
                other?: boolean
                adult_content?: boolean
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
          quoted_status_id_str?: string
          quoted_status_permalink?: {
            url: string
            expanded: string
            display: string
          }
          in_reply_to_screen_name?: string
          in_reply_to_status_id_str?: string
          in_reply_to_user_id_str?: string
          scopes?: {
            followers: boolean
          }
          conversation_control?: {
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
        card?: {
          rest_id: string
          legacy: {
            binding_values: {
              key: string
              value: {
                image_value?: {
                  height: number
                  width: number
                  url: string
                  alt?: string
                }
                type: string
                string_value?: string
                scribe_key?: string
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
                user_value?: {
                  id_str: string
                  path: unknown[]
                }
                boolean_value?: boolean
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
              result?: {
                __typename: string
                id?: string
                rest_id?: string
                affiliates_highlighted_label?: {
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
                has_graduated_access?: boolean
                parody_commentary_fan_label?: string
                is_blue_verified?: boolean
                profile_image_shape?: string
                legacy?: {
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
                  verified_type?: string
                  blocking?: boolean
                  protected?: boolean
                }
                tipjar_settings?: {
                  is_enabled?: boolean
                  bitcoin_handle?: string
                  ethereum_handle?: string
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
                message?: string
                reason?: string
              }
            }[]
          }
        }
        grok_analysis_button?: boolean
        quoted_status_result?: {
          result?: {
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
                      url?: {
                        url: string
                        urlType: string
                      }
                      badge: {
                        url: string
                      }
                      description: string
                      userLabelType: string
                      userLabelDisplayType?: string
                      longDescription?: {
                        text: string
                        entities: {
                          fromIndex: number
                          toIndex: number
                          ref: {
                            type: string
                            screen_name: string
                            mention_results: {
                              result: {
                                __typename: string
                                legacy: {
                                  screen_name: string
                                }
                                rest_id: string
                              }
                            }
                          }
                        }[]
                      }
                    }
                  }
                  has_graduated_access: boolean
                  parody_commentary_fan_label?: string
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
                    verified: boolean
                    want_retweets: boolean
                    withheld_in_countries: string[]
                    url?: string
                    verified_type?: string
                    followed_by?: boolean
                  }
                  tipjar_settings?: {
                    is_enabled?: boolean
                    bitcoin_handle?: string
                    patreon_handle?: string
                    bandcamp_handle?: string
                    venmo_handle?: string
                    ethereum_handle?: string
                    cash_app_handle?: string
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
            unmention_data?: {}
            edit_control?: {
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
            is_translatable?: boolean
            views?: {
              count?: string
              state: string
            }
            source?: string
            grok_analysis_button?: boolean
            quotedRefResult?: {
              result?: {
                __typename: string
                rest_id?: string
                tweet?: {
                  rest_id: string
                }
              }
            }
            legacy?: {
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
                symbols: {
                  indices: number[]
                  text: string
                }[]
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
                  media_results: {
                    result: {
                      media_key: string
                    }
                  }
                  allow_download_status?: {
                    allow_download: boolean
                  }
                  additional_media_info?: {
                    monetizable: boolean
                    title?: string
                    description?: string
                    call_to_actions?: {
                      visit_site: {
                        url: string
                      }
                    }
                    embeddable?: boolean
                    source_user?: {
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
                            blocking?: boolean
                            verified_type?: string
                          }
                          tipjar_settings: {
                            is_enabled?: boolean
                            patreon_handle?: string
                            bitcoin_handle?: string
                            venmo_handle?: string
                            ethereum_handle?: string
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
                  source_status_id_str?: string
                  source_user_id_str?: string
                }[]
              }
              favorite_count: number
              favorited: boolean
              full_text: string
              is_quote_status: boolean
              lang: string
              quote_count: number
              quoted_status_id_str?: string
              quoted_status_permalink?: {
                url: string
                expanded: string
                display: string
              }
              reply_count: number
              retweet_count: number
              retweeted: boolean
              user_id_str: string
              id_str: string
              in_reply_to_screen_name?: string
              in_reply_to_status_id_str?: string
              in_reply_to_user_id_str?: string
              possibly_sensitive?: boolean
              possibly_sensitive_editable?: boolean
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
                  media_results: {
                    result: {
                      media_key: string
                    }
                  }
                  allow_download_status?: {
                    allow_download: boolean
                  }
                  additional_media_info?: {
                    monetizable: boolean
                    title?: string
                    description?: string
                    call_to_actions?: {
                      visit_site: {
                        url: string
                      }
                    }
                    embeddable?: boolean
                    source_user?: {
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
                            blocking?: boolean
                            verified_type?: string
                          }
                          tipjar_settings: {
                            is_enabled?: boolean
                            patreon_handle?: string
                            bitcoin_handle?: string
                            venmo_handle?: string
                            ethereum_handle?: string
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
                  source_status_id_str?: string
                  source_user_id_str?: string
                }[]
              }
              conversation_control?: {
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
            card?: {
              rest_id: string
              legacy: {
                binding_values: {
                  key: string
                  value: {
                    image_value?: {
                      height: number
                      width: number
                      url: string
                      alt?: string
                    }
                    type: string
                    string_value?: string
                    scribe_key?: string
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
                    boolean_value?: boolean
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
                  result?: {
                    __typename: string
                    id?: string
                    rest_id?: string
                    affiliates_highlighted_label?: {
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
                    has_graduated_access?: boolean
                    parody_commentary_fan_label?: string
                    is_blue_verified?: boolean
                    profile_image_shape?: string
                    legacy?: {
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
                      verified_type?: string
                      want_retweets: boolean
                      withheld_in_countries: unknown[]
                      blocking?: boolean
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
                    tipjar_settings?: {
                      is_enabled?: boolean
                    }
                    super_follow_eligible?: boolean
                    message?: string
                    reason?: string
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
                    inline_media: {
                      media_id: string
                      index: number
                    }[]
                  }
                }
              }
            }
            tweet?: {
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
                      profile_image_url_https: string
                      profile_interstitial_type: string
                      screen_name: string
                      statuses_count: number
                      translator_type: string
                      verified: boolean
                      want_retweets: boolean
                      withheld_in_countries: unknown[]
                      url?: string
                      profile_banner_url?: string
                      blocking?: boolean
                      verified_type?: string
                    }
                    tipjar_settings: {
                      is_enabled?: boolean
                      bitcoin_handle?: string
                      ethereum_handle?: string
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
              grok_analysis_button?: boolean
              quotedRefResult?: {
                result?: {
                  __typename: string
                  rest_id?: string
                  tweet?: {
                    rest_id: string
                  }
                }
              }
              legacy: {
                bookmark_count: number
                bookmarked: boolean
                created_at: string
                conversation_control?: {
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
                    additional_media_info?: {
                      monetizable: boolean
                    }
                    video_info?: {
                      aspect_ratio: number[]
                      duration_millis: number
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
                quote_count: number
                quoted_status_id_str?: string
                quoted_status_permalink?: {
                  url: string
                  expanded: string
                  display: string
                }
                reply_count: number
                retweet_count: number
                retweeted: boolean
                user_id_str: string
                id_str: string
                possibly_sensitive?: boolean
                possibly_sensitive_editable?: boolean
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
                    additional_media_info?: {
                      monetizable: boolean
                    }
                    video_info?: {
                      aspect_ratio: number[]
                      duration_millis: number
                      variants: {
                        content_type: string
                        url: string
                        bitrate?: number
                      }[]
                    }
                    ext_alt_text?: string
                  }[]
                }
                in_reply_to_screen_name?: string
                in_reply_to_status_id_str?: string
                in_reply_to_user_id_str?: string
              }
              card?: {
                rest_id: string
                legacy: {
                  binding_values: {
                    key: string
                    value: {
                      image_value?: {
                        height: number
                        width: number
                        url: string
                      }
                      type: string
                      string_value?: string
                      scribe_key?: string
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
                      id: string
                      rest_id: string
                      affiliates_highlighted_label: {}
                      has_graduated_access: boolean
                      parody_commentary_fan_label: string
                      is_blue_verified: boolean
                      profile_image_shape: string
                      legacy: {
                        blocking: boolean
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
                        verified_type: string
                        want_retweets: boolean
                        withheld_in_countries: unknown[]
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
                      hashtags: unknown[]
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
              previous_counts?: {
                bookmark_count: number
                favorite_count: number
                quote_count: number
                reply_count: number
                retweet_count: number
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
            previous_counts?: {
              bookmark_count: number
              favorite_count: number
              quote_count: number
              reply_count: number
              retweet_count: number
            }
            community_results?: {
              result: {
                __typename: string
                id_str: string
                viewer_relationship: {
                  moderation_state: {
                    __typename: string
                  }
                }
              }
            }
            birdwatch_pivot?: {
              callToAction: {
                prompt: string
                title: string
                destinationUrl: string
              }
              destinationUrl: string
              footer: {
                text: string
                entities: {
                  fromIndex: number
                  toIndex: number
                  ref: {
                    type: string
                    url: string
                    urlType: string
                  }
                }[]
              }
              note: {
                rest_id: string
              }
              subtitle: {
                text: string
                entities: {
                  fromIndex: number
                  toIndex: number
                  ref: {
                    type: string
                    url: string
                    urlType: string
                  }
                }[]
              }
              title: string
              shorttitle: string
              visualStyle: string
              iconType: string
            }
            tombstone?: {
              __typename: string
              text: {
                rtl: boolean
                text: string
                entities: {
                  fromIndex: number
                  toIndex: number
                  ref: {
                    type: string
                    url: string
                    urlType: string
                  }
                }[]
              }
            }
            tweetInterstitial?: {
              __typename: string
              displayType: string
              text: {
                rtl: boolean
                text: string
                entities: unknown[]
              }
              revealText: {
                rtl: boolean
                text: string
                entities: unknown[]
              }
            }
          }
        }
        previous_counts?: {
          bookmark_count: number
          favorite_count: number
          quote_count: number
          reply_count: number
          retweet_count: number
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
                symbols: {
                  indices: number[]
                  text: string
                }[]
                timestamps?: {
                  indices: number[]
                  seconds: number
                  text: string
                }[]
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
              richtext?: {
                richtext_tags: {
                  from_index: number
                  to_index: number
                  richtext_types: string[]
                }[]
              }
              media?: {
                inline_media: {
                  media_id: string
                  index: number
                }[]
              }
            }
          }
        }
        birdwatch_pivot?: {
          callToAction: {
            prompt: string
            title: string
            destinationUrl: string
          }
          destinationUrl: string
          footer: {
            text: string
            entities: {
              fromIndex: number
              toIndex: number
              ref: {
                type: string
                url: string
                urlType: string
              }
            }[]
          }
          note: {
            rest_id: string
          }
          subtitle: {
            text: string
            entities: {
              fromIndex: number
              toIndex: number
              ref: {
                type: string
                url: string
                urlType: string
              }
            }[]
          }
          title: string
          shorttitle: string
          visualStyle: string
          iconType: string
          titleDetail?: string
        }
        community_results?: {
          result?: {
            __typename: string
            id_str: string
            viewer_relationship: {
              moderation_state: {
                __typename: string
              }
            }
          }
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
                allow_download_status?: {
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
                allow_download_status?: {
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
            possibly_sensitive?: boolean
            possibly_sensitive_editable?: boolean
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
      }
    }
    quoted_status_id_str?: string
    quoted_status_permalink?: {
      url: string
      expanded: string
      display: string
    }
    in_reply_to_screen_name?: string
    in_reply_to_user_id_str?: string
    conversation_control?: {
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
    in_reply_to_status_id_str?: string
  }
  __entryId: string
  card?: {
    rest_id: string
    legacy?: {
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
            alt?: string
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
          boolean_value?: boolean
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
        result?: {
          __typename: string
          id?: string
          rest_id?: string
          affiliates_highlighted_label?: {
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
          has_graduated_access?: boolean
          parody_commentary_fan_label?: string
          is_blue_verified?: boolean
          profile_image_shape?: string
          legacy?: {
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
            verified_type?: string
            blocking?: boolean
            protected?: boolean
            followed_by?: boolean
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
          tipjar_settings?: {
            is_enabled?: boolean
            venmo_handle?: string
            bitcoin_handle?: string
            ethereum_handle?: string
            patreon_handle?: string
          }
          super_follow_eligible?: boolean
          message?: string
          reason?: string
        }
      }[]
    }
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
                url?: {
                  url: string
                  urlType: string
                }
                badge: {
                  url: string
                }
                description: string
                userLabelType: string
                userLabelDisplayType?: string
                longDescription?: {
                  text: string
                  entities: {
                    fromIndex: number
                    toIndex: number
                    ref: {
                      type: string
                      screen_name: string
                      mention_results: {
                        result: {
                          __typename: string
                          legacy: {
                            screen_name: string
                          }
                          rest_id: string
                        }
                      }
                    }
                  }[]
                }
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
              profile_image_url_https: string
              profile_interstitial_type: string
              screen_name: string
              statuses_count: number
              translator_type: string
              url?: string
              verified: boolean
              want_retweets: boolean
              withheld_in_countries: string[]
              profile_banner_url?: string
              verified_type?: string
              followed_by?: boolean
              protected?: boolean
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
            tipjar_settings: {
              is_enabled?: boolean
              bitcoin_handle?: string
              patreon_handle?: string
              venmo_handle?: string
              ethereum_handle?: string
              cash_app_handle?: string
              gofundme_handle?: string
              bandcamp_handle?: string
              pay_pal_handle?: string
            }
            super_follow_eligible?: boolean
          }
        }
      }
      unmention_data?: {}
      edit_control?: {
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
          hashtags: {
            indices: number[]
            text: string
          }[]
          symbols: {
            indices: number[]
            text: string
          }[]
          timestamps: {
            indices: number[]
            seconds: number
            text: string
          }[]
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
              reason?: string
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
            media_results: {
              result: {
                media_key: string
              }
            }
            allow_download_status?: {
              allow_download: boolean
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
                      verified: boolean
                      want_retweets: boolean
                      withheld_in_countries: string[]
                      url?: string
                      verified_type?: string
                      blocking?: boolean
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
                    tipjar_settings: {
                      is_enabled?: boolean
                      bitcoin_handle?: string
                      cash_app_handle?: string
                      venmo_handle?: string
                      ethereum_handle?: string
                      patreon_handle?: string
                      bandcamp_handle?: string
                      gofundme_handle?: string
                      pay_pal_handle?: string
                    }
                    super_follow_eligible?: boolean
                  }
                }
              }
              title?: string
              description?: string
              embeddable?: boolean
              call_to_actions?: {
                visit_site?: {
                  url: string
                }
                watch_now?: {
                  url: string
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
        quote_count: number
        reply_count: number
        retweet_count: number
        retweeted: boolean
        user_id_str: string
        id_str: string
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
              reason?: string
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
            media_results: {
              result: {
                media_key: string
              }
            }
            allow_download_status?: {
              allow_download: boolean
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
                      verified: boolean
                      want_retweets: boolean
                      withheld_in_countries: string[]
                      url?: string
                      verified_type?: string
                      blocking?: boolean
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
                    tipjar_settings: {
                      is_enabled?: boolean
                      bitcoin_handle?: string
                      cash_app_handle?: string
                      venmo_handle?: string
                      ethereum_handle?: string
                      patreon_handle?: string
                      bandcamp_handle?: string
                      gofundme_handle?: string
                      pay_pal_handle?: string
                    }
                    super_follow_eligible?: boolean
                  }
                }
              }
              title?: string
              description?: string
              embeddable?: boolean
              call_to_actions?: {
                visit_site?: {
                  url: string
                }
                watch_now?: {
                  url: string
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
        possibly_sensitive?: boolean
        possibly_sensitive_editable?: boolean
        quoted_status_id_str?: string
        quoted_status_permalink?: {
          url: string
          expanded: string
          display: string
        }
        in_reply_to_screen_name?: string
        in_reply_to_status_id_str?: string
        in_reply_to_user_id_str?: string
        scopes?: {
          followers: boolean
        }
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
        conversation_control?: {
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
      }
      previous_counts?: {
        bookmark_count: number
        favorite_count: number
        quote_count: number
        reply_count: number
        retweet_count: number
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
              symbols: {
                indices: number[]
                text: string
              }[]
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
              timestamps?: {
                indices: number[]
                seconds: number
                text: string
              }[]
            }
            richtext?: {
              richtext_tags: {
                from_index: number
                to_index: number
                richtext_types: string[]
              }[]
            }
            media?: {
              inline_media: {
                media_id: string
                index: number
              }[]
            }
          }
        }
      }
      tweet?: {
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
                verified_type?: string
              }
              tipjar_settings: {
                is_enabled?: boolean
                cash_app_handle?: string
                bitcoin_handle?: string
                ethereum_handle?: string
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
          count: string
          state: string
        }
        source: string
        legacy: {
          bookmark_count: number
          bookmarked: boolean
          created_at: string
          conversation_control?: {
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
              additional_media_info?: {
                monetizable: boolean
              }
              video_info?: {
                aspect_ratio: number[]
                duration_millis: number
                variants: {
                  content_type: string
                  url: string
                  bitrate?: number
                }[]
              }
              ext_alt_text?: string
            }[]
            symbols: {
              indices: number[]
              text: string
            }[]
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
              additional_media_info?: {
                monetizable: boolean
              }
              video_info?: {
                aspect_ratio: number[]
                duration_millis: number
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
          quoted_status_id_str?: string
          quoted_status_permalink?: {
            url: string
            expanded: string
            display: string
          }
        }
        grok_analysis_button?: boolean
        birdwatch_pivot?: {
          callToAction: {
            prompt: string
            title: string
            destinationUrl: string
          }
          destinationUrl: string
          footer: {
            text: string
            entities: {
              fromIndex: number
              toIndex: number
              ref: {
                type: string
                url: string
                urlType: string
              }
            }[]
          }
          note: {
            rest_id: string
          }
          subtitle: {
            text: string
            entities: {
              fromIndex: number
              toIndex: number
              ref: {
                type: string
                url: string
                urlType: string
              }
            }[]
          }
          title: string
          shorttitle: string
          visualStyle: string
          iconType: string
        }
        quotedRefResult?: {
          result: {
            __typename: string
            rest_id?: string
            tweet?: {
              rest_id: string
            }
          }
        }
        card?: {
          rest_id: string
          legacy: {
            binding_values: {
              key: string
              value: {
                image_value?: {
                  height: number
                  width: number
                  url: string
                  alt?: string
                }
                type: string
                string_value?: string
                scribe_key?: string
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
                  verified_type?: string
                  want_retweets: boolean
                  withheld_in_countries: unknown[]
                  blocking?: boolean
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
                tipjar_settings: {
                  is_enabled?: boolean
                  bitcoin_handle?: string
                }
              }
            }[]
          }
        }
        previous_counts?: {
          bookmark_count: number
          favorite_count: number
          quote_count: number
          reply_count: number
          retweet_count: number
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
                urls: unknown[]
                user_mentions: unknown[]
              }
              richtext: {
                richtext_tags: {
                  from_index: number
                  to_index: number
                  richtext_types: string[]
                }[]
              }
              media: {
                inline_media: unknown[]
              }
            }
          }
        }
      }
      limitedActionResults?: {
        limited_actions: {
          action: string
          prompt?: {
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
      card?: {
        rest_id: string
        legacy?: {
          binding_values: {
            key: string
            value: {
              image_value?: {
                height: number
                width: number
                url: string
                alt?: string
              }
              type: string
              string_value?: string
              scribe_key?: string
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
              user_value?: {
                id_str: string
                path: unknown[]
              }
              boolean_value?: boolean
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
            result?: {
              __typename: string
              id?: string
              rest_id?: string
              affiliates_highlighted_label?: {
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
              has_graduated_access?: boolean
              parody_commentary_fan_label?: string
              is_blue_verified?: boolean
              profile_image_shape?: string
              legacy?: {
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
                verified_type?: string
                want_retweets: boolean
                withheld_in_countries: unknown[]
                blocking?: boolean
                protected?: boolean
              }
              tipjar_settings?: {
                is_enabled?: boolean
                patreon_handle?: string
                bitcoin_handle?: string
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
              message?: string
              reason?: string
            }
          }[]
        }
      }
      quotedRefResult?: {
        result?: {
          __typename: string
          rest_id?: string
          tweet?: {
            rest_id: string
          }
        }
      }
      grok_analysis_button?: boolean
      birdwatch_pivot?: {
        callToAction: {
          prompt: string
          title: string
          destinationUrl: string
        }
        destinationUrl: string
        footer: {
          text: string
          entities: {
            fromIndex: number
            toIndex: number
            ref: {
              type: string
              url: string
              urlType: string
            }
          }[]
        }
        note: {
          rest_id: string
        }
        subtitle: {
          text: string
          entities: {
            fromIndex: number
            toIndex: number
            ref: {
              type: string
              url: string
              urlType: string
            }
          }[]
        }
        title: string
        shorttitle: string
        visualStyle: string
        iconType: string
        titleDetail?: string
      }
      community_results?: {
        result: {
          __typename: string
          id_str: string
          viewer_relationship: {
            moderation_state: {
              __typename: string
            }
          }
        }
      }
      article?: {
        article_results: {
          result: {
            rest_id: string
            id: string
            title: string
            preview_text: string
            cover_media: {
              id: string
              media_key: string
              media_id: string
              media_info: {
                __typename: string
                original_img_height: number
                original_img_width: number
                original_img_url: string
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
              }
            }
            lifecycle_state: {
              modified_at_secs: number
            }
            metadata: {
              first_published_at_secs: number
            }
          }
        }
      }
    }
  }
  previous_counts?: {
    bookmark_count: number
    favorite_count: number
    quote_count: number
    reply_count: number
    retweet_count: number
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
          symbols: {
            indices: number[]
            text: string
          }[]
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
          timestamps?: {
            indices: number[]
            seconds: number
            text: string
          }[]
        }
        richtext?: {
          richtext_tags: {
            from_index: number
            to_index: number
            richtext_types: string[]
          }[]
        }
        media?: {
          inline_media: {
            media_id: string
            index: number
          }[]
        }
      }
    }
  }
  tweet?: {
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
            verified_type?: string
            followed_by?: boolean
            needs_phone_verification?: boolean
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
          tipjar_settings: {
            is_enabled?: boolean
            bitcoin_handle?: string
            patreon_handle?: string
            ethereum_handle?: string
            cash_app_handle?: string
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
    is_translatable?: boolean
    views: {
      count?: string
      state: string
    }
    source: string
    legacy?: {
      bookmark_count: number
      bookmarked: boolean
      created_at: string
      conversation_control?: {
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
        hashtags: {
          indices: number[]
          text: string
        }[]
        symbols: unknown[]
        timestamps: unknown[]
        urls: {
          display_url: string
          expanded_url?: string
          url: string
          indices: number[]
        }[]
        user_mentions: {
          id_str: string
          name: string
          screen_name: string
          indices: number[]
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
          additional_media_info?: {
            monetizable: boolean
            title?: string
            description?: string
            embeddable?: boolean
          }
          ext_media_availability: {
            status: string
            reason?: string
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
          video_info?: {
            aspect_ratio: number[]
            duration_millis?: number
            variants: {
              content_type: string
              url: string
              bitrate?: number
            }[]
          }
          media_results: {
            result: {
              media_key?: string
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
            all?: {
              tags: {
                user_id: string
                name: string
                screen_name: string
                type: string
              }[]
            }
          }
          allow_download_status?: {
            allow_download?: boolean
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
      quote_count: number
      reply_count: number
      retweet_count: number
      retweeted: boolean
      user_id_str: string
      id_str: string
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
            monetizable: boolean
            title?: string
            description?: string
            embeddable?: boolean
          }
          ext_media_availability: {
            status: string
            reason?: string
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
          video_info?: {
            aspect_ratio: number[]
            duration_millis?: number
            variants: {
              content_type: string
              url: string
              bitrate?: number
            }[]
          }
          media_results: {
            result: {
              media_key?: string
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
            all?: {
              tags: {
                user_id: string
                name: string
                screen_name: string
                type: string
              }[]
            }
          }
          allow_download_status?: {
            allow_download?: boolean
          }
          source_status_id_str?: string
          source_user_id_str?: string
          ext_alt_text?: string
        }[]
      }
      possibly_sensitive?: boolean
      possibly_sensitive_editable?: boolean
      scopes?: {
        followers: boolean
      }
      quoted_status_id_str?: string
      quoted_status_permalink?: {
        url: string
        expanded: string
        display: string
      }
      retweeted_status_result?: {
        result: {
          __typename: string
          tweet?: {
            rest_id: string
            core: {
              user_results: {
                result: {
                  __typename: string
                  id: string
                  rest_id: string
                  affiliates_highlighted_label?: {
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
                  parody_commentary_fan_label?: string
                  is_blue_verified: boolean
                  profile_image_shape?: string
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
                    verified_type?: string
                    blocked_by?: boolean
                  }
                  tipjar_settings?: {
                    is_enabled?: boolean
                    bitcoin_handle?: string
                    patreon_handle?: string
                    bandcamp_handle?: string
                    cash_app_handle?: string
                    ethereum_handle?: string
                    gofundme_handle?: string
                    pay_pal_handle?: string
                    venmo_handle?: string
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
              count?: string
              state: string
            }
            source: string
            grok_analysis_button?: boolean
            legacy: {
              bookmark_count: number
              bookmarked: boolean
              created_at: string
              conversation_control?: {
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
                  media_results: {
                    result: {
                      media_key?: string
                    }
                  }
                  allow_download_status?: {
                    allow_download: boolean
                  }
                  ext_alt_text?: string
                  video_info?: {
                    aspect_ratio: number[]
                    variants: {
                      bitrate: number
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
                  media_results: {
                    result: {
                      media_key?: string
                    }
                  }
                  allow_download_status?: {
                    allow_download: boolean
                  }
                  ext_alt_text?: string
                  video_info?: {
                    aspect_ratio: number[]
                    variants: {
                      bitrate: number
                      content_type: string
                      url: string
                    }[]
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
              scopes?: {
                followers: boolean
              }
              user_id_str: string
              id_str: string
              quoted_status_id_str?: string
              quoted_status_permalink?: {
                url: string
                expanded: string
                display: string
              }
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
                      }
                      tipjar_settings: {
                        is_enabled?: boolean
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
                }
                card?: {
                  rest_id: string
                  legacy: {
                    binding_values: {
                      key: string
                      value: {
                        image_value?: {
                          height: number
                          width: number
                          url: string
                        }
                        type: string
                        string_value?: string
                        scribe_key?: string
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
                          want_retweets: boolean
                          withheld_in_countries: unknown[]
                        }
                        tipjar_settings: {}
                      }
                    }[]
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
                  count: string
                  state: string
                }
                source?: string
                grok_analysis_button?: boolean
                legacy?: {
                  bookmark_count: number
                  bookmarked: boolean
                  created_at: string
                  conversation_id_str: string
                  display_text_range: number[]
                  entities: {
                    hashtags: unknown[]
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
                  in_reply_to_screen_name?: string
                  in_reply_to_status_id_str?: string
                  in_reply_to_user_id_str?: string
                  quoted_status_id_str?: string
                  quoted_status_permalink?: {
                    url: string
                    expanded: string
                    display: string
                  }
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
                        urls: unknown[]
                        user_mentions: unknown[]
                      }
                      richtext?: {
                        richtext_tags: unknown[]
                      }
                      media?: {
                        inline_media: unknown[]
                      }
                    }
                  }
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
                          blocking?: boolean
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
                        tipjar_settings: {
                          is_enabled?: boolean
                          bitcoin_handle?: string
                          patreon_handle?: string
                        }
                        super_follow_eligible?: boolean
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
                    conversation_control?: {
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
                    favorite_count: number
                    favorited: boolean
                    full_text: string
                    is_quote_status: boolean
                    lang: string
                    quote_count: number
                    reply_count: number
                    retweet_count: number
                    retweeted: boolean
                    user_id_str: string
                    id_str: string
                    possibly_sensitive?: boolean
                    possibly_sensitive_editable?: boolean
                  }
                  card?: {
                    rest_id: string
                    legacy: {
                      binding_values: {
                        key: string
                        value: {
                          image_value?: {
                            height: number
                            width: number
                            url: string
                          }
                          type: string
                          string_value?: string
                          scribe_key?: string
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
                            blocking: boolean
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
                quotedRefResult?: {
                  result: {
                    __typename: string
                    rest_id: string
                  }
                }
                tweetInterstitial?: {
                  __typename: string
                  displayType: string
                  text: {
                    rtl: boolean
                    text: string
                    entities: unknown[]
                  }
                  revealText: {
                    rtl: boolean
                    text: string
                    entities: unknown[]
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
                    image_value?: {
                      height: number
                      width: number
                      url: string
                    }
                    type: string
                    string_value?: string
                    scribe_key?: string
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
                    id?: string
                    rest_id?: string
                    affiliates_highlighted_label?: {
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
                    has_graduated_access?: boolean
                    parody_commentary_fan_label?: string
                    is_blue_verified?: boolean
                    profile_image_shape?: string
                    legacy?: {
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
                      verified_type?: string
                      blocking?: boolean
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
                    tipjar_settings?: {
                      is_enabled?: boolean
                      bitcoin_handle?: string
                    }
                    message?: string
                    reason?: string
                  }
                }[]
              }
            }
          }
          limitedActionResults?: {
            limited_actions: {
              action: string
              prompt?: {
                __typename: string
                cta_type?: string
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
          rest_id?: string
          core?: {
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
                }
                tipjar_settings: {
                  is_enabled?: boolean
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
            count: string
            state: string
          }
          source?: string
          grok_analysis_button?: boolean
          legacy?: {
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
                allow_download_status?: {
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
                allow_download_status?: {
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
            possibly_sensitive?: boolean
            possibly_sensitive_editable?: boolean
            quote_count: number
            reply_count: number
            retweet_count: number
            retweeted: boolean
            user_id_str: string
            id_str: string
            quoted_status_id_str?: string
            quoted_status_permalink?: {
              url: string
              expanded: string
              display: string
            }
          }
          quoted_status_result?: {
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
                      category: {
                        id: number
                        name: string
                        icon_name: string
                      }[]
                    }
                    tipjar_settings: {
                      is_enabled: boolean
                    }
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
                conversation_id_str: string
                display_text_range: number[]
                entities: {
                  hashtags: unknown[]
                  symbols: unknown[]
                  timestamps: unknown[]
                  urls: unknown[]
                  user_mentions: unknown[]
                }
                favorite_count: number
                favorited: boolean
                full_text: string
                is_quote_status: boolean
                lang: string
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
              alt?: string
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
            user_value?: {
              id_str: string
              path: unknown[]
            }
            boolean_value?: boolean
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
            id?: string
            rest_id?: string
            affiliates_highlighted_label?: {
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
            has_graduated_access?: boolean
            parody_commentary_fan_label?: string
            is_blue_verified?: boolean
            profile_image_shape?: string
            legacy?: {
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
              blocking?: boolean
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
            tipjar_settings?: {
              is_enabled?: boolean
              bitcoin_handle?: string
            }
            message?: string
            reason?: string
          }
        }[]
      }
    }
    grok_analysis_button?: boolean
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
              tipjar_settings: {
                is_enabled?: boolean
              }
            }
          }
        }
        unmention_data?: {}
        edit_control?: {
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
        is_translatable?: boolean
        views?: {
          count: string
          state: string
        }
        source?: string
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
                timestamps?: unknown[]
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
              richtext?: {
                richtext_tags: unknown[]
              }
              media?: {
                inline_media: unknown[]
              }
            }
          }
        }
        grok_analysis_button?: boolean
        legacy?: {
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
              additional_media_info?: {
                monetizable: boolean
              }
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
                duration_millis: number
                variants: {
                  content_type: string
                  url: string
                  bitrate?: number
                }[]
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
              additional_media_info?: {
                monetizable: boolean
              }
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
                duration_millis: number
                variants: {
                  content_type: string
                  url: string
                  bitrate?: number
                }[]
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
          in_reply_to_screen_name?: string
          in_reply_to_status_id_str?: string
          in_reply_to_user_id_str?: string
          quoted_status_id_str?: string
          quoted_status_permalink?: {
            url: string
            expanded: string
            display: string
          }
          conversation_control?: {
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
        }
        card?: {
          rest_id: string
          legacy: {
            binding_values: {
              key: string
              value: {
                image_value?: {
                  height: number
                  width: number
                  url: string
                  alt?: string
                }
                type: string
                string_value?: string
                scribe_key?: string
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
                boolean_value?: boolean
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
                tipjar_settings: {}
              }
            }[]
          }
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
                  verified: boolean
                  want_retweets: boolean
                  withheld_in_countries: unknown[]
                  url?: string
                  verified_type?: string
                }
                tipjar_settings: {
                  is_enabled?: boolean
                  bitcoin_handle?: string
                }
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
            count: string
            state: string
          }
          source: string
          grok_analysis_button?: boolean
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
              user_mentions: unknown[]
              media?: {
                display_url: string
                expanded_url: string
                id_str: string
                indices: number[]
                media_key: string
                media_url_https: string
                type: string
                url: string
                additional_media_info?: {
                  monetizable: boolean
                }
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
                  duration_millis: number
                  variants: {
                    content_type: string
                    url: string
                    bitrate?: number
                  }[]
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
                ext_alt_text?: string
              }[]
            }
            favorite_count: number
            favorited: boolean
            full_text: string
            is_quote_status: boolean
            lang: string
            quote_count: number
            reply_count: number
            retweet_count: number
            retweeted: boolean
            user_id_str: string
            id_str: string
            quoted_status_id_str?: string
            quoted_status_permalink?: {
              url: string
              expanded: string
              display: string
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
                  monetizable: boolean
                }
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
                  duration_millis: number
                  variants: {
                    content_type: string
                    url: string
                    bitrate?: number
                  }[]
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
                ext_alt_text?: string
              }[]
            }
            possibly_sensitive?: boolean
            possibly_sensitive_editable?: boolean
          }
          quotedRefResult?: {
            result?: {
              __typename: string
              rest_id?: string
              tweet?: {
                rest_id: string
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
                  image_value?: {
                    height: number
                    width: number
                    url: string
                  }
                  scribe_key?: string
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
                  boolean_value?: boolean
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
                    verified_type: string
                    want_retweets: boolean
                    withheld_in_countries: unknown[]
                  }
                  tipjar_settings: {}
                }
              }[]
            }
          }
          previous_counts?: {
            bookmark_count: number
            favorite_count: number
            quote_count: number
            reply_count: number
            retweet_count: number
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
        quotedRefResult?: {
          result: {
            __typename: string
            rest_id?: string
            tweet?: {
              rest_id: string
            }
          }
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
    community_results?: {
      result: {
        __typename: string
        id_str: string
        viewer_relationship: {
          moderation_state: {
            __typename: string
          }
        }
      }
    }
    community_relationship?: {
      id: string
      rest_id: string
      moderation_state: {}
      actions: {
        pin_action_result: {
          __typename: string
        }
        unpin_action_result: {
          __typename: string
        }
      }
    }
    author_community_relationship?: {
      community_results: {
        result: {
          __typename: string
          id_str: string
          name: string
          description: string
          created_at: number
          search_tags: string[]
          is_nsfw: boolean
          primary_community_topic?: {
            topic_id: string
            topic_name: string
          }
          actions: {
            delete_action_result: {
              __typename: string
              reason: string
            }
            join_action_result: {
              __typename: string
              reason?: string
              message?: string
            }
            leave_action_result: {
              __typename: string
              reason: string
              message: string
            }
            pin_action_result: {
              __typename: string
            }
          }
          admin_results: {
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
                blocking?: boolean
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
                category: {
                  id: number
                  name: string
                  icon_name: string
                }[]
              }
              tipjar_settings: {}
            }
          }
          creator_results: {
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
                blocking?: boolean
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
                category: {
                  id: number
                  name: string
                  icon_name: string
                }[]
              }
              tipjar_settings: {}
            }
          }
          invites_result: {
            __typename: string
            reason: string
            message: string
          }
          join_policy: string
          invites_policy: string
          is_pinned: boolean
          members_facepile_results: {
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
                blocking?: boolean
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
                category: {
                  id: number
                  name: string
                  icon_name: string
                }[]
              }
              tipjar_settings: {}
            }
          }[]
          moderator_count: number
          member_count: number
          role: string
          rules: {
            rest_id: string
            name: string
            description?: string
          }[]
          custom_banner_media: {
            media_info: {
              color_info: {
                palette: {
                  rgb: {
                    red: number
                    green: number
                    blue: number
                  }
                  percentage: number
                }[]
              }
              original_img_url: string
              original_img_width: number
              original_img_height: number
              salient_rect: {
                left: number
                top: number
                width: number
                height: number
              }
            }
          }
          default_banner_media: {
            media_info: {
              color_info: {
                palette: {
                  rgb: {
                    red: number
                    green: number
                    blue: number
                  }
                  percentage: number
                }[]
              }
              original_img_url: string
              original_img_width: number
              original_img_height: number
            }
          }
          viewer_relationship: {
            moderation_state: {
              __typename: string
            }
          }
          join_requests_result: {
            __typename: string
          }
          question?: string
        }
      }
      role: string
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
            category: {
              id: number
              name: string
              icon_name: string
            }[]
          }
          tipjar_settings: {
            is_enabled?: boolean
          }
        }
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
            inline_media: {
              media_id: string
              index: number
            }[]
          }
        }
      }
    }
    previous_counts?: {
      bookmark_count: number
      favorite_count: number
      quote_count: number
      reply_count: number
      retweet_count: number
    }
    grok_share_attachment?: {
      items: {
        message: string
        media_urls: unknown[]
      }[]
    }
    grok_analysis_followups?: string[]
    birdwatch_pivot?: {
      callToAction: {
        prompt: string
        title: string
        destinationUrl: string
      }
      destinationUrl: string
      footer: {
        text: string
        entities: {
          fromIndex: number
          toIndex: number
          ref: {
            type: string
            url: string
            urlType: string
          }
        }[]
      }
      note: {
        rest_id: string
      }
      subtitle: {
        text: string
        entities: {
          fromIndex: number
          toIndex: number
          ref: {
            type: string
            url: string
            urlType: string
          }
        }[]
      }
      title: string
      shorttitle: string
      visualStyle: string
      iconType: string
    }
    quick_promote_eligibility?: {
      eligibility: string
    }
  }
  limitedActionResults?: {
    limited_actions: {
      action: string
      prompt?: {
        __typename: string
        cta_type?: string
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
  grok_analysis_followups?: string[]
  grok_analysis_button?: boolean
  birdwatch_pivot?: {
    callToAction: {
      prompt: string
      title: string
      destinationUrl: string
    }
    destinationUrl: string
    footer: {
      text: string
      entities: {
        fromIndex: number
        toIndex: number
        ref: {
          type: string
          url: string
          urlType: string
        }
      }[]
    }
    note: {
      rest_id: string
    }
    subtitle: {
      text: string
      entities: {
        fromIndex: number
        toIndex: number
        ref: {
          type: string
          url: string
          urlType: string
        }
      }[]
    }
    title: string
    shorttitle: string
    visualStyle: string
    iconType: string
    titleDetail?: string
  }
  grok_share_attachment?: {
    items: {
      message: string
      media_urls: string[]
      deepsearch_headers?: unknown[]
    }[]
  }
  article?: {
    article_results: {
      result: {
        rest_id: string
        id: string
        title: string
        preview_text: string
        cover_media: {
          id: string
          media_key: string
          media_id: string
          media_info: {
            __typename: string
            original_img_height: number
            original_img_width: number
            original_img_url: string
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
          }
        }
        lifecycle_state: {
          modified_at_secs: number
        }
        metadata: {
          first_published_at_secs: number
        }
      }
    }
  }
  community_results?: {
    result?: {
      __typename: string
      id_str: string
      viewer_relationship: {
        moderation_state: {
          __typename: string
        }
      }
    }
  }
  community_relationship?: {
    id: string
    rest_id: string
    moderation_state: {}
    actions: {
      pin_action_result: {
        __typename: string
      }
      unpin_action_result: {
        __typename: string
      }
    }
  }
  author_community_relationship?: {
    community_results: {
      result?: {
        __typename: string
        id_str: string
        name: string
        description: string
        created_at: number
        search_tags: string[]
        is_nsfw: boolean
        primary_community_topic?: {
          topic_id: string
          topic_name: string
        }
        actions: {
          delete_action_result: {
            __typename: string
            reason: string
          }
          join_action_result: {
            __typename: string
            reason?: string
            message?: string
          }
          leave_action_result: {
            __typename: string
            reason: string
            message: string
          }
          pin_action_result: {
            __typename: string
          }
        }
        admin_results: {
          result: {
            __typename: string
            id?: string
            rest_id?: string
            affiliates_highlighted_label?: {}
            has_graduated_access?: boolean
            parody_commentary_fan_label?: string
            is_blue_verified?: boolean
            profile_image_shape?: string
            legacy?: {
              blocking?: boolean
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
              verified: boolean
              want_retweets: boolean
              withheld_in_countries: unknown[]
              url?: string
              protected?: boolean
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
            tipjar_settings?: {
              is_enabled?: boolean
              patreon_handle?: string
              cash_app_handle?: string
              venmo_handle?: string
              bitcoin_handle?: string
              ethereum_handle?: string
              gofundme_handle?: string
            }
            super_follow_eligible?: boolean
            message?: string
            reason?: string
          }
        }
        creator_results: {
          result: {
            __typename: string
            id?: string
            rest_id?: string
            affiliates_highlighted_label?: {}
            has_graduated_access?: boolean
            parody_commentary_fan_label?: string
            is_blue_verified?: boolean
            profile_image_shape?: string
            legacy?: {
              blocking?: boolean
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
              verified: boolean
              want_retweets: boolean
              withheld_in_countries: unknown[]
              url?: string
              protected?: boolean
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
            tipjar_settings?: {
              is_enabled?: boolean
              patreon_handle?: string
              cash_app_handle?: string
              venmo_handle?: string
              bitcoin_handle?: string
              ethereum_handle?: string
              gofundme_handle?: string
            }
            super_follow_eligible?: boolean
            message?: string
            reason?: string
          }
        }
        invites_result: {
          __typename: string
          reason: string
          message: string
        }
        join_policy: string
        invites_policy: string
        is_pinned: boolean
        members_facepile_results: {
          result?: {
            __typename: string
            id: string
            rest_id: string
            affiliates_highlighted_label: {}
            has_graduated_access: boolean
            parody_commentary_fan_label: string
            is_blue_verified: boolean
            profile_image_shape: string
            legacy: {
              blocking?: boolean
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
              verified: boolean
              want_retweets: boolean
              withheld_in_countries: unknown[]
              url?: string
              protected?: boolean
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
            tipjar_settings: {
              is_enabled?: boolean
              patreon_handle?: string
              venmo_handle?: string
              cash_app_handle?: string
              bitcoin_handle?: string
              ethereum_handle?: string
              gofundme_handle?: string
            }
            super_follow_eligible?: boolean
          }
        }[]
        moderator_count: number
        member_count: number
        role: string
        rules: {
          rest_id: string
          name: string
          description?: string
        }[]
        custom_banner_media?: {
          media_info: {
            color_info: {
              palette: {
                rgb: {
                  red: number
                  green: number
                  blue: number
                }
                percentage: number
              }[]
            }
            original_img_url: string
            original_img_width: number
            original_img_height: number
            salient_rect: {
              left: number
              top: number
              width: number
              height: number
            }
          }
        }
        default_banner_media: {
          media_info: {
            color_info: {
              palette: {
                rgb: {
                  red: number
                  green: number
                  blue: number
                }
                percentage: number
              }[]
            }
            original_img_url: string
            original_img_width: number
            original_img_height: number
          }
        }
        viewer_relationship: {
          moderation_state: {
            __typename: string
          }
        }
        join_requests_result: {
          __typename: string
        }
        question?: string
      }
    }
    role: string
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
          verified: boolean
          want_retweets: boolean
          withheld_in_countries: unknown[]
          url?: string
          followed_by?: boolean
        }
        tipjar_settings: {
          is_enabled?: boolean
          bitcoin_handle?: string
          ethereum_handle?: string
          gofundme_handle?: string
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
  superFollowsReplyUserResult?: {
    result: {
      __typename: string
      legacy: {
        screen_name: string
      }
    }
  }
  quick_promote_eligibility?: {
    eligibility: string
  }
}
