/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL GET SearchTimeline 失敗レスポンスモデル */

export interface GraphQLGetSearchTimelineErrorResponse {
  errors: {
    code: number
    message: string
  }[]
}
