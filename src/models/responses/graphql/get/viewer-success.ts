/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET Viewer 成功レスポンスモデル */

export interface GraphQLGetViewerSuccessResponse {
  data: {
    is_super_follow_subscriber?: boolean
    viewer: {
      create_community_action_result: {
        __typename: string
        message: string
        reason: string
      }
      educationFlags: {
        flag: string
        timestamp: number
      }[]
      has_community_memberships: boolean
      is_active_creator: boolean
      is_tfe_restricted_session: boolean
      super_followers_count?: number
      user_features: {
        enabled: boolean
        feature: string
      }[]
      user_results: {
        result: {
          __typename: string
          affiliates_highlighted_label: {}
          creator_subscriptions_count?: number
          has_graduated_access: boolean
          has_passkey_authentication?: boolean
          id: string
          is_blue_verified: boolean
          is_profile_translatable: boolean
          legacy: {
            can_dm?: boolean
            can_media_tag?: boolean
            created_at?: string
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
            following?: boolean
            friends_count: number
            has_custom_timelines: boolean
            is_translator: boolean
            listed_count: number
            location?: string
            media_count: number
            name?: string
            needs_phone_verification: boolean
            normal_followers_count: number
            pinned_tweet_ids_str: string[]
            possibly_sensitive: boolean
            profile_banner_url: string
            profile_image_url_https?: string
            profile_interstitial_type: string
            screen_name?: string
            statuses_count: number
            translator_type: string
            verified?: boolean
            want_retweets?: boolean
            withheld_in_countries: unknown[]
            url?: string
          }
          legacy_extended_profile: {
            birthdate?: {
              day: number
              month: number
              visibility: string
              year: number
              year_visibility: string
            }
          }
          parody_commentary_fan_label: string
          profile_image_shape: string
          rest_id: string
          super_follows_application_status?: string
          tipjar_settings: {}
          upsell_config_for_surfaces?: {
            configs: {
              key: string
              value: {
                attribution_params: {
                  referrer: string
                }
                default_content: {
                  destination: {
                    charge_interval: string
                    product_category: string
                  }
                  key: string
                  render_properties: {
                    __typename: string
                    action_label?: string
                    cta?: {
                      __typename: string
                      action_label: string
                    }
                    primary_label?: string
                    secondary_label?: string
                  }
                }
                variant_config?: {
                  ddg_experiment_gate?: string
                  variants: {
                    destination: {
                      charge_interval: string
                      product_category: string
                    }
                    key: string
                    render_properties: {
                      __typename: string
                      action_label?: string
                      cta?: {
                        __typename: string
                        action_label: string
                      }
                      primary_label?: string
                      secondary_label?: string
                      decoration_label?: string
                      image_url?: string
                    }
                  }[]
                }
              }
            }[]
          }
          verification?: {
            verified: boolean
          }
          avatar?: {
            image_url: string
          }
          core?: {
            created_at: string
            name: string
            screen_name: string
          }
          dm_permissions?: {
            can_dm: boolean
          }
          location?: {
            location: string
          }
          media_permissions?: {
            can_media_tag: boolean
          }
          privacy?: {
            protected: boolean
          }
          relationship_perspectives?: {
            following?: boolean
          }
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
    path: string[]
    retry_after: number
    source: string
    tracing: {
      trace_id: string
    }
  }[]
}
