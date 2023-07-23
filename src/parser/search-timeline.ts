import { ObjectConverter } from '../converter'
import { CustomSearchTimelineEntry } from '../models/responses/custom/custom-search-timeline-entry'
import { BaseParser } from './base'
import { Status } from 'twitter-d'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Twitter } from '../twitter'
import { GraphQLGetSearchTimelineResponse } from '../models/responses/endpoints'
import { CustomTweetLegacyObject } from '../models/responses/custom/custom-tweet-legacy-object'
import { ResponseParseError } from '../models/exceptions'

/**
 * {@link Twitter.searchTweets} のレスポンスパーサー
 */
export class SearchTimelineParser extends BaseParser<'SearchTimeline'> {
  private tweets: Status[] = []

  /**
   * @param response {@link Twitter['searchTweets']} のレスポンス
   */
  constructor(response: GraphQLGetSearchTimelineResponse) {
    super(response)

    const entries =
      this.response.data.search_by_raw_query.search_timeline.timeline.instructions
        .filter(
          (instruction) =>
            instruction.type === 'TimelineAddEntries' && instruction.entries
        )
        .flatMap((instruction) =>
          instruction.entries?.filter((entry) =>
            entry.entryId.startsWith('tweet-')
          )
        ) as CustomSearchTimelineEntry[]

    const rawTweets = entries.map(
      (entry) => entry.content.itemContent.tweet_results.result
    )
    // @ts-ignore
    this.tweets = rawTweets.map((tweet) => {
      const legacy = tweet.legacy ?? undefined
      if (!legacy) {
        throw new ResponseParseError('Failed to get legacy')
      }
      const userResult = tweet.core.user_results.result ?? undefined
      if (!userResult) {
        throw new ResponseParseError('Failed to get userResult')
      }
      return {
        id: Number(legacy.id_str),
        source: tweet.source,
        truncated: false,
        user: {
          id: Number(userResult.rest_id),
          id_str: userResult.rest_id,
          ...userResult.legacy,
        },
        ...legacy,
        display_text_range: legacy.display_text_range
          ? [legacy.display_text_range[0], legacy.display_text_range[1]]
          : undefined,
        entities: ObjectConverter.convertEntity(
          legacy as CustomTweetLegacyObject
        ),
        extended_entities: ObjectConverter.convertExtendedEntity(
          legacy as CustomTweetLegacyObject
        ),
      }
    })
  }

  /**
   * 検索結果のツイート群を取得する
   *
   * @returns ツイートの配列
   */
  public getTweets() {
    return this.tweets
  }
}
