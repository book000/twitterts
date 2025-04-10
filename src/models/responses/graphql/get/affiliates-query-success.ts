/** GraphQL GET affiliatesQuery 成功レスポンスモデル */

export interface GraphQLGetAffiliatesQuerySuccessResponse {
  data: {
    affiliations: {
      affiliated_account_ids_results: unknown[]
    }
  }
}
