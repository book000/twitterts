/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET DataSaverMode 成功レスポンスモデル */

export interface GraphQLGetDataSaverModeSuccessResponse {
  data: {
    viewer: {}
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
