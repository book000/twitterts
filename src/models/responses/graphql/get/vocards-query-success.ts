/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET VOCardsQuery 成功レスポンスモデル */

export interface GraphQLGetVOCardsQuerySuccessResponse {
  data: {
    user_result_by_screen_name: {
      id: string
      result: {
        __typename: string
        affiliates_highlighted_label: {
          label?: {
            badge: {
              url: string
            }
            description: string
            user_label_display_type: string
            user_label_type: string
          }
        }
        id: string
        is_blue_verified: boolean
        legacy: {
          is_translator: boolean
          name: string
          profile_image_url_https: string
          protected: boolean
          screen_name: string
          verified_type?: string
        }
        profile_image_shape: string
        super_following: boolean
      }
    }
  }
}
