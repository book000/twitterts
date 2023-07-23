/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL GET Likes 失敗レスポンスモデル */

export interface GraphQLGetLikesErrorResponse {
  errors: {
    code: number
    message: string
  }[]
}
