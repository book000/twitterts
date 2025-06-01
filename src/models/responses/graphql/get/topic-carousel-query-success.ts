/* eslint-disable @typescript-eslint/no-empty-object-type */

/** GraphQL GET TopicCarouselQuery 成功レスポンスモデル */

export interface GraphQLGetTopicCarouselQuerySuccessResponse {
  data: {
    communityTopicResults: {
      community_topics: {
        subtopics: {
          topic_id: string
          topic_name: string
        }[]
        topic_id: string
        topic_name: string
      }[]
    }
  }
}
