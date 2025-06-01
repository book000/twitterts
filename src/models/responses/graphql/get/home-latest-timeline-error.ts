/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET HomeLatestTimeline 失敗レスポンスモデル */

export interface GraphQLGetHomeLatestTimelineErrorResponse {
  errors: {
    code: number
    message: string
  }[]
}
