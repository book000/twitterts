/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET UsersVerifiedAvatars 成功レスポンスモデル */

export interface GraphQLGetUsersVerifiedAvatarsSuccessResponse {
  data: {
    usersResults: {
      result: {
        __typename: string
        is_blue_verified: boolean
        profile_image_shape: string
        affiliates_highlighted_label: {}
        rest_id: string
        legacy: {}
        has_nft_avatar?: boolean
      }
    }[]
  }
}
