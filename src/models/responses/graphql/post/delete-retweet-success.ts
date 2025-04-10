/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL POST DeleteRetweet 成功レスポンスモデル */

export interface GraphQLPostDeleteRetweetSuccessResponse {
  data: {
    unretweet: {
      source_tweet_results: {
        result: {}
      }
    }
  }
}
