import { ObjectConverter } from '../converter'
import { BaseParser } from './base'
import { Status } from 'twitter-d'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Twitter } from '../twitter'
import { GraphQLGetLikesResponse } from '../models/responses/endpoints'
import { GraphQLGetLikesErrorResponse } from '../models/responses/graphql/get/likes-error'
import { TwitterOperationError } from '../models/exceptions'
import { CustomUserLikeTweetEntry } from '../models/responses/custom/custom-user-like-tweet-entry'
import { CustomTweetObject } from '../models/responses/custom/custom-tweet-object'

/**
 * {@link Twitter.getUserLikeTweets} のレスポンスパーサー
 */
export class UserLikeTweetsParser extends BaseParser<'Likes'> {
  private tweets: Status[] = []

  /**
   * @param response {@link Twitter['getUserLikeTweets']} のレスポンス
   */
  constructor(response: GraphQLGetLikesResponse) {
    super(response)

    if (this.isErrorResponse(this.response)) {
      throw new TwitterOperationError(this.response.errors[0].message)
    }

    const entries =
      this.response.data.user.result.timeline_v2.timeline.instructions
        .filter(
          (instruction) =>
            instruction.type === 'TimelineAddEntries' && instruction.entries
        )
        .flatMap(
          (instruction) =>
            instruction.entries?.filter((entry) =>
              entry.entryId.startsWith('tweet-')
            )
        ) as CustomUserLikeTweetEntry[]

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
    response: GraphQLGetLikesResponse
  ): response is GraphQLGetLikesErrorResponse {
    return (
      'errors' in response && !!response.errors && response.errors.length > 0
    )
  }
}
