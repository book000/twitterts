import { CustomSearchTimelineEntry } from '../models/responses/custom/custom-search-timeline-entry'
import { BaseParser } from './base'
import {
  GraphQLGetHomeLatestTimelineResponse,
  GraphQLGetHomeTimelineResponse,
} from '../models/responses/endpoints'
import { CustomTweetObject } from '../models/responses/custom/custom-tweet-object'
import { CustomTimelineTweetEntry } from '../models/responses/custom/custom-timeline-tweet-entry'
import { CustomGraphQLTimelineSuccessResponse } from '../models/responses/custom/custom-graph-qltimeline-success-response'

interface Instruction {
  type: string
  entries: CustomSearchTimelineEntry[]
}

/**
 * {@link Twitter["getHomeTimelineTweets"]} のレスポンスパーサー
 */
export class HomeTimelineParser extends BaseParser<
  'HomeTimeline' | 'HomeLatestTimeline'
> {
  private rawTweets: CustomTweetObject[] = []

  /**
   * @param response {@link Twitter['getHomeTimelineTweets']} のレスポンス
   */
  constructor(
    response: CustomGraphQLTimelineSuccessResponse,
    isIncludingPromotedTweets: boolean
  ) {
    super(
      response as
        | GraphQLGetHomeTimelineResponse
        | GraphQLGetHomeLatestTimelineResponse
    )

    if (!('data' in this.response)) {
      throw new Error('This response is error response.')
    }
    if (!this.response.data.home.home_timeline_urt) {
      throw new Error('This response may not be the home timeline response.')
    }

    const instructions = this.response.data.home.home_timeline_urt
      .instructions as Instruction[]
    const entries: CustomTimelineTweetEntry[] = instructions
      .filter(
        (instruction) =>
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          instruction.type === 'TimelineAddEntries' && instruction.entries
      )
      .flatMap((instruction) =>
        instruction.entries.filter(
          (entry) =>
            entry.entryId.startsWith('tweet-') ||
            (isIncludingPromotedTweets
              ? entry.entryId.startsWith('promoted-tweet') ||
                entry.entryId.startsWith('promotedTweet')
              : false)
        )
      ) as CustomTimelineTweetEntry[]

    const rawTweets: CustomTweetObject[] = entries
      .map((entry) => {
        return {
          __entryId: entry.entryId,
          ...entry.content.itemContent.tweet_results.result,
        }
      })
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
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
