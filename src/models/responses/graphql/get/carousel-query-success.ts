/** GraphQL GET CarouselQuery 成功レスポンスモデル */

export interface GraphQLGetCarouselQuerySuccessResponse {
  data: {
    viewer_v2: {
      user_results: {
        id: string
        result: {
          __typename: string
          community_memberships_slice: {
            items_results: unknown[]
          }
          id: string
          legacy: {
            screen_name: string
          }
        }
      }
    }
  }
}
