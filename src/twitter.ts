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
  UserNotFoundError,
} from './models/exceptions'
import {
  GetUserByScreenNameOptions,
  LikeTweetOptions,
  SearchTweetsOptions,
  SearchType,
  GetUserLikeTweetsOptions,
  GetUserTweetsOptions,
  GetScreenNameByUserIdOptions,
  GetUserByUserIdOptions,
  UnlikeTweetOptions,
  GetHomeTimelineTweetsOptions,
  TimelineType,
  BlockUserOptions,
  UnblockUserOptions,
} from './options'
import { SearchTimelineParser } from './parser/search-timeline'
import { UserLikeTweetsParser } from './parser/user-like-tweets'
import { UserTweetsParser } from './parser/user-tweets'
import { TwitterScraper, TwitterScraperOptions } from './scraper'
import { ObjectConverter } from './converter'
import { HomeTimelineParser } from './parser/home-timeline-parser'
import { GraphQLGetUserByScreenNameSuccessResponse } from './models/responses/graphql/get/user-by-screen-name-success'
import { FullUser, Status } from 'twitter-d'
import { CustomTweetObject } from './models/responses/custom/custom-tweet-object'

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
    // TODO: ユーザー情報をv1.1あたりのモデルに変換する処理を入れた方がいい
    if (!options.screenName) {
      throw new IllegalArgumentError('screenName is required')
    }
    const page = await this.scraper.getScraperPage()
    let response
    try {
      response = await page.waitSingleResponse(
        `https://twitter.com/${options.screenName}`,
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
        `https://twitter.com/intent/user?user_id=${options.userId}`,
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
      throw new TwitterOperationError(response.errors[0].message)
    }
    if (!response.data.user.result) {
      throw new UserNotFoundError()
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
    if (!options.timelineType) {
      throw new IllegalArgumentError('timelineType is required')
    }

    const endpointNames: {
      [key in (typeof TimelineType)[keyof typeof TimelineType]]:
        | 'HomeTimeline'
        | 'HomeLatestTimeline'
    } = {
      [TimelineType.RECOMMEND]: 'HomeTimeline',
      [TimelineType.FOLLOWING]: 'HomeLatestTimeline',
    }
    const isIncludingPromotedTweets = options.isIncludingPromotedTweets ?? false

    const endpointName = endpointNames[options.timelineType]

    const url = 'https://twitter.com/home'
    const limit = options.limit || 20

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
        const response = page.shiftResponse('GET', 'GRAPHQL', endpointName)
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
    const searchType = options.searchType || SearchType.POPULAR
    const limit = options.limit || 20
    const isIncludingPromotedTweets = options.isIncludingPromotedTweets ?? false

    const url = new URL(`https://twitter.com/search`)
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

    const limit = options.limit || 20
    const url = `https://twitter.com/${options.screenName}`
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
   * ユーザーのいいねしたツイートを取得する
   *
   * @param options ユーザーいいねツイート取得オプション
   * @returns ユーザーのツイート
   */
  public async getUserLikeTweets(
    options: GetUserLikeTweetsOptions
  ): Promise<Status[]> {
    if (!options.screenName) {
      throw new IllegalArgumentError('screenName is required')
    }
    if (options.screenName.includes('/')) {
      throw new IllegalArgumentError('screenName must not include "/"')
    }

    const limit = options.limit || 20
    const url = `https://twitter.com/${options.screenName}/likes`
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
        const response = page.shiftResponse('GET', 'GRAPHQL', 'Likes')
        if (!response) {
          await page.scrollToBottom()
          continue
        }
        const parser = new UserLikeTweetsParser(
          response,
          isIncludingPromotedTweets
        )
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
      const url = `https://twitter.com/i/status/${options.tweetId}`
      const responseDetail = await page.waitSingleResponse(
        url,
        'GET',
        'GRAPHQL',
        'TweetDetail',
        30_000
      )
      if (!responseDetail) {
        throw new TwitterOperationError('Failed to get tweet detail')
      }

      // いいねボタンが表示されるまで待つ
      const likeButtonSelector =
        'article[tabindex="-1"] div[role="button"][data-testid="like"]'
      const unlikeButtonSelector =
        'article[tabindex="-1"] div[role="button"][data-testid="unlike"]'
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
      if (!responseFavorite) {
        throw new TwitterOperationError('Failed to favorite tweet')
      }

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
      const url = `https://twitter.com/i/status/${options.tweetId}`
      const responseDetail = await page.waitSingleResponse(
        url,
        'GET',
        'GRAPHQL',
        'TweetDetail',
        30_000
      )
      if (!responseDetail) {
        throw new TwitterOperationError('Failed to get tweet detail')
      }

      // いいねボタンが表示されるまで待つ
      const likeButtonSelector =
        'article[tabindex="-1"] div[role="button"][data-testid="like"]'
      const unlikeButtonSelector =
        'article[tabindex="-1"] div[role="button"][data-testid="unlike"]'
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
      if (!responseFavorite) {
        throw new TwitterOperationError('Failed to favorite tweet')
      }

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
      ? `https://twitter.com/${options.screenName}`
      : `https://twitter.com/i/user/${options.userId}`

    const page = await this.scraper.getScraperPage()

    try {
      const response = await page.waitSingleResponse(
        url,
        'GET',
        'GRAPHQL',
        'UserByScreenName'
      )
      if (this.isErrorResponse(response)) {
        throw new TwitterOperationError(response.errors[0].message)
      }

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

      if (userStatus === 'unblock') {
        // 既にブロック済み
        throw new AlreadyBlockedError()
      }

      await page.waitAndClick('div[data-testid="userActions"]', true)
      await new Promise((resolve) => setTimeout(resolve, 500))
      await page.waitAndClick('div[role="menuitem"][data-testid="block"]', true)
      await new Promise((resolve) => setTimeout(resolve, 500))
      await page.waitAndClick(
        'div[data-testid="confirmationSheetConfirm"]',
        true
      )
      await new Promise((resolve) => setTimeout(resolve, 3000))
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
      ? `https://twitter.com/${options.screenName}`
      : `https://twitter.com/i/user/${options.userId}`

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

      await page.waitAndClick('div[data-testid="userActions"]', true)
      await new Promise((resolve) => setTimeout(resolve, 500))
      await page.waitAndClick('div[role="menuitem"][data-testid="block"]', true)
      await new Promise((resolve) => setTimeout(resolve, 500))
      await page.waitAndClick(
        'div[data-testid="confirmationSheetConfirm"]',
        true
      )
      await new Promise((resolve) => setTimeout(resolve, 3000))
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
    return response.errors && response.errors.length > 0
  }

  private async getUserStatus(page: Page): Promise<string | void> {
    // 1234567890-follow
    // 1234567890-unblock
    const testId = await page.evaluate(() => {
      return new Promise<string | void>((resolve) => {
        const interval = setInterval(() => {
          const element = document.querySelector(
            'div[data-testid="placementTracking"] div[role="button"]'
          ) as HTMLElement
          if (element) {
            resolve(element.dataset.testid?.split('-')[1])
          }
        }, 100)
        setTimeout(
          () => {
            clearInterval(interval)
            resolve()
          },
          1000 * 60 * 2
        ) // 2分
      })
    })
    return testId
  }
}
