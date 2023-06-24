import { ObjectConverter } from '../converter'
import { CustomSearchTimelineEntry } from '../models/responses/custom/custom-search-timeline-entry'
import { GraphQLGetSearchTimelineResponse } from '../models/responses/graphql/get/search-timeline'
import { BaseParser } from './base'
import { Status } from 'twitter-d'

export class SearchTimelineParser implements BaseParser<'SearchTimeline'> {
  private entries: CustomSearchTimelineEntry[] = []
  private tweets: Status[] = []

  parse(response: GraphQLGetSearchTimelineResponse) {
    this.entries =
      response.data.search_by_raw_query.search_timeline.timeline.instructions
        .filter(
          (instruction) =>
            instruction.type === 'TimelineAddEntries' && instruction.entries
        )
        .flatMap((instruction) =>
          instruction.entries?.filter((entry) =>
            entry.entryId.startsWith('tweet-')
          )
        ) as CustomSearchTimelineEntry[]
  }

  convert() {
    const rawTweets = this.entries.map(
      (entry) => entry.content.itemContent.tweet_results.result
    )
    // @ts-ignore
    this.tweets = rawTweets.map((tweet) => {
      const legacy = tweet.legacy ?? tweet?.legacy ?? undefined
      const userResult = tweet.core.user_results.result ?? undefined
      if (!legacy) {
        throw new Error('Failed to get legacy')
      }
      return {
        id: Number(legacy.id_str),
        source: tweet.source ?? 'NULL',
        truncated: false,
        user: {
          id: Number(userResult?.rest_id),
          id_str: userResult?.rest_id ?? 'NULL',
          ...userResult?.legacy,
        },
        ...legacy,
        display_text_range: legacy.display_text_range
          ? [legacy.display_text_range[0], legacy.display_text_range[1]]
          : undefined,
        entities: ObjectConverter.convertEntity(legacy),
        extended_entities: ObjectConverter.convertExtendedEntity(legacy),
      }
    })
  }

  getEntries() {
    return this.entries
  }

  getTweets() {
    return this.tweets
  }
}
