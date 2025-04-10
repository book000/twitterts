/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET ListsManagementPageTimeline 成功レスポンスモデル */

export interface GraphQLGetListsManagementPageTimelineSuccessResponse {
  data: {
    viewer: {
      list_management_timeline: {
        timeline: {
          instructions: {
            direction?: string
            entries?: {
              content: {
                __typename: string
                clientEventInfo?: {
                  component: string
                  details: {
                    timelinesDetails: {
                      controllerData?: string
                      injectionType: string
                    }
                  }
                }
                cursorType?: string
                displayType?: string
                entryType: string
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
                          controllerData?: string
                          injectionType: string
                        }
                      }
                      element: string
                    }
                    itemContent: {
                      __typename: string
                      content?: {
                        bodyText: string
                        contentType: string
                        headerText: string
                      }
                      displayType?: string
                      itemType: string
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
                        followers_context: string
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
                              pinned_tweet_ids_str: unknown[]
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
                            profile_image_shape: string
                            rest_id: string
                            tipjar_settings: {}
                          }
                        }
                      }
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
        }
      }
    }
  }
}
