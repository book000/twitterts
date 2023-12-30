/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL GET UserByRestId 失敗レスポンスモデル */

export interface GraphQLGetUserByRestIdErrorResponse {
  errors: {
    message: string
    code: number
  }[]
}
