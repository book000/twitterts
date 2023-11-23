/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL GET PinnedTimelines 成功レスポンスモデル */

export interface GraphQLGetPinnedTimelinesSuccessResponse {
  data: {
    pinned_timelines: {
      pinned_timelines: unknown[]
    }
  }
}
