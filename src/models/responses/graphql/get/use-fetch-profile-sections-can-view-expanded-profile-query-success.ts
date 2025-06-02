/** GraphQL GET useFetchProfileSectionsCanViewExpandedProfileQuery 成功レスポンスモデル */

export interface GraphQLGetUseFetchProfileSectionsCanViewExpandedProfileQuerySuccessResponse {
  data: {
    user_result_by_screen_name?: {
      id: string
      result: {
        __typename: string
        can_view_expanded_profile?: boolean
        id: string
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
