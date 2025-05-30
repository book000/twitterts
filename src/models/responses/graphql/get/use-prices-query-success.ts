 

/** GraphQL GET usePricesQuery 成功レスポンスモデル */

export interface GraphQLGetUsePricesQuerySuccessResponse {
  data: {
    web_subscription_product_details_by_rest_id: {
      id: string
      prices: {
        amount_local_micro: number
        charge_interval: string
        currency_code: string
        external_price_id: string
        metadata: {
          purchasable: boolean
          seated: boolean
        }
        price_type: string
      }[]
      rest_id: string
    }
  }
}
