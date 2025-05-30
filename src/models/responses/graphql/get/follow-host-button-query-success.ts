 

/** GraphQL GET FollowHostButtonQuery 成功レスポンスモデル */

export interface GraphQLGetFollowHostButtonQuerySuccessResponse {
  data: {
    user: {
      id: string
      result: {
        __typename: string
        id: string
        legacy: {
          following: boolean
          name: string
          screen_name: string
        }
        rest_id: string
      }
    }
  }
}
