 

/** GraphQL GET HomeLatestTimeline 失敗レスポンスモデル */

export interface GraphQLGetHomeLatestTimelineErrorResponse {
  errors: {
    code: number
    message: string
  }[]
}
