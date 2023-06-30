/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL GET articleNudgeDomains 失敗レスポンスモデル */

export interface GraphQLGetArticleNudgeDomainsErrorResponse {
  errors: {
    message: string
    code: number
  }[]
}
