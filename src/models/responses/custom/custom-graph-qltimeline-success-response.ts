/* eslint-disable @typescript-eslint/no-empty-object-type */

/** ホームタイムラインモデル */

export interface CustomGraphQLTimelineSuccessResponse {
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
                tweet_results?: {
                  result?: {
                    __typename: string
                    rest_id?: string
                    core?: {
                      user_results: {
                        result?: {
                          __typename: string
                          id?: string
                          rest_id?: string
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
                          has_graduated_access?: boolean
                          is_blue_verified?: boolean
                          profile_image_shape?: string
                          legacy?: {
                            followed_by?: boolean
                            following?: boolean
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
                            url?: string
                            verified_type?: string
                            protected?: boolean
                            notifications?: boolean
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
                          super_follow_eligible?: boolean
                          message?: string
                          reason?: string
                          has_nft_avatar?: boolean
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
                        media?: {
                          display_url: string
                          expanded_url: string
                          id_str: string
                          indices: number[]
                          media_key: string
                          media_url_https: string
                          source_status_id_str?: string
                          source_user_id_str?: string
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
                                    blocking?: boolean
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
                                  super_follow_eligible?: boolean
                                  has_nft_avatar?: boolean
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
                          sensitive_media_warning?: {
                            adult_content?: boolean
                            other?: boolean
                            graphic_violence?: boolean
                          }
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
                      extended_entities?: {
                        media: {
                          display_url: string
                          expanded_url: string
                          id_str: string
                          indices: number[]
                          media_key: string
                          media_url_https: string
                          source_status_id_str?: string
                          source_user_id_str?: string
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
                                    blocking?: boolean
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
                                  super_follow_eligible?: boolean
                                  has_nft_avatar?: boolean
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
                          sensitive_media_warning?: {
                            adult_content?: boolean
                            other?: boolean
                            graphic_violence?: boolean
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
                                  url?: string
                                  verified: boolean
                                  want_retweets: boolean
                                  withheld_in_countries: string[]
                                  verified_type?: string
                                  following?: boolean
                                  followed_by?: boolean
                                  protected?: boolean
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
                                super_follow_eligible?: boolean
                                has_nft_avatar?: boolean
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
                                sensitive_media_warning?: {
                                  adult_content?: boolean
                                  other?: boolean
                                  graphic_violence?: boolean
                                }
                                source_status_id_str?: string
                                source_user_id_str?: string
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
                                sensitive_media_warning?: {
                                  adult_content?: boolean
                                  other?: boolean
                                  graphic_violence?: boolean
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
                                    super_follow_eligible?: boolean
                                    has_nft_avatar?: boolean
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
                                    additional_media_info?: {
                                      monetizable: boolean
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
                                              blocking?: boolean
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
                                      allow_download: boolean
                                    }
                                    ext_alt_text?: string
                                    source_status_id_str?: string
                                    source_user_id_str?: string
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
                                      call_to_actions?: {
                                        visit_site?: {
                                          url: string
                                        }
                                        watch_now?: {
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
                                              blocking?: boolean
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
                                      allow_download: boolean
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
                                in_reply_to_screen_name?: string
                                in_reply_to_status_id_str?: string
                                in_reply_to_user_id_str?: string
                                limited_actions?: string
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
                                      ext_alt_text?: string
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
                                      ext_alt_text?: string
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
                                quotedRefResult?: {
                                  result?: {
                                    __typename: string
                                    tweet?: {
                                      rest_id: string
                                    }
                                    rest_id?: string
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
                                        symbols: unknown[]
                                        timestamps: unknown[]
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
                                        following?: boolean
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
                                      message?: string
                                      reason?: string
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
                                      inline_media: unknown[]
                                    }
                                  }
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
                              previous_counts?: {
                                bookmark_count: number
                                favorite_count: number
                                quote_count: number
                                reply_count: number
                                retweet_count: number
                              }
                            }
                          }
                          unified_card?: {
                            card_fetch_state: string
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
                                  is_blue_verified?: boolean
                                  profile_image_shape?: string
                                  legacy?: {
                                    following?: boolean
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
                          edit_perspective?: {
                            favorited: boolean
                            retweeted: boolean
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
                                    category: unknown[]
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
                            edit_perspective?: {
                              favorited: boolean
                              retweeted: boolean
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
                              limited_actions: string
                              possibly_sensitive?: boolean
                              possibly_sensitive_editable?: boolean
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
                      quoted_status_id_str?: string
                      quoted_status_permalink?: {
                        url: string
                        expanded: string
                        display: string
                      }
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
                      limited_actions?: string
                      in_reply_to_status_id_str?: string
                      coordinates?: {
                        type: string
                        coordinates: number[]
                      }
                      geo?: {
                        type: string
                        coordinates: number[]
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
                            profile_image_shape?: string
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
                              followed_by?: boolean
                              following?: boolean
                              verified_type?: string
                              protected?: boolean
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
                            has_nft_avatar?: boolean
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
                      views?: {
                        count?: string
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
                            result?: {
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
                                  }
                                }
                              }
                              title?: string
                              description?: string
                              embeddable?: boolean
                              call_to_actions?: {
                                watch_now: {
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
                            sensitive_media_warning?: {
                              other: boolean
                              adult_content?: boolean
                            }
                          }[]
                          symbols: unknown[]
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
                                  }
                                }
                              }
                              title?: string
                              description?: string
                              embeddable?: boolean
                              call_to_actions?: {
                                watch_now: {
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
                            sensitive_media_warning?: {
                              other: boolean
                              adult_content?: boolean
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
                        scopes?: {
                          followers: boolean
                        }
                        retweeted_status_result?: {
                          result: {
                            __typename: string
                            tweet?: {
                              rest_id: string
                              core: {
                                user_results: {
                                  result?: {
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
                                      withheld_in_countries: unknown[]
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
                              views?: {
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
                                            }
                                          }
                                        }
                                      }
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
                                      allow_download: boolean
                                    }
                                    sensitive_media_warning?: {
                                      other: boolean
                                      adult_content?: boolean
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
                                              blocking?: boolean
                                            }
                                          }
                                        }
                                      }
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
                                      allow_download: boolean
                                    }
                                    sensitive_media_warning?: {
                                      other: boolean
                                      adult_content?: boolean
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
                                        timestamps?: unknown[]
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
                                    }
                                    edit_perspective?: {
                                      favorited: boolean
                                      retweeted: boolean
                                    }
                                    quotedRefResult?: {
                                      result?: {
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
                                    limited_actions?: string
                                  }
                                  edit_perspective?: {
                                    favorited: boolean
                                    retweeted: boolean
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
                                  unified_card?: {
                                    card_fetch_state: string
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
                                        profile_banner_url?: string
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
                            rest_id?: string
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
                            edit_perspective?: {
                              favorited: boolean
                              retweeted: boolean
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
                                }[]
                                symbols: unknown[]
                                timestamps?: unknown[]
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
                            }
                          }
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
                        in_reply_to_screen_name?: string
                        in_reply_to_user_id_str?: string
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
                                verified_type?: string
                                want_retweets: boolean
                                withheld_in_countries: unknown[]
                                following?: boolean
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
                                additional_media_info?: {
                                  monetizable: boolean
                                  title?: string
                                  description?: string
                                  call_to_actions?: {
                                    watch_now: {
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
                                allow_download_status?: {
                                  allow_download: boolean
                                }
                                additional_media_info?: {
                                  monetizable: boolean
                                  title?: string
                                  description?: string
                                  call_to_actions?: {
                                    watch_now: {
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
                                  additional_media_info?: {
                                    monetizable: boolean
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
                                  additional_media_info?: {
                                    monetizable: boolean
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
                              scopes?: {
                                followers: boolean
                              }
                              in_reply_to_screen_name?: string
                              in_reply_to_status_id_str?: string
                              in_reply_to_user_id_str?: string
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
                                      profile_banner_url?: string
                                      verified_type?: string
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
                            community_results?: {
                              result: {
                                __typename: string
                                id_str: string
                                name: string
                                description: string
                                created_at: number
                                default_theme?: string
                                custom_theme?: string
                                question?: string
                                actions: {
                                  delete_action_result: {
                                    __typename: string
                                    reason: string
                                  }
                                  join_action_result: {
                                    __typename: string
                                    reason: string
                                    message: string
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
                                  }
                                }
                                creator_results: {
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
                                    message?: string
                                    reason?: string
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
                                search_tags?: string[]
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
                          unified_card?: {
                            card_fetch_state: string
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
                                    blocking?: boolean
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
                          edit_perspective?: {
                            favorited: boolean
                            retweeted: boolean
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
                      unified_card?: {
                        card_fetch_state: string
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
                          name: string
                          description?: string
                          created_at: number
                          question?: string
                          search_tags?: string[]
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
                                following?: boolean
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
                          }
                          creator_results: {
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
                                following?: boolean
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
                              id?: string
                              rest_id?: string
                              affiliates_highlighted_label?: {
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
                          default_theme?: string
                          custom_theme?: string
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
                            search_tags?: string[]
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
                                  following?: boolean
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
                            }
                            creator_results: {
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
                                  following?: boolean
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
                                id?: string
                                rest_id?: string
                                affiliates_highlighted_label?: {
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
                            default_theme?: string
                            custom_theme?: string
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
                      edit_perspective?: {
                        favorited: boolean
                        retweeted: boolean
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
                                url?: string
                                verified: boolean
                                want_retweets: boolean
                                withheld_in_countries: string[]
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
                              super_follow_eligible?: boolean
                              has_nft_avatar?: boolean
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
                                        blocking?: boolean
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
                                        blocking?: boolean
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
                              source_status_id_str?: string
                              source_user_id_str?: string
                            }[]
                          }
                          possibly_sensitive?: boolean
                          possibly_sensitive_editable?: boolean
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
                                  withheld_in_countries: string[]
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
                          views?: {
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
                                allow_download_status?: {
                                  allow_download: boolean
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
                          edit_perspective?: {
                            favorited: boolean
                            retweeted: boolean
                          }
                          community_results?: {
                            result: {
                              __typename: string
                              id_str: string
                              name: string
                              description: string
                              created_at: number
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
                              creator_results: {
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
                              default_theme?: string
                              custom_theme?: string
                              question?: string
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
                                  following?: boolean
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
                                message?: string
                                reason?: string
                                has_nft_avatar?: boolean
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
                        unified_card?: {
                          card_fetch_state: string
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
                        edit_perspective?: {
                          favorited: boolean
                          retweeted: boolean
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
                            id?: string
                            rest_id?: string
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
                              verified_type?: string
                              following?: boolean
                              followed_by?: boolean
                              protected?: boolean
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
                            message?: string
                            reason?: string
                            super_follow_eligible?: boolean
                            has_nft_avatar?: boolean
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
                    previous_counts?: {
                      bookmark_count: number
                      favorite_count: number
                      quote_count: number
                      reply_count: number
                      retweet_count: number
                    }
                    unified_card?: {
                      card_fetch_state: string
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
                  }
                }
                tweetDisplayType?: string
                promotedMetadata?: {
                  advertiser_results: {
                    result?: {
                      __typename: string
                      id?: string
                      rest_id?: string
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
                                    reason: string
                                    message: string
                                  }
                                }
                              }
                            }[]
                          }
                        }
                      }
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
                        verified_type?: string
                        want_retweets: boolean
                        withheld_in_countries: unknown[]
                        url?: string
                        following?: boolean
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
                      message?: string
                      reason?: string
                      has_nft_avatar?: boolean
                      super_follow_eligible?: boolean
                    }
                  }
                  adMetadataContainer: {
                    renderLegacyWebsiteCard: boolean
                    unifiedCardOverride?: string
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
                    urlOverride?: string
                    urlOverrideType?: string
                  }
                  promotedTrendName?: string
                  promotedTrendQueryTerm?: string
                  promotedTrend?: {
                    rest_id: string
                  }
                }
                socialContext?: {
                  type: string
                  contextType?: string
                  text?: string
                  landingUrl?: {
                    url: string
                    urlType: string
                    urtEndpointOptions?: {
                      title: string
                      requestParams: {
                        key: string
                        value: string
                      }[]
                    }
                  }
                  topic?: {
                    description?: string
                    following: boolean
                    icon_url: string
                    id: string
                    topic_id: string
                    name: string
                    not_interested: boolean
                  }
                  functionalityType?: string
                }
                content?: {
                  contentType: string
                  headerText?: string
                  bodyText: string
                  primaryButtonAction: {
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
                  headerRichText?: {
                    text: string
                    entities: unknown[]
                  }
                  bodyRichText?: {
                    text: string
                    entities: unknown[]
                  }
                  headerImage?: {
                    imageVariants: {
                      url: string
                      width: number
                      height: number
                    }[]
                  }
                  optionalHeaderText?: string
                }
                impressionCallbacks?: {
                  endpoint: string
                }[]
              }
              feedbackInfo?: {
                feedbackKeys: string[]
              }
              clientEventInfo?: {
                component: string
                element?: string
                details?: {
                  timelinesDetails: {
                    injectionType: string
                    controllerData?: string
                    sourceData?: string
                  }
                }
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
                          followed_by?: boolean
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
                                followed_by?: boolean
                                following?: boolean
                                verified_type?: string
                                protected?: boolean
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
                              super_follow_eligible?: boolean
                              has_nft_avatar?: boolean
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
                                other: boolean
                                adult_content?: boolean
                              }
                            }[]
                            symbols: unknown[]
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
                                  bitrate?: number
                                  content_type: string
                                  url: string
                                }[]
                              }
                              ext_alt_text?: string
                              source_status_id_str?: string
                              source_user_id_str?: string
                              sensitive_media_warning?: {
                                other: boolean
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
                          limited_actions?: string
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
                                    following?: boolean
                                    verified_type?: string
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
                              quoted_status_id_str?: string
                              quoted_status_permalink?: {
                                url: string
                                expanded: string
                                display: string
                              }
                            }
                            unified_card?: {
                              card_fetch_state: string
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
                                      blocking?: boolean
                                      verified_type?: string
                                      following?: boolean
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
                            edit_perspective?: {
                              favorited: boolean
                              retweeted: boolean
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
                                    is_blue_verified: boolean
                                    profile_image_shape: string
                                    legacy: {
                                      following?: boolean
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
                                edit_tweet_ids: string[]
                                editable_until_msecs: string
                                is_edit_eligible: boolean
                                edits_remaining: string
                              }
                              edit_perspective?: {
                                favorited: boolean
                                retweeted: boolean
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
                              unified_card?: {
                                card_fetch_state: string
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
                                  blocking?: boolean
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
                              }
                            }[]
                          }
                        }
                        unified_card?: {
                          card_fetch_state: string
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
                        edit_perspective?: {
                          favorited: boolean
                          retweeted: boolean
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
                                is_blue_verified: boolean
                                profile_image_shape: string
                                legacy: {
                                  following?: boolean
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
                          edit_perspective?: {
                            favorited: boolean
                            retweeted: boolean
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
                          unified_card?: {
                            card_fetch_state: string
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
                                      features: {
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
                                quotedRefResult?: {}
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
                                    features: {
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
                                    features: {
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
                                  }[]
                                }
                              }
                              unified_card?: {
                                card_fetch_state: string
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
                                  boolean_value?: boolean
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
                    tweetDisplayType?: string
                    community_results?: {
                      result: {
                        __typename: string
                        id_str: string
                        name: string
                        description: string
                        created_at: number
                        default_theme: string
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
                              followed_by?: boolean
                              following?: boolean
                              muting?: boolean
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
                            super_follow_eligible?: boolean
                            message?: string
                            reason?: string
                            has_nft_avatar?: boolean
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
                        custom_theme?: string
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
              }
              footer?: {
                displayType: string
                text: string
                landingUrl: {
                  url: string
                  urlType: string
                }
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
            halfCoverDisplayType: string
            primaryText: {
              text: string
              entities: unknown[]
            }
            primaryCoverCta: {
              text: string
              ctaBehavior: {
                type: string
              }
              callbacks: {
                endpoint: string
              }[]
              clientEventInfo: {
                action: string
              }
              buttonStyle?: string
            }
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
              is_blue_verified: boolean
              profile_image_shape: string
              legacy: {
                following?: boolean
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
                protected?: boolean
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
              has_nft_avatar?: boolean
              super_follow_eligible?: boolean
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
                    tweet: {
                      rest_id: string
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
                              following?: boolean
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
                      edit_perspective?: {
                        favorited: boolean
                        retweeted: boolean
                      }
                    }
                    limitedActionResults: {
                      limited_actions: {
                        action: string
                      }[]
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
        }[]
        responseObjects?: {
          feedbackActions: {
            key: string
            value: {
              feedbackType: string
              prompt?: string
              confirmation?: string
              feedbackUrl?: string
              hasUndoAction: boolean
              childKeys?: string[]
              icon?: string
              clientEventInfo?: {
                action: string
                element: string
              }
              encodedFeedbackRequest?: string
              richBehavior?: {
                type: string
                topic: {
                  description?: string
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
        metadata: {
          scribeConfig: {
            page: string
          }
        }
      }
    }
  }
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
}
