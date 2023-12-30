/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL GET HomeLatestTimeline 失敗レスポンスモデル */

export interface GraphQLGetHomeLatestTimelineErrorResponse {
  errors: {
    message: string
    code: number
  }[]
}
