import { ObjectConverter } from '../converter'
import { BaseParser } from './base'
import { Status } from 'twitter-d'
import { CustomUserTweetEntry } from '../models/responses/custom/custom-user-tweet-entry'
import { GraphQLGetUserTweetsResponse } from '../models/responses/endpoints'
import { GraphQLGetUserTweetsErrorResponse } from '../models/responses/graphql/get/user-tweets-error'
import { TwitterOperationError } from '../models/exceptions'
import { CustomTweetObject } from '../models/responses/custom/custom-tweet-object'

/**
 * {@link Twitter.getUserTweets} のレスポンスパーサー
 */
export class UserTweetsParser extends BaseParser<'UserTweets'> {
  private tweets: Status[] = []

  /**
   * @param response {@link Twitter['getUserTweets']} のレスポンス
   */
  constructor(
    response: GraphQLGetUserTweetsResponse,
    isIncludingPromotedTweets: boolean
  ) {
    super(response)

    if (this.isErrorResponse(this.response)) {
      throw new TwitterOperationError(this.response.errors[0].message)
    }

    const timelineV1Instructions =
      this.response.data.user.result.timeline?.timeline?.instructions
    const timelineV2Instructions =
      this.response.data.user.result.timeline_v2?.timeline?.instructions
    const instructions = timelineV1Instructions ?? timelineV2Instructions
    if (!instructions) {
      throw new TwitterOperationError(
        'User tweets timeline instructions not found'
      )
    }
    const entries = instructions
      .filter(
        (instruction) =>
          instruction.type === 'TimelineAddEntries' && instruction.entries
      )
      .flatMap((instruction) =>
        instruction.entries?.filter(
          (entry) =>
            entry.entryId.startsWith('tweet-') ||
            (isIncludingPromotedTweets
              ? entry.entryId.startsWith('promoted-tweet') ||
                entry.entryId.startsWith('promotedTweet')
              : false)
        )
      ) as CustomUserTweetEntry[]

    const rawTweets = entries
      .map((entry) => entry.content.itemContent.tweet_results.result)

      .filter((tweet) => !!tweet)
    this.tweets = rawTweets.map((tweet) =>
      ObjectConverter.convertToStatus(tweet as CustomTweetObject)
    )
  }

  /**
   * 検索結果のツイート群を取得する
   *
   * @returns ツイートの配列
   */
  public getTweets(): Status[] {
    return this.tweets
  }

  private isErrorResponse(
    response: GraphQLGetUserTweetsResponse
  ): response is GraphQLGetUserTweetsErrorResponse {
    return (
      'errors' in response && !!response.errors && response.errors.length > 0
    )
  }
}
