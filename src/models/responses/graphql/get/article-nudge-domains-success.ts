/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET articleNudgeDomains 成功レスポンスモデル */

export interface GraphQLGetArticleNudgeDomainsSuccessResponse {
  data: {
    viewer: {
      article_nudge_domains: string[]
    }
  }
}
