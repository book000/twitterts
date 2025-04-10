/** GraphQL GET DelegatedAccountListQuery 成功レスポンスモデル */

export interface GraphQLGetDelegatedAccountListQuerySuccessResponse {
  data: {
    viewer_v2: {
      list_delegation_groups: unknown[]
    }
  }
}
