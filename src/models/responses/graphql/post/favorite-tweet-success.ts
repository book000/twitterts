/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL POST FavoriteTweet 成功レスポンスモデル */

export interface GraphQLPostFavoriteTweetSuccessResponse {
  data: {
    favorite_tweet: string
  }
}
