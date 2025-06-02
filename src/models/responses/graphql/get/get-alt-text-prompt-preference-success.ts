/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET getAltTextPromptPreference 成功レスポンスモデル */

export interface GraphQLGetGetAltTextPromptPreferenceSuccessResponse {
  data: {}
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
