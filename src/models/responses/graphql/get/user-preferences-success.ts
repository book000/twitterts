 

/** GraphQL GET UserPreferences 成功レスポンスモデル */

export interface GraphQLGetUserPreferencesSuccessResponse {
  data: {
    user_preferences: {
      allow_video_downloads: boolean
      hide_likes_on_profile: boolean
    }
  }
}
