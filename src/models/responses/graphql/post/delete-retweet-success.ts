/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL POST DeleteRetweet 成功レスポンスモデル */

export interface GraphQLPostDeleteRetweetSuccessResponse {
  data: {
    unretweet: {
      source_tweet_results: {
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
