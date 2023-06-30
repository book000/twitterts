/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL GET ListPins 失敗レスポンスモデル */

export interface GraphQLGetListPinsErrorResponse {
  errors: {
    message: string
    code: number
  }[]
}
