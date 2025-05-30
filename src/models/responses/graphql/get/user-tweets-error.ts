/** GraphQL GET UserTweets 失敗レスポンスモデル */

export interface GraphQLGetUserTweetsErrorResponse {
  errors: {
    code: number
    message: string
  }[]
}
