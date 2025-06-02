/** GraphQL GET FetchScheduledTweets 成功レスポンスモデル */

export interface GraphQLGetFetchScheduledTweetsSuccessResponse {
  data: {
    viewer: {
      scheduled_tweet_list: unknown[]
    }
  }
}
