/** GraphQL GET Likes 失敗レスポンスモデル */

export interface GraphQLGetLikesErrorResponse {
  errors: {
    code: number
    message: string
  }[]
}
