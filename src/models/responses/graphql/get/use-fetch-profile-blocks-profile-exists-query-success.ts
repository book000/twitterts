/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL GET useFetchProfileBlocksProfileExistsQuery 成功レスポンスモデル */

export interface GraphQLGetUseFetchProfileBlocksProfileExistsQuerySuccessResponse {
  data: {
    user_result_by_screen_name: {
      result: {
        __typename: string
        has_profile_blocks: boolean
        id: string
      }
      id: string
    }
  }
}
