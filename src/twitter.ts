import { Page, TimeoutError } from 'puppeteer-core'
import {
  AlreadyBlockedError,
  AlreadyLikedError,
  IllegalArgumentError,
  NotBlockedError,
  NotLikedError,
  TwitterOperationError,
  TwitterTimeoutError,
  TwitterTsError,
} from './models/exceptions'
import {
  GetUserByScreenNameOptions,
  LikeTweetOptions,
  SearchTweetsOptions,
  SearchType,
  GetUserTweetsOptions,
  GetScreenNameByUserIdOptions,
  GetUserByUserIdOptions,
  UnlikeTweetOptions,
  GetHomeTimelineTweetsOptions,
  TimelineType,
  BlockUserOptions,
  UnblockUserOptions,
  GetTweetOptions,
} from './options'
import { SearchTimelineParser } from './parser/search-timeline'
import { UserTweetsParser } from './parser/user-tweets'
import { TwitterScraper, TwitterScraperOptions } from './scraper'
import { ObjectConverter } from './converter'
import { HomeTimelineParser } from './parser/home-timeline-parser'
import { GraphQLGetUserByScreenNameSuccessResponse } from './models/responses/graphql/get/user-by-screen-name-success'
import { FullUser, Status } from 'twitter-d'
import { CustomTweetObject } from './models/responses/custom/custom-tweet-object'
import { CustomGraphQLTimelineSuccessResponse } from './models/responses/custom/custom-graph-qltimeline-success-response'

/**
 * {@link TwitterOptions} オプション
 */
export type TwitterOptions = TwitterScraperOptions

/**
 * Twitter スクレイピングライブラリクラス
 */
export class Twitter {
  public readonly scraper: TwitterScraper

  /**
   * @param scraper {@link TwitterScraper} インスタンス
   */
  private constructor(scraper: TwitterScraper) {
    this.scraper = scraper
  }

  /**
   * Twitter にログインする
   *
   * @param options ログインオプション
   * @returns Twitter インスタンス
   */
  public static async login(options: TwitterOptions): Promise<Twitter> {
    const scraper = new TwitterScraper(options)
    await scraper.login()
    return new Twitter(scraper)
  }

  /**
   * スクリーンネームからユーザー情報を取得する
   *
   * @param options ユーザー情報取得オプション
   * @returns ユーザー情報
   */
  public async getUserByScreenName(
    options: GetUserByScreenNameOptions
  ): Promise<GraphQLGetUserByScreenNameSuccessResponse> {
    if (!options.screenName) {
      throw new IllegalArgumentError('screenName is required')
    }
    const page = await this.scraper.getScraperPage()
    let response
    try {
      response = await page.waitSingleResponse(
        `https://x.com/${options.screenName}`,
        'GET',
        'GRAPHQL',
        'UserByScreenName'
      )
    } catch (error) {
      if (error instanceof TwitterTsError) {
        throw error
      }

      throw new TwitterOperationError((error as Error).message)
    } finally {
      await page.close()
    }
    if (this.isErrorResponse(response)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      throw new TwitterOperationError(response.errors[0].message)
    }
    return response
  }

  /**
   * ユーザー ID からスクリーンネームを取得する
   *
   * @param userId ユーザー ID
   * @returns スクリーンネーム
   */
  public async getScreenNameByUserId(
    options: GetScreenNameByUserIdOptions
  ): Promise<string> {
    if (!options.userId) {
      throw new IllegalArgumentError('userId is required')
    }

    const user = await this.getRawUserByUserId(options)
    return user.data.user.result.legacy.screen_name
  }

  /**
   * ユーザー ID からスクリーンネームを取得する
   *
   * @param userId ユーザー ID
   * @returns スクリーンネーム
   */
  public async getUserByUserId(
    options: GetUserByUserIdOptions
  ): Promise<FullUser> {
    if (!options.userId) {
      throw new IllegalArgumentError('userId is required')
    }

    const user = await this.getRawUserByUserId(options)
    return ObjectConverter.convertToFullUser(user)
  }

