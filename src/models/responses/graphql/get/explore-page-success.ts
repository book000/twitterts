/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET ExplorePage 成功レスポンスモデル */

export interface GraphQLGetExplorePageSuccessResponse {
  data: {
    explore_page: {
      body: {
        __typename: string
        initialTimeline: {
          id: string
          labelText: string
          refreshIntervalSec: number
          scribeConfig: {
            page: string
            section: string
          }
          timeline: {
            timeline: {
              instructions: {
                entries?: {
                  content: {
                    __typename: string
                    clientEventInfo?: {
                      component: string
                      details?: {
                        timelinesDetails: {
                          controllerData: string
                          injectionType?: string
                          sourceData?: string
                        }
                      }
                      element?: string
                    }
                    cursorType?: string
                    displayType?: string
                    entryType: string
                    feedbackInfo?: {
                      clientEventInfo: {
                        action: string
                        component?: string
                        element: string
                      }
                      feedbackKeys: string[]
                      feedbackMetadata?: string
                    }
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
                      landingUrl?: {
                        url: string
                        urlType: string
                      }
                      sticky?: boolean
                      text: string
                    }
                    itemContent?: {
                      __typename: string
                      event?: {
                        rest_id: string
                      }
                      eventSummaryDisplayType?: string
                      eventSummaryUrl?: {
                        url: string
                        urlType: string
                      }
                      itemType: string
                      media?: {
                        mediaEntity: {
                          tweet_results: {
                            result?: {
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
                                    additional_media_info?: {
                                      monetizable: boolean
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
                                  urls: unknown[]
                                  user_mentions: unknown[]
                                }
                                extended_entities: {
                                  media: {
                                    additional_media_info?: {
                                      monetizable: boolean
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
                          type: string
                        }
                        mediaKey: {
                          category: number
                          id: string
                        }
                      }
                      name?: string
                      promotedMetadata?: {
                        advertiser_results: {
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
                        disclosureType: string
                        impressionId: string
                        impressionString: string
                        promotedTrend: {
                          rest_id: string
                        }
                        promotedTrendDescription: string
                        promotedTrendName: string
                        promotedTrendQueryTerm: string
                      }
                      title?: string
                      trend_metadata?: {
                        domain_context: string
                        meta_description?: string
                        url: {
                          url: string
                          urlType: string
                          urtEndpointOptions: {
                            requestParams: {
                              key: string
                              value: string
                            }[]
                          }
                        }
                      }
                      trend_url?: {
                        url: string
                        urlType: string
                        urtEndpointOptions: {
                          requestParams: {
                            key: string
                            value: string
                          }[]
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
                              controllerData?: string
                              injectionType?: string
                              sourceData?: string
                            }
                          }
                          element: string
                        }
                        itemContent: {
                          __typename: string
                          itemType: string
                          socialContext?: {
                            contextType: string
                            text: string
                            type: string
                          }
                          tweetDisplayType?: string
                          tweet_results?: {
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
                                      bitcoin_handle?: string
                                      is_enabled?: boolean
                                      patreon_handle?: string
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
                                            }
                                            parody_commentary_fan_label: string
                                            profile_image_shape: string
                                            rest_id: string
                                            tipjar_settings: {
                                              is_enabled: boolean
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
                                    video_info?: {
                                      aspect_ratio: number[]
                                      duration_millis: number
                                      variants: {
                                        bitrate?: number
                                        content_type: string
                                        url: string
                                      }[]
                                    }
                                    source_status_id_str?: string
                                    source_user_id_str?: string
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
                                            }
                                            parody_commentary_fan_label: string
                                            profile_image_shape: string
                                            rest_id: string
                                            tipjar_settings: {
                                              is_enabled: boolean
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
                                    video_info?: {
                                      aspect_ratio: number[]
                                      duration_millis: number
                                      variants: {
                                        bitrate?: number
                                        content_type: string
                                        url: string
                                      }[]
                                    }
                                    source_status_id_str?: string
                                    source_user_id_str?: string
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
                              quoted_status_result?: {
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
                                          affiliates_highlighted_label: {
                                            label: {
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
                                            pinned_tweet_ids_str: unknown[]
                                            possibly_sensitive: boolean
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
                                        display_url: string
                                        expanded_url: string
                                        ext_media_availability: {
                                          status: string
                                        }
                                        features?: {
                                          all?: {
                                            tags: {
                                              name: string
                                              screen_name: string
                                              type: string
                                              user_id: string
                                            }[]
                                          }
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
                                        display_url: string
                                        expanded_url: string
                                        ext_media_availability: {
                                          status: string
                                        }
                                        features?: {
                                          all?: {
                                            tags: {
                                              name: string
                                              screen_name: string
                                              type: string
                                              user_id: string
                                            }[]
                                          }
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
                                    possibly_sensitive: boolean
                                    possibly_sensitive_editable: boolean
                                    quote_count: number
                                    reply_count: number
                                    retweet_count: number
                                    retweeted: boolean
                                    user_id_str: string
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
                                          user_mentions: {
                                            id_str: string
                                            indices: number[]
                                            name: string
                                            screen_name: string
                                          }[]
                                        }
                                        id: string
                                        text: string
                                      }
                                    }
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
                              rest_id: string
                              source: string
                              unmention_data: {}
                              views: {
                                count: string
                                state: string
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
                                    }
                                    id: string
                                    text: string
                                  }
                                }
                              }
                            }
                          }
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
                                url?: string
                                verified: boolean
                                want_retweets: boolean
                                withheld_in_countries: unknown[]
                              }
                              parody_commentary_fan_label: string
                              profile_image_shape: string
                              rest_id: string
                              tipjar_settings: {
                                bitcoin_handle?: string
                                ethereum_handle?: string
                                is_enabled?: boolean
                              }
                              professional?: {
                                category: unknown[]
                                professional_type: string
                                rest_id: string
                              }
                            }
                          }
                        }
                      }
                    }[]
                    value?: string
                  }
                  entryId: string
                  sortIndex: string
                }[]
                type: string
              }[]
              responseObjects: {
                feedbackActions: {
                  key: string
                  value: {
                    clientEventInfo?: {
                      action: string
                      element: string
                    }
                    confirmation: string
                    confirmationDisplayType: string
                    feedbackType: string
                    feedbackUrl?: string
                    hasUndoAction: boolean
                    icon?: string
                    prompt: string
                  }
                }[]
              }
            }
          }
        }
        timelines: {
          id: string
          labelText: string
          refreshIntervalSec: number
          scribeConfig: {
            page: string
            section: string
          }
          timeline: {
            id: string
          }
        }[]
      }
      id: string
    }
  }
}
