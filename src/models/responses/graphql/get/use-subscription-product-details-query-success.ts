 

/** GraphQL GET useSubscriptionProductDetailsQuery 成功レスポンスモデル */

export interface GraphQLGetUseSubscriptionProductDetailsQuerySuccessResponse {
  data: {
    web_subscription_product_details: {
      id: string
      prices: {
        amount_local_micro: number
        charge_interval: string
        currency_code: string
        external_price_id: string
        price_type: string
      }[]
      promotions: {
        charge_interval: string
      }[]
      rest_id: string
    }
  }
}
