/** GraphQL POST CreateRetweet 成功レスポンスモデル */

export interface GraphQLPostCreateRetweetSuccessResponse {
  data: {
    create_retweet: {
      retweet_results: {
        result: {
          rest_id: string
          legacy: {
            full_text: string
          }
        }
      }
    }
  }
}
