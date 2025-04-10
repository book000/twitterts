/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET useVerifiedOrgFeatureHelperQuery 成功レスポンスモデル */

export interface GraphQLGetUseVerifiedOrgFeatureHelperQuerySuccessResponse {
  data: {
    verified_organization_processing_status: string
    viewer: {
      user_results: {
        id: string
        result: {
          __typename: string
          business_account: {}
          id: string
          verified_organization_features: unknown[]
        }
      }
    }
  }
}
