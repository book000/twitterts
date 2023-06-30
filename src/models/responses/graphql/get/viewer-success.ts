/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL GET Viewer 成功レスポンスモデル */

export interface GraphQLGetViewerSuccessResponse {
  errors: {
    message: string
    locations: {
      line: number
      column: number
    }[]
    path: string[]
    extensions: {
      name: string
      source: string
      retry_after?: number
      code: number
      kind: string
      tracing: {
        trace_id: string
      }
    }
    code: number
    kind: string
    name: string
    source: string
    retry_after?: number
    tracing: {
      trace_id: string
    }
  }[]
  data: {
    viewer: {
      has_community_memberships: boolean
      create_community_action_result: {
        __typename: string
        reason: string
        message: string
      }
      user_features: {
        feature: string
        enabled: boolean
      }[]
      is_tfe_restricted_session: boolean
    }
  }
}
