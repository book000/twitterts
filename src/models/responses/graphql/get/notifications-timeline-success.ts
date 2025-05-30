 

/** GraphQL GET NotificationsTimeline 成功レスポンスモデル */

export interface GraphQLGetNotificationsTimelineSuccessResponse {
  data: {
    viewer_v2: {
      user_results: {
        result: {
          __typename: string
          notification_timeline: {
            id: string
            timeline: {
              instructions: {
                entries?: {
                  content: {
                    __typename: string
                    clientEventInfo?: {
                      component: string
                      details: {
                        notificationDetails: {
                          impressionId: string
                          metadata: string
                        }
                      }
                      element: string
                    }
                    cursorType?: string
                    entryType: string
                    itemContent?: {
                      __typename: string
                      id: string
                      itemType: string
                      notification_icon: string
                      notification_url: {
                        url: string
                        urlType: string
                      }
                      rich_message: {
                        entities: unknown[]
                        rtl: boolean
                        text: string
                      }
                      template: {
                        __typename: string
                        from_users: unknown[]
                        target_objects: unknown[]
                      }
                      timestamp_ms: string
                    }
                    value?: string
                  }
                  entryId: string
                  sortIndex: string
                }[]
                sort_index?: string
                type: string
              }[]
            }
          }
          rest_id: string
        }
      }
    }
  }
}
