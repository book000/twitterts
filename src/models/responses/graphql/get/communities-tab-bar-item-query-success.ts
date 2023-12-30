/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL GET CommunitiesTabBarItemQuery 成功レスポンスモデル */

export interface GraphQLGetCommunitiesTabBarItemQuerySuccessResponse {
  data: {
    communities_viewer?: {
      unread_indicator_active: boolean
      id: string
    }
  }
}
