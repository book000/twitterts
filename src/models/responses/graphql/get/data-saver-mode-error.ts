/** GraphQL GET DataSaverMode 失敗レスポンスモデル */

export interface GraphQLGetDataSaverModeErrorResponse {
  errors: {
    code: number
    message: string
  }[]
}
