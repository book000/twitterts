/** GraphQL GET FollowHostButtonQuery 成功レスポンスモデル */

export interface GraphQLGetFollowHostButtonQuerySuccessResponse {
  data: {
    user: {
      result: {
        __typename: string
        rest_id: string
        legacy: {
          screen_name: string
          name: string
          following: boolean
        }
        id: string
      }
      id: string
    }
  }
}
