/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL GET AuthenticatedUserTFLists 成功レスポンスモデル */

export interface GraphQLGetAuthenticatedUserTFListsSuccessResponse {
  data: {
    authenticated_user_trusted_friends_lists: {
      id: string
      rest_id: string
      name: string
      member_count: number
    }[]
  }
}
