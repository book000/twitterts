/* eslint-disable @typescript-eslint/no-empty-object-type */

/** ホームタイムラインモデル */

export interface CustomGraphQLTimelineSuccessResponse {
  errors?: {
    message: string
    locations: {
      line: number
      column: number
    }[]
    path: (number | string)[]
    extensions: {
      name: string
      source: string
      retry_after?: number
      code: number
      kind: string
      tracing: {
        trace_id: string
      }
    }
    code: number
    kind: string
    name: string
    source: string
    retry_after?: number
    tracing: {
      trace_id: string
    }
  }[]
  data: {
    home: {
      home_timeline_urt?: {
        instructions: {
          type: string
          entries?: {
            entryId: string
            sortIndex: string
            content: {
              entryType: string
              __typename: string
              itemContent?: {
                itemType: string
                __typename: string
                content?: {
                  contentType: string
                  headerText: string
                  bodyText: string
                  headerRichText?: {
                    text: string
                    entities: unknown[]
                  }
                  bodyRichText?: {
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
                  primaryButtonAction?: {
                    text: string
                    action: {
                      url: string
                      dismissOnClick: boolean
                      onClickCallbacks?: {
                        endpoint: string
                      }[]
                      clientEventInfo?: {
                        action: string
                      }
                    }
                  }
                }
                impressionCallbacks?: {
                  endpoint: string
                }[]
                tweet_results?: {
                  result?: {
                    __typename: string
                    rest_id?: string
                    core?: {
                      user_results: {
                        result?: {
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
                            following?: boolean
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
                            verified_type?: string
                            followed_by?: boolean
                            protected?: boolean
                            notifications?: boolean
                            needs_phone_verification?: boolean
                          }
                          tipjar_settings?: {
                            is_enabled?: boolean
                            bitcoin_handle?: string
                            ethereum_handle?: string
                            cash_app_handle?: string
                            venmo_handle?: string
                            patreon_handle?: string
                            gofundme_handle?: string
                            bandcamp_handle?: string
                          }
                          professional?: {
                            rest_id: string
                            professional_type?: string
                            category?: {
                              id: number
                              name: string
                              icon_name: string
                            }[]
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
                            can_media_tag?: boolean
                          }
                          relationship_perspectives?: {
                            following?: boolean
                            followed_by?: boolean
                          }
                          core?: {
                            created_at: string
                            name: string
                            screen_name: string
                          }
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
                            result: {
                              media_key?: string
                              grok_image_annotation?: {
                                prompt: string
                                upsampled_prompt: string
                              }
                            }
                          }
                          additional_media_info?: {
                            monetizable: boolean
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
                                    following?: boolean
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
                                    verified_type?: string
                                    blocking?: boolean
                                    followed_by?: boolean
                                  }
                                  tipjar_settings: {
                                    is_enabled?: boolean
                                    ethereum_handle?: string
                                    bitcoin_handle?: string
                                    cash_app_handle?: string
                                    venmo_handle?: string
                                    patreon_handle?: string
                                    bandcamp_handle?: string
                                    gofundme_handle?: string
                                    pay_pal_handle?: string
                                  }
                                  professional?: {
                                    rest_id: string
                                    professional_type?: string
                                    category?: {
                                      id: number
                                      name: string
                                      icon_name: string
                                    }[]
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
                                    can_media_tag?: boolean
                                  }
                                  relationship_perspectives?: {
                                    following?: boolean
                                    followed_by?: boolean
                                  }
                                  core?: {
                                    created_at: string
                                    name: string
                                    screen_name: string
                                  }
                                }
                              }
                            }
                          }
                          allow_download_status?: {
                            allow_download?: boolean
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
                          sensitive_media_warning?: {
                            adult_content?: boolean
                            other: boolean
                          }
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
                            result: {
                              media_key?: string
                              grok_image_annotation?: {
                                prompt: string
                                upsampled_prompt: string
                              }
                            }
                          }
                          additional_media_info?: {
                            monetizable: boolean
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
                                    following?: boolean
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
                                    verified_type?: string
                                    blocking?: boolean
                                    followed_by?: boolean
                                  }
                                  tipjar_settings: {
                                    is_enabled?: boolean
                                    ethereum_handle?: string
                                    bitcoin_handle?: string
                                    cash_app_handle?: string
                                    venmo_handle?: string
                                    patreon_handle?: string
                                    bandcamp_handle?: string
                                    gofundme_handle?: string
                                    pay_pal_handle?: string
                                  }
                                  professional?: {
                                    rest_id: string
                                    professional_type?: string
                                    category?: {
                                      id: number
                                      name: string
                                      icon_name: string
                                    }[]
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
                                    can_media_tag?: boolean
                                  }
                                  relationship_perspectives?: {
                                    following?: boolean
                                    followed_by?: boolean
                                  }
                                  core?: {
                                    created_at: string
                                    name: string
                                    screen_name: string
                                  }
                                }
                              }
                            }
                          }
                          allow_download_status?: {
                            allow_download?: boolean
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
                          sensitive_media_warning?: {
                            adult_content?: boolean
                            other: boolean
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
                      scopes?: {
                        followers: boolean
                      }
                      retweeted_status_result?: {
                        result?: {
                          __typename: string
                          rest_id?: string
                          core?: {
                            user_results: {
                              result?: {
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
                                has_graduated_access?: boolean
                                parody_commentary_fan_label?: string
                                is_blue_verified?: boolean
                                profile_image_shape?: string
                                legacy?: {
                                  following?: boolean
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
                                  withheld_in_countries: unknown[]
                                  verified_type?: string
                                  followed_by?: boolean
                                  protected?: boolean
                                }
                                tipjar_settings?: {
                                  is_enabled?: boolean
                                  ethereum_handle?: string
                                  bitcoin_handle?: string
                                  patreon_handle?: string
                                  venmo_handle?: string
                                  cash_app_handle?: string
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
                                  can_media_tag?: boolean
                                }
                                relationship_perspectives?: {
                                  following?: boolean
                                  followed_by?: boolean
                                }
                                core?: {
                                  created_at: string
                                  name: string
                                  screen_name: string
                                }
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
                            initial_tweet_id?: string
                            edit_control_initial?: {
                              edit_tweet_ids: string[]
                              editable_until_msecs: string
                              is_edit_eligible: boolean
                              edits_remaining: string
                            }
                            edit_tweet_ids?: string[]
                            editable_until_msecs?: string
                            is_edit_eligible?: boolean
                            edits_remaining?: string
                          }
                          previous_counts?: {
                            bookmark_count: number
                            favorite_count: number
                            quote_count: number
                            reply_count: number
                            retweet_count: number
                          }
                          is_translatable?: boolean
                          views?: {
                            count?: string
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
                                          following?: boolean
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
                                          location?: string
                                          media_count: number
                                          name?: string
                                          normal_followers_count: number
                                          pinned_tweet_ids_str: string[]
                                          possibly_sensitive: boolean
                                          profile_banner_url: string
                                          profile_image_url_https?: string
                                          profile_interstitial_type: string
                                          screen_name?: string
                                          statuses_count: number
                                          translator_type: string
                                          verified?: boolean
                                          want_retweets?: boolean
                                          withheld_in_countries: unknown[]
                                          url?: string
                                          verified_type?: string
                                        }
                                        tipjar_settings: {
                                          is_enabled?: boolean
                                          cash_app_handle?: string
                                        }
                                        professional?: {
                                          rest_id: string
                                          professional_type?: string
                                          category?: {
                                            id: number
                                            name: string
                                            icon_name: string
                                          }[]
                                        }
                                        verification?: {
                                          verified: boolean
                                        }
                                        avatar?: {
                                          image_url: string
                                        }
                                        core?: {
                                          created_at: string
                                          name: string
                                          screen_name: string
                                        }
                                        dm_permissions?: {
                                          can_dm: boolean
                                        }
                                        location?: {
                                          location: string
                                        }
                                        media_permissions?: {
                                          can_media_tag?: boolean
                                        }
                                        privacy?: {
                                          protected: boolean
                                        }
                                        relationship_perspectives?: {
                                          following?: boolean
                                        }
                                        super_follow_eligible?: boolean
                                      }
                                    }
                                  }
                                  title?: string
                                  description?: string
                                  call_to_actions?: {
                                    visit_site?: {
                                      url: string
                                    }
                                    watch_now?: {
                                      url: string
                                    }
                                  }
                                  embeddable?: boolean
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
                                  allow_download?: boolean
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
                                    grok_image_annotation?: {
                                      prompt: string
                                      upsampled_prompt: string
                                    }
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
                                source_status_id_str?: string
                                source_user_id_str?: string
                                ext_alt_text?: string
                                sensitive_media_warning?: {
                                  adult_content: boolean
                                  other: boolean
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
                                          following?: boolean
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
                                          location?: string
                                          media_count: number
                                          name?: string
                                          normal_followers_count: number
                                          pinned_tweet_ids_str: string[]
                                          possibly_sensitive: boolean
                                          profile_banner_url: string
                                          profile_image_url_https?: string
                                          profile_interstitial_type: string
                                          screen_name?: string
                                          statuses_count: number
                                          translator_type: string
                                          verified?: boolean
                                          want_retweets?: boolean
                                          withheld_in_countries: unknown[]
                                          url?: string
                                          verified_type?: string
                                        }
                                        tipjar_settings: {
                                          is_enabled?: boolean
                                          cash_app_handle?: string
                                        }
                                        professional?: {
                                          rest_id: string
                                          professional_type?: string
                                          category?: {
                                            id: number
                                            name: string
                                            icon_name: string
                                          }[]
                                        }
                                        verification?: {
                                          verified: boolean
                                        }
                                        avatar?: {
                                          image_url: string
                                        }
                                        core?: {
                                          created_at: string
                                          name: string
                                          screen_name: string
                                        }
                                        dm_permissions?: {
                                          can_dm: boolean
                                        }
                                        location?: {
                                          location: string
                                        }
                                        media_permissions?: {
                                          can_media_tag?: boolean
                                        }
                                        privacy?: {
                                          protected: boolean
                                        }
                                        relationship_perspectives?: {
                                          following?: boolean
                                        }
                                        super_follow_eligible?: boolean
                                      }
                                    }
                                  }
                                  title?: string
                                  description?: string
                                  call_to_actions?: {
                                    visit_site?: {
                                      url: string
                                    }
                                    watch_now?: {
                                      url: string
                                    }
                                  }
                                  embeddable?: boolean
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
                                  allow_download?: boolean
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
                                    grok_image_annotation?: {
                                      prompt: string
                                      upsampled_prompt: string
                                    }
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
                                source_status_id_str?: string
                                source_user_id_str?: string
                                ext_alt_text?: string
                                sensitive_media_warning?: {
                                  adult_content: boolean
                                  other: boolean
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
                            scopes?: {
                              followers: boolean
                            }
                            in_reply_to_screen_name?: string
                            in_reply_to_status_id_str?: string
                            in_reply_to_user_id_str?: string
                            conversation_control?: {
                              policy: string
                              conversation_owner_results: {
                                result: {
                                  __typename: string
                                  legacy?: {
                                    screen_name: string
                                  }
                                  core?: {
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
                                    following?: boolean
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
                                    want_retweets: boolean
                                    withheld_in_countries: unknown[]
                                    verified_type?: string
                                    blocking?: boolean
                                    muting?: boolean
                                  }
                                  tipjar_settings?: {
                                    is_enabled?: boolean
                                    patreon_handle?: string
                                    bitcoin_handle?: string
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
                                  message?: string
                                  reason?: string
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
                              }[]
                            }
                          }
                          quoted_status_result?: {
                            result?: {
                              __typename: string
                              rest_id?: string
                              core?: {
                                user_results: {
                                  result?: {
                                    __typename: string
                                    id: string
                                    rest_id: string
                                    affiliates_highlighted_label: {
                                      label?: {
                                        badge: {
                                          url: string
                                        }
                                        description: string
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
                                        userLabelType: string
                                        url?: {
                                          url: string
                                          urlType: string
                                        }
                                        userLabelDisplayType?: string
                                      }
                                    }
                                    has_graduated_access: boolean
                                    parody_commentary_fan_label: string
                                    is_blue_verified: boolean
                                    profile_image_shape: string
                                    legacy: {
                                      following?: boolean
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
                                      want_retweets: boolean
                                      withheld_in_countries: string[]
                                      verified_type?: string
                                      followed_by?: boolean
                                    }
                                    tipjar_settings: {
                                      is_enabled?: boolean
                                      bitcoin_handle?: string
                                      ethereum_handle?: string
                                      cash_app_handle?: string
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
                                      followed_by?: boolean
                                    }
                                    core?: {
                                      created_at: string
                                      name: string
                                      screen_name: string
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
                                      allow_download?: boolean
                                    }
                                    media_results: {
                                      result: {
                                        media_key: string
                                      }
                                    }
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
                                              following?: boolean
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
                                              verified?: boolean
                                              want_retweets: boolean
                                              withheld_in_countries: unknown[]
                                              url?: string
                                            }
                                            tipjar_settings: {
                                              is_enabled?: boolean
                                              patreon_handle?: string
                                              bitcoin_handle?: string
                                              ethereum_handle?: string
                                            }
                                            super_follow_eligible?: boolean
                                            professional?: {
                                              rest_id: string
                                              professional_type: string
                                              category: {
                                                id: number
                                                name: string
                                                icon_name: string
                                              }[]
                                            }
                                            avatar?: {
                                              image_url: string
                                            }
                                            core?: {
                                              created_at: string
                                              name: string
                                              screen_name: string
                                            }
                                            dm_permissions?: {
                                              can_dm: boolean
                                            }
                                            location?: {
                                              location: string
                                            }
                                            media_permissions?: {
                                              can_media_tag: boolean
                                            }
                                            privacy?: {
                                              protected: boolean
                                            }
                                            relationship_perspectives?: {
                                              following: boolean
                                            }
                                            verification?: {
                                              verified: boolean
                                            }
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
                                    source_status_id_str?: string
                                    source_user_id_str?: string
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
                                      allow_download?: boolean
                                    }
                                    media_results: {
                                      result: {
                                        media_key: string
                                      }
                                    }
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
                                              following?: boolean
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
                                              verified?: boolean
                                              want_retweets: boolean
                                              withheld_in_countries: unknown[]
                                              url?: string
                                            }
                                            tipjar_settings: {
                                              is_enabled?: boolean
                                              patreon_handle?: string
                                              bitcoin_handle?: string
                                              ethereum_handle?: string
                                            }
                                            super_follow_eligible?: boolean
                                            professional?: {
                                              rest_id: string
                                              professional_type: string
                                              category: {
                                                id: number
                                                name: string
                                                icon_name: string
                                              }[]
                                            }
                                            avatar?: {
                                              image_url: string
                                            }
                                            core?: {
                                              created_at: string
                                              name: string
                                              screen_name: string
                                            }
                                            dm_permissions?: {
                                              can_dm: boolean
                                            }
                                            location?: {
                                              location: string
                                            }
                                            media_permissions?: {
                                              can_media_tag: boolean
                                            }
                                            privacy?: {
                                              protected: boolean
                                            }
                                            relationship_perspectives?: {
                                              following: boolean
                                            }
                                            verification?: {
                                              verified: boolean
                                            }
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
                                        following?: boolean
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
                                        url: string
                                        verified?: boolean
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
                                      }
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
                              previous_counts?: {
                                bookmark_count: number
                                favorite_count: number
                                quote_count: number
                                reply_count: number
                                retweet_count: number
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
                                        following?: boolean
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
                                        verified?: boolean
                                        want_retweets: boolean
                                        withheld_in_countries: unknown[]
                                        url?: string
                                      }
                                      tipjar_settings: {
                                        is_enabled?: boolean
                                        bitcoin_handle?: string
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
                                      verification?: {
                                        verified: boolean
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
                                      }
                                      core?: {
                                        created_at: string
                                        name: string
                                        screen_name: string
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
                                legacy: {
                                  bookmark_count: number
                                  bookmarked: boolean
                                  created_at: string
                                  conversation_control?: {
                                    policy: string
                                    conversation_owner_results: {
                                      result: {
                                        __typename: string
                                        legacy?: {
                                          screen_name: string
                                        }
                                        core?: {
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
                                    }[]
                                  }
                                  possibly_sensitive?: boolean
                                  possibly_sensitive_editable?: boolean
                                }
                                quotedRefResult?: {
                                  result?: {
                                    __typename: string
                                    tweet?: {
                                      rest_id: string
                                    }
                                    rest_id?: string
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
                                        timestamps?: unknown[]
                                        urls: unknown[]
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
                                previous_counts?: {
                                  bookmark_count: number
                                  favorite_count: number
                                  quote_count: number
                                  reply_count: number
                                  retweet_count: number
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
                                        is_blue_verified: boolean
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
                                          profile_image_url_https: string
                                          profile_interstitial_type: string
                                          screen_name: string
                                          statuses_count: number
                                          translator_type: string
                                          url: string
                                          verified: boolean
                                          want_retweets: boolean
                                          withheld_in_countries: unknown[]
                                          profile_banner_url?: string
                                          verified_type?: string
                                        }
                                        parody_commentary_fan_label: string
                                        profile_image_shape: string
                                        tipjar_settings: {}
                                        verification?: {
                                          verified: boolean
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
                                    }[]
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
                                footerIconType?: string
                              }
                              mediaVisibilityResults?: {
                                blurred_image_interstitial: {
                                  opacity: number
                                  text: {
                                    rtl: boolean
                                    text: string
                                    entities: unknown[]
                                  }
                                  title: {
                                    rtl: boolean
                                    text: string
                                    entities: unknown[]
                                  }
                                }
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
                            titleDetail?: string
                            shorttitle: string
                            visualStyle: string
                            iconType: string
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
                                    following?: boolean
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
                                    location?: string
                                    media_count: number
                                    name: string
                                    normal_followers_count: number
                                    pinned_tweet_ids_str: string[]
                                    possibly_sensitive: boolean
                                    profile_image_url_https?: string
                                    profile_interstitial_type: string
                                    screen_name: string
                                    statuses_count: number
                                    translator_type: string
                                    url?: string
                                    verified?: boolean
                                    want_retweets: boolean
                                    withheld_in_countries: unknown[]
                                    profile_banner_url?: string
                                  }
                                  tipjar_settings: {
                                    is_enabled?: boolean
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
                                  avatar?: {
                                    image_url: string
                                  }
                                  dm_permissions?: {
                                    can_dm: boolean
                                  }
                                  location?: {
                                    location: string
                                  }
                                  media_permissions?: {
                                    can_media_tag: boolean
                                  }
                                  privacy?: {
                                    protected: boolean
                                  }
                                  relationship_perspectives?: {
                                    following: boolean
                                  }
                                  verification?: {
                                    verified: boolean
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
                                      tipjar_settings: {}
                                    }
                                  }
                                }
                                card: {
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
                                        tipjar_settings: {}
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
                          mediaVisibilityResults?: {
                            blurred_image_interstitial: {
                              opacity: number
                              text: {
                                rtl: boolean
                                text: string
                                entities: unknown[]
                              }
                              title: {
                                rtl: boolean
                                text: string
                                entities: unknown[]
                              }
                            }
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
                            legacy?: {
                              screen_name: string
                            }
                            core?: {
                              screen_name: string
                            }
                          }
                        }
                      }
                      in_reply_to_status_id_str?: string
                    }
                    note_tweet?: {
                      is_expandable: boolean
                      note_tweet_results: {
                        result: {
                          id: string
                          text: string
                          entity_set?: {
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
                              following?: boolean
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
                              verified_type?: string
                              want_retweets: boolean
                              withheld_in_countries: unknown[]
                              blocking?: boolean
                              followed_by?: boolean
                              muting?: boolean
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
                              bitcoin_handle?: string
                              ethereum_handle?: string
                            }
                            super_follow_eligible?: boolean
                            message?: string
                            reason?: string
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
                              followed_by?: boolean
                            }
                            core?: {
                              created_at: string
                              name: string
                              screen_name: string
                            }
                          }
                        }[]
                      }
                    }
                    quoted_status_result?: {
                      result?: {
                        __typename: string
                        rest_id?: string
                        core?: {
                          user_results: {
                            result?: {
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
                                following?: boolean
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
                                verified?: boolean
                                want_retweets?: boolean
                                withheld_in_countries: string[]
                                url?: string
                                verified_type?: string
                                protected?: boolean
                                followed_by?: boolean
                              }
                              tipjar_settings?: {
                                is_enabled?: boolean
                                cash_app_handle?: string
                                venmo_handle?: string
                                bitcoin_handle?: string
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
                                can_media_tag?: boolean
                              }
                              relationship_perspectives?: {
                                following?: boolean
                                followed_by?: boolean
                              }
                              core?: {
                                created_at: string
                                name: string
                                screen_name: string
                              }
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
                                allow_download?: boolean
                              }
                              media_results: {
                                result: {
                                  media_key?: string
                                  grok_image_annotation?: {
                                    prompt: string
                                    upsampled_prompt: string
                                  }
                                }
                              }
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
                                        following?: boolean
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
                                        verified?: boolean
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
                                        bandcamp_handle?: string
                                        bitcoin_handle?: string
                                        cash_app_handle?: string
                                        ethereum_handle?: string
                                        gofundme_handle?: string
                                        patreon_handle?: string
                                        pay_pal_handle?: string
                                        venmo_handle?: string
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
                                      }
                                      core?: {
                                        created_at: string
                                        name: string
                                        screen_name: string
                                      }
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
                              source_status_id_str?: string
                              source_user_id_str?: string
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
                                allow_download?: boolean
                              }
                              media_results: {
                                result: {
                                  media_key?: string
                                  grok_image_annotation?: {
                                    prompt: string
                                    upsampled_prompt: string
                                  }
                                }
                              }
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
                                        following?: boolean
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
                                        verified?: boolean
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
                                        bandcamp_handle?: string
                                        bitcoin_handle?: string
                                        cash_app_handle?: string
                                        ethereum_handle?: string
                                        gofundme_handle?: string
                                        patreon_handle?: string
                                        pay_pal_handle?: string
                                        venmo_handle?: string
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
                                      }
                                      core?: {
                                        created_at: string
                                        name: string
                                        screen_name: string
                                      }
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
                          scopes?: {
                            followers: boolean
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
                                  following?: boolean
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
                                  want_retweets: boolean
                                  withheld_in_countries: unknown[]
                                  blocking?: boolean
                                  verified_type?: string
                                  protected?: boolean
                                  followed_by?: boolean
                                }
                                tipjar_settings?: {
                                  is_enabled?: boolean
                                  patreon_handle?: string
                                  bitcoin_handle?: string
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
                                verification?: {
                                  verified: boolean
                                  verified_type?: string
                                }
                                super_follow_eligible?: boolean
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
                                message?: string
                                reason?: string
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
                            }[]
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
                        previous_counts?: {
                          bookmark_count: number
                          favorite_count: number
                          quote_count: number
                          reply_count: number
                          retweet_count: number
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
                                  following?: boolean
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
                                  verified?: boolean
                                  want_retweets: boolean
                                  withheld_in_countries: unknown[]
                                  url?: string
                                  verified_type?: string
                                }
                                tipjar_settings: {
                                  is_enabled?: boolean
                                  bitcoin_handle?: string
                                  patreon_handle?: string
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
                                verification?: {
                                  verified: boolean
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
                                }
                                core?: {
                                  created_at: string
                                  name: string
                                  screen_name: string
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
                            conversation_control?: {
                              policy: string
                              conversation_owner_results: {
                                result: {
                                  __typename: string
                                  legacy?: {
                                    screen_name: string
                                  }
                                  core?: {
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
                                  source_user?: {
                                    user_results: {
                                      result: {
                                        __typename: string
                                        id: string
                                        rest_id: string
                                        affiliates_highlighted_label: {}
                                        has_graduated_access: boolean
                                        is_blue_verified: boolean
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
                                          url?: string
                                          verified: boolean
                                          want_retweets: boolean
                                          withheld_in_countries: unknown[]
                                        }
                                        parody_commentary_fan_label: string
                                        profile_image_shape: string
                                        tipjar_settings: {
                                          is_enabled?: boolean
                                          cash_app_handle?: string
                                          venmo_handle?: string
                                        }
                                        verification?: {
                                          verified: boolean
                                        }
                                      }
                                    }
                                  }
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
                                  source_user?: {
                                    user_results: {
                                      result: {
                                        __typename: string
                                        id: string
                                        rest_id: string
                                        affiliates_highlighted_label: {}
                                        has_graduated_access: boolean
                                        is_blue_verified: boolean
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
                                          url?: string
                                          verified: boolean
                                          want_retweets: boolean
                                          withheld_in_countries: unknown[]
                                        }
                                        parody_commentary_fan_label: string
                                        profile_image_shape: string
                                        tipjar_settings: {
                                          is_enabled?: boolean
                                          cash_app_handle?: string
                                          venmo_handle?: string
                                        }
                                        verification?: {
                                          verified: boolean
                                        }
                                      }
                                    }
                                  }
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
                                source_status_id_str?: string
                                source_user_id_str?: string
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
                                  timestamps?: unknown[]
                                  urls: unknown[]
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
                                  inline_media: unknown[]
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
                                    blocking?: boolean
                                    following?: boolean
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
                                    location?: string
                                    media_count: number
                                    name?: string
                                    normal_followers_count: number
                                    pinned_tweet_ids_str: string[]
                                    possibly_sensitive: boolean
                                    profile_banner_url: string
                                    profile_image_url_https?: string
                                    profile_interstitial_type: string
                                    screen_name?: string
                                    statuses_count: number
                                    translator_type: string
                                    url: string
                                    verified?: boolean
                                    verified_type?: string
                                    want_retweets: boolean
                                    withheld_in_countries: unknown[]
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
                                  avatar?: {
                                    image_url: string
                                  }
                                  dm_permissions?: {
                                    can_dm: boolean
                                  }
                                  location?: {
                                    location: string
                                  }
                                  media_permissions?: {
                                    can_media_tag: boolean
                                  }
                                  privacy?: {
                                    protected: boolean
                                  }
                                  relationship_perspectives?: {
                                    following: boolean
                                  }
                                  verification?: {
                                    verified: boolean
                                  }
                                  core?: {
                                    created_at: string
                                    name: string
                                    screen_name: string
                                  }
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
                          footerIconType?: string
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
                    tweet?: {
                      rest_id: string
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
                              following?: boolean
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
                              verified?: boolean
                              want_retweets?: boolean
                              withheld_in_countries: unknown[]
                              url?: string
                              verified_type?: string
                              followed_by?: boolean
                            }
                            tipjar_settings?: {
                              is_enabled?: boolean
                              bitcoin_handle?: string
                              ethereum_handle?: string
                              cash_app_handle?: string
                              patreon_handle?: string
                              venmo_handle?: string
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
                              can_media_tag?: boolean
                            }
                            relationship_perspectives?: {
                              following?: boolean
                              followed_by?: boolean
                            }
                            core?: {
                              created_at: string
                              name: string
                              screen_name: string
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
                        count?: string
                        state: string
                      }
                      source?: string
                      legacy: {
                        bookmark_count: number
                        bookmarked: boolean
                        created_at: string
                        conversation_control?: {
                          policy: string
                          conversation_owner_results: {
                            result: {
                              __typename: string
                              legacy?: {
                                screen_name: string
                              }
                              core?: {
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
                            allow_download_status?: {
                              allow_download: boolean
                            }
                            media_results: {
                              result: {
                                media_key?: string
                              }
                            }
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
                                      following?: boolean
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
                                      location?: string
                                      media_count: number
                                      name: string
                                      normal_followers_count: number
                                      pinned_tweet_ids_str: string[]
                                      possibly_sensitive: boolean
                                      profile_banner_url: string
                                      profile_image_url_https?: string
                                      profile_interstitial_type: string
                                      screen_name: string
                                      statuses_count: number
                                      translator_type: string
                                      url?: string
                                      verified?: boolean
                                      want_retweets: boolean
                                      withheld_in_countries: unknown[]
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
                                    }
                                    avatar?: {
                                      image_url: string
                                    }
                                    dm_permissions?: {
                                      can_dm: boolean
                                    }
                                    location?: {
                                      location: string
                                    }
                                    media_permissions?: {
                                      can_media_tag: boolean
                                    }
                                    privacy?: {
                                      protected: boolean
                                    }
                                    relationship_perspectives?: {
                                      following: boolean
                                    }
                                    verification?: {
                                      verified: boolean
                                      verified_type?: string
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
                            sensitive_media_warning?: {
                              adult_content?: boolean
                              other?: boolean
                            }
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
                                media_key?: string
                              }
                            }
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
                                      following?: boolean
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
                                      location?: string
                                      media_count: number
                                      name: string
                                      normal_followers_count: number
                                      pinned_tweet_ids_str: string[]
                                      possibly_sensitive: boolean
                                      profile_banner_url: string
                                      profile_image_url_https?: string
                                      profile_interstitial_type: string
                                      screen_name: string
                                      statuses_count: number
                                      translator_type: string
                                      url?: string
                                      verified?: boolean
                                      want_retweets: boolean
                                      withheld_in_countries: unknown[]
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
                                    }
                                    avatar?: {
                                      image_url: string
                                    }
                                    dm_permissions?: {
                                      can_dm: boolean
                                    }
                                    location?: {
                                      location: string
                                    }
                                    media_permissions?: {
                                      can_media_tag: boolean
                                    }
                                    privacy?: {
                                      protected: boolean
                                    }
                                    relationship_perspectives?: {
                                      following: boolean
                                    }
                                    verification?: {
                                      verified: boolean
                                      verified_type?: string
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
                            sensitive_media_warning?: {
                              adult_content?: boolean
                              other?: boolean
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
                        scopes?: {
                          followers: boolean
                        }
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
                                    affiliates_highlighted_label: {}
                                    has_graduated_access?: boolean
                                    parody_commentary_fan_label: string
                                    is_blue_verified?: boolean
                                    profile_image_shape: string
                                    legacy: {
                                      following?: boolean
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
                                      bitcoin_handle?: string
                                      patreon_handle?: string
                                      ethereum_handle?: string
                                    }
                                    super_follow_eligible?: boolean
                                    verification?: {
                                      verified: boolean
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
                                    }
                                    core?: {
                                      created_at: string
                                      name: string
                                      screen_name: string
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
                              legacy: {
                                bookmark_count: number
                                bookmarked: boolean
                                created_at: string
                                conversation_control?: {
                                  policy: string
                                  conversation_owner_results: {
                                    result: {
                                      __typename: string
                                      legacy?: {
                                        screen_name: string
                                      }
                                      core?: {
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
                                    ext_alt_text?: string
                                    video_info?: {
                                      aspect_ratio: number[]
                                      variants: {
                                        bitrate?: number
                                        content_type: string
                                        url: string
                                      }[]
                                      duration_millis?: number
                                    }
                                    additional_media_info?: {
                                      monetizable: boolean
                                    }
                                    sensitive_media_warning?: {
                                      other: boolean
                                    }
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
                                    ext_alt_text?: string
                                    video_info?: {
                                      aspect_ratio: number[]
                                      variants: {
                                        bitrate?: number
                                        content_type: string
                                        url: string
                                      }[]
                                      duration_millis?: number
                                    }
                                    additional_media_info?: {
                                      monetizable: boolean
                                    }
                                    sensitive_media_warning?: {
                                      other: boolean
                                    }
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
                                scopes?: {
                                  followers: boolean
                                }
                                in_reply_to_screen_name?: string
                                in_reply_to_status_id_str?: string
                                in_reply_to_user_id_str?: string
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
                                      timestamps?: unknown[]
                                      urls: {
                                        display_url: string
                                        expanded_url: string
                                        url: string
                                        indices: number[]
                                      }[]
                                      user_mentions: unknown[]
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
                                        profile_banner_url?: string
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
                                      professional?: {
                                        rest_id: string
                                        professional_type: string
                                        category: {
                                          id: number
                                          name: string
                                          icon_name: string
                                        }[]
                                      }
                                      verification?: {
                                        verified: boolean
                                        verified_type?: string
                                      }
                                    }
                                  }[]
                                }
                              }
                              quoted_status_result?: {
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
                                          affiliates_highlighted_label: {}
                                          has_graduated_access: boolean
                                          parody_commentary_fan_label: string
                                          is_blue_verified: boolean
                                          profile_image_shape: string
                                          legacy: {
                                            following?: boolean
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
                                            location?: string
                                            media_count: number
                                            name?: string
                                            normal_followers_count: number
                                            pinned_tweet_ids_str: string[]
                                            possibly_sensitive: boolean
                                            profile_banner_url: string
                                            profile_image_url_https?: string
                                            profile_interstitial_type: string
                                            screen_name?: string
                                            statuses_count: number
                                            translator_type: string
                                            url?: string
                                            verified?: boolean
                                            want_retweets: boolean
                                            withheld_in_countries: unknown[]
                                          }
                                          tipjar_settings: {
                                            is_enabled?: boolean
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
                                          avatar?: {
                                            image_url: string
                                          }
                                          core?: {
                                            created_at: string
                                            name: string
                                            screen_name: string
                                          }
                                          dm_permissions?: {
                                            can_dm: boolean
                                          }
                                          location?: {
                                            location: string
                                          }
                                          media_permissions?: {
                                            can_media_tag: boolean
                                          }
                                          privacy?: {
                                            protected: boolean
                                          }
                                          relationship_perspectives?: {
                                            following: boolean
                                          }
                                          verification?: {
                                            verified: boolean
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
                                      conversation_control: {
                                        policy: string
                                        conversation_owner_results: {
                                          result: {
                                            __typename: string
                                            legacy?: {
                                              screen_name: string
                                            }
                                            core?: {
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
                                    quotedRefResult?: {
                                      result: {
                                        __typename: string
                                        rest_id: string
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
                                          following?: boolean
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
                                          location?: string
                                          media_count: number
                                          name?: string
                                          normal_followers_count: number
                                          pinned_tweet_ids_str: string[]
                                          possibly_sensitive: boolean
                                          profile_image_url_https?: string
                                          profile_interstitial_type: string
                                          screen_name?: string
                                          statuses_count: number
                                          translator_type: string
                                          verified?: boolean
                                          want_retweets: boolean
                                          withheld_in_countries: unknown[]
                                          profile_banner_url?: string
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
                                        verification?: {
                                          verified: boolean
                                        }
                                        location?: {
                                          location: string
                                        }
                                        avatar?: {
                                          image_url: string
                                        }
                                        core?: {
                                          created_at: string
                                          name: string
                                          screen_name: string
                                        }
                                        dm_permissions?: {
                                          can_dm: boolean
                                        }
                                        media_permissions?: {
                                          can_media_tag: boolean
                                        }
                                        privacy?: {
                                          protected: boolean
                                        }
                                        relationship_perspectives?: {
                                          following: boolean
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
                                          reason?: string
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
                                        media_results: {
                                          result: {
                                            media_key: string
                                          }
                                        }
                                        allow_download_status?: {
                                          allow_download: boolean
                                        }
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
                                    in_reply_to_screen_name?: string
                                    in_reply_to_status_id_str?: string
                                    in_reply_to_user_id_str?: string
                                    quoted_status_id_str?: string
                                    quoted_status_permalink?: {
                                      url: string
                                      expanded: string
                                      display: string
                                    }
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
                                          reason?: string
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
                                        media_results: {
                                          result: {
                                            media_key: string
                                          }
                                        }
                                        allow_download_status?: {
                                          allow_download: boolean
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
                                  quotedRefResult?: {
                                    result: {
                                      __typename: string
                                      tweet?: {
                                        rest_id: string
                                      }
                                      rest_id?: string
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
                                            want_retweets: boolean
                                            withheld_in_countries: unknown[]
                                            blocking?: boolean
                                            verified_type?: string
                                          }
                                          tipjar_settings: {}
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
                            mediaVisibilityResults?: {
                              blurred_image_interstitial: {
                                opacity: number
                                text: {
                                  rtl: boolean
                                  text: string
                                  entities: unknown[]
                                }
                                title: {
                                  rtl: boolean
                                  text: string
                                  entities: unknown[]
                                }
                              }
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
                                    following?: boolean
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
                                    location?: string
                                    media_count: number
                                    name: string
                                    normal_followers_count: number
                                    pinned_tweet_ids_str: string[]
                                    possibly_sensitive: boolean
                                    profile_banner_url: string
                                    profile_image_url_https?: string
                                    profile_interstitial_type: string
                                    screen_name: string
                                    statuses_count: number
                                    translator_type: string
                                    verified?: boolean
                                    want_retweets: boolean
                                    withheld_in_countries: unknown[]
                                    url?: string
                                  }
                                  tipjar_settings: {
                                    is_enabled?: boolean
                                    patreon_handle?: string
                                  }
                                  avatar?: {
                                    image_url: string
                                  }
                                  dm_permissions?: {
                                    can_dm: boolean
                                  }
                                  location?: {
                                    location: string
                                  }
                                  media_permissions?: {
                                    can_media_tag: boolean
                                  }
                                  professional?: {
                                    rest_id: string
                                    professional_type: string
                                    category: unknown[]
                                  }
                                  privacy?: {
                                    protected: boolean
                                  }
                                  relationship_perspectives?: {
                                    following: boolean
                                  }
                                  verification?: {
                                    verified: boolean
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
                                quotedRefResult: {
                                  result: {
                                    __typename: string
                                    rest_id: string
                                  }
                                }
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
                                  quoted_status_id_str: string
                                  quoted_status_permalink: {
                                    url: string
                                    expanded: string
                                    display: string
                                  }
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
                        in_reply_to_screen_name?: string
                        in_reply_to_user_id_str?: string
                      }
                      quoted_status_result?: {
                        result?: {
                          __typename: string
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
                                    following?: boolean
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
                                    verified?: boolean
                                    want_retweets: boolean
                                    withheld_in_countries: unknown[]
                                    url?: string
                                  }
                                  tipjar_settings: {
                                    is_enabled?: boolean
                                    bitcoin_handle?: string
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
                                  verification?: {
                                    verified: boolean
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
                                  core?: {
                                    created_at: string
                                    name: string
                                    screen_name: string
                                  }
                                  dm_permissions?: {
                                    can_dm: boolean
                                  }
                                  media_permissions?: {
                                    can_media_tag: boolean
                                  }
                                  relationship_perspectives?: {
                                    following: boolean
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
                              conversation_control: {
                                policy: string
                                conversation_owner_results: {
                                  result: {
                                    __typename: string
                                    legacy?: {
                                      screen_name: string
                                    }
                                    core?: {
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
                                  following?: boolean
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
                                  want_retweets: boolean
                                  withheld_in_countries: unknown[]
                                  verified_type?: string
                                }
                                tipjar_settings: {
                                  is_enabled?: boolean
                                  bitcoin_handle?: string
                                  patreon_handle?: string
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
                                }
                                core?: {
                                  created_at: string
                                  name: string
                                  screen_name: string
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
                              symbols: unknown[]
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
                                        affiliates_highlighted_label: {}
                                        has_graduated_access: boolean
                                        is_blue_verified: boolean
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
                                        parody_commentary_fan_label: string
                                        profile_image_shape: string
                                        tipjar_settings: {}
                                        verification: {
                                          verified: boolean
                                        }
                                      }
                                    }
                                  }
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
                                        is_blue_verified: boolean
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
                                        parody_commentary_fan_label: string
                                        profile_image_shape: string
                                        tipjar_settings: {}
                                        verification: {
                                          verified: boolean
                                        }
                                      }
                                    }
                                  }
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
                              }[]
                            }
                            possibly_sensitive?: boolean
                            possibly_sensitive_editable?: boolean
                            conversation_control?: {
                              policy: string
                              conversation_owner_results: {
                                result: {
                                  __typename: string
                                  legacy?: {
                                    screen_name: string
                                  }
                                  core?: {
                                    screen_name: string
                                  }
                                }
                              }
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
                                    alt?: string
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
                                    following?: boolean
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
                                    location?: string
                                    media_count: number
                                    name?: string
                                    normal_followers_count: number
                                    pinned_tweet_ids_str: string[]
                                    possibly_sensitive: boolean
                                    profile_banner_url: string
                                    profile_image_url_https?: string
                                    profile_interstitial_type: string
                                    screen_name?: string
                                    statuses_count: number
                                    translator_type: string
                                    url: string
                                    verified?: boolean
                                    want_retweets: boolean
                                    withheld_in_countries: unknown[]
                                    blocking?: boolean
                                    verified_type?: string
                                  }
                                  tipjar_settings: {}
                                  professional?: {
                                    rest_id: string
                                    professional_type: string
                                    category: {
                                      id: number
                                      name: string
                                      icon_name: string
                                    }[]
                                  }
                                  avatar?: {
                                    image_url: string
                                  }
                                  core?: {
                                    created_at: string
                                    name: string
                                    screen_name: string
                                  }
                                  dm_permissions?: {
                                    can_dm: boolean
                                  }
                                  location?: {
                                    location: string
                                  }
                                  media_permissions?: {
                                    can_media_tag: boolean
                                  }
                                  privacy?: {
                                    protected: boolean
                                  }
                                  relationship_perspectives?: {
                                    following: boolean
                                  }
                                  verification?: {
                                    verified: boolean
                                    verified_type?: string
                                  }
                                }
                              }[]
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
                          note_tweet?: {
                            is_expandable: boolean
                            note_tweet_results: {
                              result: {
                                id: string
                                text: string
                                entity_set: {
                                  hashtags: unknown[]
                                  symbols: unknown[]
                                  timestamps?: {
                                    indices: number[]
                                    seconds: number
                                    text: string
                                  }[]
                                  urls: unknown[]
                                  user_mentions: {
                                    id_str: string
                                    name: string
                                    screen_name: string
                                    indices: number[]
                                  }[]
                                }
                                richtext: {
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
                                blocking?: boolean
                                following?: boolean
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
                                url: string
                                verified?: boolean
                                verified_type?: string
                                want_retweets: boolean
                                withheld_in_countries: unknown[]
                              }
                              tipjar_settings: {}
                              professional?: {
                                rest_id: string
                                professional_type: string
                                category: {
                                  id: number
                                  name: string
                                  icon_name: string
                                }[]
                              }
                              verification?: {
                                verified: boolean
                                verified_type?: string
                              }
                              location?: {
                                location: string
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
                              privacy?: {
                                protected: boolean
                              }
                              relationship_perspectives?: {
                                following: boolean
                              }
                              core?: {
                                created_at: string
                                name: string
                                screen_name: string
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
                      grok_share_attachment?: {
                        items: {
                          message: string
                          media_urls: unknown[]
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
                        id_str?: string
                        viewer_relationship?: {
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
                          description?: string
                          created_at: number
                          question?: string
                          search_tags: string[]
                          is_nsfw: boolean
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
                              reason?: string
                              message?: string
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
                                following?: boolean
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
                                verified?: boolean
                                want_retweets: boolean
                                withheld_in_countries: unknown[]
                                url?: string
                                blocking?: boolean
                              }
                              tipjar_settings?: {
                                is_enabled?: boolean
                                bitcoin_handle?: string
                                ethereum_handle?: string
                                gofundme_handle?: string
                                patreon_handle?: string
                                venmo_handle?: string
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
                              message?: string
                              reason?: string
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
                                followed_by?: boolean
                              }
                              core?: {
                                created_at: string
                                name: string
                                screen_name: string
                              }
                            }
                          }
                          creator_results: {
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
                                following?: boolean
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
                                verified?: boolean
                                want_retweets: boolean
                                withheld_in_countries: unknown[]
                                url?: string
                                blocking?: boolean
                              }
                              tipjar_settings?: {
                                is_enabled?: boolean
                                bitcoin_handle?: string
                                ethereum_handle?: string
                                gofundme_handle?: string
                                patreon_handle?: string
                                venmo_handle?: string
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
                              message?: string
                              reason?: string
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
                                followed_by?: boolean
                              }
                              core?: {
                                created_at: string
                                name: string
                                screen_name: string
                              }
                            }
                          }
                          invites_result: {
                            __typename: string
                            reason?: string
                            message?: string
                            remaining_invite_count?: number
                            users_to_invite_slice?: {
                              items: unknown[]
                              slice_info: {}
                            }
                          }
                          join_policy: string
                          invites_policy: string
                          is_pinned: boolean
                          members_facepile_results: {
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
                                following?: boolean
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
                                verified?: boolean
                                want_retweets: boolean
                                withheld_in_countries: unknown[]
                                protected?: boolean
                                url?: string
                                blocking?: boolean
                              }
                              tipjar_settings: {
                                is_enabled?: boolean
                                bitcoin_handle?: string
                                ethereum_handle?: string
                                gofundme_handle?: string
                                patreon_handle?: string
                                cash_app_handle?: string
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
                                followed_by?: boolean
                                blocking?: boolean
                              }
                              core?: {
                                created_at: string
                                name: string
                                screen_name: string
                              }
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
                          primary_community_topic?: {
                            topic_id: string
                            topic_name: string
                          }
                        }
                      }
                      role: string
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
                          parody_commentary_fan_label?: string
                          is_blue_verified: boolean
                          profile_image_shape: string
                          legacy: {
                            following?: boolean
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
                            want_retweets: boolean
                            withheld_in_countries: unknown[]
                            followed_by?: boolean
                          }
                          tipjar_settings?: {
                            is_enabled?: boolean
                            bitcoin_handle?: string
                            ethereum_handle?: string
                            gofundme_handle?: string
                            patreon_handle?: string
                            venmo_handle?: string
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
                            followed_by?: boolean
                          }
                          core?: {
                            created_at: string
                            name: string
                            screen_name: string
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
                      titleDetail?: string
                      shorttitle: string
                      visualStyle: string
                      iconType: string
                      footerIconType?: string
                    }
                    superFollowsReplyUserResult?: {
                      result: {
                        __typename: string
                        legacy: {
                          screen_name: string
                        }
                      }
                    }
                    grok_share_attachment?: {
                      items: {
                        message: string
                        media_urls: string[]
                        deepsearch_headers?: {
                          steps: {
                            web_results?: {
                              favicon_base64?: string
                              url: string
                            }[]
                          }[]
                        }[]
                        analysis_post_id_results?: {
                          result: {
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
                                  is_blue_verified: boolean
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
                                  }
                                  parody_commentary_fan_label: string
                                  profile_image_shape: string
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
                                  verification?: {
                                    verified: boolean
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
                            legacy: {
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
                                  media_results: {
                                    result: {
                                      media_key: string
                                    }
                                  }
                                }[]
                                symbols: unknown[]
                                timestamps: unknown[]
                                urls: unknown[]
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
                            }
                          }
                        }
                      }[]
                    }
                    mediaVisibilityResults?: {
                      blurred_image_interstitial: {
                        opacity: number
                        text: {
                          rtl: boolean
                          text: string
                          entities: unknown[]
                        }
                        title: {
                          rtl: boolean
                          text: string
                          entities: unknown[]
                        }
                      }
                    }
                  }
                }
                tweetDisplayType?: string
                promotedMetadata?: {
                  advertiser_results: {
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
                      parody_commentary_fan_label?: string
                      is_blue_verified: boolean
                      profile_image_shape: string
                      legacy: {
                        following?: boolean
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
                        want_retweets: boolean
                        withheld_in_countries: string[]
                        verified_type?: string
                        followed_by?: boolean
                      }
                      tipjar_settings?: {
                        is_enabled?: boolean
                        bitcoin_handle?: string
                        ethereum_handle?: string
                        patreon_handle?: string
                        cash_app_handle?: string
                        venmo_handle?: string
                      }
                      professional?: {
                        rest_id: string
                        professional_type?: string
                        category?: {
                          id: number
                          name: string
                          icon_name: string
                        }[]
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
                      }
                      core?: {
                        created_at: string
                        name: string
                        screen_name: string
                      }
                    }
                  }
                  adMetadataContainer: {
                    renderLegacyWebsiteCard: boolean
                    remove_promoted_attribution_for_preroll?: boolean
                    unifiedCardOverride?: string
                    isQuickPromote?: boolean
                  }
                  disclosureType: string
                  experimentValues: {
                    key: string
                    value: string
                  }[]
                  impressionId: string
                  impressionString: string
                  clickTrackingInfo?: {
                    urlParams: {
                      key: string
                      value: string
                    }[]
                    urlOverride?: string
                    urlOverrideType?: string
                  }
                  promotedTrendName?: string
                  promotedTrendQueryTerm?: string
                  promotedTrendDescription?: string
                  promotedTrend?: {
                    rest_id: string
                  }
                }
                prerollMetadata?: {
                  preroll: {
                    dynamicPrerollType: string
                    mediaInfo: {
                      advertiserName: string
                      advertiserProfileImageUrl: string
                      callToAction: {
                        callToActionType: string
                        url: string
                      }
                      durationMillis: number
                      publisherResults: {
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
                      renderAdByAdvertiserName: boolean
                      uuid: string
                      videoVariants: {
                        bitrate?: number
                        contentType: string
                        url: string
                      }[]
                    }
                    prerollId: string
                  }
                }
                socialContext?: {
                  type: string
                  contextType: string
                  text: string
                  landingUrl: {
                    url: string
                    urlType: string
                  }
                }
              }
              clientEventInfo?: {
                component: string
                details?: {
                  timelinesDetails: {
                    injectionType: string
                    controllerData?: string
                    sourceData?: string
                  }
                }
                element?: string
              }
              value?: string
              cursorType?: string
              items?: {
                entryId: string
                item: {
                  itemContent: {
                    itemType: string
                    __typename: string
                    user_results?: {
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
                          following?: boolean
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
                          want_retweets: boolean
                          withheld_in_countries: unknown[]
                          followed_by?: boolean
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
                        }
                        core?: {
                          created_at: string
                          name: string
                          screen_name: string
                        }
                      }
                    }
                    userDisplayType?: string
                    socialContext?: {
                      type: string
                      contextType: string
                      text: string
                      landingUrl?: {
                        url: string
                        urlType: string
                      }
                    }
                    tweet_results?: {
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
                                following?: boolean
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
                                want_retweets: boolean
                                withheld_in_countries: unknown[]
                                followed_by?: boolean
                                protected?: boolean
                                verified_type?: string
                                notifications?: boolean
                                needs_phone_verification?: boolean
                              }
                              tipjar_settings: {
                                is_enabled?: boolean
                                ethereum_handle?: string
                                bitcoin_handle?: string
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
                              verification?: {
                                verified: boolean
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
                                followed_by?: boolean
                              }
                              core?: {
                                created_at: string
                                name: string
                                screen_name: string
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
                          count?: string
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
                                inline_media: {
                                  media_id: string
                                  index: number
                                }[]
                              }
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
                                title?: string
                                description?: string
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
                              source_status_id_str?: string
                              source_user_id_str?: string
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
                              media_results: {
                                result: {
                                  media_key?: string
                                }
                              }
                              allow_download_status?: {
                                allow_download: boolean
                              }
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
                                title?: string
                                description?: string
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
                                  affiliates_highlighted_label: {}
                                  has_graduated_access: boolean
                                  parody_commentary_fan_label: string
                                  is_blue_verified: boolean
                                  profile_image_shape: string
                                  legacy: {
                                    protected?: boolean
                                    following?: boolean
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
                                    verified?: boolean
                                    want_retweets: boolean
                                    withheld_in_countries: unknown[]
                                    url?: string
                                    followed_by?: boolean
                                    verified_type?: string
                                    notifications?: boolean
                                  }
                                  tipjar_settings: {
                                    is_enabled?: boolean
                                    bitcoin_handle?: string
                                    patreon_handle?: string
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
                                  verification?: {
                                    verified: boolean
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
                                  }
                                  core?: {
                                    created_at: string
                                    name: string
                                    screen_name: string
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
                                }[]
                              }
                              possibly_sensitive?: boolean
                              possibly_sensitive_editable?: boolean
                              in_reply_to_screen_name?: string
                              in_reply_to_status_id_str?: string
                              in_reply_to_user_id_str?: string
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
                            tweet?: {
                              rest_id: string
                              core: {
                                user_results: {
                                  result: {
                                    __typename: string
                                    id: string
                                    rest_id: string
                                    affiliates_highlighted_label: {}
                                    has_graduated_access?: boolean
                                    parody_commentary_fan_label: string
                                    is_blue_verified?: boolean
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
                                    }
                                    tipjar_settings: {
                                      is_enabled?: boolean
                                      bitcoin_handle?: string
                                      patreon_handle?: string
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
                                    verification?: {
                                      verified: boolean
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
                                  symbols: unknown[]
                                  timestamps: unknown[]
                                  urls: unknown[]
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
                                    ext_media_availability: {
                                      status: string
                                    }
                                    features: {
                                      all: {
                                        tags: {
                                          user_id: string
                                          name: string
                                          screen_name: string
                                          type: string
                                        }[]
                                      }
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
                                    }
                                    features: {
                                      all: {
                                        tags: {
                                          user_id: string
                                          name: string
                                          screen_name: string
                                          type: string
                                        }[]
                                      }
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
                                    media_results: {
                                      result: {
                                        media_key: string
                                      }
                                    }
                                  }[]
                                }
                                possibly_sensitive?: boolean
                                possibly_sensitive_editable?: boolean
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
                                  following?: boolean
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
                                  location?: string
                                  media_count: number
                                  name?: string
                                  normal_followers_count: number
                                  pinned_tweet_ids_str: string[]
                                  possibly_sensitive: boolean
                                  profile_banner_url: string
                                  profile_image_url_https?: string
                                  profile_interstitial_type: string
                                  screen_name?: string
                                  statuses_count: number
                                  translator_type: string
                                  url?: string
                                  verified?: boolean
                                  want_retweets: boolean
                                  withheld_in_countries: unknown[]
                                  blocking?: boolean
                                  verified_type?: string
                                  followed_by?: boolean
                                }
                                tipjar_settings: {}
                                professional?: {
                                  rest_id: string
                                  professional_type: string
                                  category: {
                                    id: number
                                    name: string
                                    icon_name: string
                                  }[]
                                }
                                avatar?: {
                                  image_url: string
                                }
                                core?: {
                                  created_at: string
                                  name: string
                                  screen_name: string
                                }
                                dm_permissions?: {
                                  can_dm: boolean
                                }
                                location?: {
                                  location: string
                                }
                                media_permissions?: {
                                  can_media_tag: boolean
                                }
                                privacy?: {
                                  protected: boolean
                                }
                                relationship_perspectives?: {
                                  following: boolean
                                }
                                verification?: {
                                  verified: boolean
                                }
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
                            in_reply_to_screen_name?: string
                            in_reply_to_status_id_str?: string
                            in_reply_to_user_id_str?: string
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
                        grok_share_attachment?: {
                          items: {
                            message: string
                            media_urls: string[]
                            deepsearch_headers?: {
                              steps: {
                                web_results?: {
                                  favicon_base64: string
                                  url: string
                                }[]
                              }[]
                            }[]
                          }[]
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
                              question: string
                              search_tags: unknown[]
                              is_nsfw: boolean
                              primary_community_topic: {
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
                                  tipjar_settings: {}
                                }
                              }[]
                              moderator_count: number
                              member_count: number
                              role: string
                              rules: {
                                rest_id: string
                                name: string
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
                          }
                        }
                      }
                    }
                    tweetDisplayType?: string
                    community_results?: {
                      result: {
                        __typename: string
                        id_str: string
                        name: string
                        description?: string
                        created_at: number
                        search_tags: unknown[]
                        is_nsfw: boolean
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
                              ethereum_handle?: string
                              patreon_handle?: string
                            }
                            super_follow_eligible?: boolean
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
                              ethereum_handle?: string
                              patreon_handle?: string
                            }
                            super_follow_eligible?: boolean
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
                              protected?: boolean
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
                              patreon_handle?: string
                              ethereum_handle?: string
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
                  }
                  clientEventInfo: {
                    component: string
                    element: string
                    details: {
                      timelinesDetails: {
                        injectionType: string
                        controllerData?: string
                        sourceData?: string
                      }
                    }
                  }
                  feedbackInfo?: {
                    feedbackKeys: string[]
                  }
                }
              }[]
              displayType?: string
              header?: {
                displayType: string
                text: string
                sticky: boolean
                socialContext?: {
                  type: string
                  contextType: string
                  text: string
                }
                landingUrl?: {
                  url: string
                  urlType: string
                }
              }
              footer?: {
                displayType: string
                text: string
                landingUrl: {
                  url: string
                  urlType: string
                }
              }
              feedbackInfo?: {
                feedbackKeys: string[]
              }
              metadata?: {
                conversationMetadata: {
                  allTweetIds: string[]
                  enableDeduplication: boolean
                }
              }
            }
          }[]
          clientEventInfo?: {
            component: string
            element: string
          }
          cover?: {
            type: string
            halfCoverDisplayType?: string
            primaryText: {
              text: string
              entities: unknown[]
            }
            primaryCoverCta: {
              text: string
              ctaBehavior: {
                type: string
                url?: {
                  url: string
                  urlType: string
                }
              }
              callbacks: {
                endpoint: string
              }[]
              clientEventInfo: {
                action: string
              }
              buttonStyle?: string
            }
            secondaryText: {
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
            impressionCallbacks: {
              endpoint: string
            }[]
            dismissible?: boolean
            secondaryCoverCta?: {
              text: string
              ctaBehavior: {
                type: string
                url: {
                  url: string
                  urlType: string
                }
              }
              callbacks: {
                endpoint: string
              }[]
              clientEventInfo: {
                action: string
              }
            }
            fullCoverDisplayType?: string
            image?: {
              url: string
              width: number
              height: number
            }
            dismissInfo?: {
              callbacks: {
                endpoint: string
              }[]
            }
            imageDisplayType?: string
          }
          entry_id_to_replace?: string
          entry?: {
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
                              following?: boolean
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
                              verified_type?: string
                              want_retweets: boolean
                              withheld_in_countries: unknown[]
                              followed_by?: boolean
                            }
                            tipjar_settings: {}
                            avatar?: {
                              image_url: string
                            }
                            dm_permissions?: {
                              can_dm: boolean
                            }
                            location?: {
                              location: string
                            }
                            media_permissions?: {
                              can_media_tag: boolean
                            }
                            privacy?: {
                              protected: boolean
                            }
                            verification?: {
                              verified: boolean
                              verified_type?: string
                            }
                            core?: {
                              created_at: string
                              name: string
                              screen_name: string
                            }
                            relationship_perspectives?: {
                              following: boolean
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
                            allow_download_status?: {
                              allow_download: boolean
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
                            additional_media_info?: {
                              monetizable: boolean
                              title?: string
                              description?: string
                              embeddable?: boolean
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
                            allow_download_status?: {
                              allow_download: boolean
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
                            timestamps: unknown[]
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
                }
                tweetDisplayType: string
              }
              feedbackInfo?: {
                feedbackKeys: unknown[]
              }
            }
          }
          alertType?: string
          triggerDelayMs?: number
          displayDurationMs?: number
          usersResults?: {
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
                protected?: boolean
                following?: boolean
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
                verified?: boolean
                want_retweets: boolean
                withheld_in_countries: unknown[]
                url?: string
                verified_type?: string
                followed_by?: boolean
                notifications?: boolean
              }
              tipjar_settings: {
                is_enabled?: boolean
                venmo_handle?: string
                bitcoin_handle?: string
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
              avatar?: {
                image_url: string
              }
              core?: {
                created_at: string
                name: string
                screen_name: string
              }
              dm_permissions?: {
                can_dm: boolean
              }
              location?: {
                location: string
              }
              media_permissions?: {
                can_media_tag: boolean
              }
              privacy?: {
                protected: boolean
              }
              relationship_perspectives?: {
                following: boolean
                followed_by?: boolean
              }
              verification?: {
                verified: boolean
              }
            }
          }[]
          richText?: {
            text: string
            entities: unknown[]
          }
          iconDisplayInfo?: {
            icon: string
            tint: string
          }
          colorConfig?: {
            background: string
            border: string
            text: string
          }
          displayLocation?: string
        }[]
        metadata: {
          scribeConfig: {
            page: string
          }
        }
        responseObjects?: {
          feedbackActions: {
            key: string
            value: {
              feedbackType: string
              prompt?: string
              confirmation?: string
              encodedFeedbackRequest?: string
              hasUndoAction: boolean
              icon?: string
              childKeys?: string[]
              feedbackUrl?: string
              clientEventInfo?: {
                action: string
                element: string
              }
              richBehavior?: {
                type: string
                topic: {
                  description: string
                  following: boolean
                  icon_url: string
                  id: string
                  topic_id: string
                  name: string
                  not_interested: boolean
                }
              }
            }
          }[]
        }
      }
    }
  }
}
