/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL GET DMPinnedInboxQuery レスポンスモデル */

export interface GraphQLGetDMPinnedInboxQueryResponse {
  data: {
    labeled_conversation_slice: {
      items: unknown[]
      slice_info: {}
    }
  }
}
