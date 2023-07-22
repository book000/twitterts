/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL GET QuickPromoteEligibility 成功レスポンスモデル */

export interface GraphQLGetQuickPromoteEligibilitySuccessResponse {
  data: {
    tweet_result_by_rest_id: {
      result: {
        __typename: string
        quick_promote_eligibility: {
          eligibility: string
        }
      }
    }
  }
}
