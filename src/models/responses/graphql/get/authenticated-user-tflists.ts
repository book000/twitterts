/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL GET AuthenticatedUserTFLists レスポンスモデル */

export interface GraphQLGetAuthenticatedUserTFListsResponse {
  data: {
    authenticated_user_trusted_friends_lists: {
      id: string
      rest_id: string
      name: string
      member_count: number
    }[]
  }
}
