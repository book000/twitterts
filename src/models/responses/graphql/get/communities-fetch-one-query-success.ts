/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET CommunitiesFetchOneQuery 成功レスポンスモデル */

export interface GraphQLGetCommunitiesFetchOneQuerySuccessResponse {
  data: {
    communityResults: {
      id: string
      result?: {
        __typename: string
        actions: {
          delete_action_result: {
            __isCommunityDeleteActionResult: string
            __typename: string
            reason: string
          }
          id: string
          join_action_result: {
            __isCommunityJoinActionResult: string
            __typename: string
            message?: string
            reason?: string
          }
          leave_action_result: {
            __isCommunityLeaveActionResult: string
            __typename: string
            message?: string
            reason?: string
          }
          pin_action_result: {
            __isCommunityTweetPinActionResult: string
            __typename: string
          }
        }
        admin_results: {
          id: string
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
              following?: boolean
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
              withheld_in_countries: string[]
              protected?: boolean
              verified_type?: string
            }
            parody_commentary_fan_label?: string
            professional?: {
              category: {
                icon_name: string
                id: number
                name: string
              }[]
              id: string
              professional_type: string
              rest_id: string
            }
            profile_image_shape?: string
            rest_id?: string
            tipjar_settings?: {
              ethereum_handle?: string
              is_enabled?: boolean
              patreon_handle?: string
              bitcoin_handle?: string
              gofundme_handle?: string
              venmo_handle?: string
              cash_app_handle?: string
            }
            super_follow_eligible?: boolean
            message?: string
            reason?: string
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
              followed_by?: boolean
            }
            core?: {
              created_at: string
              name: string
              screen_name: string
            }
          }
        }
        created_at: number
        creator_results: {
          id: string
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
              following?: boolean
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
              withheld_in_countries: string[]
              protected?: boolean
              verified_type?: string
            }
            parody_commentary_fan_label?: string
            professional?: {
              category: {
                icon_name: string
                id: number
                name: string
              }[]
              id: string
              professional_type: string
              rest_id: string
            }
            profile_image_shape?: string
            rest_id?: string
            tipjar_settings?: {
              ethereum_handle?: string
              is_enabled?: boolean
              patreon_handle?: string
              bitcoin_handle?: string
              gofundme_handle?: string
              venmo_handle?: string
              cash_app_handle?: string
            }
            super_follow_eligible?: boolean
            message?: string
            reason?: string
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
              followed_by?: boolean
            }
            core?: {
              created_at: string
              name: string
              screen_name: string
            }
          }
        }
        custom_banner_media?: {
          id: string
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
        }
        default_banner_media: {
          id: string
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
        }
        description?: string
        id: string
        id_str: string
        invites_policy: string
        invites_result: {
          __isCommunityInvitesResult: string
          __typename: string
          message?: string
          reason?: string
          id?: string
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
          id: string
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
              following?: boolean
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
              protected?: boolean
              screen_name?: string
              statuses_count: number
              translator_type: string
              url?: string
              verified?: boolean
              want_retweets: boolean
              withheld_in_countries: string[]
              verified_type?: string
            }
            parody_commentary_fan_label: string
            professional?: {
              category: {
                icon_name: string
                id: number
                name: string
              }[]
              id: string
              professional_type: string
              rest_id: string
            }
            profile_image_shape: string
            rest_id: string
            tipjar_settings: {
              ethereum_handle?: string
              is_enabled?: boolean
              patreon_handle?: string
              bitcoin_handle?: string
              cash_app_handle?: string
              gofundme_handle?: string
              venmo_handle?: string
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
              followed_by?: boolean
            }
            core?: {
              created_at: string
              name: string
              screen_name: string
            }
          }
        }[]
        moderator_count: number
        name: string
        role: string
        rules: {
          id: string
          name: string
          rest_id: string
          description?: string
        }[]
        search_tags: string[]
        viewer_relationship: {
          id: string
          moderation_state: {
            __typename: string
          }
        }
        question?: string
        primary_community_topic?: {
          topic_id: string
          topic_name: string
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
      retry_after: number
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
    retry_after: number
    source: string
    tracing: {
      trace_id: string
    }
  }[]
}
