/* eslint-disable @typescript-eslint/no-empty-object-type */

/** レスポンスツイートレガシーオブジェクト */

export interface CustomTweetLegacyObject {
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
        allow_download?: boolean
      }
      media_results: {
        result?: {
          media_key?: string
          grok_image_annotation?: {
            prompt: string
            upsampled_prompt: string
          }
        }
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
              has_graduated_access?: boolean
              parody_commentary_fan_label: string
              is_blue_verified: boolean
              profile_image_shape: string
              legacy: {
                following?: boolean
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
                location?: string
                media_count: number
                name?: string
                normal_followers_count: number
                pinned_tweet_ids_str: string[]
                possibly_sensitive: boolean
                profile_image_url_https?: string
                profile_interstitial_type: string
                screen_name?: string
                statuses_count: number
                translator_type: string
                verified?: boolean
                want_retweets?: boolean
                withheld_in_countries: unknown[]
                profile_banner_url?: string
                url?: string
                blocking?: boolean
                verified_type?: string
              }
              tipjar_settings: {
                is_enabled?: boolean
                bitcoin_handle?: string
                patreon_handle?: string
                cash_app_handle?: string
                ethereum_handle?: string
                venmo_handle?: string
                bandcamp_handle?: string
                gofundme_handle?: string
                pay_pal_handle?: string
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
              verification?: {
                verified: boolean
                verified_type?: string
              }
              location?: {
                location: string
              }
              privacy?: {
                protected: boolean
              }
              avatar?: {
                image_url: string
              }
              dm_permissions?: {
                can_dm: boolean
              }
              media_permissions?: {
                can_media_tag: boolean
              }
              relationship_perspectives?: {
                following: boolean
              }
              core?: {
                created_at: string
                name: string
                screen_name: string
              }
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
      sensitive_media_warning?: {
        adult_content?: boolean
        other?: boolean
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
        allow_download?: boolean
      }
      media_results: {
        result?: {
          media_key?: string
          grok_image_annotation?: {
            prompt: string
            upsampled_prompt: string
          }
        }
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
              has_graduated_access?: boolean
              parody_commentary_fan_label: string
              is_blue_verified: boolean
              profile_image_shape: string
              legacy: {
                following?: boolean
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
                location?: string
                media_count: number
                name?: string
                normal_followers_count: number
                pinned_tweet_ids_str: string[]
                possibly_sensitive: boolean
                profile_image_url_https?: string
                profile_interstitial_type: string
                screen_name?: string
                statuses_count: number
                translator_type: string
                verified?: boolean
                want_retweets?: boolean
                withheld_in_countries: unknown[]
                profile_banner_url?: string
                url?: string
                blocking?: boolean
                verified_type?: string
              }
              tipjar_settings: {
                is_enabled?: boolean
                bitcoin_handle?: string
                patreon_handle?: string
                cash_app_handle?: string
                ethereum_handle?: string
                venmo_handle?: string
                bandcamp_handle?: string
                gofundme_handle?: string
                pay_pal_handle?: string
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
              verification?: {
                verified: boolean
                verified_type?: string
              }
              location?: {
                location: string
              }
              privacy?: {
                protected: boolean
              }
              avatar?: {
                image_url: string
              }
              dm_permissions?: {
                can_dm: boolean
              }
              media_permissions?: {
                can_media_tag: boolean
              }
              relationship_perspectives?: {
                following: boolean
              }
              core?: {
                created_at: string
                name: string
                screen_name: string
              }
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
      sensitive_media_warning?: {
        adult_content?: boolean
        other?: boolean
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
  scopes?: {
    followers: boolean
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
        legacy?: {
          screen_name: string
        }
        core?: {
          screen_name: string
        }
      }
    }
  }
  retweeted_status_result?: {
    result?: {
      __typename: string
      rest_id?: string
      core?: {
        user_results: {
          result: {
            __typename: string
            id: string
            rest_id: string
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
            parody_commentary_fan_label?: string
            is_blue_verified: boolean
            profile_image_shape?: string
            legacy: {
              following?: boolean
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
              url?: string
              verified?: boolean
              want_retweets?: boolean
              withheld_in_countries: string[]
              verified_type?: string
              blocking?: boolean
              muting?: boolean
            }
            tipjar_settings?: {
              is_enabled?: boolean
              bitcoin_handle?: string
              ethereum_handle?: string
              patreon_handle?: string
              cash_app_handle?: string
              venmo_handle?: string
              bandcamp_handle?: string
              gofundme_handle?: string
              pay_pal_handle?: string
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
            verification?: {
              verified: boolean
              verified_type?: string
            }
            location?: {
              location: string
            }
            privacy?: {
              protected: boolean
            }
            avatar?: {
              image_url: string
            }
            dm_permissions?: {
              can_dm: boolean
            }
            media_permissions?: {
              can_media_tag: boolean
            }
            relationship_perspectives?: {
              following: boolean
            }
            core?: {
              created_at: string
              name: string
              screen_name: string
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
            media_results: {
              result?: {
                media_key?: string
                grok_image_annotation?: {
                  prompt: string
                  upsampled_prompt: string
                }
              }
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
                    parody_commentary_fan_label: string
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
                    }
                    tipjar_settings: {
                      is_enabled?: boolean
                      cash_app_handle?: string
                      bitcoin_handle?: string
                      ethereum_handle?: string
                      venmo_handle?: string
                      patreon_handle?: string
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
              embeddable?: boolean
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
            sensitive_media_warning?: {
              adult_content?: boolean
              other?: boolean
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
            media_results: {
              result?: {
                media_key?: string
                grok_image_annotation?: {
                  prompt: string
                  upsampled_prompt: string
                }
              }
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
                    parody_commentary_fan_label: string
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
                    }
                    tipjar_settings: {
                      is_enabled?: boolean
                      cash_app_handle?: string
                      bitcoin_handle?: string
                      ethereum_handle?: string
                      venmo_handle?: string
                      patreon_handle?: string
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
              embeddable?: boolean
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
            sensitive_media_warning?: {
              adult_content?: boolean
              other?: boolean
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
        in_reply_to_screen_name?: string
        in_reply_to_status_id_str?: string
        in_reply_to_user_id_str?: string
        conversation_control?: {
          policy: string
          conversation_owner_results: {
            result: {
              __typename: string
              legacy?: {
                screen_name: string
              }
              core?: {
                screen_name: string
              }
            }
          }
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
        coordinates?: {
          type: string
          coordinates: number[]
        }
        geo?: {
          type: string
          coordinates: number[]
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
      quoted_status_result?: {
        result?: {
          __typename: string
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
                  parody_commentary_fan_label: string
                  is_blue_verified: boolean
                  profile_image_shape: string
                  legacy: {
                    blocking?: boolean
                    following?: boolean
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
                    url?: string
                    verified?: boolean
                    verified_type?: string
                    want_retweets: boolean
                    withheld_in_countries: unknown[]
                  }
                  tipjar_settings: {
                    is_enabled?: boolean
                    patreon_handle?: string
                    bitcoin_handle?: string
                    ethereum_handle?: string
                    venmo_handle?: string
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
                  verification?: {
                    verified: boolean
                    verified_type?: string
                  }
                  location?: {
                    location: string
                  }
                  privacy?: {
                    protected: boolean
                  }
                  avatar?: {
                    image_url: string
                  }
                  dm_permissions?: {
                    can_dm: boolean
                  }
                  media_permissions?: {
                    can_media_tag: boolean
                  }
                  relationship_perspectives?: {
                    following: boolean
                    blocking?: boolean
                  }
                  core?: {
                    created_at: string
                    name: string
                    screen_name: string
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
                    parody_commentary_fan_label: string
                    is_blue_verified: boolean
                    profile_image_shape: string
                    legacy: {
                      blocking?: boolean
                      following?: boolean
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
                      location?: string
                      media_count: number
                      name?: string
                      normal_followers_count: number
                      pinned_tweet_ids_str: string[]
                      possibly_sensitive: boolean
                      profile_banner_url: string
                      profile_image_url_https?: string
                      profile_interstitial_type: string
                      screen_name?: string
                      statuses_count: number
                      translator_type: string
                      url: string
                      verified?: boolean
                      want_retweets: boolean
                      withheld_in_countries: unknown[]
                      verified_type?: string
                    }
                    tipjar_settings: {
                      is_enabled?: boolean
                      bitcoin_handle?: string
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
                    verification?: {
                      verified: boolean
                      verified_type?: string
                    }
                    location?: {
                      location: string
                    }
                    privacy?: {
                      protected: boolean
                    }
                    avatar?: {
                      image_url: string
                    }
                    dm_permissions?: {
                      can_dm: boolean
                    }
                    media_permissions?: {
                      can_media_tag: boolean
                    }
                    relationship_perspectives?: {
                      blocking: boolean
                      following: boolean
                    }
                    core?: {
                      created_at: string
                      name: string
                      screen_name: string
                    }
                  }
                }[]
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
                timestamps: {
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
                  allow_download_status?: {
                    allow_download?: boolean
                  }
                  media_results: {
                    result: {
                      media_key?: string
                    }
                  }
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
                          parody_commentary_fan_label: string
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
                          professional?: {
                            rest_id: string
                            professional_type: string
                            category: {
                              id: number
                              name: string
                              icon_name: string
                            }[]
                          }
                          tipjar_settings: {}
                        }
                      }
                    }
                    call_to_actions?: {
                      visit_site: {
                        url: string
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
              conversation_control?: {
                policy: string
                conversation_owner_results: {
                  result: {
                    __typename: string
                    legacy?: {
                      screen_name: string
                    }
                    core?: {
                      screen_name: string
                    }
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
                    allow_download?: boolean
                  }
                  media_results: {
                    result: {
                      media_key?: string
                    }
                  }
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
                          parody_commentary_fan_label: string
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
                          professional?: {
                            rest_id: string
                            professional_type: string
                            category: {
                              id: number
                              name: string
                              icon_name: string
                            }[]
                          }
                          tipjar_settings: {}
                        }
                      }
                    }
                    call_to_actions?: {
                      visit_site: {
                        url: string
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
                  ext_alt_text?: string
                  source_status_id_str?: string
                  source_user_id_str?: string
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
              scopes?: {
                followers: boolean
              }
            }
            previous_counts?: {
              bookmark_count: number
              favorite_count: number
              quote_count: number
              reply_count: number
              retweet_count: number
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
          core?: {
            user_results: {
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
                parody_commentary_fan_label: string
                is_blue_verified: boolean
                profile_image_shape: string
                legacy: {
                  following?: boolean
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
                  url?: string
                  verified?: boolean
                  want_retweets: boolean
                  withheld_in_countries: unknown[]
                  verified_type?: string
                  blocking?: boolean
                }
                tipjar_settings: {
                  is_enabled?: boolean
                  bitcoin_handle?: string
                  ethereum_handle?: string
                  patreon_handle?: string
                  venmo_handle?: string
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
                verification?: {
                  verified: boolean
                }
                location?: {
                  location: string
                }
                privacy?: {
                  protected: boolean
                }
                avatar?: {
                  image_url: string
                }
                dm_permissions?: {
                  can_dm: boolean
                }
                media_permissions?: {
                  can_media_tag: boolean
                }
                relationship_perspectives?: {
                  following: boolean
                }
                core?: {
                  created_at: string
                  name: string
                  screen_name: string
                }
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
                media_results: {
                  result?: {
                    media_key?: string
                  }
                }
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
                        parody_commentary_fan_label: string
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
                          blocking?: boolean
                        }
                        tipjar_settings: {}
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
                allow_download_status?: {
                  allow_download: boolean
                }
                media_results: {
                  result?: {
                    media_key?: string
                  }
                }
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
                        parody_commentary_fan_label: string
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
                          blocking?: boolean
                        }
                        tipjar_settings: {}
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
            possibly_sensitive?: boolean
            possibly_sensitive_editable?: boolean
            in_reply_to_screen_name?: string
            in_reply_to_status_id_str?: string
            in_reply_to_user_id_str?: string
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
                  parody_commentary_fan_label: string
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
                    verified_type?: string
                    blocking?: boolean
                  }
                  tipjar_settings: {}
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
          quotedRefResult?: {
            result: {
              __typename: string
              rest_id?: string
              tweet?: {
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
          article?: {
            article_results: {
              result: {
                rest_id: string
                id: string
                title: string
                preview_text: string
                cover_media: {
                  id: string
                  media_key: string
                  media_id: string
                  media_info: {
                    __typename: string
                    original_img_height: number
                    original_img_width: number
                    original_img_url: string
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
                  }
                }
                lifecycle_state: {
                  modified_at_secs: number
                }
                metadata: {
                  first_published_at_secs: number
                }
              }
            }
          }
          voiceInfo?: {}
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
      previous_counts?: {
        bookmark_count: number
        favorite_count: number
        quote_count: number
        reply_count: number
        retweet_count: number
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
              parody_commentary_fan_label: string
              is_blue_verified: boolean
              profile_image_shape: string
              legacy: {
                following?: boolean
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
                url?: string
                blocked_by?: boolean
                verified_type?: string
              }
              tipjar_settings: {
                is_enabled?: boolean
                bitcoin_handle?: string
                patreon_handle?: string
                bandcamp_handle?: string
                cash_app_handle?: string
                ethereum_handle?: string
                gofundme_handle?: string
                pay_pal_handle?: string
                venmo_handle?: string
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
              verification?: {
                verified: boolean
              }
              location?: {
                location: string
              }
              privacy?: {
                protected: boolean
              }
              avatar?: {
                image_url: string
              }
              dm_permissions?: {
                can_dm: boolean
              }
              media_permissions?: {
                can_media_tag: boolean
              }
              relationship_perspectives?: {
                following: boolean
              }
              core?: {
                created_at: string
                name: string
                screen_name: string
              }
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
                legacy?: {
                  screen_name: string
                }
                core?: {
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
              media_results: {
                result: {
                  media_key: string
                }
              }
              allow_download_status?: {
                allow_download: boolean
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
              sensitive_media_warning?: {
                adult_content: boolean
                other?: boolean
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
              media_results: {
                result: {
                  media_key: string
                }
              }
              allow_download_status?: {
                allow_download: boolean
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
              sensitive_media_warning?: {
                adult_content: boolean
                other?: boolean
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
            name: string
            id: string
            place_type: string
            url: string
          }
          scopes?: {
            followers: boolean
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
                  affiliates_highlighted_label: {}
                  has_graduated_access: boolean
                  parody_commentary_fan_label: string
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
                  tipjar_settings: {
                    is_enabled?: boolean
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
                symbols: unknown[]
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
                  media_results: {
                    result: {
                      media_key: string
                    }
                  }
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
                  media_results: {
                    result: {
                      media_key: string
                    }
                  }
                }[]
              }
              quoted_status_id_str?: string
              quoted_status_permalink?: {
                url: string
                expanded: string
                display: string
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
                    parody_commentary_fan_label: string
                    is_blue_verified: boolean
                    profile_image_shape: string
                    legacy: {
                      blocking?: boolean
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
                    professional?: {
                      rest_id: string
                      professional_type: string
                      category: {
                        id: number
                        name: string
                        icon_name: string
                      }[]
                    }
                    tipjar_settings: {
                      is_enabled?: boolean
                    }
                    super_follow_eligible?: boolean
                    verification?: {
                      verified: boolean
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
                      parody_commentary_fan_label: string
                      is_blue_verified: boolean
                      profile_image_shape: string
                      legacy: {
                        blocking: boolean
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
                      tipjar_settings: {}
                    }
                  }[]
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
                  timestamps: unknown[]
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
                        content_type: string
                        url: string
                        bitrate?: number
                      }[]
                    }
                    media_results: {
                      result: {
                        media_key: string
                      }
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
                        content_type: string
                        url: string
                        bitrate?: number
                      }[]
                    }
                    media_results: {
                      result: {
                        media_key: string
                      }
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
                  tweet: {
                    rest_id: string
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
                    has_graduated_access: boolean
                    parody_commentary_fan_label: string
                    is_blue_verified: boolean
                    profile_image_shape: string
                    legacy: {
                      blocking: boolean
                      following: boolean
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
                    tipjar_settings: {}
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
                rest_id?: string
                tweet?: {
                  rest_id: string
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
                parody_commentary_fan_label: string
                is_blue_verified: boolean
                profile_image_shape: string
                legacy: {
                  blocking: boolean
                  following: boolean
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
                tipjar_settings: {}
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
              parody_commentary_fan_label?: string
              is_blue_verified?: boolean
              profile_image_shape?: string
              legacy?: {
                following?: boolean
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
                url?: string
                verified?: boolean
                want_retweets: boolean
                withheld_in_countries: unknown[]
                blocking?: boolean
                verified_type?: string
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
              tipjar_settings?: {
                is_enabled?: boolean
                bitcoin_handle?: string
                cash_app_handle?: string
                patreon_handle?: string
                venmo_handle?: string
              }
              super_follow_eligible?: boolean
              verification?: {
                verified: boolean
              }
              location?: {
                location: string
              }
              privacy?: {
                protected: boolean
              }
              avatar?: {
                image_url: string
              }
              dm_permissions?: {
                can_dm: boolean
              }
              media_permissions?: {
                can_media_tag: boolean
              }
              relationship_perspectives?: {
                blocking?: boolean
                following: boolean
              }
              core?: {
                created_at: string
                name: string
                screen_name: string
              }
              message?: string
              reason?: string
            }
          }[]
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
      voiceInfo?: {}
      mediaVisibilityResults?: {
        blurred_image_interstitial: {
          opacity: number
          text: {
            rtl: boolean
            text: string
            entities: unknown[]
          }
          title: {
            rtl: boolean
            text: string
            entities: unknown[]
          }
        }
      }
      article?: {
        article_results: {
          result: {
            rest_id: string
            id: string
            title: string
            preview_text: string
            cover_media?: {
              id: string
              media_key: string
              media_id: string
              media_info: {
                __typename: string
                original_img_height: number
                original_img_width: number
                original_img_url: string
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
              }
            }
            lifecycle_state: {
              modified_at_secs: number
            }
            metadata: {
              first_published_at_secs: number
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
}
