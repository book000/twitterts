/* eslint-disable @typescript-eslint/ban-types */

export interface GraphQLGetListsManagementPageTimelineResponse {
  data: {
    viewer: {
      list_management_timeline: {
        timeline: {
          instructions: {
            type: string
            entries?: {
              entryId: string
              sortIndex: string
              content: {
                entryType: string
                __typename: string
                items: {
                  entryId: string
                  item: {
                    itemContent: {
                      itemType: string
                      __typename: string
                      content?: {
                        contentType: string
                        headerText: string
                        bodyText: string
                      }
                      displayType?: string
                      list?: {
                        created_at: number
                        default_banner_media: {
                          media_info: {
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
                        default_banner_media_results: {
                          result: {
                            id: string
                            media_key: string
                            media_id: string
                            media_info: {
                              __typename: string
                              original_img_height: number
                              original_img_width: number
                              original_img_url: string
                              salient_rect: {
                                height: number
                                left: number
                                top: number
                                width: number
                              }
                            }
                            __typename: string
                          }
                        }
                        description: string
                        following: boolean
                        id: string
                        id_str: string
                        is_member: boolean
                        member_count: number
                        mode: string
                        muting: boolean
                        name: string
                        subscriber_count: number
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
                              url?: string
                            }
                          }
                        }
                        facepile_urls: string[]
                        followers_context: string
                        members_context: string
                      }
                    }
                    clientEventInfo?: {
                      component: string
                      element: string
                      details: {
                        timelinesDetails: {
                          injectionType: string
                          controllerData: string
                        }
                      }
                    }
                  }
                }[]
                displayType: string
                header: {
                  displayType: string
                  text: string
                  sticky: boolean
                }
                clientEventInfo: {
                  component: string
                }
                footer?: {
                  displayType: string
                  text: string
                  landingUrl: {
                    url: string
                    urlType: string
                  }
                }
              }
            }[]
          }[]
          responseObjects: {
            feedbackActions: unknown[]
            immediateReactions: unknown[]
          }
        }
      }
    }
  }
}
