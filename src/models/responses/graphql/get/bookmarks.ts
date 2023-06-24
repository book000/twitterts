/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL GET Bookmarks レスポンスモデル */

export interface GraphQLGetBookmarksResponse {
  data: {
    bookmark_timeline_v2: {
      timeline: {
        instructions: unknown[]
        responseObjects: {
          feedbackActions: unknown[]
          immediateReactions: unknown[]
        }
      }
    }
  }
}
