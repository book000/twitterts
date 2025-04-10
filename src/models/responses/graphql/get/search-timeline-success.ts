/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET SearchTimeline 成功レスポンスモデル */

export interface GraphQLGetSearchTimelineSuccessResponse {
  data: {
    search_by_raw_query: {
      search_timeline: {
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
                    }
                  }
                  element?: string
                }
                cursorType?: string
                displayType?: string
                entryType: string
                feedbackInfo?: {
                  feedbackKeys: string[]
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
                }
                itemContent?: {
                  __typename: string
                  highlights?: {
                    textHighlights: {
                      endIndex: number
                      startIndex: number
                    }[]
                  }
                  itemType: string
                  promotedMetadata?: {
                    adMetadataContainer: {
                      renderLegacyWebsiteCard: boolean
                    }
                    advertiser_results: {
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
                  tweetDisplayType?: string
                  tweet_results?: {
                    result: {
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
                              needs_phone_verification?: boolean
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
                            super_follow_eligible?: boolean
                            tipjar_settings: {
                              bitcoin_handle?: string
                              ethereum_handle?: string
                              is_enabled?: boolean
                              venmo_handle?: string
                              patreon_handle?: string
                            }
                          }
                        }
                      }
                      edit_control: {
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
                            }
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
                            }
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
                        scopes?: {
                          followers: boolean
                        }
                        user_id_str: string
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
                      }
                      previous_counts?: {
                        bookmark_count: number
                        favorite_count: number
                        quote_count: number
                        reply_count: number
                        retweet_count: number
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
                                  verified_type?: string
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
                                urls: unknown[]
                                user_mentions: unknown[]
                              }
                              extended_entities: {
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
                        protected?: boolean
                        screen_name: string
                        statuses_count: number
                        translator_type: string
                        url?: string
                        verified: boolean
                        want_retweets: boolean
                        withheld_in_countries: string[]
                        withheld_scope?: string
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
                        patreon_handle?: string
                        venmo_handle?: string
                      }
                    }
                  }
                  clientEventInfo?: {
                    component: string
                    details: {
                      timelinesDetails: {
                        controllerData: string
                      }
                    }
                    element: string
                  }
                  content?: {
                    confirmation: string
                    contentType: string
                    displayType: string
                    isRelevantCallback: {
                      endpoint: string
                    }
                    isRelevantText: string
                    notRelevantCallback: {
                      endpoint: string
                    }
                    notRelevantText: string
                    title: string
                  }
                }
                items?: {
                  entryId: string
                  item: {
                    clientEventInfo: {
                      component: string
                      details?: {
                        timelinesDetails: {
                          controllerData: string
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
                          professional?: {
                            category: unknown[]
                            professional_type: string
                            rest_id: string
                          }
                          profile_image_shape: string
                          rest_id: string
                          super_follow_eligible?: boolean
                          tipjar_settings: {}
                        }
                      }
                      highlights?: {
                        textHighlights: {
                          endIndex: number
                          startIndex: number
                        }[]
                      }
                      tweetDisplayType?: string
                      tweet_results?: {
                        result: {
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
                                  ethereum_handle?: string
                                  is_enabled?: boolean
                                }
                              }
                            }
                          }
                          edit_control: {
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
                              symbols: {
                                indices: number[]
                                text: string
                              }[]
                              timestamps: unknown[]
                              urls: unknown[]
                              user_mentions: unknown[]
                            }
                            extended_entities: {
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
                                source_status_id_str?: string
                                source_user_id_str?: string
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
                          previous_counts?: {
                            bookmark_count: number
                            favorite_count: number
                            quote_count: number
                            reply_count: number
                            retweet_count: number
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
                      displayType?: string
                      list?: {
                        created_at: number
                        custom_banner_media?: {
                          media_info: {
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
                        custom_banner_media_results?: {
                          result: {
                            __typename: string
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
                              salient_rect: {
                                height: number
                                left: number
                                top: number
                                width: number
                              }
                            }
                            media_key: string
                          }
                        }
                        default_banner_media: {
                          media_info: {
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
                        default_banner_media_results: {
                          result: {
                            __typename: string
                            id: string
                            media_id: string
                            media_info: {
                              __typename: string
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
                            media_key: string
                          }
                        }
                        description: string
                        facepile_urls: string[]
                        followers_context?: string
                        following: boolean
                        id: string
                        id_str: string
                        is_member: boolean
                        member_count: number
                        members_context: string
                        mode: string
                        muting: boolean
                        name: string
                        pinning: boolean
                        subscriber_count: number
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
                              bitcoin_handle?: string
                              ethereum_handle?: string
                              is_enabled?: boolean
                            }
                          }
                        }
                      }
                    }
                    feedbackInfo?: {
                      feedbackKeys: string[]
                    }
                  }
                }[]
                value?: string
              }
              entryId: string
              sortIndex: string
            }[]
            type: string
            direction?: string
            entry?: {
              content: {
                __typename: string
                cursorType: string
                entryType: string
                value: string
              }
              entryId: string
              sortIndex: string
            }
            entry_id_to_replace?: string
            moduleEntryId?: string
            moduleItems?: {
              entryId: string
              item: {
                clientEventInfo: {
                  component: string
                  details?: {
                    timelinesDetails: {
                      controllerData: string
                    }
                  }
                  element: string
                }
                feedbackInfo?: {
                  feedbackKeys: string[]
                }
                itemContent: {
                  __typename: string
                  highlights?: {
                    textHighlights: {
                      endIndex: number
                      startIndex: number
                    }[]
                  }
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
                            super_follow_eligible?: boolean
                            tipjar_settings: {
                              bitcoin_handle?: string
                              ethereum_handle?: string
                              is_enabled?: boolean
                              venmo_handle?: string
                              cash_app_handle?: string
                            }
                          }
                        }
                      }
                      edit_control: {
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
                                    super_follow_eligible: boolean
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
                            source_status_id_str?: string
                            source_user_id_str?: string
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
                        extended_entities: {
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
                                    super_follow_eligible: boolean
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
                            source_status_id_str?: string
                            source_user_id_str?: string
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
                            ext_alt_text?: string
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
                        in_reply_to_user_id_str?: string
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
                              urls: unknown[]
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
                      previous_counts?: {
                        bookmark_count: number
                        favorite_count: number
                        quote_count: number
                        reply_count: number
                        retweet_count: number
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
                  displayType?: string
                  list?: {
                    created_at: number
                    custom_banner_media?: {
                      media_info: {
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
                    custom_banner_media_results?: {
                      result: {
                        __typename: string
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
                          salient_rect: {
                            height: number
                            left: number
                            top: number
                            width: number
                          }
                        }
                        media_key: string
                      }
                    }
                    default_banner_media: {
                      media_info: {
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
                    default_banner_media_results: {
                      result: {
                        __typename: string
                        id: string
                        media_id: string
                        media_info: {
                          __typename: string
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
                        media_key: string
                      }
                    }
                    description: string
                    facepile_urls: string[]
                    followers_context?: string
                    following: boolean
                    id: string
                    id_str: string
                    is_member: boolean
                    member_count: number
                    members_context: string
                    mode: string
                    muting: boolean
                    name: string
                    pinning: boolean
                    subscriber_count: number
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
                          patreon_handle?: string
                          venmo_handle?: string
                        }
                      }
                    }
                  }
                }
              }
            }[]
          }[]
          responseObjects?: {
            feedbackActions: {
              key: string
              value: {
                childKeys?: string[]
                clientEventInfo: {
                  action: string
                  component: string
                  element: string
                }
                confirmation: string
                confirmationDisplayType: string
                feedbackType: string
                hasUndoAction: boolean
                icon?: string
                prompt: string
              }
            }[]
          }
        }
      }
    }
  }
}
