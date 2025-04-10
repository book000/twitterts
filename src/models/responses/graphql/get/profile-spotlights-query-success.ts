/** GraphQL GET ProfileSpotlightsQuery 成功レスポンスモデル */

export interface GraphQLGetProfileSpotlightsQuerySuccessResponse {
  data: {
    user_result_by_screen_name: {
      id: string
      result: {
        __typename: string
        id: string
        is_verified_organization: boolean
        legacy: {
          blocked_by: boolean
          blocking: boolean
          followed_by: boolean
          following: boolean
          name: string
          protected: boolean
          screen_name: string
        }
        profilemodules?: {
          v1: unknown[]
        }
        rest_id: string
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
