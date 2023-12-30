/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL GET PinnedTimelines 失敗レスポンスモデル */

export interface GraphQLGetPinnedTimelinesErrorResponse {
  errors: {
    message: string
    code: number
  }[]
}
