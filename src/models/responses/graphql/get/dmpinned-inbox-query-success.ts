/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET DMPinnedInboxQuery 成功レスポンスモデル */

export interface GraphQLGetDMPinnedInboxQuerySuccessResponse {
  data: {
    labeled_conversation_slice: {
      items: unknown[]
      slice_info: {}
    }
  }
}
