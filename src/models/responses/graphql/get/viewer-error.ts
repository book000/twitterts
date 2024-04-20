/** GraphQL GET Viewer 失敗レスポンスモデル */

export interface GraphQLGetViewerErrorResponse {
  errors: {
    code: number
    message: string
  }[]
}
