/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET GrokHome 成功レスポンスモデル */

export interface GraphQLGetGrokHomeSuccessResponse {
  data: {
    grok_home: {
      default_grok_mode: string
      default_grok_model_option_id: string
      eligible_for_grok: boolean
      free_access_enabled: boolean
      grok_model_options: {
        description: string
        id: string
        is_enabled: boolean
        name: string
      }[]
      grok_version: string
      ineligible_reasons: unknown[]
      layout: {
        mode_buttons: {
          filter_key: string
          free_status: string
          icon_name: string
          label: string
          premium_plus_status: string
          premium_status: string
          supported_models: string[]
        }[]
        name: string
        sections: {
          prompts: {
            action?: string
            display_body: string
            display_label: string
            filter_key?: string
            icon_name: string
            prompt: string
            prompt_id: string
          }[]
          section_type: string
          subtitle?: string
          title?: string
        }[]
      }
      preferred_prompts: {
        display_label: string
        icon_name: string
        prompt: string
        prompt_id: string
      }[]
      prompts: {
        header: string
        prompt_id: string
        text: string
        value: string
      }[]
    }
  }
}
