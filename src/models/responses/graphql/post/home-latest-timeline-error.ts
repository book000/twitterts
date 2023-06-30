/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL POST HomeLatestTimeline 失敗レスポンスモデル */

export interface GraphQLPostHomeLatestTimelineErrorResponse {
  errors: {
    message: string
    code: number
  }[]
}
