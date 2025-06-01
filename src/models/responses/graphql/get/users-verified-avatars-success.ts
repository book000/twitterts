/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET UsersVerifiedAvatars 成功レスポンスモデル */

export interface GraphQLGetUsersVerifiedAvatarsSuccessResponse {
  data: {
    usersResults: {
      result: {
        __typename: string
        affiliates_highlighted_label?: {}
        is_blue_verified?: boolean
        legacy?: {}
        profile_image_shape?: string
        rest_id?: string
        verification?: {}
      }
    }[]
  }
}
