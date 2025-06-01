/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET TweetDetail 失敗レスポンスモデル */

export interface GraphQLGetTweetDetailErrorResponse {
  errors: {
    code: number
    message: string
  }[]
}
