/* eslint-disable @typescript-eslint/ban-types */

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
