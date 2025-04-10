/** GraphQL GET useFetchProfileSectionsCanViewExpandedProfileQuery 成功レスポンスモデル */

export interface GraphQLGetUseFetchProfileSectionsCanViewExpandedProfileQuerySuccessResponse {
  data: {
    user_result_by_screen_name: {
      id: string
      result: {
        __typename: string
        can_view_expanded_profile: boolean
        id: string
      }
    }
  }
}
