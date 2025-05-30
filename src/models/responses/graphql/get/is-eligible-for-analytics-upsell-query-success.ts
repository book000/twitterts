/** GraphQL GET isEligibleForAnalyticsUpsellQuery 成功レスポンスモデル */

export interface GraphQLGetIsEligibleForAnalyticsUpsellQuerySuccessResponse {
  data: {
    is_analytics_upsell_eligible?: boolean
  }
  errors?: {
    code: number
    extensions: {
      code: number
      kind: string
      name: string
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
    source: string
    tracing: {
      trace_id: string
    }
  }[]
}
