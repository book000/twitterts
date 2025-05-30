 

/** GraphQL GET CommunitiesCreateButtonQuery 成功レスポンスモデル */

export interface GraphQLGetCommunitiesCreateButtonQuerySuccessResponse {
  data: {
    viewer: {
      create_community_action_result: {
        __isCommunityCreateActionResult: string
        __typename: string
        reason: string
      }
    }
  }
}
