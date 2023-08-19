/* eslint-disable @typescript-eslint/ban-types */

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
          followed_by?: boolean
          verified_type?: string
          needs_phone_verification?: boolean
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
      media?: {
        display_url: string
        expanded_url: string
        id_str: string
        indices: number[]
        media_url_https: string
        source_status_id_str?: string
        source_user_id_str?: string
        type: string
        url: string
        features: {
          large?: {
            faces: {
              x: number
              y: number
              h: number
              w: number
            }[]
          }
          medium?: {
            faces: {
              x: number
              y: number
              h: number
              w: number
            }[]
          }
          small?: {
            faces: {
              x: number
              y: number
              h: number
              w: number
            }[]
          }
          orig?: {
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
          focus_rects?: {
            x: number
            y: number
            w: number
            h: number
          }[]
        }
      }[]
      user_mentions: {
        id_str: string
        name: string
        screen_name: string
        indices: number[]
      }[]
      urls: {
        display_url: string
        expanded_url: string
        url: string
        indices: number[]
      }[]
      hashtags: {
        indices: number[]
        text: string
      }[]
      symbols: {
        indices: number[]
        text: string
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
          call_to_actions?: {
            watch_now: {
              url: string
            }
          }
          embeddable?: boolean
        }
        mediaStats?: {
          viewCount: number
        }
        ext_media_availability: {
          status: string
        }
        features: {
          large?: {
            faces: {
              x: number
              y: number
              h: number
              w: number
            }[]
          }
          medium?: {
            faces: {
              x: number
              y: number
              h: number
              w: number
            }[]
          }
          small?: {
            faces: {
              x: number
              y: number
              h: number
              w: number
            }[]
          }
          orig?: {
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
          focus_rects?: {
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
        core: {
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
                            reason?: string
                            legacy?: {
                              screen_name: string
                            }
                            rest_id?: string
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
          }
        }
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
            media?: {
              display_url: string
              expanded_url: string
              id_str: string
              indices: number[]
              media_url_https: string
              type: string
              url: string
              features: {
                large?: {
                  faces: {
                    x: number
                    y: number
                    h: number
                    w: number
                  }[]
                }
                medium?: {
                  faces: {
                    x: number
                    y: number
                    h: number
                    w: number
                  }[]
                }
                small?: {
                  faces: {
                    x: number
                    y: number
                    h: number
                    w: number
                  }[]
                }
                orig?: {
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
                focus_rects?: {
                  x: number
                  y: number
                  w: number
                  h: number
                }[]
              }
              source_status_id_str?: string
              source_user_id_str?: string
            }[]
            user_mentions: {
              id_str: string
              name: string
              screen_name: string
              indices: number[]
            }[]
            urls: {
              display_url: string
              expanded_url: string
              url: string
              indices: number[]
            }[]
            hashtags: {
              indices: number[]
              text: string
            }[]
            symbols: {
              indices: number[]
              text: string
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
                large?: {
                  faces: {
                    x: number
                    y: number
                    h: number
                    w: number
                  }[]
                }
                medium?: {
                  faces: {
                    x: number
                    y: number
                    h: number
                    w: number
                  }[]
                }
                small?: {
                  faces: {
                    x: number
                    y: number
                    h: number
                    w: number
                  }[]
                }
                orig?: {
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
                focus_rects?: {
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
                      super_follow_eligible?: boolean
                    }
                  }
                }
                title?: string
                description?: string
                call_to_actions?: {
                  watch_now: {
                    url: string
                  }
                }
                embeddable?: boolean
              }
              mediaStats?: {
                viewCount: number
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
                  has_nft_avatar?: boolean
                }
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
                media?: {
                  display_url: string
                  expanded_url: string
                  id_str: string
                  indices: number[]
                  media_url_https: string
                  type: string
                  url: string
                  features: {
                    large?: {
                      faces: {
                        x: number
                        y: number
                        h: number
                        w: number
                      }[]
                    }
                    medium?: {
                      faces: {
                        x: number
                        y: number
                        h: number
                        w: number
                      }[]
                    }
                    small?: {
                      faces: {
                        x: number
                        y: number
                        h: number
                        w: number
                      }[]
                    }
                    orig?: {
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
                    focus_rects?: {
                      x: number
                      y: number
                      w: number
                      h: number
                    }[]
                  }
                }[]
                user_mentions: {
                  id_str: string
                  name: string
                  screen_name: string
                  indices: number[]
                }[]
                urls: {
                  display_url: string
                  expanded_url: string
                  url: string
                  indices: number[]
                }[]
                hashtags: {
                  indices: number[]
                  text: string
                }[]
                symbols: unknown[]
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
                    large?: {
                      faces: {
                        x: number
                        y: number
                        h: number
                        w: number
                      }[]
                    }
                    medium?: {
                      faces: {
                        x: number
                        y: number
                        h: number
                        w: number
                      }[]
                    }
                    small?: {
                      faces: {
                        x: number
                        y: number
                        h: number
                        w: number
                      }[]
                    }
                    orig?: {
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
                    focus_rects?: {
                      x: number
                      y: number
                      w: number
                      h: number
                    }[]
                  }
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
                  mediaStats?: {
                    viewCount: number
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
            quotedRefResult?: {
              result: {
                __typename: string
                rest_id: string
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
                      url?: string
                      verified: boolean
                      want_retweets: boolean
                      withheld_in_countries: unknown[]
                    }
                    professional?: {
                      rest_id: string
                      professional_type: string
                      category: unknown[]
                    }
                    super_follow_eligible?: boolean
                  }
                }
              }
              edit_control: {
                edit_tweet_ids: string[]
                editable_until_msecs: string
                is_edit_eligible: boolean
                edits_remaining: string
              }
              edit_perspective: {
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
                  media: {
                    display_url: string
                    expanded_url: string
                    id_str: string
                    indices: number[]
                    media_url_https: string
                    type: string
                    url: string
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
                  user_mentions: unknown[]
                  urls: {
                    display_url: string
                    expanded_url: string
                    url: string
                    indices: number[]
                  }[]
                  hashtags: {
                    indices: number[]
                    text: string
                  }[]
                  symbols: unknown[]
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
            note_tweet?: {
              is_expandable: boolean
              note_tweet_results: {
                result: {
                  id: string
                  text: string
                  entity_set: {
                    user_mentions: {
                      id_str: string
                      name: string
                      screen_name: string
                      indices: number[]
                    }[]
                    urls: {
                      display_url: string
                      expanded_url: string
                      url: string
                      indices: number[]
                    }[]
                    hashtags: {
                      indices: number[]
                      text: string
                    }[]
                    symbols: unknown[]
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
                    string_value?: string
                    type: string
                    image_value?: {
                      height: number
                      width: number
                      url: string
                      alt?: string
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
                user_mentions: {
                  id_str: string
                  name: string
                  screen_name: string
                  indices: number[]
                }[]
                urls: {
                  display_url: string
                  expanded_url: string
                  url: string
                  indices: number[]
                }[]
                hashtags: {
                  indices: number[]
                  text: string
                }[]
                symbols: {
                  indices: number[]
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
        previous_counts?: {
          bookmark_count: number
          favorite_count: number
          quote_count: number
          reply_count: number
          retweet_count: number
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
    place?: {
      attributes: {}
      bounding_box: {
        coordinates: number[][][]
        type: string
      }
      contained_within: unknown[]
      country: string
      country_code: string
      full_name: string
      name: string
      id: string
      place_type: string
      url: string
    }
    coordinates?: {
      type: string
      coordinates: number[]
    }
    geo?: {
      type: string
      coordinates: number[]
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
            verified_type?: string
            want_retweets: boolean
            withheld_in_countries: unknown[]
            followed_by?: boolean
            following?: boolean
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
          unavailable_message?: {
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
          reason?: string
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
              blocking?: boolean
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
            has_nft_avatar?: boolean
          }
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
          media?: {
            display_url: string
            expanded_url: string
            id_str: string
            indices: number[]
            media_url_https: string
            type: string
            url: string
            features: {
              large?: {
                faces: {
                  x: number
                  y: number
                  h: number
                  w: number
                }[]
              }
              medium?: {
                faces: {
                  x: number
                  y: number
                  h: number
                  w: number
                }[]
              }
              small?: {
                faces: {
                  x: number
                  y: number
                  h: number
                  w: number
                }[]
              }
              orig?: {
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
              focus_rects?: {
                x: number
                y: number
                w: number
                h: number
              }[]
            }
            source_status_id_str?: string
            source_user_id_str?: string
          }[]
          user_mentions: {
            id_str: string
            name: string
            screen_name: string
            indices: number[]
          }[]
          urls: {
            display_url: string
            expanded_url: string
            url: string
            indices: number[]
          }[]
          hashtags: {
            indices: number[]
            text: string
          }[]
          symbols: unknown[]
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
              large?: {
                faces: {
                  x: number
                  y: number
                  h: number
                  w: number
                }[]
              }
              medium?: {
                faces: {
                  x: number
                  y: number
                  h: number
                  w: number
                }[]
              }
              small?: {
                faces: {
                  x: number
                  y: number
                  h: number
                  w: number
                }[]
              }
              orig?: {
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
              focus_rects?: {
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
              title?: string
              description?: string
              embeddable?: boolean
            }
            mediaStats?: {
              viewCount: number
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
              user_mentions: {
                id_str: string
                name: string
                screen_name: string
                indices: number[]
              }[]
              urls: {
                display_url: string
                expanded_url: string
                url: string
                indices: number[]
              }[]
              hashtags: unknown[]
              symbols: unknown[]
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
          conversation_id_str: string
          display_text_range: number[]
          entities: {
            user_mentions: unknown[]
            urls: {
              display_url: string
              expanded_url: string
              url: string
              indices: number[]
            }[]
            hashtags: unknown[]
            symbols: unknown[]
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
          super_follow_eligible?: boolean
        }
      }
    }
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
        user_mentions: {
          id_str: string
          name: string
          screen_name: string
          indices: number[]
        }[]
        urls: {
          display_url: string
          expanded_url: string
          url: string
          indices: number[]
        }[]
        hashtags: {
          indices: number[]
          text: string
        }[]
        symbols: unknown[]
        media?: {
          display_url: string
          expanded_url: string
          id_str: string
          indices: number[]
          media_url_https: string
          type: string
          url: string
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
      retweeted_status_result?: {
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
              }
            }
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
                media?: {
                  display_url: string
                  expanded_url: string
                  id_str: string
                  indices: number[]
                  media_url_https: string
                  type: string
                  url: string
                  features: {
                    large?: {
                      faces: {
                        x: number
                        y: number
                        h: number
                        w: number
                      }[]
                    }
                    medium?: {
                      faces: {
                        x: number
                        y: number
                        h: number
                        w: number
                      }[]
                    }
                    small?: {
                      faces: {
                        x: number
                        y: number
                        h: number
                        w: number
                      }[]
                    }
                    orig?: {
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
                    focus_rects?: {
                      x: number
                      y: number
                      w: number
                      h: number
                    }[]
                  }
                }[]
                user_mentions: {
                  id_str: string
                  name: string
                  screen_name: string
                  indices: number[]
                }[]
                urls: {
                  display_url: string
                  expanded_url: string
                  url: string
                  indices: number[]
                }[]
                hashtags: {
                  indices: number[]
                  text: string
                }[]
                symbols: unknown[]
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
                    large?: {
                      faces: {
                        x: number
                        y: number
                        h: number
                        w: number
                      }[]
                    }
                    medium?: {
                      faces: {
                        x: number
                        y: number
                        h: number
                        w: number
                      }[]
                    }
                    small?: {
                      faces: {
                        x: number
                        y: number
                        h: number
                        w: number
                      }[]
                    }
                    orig?: {
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
                    focus_rects?: {
                      x: number
                      y: number
                      w: number
                      h: number
                    }[]
                  }
                  additional_media_info?: {
                    monetizable: boolean
                  }
                  mediaStats?: {
                    viewCount: number
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
            note_tweet?: {
              is_expandable: boolean
              note_tweet_results: {
                result: {
                  id: string
                  text: string
                  entity_set: {
                    user_mentions: unknown[]
                    urls: {
                      display_url: string
                      expanded_url: string
                      url: string
                      indices: number[]
                    }[]
                    hashtags: unknown[]
                    symbols: unknown[]
                  }
                  richtext: {
                    richtext_tags: {
                      from_index: number
                      to_index: number
                      richtext_types: string[]
                    }[]
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
          }
          limitedActionResults: {
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
        }
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
        }[]
      }
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
  quick_promote_eligibility?: {
    eligibility: string
  }
  note_tweet?: {
    is_expandable?: boolean
    note_tweet_results: {
      result: {
        id: string
        text: string
        entity_set: {
          user_mentions: unknown[]
          urls: {
            display_url: string
            expanded_url: string
            url: string
            indices: number[]
          }[]
          hashtags: {
            indices: number[]
            text: string
          }[]
          symbols: unknown[]
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
  voiceInfo?: {}
}
