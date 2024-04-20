/** GraphQL GET UserByScreenName 失敗レスポンスモデル */

export interface GraphQLGetUserByScreenNameErrorResponse {
  errors: {
    message: string
    code: number
  }[]
}
