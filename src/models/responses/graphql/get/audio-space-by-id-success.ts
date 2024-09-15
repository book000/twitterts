/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET AudioSpaceById 成功レスポンスモデル */

export interface GraphQLGetAudioSpaceByIdSuccessResponse {
  data: {
    audioSpace: {
      metadata: {
        rest_id: string
        state: string
        title?: string
        media_key: string
        created_at: number
        started_at?: number
        replay_start_time?: number
        updated_at: number
        creator_results: {
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
              blocking?: boolean
              following?: boolean
              verified_type?: string
              protected?: boolean
            }
            tipjar_settings?: {}
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
        conversation_controls: number
        disallow_join: boolean
        is_employee_only: boolean
        is_locked: boolean
        is_muted: boolean
        is_space_available_for_clipping: boolean
        is_space_available_for_replay: boolean
        narrow_cast_space_type: number
        no_incognito: boolean
        total_replay_watched: number
        total_live_listeners: number
        tweet_results: {
          result?: {
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
                    blocking?: boolean
                    following?: boolean
                    verified_type?: string
                  }
                  tipjar_settings?: {}
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
            card: {
              rest_id: string
              legacy: {
                binding_values: {
                  key: string
                  value: {
                    string_value: string
                    type: string
                    scribe_key?: string
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
            }
            voiceInfo: {}
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
            unified_card?: {
              card_fetch_state: string
            }
            edit_perspective?: {
              favorited: boolean
              retweeted: boolean
            }
          }
        }
        max_guest_sessions?: number
        max_admin_capacity?: number
        mentioned_users?: {
          rest_id: string
        }[]
        ended_at?: string
        content_type?: string
        scheduled_start?: number
        pending_admin_twitter_user_ids?: {
          rest_id: string
        }[]
      }
      is_subscribed: boolean
      participants: {
        total: number
        admins: {
          periscope_user_id: string
          start: number
          twitter_screen_name: string
          display_name: string
          avatar_url: string
          is_verified: boolean
          is_muted_by_admin: boolean
          is_muted_by_guest: boolean
          user_results: {
            rest_id: string
            result: {
              __typename: string
              identity_profile_labels_highlighted_label?: {
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
              is_blue_verified?: boolean
              legacy?: {
                verified_type?: string
              }
            }
          }
        }[]
        speakers: {
          periscope_user_id: string
          start: number
          twitter_screen_name: string
          display_name: string
          avatar_url: string
          is_verified: boolean
          is_muted_by_admin: boolean
          is_muted_by_guest: boolean
          user_results: {
            rest_id: string
            result: {
              __typename: string
              identity_profile_labels_highlighted_label?: {
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
              is_blue_verified?: boolean
              legacy?: {
                verified_type?: string
              }
            }
          }
        }[]
        listeners: {
          periscope_user_id: string
          start?: number
          twitter_screen_name: string
          display_name: string
          avatar_url: string
          is_verified: boolean
          is_muted_by_admin: boolean
          is_muted_by_guest: boolean
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
                  longDescription: {
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
                            reason: string
                            message: string
                          }
                        }
                      }
                    }[]
                  }
                  userLabelType: string
                }
              }
              is_blue_verified: boolean
              legacy: {}
            }
          }
        }[]
      }
      sharings: {
        items: {
          sharing_id: string
          created_at_ms: number
          updated_at_ms: number
          shared_item: {
            __typename: string
            tweet_results: {
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
                        blocking?: boolean
                        following?: boolean
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
                      tipjar_settings?: {
                        is_enabled?: boolean
                        bitcoin_handle?: string
                        ethereum_handle?: string
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
                        all?: {
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
                      allow_download_status?: {
                        allow_download: boolean
                      }
                      media_results?: {
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
                        all?: {
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
                      allow_download_status?: {
                        allow_download: boolean
                      }
                      media_results?: {
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
                voiceInfo?: {}
                superFollowsReplyUserResult?: {
                  result: {
                    __typename: string
                    legacy: {
                      screen_name: string
                    }
                  }
                }
                quoted_status_result?: {
                  result: {
                    __typename: string
                    rest_id: string
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
                          ext_media_availability: {
                            status: string
                          }
                          features?: {
                            all: {
                              tags: {
                                user_id: string
                                name: string
                                screen_name: string
                                type: string
                              }[]
                            }
                            large: {
                              faces: unknown[]
                            }
                            medium: {
                              faces: unknown[]
                            }
                            small: {
                              faces: unknown[]
                            }
                            orig: {
                              faces: unknown[]
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
                          features?: {
                            all: {
                              tags: {
                                user_id: string
                                name: string
                                screen_name: string
                                type: string
                              }[]
                            }
                            large: {
                              faces: unknown[]
                            }
                            medium: {
                              faces: unknown[]
                            }
                            small: {
                              faces: unknown[]
                            }
                            orig: {
                              faces: unknown[]
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
                      possibly_sensitive: boolean
                      possibly_sensitive_editable: boolean
                      quote_count: number
                      reply_count: number
                      retweet_count: number
                      retweeted: boolean
                      user_id_str: string
                      id_str: string
                    }
                    card?: {
                      rest_id: string
                      legacy: {
                        binding_values: {
                          key: string
                          value: {
                            string_value: string
                            type: string
                            scribe_key?: string
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
                    }
                    voiceInfo?: {}
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
                        is_blue_verified: boolean
                        profile_image_shape: string
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
                      }
                    }[]
                  }
                }
                unified_card?: {
                  card_fetch_state: string
                }
                edit_perspective?: {
                  favorited: boolean
                  retweeted: boolean
                }
              }
            }
          }
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
                following?: boolean
                blocking?: boolean
                protected?: boolean
              }
              tipjar_settings?: {
                is_enabled?: boolean
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
        }[]
        slice_info: {}
      }
    }
  }
}
