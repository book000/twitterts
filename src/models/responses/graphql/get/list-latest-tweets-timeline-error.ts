/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL GET ListLatestTweetsTimeline 失敗レスポンスモデル */

export interface GraphQLGetListLatestTweetsTimelineErrorResponse {
  errors: {
    code: number
    message: string
  }[]
}
