/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL GET TweetResultByRestId 成功レスポンスモデル */

export interface GraphQLGetTweetResultByRestIdSuccessResponse {
  data: {
    tweetResult: {
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
              is_blue_verified: boolean
              profile_image_shape: string
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
                withheld_in_countries: unknown[]
                profile_banner_url?: string
                url?: string
                verified_type?: string
                can_dm?: boolean
                can_media_tag?: boolean
                want_retweets?: boolean
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
              has_graduated_access?: boolean
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
                      is_blue_verified: boolean
                      profile_image_shape: string
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
                title?: string
                description?: string
                embeddable?: boolean
                call_to_actions?: {
                  visit_site: {
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
                      is_blue_verified: boolean
                      profile_image_shape: string
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
                title?: string
                description?: string
                embeddable?: boolean
                call_to_actions?: {
                  visit_site: {
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
              ext_alt_text?: string
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
          quoted_status_id_str?: string
          quoted_status_permalink?: {
            url: string
            expanded: string
            display: string
          }
          in_reply_to_screen_name?: string
          in_reply_to_status_id_str?: string
          in_reply_to_user_id_str?: string
          retweeted_status_result?: {
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
                    is_blue_verified: boolean
                    profile_image_shape: string
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
          scopes?: {
            followers: boolean
          }
        }
        unified_card?: {
          card_fetch_state: string
        }
        quoted_status_result?: {
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
                  is_blue_verified: boolean
                  profile_image_shape: string
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
            quotedRefResult?: {
              result?: {
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
                  additional_media_info?: {
                    monetizable: boolean
                    source_user?: {
                      user_results: {
                        result: {
                          __typename: string
                          id: string
                          rest_id: string
                          affiliates_highlighted_label: {}
                          is_blue_verified: boolean
                          profile_image_shape: string
                          legacy: {
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
                          is_blue_verified: boolean
                          profile_image_shape: string
                          legacy: {
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
                    is_blue_verified: boolean
                    profile_image_shape: string
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
                      withheld_in_countries: unknown[]
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
            birdwatch_pivot?: {
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
                richtext_tags: unknown[]
              }
              media: {
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
                is_blue_verified: boolean
                profile_image_shape: string
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
            }[]
          }
        }
        has_birdwatch_notes?: boolean
        birdwatch_pivot?: {
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
        reason?: string
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
                additional_media_info: {
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
                  focus_rects: unknown[]
                }
                video_info: {
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
                additional_media_info: {
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
                  focus_rects: unknown[]
                }
                video_info: {
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
  }
}