  /**
   * ユーザー ID からユーザー情報を取得する。ユーザー情報は生レスポンスで返す
   *
   * @param userId ユーザー ID
   * @returns ユーザー情報（生レスポンス）
   */
  public async getRawUserByUserId(
    options: GetUserByUserIdOptions
  ): Promise<GraphQLGetUserByScreenNameSuccessResponse> {
    // TODO: ユーザー情報をv1.1あたりのモデルに変換する処理を入れた方がいい
    if (!options.userId) {
      throw new IllegalArgumentError('userId is required')
    }

    const page = await this.scraper.getScraperPage()
    let response
    try {
      // UserByRestIdだとログインユーザー自分自身の場合に取得できない。
      response = await page.waitSingleResponse(
        `https://x.com/intent/user?user_id=${options.userId}`,
        'GET',
        'GRAPHQL',
        'UserByScreenName'
      )
    } catch (error) {
      if (error instanceof TwitterTsError) {
        throw error
      }

      throw new TwitterOperationError((error as Error).message)
    } finally {
      await page.close()
    }
    if (this.isErrorResponse(response)) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      throw new TwitterOperationError(response.errors[0].message)
    }

    return response
  }

  /**
   * ホームタイムラインのツイートを取得する。
   *
   * @param options ホームタイムライン取得オプション
   * @returns ホームタイムラインのツイート
   */
  public async getHomeTimelineTweets(
    options: GetHomeTimelineTweetsOptions
  ): Promise<Status[]> {
    const rawTweets = await this.getHomeTimelineRawTweets(options)

    return rawTweets.map((rawTweet) =>
      ObjectConverter.convertToStatus(rawTweet)
    )
  }

  /**
   * ホームタイムラインのツイートを取得する。ツイートは非正規化ツイート（CustomTweetObject）で返す
   *
   * @param options ホームタイムライン取得オプション
   * @returns ホームタイムラインのツイート（非正規化ツイート）
   */
  public async getHomeTimelineRawTweets(
    options: GetHomeTimelineTweetsOptions
  ): Promise<CustomTweetObject[]> {
    // おすすめタブ: HomeTimeline
    // フォロー中タブ: HomeLatestTimeline
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!options.timelineType) {
      throw new IllegalArgumentError('timelineType is required')
    }

    const endpointNames: Record<
      (typeof TimelineType)[keyof typeof TimelineType],
      'HomeTimeline' | 'HomeLatestTimeline'
    > = {
      [TimelineType.RECOMMEND]: 'HomeTimeline',
      [TimelineType.FOLLOWING]: 'HomeLatestTimeline',
    }
    const isIncludingPromotedTweets = options.isIncludingPromotedTweets ?? false

    const endpointName = endpointNames[options.timelineType]

    const url = 'https://x.com/home'
    const limit = options.limit ?? 20

    const page = await this.scraper.getScraperPage()
    const results = []
    try {
      await page.goto(url)

      // タブ選択
      const tabs = await page.page.$$(
        'nav[aria-live="polite"] div[role="tablist"] > div'
      )
      const tabIndex = options.timelineType === TimelineType.RECOMMEND ? 0 : 1
      if (!tabs[tabIndex]) {
        throw new TwitterOperationError('Failed to get tab')
      }
      await tabs[tabIndex].click()

      let lastResponseAt = Date.now()
      while (true) {
        if (Date.now() - lastResponseAt > 1000 * 30) {
          // 30秒以上レスポンスがない場合はタイムアウトとして終了
          break
        }
        const getResponse = page.shiftResponse('GET', 'GRAPHQL', endpointName)
        const postResponse = page.shiftResponse('POST', 'GRAPHQL', endpointName)
        const response = (getResponse ??
          postResponse) as CustomGraphQLTimelineSuccessResponse | null
        if (!response) {
          await page.scrollToBottom()
          continue
        }
        const parser = new HomeTimelineParser(
          response,
          isIncludingPromotedTweets
        )
        const rawTweets = parser.getRawTweets()
        if (rawTweets.length === 0) {
          break
        }
        results.push(...rawTweets)
        if (results.length >= limit) {
          break
        }
        lastResponseAt = Date.now()
      }
    } catch (error) {
      if (error instanceof TwitterTsError) {
        throw error
      }

      throw new TwitterOperationError((error as Error).message)
    } finally {
      await page.close()
    }

    return results
  }

  /**
   * ツイートを検索する。
   *
   * @param options 検索オプション
   * @returns 検索結果
   */
  public async searchTweets(options: SearchTweetsOptions): Promise<Status[]> {
    const rawTweets = await this.searchRawTweets(options)

    return rawTweets.map((rawTweet) =>
      ObjectConverter.convertToStatus(rawTweet)
    )
  }

  /**
   * ツイートを検索する。ツイートは非正規化ツイート（CustomTweetObject）で返す
   *
   * @param options 検索オプション
   * @returns 検索結果（非正規化ツイート）
   */
  public async searchRawTweets(
    options: SearchTweetsOptions
  ): Promise<CustomTweetObject[]> {
    if (!options.query) {
      throw new IllegalArgumentError('query is required')
    }
    const searchType = options.searchType ?? SearchType.POPULAR
    const limit = options.limit ?? 20
    const isIncludingPromotedTweets = options.isIncludingPromotedTweets ?? false

    const url = new URL(`https://x.com/search`)
    url.searchParams.set('q', options.query)
    if (searchType) {
      url.searchParams.set('f', searchType)
    }

    const page = await this.scraper.getScraperPage()
    const results = []
    try {
      await page.goto(url.toString())

      let lastResponseAt = Date.now()
      while (true) {
        if (Date.now() - lastResponseAt > 1000 * 30) {
          // 30秒以上レスポンスがない場合はタイムアウトとして終了
          break
        }
        const response = page.shiftResponse('GET', 'GRAPHQL', 'SearchTimeline')
        if (!response) {
          await page.scrollToBottom()
          continue
        }
        const parser = new SearchTimelineParser(
          response,
          isIncludingPromotedTweets
        )
        const rawTweets = parser.getRawTweets()
        if (rawTweets.length === 0) {
          break
        }
        results.push(...rawTweets)
        if (results.length >= limit) {
          break
        }
        lastResponseAt = Date.now()
      }
    } catch (error) {
      if (error instanceof TwitterTsError) {
        throw error
      }

      throw new TwitterOperationError((error as Error).message)
    } finally {
      await page.close()
    }

    return results
  }

  /**
   * ユーザーのツイートを取得する
   *
   * @param options ユーザーツイート取得オプション
   * @returns ユーザーのツイート
   */
  public async getUserTweets(options: GetUserTweetsOptions): Promise<Status[]> {
    if (!options.screenName) {
      throw new IllegalArgumentError('screenName is required')
    }
    if (options.screenName.includes('/')) {
      throw new IllegalArgumentError('screenName must not include "/"')
    }

    const limit = options.limit ?? 20
    const url = `https://x.com/${options.screenName}`
    const isIncludingPromotedTweets = options.isIncludingPromotedTweets ?? false

    const page = await this.scraper.getScraperPage()
    const results = []
    try {
      await page.goto(url)

      let lastResponseAt = Date.now()
      while (true) {
        if (Date.now() - lastResponseAt > 1000 * 30) {
          // 30秒以上レスポンスがない場合はタイムアウトとして終了
          break
        }
        const response = page.shiftResponse('GET', 'GRAPHQL', 'UserTweets')
        if (!response) {
          await page.scrollToBottom()
          continue
        }
        const parser = new UserTweetsParser(response, isIncludingPromotedTweets)
        const tweets = parser.getTweets()
        if (tweets.length === 0) {
          break
        }
        results.push(...tweets)
        if (results.length >= limit) {
          break
        }
        lastResponseAt = Date.now()
      }
    } catch (error) {
      if (error instanceof TwitterTsError) {
        throw error
      }

      throw new TwitterOperationError((error as Error).message)
    } finally {
      await page.close()
    }

    return results
  }

  /**
   * ツイートの情報を取得する
   *
   * @param options ツイート取得オプション
   * @returns ツイート
   */
  public async getTweet(options: GetTweetOptions): Promise<Status> {
    const rawTweet = await this.getRawTweet(options)
    return ObjectConverter.convertToStatus(rawTweet)
  }

  /**
   * ツイートの生情報を取得する
   *
   * @param options ツイート取得オプション
   * @returns ツイートの生情報
   */
  public async getRawTweet(
    options: GetTweetOptions
  ): Promise<CustomTweetObject> {
    if (!options.tweetId) {
      throw new IllegalArgumentError('tweetId is required')
    }

    const page = await this.scraper.getScraperPage()

    try {
      const url = `https://x.com/i/status/${options.tweetId}`
      const responseDetail = await page.waitSingleResponse(
        url,
        'GET',
        'GRAPHQL',
        'TweetDetail',
        30_000
      )

      if (this.isErrorResponse(responseDetail)) {
         
        throw new TwitterOperationError(responseDetail.errors[0].message)
      }

      await page.close()

      const tweetEntries =
        responseDetail.data.threaded_conversation_with_injections_v2
          .instructions[0].entries
      if (!tweetEntries) {
        throw new TwitterOperationError('Failed to get tweet entries')
      }

      const tweetResult = tweetEntries[0].content.itemContent?.tweet_results
      if (!tweetResult) {
        throw new TwitterOperationError('Failed to get tweet result')
      }

      return {
        __entryId: tweetEntries[0].entryId,
        ...tweetResult.result,
      } as CustomTweetObject
    } catch (error) {
      await page.close()
      // if timeout
      if (error instanceof TimeoutError) {
        throw new TwitterTimeoutError('Failed to operate twitter')
      }
      throw error
    }
  }

  /**
   * ツイートをいいねする
   *
   * @param options いいねオプション
   * @returns いいねできたかどうかの文字列（Done）
   */
  public async likeTweet(
    options: LikeTweetOptions
  ): Promise<string | undefined> {
    if (!options.tweetId) {
      throw new IllegalArgumentError('tweetId is required')
    }
    const page = await this.scraper.getScraperPage()

    // ツイートページを開く (30sec timeout)
    // -> 削除済みその他でツイートが存在しない場合は TwitterOperationError を投げる (TweetDetail のレスポンスがerrorになる)

    // いいねボタンが表示されるまで待つ (10sec timeout)
    // -> いいねボタンがすでにクリック済みの場合は AlreadyLikedError を投げる
    // -> いいねボタンが表示されなかった場合は TwitterOperationError を投げる
    // いいねボタンをクリックする
    // いいね完了まで待つ (10sec timeout)
    // -> いいね完了しなかった場合は TwitterOperationError を投げる
    // ツイートページを閉じる
    try {
      const url = `https://x.com/i/status/${options.tweetId}`

      // ツイート情報を取得できるまで待つ
      await page.waitSingleResponse(
        url,
        'GET',
        'GRAPHQL',
        'TweetDetail',
        30_000
      )

      // いいねボタンが表示されるまで待つ
      const likeButtonSelector =
        'article[tabindex="-1"] button[role="button"][data-testid="like"]'
      const unlikeButtonSelector =
        'article[tabindex="-1"] button[role="button"][data-testid="unlike"]'
      const likeButton = await page.page.waitForSelector(
        `${likeButtonSelector}, ${unlikeButtonSelector}`,
        {
          timeout: 10_000,
        }
      )
      if (!likeButton) {
        throw new TwitterOperationError('Failed to get like button')
      }
      const isLiked = await page.page.evaluate(
        (likeButtonSelector, unlikeButtonSelector) => {
          return (
            document.querySelector(likeButtonSelector) === null &&
            document.querySelector(unlikeButtonSelector) !== null
          )
        },
        likeButtonSelector,
        unlikeButtonSelector
      )
      if (isLiked) {
        throw new AlreadyLikedError()
      }

      // いいねボタンをクリックする
      const responseFavoritePromise = page.waitSingleResponse(
        null,
        'POST',
        'GRAPHQL',
        'FavoriteTweet',
        10_000
      )

      await page.waitAndClick(likeButtonSelector, true)

      // いいね完了まで待つ
      const responseFavorite = await responseFavoritePromise

      // ツイートページを閉じる
      await page.close()
      return responseFavorite.data.favorite_tweet
    } catch (error) {
      await page.close()
      // if timeout
      if (error instanceof TimeoutError) {
        throw new TwitterTimeoutError('Failed to operate twitter')
      }
      throw error
    }
  }

  /**
   * ツイートのいいねを解除する
   *
   * @param options いいね解除オプション
   * @returns いいね解除できたかどうかの文字列（Done）
   */
  public async unlikeTweet(
    options: UnlikeTweetOptions
  ): Promise<string | undefined> {
    if (!options.tweetId) {
      throw new IllegalArgumentError('tweetId is required')
    }
    const page = await this.scraper.getScraperPage()

    // ツイートページを開く (30sec timeout)
    // -> 削除済みその他でツイートが存在しない場合は TwitterOperationError を投げる (TweetDetail のレスポンスがerrorになる)

    // いいね済みボタンが表示されるまで待つ (10sec timeout)
    // -> いいねボタンがすでにクリック済みではない場合は NotLikedError を投げる
    // -> いいねボタンが表示されなかった場合は TwitterOperationError を投げる
    // いいねボタンをクリックする
    // いいね完了まで待つ (10sec timeout)
    // -> いいね完了しなかった場合は TwitterOperationError を投げる
    // ツイートページを閉じる
    try {
      const url = `https://x.com/i/status/${options.tweetId}`

      // ツイート情報が取得できるまで待つ
      await page.waitSingleResponse(
        url,
        'GET',
        'GRAPHQL',
        'TweetDetail',
        30_000
      )

      // いいねボタンが表示されるまで待つ
      const likeButtonSelector =
        'article[tabindex="-1"] button[role="button"][data-testid="like"]'
      const unlikeButtonSelector =
        'article[tabindex="-1"] button[role="button"][data-testid="unlike"]'
      const unlikeButton = await page.page.waitForSelector(
        `${likeButtonSelector}, ${unlikeButtonSelector}`,
        {
          timeout: 10_000,
        }
      )
      if (!unlikeButton) {
        throw new TwitterOperationError('Failed to get unlike button')
      }
      const isLiked = await page.page.evaluate(
        (likeButtonSelector, unlikeButtonSelector) => {
          return (
            document.querySelector(likeButtonSelector) === null &&
            document.querySelector(unlikeButtonSelector) !== null
          )
        },
        likeButtonSelector,
        unlikeButtonSelector
      )
      if (!isLiked) {
        throw new NotLikedError()
      }

      // いいねボタンをクリックする
      const responseFavoritePromise = page.waitSingleResponse(
        null,
        'POST',
        'GRAPHQL',
        'UnfavoriteTweet',
        10_000
      )

      await page.waitAndClick(unlikeButtonSelector, true)

      // いいね完了まで待つ
      const responseFavorite = await responseFavoritePromise

      // ツイートページを閉じる
      await page.close()
      return responseFavorite.data.unfavorite_tweet
    } catch (error) {
      await page.close()
      // if timeout
      if (error instanceof TimeoutError) {
        throw new TwitterTimeoutError('Failed to operate twitter')
      }
      throw error
    }
  }

  /**
   * ユーザーをブロックする
   *
   * @param options ブロックオプション
   */
  public async blockUser(options: BlockUserOptions): Promise<void> {
    if (!options.screenName && !options.userId) {
      throw new IllegalArgumentError('screenName or userId is required')
    }

    const url = options.screenName
      ? `https://x.com/${options.screenName}`
      : `https://x.com/i/user/${options.userId}`

    const page = await this.scraper.getScraperPage()

    try {
      const response = await page.waitSingleResponse(
        url,
        'GET',
        'GRAPHQL',
        'UserByScreenName'
      )
      if (this.isErrorResponse(response)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        throw new TwitterOperationError(response.errors[0].message)
      }

      // プロフィールの表示制限
      const viewProfileButton = await page.page.$(
        'button[data-testid="emptyState"] div[role="button"]'
      )
      if (viewProfileButton) {
        await viewProfileButton.click()
        await new Promise((resolve) => setTimeout(resolve, 1000))
      }

      const userStatus = await this.getUserStatus(page.page)
      if (!userStatus) {
        throw new TwitterOperationError('Failed to get user status')
      }

      if (userStatus === 'unblock') {
        // 既にブロック済み
        throw new AlreadyBlockedError()
      }

      await page.waitAndClick('button[data-testid="userActions"]', true)
      await new Promise((resolve) => setTimeout(resolve, 500))
      await page.waitAndClick('div[role="menuitem"][data-testid="block"]', true)
      await new Promise((resolve) => setTimeout(resolve, 500))
      await page.waitAndClick(
        'button[data-testid="confirmationSheetConfirm"]',
        true
      )
      await new Promise((resolve) => setTimeout(resolve, 3000))
      await page.close()
    } catch (error) {
      await page.close()
      // if timeout
      if (error instanceof TimeoutError) {
        throw new TwitterTimeoutError('Failed to operate twitter')
      }
      throw error
    }
  }

  /**
   * ユーザーのブロックを解除する
   *
   * @param options ブロック解除オプション
   */
  public async unblockUser(options: UnblockUserOptions): Promise<void> {
    if (!options.screenName && !options.userId) {
      throw new IllegalArgumentError('screenName or userId is required')
    }

    const url = options.screenName
      ? `https://x.com/${options.screenName}`
      : `https://x.com/i/user/${options.userId}`

    const page = await this.scraper.getScraperPage()
    await page.goto(url)

    try {
      // プロフィールの表示制限
      const viewProfileButton = await page.page.$(
        'div[data-testid="emptyState"] div[role="button"]'
      )
      if (viewProfileButton) {
        await viewProfileButton.click()
        await new Promise((resolve) => setTimeout(resolve, 1000))
      }

      const userStatus = await this.getUserStatus(page.page)
      if (!userStatus) {
        throw new TwitterOperationError('Failed to get user status')
      }

      if (userStatus !== 'unblock') {
        // 既にブロック解除済み
        throw new NotBlockedError()
      }

      await page.waitAndClick('button[data-testid="userActions"]', true)
      await new Promise((resolve) => setTimeout(resolve, 500))
      await page.waitAndClick('div[role="menuitem"][data-testid="block"]', true)
      await new Promise((resolve) => setTimeout(resolve, 500))
      await page.waitAndClick(
        'button[data-testid="confirmationSheetConfirm"]',
        true
      )
      await new Promise((resolve) => setTimeout(resolve, 3000))
      await page.close()
    } catch (error) {
      await page.close()
      // if timeout
      if (error instanceof TimeoutError) {
        throw new TwitterTimeoutError('Failed to operate twitter')
      }
      throw error
    }
  }

  /**
   * ブラウザを閉じる
   */
  public async close(): Promise<void> {
    await this.scraper.close()
  }

  /**
   * エラーレスポンスかどうかを判定する。
   * これを使うことでエラーがどうかは判定できるが、レスポンス型は保証されないので利用側で型保証されるメソッドを書いたほうがよい。
   *
   * @param response レスポンス
   * @returns エラーレスポンスかどうか
   */
  public isErrorResponse(response: any): response is { errors: any[] } {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
    return response.errors && response.errors.length > 0
  }

  private async getUserStatus(page: Page): Promise<string | undefined> {
    // 1234567890-follow
    // 1234567890-unblock
    const testId = await page.evaluate(() => {
      return new Promise<string | undefined>((resolve) => {
        const interval = setInterval(() => {
          const element = document.querySelector<HTMLElement>(
            'div[data-testid="placementTracking"] button[role="button"]'
          )
          if (element) {
            resolve(element.dataset.testid?.split('-')[1])
          }
        }, 100)
        setTimeout(
          () => {
            clearInterval(interval)
            // eslint-disable-next-line unicorn/no-useless-undefined
            resolve(undefined)
          },
          1000 * 60 * 2
        ) // 2分
      })
    })
    return testId
  }
}
