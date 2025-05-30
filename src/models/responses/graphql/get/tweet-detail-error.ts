 

/** GraphQL GET TweetDetail 失敗レスポンスモデル */

export interface GraphQLGetTweetDetailErrorResponse {
  errors: {
    code: number
    message: string
  }[]
}
