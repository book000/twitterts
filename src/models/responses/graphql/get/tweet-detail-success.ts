/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET TweetDetail 成功レスポンスモデル */

export interface GraphQLGetTweetDetailSuccessResponse {
  data: {
    threaded_conversation_with_injections_v2?: {
      instructions: {
        direction?: string
        entries?: {
          content: {
            __typename: string
            clientEventInfo?: {
              component?: string
              element?: string
              details?: {
                conversationDetails: {
                  conversationSection: string
                }
                timelinesDetails?: {
                  controllerData: string
                }
              }
            }
            cursorType?: string
            entryType: string
            itemContent?: {
              __typename: string
              itemType: string
              tweetDisplayType?: string
              tweet_results?: {
                result?: {
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
                            pinned_tweet_ids_str: unknown[]
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
                          followed_by?: boolean
                          url?: string
                          blocking?: boolean
                          verified_type?: string
                        }
                        parody_commentary_fan_label: string
                        profile_image_shape: string
                        rest_id: string
                        super_follow_eligible?: boolean
                        tipjar_settings: {
                          is_enabled?: boolean
                          patreon_handle?: string
                          bitcoin_handle?: string
                          ethereum_handle?: string
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
                  edit_control?: {
                    edit_control_initial?: {
                      edit_tweet_ids: string[]
                      editable_until_msecs: string
                      edits_remaining: string
                      is_edit_eligible: boolean
                    }
                    initial_tweet_id?: string
                    edit_tweet_ids?: string[]
                    editable_until_msecs?: string
                    edits_remaining?: string
                    is_edit_eligible?: boolean
                  }
                  has_birdwatch_notes?: boolean
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
                      user_mentions: unknown[]
                      media?: {
                        allow_download_status?: {
                          allow_download: boolean
                        }
                        display_url: string
                        expanded_url: string
                        ext_media_availability: {
                          status: string
                          reason?: string
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
                          description?: string
                          embeddable?: boolean
                          title?: string
                          source_user?: {
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
                                  blocking?: boolean
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
                                  cash_app_handle?: string
                                  is_enabled?: boolean
                                  bitcoin_handle?: string
                                  ethereum_handle?: string
                                  venmo_handle?: string
                                  patreon_handle?: string
                                }
                              }
                            }
                          }
                        }
                        video_info?: {
                          aspect_ratio: number[]
                          duration_millis?: number
                          variants: {
                            bitrate?: number
                            content_type: string
                            url: string
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
                    extended_entities?: {
                      media: {
                        allow_download_status?: {
                          allow_download: boolean
                        }
                        display_url: string
                        expanded_url: string
                        ext_media_availability: {
                          status: string
                          reason?: string
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
                          description?: string
                          embeddable?: boolean
                          title?: string
                          source_user?: {
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
                                  blocking?: boolean
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
                                  cash_app_handle?: string
                                  is_enabled?: boolean
                                  bitcoin_handle?: string
                                  ethereum_handle?: string
                                  venmo_handle?: string
                                  patreon_handle?: string
                                }
                              }
                            }
                          }
                        }
                        video_info?: {
                          aspect_ratio: number[]
                          duration_millis?: number
                          variants: {
                            bitrate?: number
                            content_type: string
                            url: string
                          }[]
                        }
                        source_status_id_str?: string
                        source_user_id_str?: string
                        ext_alt_text?: string
                      }[]
                    }
                    quoted_status_id_str?: string
                    quoted_status_permalink?: {
                      display: string
                      expanded: string
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
                  quoted_status_result?: {
                    result?: {
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
                              profile_image_url_https: string
                              profile_interstitial_type: string
                              screen_name: string
                              statuses_count: number
                              translator_type: string
                              url?: string
                              verified: boolean
                              want_retweets: boolean
                              withheld_in_countries: unknown[]
                              profile_banner_url?: string
                              blocking?: boolean
                              verified_type?: string
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
                      has_birdwatch_notes?: boolean
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
                            type: string
                            url: string
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
                      rest_id?: string
                      source?: string
                      unmention_data?: {}
                      views?: {
                        count: string
                        state: string
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
                                verified: boolean
                                want_retweets: boolean
                                withheld_in_countries: unknown[]
                                blocking?: boolean
                                url?: string
                                verified_type?: string
                              }
                              parody_commentary_fan_label: string
                              profile_image_shape: string
                              rest_id: string
                              tipjar_settings: {
                                is_enabled?: boolean
                                bitcoin_handle?: string
                                ethereum_handle?: string
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
                        has_birdwatch_notes: boolean
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
                          possibly_sensitive?: boolean
                          possibly_sensitive_editable?: boolean
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
                                parody_commentary_fan_label: string
                                profile_image_shape: string
                                rest_id: string
                                tipjar_settings: {}
                              }
                            }[]
                          }
                          rest_id: string
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
                              text: string
                              media?: {
                                inline_media: unknown[]
                              }
                              richtext?: {
                                richtext_tags: unknown[]
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
                      quotedRefResult?: {
                        result: {
                          __typename: string
                          tweet?: {
                            rest_id: string
                          }
                          rest_id?: string
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
                      card?: {
                        legacy: {
                          binding_values: {
                            key: string
                            value: {
                              scribe_key?: string
                              string_value: string
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
                      note_tweet?: {
                        is_expandable: boolean
                        note_tweet_results: {
                          result: {
                            entity_set: {
                              hashtags: unknown[]
                              symbols: unknown[]
                              timestamps: unknown[]
                              urls: unknown[]
                              user_mentions: unknown[]
                            }
                            id: string
                            text: string
                          }
                        }
                      }
                      birdwatch_pivot?: {
                        callToAction: {
                          destinationUrl: string
                          prompt: string
                          title: string
                        }
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
                    }
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
                            blocking?: boolean
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
                            patreon_handle?: string
                            bitcoin_handle?: string
                            ethereum_handle?: string
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
                    has_birdwatch_notes: boolean
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
                        urls: unknown[]
                        user_mentions: unknown[]
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
                    quoted_status_result?: {
                      result?: {
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
                                profile_banner_url?: string
                                profile_image_url_https: string
                                profile_interstitial_type: string
                                screen_name: string
                                statuses_count: number
                                translator_type: string
                                verified: boolean
                                verified_type?: string
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
                        has_birdwatch_notes?: boolean
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
                              additional_media_info?: {
                                monetizable: boolean
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
                              additional_media_info?: {
                                monetizable: boolean
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
                                  verified: boolean
                                  want_retweets: boolean
                                  withheld_in_countries: unknown[]
                                  blocking?: boolean
                                  url?: string
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
                          has_birdwatch_notes: boolean
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
                        quotedRefResult?: {
                          result: {
                            __typename: string
                            rest_id: string
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
                    previous_counts?: {
                      bookmark_count: number
                      favorite_count: number
                      quote_count: number
                      reply_count: number
                      retweet_count: number
                    }
                  }
                  birdwatch_pivot?: {
                    callToAction: {
                      destinationUrl: string
                      prompt: string
                      title: string
                    }
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
                            tipjar_settings: {
                              is_enabled?: boolean
                            }
                          }
                        }[]
                        moderator_count: number
                        name: string
                        primary_community_topic: {
                          topic_id: string
                          topic_name: string
                        }
                        question: string
                        role: string
                        rules: {
                          description?: string
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
                  community_relationship?: {
                    actions: {
                      pin_action_result: {
                        __typename: string
                      }
                      unpin_action_result: {
                        __typename: string
                      }
                    }
                    id: string
                    moderation_state: {}
                    rest_id: string
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
                }
              }
              hasModeratedReplies?: boolean
              cursorType?: string
              value?: string
              displayTreatment?: {
                actionText: string
                labelText?: string
              }
            }
            value?: string
            displayType?: string
            header?: {
              displayType: string
              socialContext: {
                contextType: string
                text: string
                type: string
              }
              sticky: boolean
              text: string
            }
            items?: {
              entryId: string
              item: {
                clientEventInfo: {
                  details: {
                    conversationDetails: {
                      conversationSection: string
                    }
                    timelinesDetails?: {
                      controllerData: string
                    }
                  }
                  component?: string
                  element?: string
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
                    result?: {
                      __typename: string
                      core?: {
                        user_results: {
                          result: {
                            __typename: string
                            affiliates_highlighted_label: {
                              label?: {
                                badge: {
                                  url: string
                                }
                                description: string
                                longDescription?: {
                                  entities: {
                                    fromIndex: number
                                    ref: {
                                      mention_results: {
                                        result: {
                                          __typename: string
                                          legacy?: {
                                            screen_name: string
                                          }
                                          rest_id?: string
                                          message?: string
                                          reason?: string
                                        }
                                      }
                                      screen_name: string
                                      type: string
                                    }
                                    toIndex: number
                                  }[]
                                  text: string
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
                            parody_commentary_fan_label: string
                            profile_image_shape: string
                            rest_id: string
                            tipjar_settings?: {
                              is_enabled?: boolean
                              bitcoin_handle?: string
                              ethereum_handle?: string
                              patreon_handle?: string
                              cash_app_handle?: string
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
                      edit_control?: {
                        edit_tweet_ids: string[]
                        editable_until_msecs: string
                        edits_remaining: string
                        is_edit_eligible: boolean
                      }
                      has_birdwatch_notes?: boolean
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
                          symbols: {
                            indices: number[]
                            text: string
                          }[]
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
                              source_user?: {
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
                            }
                            video_info?: {
                              aspect_ratio: number[]
                              duration_millis?: number
                              variants: {
                                bitrate?: number
                                content_type: string
                                url: string
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
                        id_str: string
                        in_reply_to_screen_name?: string
                        in_reply_to_status_id_str?: string
                        in_reply_to_user_id_str?: string
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
                              source_user?: {
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
                            }
                            video_info?: {
                              aspect_ratio: number[]
                              duration_millis?: number
                              variants: {
                                bitrate?: number
                                content_type: string
                                url: string
                              }[]
                            }
                            ext_alt_text?: string
                            source_status_id_str?: string
                            source_user_id_str?: string
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
                        place?: {
                          bounding_box: {
                            coordinates: number[][][]
                            type: string
                          }
                          country: string
                          country_code: string
                          full_name: string
                          id: string
                          name: string
                          place_type: string
                          url: string
                        }
                        scopes?: {
                          followers: boolean
                        }
                      }
                      quick_promote_eligibility?: {
                        eligibility: string
                      }
                      rest_id?: string
                      source?: string
                      unmention_data?: {
                        hydrate?: {
                          unmentioned_users_results: {
                            rest_id: string
                          }[]
                        }
                      }
                      views?: {
                        count?: string
                        state: string
                      }
                      quoted_status_result?: {
                        result?: {
                          __typename: string
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
                                      url?: {
                                        urls: {
                                          display_url?: string
                                          expanded_url?: string
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
                                    bitcoin_handle?: string
                                    ethereum_handle?: string
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
                            has_birdwatch_notes: boolean
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
                                    description?: string
                                    monetizable: boolean
                                    title?: string
                                    call_to_actions?: {
                                      visit_site: {
                                        url: string
                                      }
                                    }
                                    embeddable?: boolean
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
                                    description?: string
                                    monetizable: boolean
                                    title?: string
                                    call_to_actions?: {
                                      visit_site: {
                                        url: string
                                      }
                                    }
                                    embeddable?: boolean
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
                              scopes?: {
                                followers: boolean
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
                              in_reply_to_screen_name?: string
                              in_reply_to_status_id_str?: string
                              in_reply_to_user_id_str?: string
                            }
                            rest_id: string
                            source: string
                            unmention_data: {}
                            views: {
                              count?: string
                              state: string
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
                            previous_counts?: {
                              bookmark_count: number
                              favorite_count: number
                              quote_count: number
                              reply_count: number
                              retweet_count: number
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
                          edit_control?: {
                            edit_tweet_ids: string[]
                            editable_until_msecs: string
                            edits_remaining: string
                            is_edit_eligible: boolean
                          }
                          has_birdwatch_notes?: boolean
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
                              symbols: {
                                indices: number[]
                                text: string
                              }[]
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
                                allow_download_status?: {
                                  allow_download: boolean
                                }
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
                                          blocking?: boolean
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
                                          verified: boolean
                                          want_retweets: boolean
                                          withheld_in_countries: unknown[]
                                          url?: string
                                        }
                                        parody_commentary_fan_label: string
                                        profile_image_shape: string
                                        rest_id: string
                                        tipjar_settings: {}
                                      }
                                    }
                                  }
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
                                allow_download_status?: {
                                  allow_download: boolean
                                }
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
                                          blocking?: boolean
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
                                          verified: boolean
                                          want_retweets: boolean
                                          withheld_in_countries: unknown[]
                                          url?: string
                                        }
                                        parody_commentary_fan_label: string
                                        profile_image_shape: string
                                        rest_id: string
                                        tipjar_settings: {}
                                      }
                                    }
                                  }
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
                                source_status_id_str?: string
                                source_user_id_str?: string
                              }[]
                            }
                            possibly_sensitive?: boolean
                            possibly_sensitive_editable?: boolean
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
                              }[]
                            }
                            rest_id: string
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
                          birdwatch_pivot?: {
                            callToAction: {
                              destinationUrl: string
                              prompt: string
                              title: string
                            }
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
                          mediaVisibilityResults?: {
                            blurred_image_interstitial: {
                              opacity: number
                              text: {
                                entities: unknown[]
                                rtl: boolean
                                text: string
                              }
                              title: {
                                entities: unknown[]
                                rtl: boolean
                                text: string
                              }
                            }
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
                              urls: unknown[]
                              user_mentions: unknown[]
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
                              has_graduated_access?: boolean
                              id?: string
                              is_blue_verified?: boolean
                              legacy?: {
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
                                muting?: boolean
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
                              rest_id?: string
                              tipjar_settings?: {}
                              message?: string
                              reason?: string
                            }
                          }[]
                        }
                        rest_id: string
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
                              additional_media_info?: {
                                monetizable: boolean
                              }
                              video_info?: {
                                aspect_ratio: number[]
                                duration_millis?: number
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
                          quote_count: number
                          reply_count: number
                          retweet_count: number
                          retweeted: boolean
                          user_id_str: string
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
                              additional_media_info?: {
                                monetizable: boolean
                              }
                              video_info?: {
                                aspect_ratio: number[]
                                duration_millis?: number
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
                          place?: {
                            bounding_box: {
                              coordinates: number[][][]
                              type: string
                            }
                            country: string
                            country_code: string
                            full_name: string
                            id: string
                            name: string
                            place_type: string
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
                          scopes?: {
                            followers: boolean
                          }
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
                        unmention_data: {
                          hydrate?: {
                            unmentioned_users_results: {
                              rest_id: string
                            }[]
                          }
                        }
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
                              richtext?: {
                                richtext_tags: unknown[]
                              }
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
                                  muting?: boolean
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
                                  blocking?: boolean
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
                                  tipjar_settings: {
                                    is_enabled?: boolean
                                  }
                                }
                              }[]
                              moderator_count: number
                              name: string
                              primary_community_topic: {
                                topic_id: string
                                topic_name: string
                              }
                              question: string
                              role: string
                              rules: {
                                description?: string
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
                              tipjar_settings: {}
                            }
                          }
                        }
                        community_relationship?: {
                          actions: {
                            pin_action_result: {
                              __typename: string
                            }
                            unpin_action_result: {
                              __typename: string
                            }
                          }
                          id: string
                          moderation_state: {}
                          rest_id: string
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
                              quoted_status_id_str: string
                              quoted_status_permalink: {
                                display: string
                                expanded: string
                                url: string
                              }
                              reply_count: number
                              retweet_count: number
                              retweeted: boolean
                              user_id_str: string
                            }
                            quotedRefResult: {
                              result: {
                                __typename: string
                                tweet: {
                                  rest_id: string
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
                      mediaVisibilityResults?: {
                        blurred_image_interstitial: {
                          opacity: number
                          text: {
                            entities: unknown[]
                            rtl: boolean
                            text: string
                          }
                          title: {
                            entities: unknown[]
                            rtl: boolean
                            text: string
                          }
                        }
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
                                tipjar_settings: {
                                  is_enabled?: boolean
                                }
                              }
                            }[]
                            moderator_count: number
                            name: string
                            primary_community_topic: {
                              topic_id: string
                              topic_name: string
                            }
                            question: string
                            role: string
                            rules: {
                              description?: string
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
                            }
                          }
                        }
                      }
                      community_relationship?: {
                        actions: {
                          pin_action_result: {
                            __typename: string
                          }
                          unpin_action_result: {
                            __typename: string
                          }
                        }
                        id: string
                        moderation_state: {}
                        rest_id: string
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
                      grok_share_attachment?: {
                        items: {
                          deepsearch_headers?: unknown[]
                          media_urls: unknown[]
                          message: string
                        }[]
                      }
                    }
                  }
                  cursorType?: string
                  displayTreatment?: {
                    actionText: string
                  }
                  value?: string
                  promotedMetadata?: {
                    advertiser_results: {
                      result: {
                        __typename: string
                        affiliates_highlighted_label: {
                          label?: {
                            badge: {
                              url: string
                            }
                            description: string
                            longDescription?: {
                              entities: {
                                fromIndex: number
                                ref: {
                                  mention_results: {
                                    result: {
                                      __typename: string
                                      legacy: {
                                        screen_name: string
                                      }
                                      rest_id: string
                                    }
                                  }
                                  screen_name: string
                                  type: string
                                }
                                toIndex: number
                              }[]
                              text: string
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
                    clickTrackingInfo: {
                      urlParams: {
                        key: string
                        value: string
                      }[]
                    }
                    disclosureType: string
                    experimentValues: {
                      key: string
                      value: string
                    }[]
                    impressionId: string
                    impressionString: string
                  }
                }
              }
            }[]
            metadata?: {
              conversationMetadata: {
                allTweetIds: string[]
                enableDeduplication: boolean
              }
            }
            displayTreatment?: {
              actionText: string
            }
          }
          entryId: string
          sortIndex: string
        }[]
        type: string
      }[]
      metadata?: {
        scribeConfig?: {
          page: string
        }
        reader_mode_config?: {
          is_reader_mode_available: boolean
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
