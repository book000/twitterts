/** GraphQL GET PremiumContentQuery 成功レスポンスモデル */

export interface GraphQLGetPremiumContentQuerySuccessResponse {
  data: {
    blue_marketing_page_config: {
      card: {
        badge: {
          text: string
        }
        description: string
        image_url: string
        title: string
      }
      header: {
        description: string
        title: string
      }
      products: {
        feature_buckets: {
          buckets: {
            description: string
            features: {
              description?: string
              icon: string
              title: string
              variant?: string
            }[]
            image_url: string
            learn_more_description: string
            learn_more_text: string
            learn_more_title: string
            title: string
          }[]
          title: string
        }
        image_url: string
        product_category: string
        summary_bucket: {
          description: string
          features: {
            description?: string
            icon: string
            title: string
          }[]
        }
        title: string
      }[]
      subscribe_button: {
        detail_text: string
        disclaimer_cancel_url: string
        disclaimer_cancel_url_text: string
        disclaimer_text: string
        disclaimer_url: string
        disclaimer_url_text: string
      }
    }
  }
}
