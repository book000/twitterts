/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL GET ProfileSpotlightsQuery レスポンスモデル */

export interface GraphQLGetProfileSpotlightsQueryResponse {
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
          v1: unknown[]
        }
        id: string
      }
      id: string
    }
  }
}
