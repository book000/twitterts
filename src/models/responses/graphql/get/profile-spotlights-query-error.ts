/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL GET ProfileSpotlightsQuery 失敗レスポンスモデル */

export interface GraphQLGetProfileSpotlightsQueryErrorResponse {
  errors: {
    message: string
    code: number
  }[]
}
