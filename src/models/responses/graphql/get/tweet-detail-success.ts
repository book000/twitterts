/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET TweetDetail 成功レスポンスモデル */

export interface GraphQLGetTweetDetailSuccessResponse {
  data: {
    threaded_conversation_with_injections_v2: {
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
              tweet_results?: {
                result: {
                  __typename: string
                  rest_id?: string
                  has_birdwatch_notes?: boolean
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
                          muting?: boolean
                          following?: boolean
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
                        has_nft_avatar?: boolean
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
                                  verified: boolean
                                  want_retweets: boolean
                                  withheld_in_countries: string[]
                                  blocking?: boolean
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
                                super_follow_eligible?: boolean
                              }
                            }
                          }
                          title?: string
                          description?: string
                          embeddable?: boolean
                          call_to_actions?: {
                            watch_now?: {
                              url: string
                            }
                            visit_site?: {
                              url: string
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
                                  verified: boolean
                                  want_retweets: boolean
                                  withheld_in_countries: string[]
                                  blocking?: boolean
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
                                super_follow_eligible?: boolean
                              }
                            }
                          }
                          title?: string
                          description?: string
                          embeddable?: boolean
                          call_to_actions?: {
                            watch_now?: {
                              url: string
                            }
                            visit_site?: {
                              url: string
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
                    retweeted_status_result?: {
                      result: {
                        __typename: string
                        rest_id: string
                        has_birdwatch_notes: boolean
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
                                verified: boolean
                                want_retweets: boolean
                                withheld_in_countries: unknown[]
                                url?: string
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
                          state: string
                          count?: string
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
                          limited_actions?: string
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
                                urls: {
                                  display_url: string
                                  expanded_url: string
                                  url: string
                                  indices: number[]
                                }[]
                                user_mentions: unknown[]
                                timestamps?: unknown[]
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
                        edit_perspective?: {
                          favorited: boolean
                          retweeted: boolean
                        }
                        unified_card?: {
                          card_fetch_state: string
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
                                id?: string
                                rest_id?: string
                                affiliates_highlighted_label?: {}
                                has_graduated_access?: boolean
                                is_blue_verified?: boolean
                                profile_image_shape?: string
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
                                  blocking?: boolean
                                  following?: boolean
                                  verified_type?: string
                                }
                                message?: string
                                reason?: string
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
                        quoted_status_result?: {
                          result: {
                            __typename: string
                            rest_id?: string
                            has_birdwatch_notes?: boolean
                            core?: {
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
                                      verified_type?: string
                                      want_retweets: boolean
                                      withheld_in_countries: unknown[]
                                    }
                                  }
                                }[]
                              }
                            }
                            unmention_data?: {}
                            unified_card?: {
                              card_fetch_state: string
                            }
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
                                }[]
                              }
                            }
                            tweet?: {
                              rest_id: string
                              has_birdwatch_notes: boolean
                              core: {
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
                              unmention_data: {}
                              unified_card?: {
                                card_fetch_state: string
                              }
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
                                  timestamps?: unknown[]
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
                                limited_actions?: string
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
                                        want_retweets: boolean
                                        withheld_in_countries: unknown[]
                                      }
                                    }
                                  }[]
                                }
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
                                tweet: {
                                  rest_id: string
                                }
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
                      }
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
                    limited_actions?: string
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
                    in_reply_to_screen_name?: string
                    in_reply_to_status_id_str?: string
                    in_reply_to_user_id_str?: string
                    scopes?: {
                      followers: boolean
                    }
                  }
                  quick_promote_eligibility?: {
                    eligibility: string
                  }
                  tweet?: {
                    rest_id: string
                    has_birdwatch_notes: boolean
                    core: {
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
                            profile_image_url_https: string
                            profile_interstitial_type: string
                            screen_name: string
                            statuses_count: number
                            translator_type: string
                            verified: boolean
                            want_retweets: boolean
                            withheld_in_countries: unknown[]
                            profile_banner_url?: string
                            url?: string
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
                          source_status_id_str?: string
                          source_user_id_str?: string
                          ext_alt_text?: string
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
                        }[]
                      }
                      favorite_count: number
                      favorited: boolean
                      full_text: string
                      is_quote_status: boolean
                      lang: string
                      limited_actions?: string
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
                          source_status_id_str?: string
                          source_user_id_str?: string
                          ext_alt_text?: string
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
                        }[]
                      }
                      possibly_sensitive?: boolean
                      possibly_sensitive_editable?: boolean
                      retweeted_status_result?: {
                        result: {
                          __typename: string
                          tweet: {
                            rest_id: string
                            has_birdwatch_notes: boolean
                            core: {
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
                                timestamps?: unknown[]
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
                              is_quote_status: boolean
                              lang: string
                              limited_actions: string
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
                                user_refs_results: unknown[]
                              }
                            }
                            unified_card?: {
                              card_fetch_state: string
                            }
                            edit_perspective?: {
                              favorited: boolean
                              retweeted: boolean
                            }
                            quoted_status_result?: {
                              result: {
                                __typename: string
                                tweet: {
                                  rest_id: string
                                  has_birdwatch_notes: boolean
                                  core: {
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
                                        }
                                      }[]
                                    }
                                  }
                                  unmention_data: {}
                                  unified_card: {
                                    card_fetch_state: string
                                  }
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
                                tweetInterstitial: {
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
                          }
                          limitedActionResults: {
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
                    }
                    quick_promote_eligibility: {
                      eligibility: string
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
                            is_blue_verified: boolean
                            profile_image_shape: string
                            legacy: {
                              blocking: boolean
                              muting?: boolean
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
                          }
                        }[]
                      }
                    }
                    unified_card?: {
                      card_fetch_state: string
                    }
                    quoted_status_result?: {
                      result: {
                        __typename: string
                        rest_id?: string
                        has_birdwatch_notes?: boolean
                        core?: {
                          user_results: {
                            result: {
                              __typename: string
                              id: string
                              rest_id: string
                              affiliates_highlighted_label: {
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
                                        verified: boolean
                                        want_retweets: boolean
                                        withheld_in_countries: unknown[]
                                      }
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
                                        verified: boolean
                                        want_retweets: boolean
                                        withheld_in_countries: unknown[]
                                      }
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
                        tweet?: {
                          rest_id: string
                          has_birdwatch_notes: boolean
                          core: {
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
                            state: string
                            count?: string
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
                              timestamps?: unknown[]
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
                            limited_actions?: string
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
                          edit_perspective?: {
                            favorited: boolean
                            retweeted: boolean
                          }
                          quotedRefResult?: {
                            result: {
                              __typename: string
                              rest_id: string
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
                          unified_card?: {
                            card_fetch_state: string
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
                        unified_card?: {
                          card_fetch_state: string
                        }
                        edit_perspective?: {
                          favorited: boolean
                          retweeted: boolean
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
                                urls: unknown[]
                                user_mentions: unknown[]
                              }
                            }
                          }
                        }
                        quotedRefResult?: {
                          result: {
                            __typename: string
                            rest_id: string
                          }
                        }
                      }
                    }
                    edit_perspective?: {
                      favorited: boolean
                      retweeted: boolean
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
                        }
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
                          user_mentions: unknown[]
                          timestamps?: unknown[]
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
                  unified_card?: {
                    card_fetch_state: string
                  }
                  quoted_status_result?: {
                    result?: {
                      __typename: string
                      tweet?: {
                        rest_id: string
                        has_birdwatch_notes: boolean
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
                                muting?: boolean
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
                        unified_card?: {
                          card_fetch_state: string
                        }
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
                              ext_alt_text?: string
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
                                      professional: {
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
                              source_status_id_str?: string
                              source_user_id_str?: string
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
                              ext_alt_text?: string
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
                                      professional: {
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
                          limited_actions?: string
                          quoted_status_id_str?: string
                          quoted_status_permalink?: {
                            url: string
                            expanded: string
                            display: string
                          }
                          supplemental_language?: string
                        }
                        edit_perspective?: {
                          favorited: boolean
                          retweeted: boolean
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
                                  profile_image_url_https: string
                                  profile_interstitial_type: string
                                  screen_name: string
                                  statuses_count: number
                                  translator_type: string
                                  verified: boolean
                                  want_retweets: boolean
                                  withheld_in_countries: unknown[]
                                  blocking?: boolean
                                  profile_banner_url?: string
                                  url?: string
                                  verified_type?: string
                                }
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
                                urls: unknown[]
                                user_mentions: unknown[]
                              }
                            }
                          }
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
                      has_birdwatch_notes?: boolean
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
                      unified_card?: {
                        card_fetch_state: string
                      }
                      edit_perspective?: {
                        favorited: boolean
                        retweeted: boolean
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
                                category: unknown[]
                              }
                            }
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
                          is_blue_verified?: boolean
                          profile_image_shape?: string
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
                            protected?: boolean
                            following?: boolean
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
                        }
                      }[]
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
                  edit_perspective?: {
                    favorited: boolean
                    retweeted: boolean
                  }
                  previous_counts?: {
                    bookmark_count: number
                    favorite_count: number
                    quote_count: number
                    reply_count: number
                    retweet_count: number
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
              tweetDisplayType?: string
              hasModeratedReplies?: boolean
              value?: string
              cursorType?: string
              displayTreatment?: {
                actionText: string
                labelText?: string
              }
            }
            items?: {
              entryId: string
              item: {
                itemContent: {
                  itemType: string
                  __typename: string
                  tweet_results?: {
                    result: {
                      __typename: string
                      rest_id?: string
                      has_birdwatch_notes?: boolean
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
                                          legacy?: {
                                            screen_name: string
                                          }
                                          rest_id?: string
                                          reason?: string
                                          message?: string
                                        }
                                      }
                                    }
                                  }[]
                                }
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
                              verified: boolean
                              want_retweets: boolean
                              withheld_in_countries: unknown[]
                              url?: string
                              verified_type?: string
                              following?: boolean
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
                            has_nft_avatar?: boolean
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
                              title?: string
                              description?: string
                              embeddable?: boolean
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
                            sensitive_media_warning?: {
                              adult_content: boolean
                            }
                          }[]
                        }
                        favorite_count: number
                        favorited: boolean
                        full_text: string
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
                              title?: string
                              description?: string
                              embeddable?: boolean
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
                            sensitive_media_warning?: {
                              adult_content: boolean
                            }
                          }[]
                        }
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
                        limited_actions?: string
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
                        supplemental_language?: string
                      }
                      quick_promote_eligibility?: {
                        eligibility: string
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
                              is_blue_verified?: boolean
                              profile_image_shape?: string
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
                                following?: boolean
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
                            }
                          }[]
                        }
                      }
                      unified_card?: {
                        card_fetch_state: string
                      }
                      tweet?: {
                        rest_id: string
                        has_birdwatch_notes: boolean
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
                                muting?: boolean
                                followed_by?: boolean
                                following?: boolean
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
                              has_nft_avatar?: boolean
                            }
                          }
                        }
                        unmention_data: {
                          hydrate?: {
                            unmentioned_users_results: {
                              rest_id: string
                            }[]
                          }
                        }
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
                              ext_alt_text?: string
                            }[]
                          }
                          favorite_count: number
                          favorited: boolean
                          full_text: string
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
                              ext_alt_text?: string
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
                          limited_actions?: string
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
                              tweet: {
                                rest_id: string
                                has_birdwatch_notes: boolean
                                core: {
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
                                note_tweet: {
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
                                        urls: unknown[]
                                        user_mentions: unknown[]
                                      }
                                    }
                                  }
                                }
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
                                    }[]
                                  }
                                  favorite_count: number
                                  favorited: boolean
                                  full_text: string
                                  is_quote_status: boolean
                                  lang: string
                                  limited_actions: string
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
                              limitedActionResults: {
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
                        }
                        quick_promote_eligibility: {
                          eligibility: string
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
                              }
                            }[]
                          }
                        }
                        unified_card?: {
                          card_fetch_state: string
                        }
                        quoted_status_result?: {
                          result: {
                            __typename: string
                            tweet?: {
                              rest_id: string
                              has_birdwatch_notes: boolean
                              core: {
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
                              edit_perspective?: {
                                favorited: boolean
                                retweeted: boolean
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
                                    }
                                  }[]
                                }
                              }
                              unified_card?: {
                                card_fetch_state: string
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
                                  }
                                }
                              }
                              quotedRefResult?: {
                                result: {
                                  __typename: string
                                  rest_id: string
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
                            rest_id?: string
                            has_birdwatch_notes?: boolean
                            core?: {
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
                            unmention_data?: {}
                            edit_control?: {
                              edit_tweet_ids: string[]
                              editable_until_msecs: string
                              is_edit_eligible: boolean
                              edits_remaining: string
                            }
                            is_translatable?: boolean
                            views?: {
                              state: string
                              count?: string
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
                                timestamps?: unknown[]
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
                              in_reply_to_screen_name?: string
                              in_reply_to_status_id_str?: string
                              in_reply_to_user_id_str?: string
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
                        edit_perspective?: {
                          favorited: boolean
                          retweeted: boolean
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
                      quoted_status_result?: {
                        result?: {
                          __typename: string
                          rest_id?: string
                          has_birdwatch_notes?: boolean
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
                                additional_media_info?: {
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
                                    bitrate?: number
                                    content_type: string
                                    url: string
                                  }[]
                                }
                                ext_alt_text?: string
                                source_status_id_str?: string
                                source_user_id_str?: string
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
                                additional_media_info?: {
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
                            limited_actions?: string
                          }
                          tweet?: {
                            rest_id: string
                            has_birdwatch_notes: boolean
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
                                    want_retweets?: boolean
                                    withheld_in_countries: unknown[]
                                    verified_type?: string
                                    following?: boolean
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
                                          professional?: {
                                            rest_id: string
                                            professional_type: string
                                            category: unknown[]
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
                                          professional?: {
                                            rest_id: string
                                            professional_type: string
                                            category: unknown[]
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
                              limited_actions?: string
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
                                    user_mentions: unknown[]
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
                                    is_blue_verified: boolean
                                    profile_image_shape: string
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
                          quotedRefResult?: {
                            result?: {
                              __typename: string
                              rest_id?: string
                              tweet?: {
                                rest_id: string
                              }
                            }
                          }
                          unified_card?: {
                            card_fetch_state: string
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
                          previous_counts?: {
                            bookmark_count: number
                            favorite_count: number
                            quote_count: number
                            reply_count: number
                            retweet_count: number
                          }
                          edit_perspective?: {
                            favorited: boolean
                            retweeted: boolean
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
                                  string_value?: string
                                  type: string
                                  boolean_value?: boolean
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
                                  is_blue_verified?: boolean
                                  profile_image_shape?: string
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
                                }
                              }[]
                            }
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
                      edit_perspective?: {
                        favorited: boolean
                        retweeted: boolean
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
                    }
                  }
                  tweetDisplayType?: string
                  value?: string
                  cursorType?: string
                  displayTreatment?: {
                    actionText: string
                  }
                  promotedMetadata?: {
                    advertiser_results: {
                      result?: {
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
                          verified: boolean
                          want_retweets: boolean
                          withheld_in_countries: unknown[]
                          url?: string
                          verified_type?: string
                          following?: boolean
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
                  socialContext?: {
                    type: string
                    contextType: string
                    text: string
                  }
                  tombstoneDisplayType?: string
                  tombstoneInfo?: {
                    text: string
                    richText: {
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
                }
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
                }
                feedbackInfo?: {
                  clientEventInfo: {
                    details: {
                      conversationDetails: {
                        conversationSection: string
                      }
                    }
                  }
                  feedbackKeys: unknown[]
                }
              }
            }[]
            displayType?: string
            clientEventInfo?: {
              details: {
                conversationDetails: {
                  conversationSection: string
                }
              }
              component?: string
            }
            header?: {
              displayType: string
              text: string
              socialContext: {
                type: string
                contextType: string
                text: string
              }
              sticky: boolean
            }
          }
        }[]
        direction?: string
      }[]
      metadata?: {
        reader_mode_config: {
          is_reader_mode_available: boolean
        }
      }
    }
  }
}
