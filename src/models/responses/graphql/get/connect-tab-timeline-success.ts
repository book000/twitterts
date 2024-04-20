/** GraphQL GET ConnectTabTimeline 成功レスポンスモデル */

export interface GraphQLGetConnectTabTimelineSuccessResponse {
  data: {
    connect_tab_timeline: {
      timeline: {
        instructions: {
          type: string
          direction?: string
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
                    user_results: {
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
                          followed_by?: boolean
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
                        reason?: string
                        has_nft_avatar?: boolean
                      }
                    }
                    userDisplayType: string
                  }
                  clientEventInfo: {
                    component: string
                    element: string
                    details: {
                      timelinesDetails: {
                        injectionType: string
                        controllerData: string
                        sourceData: string
                      }
                    }
                  }
                }
              }[]
              displayType: string
              header: {
                displayType: string
                text: string
              }
              clientEventInfo: {
                component: string
                element: string
              }
            }
          }[]
        }[]
      }
    }
  }
}
