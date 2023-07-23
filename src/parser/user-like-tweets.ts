import { ObjectConverter } from '../converter'
import { BaseParser } from './base'
import { Status } from 'twitter-d'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Twitter } from '../twitter'
import { CustomUserTweetEntry } from '../models/responses/custom/custom-user-tweet-entry'
import { CustomTweetLegacyObject } from '../models/responses/custom/custom-tweet-legacy-object'
import { GraphQLGetLikesResponse } from '../models/responses/endpoints'
import { GraphQLGetLikesErrorResponse } from '../models/responses/graphql/get/likes-error'
import { ResponseParseError, TwitterOperationError } from '../models/exceptions'

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
        .flatMap((instruction) =>
          instruction.entries?.filter((entry) =>
            entry.entryId.startsWith('tweet-')
          )
        ) as CustomUserTweetEntry[]

    const rawTweets = entries.map(
      (entry) => entry.content.itemContent.tweet_results.result
    )
    this.tweets = rawTweets.map((tweet) => {
      const legacy = tweet.legacy ?? tweet.tweet?.legacy ?? undefined
      if (!legacy) {
        throw new ResponseParseError('Failed to get legacy')
      }
      const userResult =
        tweet.core?.user_results.result ??
        tweet.tweet?.core.user_results.result ??
        undefined
      if (!userResult) {
        throw new ResponseParseError(
          `Failed to get userResult ${legacy.id_str}`
        )
      }
      return {
        id: Number(legacy.id_str),
        source: tweet.source ?? 'NULL',
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

  private isErrorResponse(
    response: GraphQLGetLikesResponse
  ): response is GraphQLGetLikesErrorResponse {
    return 'errors' in response && response.errors && response.errors.length > 0
  }
}
