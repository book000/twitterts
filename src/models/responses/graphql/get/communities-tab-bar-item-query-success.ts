/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL GET CommunitiesTabBarItemQuery 成功レスポンスモデル */

export interface GraphQLGetCommunitiesTabBarItemQuerySuccessResponse {
  data: {
    communities_viewer?: {
      unread_indicator_active: boolean
      id: string
    }
  }
  errors?: {
    message: string
    locations: {
      line: number
      column: number
    }[]
    path: string[]
    extensions: {
      name: string
      source: string
      retry_after: number
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
    retry_after: number
    tracing: {
      trace_id: string
    }
  }[]
}
