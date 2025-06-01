/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET UserByRestId 失敗レスポンスモデル */

export interface GraphQLGetUserByRestIdErrorResponse {
  errors: {
    code: number
    message: string
  }[]
}
