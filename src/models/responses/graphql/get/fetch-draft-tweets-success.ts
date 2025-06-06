/** GraphQL GET FetchDraftTweets 成功レスポンスモデル */

export interface GraphQLGetFetchDraftTweetsSuccessResponse {
  data: {
    viewer: {
      draft_list: {
        response_data: unknown[]
      }
    }
  }
}
