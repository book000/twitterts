/** GraphQL GET DataSaverMode 失敗レスポンスモデル */

export interface GraphQLGetDataSaverModeErrorResponse {
  errors: {
    message: string
    code: number
  }[]
}
