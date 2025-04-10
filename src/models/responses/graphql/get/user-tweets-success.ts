/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET UserTweets 成功レスポンスモデル */

export interface GraphQLGetUserTweetsSuccessResponse {
  data: {
    user: {
      result: {
        __typename: string
        timeline_v2?: {
          timeline?: {
            instructions: {
              entries?: {
                content: {
                  __typename: string
                  clientEventInfo?: {
                    component: string
                    details: {
                      timelinesDetails: {
                        controllerData: string
                        injectionType: string
                        sourceData?: string
                      }
                    }
                    element?: string
                  }
                  cursorType?: string
                  displayType?: string
                  entryType: string
                  footer?: {
                    displayType: string
                    landingUrl: {
                      url: string
                      urlType: string
                    }
                    text: string
                  }
                  header?: {
                    displayType: string
                    sticky: boolean
                    text: string
                  }
                  itemContent?: {
                    __typename: string
                    itemType: string
                    tweetDisplayType: string
                    tweet_results: {
                      result: {
                        __typename: string
                        core?: {
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
                                url?: string
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
                        edit_control?: {
                          edit_tweet_ids: string[]
                          editable_until_msecs: string
                          edits_remaining: string
                          is_edit_eligible: boolean
                        }
                        is_translatable?: boolean
                        legacy?: {
                          bookmark_count: number
                          bookmarked: boolean
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
                                source_user?: {
                                  user_results: {
                                    result: {
                                      __typename: string
                                      affiliates_highlighted_label?: {
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
                                      parody_commentary_fan_label?: string
                                      profile_image_shape?: string
                                      rest_id: string
                                      tipjar_settings?: {
                                        bitcoin_handle?: string
                                        is_enabled?: boolean
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
                                call_to_actions?: {
                                  visit_site: {
                                    url: string
                                  }
                                }
                                description?: string
                                embeddable?: boolean
                                title?: string
                              }
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
                                result?: {
                                  media_key?: string
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
                              source_status_id_str?: string
                              source_user_id_str?: string
                              type: string
                              url: string
                              video_info?: {
                                aspect_ratio: number[]
                                duration_millis?: number
                                variants: {
                                  bitrate?: number
                                  content_type: string
                                  url: string
                                }[]
                              }
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
                              additional_media_info?: {
                                monetizable: boolean
                                source_user?: {
                                  user_results: {
                                    result: {
                                      __typename: string
                                      affiliates_highlighted_label?: {
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
                                      parody_commentary_fan_label?: string
                                      profile_image_shape?: string
                                      rest_id: string
                                      tipjar_settings?: {
                                        bitcoin_handle?: string
                                        is_enabled?: boolean
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
                                call_to_actions?: {
                                  visit_site: {
                                    url: string
                                  }
                                }
                                description?: string
                                embeddable?: boolean
                                title?: string
                              }
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
                                result?: {
                                  media_key?: string
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
                              source_status_id_str?: string
                              source_user_id_str?: string
                              type: string
                              url: string
                              video_info?: {
                                aspect_ratio: number[]
                                duration_millis?: number
                                variants: {
                                  bitrate?: number
                                  content_type: string
                                  url: string
                                }[]
                              }
                              sensitive_media_warning?: {
                                adult_content?: boolean
                                other?: boolean
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
                          retweeted_status_result?: {
                            result: {
                              __typename: string
                              core?: {
                                user_results: {
                                  result: {
                                    __typename: string
                                    affiliates_highlighted_label?: {
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
                                    parody_commentary_fan_label?: string
                                    professional?: {
                                      category: {
                                        icon_name: string
                                        id: number
                                        name: string
                                      }[]
                                      professional_type: string
                                      rest_id: string
                                    }
                                    profile_image_shape?: string
                                    rest_id: string
                                    tipjar_settings?: {
                                      is_enabled?: boolean
                                      bitcoin_handle?: string
                                      patreon_handle?: string
                                    }
                                    super_follow_eligible?: boolean
                                  }
                                }
                              }
                              edit_control?: {
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
                              is_translatable?: boolean
                              legacy?: {
                                bookmark_count: number
                                bookmarked: boolean
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
                                      call_to_actions?: {
                                        visit_site: {
                                          url: string
                                        }
                                      }
                                      description?: string
                                      embeddable?: boolean
                                      title?: string
                                      source_user?: {
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
                                            profile_image_shape: string
                                            rest_id: string
                                            tipjar_settings: {}
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
                                      all?: {
                                        tags: {
                                          name: string
                                          screen_name: string
                                          type: string
                                          user_id: string
                                        }[]
                                      }
                                    }
                                    id_str: string
                                    indices: number[]
                                    media_key: string
                                    media_results: {
                                      result?: {
                                        media_key?: string
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
                                      duration_millis?: number
                                      variants: {
                                        bitrate?: number
                                        content_type: string
                                        url: string
                                      }[]
                                    }
                                    sensitive_media_warning?: {
                                      adult_content?: boolean
                                      other?: boolean
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
                                  user_mentions: {
                                    id_str: string
                                    indices: number[]
                                    name: string
                                    screen_name: string
                                  }[]
                                }
                                extended_entities?: {
                                  media: {
                                    additional_media_info?: {
                                      monetizable: boolean
                                      call_to_actions?: {
                                        visit_site: {
                                          url: string
                                        }
                                      }
                                      description?: string
                                      embeddable?: boolean
                                      title?: string
                                      source_user?: {
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
                                            profile_image_shape: string
                                            rest_id: string
                                            tipjar_settings: {}
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
                                      all?: {
                                        tags: {
                                          name: string
                                          screen_name: string
                                          type: string
                                          user_id: string
                                        }[]
                                      }
                                    }
                                    id_str: string
                                    indices: number[]
                                    media_key: string
                                    media_results: {
                                      result?: {
                                        media_key?: string
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
                                      duration_millis?: number
                                      variants: {
                                        bitrate?: number
                                        content_type: string
                                        url: string
                                      }[]
                                    }
                                    sensitive_media_warning?: {
                                      adult_content?: boolean
                                      other?: boolean
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
                                user_id_str: string
                                in_reply_to_screen_name?: string
                                in_reply_to_status_id_str?: string
                                in_reply_to_user_id_str?: string
                                quoted_status_id_str?: string
                                quoted_status_permalink?: {
                                  display: string
                                  expanded: string
                                  url: string
                                }
                                scopes?: {
                                  followers: boolean
                                }
                              }
                              rest_id?: string
                              source?: string
                              unmention_data?: {}
                              views?: {
                                count?: string
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
                                        blocking?: boolean
                                      }
                                      parody_commentary_fan_label: string
                                      profile_image_shape: string
                                      rest_id: string
                                      tipjar_settings: {
                                        bitcoin_handle?: string
                                        is_enabled?: boolean
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
                                  }[]
                                }
                                rest_id: string
                              }
                              quoted_status_result?: {
                                result?: {
                                  __typename: string
                                  limitedActionResults?: {
                                    limited_actions: {
                                      action: string
                                      prompt: {
                                        __typename: string
                                        cta_type: string
                                        headline: {
                                          entities: unknown[]
                                          text: string
                                        }
                                        subtext: {
                                          entities: unknown[]
                                          text: string
                                        }
                                      }
                                    }[]
                                  }
                                  tweet?: {
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
                                          parody_commentary_fan_label: string
                                          profile_image_shape: string
                                          rest_id: string
                                          tipjar_settings: {
                                            is_enabled?: boolean
                                            patreon_handle?: string
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
                                    is_translatable: boolean
                                    legacy: {
                                      bookmark_count: number
                                      bookmarked: boolean
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
                                        user_mentions: unknown[]
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
                                            all?: {
                                              tags: {
                                                name: string
                                                screen_name: string
                                                type: string
                                                user_id: string
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
                                          ext_alt_text?: string
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
                                            all?: {
                                              tags: {
                                                name: string
                                                screen_name: string
                                                type: string
                                                user_id: string
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
                                          ext_alt_text?: string
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
                                      possibly_sensitive?: boolean
                                      possibly_sensitive_editable?: boolean
                                      in_reply_to_screen_name?: string
                                      in_reply_to_status_id_str?: string
                                      in_reply_to_user_id_str?: string
                                    }
                                    rest_id: string
                                    source: string
                                    unmention_data: {}
                                    views: {
                                      count: string
                                      state: string
                                    }
                                    grok_analysis_button?: boolean
                                    quotedRefResult?: {
                                      result?: {
                                        __typename: string
                                        rest_id: string
                                      }
                                    }
                                    note_tweet?: {
                                      is_expandable: boolean
                                      note_tweet_results: {
                                        result: {
                                          entity_set: {
                                            hashtags: unknown[]
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
                                          id: string
                                          text: string
                                        }
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
                                            has_graduated_access: boolean
                                            id: string
                                            is_blue_verified: boolean
                                            legacy: {
                                              blocking: boolean
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
                                            parody_commentary_fan_label: string
                                            profile_image_shape: string
                                            rest_id: string
                                            tipjar_settings: {}
                                          }
                                        }[]
                                      }
                                      rest_id: string
                                    }
                                    previous_counts?: {
                                      bookmark_count: number
                                      favorite_count: number
                                      quote_count: number
                                      reply_count: number
                                      retweet_count: number
                                    }
                                  }
                                  core?: {
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
                                        parody_commentary_fan_label?: string
                                        profile_image_shape: string
                                        rest_id: string
                                        tipjar_settings?: {
                                          is_enabled?: boolean
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
                                  edit_control?: {
                                    edit_tweet_ids: string[]
                                    editable_until_msecs: string
                                    edits_remaining: string
                                    is_edit_eligible: boolean
                                  }
                                  is_translatable?: boolean
                                  legacy?: {
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
                                    }
                                    favorite_count: number
                                    favorited: boolean
                                    full_text: string
                                    id_str: string
                                    is_quote_status: boolean
                                    lang: string
                                    quote_count: number
                                    reply_count: number
                                    retweet_count: number
                                    retweeted: boolean
                                    user_id_str: string
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
                                    possibly_sensitive?: boolean
                                    possibly_sensitive_editable?: boolean
                                    quoted_status_id_str?: string
                                    quoted_status_permalink?: {
                                      display: string
                                      expanded: string
                                      url: string
                                    }
                                    in_reply_to_screen_name?: string
                                    in_reply_to_status_id_str?: string
                                    in_reply_to_user_id_str?: string
                                  }
                                  rest_id?: string
                                  source?: string
                                  unmention_data?: {}
                                  views?: {
                                    count: string
                                    state: string
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
                                  card?: {
                                    legacy: {
                                      binding_values: {
                                        key: string
                                        value: {
                                          boolean_value?: boolean
                                          scribe_key?: string
                                          string_value?: string
                                          type: string
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
                                          affiliates_highlighted_label?: {}
                                          has_graduated_access?: boolean
                                          id?: string
                                          is_blue_verified?: boolean
                                          legacy?: {
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
                                          parody_commentary_fan_label?: string
                                          profile_image_shape?: string
                                          rest_id?: string
                                          tipjar_settings?: {}
                                          message?: string
                                          reason?: string
                                        }
                                      }[]
                                    }
                                    rest_id: string
                                  }
                                  tombstone?: {
                                    __typename: string
                                    text: {
                                      entities: {
                                        fromIndex: number
                                        ref: {
                                          type: string
                                          url: string
                                          urlType: string
                                        }
                                        toIndex: number
                                      }[]
                                      rtl: boolean
                                      text: string
                                    }
                                  }
                                  tweetInterstitial?: {
                                    __typename: string
                                    displayType: string
                                    revealText: {
                                      entities: unknown[]
                                      rtl: boolean
                                      text: string
                                    }
                                    text: {
                                      entities: unknown[]
                                      rtl: boolean
                                      text: string
                                    }
                                  }
                                  note_tweet?: {
                                    is_expandable: boolean
                                    note_tweet_results: {
                                      result: {
                                        entity_set: {
                                          hashtags: {
                                            indices: number[]
                                            text: string
                                          }[]
                                          symbols: unknown[]
                                          urls: {
                                            display_url: string
                                            expanded_url: string
                                            indices: number[]
                                            url: string
                                          }[]
                                          user_mentions: unknown[]
                                        }
                                        id: string
                                        richtext?: {
                                          richtext_tags: unknown[]
                                        }
                                        text: string
                                        media?: {
                                          inline_media: {
                                            index: number
                                            media_id: string
                                          }[]
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              grok_analysis_button?: boolean
                              note_tweet?: {
                                is_expandable: boolean
                                note_tweet_results: {
                                  result: {
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
                                        indices: number[]
                                        url: string
                                      }[]
                                      user_mentions: unknown[]
                                    }
                                    id: string
                                    text: string
                                    richtext?: {
                                      richtext_tags: {
                                        from_index: number
                                        richtext_types: string[]
                                        to_index: number
                                      }[]
                                    }
                                    media?: {
                                      inline_media: {
                                        index: number
                                        media_id: string
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
                              limitedActionResults?: {
                                limited_actions: {
                                  action: string
                                  prompt: {
                                    __typename: string
                                    cta_type: string
                                    headline: {
                                      entities: unknown[]
                                      text: string
                                    }
                                    subtext: {
                                      entities: unknown[]
                                      text: string
                                    }
                                  }
                                }[]
                              }
                              tweet?: {
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
                                        url?: string
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
                                  conversation_control: {
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
                                      features: {
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
                                      allow_download_status?: {
                                        allow_download: boolean
                                      }
                                      display_url: string
                                      expanded_url: string
                                      ext_media_availability: {
                                        status: string
                                      }
                                      features: {
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
                                }
                                rest_id: string
                                source: string
                                unmention_data: {}
                                views: {
                                  count: string
                                  state: string
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
                            }
                          }
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
                        }
                        limitedActionResults?: {
                          limited_actions: {
                            action: string
                            prompt: {
                              __typename: string
                              cta_type: string
                              headline: {
                                entities: unknown[]
                                text: string
                              }
                              subtext: {
                                entities: unknown[]
                                text: string
                              }
                            }
                          }[]
                        }
                        quick_promote_eligibility?: {
                          eligibility: string
                        }
                        rest_id?: string
                        source?: string
                        tweet?: {
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
                          is_translatable?: boolean
                          legacy?: {
                            bookmark_count: number
                            bookmarked: boolean
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
                                features: {
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
                                source_status_id_str: string
                                source_user_id_str: string
                                type: string
                                url: string
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
                                features: {
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
                                source_status_id_str: string
                                source_user_id_str: string
                                type: string
                                url: string
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
                            retweeted_status_result: {
                              result: {
                                __typename: string
                                limitedActionResults?: {
                                  limited_actions: {
                                    action: string
                                    prompt: {
                                      __typename: string
                                      cta_type: string
                                      headline: {
                                        entities: unknown[]
                                        text: string
                                      }
                                      subtext: {
                                        entities: unknown[]
                                        text: string
                                      }
                                    }
                                  }[]
                                }
                                tweet?: {
                                  core: {
                                    user_results: {
                                      result: {
                                        __typename: string
                                        affiliates_highlighted_label?: {}
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
                                        }
                                        parody_commentary_fan_label?: string
                                        profile_image_shape?: string
                                        rest_id: string
                                        tipjar_settings?: {
                                          is_enabled?: boolean
                                          patreon_handle?: string
                                          bitcoin_handle?: string
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
                                    conversation_control: {
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
                                        features: {
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
                                            media_key?: string
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
                                        allow_download_status?: {
                                          allow_download: boolean
                                        }
                                        display_url: string
                                        expanded_url: string
                                        ext_media_availability: {
                                          status: string
                                        }
                                        features: {
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
                                            media_key?: string
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
                                  }
                                  rest_id: string
                                  source: string
                                  unmention_data: {}
                                  views: {
                                    count: string
                                    state: string
                                  }
                                  quoted_status_result?: {
                                    result: {
                                      __typename: string
                                      core?: {
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
                                              verified: boolean
                                              want_retweets: boolean
                                              withheld_in_countries: unknown[]
                                              url?: string
                                            }
                                            parody_commentary_fan_label: string
                                            profile_image_shape: string
                                            rest_id: string
                                            tipjar_settings: {
                                              is_enabled?: boolean
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
                                      edit_control?: {
                                        edit_tweet_ids: string[]
                                        editable_until_msecs: string
                                        edits_remaining: string
                                        is_edit_eligible: boolean
                                      }
                                      is_translatable?: boolean
                                      legacy?: {
                                        bookmark_count: number
                                        bookmarked: boolean
                                        conversation_id_str: string
                                        created_at: string
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
                                        id_str: string
                                        is_quote_status: boolean
                                        lang: string
                                        quote_count: number
                                        reply_count: number
                                        retweet_count: number
                                        retweeted: boolean
                                        user_id_str: string
                                      }
                                      rest_id?: string
                                      source?: string
                                      unmention_data?: {}
                                      views?: {
                                        count: string
                                        state: string
                                      }
                                      grok_analysis_button?: boolean
                                      tweet?: {
                                        card: {
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
                                                has_graduated_access: boolean
                                                id: string
                                                is_blue_verified: boolean
                                                legacy: {
                                                  blocking: boolean
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
                                                tipjar_settings: {}
                                              }
                                            }[]
                                          }
                                          rest_id: string
                                        }
                                        core: {
                                          user_results: {
                                            result: {
                                              __typename: string
                                              affiliates_highlighted_label: {}
                                              has_graduated_access: boolean
                                              id: string
                                              is_blue_verified: boolean
                                              legacy: {
                                                blocking: boolean
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
                                        is_translatable: boolean
                                        legacy: {
                                          bookmark_count: number
                                          bookmarked: boolean
                                          conversation_id_str: string
                                          created_at: string
                                          display_text_range: number[]
                                          entities: {
                                            hashtags: unknown[]
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
                                        }
                                        rest_id: string
                                        source: string
                                        unmention_data: {}
                                        views: {
                                          count: string
                                          state: string
                                        }
                                      }
                                      tweetInterstitial?: {
                                        __typename: string
                                        displayType: string
                                        revealText: {
                                          entities: unknown[]
                                          rtl: boolean
                                          text: string
                                        }
                                        text: {
                                          entities: unknown[]
                                          rtl: boolean
                                          text: string
                                        }
                                      }
                                    }
                                  }
                                  grok_analysis_button?: boolean
                                  note_tweet?: {
                                    is_expandable: boolean
                                    note_tweet_results: {
                                      result: {
                                        entity_set: {
                                          hashtags: {
                                            indices: number[]
                                            text: string
                                          }[]
                                          symbols: unknown[]
                                          urls: unknown[]
                                          user_mentions: unknown[]
                                        }
                                        id: string
                                        media: {
                                          inline_media: unknown[]
                                        }
                                        richtext: {
                                          richtext_tags: unknown[]
                                        }
                                        text: string
                                      }
                                    }
                                  }
                                }
                                core?: {
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
                                        url?: string
                                        verified: boolean
                                        want_retweets: boolean
                                        withheld_in_countries: unknown[]
                                      }
                                      parody_commentary_fan_label: string
                                      profile_image_shape: string
                                      rest_id: string
                                      tipjar_settings: {
                                        is_enabled?: boolean
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
                                edit_control?: {
                                  edit_tweet_ids: string[]
                                  editable_until_msecs: string
                                  edits_remaining: string
                                  is_edit_eligible: boolean
                                }
                                grok_analysis_button?: boolean
                                is_translatable?: boolean
                                legacy?: {
                                  bookmark_count: number
                                  bookmarked: boolean
                                  conversation_control: {
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
                                      features: {
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
                                      allow_download_status?: {
                                        allow_download: boolean
                                      }
                                      display_url: string
                                      expanded_url: string
                                      ext_media_availability: {
                                        status: string
                                      }
                                      features: {
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
                                }
                                rest_id?: string
                                source?: string
                                unmention_data?: {}
                                views?: {
                                  count: string
                                  state: string
                                }
                                quoted_status_result?: {
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
                                            is_enabled: boolean
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
                                        hashtags: unknown[]
                                        symbols: unknown[]
                                        timestamps: unknown[]
                                        urls: unknown[]
                                        user_mentions: unknown[]
                                      }
                                      favorite_count: number
                                      favorited: boolean
                                      full_text: string
                                      id_str: string
                                      is_quote_status: boolean
                                      lang: string
                                      quote_count: number
                                      reply_count: number
                                      retweet_count: number
                                      retweeted: boolean
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
                            user_id_str: string
                            quoted_status_id_str?: string
                            quoted_status_permalink?: {
                              display: string
                              expanded: string
                              url: string
                            }
                          }
                          quick_promote_eligibility?: {
                            eligibility: string
                          }
                          rest_id: string
                          source: string
                          unmention_data: {}
                          views: {
                            state: string
                          }
                          grok_analysis_button?: boolean
                        }
                        unmention_data?: {}
                        views?: {
                          count?: string
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
                                  alt?: string
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
                                  blocking?: boolean
                                }
                                parody_commentary_fan_label: string
                                profile_image_shape: string
                                rest_id: string
                                tipjar_settings: {
                                  bitcoin_handle?: string
                                  is_enabled?: boolean
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
                                    verified_type?: string
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
                            is_translatable: boolean
                            legacy: {
                              bookmark_count: number
                              bookmarked: boolean
                              conversation_id_str: string
                              created_at: string
                              display_text_range: number[]
                              entities: {
                                hashtags: unknown[]
                                media?: {
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
                                    variants: {
                                      bitrate: number
                                      content_type: string
                                      url: string
                                    }[]
                                  }
                                  features?: {
                                    large: {
                                      faces: unknown[]
                                    }
                                    medium: {
                                      faces: unknown[]
                                    }
                                    orig: {
                                      faces: unknown[]
                                    }
                                    small: {
                                      faces: unknown[]
                                    }
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
                                    variants: {
                                      bitrate: number
                                      content_type: string
                                      url: string
                                    }[]
                                  }
                                  features?: {
                                    large: {
                                      faces: unknown[]
                                    }
                                    medium: {
                                      faces: unknown[]
                                    }
                                    orig: {
                                      faces: unknown[]
                                    }
                                    small: {
                                      faces: unknown[]
                                    }
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
                              user_id_str: string
                              in_reply_to_screen_name?: string
                              in_reply_to_status_id_str?: string
                              in_reply_to_user_id_str?: string
                            }
                            rest_id: string
                            source: string
                            unmention_data: {}
                            views: {
                              count: string
                              state: string
                            }
                            grok_analysis_button?: boolean
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
                                user_refs_results: unknown[]
                              }
                              rest_id: string
                            }
                          }
                        }
                        grok_analysis_button?: boolean
                        author_community_relationship?: {
                          community_results: {
                            result: {
                              __typename: string
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
                                  message: string
                                  reason: string
                                }
                                pin_action_result: {
                                  __typename: string
                                }
                              }
                              admin_results: {
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
                                    want_retweets: boolean
                                    withheld_in_countries: unknown[]
                                  }
                                  parody_commentary_fan_label: string
                                  professional: {
                                    category: unknown[]
                                    professional_type: string
                                    rest_id: string
                                  }
                                  profile_image_shape: string
                                  rest_id: string
                                  tipjar_settings: {
                                    ethereum_handle: string
                                    is_enabled: boolean
                                    patreon_handle: string
                                  }
                                }
                              }
                              created_at: number
                              creator_results: {
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
                                    want_retweets: boolean
                                    withheld_in_countries: unknown[]
                                  }
                                  parody_commentary_fan_label: string
                                  professional: {
                                    category: unknown[]
                                    professional_type: string
                                    rest_id: string
                                  }
                                  profile_image_shape: string
                                  rest_id: string
                                  tipjar_settings: {
                                    ethereum_handle: string
                                    is_enabled: boolean
                                    patreon_handle: string
                                  }
                                }
                              }
                              custom_banner_media: {
                                media_info: {
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
                              }
                              default_banner_media: {
                                media_info: {
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
                                }
                              }
                              description: string
                              id_str: string
                              invites_policy: string
                              invites_result: {
                                __typename: string
                                message: string
                                reason: string
                              }
                              is_nsfw: boolean
                              is_pinned: boolean
                              join_policy: string
                              join_requests_result: {
                                __typename: string
                              }
                              member_count: number
                              members_facepile_results: {
                                result?: {
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
                                  }
                                  parody_commentary_fan_label: string
                                  professional?: {
                                    category: unknown[]
                                    professional_type: string
                                    rest_id: string
                                  }
                                  profile_image_shape: string
                                  rest_id: string
                                  tipjar_settings: {
                                    ethereum_handle?: string
                                    is_enabled?: boolean
                                    patreon_handle?: string
                                  }
                                }
                              }[]
                              moderator_count: number
                              name: string
                              role: string
                              rules: {
                                name: string
                                rest_id: string
                              }[]
                              search_tags: unknown[]
                              viewer_relationship: {
                                moderation_state: {
                                  __typename: string
                                }
                              }
                            }
                          }
                          role: string
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
                      }
                    }
                    socialContext?: {
                      contextType: string
                      landingUrl: {
                        url: string
                        urlType: string
                      }
                      text: string
                      type: string
                    }
                  }
                  items?: {
                    entryId: string
                    item: {
                      clientEventInfo: {
                        component: string
                        details: {
                          timelinesDetails: {
                            controllerData: string
                            injectionType: string
                            sourceData?: string
                          }
                        }
                        element: string
                      }
                      itemContent: {
                        __typename: string
                        itemType: string
                        tweetDisplayType?: string
                        tweet_results?: {
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
                                    url?: string
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
                            edit_control: {
                              edit_tweet_ids: string[]
                              editable_until_msecs: string
                              edits_remaining: string
                              is_edit_eligible: boolean
                            }
                            is_translatable?: boolean
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
                                  display_url: string
                                  expanded_url: string
                                  ext_media_availability: {
                                    status: string
                                  }
                                  features: {
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
                                      media_key?: string
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
                                  allow_download_status?: {
                                    allow_download: boolean
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
                                  display_url: string
                                  expanded_url: string
                                  ext_media_availability: {
                                    status: string
                                  }
                                  features: {
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
                                      media_key?: string
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
                                  allow_download_status?: {
                                    allow_download: boolean
                                  }
                                }[]
                              }
                              favorite_count: number
                              favorited: boolean
                              full_text: string
                              id_str: string
                              in_reply_to_screen_name?: string
                              in_reply_to_status_id_str?: string
                              in_reply_to_user_id_str?: string
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
                            }
                            quick_promote_eligibility: {
                              eligibility: string
                            }
                            rest_id: string
                            source: string
                            unmention_data: {}
                            views?: {
                              count?: string
                              state: string
                            }
                            grok_analysis_button?: boolean
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
                                      want_retweets: boolean
                                      withheld_in_countries: unknown[]
                                    }
                                    parody_commentary_fan_label: string
                                    profile_image_shape: string
                                    rest_id: string
                                    tipjar_settings: {}
                                  }
                                }[]
                              }
                              rest_id: string
                            }
                            quoted_status_result?: {
                              result: {
                                __typename: string
                                card: {
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
                                    user_refs_results: unknown[]
                                  }
                                  rest_id: string
                                }
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
                                grok_analysis_button?: boolean
                                is_translatable: boolean
                                legacy: {
                                  bookmark_count: number
                                  bookmarked: boolean
                                  conversation_id_str: string
                                  created_at: string
                                  display_text_range: number[]
                                  entities: {
                                    hashtags: unknown[]
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
                        userDisplayType?: string
                        user_results?: {
                          result: {
                            __typename: string
                            affiliates_highlighted_label?: {}
                            has_graduated_access?: boolean
                            id?: string
                            is_blue_verified?: boolean
                            legacy?: {
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
                            parody_commentary_fan_label?: string
                            profile_image_shape?: string
                            rest_id?: string
                            tipjar_settings?: {
                              is_enabled?: boolean
                              bitcoin_handle?: string
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
                            message?: string
                            reason?: string
                          }
                        }
                        socialContext?: {
                          contextType: string
                          text: string
                          type: string
                        }
                      }
                    }
                    dispensable?: boolean
                  }[]
                  metadata?: {
                    conversationMetadata: {
                      allTweetIds: string[]
                      enableDeduplication: boolean
                    }
                  }
                  value?: string
                }
                entryId: string
                sortIndex: string
              }[]
              entry?: {
                content: {
                  __typename: string
                  clientEventInfo: {
                    component: string
                    element: string
                  }
                  entryType: string
                  itemContent: {
                    __typename: string
                    itemType: string
                    socialContext: {
                      contextType: string
                      text: string
                      type: string
                    }
                    tweetDisplayType: string
                    tweet_results: {
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
                        is_translatable?: boolean
                        legacy?: {
                          bookmark_count: number
                          bookmarked: boolean
                          conversation_id_str: string
                          created_at: string
                          display_text_range: number[]
                          entities: {
                            hashtags: unknown[]
                            media?: {
                              display_url: string
                              expanded_url: string
                              ext_media_availability: {
                                status: string
                              }
                              features: {
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
                                result?: {
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
                              display_url: string
                              expanded_url: string
                              ext_media_availability: {
                                status: string
                              }
                              features: {
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
                                result?: {
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
                        }
                        quick_promote_eligibility?: {
                          eligibility: string
                        }
                        rest_id: string
                        source: string
                        unmention_data: {}
                        views: {
                          count?: string
                          state: string
                        }
                        grok_analysis_button?: boolean
                        card?: {
                          legacy?: {
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
                            user_refs_results: unknown[]
                          }
                          rest_id: string
                        }
                      }
                    }
                  }
                }
                entryId: string
                sortIndex: string
              }
              type: string
            }[]
            metadata: {
              scribeConfig: {
                page: string
              }
            }
          }
        }
        timeline?: {
          timeline: {
            instructions: {
              entries?: {
                content: {
                  __typename: string
                  clientEventInfo?: {
                    component: string
                    details: {
                      timelinesDetails: {
                        controllerData: string
                        injectionType: string
                        sourceData?: string
                      }
                    }
                    element?: string
                  }
                  cursorType?: string
                  displayType?: string
                  entryType: string
                  footer?: {
                    displayType: string
                    landingUrl: {
                      url: string
                      urlType: string
                    }
                    text: string
                  }
                  header?: {
                    displayType: string
                    sticky: boolean
                    text: string
                  }
                  itemContent?: {
                    __typename: string
                    itemType: string
                    tweetDisplayType: string
                    tweet_results: {
                      result: {
                        __typename: string
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
                                has_graduated_access: boolean
                                id: string
                                is_blue_verified: boolean
                                legacy: {
                                  blocking?: boolean
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
                                tipjar_settings: {}
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
                            }[]
                          }
                          rest_id: string
                        }
                        core?: {
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
                                url?: string
                                verified: boolean
                                want_retweets: boolean
                                withheld_in_countries: unknown[]
                                followed_by?: boolean
                                protected?: boolean
                                needs_phone_verification?: boolean
                              }
                              parody_commentary_fan_label: string
                              profile_image_shape: string
                              rest_id: string
                              tipjar_settings: {}
                            }
                          }
                        }
                        edit_control?: {
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
                        is_translatable?: boolean
                        legacy?: {
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
                              source_status_id_str?: string
                              source_user_id_str?: string
                              type: string
                              url: string
                              additional_media_info?: {
                                monetizable: boolean
                                source_user?: {
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
                                      }
                                      parody_commentary_fan_label: string
                                      profile_image_shape: string
                                      rest_id: string
                                      tipjar_settings: {}
                                    }
                                  }
                                }
                              }
                              allow_download_status?: {
                                allow_download: boolean
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
                              sensitive_media_warning?: {
                                other?: boolean
                                adult_content?: boolean
                              }
                            }[]
                            symbols: unknown[]
                            timestamps: unknown[]
                            urls: {
                              display_url: string
                              expanded_url?: string
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
                              source_status_id_str?: string
                              source_user_id_str?: string
                              type: string
                              url: string
                              additional_media_info?: {
                                monetizable: boolean
                                source_user?: {
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
                                      }
                                      parody_commentary_fan_label: string
                                      profile_image_shape: string
                                      rest_id: string
                                      tipjar_settings: {}
                                    }
                                  }
                                }
                              }
                              allow_download_status?: {
                                allow_download: boolean
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
                              sensitive_media_warning?: {
                                other?: boolean
                                adult_content?: boolean
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
                          retweeted_status_result?: {
                            result: {
                              __typename: string
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
                                      has_graduated_access: boolean
                                      id: string
                                      is_blue_verified: boolean
                                      legacy: {
                                        blocking?: boolean
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
                                      tipjar_settings: {}
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
                                    }
                                    parody_commentary_fan_label: string
                                    profile_image_shape: string
                                    rest_id: string
                                    tipjar_settings: {
                                      is_enabled?: boolean
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
                                    allow_download_status?: {
                                      allow_download: boolean
                                    }
                                    sensitive_media_warning?: {
                                      other?: boolean
                                      adult_content?: boolean
                                    }
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
                                    allow_download_status?: {
                                      allow_download: boolean
                                    }
                                    sensitive_media_warning?: {
                                      other?: boolean
                                      adult_content?: boolean
                                    }
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
                              quoted_status_result?: {
                                result: {
                                  __typename: string
                                  core?: {
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
                                        }
                                        parody_commentary_fan_label: string
                                        profile_image_shape: string
                                        rest_id: string
                                        tipjar_settings: {}
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
                                  edit_control?: {
                                    edit_tweet_ids: string[]
                                    editable_until_msecs: string
                                    edits_remaining: string
                                    is_edit_eligible: boolean
                                  }
                                  is_translatable?: boolean
                                  legacy?: {
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
                                        allow_download_status: {
                                          allow_download: boolean
                                        }
                                        display_url: string
                                        expanded_url: string
                                        ext_media_availability: {
                                          status: string
                                        }
                                        features: {
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
                                        allow_download_status: {
                                          allow_download: boolean
                                        }
                                        display_url: string
                                        expanded_url: string
                                        ext_media_availability: {
                                          status: string
                                        }
                                        features: {
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
                                    quoted_status_id_str?: string
                                    quoted_status_permalink?: {
                                      display: string
                                      expanded: string
                                      url: string
                                    }
                                    reply_count: number
                                    retweet_count: number
                                    retweeted: boolean
                                    user_id_str: string
                                    in_reply_to_screen_name?: string
                                    in_reply_to_status_id_str?: string
                                    in_reply_to_user_id_str?: string
                                  }
                                  limitedActionResults?: {
                                    limited_actions: {
                                      action: string
                                      prompt: {
                                        __typename: string
                                        cta_type: string
                                        headline: {
                                          entities: unknown[]
                                          text: string
                                        }
                                        subtext: {
                                          entities: unknown[]
                                          text: string
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
                                  rest_id?: string
                                  source?: string
                                  tweet?: {
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
                                            blocking?: boolean
                                          }
                                          parody_commentary_fan_label: string
                                          profile_image_shape: string
                                          rest_id: string
                                          tipjar_settings: {
                                            bitcoin_handle?: string
                                            is_enabled?: boolean
                                            patreon_handle?: string
                                          }
                                          professional?: {
                                            category: unknown[]
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
                                      conversation_id_str: string
                                      created_at: string
                                      display_text_range: number[]
                                      entities: {
                                        hashtags: unknown[]
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
                                      favorite_count: number
                                      favorited: boolean
                                      full_text: string
                                      id_str: string
                                      is_quote_status: boolean
                                      lang: string
                                      quote_count: number
                                      reply_count: number
                                      retweet_count: number
                                      retweeted: boolean
                                      user_id_str: string
                                      possibly_sensitive?: boolean
                                      possibly_sensitive_editable?: boolean
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
                                            has_graduated_access: boolean
                                            id: string
                                            is_blue_verified: boolean
                                            legacy: {
                                              blocking: boolean
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
                                              want_retweets: boolean
                                              withheld_in_countries: unknown[]
                                            }
                                            parody_commentary_fan_label: string
                                            profile_image_shape: string
                                            rest_id: string
                                            tipjar_settings: {
                                              bitcoin_handle: string
                                              is_enabled: boolean
                                            }
                                          }
                                        }[]
                                      }
                                      rest_id: string
                                    }
                                  }
                                  unmention_data?: {}
                                  views?: {
                                    count: string
                                    state: string
                                  }
                                  tweetInterstitial?: {
                                    __typename: string
                                    displayType: string
                                    revealText: {
                                      entities: unknown[]
                                      rtl: boolean
                                      text: string
                                    }
                                    text: {
                                      entities: unknown[]
                                      rtl: boolean
                                      text: string
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
                                      user_refs_results: unknown[]
                                    }
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
                              note_tweet?: {
                                is_expandable: boolean
                                note_tweet_results: {
                                  result: {
                                    entity_set: {
                                      hashtags: unknown[]
                                      symbols: unknown[]
                                      timestamps?: unknown[]
                                      urls: unknown[]
                                      user_mentions: unknown[]
                                    }
                                    id: string
                                    media?: {
                                      inline_media: unknown[]
                                    }
                                    richtext?: {
                                      richtext_tags: {
                                        from_index: number
                                        richtext_types: string[]
                                        to_index: number
                                      }[]
                                    }
                                    text: string
                                  }
                                }
                              }
                            }
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
                        quick_promote_eligibility?: {
                          eligibility: string
                        }
                        rest_id?: string
                        source?: string
                        unmention_data?: {}
                        views?: {
                          count?: string
                          state: string
                        }
                        limitedActionResults?: {
                          limited_actions: {
                            action: string
                            prompt: {
                              __typename: string
                              cta_type?: string
                              headline: {
                                entities: unknown[]
                                text: string
                              }
                              subtext: {
                                entities: unknown[]
                                text: string
                              }
                            }
                          }[]
                        }
                        tweet?: {
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
                                  url?: string
                                  verified: boolean
                                  want_retweets: boolean
                                  withheld_in_countries: unknown[]
                                  needs_phone_verification?: boolean
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
                          is_translatable: boolean
                          legacy: {
                            bookmark_count: number
                            bookmarked: boolean
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
                            conversation_id_str: string
                            created_at: string
                            display_text_range: number[]
                            entities: {
                              hashtags: unknown[]
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
                                    faces: unknown[]
                                  }
                                  medium: {
                                    faces: unknown[]
                                  }
                                  orig: {
                                    faces: unknown[]
                                  }
                                  small: {
                                    faces: unknown[]
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
                                source_status_id_str: string
                                source_user_id_str: string
                                type: string
                                url: string
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
                              urls: unknown[]
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
                                    faces: unknown[]
                                  }
                                  medium: {
                                    faces: unknown[]
                                  }
                                  orig: {
                                    faces: unknown[]
                                  }
                                  small: {
                                    faces: unknown[]
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
                                source_status_id_str: string
                                source_user_id_str: string
                                type: string
                                url: string
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
                            id_str: string
                            is_quote_status: boolean
                            lang: string
                            possibly_sensitive?: boolean
                            possibly_sensitive_editable?: boolean
                            quote_count: number
                            quoted_status_id_str?: string
                            quoted_status_permalink?: {
                              display: string
                              expanded: string
                              url: string
                            }
                            reply_count: number
                            retweet_count: number
                            retweeted: boolean
                            retweeted_status_result: {
                              result: {
                                __typename: string
                                limitedActionResults: {
                                  limited_actions: {
                                    action: string
                                    prompt: {
                                      __typename: string
                                      cta_type?: string
                                      headline: {
                                        entities: unknown[]
                                        text: string
                                      }
                                      subtext: {
                                        entities: unknown[]
                                        text: string
                                      }
                                    }
                                  }[]
                                }
                                tweet: {
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
                                          verified: boolean
                                          want_retweets: boolean
                                          withheld_in_countries: unknown[]
                                          blocked_by?: boolean
                                          url?: string
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
                                    conversation_id_str: string
                                    created_at: string
                                    display_text_range: number[]
                                    entities: {
                                      hashtags: unknown[]
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
                                            faces: unknown[]
                                          }
                                          medium: {
                                            faces: unknown[]
                                          }
                                          orig: {
                                            faces: unknown[]
                                          }
                                          small: {
                                            faces: unknown[]
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
                                      urls: unknown[]
                                      user_mentions: unknown[]
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
                                            faces: unknown[]
                                          }
                                          medium: {
                                            faces: unknown[]
                                          }
                                          orig: {
                                            faces: unknown[]
                                          }
                                          small: {
                                            faces: unknown[]
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
                                    id_str: string
                                    is_quote_status: boolean
                                    lang: string
                                    possibly_sensitive?: boolean
                                    possibly_sensitive_editable?: boolean
                                    quote_count: number
                                    quoted_status_id_str?: string
                                    quoted_status_permalink?: {
                                      display: string
                                      expanded: string
                                      url: string
                                    }
                                    reply_count: number
                                    retweet_count: number
                                    retweeted: boolean
                                    user_id_str: string
                                  }
                                  quoted_status_result?: {
                                    result: {
                                      __typename: string
                                      tweet: {
                                        card: {
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
                                                has_graduated_access: boolean
                                                id: string
                                                is_blue_verified: boolean
                                                legacy: {
                                                  blocking: boolean
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
                                                tipjar_settings: {}
                                              }
                                            }[]
                                          }
                                          rest_id: string
                                        }
                                        core: {
                                          user_results: {
                                            result: {
                                              __typename: string
                                              affiliates_highlighted_label: {}
                                              has_graduated_access: boolean
                                              id: string
                                              is_blue_verified: boolean
                                              legacy: {
                                                blocking: boolean
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
                                        is_translatable: boolean
                                        legacy: {
                                          bookmark_count: number
                                          bookmarked: boolean
                                          conversation_id_str: string
                                          created_at: string
                                          display_text_range: number[]
                                          entities: {
                                            hashtags: unknown[]
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
                                        }
                                        rest_id: string
                                        source: string
                                        unmention_data: {}
                                        views: {
                                          count: string
                                          state: string
                                        }
                                      }
                                      tweetInterstitial: {
                                        __typename: string
                                        displayType: string
                                        revealText: {
                                          entities: unknown[]
                                          rtl: boolean
                                          text: string
                                        }
                                        text: {
                                          entities: unknown[]
                                          rtl: boolean
                                          text: string
                                        }
                                      }
                                    }
                                  }
                                  rest_id: string
                                  source: string
                                  unmention_data: {}
                                  views: {
                                    count?: string
                                    state: string
                                  }
                                }
                              }
                            }
                            user_id_str: string
                          }
                          quick_promote_eligibility: {
                            eligibility: string
                          }
                          rest_id: string
                          source: string
                          unmention_data: {}
                          views: {
                            state: string
                          }
                        }
                        note_tweet?: {
                          is_expandable: boolean
                          note_tweet_results: {
                            result: {
                              entity_set: {
                                hashtags: unknown[]
                                symbols: unknown[]
                                urls: {
                                  display_url: string
                                  expanded_url: string
                                  indices: number[]
                                  url: string
                                }[]
                                user_mentions: unknown[]
                              }
                              id: string
                              media: {
                                inline_media: unknown[]
                              }
                              richtext: {
                                richtext_tags: unknown[]
                              }
                              text: string
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
                  }
                  items?: {
                    entryId: string
                    item: {
                      clientEventInfo: {
                        component: string
                        details: {
                          timelinesDetails: {
                            controllerData: string
                            injectionType: string
                            sourceData?: string
                          }
                        }
                        element: string
                      }
                      itemContent: {
                        __typename: string
                        itemType: string
                        userDisplayType?: string
                        user_results?: {
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
                            tipjar_settings: {
                              is_enabled?: boolean
                              bitcoin_handle?: string
                              ethereum_handle?: string
                            }
                          }
                        }
                        socialContext?: {
                          contextType: string
                          text: string
                          type: string
                        }
                        tweetDisplayType?: string
                        tweet_results?: {
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
                                    followed_by?: boolean
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
                                    protected?: boolean
                                    screen_name: string
                                    statuses_count: number
                                    translator_type: string
                                    verified: boolean
                                    want_retweets: boolean
                                    withheld_in_countries: unknown[]
                                    url?: string
                                    needs_phone_verification?: boolean
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
                            is_translatable: boolean
                            legacy: {
                              bookmark_count: number
                              bookmarked: boolean
                              conversation_id_str: string
                              created_at: string
                              display_text_range: number[]
                              entities: {
                                hashtags: unknown[]
                                media?: {
                                  additional_media_info?: {
                                    monetizable: boolean
                                  }
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
                                  sensitive_media_warning?: {
                                    adult_content: boolean
                                    other: boolean
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
                                }[]
                                symbols: unknown[]
                                timestamps: unknown[]
                                urls: unknown[]
                                user_mentions: unknown[]
                              }
                              extended_entities?: {
                                media: {
                                  additional_media_info?: {
                                    monetizable: boolean
                                  }
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
                                  sensitive_media_warning?: {
                                    adult_content: boolean
                                    other: boolean
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
                                }[]
                              }
                              favorite_count: number
                              favorited: boolean
                              full_text: string
                              id_str: string
                              in_reply_to_screen_name?: string
                              in_reply_to_status_id_str?: string
                              in_reply_to_user_id_str?: string
                              is_quote_status: boolean
                              lang: string
                              possibly_sensitive?: boolean
                              possibly_sensitive_editable?: boolean
                              quote_count: number
                              reply_count: number
                              retweet_count: number
                              retweeted: boolean
                              user_id_str: string
                            }
                            quick_promote_eligibility: {
                              eligibility: string
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
                    dispensable?: boolean
                  }[]
                  value?: string
                  metadata?: {
                    conversationMetadata: {
                      allTweetIds: string[]
                      enableDeduplication: boolean
                    }
                  }
                }
                entryId: string
                sortIndex: string
              }[]
              entry?: {
                content: {
                  __typename: string
                  clientEventInfo: {
                    component: string
                    element: string
                  }
                  entryType: string
                  itemContent: {
                    __typename: string
                    itemType: string
                    socialContext: {
                      contextType: string
                      text: string
                      type: string
                    }
                    tweetDisplayType: string
                    tweet_results: {
                      result: {
                        __typename: string
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
                            user_refs_results: unknown[]
                          }
                          rest_id: string
                        }
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
                                want_retweets: boolean
                                withheld_in_countries: unknown[]
                                needs_phone_verification?: boolean
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
                        is_translatable: boolean
                        legacy: {
                          bookmark_count: number
                          bookmarked: boolean
                          conversation_id_str: string
                          created_at: string
                          display_text_range: number[]
                          entities: {
                            hashtags: unknown[]
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
                        }
                        quick_promote_eligibility: {
                          eligibility: string
                        }
                        rest_id: string
                        source: string
                        unmention_data: {}
                        views: {
                          count?: string
                          state: string
                        }
                      }
                    }
                  }
                }
                entryId: string
                sortIndex: string
              }
              type: string
            }[]
            metadata: {
              scribeConfig: {
                page: string
              }
            }
          }
        }
      }
    }
  }
  errors?: {
    code: number
    extensions: {
      code: number
      kind: string
      name: string
      retry_after?: number
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
    path: (number | string)[]
    retry_after?: number
    source: string
    tracing: {
      trace_id: string
    }
  }[]
}
