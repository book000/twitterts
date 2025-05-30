 

/** GraphQL GET isEligibleForVoButtonUpsellQuery 成功レスポンスモデル */

export interface GraphQLGetIsEligibleForVoButtonUpsellQuerySuccessResponse {
  data: {
    user_result_by_screen_name: {
      id: string
      result: {
        __typename: string
        id: string
        is_active_vo_upsell_candidate: boolean
      }
    }
  }
}
