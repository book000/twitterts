/** GraphQL GET ProfileSpotlightsQuery 成功レスポンスモデル */

export interface GraphQLGetProfileSpotlightsQuerySuccessResponse {
  data: {
    user_result_by_screen_name?: {
      id: string
      result?: {
        __typename: string
        id: string
        is_verified_organization?: boolean
        legacy: {
          blocked_by?: boolean
          blocking?: boolean
          followed_by?: boolean
          following?: boolean
          name?: string
          protected?: boolean
          screen_name?: string
        }
        profilemodules?: {
          v1: {
            profile_module: {
              __isProfileModule: string
              __typename: string
              config?: {
                show_more_jobs?: boolean
                community_results?: {
                  id: string
                  result: {
                    __typename: string
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
                    member_count: number
                    members_facepile_results: {
                      id: string
                      result: {
                        __typename: string
                        id: string
                        legacy: {
                          profile_image_url_https: string
                        }
                      }
                    }[]
                    name: string
                    rest_id: string
                  }
                }
                enable_call?: boolean
                enable_dm?: boolean
                enable_sms?: boolean
                enable_email?: boolean
              }
              data?: {
                featured_jobs_results?: {
                  id: string
                  rest_id: string
                  result: {
                    __typename: string
                    core: {
                      formatted_salary?: string
                      location: string
                      redirect_url: string
                      salary_currency_code: string
                      salary_interval: number
                      salary_max?: number
                      salary_min?: number
                      title: string
                    }
                    id: string
                  }
                }[]
                items?: {
                  __typename: string
                  id: string
                  product_core_data: {
                    product_details: {
                      cover_media: {
                        id: string
                        media_info: {
                          __typename: string
                          original_img_url: string
                        }
                      }
                      external_url: {
                        url: string
                      }
                      price: {
                        currency_code: string
                        micro_value: string
                      }
                      title: string
                      product_sale?: {
                        price: {
                          currency_code: string
                          micro_value: string
                        }
                      }
                    }
                    product_identifiers: {
                      google_product_category?: {
                        shortened_google_product_category_name: string
                      }
                    }
                    product_metadata: {
                      product_key: string
                    }
                  }
                }[]
                address?: {
                  formatted_address: string
                }
                google_verification_data?: {
                  static_map_image_url?: string
                }
                open_times?: {
                  is_open?: boolean
                  open_times_type?: string
                  opens?: {
                    day: string
                    time: {
                      hour: number
                      minute: number
                    }
                  }
                  closes?: {
                    day: string
                    time: {
                      hour: number
                      minute: number
                    }
                  }
                }
                website?: {
                  display: string
                  url: string
                }
                contact?: {
                  email?: {
                    email_address: string
                  }
                  phone?: {
                    country_code: string
                    number: string
                  }
                }
              }
            }
          }[]
        }
        rest_id: string
        privacy?: {
          protected: boolean
        }
        relationship_perspectives?: {
          blocked_by?: boolean
          blocking?: boolean
          followed_by?: boolean
          following?: boolean
        }
        core?: {
          name: string
          screen_name: string
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
