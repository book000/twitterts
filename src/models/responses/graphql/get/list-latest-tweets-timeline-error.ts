/** GraphQL GET ListLatestTweetsTimeline 失敗レスポンスモデル */

export interface GraphQLGetListLatestTweetsTimelineErrorResponse {
  errors: {
    code: number
    message: string
  }[]
}
