/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL GET Bookmarks 成功レスポンスモデル */

export interface GraphQLGetBookmarksSuccessResponse {
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
