/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET HomeTimeline 成功レスポンスモデル */

export interface GraphQLGetHomeTimelineSuccessResponse {
  data: {
    home: {
      home_timeline_urt?: {
        instructions: {
          entries?: {
            content: {
              __typename: string
              clientEventInfo?: {
                component: string
                details?: {
                  timelinesDetails: {
                    controllerData?: string
                    injectionType: string
                    sourceData?: string
                  }
                }
                element?: string
              }
              cursorType?: string
              entryType: string
              itemContent?: {
                __typename: string
                content?: {
                  bodyRichText?: {
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
                  bodyText: string
                  contentType: string
                  headerRichText?: {
                    entities: unknown[]
                    text: string
                  }
                  headerText: string
                  primaryButtonAction?: {
                    action: {
                      dismissOnClick: boolean
                      url: string
                      clientEventInfo?: {
                        action: string
                      }
                      onClickCallbacks?: {
                        endpoint: string
                      }[]
                    }
                    text: string
                  }
                }
                impressionCallbacks?: {
                  endpoint: string
                }[]
                itemType: string
                promotedMetadata?: {
                  adMetadataContainer: {
                    renderLegacyWebsiteCard: boolean
                    remove_promoted_attribution_for_preroll?: boolean
                    unifiedCardOverride?: string
                  }
                  advertiser_results: {
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
                        want_retweets: boolean
                        withheld_in_countries: unknown[]
                        verified_type?: string
                        followed_by?: boolean
                      }
                      parody_commentary_fan_label: string
                      profile_image_shape: string
                      rest_id: string
                      tipjar_settings: {
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
                  clickTrackingInfo?: {
                    urlParams: {
                      key: string
                      value: string
                    }[]
                    urlOverride?: string
                    urlOverrideType?: string
                  }
                  disclosureType: string
                  experimentValues: {
                    key: string
                    value: string
                  }[]
                  impressionId: string
                  impressionString: string
                  promotedTrend?: {
                    rest_id: string
                  }
                  promotedTrendDescription?: string
                  promotedTrendName?: string
                  promotedTrendQueryTerm?: string
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
                            want_retweets: boolean
                            withheld_in_countries: string[]
                            verified_type?: string
                            followed_by?: boolean
                            protected?: boolean
                            notifications?: boolean
                          }
                          parody_commentary_fan_label: string
                          profile_image_shape?: string
                          rest_id: string
                          tipjar_settings?: {
                            cash_app_handle?: string
                            is_enabled?: boolean
                            venmo_handle?: string
                            patreon_handle?: string
                            bitcoin_handle?: string
                            ethereum_handle?: string
                            gofundme_handle?: string
                          }
                          professional?: {
                            category: {
                              icon_name: string
                              id: number
                              name: string
                            }[]
                            professional_type?: string
                            rest_id: string
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
                              media_key?: string
                              grok_image_annotation?: {
                                prompt: string
                                upsampled_prompt: string
                              }
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
                                    withheld_in_countries: string[]
                                    verified_type?: string
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
                                  super_follow_eligible?: boolean
                                  tipjar_settings: {
                                    bitcoin_handle?: string
                                    is_enabled?: boolean
                                    venmo_handle?: string
                                    patreon_handle?: string
                                    ethereum_handle?: string
                                    bandcamp_handle?: string
                                    cash_app_handle?: string
                                    gofundme_handle?: string
                                    pay_pal_handle?: string
                                  }
                                }
                              }
                            }
                            description?: string
                            embeddable?: boolean
                            title?: string
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
                          allow_download_status?: {
                            allow_download?: boolean
                          }
                          source_status_id_str?: string
                          source_user_id_str?: string
                          ext_alt_text?: string
                          sensitive_media_warning?: {
                            graphic_violence?: boolean
                            other: boolean
                            adult_content?: boolean
                          }
                        }[]
                        symbols: {
                          indices: number[]
                          text: string
                        }[]
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
                              media_key?: string
                              grok_image_annotation?: {
                                prompt: string
                                upsampled_prompt: string
                              }
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
                                    withheld_in_countries: string[]
                                    verified_type?: string
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
                                  super_follow_eligible?: boolean
                                  tipjar_settings: {
                                    bitcoin_handle?: string
                                    is_enabled?: boolean
                                    venmo_handle?: string
                                    patreon_handle?: string
                                    ethereum_handle?: string
                                    bandcamp_handle?: string
                                    cash_app_handle?: string
                                    gofundme_handle?: string
                                    pay_pal_handle?: string
                                  }
                                }
                              }
                            }
                            description?: string
                            embeddable?: boolean
                            title?: string
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
                          allow_download_status?: {
                            allow_download?: boolean
                          }
                          source_status_id_str?: string
                          source_user_id_str?: string
                          ext_alt_text?: string
                          sensitive_media_warning?: {
                            graphic_violence?: boolean
                            other: boolean
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
                      scopes?: {
                        followers: boolean
                      }
                      user_id_str: string
                      quoted_status_id_str?: string
                      quoted_status_permalink?: {
                        display: string
                        expanded: string
                        url: string
                      }
                      retweeted_status_result?: {
                        result: {
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
                                  want_retweets: boolean
                                  withheld_in_countries: unknown[]
                                  verified_type?: string
                                  followed_by?: boolean
                                  protected?: boolean
                                }
                                parody_commentary_fan_label: string
                                profile_image_shape: string
                                rest_id: string
                                tipjar_settings: {
                                  is_enabled?: boolean
                                  bitcoin_handle?: string
                                  ethereum_handle?: string
                                  patreon_handle?: string
                                  venmo_handle?: string
                                  bandcamp_handle?: string
                                  cash_app_handle?: string
                                  gofundme_handle?: string
                                  pay_pal_handle?: string
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
                                    grok_image_annotation?: {
                                      prompt: string
                                      upsampled_prompt: string
                                    }
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
                                  call_to_actions?: {
                                    watch_now?: {
                                      url: string
                                    }
                                    visit_site?: {
                                      url: string
                                    }
                                  }
                                  description?: string
                                  embeddable?: boolean
                                  title?: string
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
                                  graphic_violence?: boolean
                                  other: boolean
                                  adult_content?: boolean
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
                                    grok_image_annotation?: {
                                      prompt: string
                                      upsampled_prompt: string
                                    }
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
                                  call_to_actions?: {
                                    watch_now?: {
                                      url: string
                                    }
                                    visit_site?: {
                                      url: string
                                    }
                                  }
                                  description?: string
                                  embeddable?: boolean
                                  title?: string
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
                                  graphic_violence?: boolean
                                  other: boolean
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
                                  timestamps?: {
                                    indices: number[]
                                    seconds: number
                                    text: string
                                  }[]
                                }
                                id: string
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
                                text: string
                              }
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
                                    result?: {
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
                                        verified_type?: string
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
                                      super_follow_eligible?: boolean
                                      tipjar_settings: {
                                        is_enabled?: boolean
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
                                      followed_by?: boolean
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
                                      bitcoin_handle?: string
                                      ethereum_handle?: string
                                      patreon_handle?: string
                                      cash_app_handle?: string
                                      venmo_handle?: string
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
                                              url?: string
                                              verified_type?: string
                                              blocking?: boolean
                                            }
                                            parody_commentary_fan_label: string
                                            profile_image_shape: string
                                            rest_id: string
                                            tipjar_settings: {
                                              is_enabled?: boolean
                                              patreon_handle?: string
                                              bitcoin_handle?: string
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
                                      description?: string
                                      embeddable?: boolean
                                      title?: string
                                    }
                                    source_status_id_str?: string
                                    source_user_id_str?: string
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
                                              url?: string
                                              verified_type?: string
                                              blocking?: boolean
                                            }
                                            parody_commentary_fan_label: string
                                            profile_image_shape: string
                                            rest_id: string
                                            tipjar_settings: {
                                              is_enabled?: boolean
                                              patreon_handle?: string
                                              bitcoin_handle?: string
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
                                      description?: string
                                      embeddable?: boolean
                                      title?: string
                                    }
                                    source_status_id_str?: string
                                    source_user_id_str?: string
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
                                quoted_status_id_str?: string
                                quoted_status_permalink?: {
                                  display: string
                                  expanded: string
                                  url: string
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
                              }
                              previous_counts?: {
                                bookmark_count: number
                                favorite_count: number
                                quote_count: number
                                reply_count: number
                                retweet_count: number
                              }
                              rest_id?: string
                              source?: string
                              unmention_data?: {}
                              views?: {
                                count?: string
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
                                      timestamps?: unknown[]
                                    }
                                    id: string
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
                                    text: string
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
                                      super_follow_eligible?: boolean
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
                                }
                                rest_id: string
                                source: string
                                unmention_data: {}
                                views: {
                                  count?: string
                                  state: string
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
                                        timestamps?: unknown[]
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
                                    blocking?: boolean
                                    protected?: boolean
                                    muting?: boolean
                                  }
                                  parody_commentary_fan_label?: string
                                  profile_image_shape?: string
                                  rest_id?: string
                                  tipjar_settings?: {
                                    bitcoin_handle?: string
                                    is_enabled?: boolean
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
                                  super_follow_eligible?: boolean
                                  message?: string
                                  reason?: string
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
                            titleDetail?: string
                          }
                          community_results?: {
                            result?: {
                              __typename: string
                              id_str: string
                              viewer_relationship: {
                                moderation_state: {
                                  __typename: string
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
                              possibly_sensitive?: boolean
                              possibly_sensitive_editable?: boolean
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
                      in_reply_to_screen_name?: string
                      in_reply_to_status_id_str?: string
                      in_reply_to_user_id_str?: string
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
                    card?: {
                      legacy?: {
                        binding_values: {
                          key: string
                          value: {
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
                              alt?: string
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
                              blocking?: boolean
                              protected?: boolean
                              followed_by?: boolean
                              muting?: boolean
                            }
                            parody_commentary_fan_label?: string
                            profile_image_shape?: string
                            rest_id?: string
                            tipjar_settings?: {
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
                            super_follow_eligible?: boolean
                            message?: string
                            reason?: string
                          }
                        }[]
                      }
                      rest_id: string
                    }
                    limitedActionResults?: {
                      limited_actions: {
                        action: string
                        prompt?: {
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
                      card?: {
                        legacy: {
                          binding_values: {
                            key: string
                            value: {
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
                                alt?: string
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
                                blocking?: boolean
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
                              verified_type?: string
                              followed_by?: boolean
                            }
                            parody_commentary_fan_label: string
                            profile_image_shape: string
                            rest_id: string
                            tipjar_settings?: {
                              is_enabled?: boolean
                              bitcoin_handle?: string
                              patreon_handle?: string
                              ethereum_handle?: string
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
                      is_translatable?: boolean
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
                          media?: {
                            additional_media_info?: {
                              monetizable: boolean
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
                            }
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
                        quote_count: number
                        reply_count: number
                        retweet_count: number
                        retweeted: boolean
                        scopes?: {
                          followers: boolean
                        }
                        user_id_str: string
                        extended_entities?: {
                          media: {
                            additional_media_info?: {
                              monetizable: boolean
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
                            }
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
                            source_status_id_str?: string
                            source_user_id_str?: string
                            ext_alt_text?: string
                          }[]
                        }
                        possibly_sensitive?: boolean
                        possibly_sensitive_editable?: boolean
                        retweeted_status_result?: {
                          result: {
                            __typename: string
                            limitedActionResults?: {
                              limited_actions: {
                                action: string
                                prompt?: {
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
                            tweet: {
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
                                      url?: string
                                      verified_type?: string
                                    }
                                    parody_commentary_fan_label: string
                                    profile_image_shape: string
                                    rest_id: string
                                    tipjar_settings: {
                                      is_enabled?: boolean
                                      bitcoin_handle?: string
                                      patreon_handle?: string
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
                                    ext_alt_text?: string
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
                                    ext_alt_text?: string
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
                                reply_count: number
                                retweet_count: number
                                retweeted: boolean
                                user_id_str: string
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
                                    in_reply_to_screen_name?: string
                                    in_reply_to_status_id_str?: string
                                    in_reply_to_user_id_str?: string
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
                                  rest_id?: string
                                  source?: string
                                  unmention_data?: {}
                                  views?: {
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
                                      possibly_sensitive?: boolean
                                      possibly_sensitive_editable?: boolean
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
                                    quotedRefResult?: {
                                      result: {
                                        __typename: string
                                        rest_id: string
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
                                  quotedRefResult?: {
                                    result: {
                                      __typename: string
                                      rest_id?: string
                                      tweet?: {
                                        rest_id: string
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
                                      timestamps?: unknown[]
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
                                      inline_media: unknown[]
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
                              previous_counts?: {
                                bookmark_count: number
                                favorite_count: number
                                quote_count: number
                                reply_count: number
                                retweet_count: number
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
                          }
                        }
                        quoted_status_id_str?: string
                        quoted_status_permalink?: {
                          display: string
                          expanded: string
                          url: string
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
                      }
                      rest_id: string
                      source: string
                      unmention_data: {}
                      views: {
                        count?: string
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
                              user_mentions: {
                                id_str: string
                                indices: number[]
                                name: string
                                screen_name: string
                              }[]
                              timestamps?: unknown[]
                            }
                            id: string
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
                            text: string
                          }
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
                                    blocking?: boolean
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
                                profile_image_shape: string
                                rest_id: string
                                tipjar_settings: {
                                  is_enabled?: boolean
                                  bitcoin_handle?: string
                                  patreon_handle?: string
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
                            rest_id: string
                            source: string
                            unmention_data: {}
                            views: {
                              count: string
                              state: string
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
                                  hashtags: {
                                    indices: number[]
                                    text: string
                                  }[]
                                  symbols: unknown[]
                                  urls: unknown[]
                                  user_mentions: unknown[]
                                }
                                id: string
                                richtext: {
                                  richtext_tags: unknown[]
                                }
                                text: string
                              }
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
                      grok_analysis_followups?: string[]
                      grok_share_attachment?: {
                        items: {
                          media_urls: unknown[]
                          message: string
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
                    }
                    author_community_relationship?: {
                      community_results: {
                        result?: {
                          __typename: string
                          actions: {
                            delete_action_result: {
                              __typename: string
                              reason: string
                            }
                            join_action_result: {
                              __typename: string
                              message?: string
                              reason?: string
                            }
                            leave_action_result: {
                              __typename: string
                              message?: string
                              reason?: string
                            }
                            pin_action_result: {
                              __typename: string
                            }
                          }
                          admin_results: {
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
                                url?: string
                                verified: boolean
                                want_retweets: boolean
                                withheld_in_countries: unknown[]
                                blocking?: boolean
                                protected?: boolean
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
                              super_follow_eligible?: boolean
                              tipjar_settings?: {
                                cash_app_handle?: string
                                is_enabled?: boolean
                                venmo_handle?: string
                                bitcoin_handle?: string
                                ethereum_handle?: string
                                gofundme_handle?: string
                                patreon_handle?: string
                              }
                              message?: string
                              reason?: string
                            }
                          }
                          created_at: number
                          creator_results: {
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
                                url?: string
                                verified: boolean
                                want_retweets: boolean
                                withheld_in_countries: unknown[]
                                blocking?: boolean
                                protected?: boolean
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
                              super_follow_eligible?: boolean
                              tipjar_settings?: {
                                cash_app_handle?: string
                                is_enabled?: boolean
                                venmo_handle?: string
                                bitcoin_handle?: string
                                ethereum_handle?: string
                                gofundme_handle?: string
                                patreon_handle?: string
                              }
                              message?: string
                              reason?: string
                            }
                          }
                          custom_banner_media?: {
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
                            message?: string
                            reason?: string
                            remaining_invite_count?: number
                            users_to_invite_slice?: {
                              items: unknown[]
                              slice_info: {}
                            }
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
                                protected?: boolean
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
                                bitcoin_handle?: string
                                cash_app_handle?: string
                                is_enabled?: boolean
                                venmo_handle?: string
                                ethereum_handle?: string
                                gofundme_handle?: string
                                patreon_handle?: string
                              }
                            }
                          }[]
                          moderator_count: number
                          name: string
                          primary_community_topic?: {
                            topic_id: string
                            topic_name: string
                          }
                          role: string
                          rules: {
                            description?: string
                            name: string
                            rest_id: string
                          }[]
                          search_tags: string[]
                          viewer_relationship: {
                            moderation_state: {
                              __typename: string
                            }
                          }
                          question?: string
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
                          parody_commentary_fan_label: string
                          profile_image_shape: string
                          rest_id: string
                          tipjar_settings: {
                            is_enabled?: boolean
                            bitcoin_handle?: string
                            ethereum_handle?: string
                            gofundme_handle?: string
                            venmo_handle?: string
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
                          super_follow_eligible?: boolean
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
                      result?: {
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
                              indices: number[]
                              url: string
                            }[]
                            user_mentions: {
                              id_str: string
                              indices: number[]
                              name: string
                              screen_name: string
                            }[]
                            timestamps?: {
                              indices: number[]
                              seconds: number
                              text: string
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
                                followed_by?: boolean
                                protected?: boolean
                              }
                              parody_commentary_fan_label: string
                              profile_image_shape: string
                              rest_id: string
                              super_follow_eligible?: boolean
                              tipjar_settings: {
                                is_enabled?: boolean
                                cash_app_handle?: string
                                venmo_handle?: string
                                bitcoin_handle?: string
                                ethereum_handle?: string
                                patreon_handle?: string
                                bandcamp_handle?: string
                                gofundme_handle?: string
                                pay_pal_handle?: string
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
                          edit_control_initial?: {
                            edit_tweet_ids: string[]
                            editable_until_msecs: string
                            edits_remaining: string
                            is_edit_eligible: boolean
                          }
                          edit_tweet_ids?: string[]
                          editable_until_msecs?: string
                          edits_remaining?: string
                          initial_tweet_id?: string
                          is_edit_eligible?: boolean
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
                              additional_media_info?: {
                                monetizable: boolean
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
                                        withheld_in_countries: string[]
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
                                      super_follow_eligible?: boolean
                                      tipjar_settings: {
                                        is_enabled?: boolean
                                        patreon_handle?: string
                                        venmo_handle?: string
                                        bitcoin_handle?: string
                                        cash_app_handle?: string
                                        ethereum_handle?: string
                                        gofundme_handle?: string
                                        bandcamp_handle?: string
                                        pay_pal_handle?: string
                                      }
                                    }
                                  }
                                }
                                description?: string
                                embeddable?: boolean
                                title?: string
                                call_to_actions?: {
                                  visit_site: {
                                    url: string
                                  }
                                }
                              }
                              allow_download_status?: {
                                allow_download?: boolean
                              }
                              display_url: string
                              expanded_url: string
                              ext_media_availability: {
                                status: string
                                reason?: string
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
                              source_status_id_str?: string
                              source_user_id_str?: string
                              ext_alt_text?: string
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
                                        withheld_in_countries: string[]
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
                                      super_follow_eligible?: boolean
                                      tipjar_settings: {
                                        is_enabled?: boolean
                                        patreon_handle?: string
                                        venmo_handle?: string
                                        bitcoin_handle?: string
                                        cash_app_handle?: string
                                        ethereum_handle?: string
                                        gofundme_handle?: string
                                        bandcamp_handle?: string
                                        pay_pal_handle?: string
                                      }
                                    }
                                  }
                                }
                                description?: string
                                embeddable?: boolean
                                title?: string
                                call_to_actions?: {
                                  visit_site: {
                                    url: string
                                  }
                                }
                              }
                              allow_download_status?: {
                                allow_download?: boolean
                              }
                              display_url: string
                              expanded_url: string
                              ext_media_availability: {
                                status: string
                                reason?: string
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
                            id: string
                            name: string
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
                                  indices: number[]
                                  url: string
                                }[]
                                user_mentions: {
                                  id_str: string
                                  indices: number[]
                                  name: string
                                  screen_name: string
                                }[]
                                timestamps?: {
                                  indices: number[]
                                  seconds: number
                                  text: string
                                }[]
                              }
                              id: string
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
                              text: string
                            }
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
                          titleDetail?: string
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
                              result?: {
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
                                  blocking?: boolean
                                  protected?: boolean
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
                                super_follow_eligible?: boolean
                                tipjar_settings?: {
                                  is_enabled?: boolean
                                  bitcoin_handle?: string
                                  patreon_handle?: string
                                  ethereum_handle?: string
                                }
                                message?: string
                                reason?: string
                              }
                            }[]
                          }
                          rest_id: string
                        }
                        limitedActionResults?: {
                          limited_actions: {
                            action: string
                            prompt?: {
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
                                  verified_type?: string
                                }
                                parody_commentary_fan_label: string
                                profile_image_shape: string
                                rest_id: string
                                tipjar_settings: {
                                  cash_app_handle?: string
                                  is_enabled?: boolean
                                  bitcoin_handle?: string
                                  ethereum_handle?: string
                                  patreon_handle?: string
                                }
                                super_follow_eligible?: boolean
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
                                allow_download_status?: {
                                  allow_download: boolean
                                }
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
                                allow_download_status?: {
                                  allow_download: boolean
                                }
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
                          quotedRefResult?: {
                            result: {
                              __typename: string
                              tweet?: {
                                rest_id: string
                              }
                              rest_id?: string
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
                                richtext: {
                                  richtext_tags: unknown[]
                                }
                                text: string
                                media?: {
                                  inline_media: unknown[]
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
                                    verified_type: string
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
                                  tipjar_settings: {}
                                }
                              }[]
                            }
                            rest_id: string
                          }
                        }
                        article?: {
                          article_results: {
                            result: {
                              cover_media: {
                                id: string
                                media_id: string
                                media_info: {
                                  __typename: string
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
                                media_key: string
                              }
                              id: string
                              lifecycle_state: {
                                modified_at_secs: number
                              }
                              metadata: {
                                first_published_at_secs: number
                              }
                              preview_text: string
                              rest_id: string
                              title: string
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
                    previous_counts?: {
                      bookmark_count: number
                      favorite_count: number
                      quote_count: number
                      reply_count: number
                      retweet_count: number
                    }
                    grok_analysis_followups?: string[]
                    grok_share_attachment?: {
                      items: {
                        media_urls: string[]
                        message: string
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
                                  display_url: string
                                  expanded_url: string
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
                                  display_url: string
                                  expanded_url: string
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
                            rest_id: string
                            source: string
                            unmention_data: {}
                            views: {
                              count: string
                              state: string
                            }
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
                      titleDetail?: string
                    }
                    article?: {
                      article_results: {
                        result: {
                          cover_media: {
                            id: string
                            media_id: string
                            media_info: {
                              __typename: string
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
                            media_key: string
                          }
                          id: string
                          lifecycle_state: {
                            modified_at_secs: number
                          }
                          metadata: {
                            first_published_at_secs: number
                          }
                          preview_text: string
                          rest_id: string
                          title: string
                        }
                      }
                    }
                    superFollowsReplyUserResult?: {
                      result: {
                        __typename: string
                        legacy: {
                          screen_name: string
                        }
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
                prerollMetadata?: {
                  preroll: {
                    dynamicPrerollType: string
                    mediaInfo: {
                      advertiserName: string
                      advertiserProfileImageUrl: string
                      durationMillis: number
                      publisherResults: {
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
                          tipjar_settings: {}
                        }
                      }
                      renderAdByAdvertiserName: boolean
                      uuid: string
                      videoVariants: {
                        bitrate?: number
                        contentType: string
                        url: string
                      }[]
                      callToAction?: {
                        callToActionType: string
                        url: string
                      }
                    }
                    prerollId: string
                  }
                }
              }
              value?: string
              displayType?: string
              feedbackInfo?: {
                feedbackKeys: string[]
              }
              items?: {
                entryId: string
                item: {
                  clientEventInfo: {
                    component: string
                    details: {
                      timelinesDetails: {
                        controllerData?: string
                        injectionType: string
                        sourceData?: string
                      }
                    }
                    element: string
                  }
                  feedbackInfo?: {
                    feedbackKeys: string[]
                  }
                  itemContent: {
                    __typename: string
                    itemType: string
                    tweetDisplayType?: string
                    tweet_results?: {
                      result: {
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
                                protected?: boolean
                                notifications?: boolean
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
                              ext_alt_text?: string
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
                                        blocking?: boolean
                                      }
                                      parody_commentary_fan_label: string
                                      profile_image_shape: string
                                      rest_id: string
                                      tipjar_settings: {}
                                    }
                                  }
                                }
                              }
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
                              ext_alt_text?: string
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
                                        blocking?: boolean
                                      }
                                      parody_commentary_fan_label: string
                                      profile_image_shape: string
                                      rest_id: string
                                      tipjar_settings: {}
                                    }
                                  }
                                }
                              }
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
                        }
                        rest_id?: string
                        source?: string
                        unmention_data?: {}
                        views?: {
                          count?: string
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
                                    verified_type?: string
                                    notifications?: boolean
                                  }
                                  parody_commentary_fan_label: string
                                  profile_image_shape: string
                                  rest_id: string
                                  tipjar_settings: {
                                    bitcoin_handle?: string
                                    is_enabled?: boolean
                                    patreon_handle?: string
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
                              possibly_sensitive?: boolean
                              possibly_sensitive_editable?: boolean
                              in_reply_to_screen_name?: string
                              in_reply_to_status_id_str?: string
                              in_reply_to_user_id_str?: string
                            }
                            rest_id?: string
                            source?: string
                            unmention_data?: {}
                            views?: {
                              state: string
                              count?: string
                            }
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
                                    timestamps?: unknown[]
                                  }
                                  id: string
                                  text: string
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
                                      verified: boolean
                                      want_retweets: boolean
                                      withheld_in_countries: unknown[]
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
                                    super_follow_eligible?: boolean
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
                                  hashtags: unknown[]
                                  media?: {
                                    additional_media_info: {
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
                                  urls: unknown[]
                                  user_mentions: unknown[]
                                }
                                extended_entities?: {
                                  media: {
                                    additional_media_info: {
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
                              hashtags: unknown[]
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
                              urls: unknown[]
                              user_mentions: unknown[]
                            }
                            extended_entities: {
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
                          }
                          rest_id: string
                          source: string
                          unmention_data: {}
                          views: {
                            count: string
                            state: string
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
                                inline_media: unknown[]
                              }
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
                        previous_counts?: {
                          bookmark_count: number
                          favorite_count: number
                          quote_count: number
                          reply_count: number
                          retweet_count: number
                        }
                      }
                    }
                    socialContext?: {
                      contextType: string
                      text: string
                      type: string
                      landingUrl?: {
                        url: string
                        urlType: string
                      }
                    }
                    userDisplayType?: string
                    user_results?: {
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
                          withheld_in_countries: string[]
                          verified_type?: string
                          followed_by?: boolean
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
                        super_follow_eligible?: boolean
                      }
                    }
                    community_results?: {
                      result: {
                        __typename: string
                        actions: {
                          delete_action_result: {
                            __typename: string
                            reason: string
                          }
                          join_action_result: {
                            __typename: string
                            message?: string
                            reason?: string
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
                              protected?: boolean
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
                              bitcoin_handle?: string
                              ethereum_handle?: string
                              patreon_handle?: string
                            }
                            super_follow_eligible?: boolean
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
                              protected?: boolean
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
                              bitcoin_handle?: string
                              ethereum_handle?: string
                              patreon_handle?: string
                            }
                            super_follow_eligible?: boolean
                          }
                        }
                        custom_banner_media?: {
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
                        description?: string
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
                              protected?: boolean
                              screen_name: string
                              statuses_count: number
                              translator_type: string
                              url?: string
                              verified: boolean
                              want_retweets: boolean
                              withheld_in_countries: unknown[]
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
                              bitcoin_handle?: string
                              patreon_handle?: string
                              ethereum_handle?: string
                            }
                            super_follow_eligible?: boolean
                          }
                        }[]
                        moderator_count: number
                        name: string
                        question?: string
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
                  }
                }
              }[]
              metadata?: {
                conversationMetadata: {
                  allTweetIds: string[]
                  enableDeduplication: boolean
                }
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
                sticky: boolean
                text: string
                landingUrl?: {
                  url: string
                  urlType: string
                }
                socialContext?: {
                  contextType: string
                  text: string
                  type: string
                }
              }
            }
            entryId: string
            sortIndex: string
          }[]
          type: string
          entry?: {
            content: {
              __typename: string
              entryType: string
              feedbackInfo: {
                feedbackKeys: unknown[]
              }
              itemContent: {
                __typename: string
                itemType: string
                tweetDisplayType: string
                tweet_results: {
                  result: {
                    __typename: string
                    limitedActionResults?: {
                      limited_actions: {
                        action: string
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
                          hashtags: {
                            indices: number[]
                            text: string
                          }[]
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
                              description?: string
                              embeddable?: boolean
                              monetizable: boolean
                              title?: string
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
                          user_mentions: unknown[]
                        }
                        extended_entities: {
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
                              description?: string
                              embeddable?: boolean
                              monetizable: boolean
                              title?: string
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
                              timestamps: unknown[]
                              urls: unknown[]
                              user_mentions: unknown[]
                            }
                            id: string
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
                        urls: unknown[]
                        user_mentions: unknown[]
                      }
                      extended_entities: {
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
                          richtext: {
                            richtext_tags: unknown[]
                          }
                          text: string
                        }
                      }
                    }
                    rest_id?: string
                    source?: string
                    unmention_data?: {}
                    views?: {
                      count: string
                      state: string
                    }
                  }
                }
              }
            }
            entryId: string
            sortIndex: string
          }
          entry_id_to_replace?: string
          clientEventInfo?: {
            component: string
            element: string
          }
          cover?: {
            halfCoverDisplayType?: string
            impressionCallbacks: {
              endpoint: string
            }[]
            primaryCoverCta: {
              callbacks: {
                endpoint: string
              }[]
              clientEventInfo: {
                action: string
              }
              ctaBehavior: {
                type: string
                url?: {
                  url: string
                  urlType: string
                }
              }
              text: string
              buttonStyle?: string
            }
            primaryText: {
              entities: unknown[]
              text: string
            }
            secondaryCoverCta?: {
              callbacks: {
                endpoint: string
              }[]
              clientEventInfo: {
                action: string
              }
              ctaBehavior: {
                type: string
                url: {
                  url: string
                  urlType: string
                }
              }
              text: string
            }
            secondaryText: {
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
            type: string
            dismissible?: boolean
            dismissInfo?: {
              callbacks: {
                endpoint: string
              }[]
            }
            fullCoverDisplayType?: string
            image?: {
              height: number
              url: string
              width: number
            }
            imageDisplayType?: string
          }
          alertType?: string
          colorConfig?: {
            background: string
            border: string
            text: string
          }
          displayDurationMs?: number
          displayLocation?: string
          iconDisplayInfo?: {
            icon: string
            tint: string
          }
          richText?: {
            entities: unknown[]
            text: string
          }
          triggerDelayMs?: number
          usersResults?: {
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
                protected?: boolean
                url?: string
                verified_type?: string
                followed_by?: boolean
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
                venmo_handle?: string
                bitcoin_handle?: string
              }
            }
          }[]
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
              childKeys?: string[]
              clientEventInfo?: {
                action: string
                element: string
              }
              confirmation?: string
              feedbackType: string
              feedbackUrl?: string
              hasUndoAction: boolean
              icon?: string
              prompt?: string
              richBehavior?: {
                topic: {
                  description?: string
                  following: boolean
                  icon_url: string
                  id: string
                  name: string
                  not_interested: boolean
                  topic_id: string
                }
                type: string
              }
              encodedFeedbackRequest?: string
            }
          }[]
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
