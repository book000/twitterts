/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL POST FavoriteTweet 成功レスポンスモデル */

export interface GraphQLPostFavoriteTweetSuccessResponse {
  data: {
    favorite_tweet?: string
  }
  errors?: {
    message: string
    locations: {
      line: number
      column: number
    }[]
    path: string[]
    extensions: {
      name: string
      source: string
      code: number
      kind: string
      tracing: {
        trace_id: string
      }
    }
    code: number
    kind: string
    name: string
    source: string
    tracing: {
      trace_id: string
    }
  }[]
}
