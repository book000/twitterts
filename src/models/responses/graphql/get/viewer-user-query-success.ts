 

/** GraphQL GET viewerUserQuery 成功レスポンスモデル */

export interface GraphQLGetViewerUserQuerySuccessResponse {
  data: {
    viewer: {
      user_results: {
        id: string
        result: {
          __typename: string
          id: string
          legacy: {
            screen_name: string
          }
          rest_id: string
        }
      }
    }
  }
}
