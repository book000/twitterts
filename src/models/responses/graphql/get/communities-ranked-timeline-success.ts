/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET CommunitiesRankedTimeline 成功レスポンスモデル */

export interface GraphQLGetCommunitiesRankedTimelineSuccessResponse {
  data: {
    viewer: {
      ranked_communities_timeline: {
        timeline: {
          instructions: {
            entries?: {
              content: {
                __typename: string
                clientEventInfo?: {
                  component: string
                  details: {
                    timelinesDetails: {
                      injectionType: string
                    }
                  }
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
                items?: {
                  entryId: string
                  item: {
                    clientEventInfo: {
                      component: string
                      details: {
                        timelinesDetails: {
                          injectionType: string
                        }
                      }
                      element: string
                    }
                    itemContent: {
                      __typename: string
                      community_results: {
                        result: {
                          __typename: string
                          actions: {
                            delete_action_result: {
                              __typename: string
                              reason: string
                            }
                            join_action_result: {
                              __typename: string
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
                          custom_banner_media: {
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
                            result?: {
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
                              tipjar_settings: {
                                is_enabled?: boolean
                                patreon_handle?: string
                              }
                            }
                          }[]
                          moderator_count: number
                          name: string
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
                      itemType: string
                    }
                  }
                }[]
                value?: string
              }
              entryId: string
              sortIndex: string
            }[]
            type: string
          }[]
          metadata: {
            scribeConfig: {
              page: string
            }
          }
          responseObjects: {
            feedbackActions: {
              key: string
              value: {
                confirmation: string
                feedbackType: string
                hasUndoAction: boolean
                icon: string
                prompt: string
              }
            }[]
          }
        }
      }
    }
  }
}
