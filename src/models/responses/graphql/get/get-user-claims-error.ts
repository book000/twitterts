/** GraphQL GET GetUserClaims 失敗レスポンスモデル */

export interface GraphQLGetGetUserClaimsErrorResponse {
  errors: {
    message: string
    code: number
  }[]
}
