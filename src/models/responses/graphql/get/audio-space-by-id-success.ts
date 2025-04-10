/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET AudioSpaceById 成功レスポンスモデル */

export interface GraphQLGetAudioSpaceByIdSuccessResponse {
  data: {
    audioSpace: {
      is_subscribed: boolean
      metadata: {
        content_type?: string
        conversation_controls: number
        created_at: number
        creator_results: {
          result: {
            __typename: string
            affiliates_highlighted_label: {
              label?: {
                badge: {
                  url: string
                }
                description: string
                url?: {
                  url: string
                  urlType: string
                }
                userLabelDisplayType?: string
                userLabelType: string
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
            super_follow_eligible?: boolean
            tipjar_settings: {
              is_enabled?: boolean
            }
          }
        }
        disallow_join: boolean
        is_employee_only: boolean
        is_locked: boolean
        is_muted: boolean
        is_space_available_for_clipping: boolean
        is_space_available_for_replay: boolean
        max_admin_capacity: number
        max_guest_sessions: number
        media_key: string
        mentioned_users?: {
          rest_id: string
        }[]
        narrow_cast_space_type: number
        no_incognito: boolean
        rest_id: string
        started_at?: number
        state: string
        title: string
        total_live_listeners: number
        total_replay_watched: number
        tweet_results: {
          result?: {
            __typename: string
            card: {
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
                      url?: {
                        url: string
                        urlType: string
                      }
                      userLabelDisplayType?: string
                      userLabelType: string
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
                  super_follow_eligible?: boolean
                  tipjar_settings: {
                    is_enabled?: boolean
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
            voiceInfo?: {}
          }
        }
        updated_at: number
        ended_at?: string
        scheduled_start?: number
        replay_start_time?: number
        topics?: {
          topic: {
            name: string
            topic_id: string
          }
        }[]
      }
      participants: {
        admins: {
          avatar_url: string
          display_name: string
          is_muted_by_admin: boolean
          is_muted_by_guest: boolean
          is_verified: boolean
          periscope_user_id: string
          start: number
          twitter_screen_name: string
          user_results: {
            rest_id: string
            result: {
              __typename: string
              identity_profile_labels_highlighted_label: {
                label?: {
                  badge: {
                    url: string
                  }
                  description: string
                  url?: {
                    url: string
                    urlType: string
                  }
                  userLabelDisplayType?: string
                  userLabelType: string
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
                }
              }
              is_blue_verified: boolean
              legacy: {
                verified_type?: string
              }
            }
          }
        }[]
        listeners: {
          avatar_url: string
          display_name: string
          is_muted_by_admin: boolean
          is_muted_by_guest: boolean
          is_verified: boolean
          periscope_user_id: string
          start: number
          twitter_screen_name: string
          user_results: {
            rest_id: string
            result: {
              __typename: string
              identity_profile_labels_highlighted_label: {}
              is_blue_verified: boolean
              legacy: {}
            }
          }
        }[]
        speakers: {
          avatar_url: string
          display_name: string
          is_muted_by_admin: boolean
          is_muted_by_guest: boolean
          is_verified: boolean
          periscope_user_id: string
          start: number
          twitter_screen_name: string
          user_results: {
            rest_id: string
            result: {
              __typename: string
              identity_profile_labels_highlighted_label: {
                label?: {
                  badge: {
                    url: string
                  }
                  description: string
                  url?: {
                    url: string
                    urlType: string
                  }
                  userLabelDisplayType?: string
                  userLabelType: string
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
                }
              }
              is_blue_verified: boolean
              legacy: {
                verified_type?: string
              }
            }
          }
        }[]
        total: number
      }
      sharings: {
        items: {
          created_at_ms: number
          shared_item: {
            __typename: string
            tweet_results: {
              result?: {
                __typename: string
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
                          url?: {
                            url: string
                            urlType: string
                          }
                          userLabelDisplayType?: string
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
                        profile_banner_url: string
                        profile_image_url_https: string
                        profile_interstitial_type: string
                        screen_name: string
                        statuses_count: number
                        translator_type: string
                        verified: boolean
                        want_retweets: boolean
                        withheld_in_countries: unknown[]
                        followed_by?: boolean
                        url?: string
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
                    media?: {
                      display_url: string
                      expanded_url: string
                      ext_media_availability: {
                        status: string
                      }
                      features: {
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
                      allow_download_status?: {
                        allow_download: boolean
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
                      allow_download_status?: {
                        allow_download: boolean
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
                            affiliates_highlighted_label: {
                              label?: {
                                badge: {
                                  url: string
                                }
                                description: string
                                longDescription: {
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
                            media: {
                              inline_media: {
                                index: number
                                media_id: string
                              }[]
                            }
                            richtext: {
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
                      quoted_status_result?: {
                        result: {
                          __typename: string
                          core: {
                            user_results: {
                              result: {
                                __typename: string
                                affiliates_highlighted_label: {
                                  label: {
                                    badge: {
                                      url: string
                                    }
                                    description: string
                                    longDescription: {
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
                              urls: {
                                display_url: string
                                expanded_url: string
                                indices: number[]
                                url: string
                              }[]
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
                          note_tweet: {
                            is_expandable: boolean
                            note_tweet_results: {
                              result: {
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
                          quotedRefResult: {
                            result: {
                              __typename: string
                              rest_id: string
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
                  }
                  in_reply_to_screen_name?: string
                  in_reply_to_status_id_str?: string
                  in_reply_to_user_id_str?: string
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
                        hashtags: {
                          indices: number[]
                          text: string
                        }[]
                        symbols: {
                          indices: number[]
                          text: string
                        }[]
                        timestamps?: unknown[]
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
                      media?: {
                        inline_media: {
                          index: number
                          media_id: string
                        }[]
                      }
                      richtext?: {
                        richtext_tags: {
                          from_index: number
                          richtext_types: string[]
                          to_index: number
                        }[]
                      }
                    }
                  }
                }
                quoted_status_result?: {
                  result: {
                    __typename: string
                    card: {
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
                    core: {
                      user_results: {
                        result: {
                          __typename: string
                          affiliates_highlighted_label: {
                            label: {
                              badge: {
                                url: string
                              }
                              description: string
                              longDescription: {
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
                    voiceInfo: {}
                  }
                }
                voiceInfo?: {}
              }
            }
          }
          sharing_id: string
          updated_at_ms: number
          user_results: {
            result: {
              __typename: string
              affiliates_highlighted_label: {
                label?: {
                  badge: {
                    url: string
                  }
                  description: string
                  longDescription: {
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
        }[]
        slice_info: {}
      }
    }
  }
}
