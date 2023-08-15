/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL GET TweetDetail 成功レスポンスモデル */

export interface GraphQLGetTweetDetailSuccessResponse {
  data: {
    threaded_conversation_with_injections_v2?: {
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
                      }
                    }
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
                    scopes?: {
                      followers: boolean
                    }
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
                  quick_promote_eligibility: {
                    eligibility: string
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
              text?: string
              display_type?: string
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
                      unified_card?: {
                        card_fetch_state: string
                      }
                      quoted_status_result?: {
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
                              urls: unknown[]
                              hashtags: unknown[]
                              symbols: unknown[]
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
                          }
                        }
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
  errors?: {
    message: string
    locations: {
      line: number
      column: number
    }[]
    path: string[]
    extensions: {
      name: string
      source: string
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
    tracing: {
      trace_id: string
    }
  }[]
}
