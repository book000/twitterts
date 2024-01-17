/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL GET ProfileSpotlightsQuery 成功レスポンスモデル */

export interface GraphQLGetProfileSpotlightsQuerySuccessResponse {
  data: {
    user_result_by_screen_name: {
      result: {
        __typename: string
        legacy: {
          blocking: boolean
          blocked_by: boolean
          protected: boolean
          following: boolean
          followed_by: boolean
          name: string
          screen_name: string
        }
        rest_id: string
        profilemodules: {
          v1: {
            profile_module: {
              __typename: string
              __isProfileModule: string
              config?: {
                enable_call?: boolean
                enable_dm?: boolean
                enable_email?: boolean
                enable_sms?: boolean
                community_results?: {
                  result: {
                    __typename: string
                    members_facepile_results: {
                      result?: {
                        __typename: string
                        legacy?: {
                          profile_image_url_https: string
                        }
                        id?: string
                      }
                      id: string
                    }[]
                    default_theme: string
                    custom_theme?: string
                    member_count: number
                    default_banner_media: {
                      media_info: {
                        __typename: string
                        color_info: {
                          palette: {
                            rgb: {
                              red: number
                              green: number
                              blue: number
                            }
                            percentage: number
                          }[]
                        }
                        original_img_url: string
                        original_img_width: number
                        original_img_height: number
                      }
                      id: string
                    }
                    custom_banner_media?: {
                      media_info: {
                        __typename: string
                        color_info: {
                          palette: {
                            rgb: {
                              red: number
                              green: number
                              blue: number
                            }
                            percentage: number
                          }[]
                        }
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
                      id: string
                    }
                    description: string
                    name: string
                    rest_id: string
                    id: string
                  }
                  id: string
                }
                show_more_jobs?: boolean
              }
              data?: {
                address?: {
                  formatted_address: string
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
                website?: {
                  display: string
                  url: string
                }
                open_times?: {
                  open_times_type?: string
                  is_open?: boolean
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
                google_verification_data?: {
                  static_map_image_url?: string
                }
                items?: {
                  __typename: string
                  product_core_data: {
                    product_details: {
                      cover_media: {
                        media_info: {
                          __typename: string
                          original_img_url: string
                        }
                        id: string
                      }
                      external_url: {
                        url: string
                      }
                      price: {
                        currency_code: string
                        micro_value: string
                      }
                      product_sale?: {
                        price: {
                          currency_code: string
                          micro_value: string
                        }
                      }
                      title: string
                      mobile_url?: {
                        url: string
                      }
                    }
                    product_identifiers: {
                      google_product_category?: {
                        shortened_google_product_category_name: string
                      }
                      custom_product_type?: string[]
                    }
                    product_metadata: {
                      product_key: string
                    }
                  }
                  id: string
                }[]
                jobs?: {
                  id: string
                  redirect_url: string
                  location: string
                  title: string
                  salary_currency_code?: string
                  salary_interval?: number
                  salary_max?: number
                  salary_min?: number
                }[]
              }
            }
          }[]
        }
        id: string
      }
      id: string
    }
  }
}
