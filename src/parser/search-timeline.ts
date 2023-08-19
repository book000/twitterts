import { CustomSearchTimelineEntry } from '../models/responses/custom/custom-search-timeline-entry'
import { BaseParser } from './base'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Twitter } from '../twitter'
import { GraphQLGetSearchTimelineResponse } from '../models/responses/endpoints'
import { CustomTweetObject } from '../models/responses/custom/custom-tweet-object'

/**
 * {@link Twitter.searchTweets} のレスポンスパーサー
 */
export class SearchTimelineParser extends BaseParser<'SearchTimeline'> {
  private rawTweets: CustomTweetObject[] = []

  /**
   * @param response {@link Twitter['searchTweets']} のレスポンス
   */
  constructor(
    response: GraphQLGetSearchTimelineResponse,
    isIncludingPromotedTweets: boolean
  ) {
    super(response)

    const entries =
      this.response.data.search_by_raw_query.search_timeline.timeline.instructions
        .filter(
          (instruction) =>
            instruction.type === 'TimelineAddEntries' && instruction.entries
        )
        .flatMap(
          (instruction) =>
            instruction.entries
              ?.filter((entry) => entry.entryId.startsWith('tweet-'))
              .filter((entry) =>
                isIncludingPromotedTweets
                  ? true
                  : entry.entryId.startsWith('promoted-tweet') ||
                    entry.entryId.startsWith('promotedTweet')
              )
        ) as CustomSearchTimelineEntry[]

    const rawTweets: CustomTweetObject[] = entries
      .map((entry) => entry.content.itemContent.tweet_results.result)
      .filter((tweet) => !!tweet) as CustomTweetObject[]
    this.rawTweets = rawTweets
  }

  /**
   * 検索結果の非正規化ツイート群を取得する
   *
   * @returns 非正規化ツイートの配列
   */
  public getRawTweets(): CustomTweetObject[] {
    return this.rawTweets
  }
}
