/** GraphQL GET ListPins 失敗レスポンスモデル */

export interface GraphQLGetListPinsErrorResponse {
  errors: {
    message: string
    code: number
  }[]
}
