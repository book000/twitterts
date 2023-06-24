/* eslint-disable @typescript-eslint/ban-types */

/** GraphQL GET GetUserClaims レスポンスモデル */

export interface GraphQLGetGetUserClaimsResponse {
  data: {
    viewer_v2: {
      claims: unknown[]
    }
  }
}
