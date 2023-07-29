import {
  AlreadyLikedError,
  IllegalArgumentError,
  TwitterOperationError,
  UserNotFoundError,
} from './models/exceptions'
import {
  GetUserByScreenNameOptions,
  LikeTweetOptions,
  SearchTweetsOptions,
  SearchType,
  UserLikeTweetsOptions as GetUserLikeTweetsOptions,
  UserTweetsOptions as GetUserTweetsOptions,
  GetScreenNameByUserIdOptions,
  GetUserByUserIdOptions,
} from './options'
import { SearchTimelineParser } from './parser/search-timeline'
import { UserLikeTweetsParser } from './parser/user-like-tweets'
import { UserTweetsParser } from './parser/user-tweets'
import { TwitterScraper, TwitterScraperOptions } from './scraper'

/**
 * {@link TwitterOptions} オプション
 */
export type TwitterOptions = TwitterScraperOptions

/**
 * Twitter スクレイピングライブラリクラス
 */
export class Twitter {
  private readonly scraper: TwitterScraper

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
  public static async login(options: TwitterOptions) {
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
  public async getUserByScreenName(options: GetUserByScreenNameOptions) {
    // TODO: ユーザー情報をv1.1あたりのモデルに変換する処理を入れた方がいい
    if (!options.screenName) {
      throw new IllegalArgumentError('screenName is required')
    }
    const page = await this.scraper.getScraperPage()
    const response = await page.waitSingleResponse(
      `https://twitter.com/${options.screenName}`,
      'GET',
      'GRAPHQL',
      'UserByScreenName'
    )
    await page.close()
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
  public async getScreenNameByUserId(options: GetScreenNameByUserIdOptions) {
    if (!options.userId) {
      throw new IllegalArgumentError('userId is required')
    }

    const user = await this.getUserByUserId(options)
    return user.data.user.result.legacy.screen_name
  }

  /**
   * ユーザー ID からスクリーンネームを取得する
   *
   * @param userId ユーザー ID
   * @returns スクリーンネーム
   */
  public async getUserByUserId(options: GetUserByUserIdOptions) {
    // TODO: ユーザー情報をv1.1あたりのモデルに変換する処理を入れた方がいい
    if (!options.userId) {
      throw new IllegalArgumentError('userId is required')
    }

    const page = await this.scraper.getScraperPage()
    const response = await page.waitSingleResponse(
      `https://twitter.com/intent/user?user_id=${options.userId}`,
      'GET',
      'GRAPHQL',
      'UserByRestId'
    )
    await page.close()
    if (this.isErrorResponse(response)) {
      throw new TwitterOperationError(response.errors[0].message)
    }
    if (!response.data.user.result) {
      throw new UserNotFoundError()
    }

    return response
  }

  /**
   * ツイートを検索する
   *
   * @param options 検索オプション
   * @returns 検索結果
   */
  public async searchTweets(options: SearchTweetsOptions) {
    if (!options.query) {
      throw new IllegalArgumentError('query is required')
    }
    const searchType = options.searchType || SearchType.POPULAR
    const limit = options.limit || 20

    const url = new URL(`https://twitter.com/search`)
    url.searchParams.set('q', options.query)
    if (searchType) {
      url.searchParams.set('f', searchType)
    }

    const page = await this.scraper.getScraperPage()
    await page.goto(url.toString())

    let lastResponseAt = Date.now()
    const results = []
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
      const parser = new SearchTimelineParser(response)
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

    await page.close()
    return results
  }

  /**
   * ユーザーのツイートを取得する
   *
   * @param options ユーザーツイート取得オプション
   * @returns ユーザーのツイート
   */
  public async getUserTweets(options: GetUserTweetsOptions) {
    if (!options.screenName) {
      throw new IllegalArgumentError('screenName is required')
    }
    if (options.screenName.includes('/')) {
      throw new IllegalArgumentError('screenName must not include "/"')
    }

    const limit = options.limit || 20
    const url = `https://twitter.com/${options.screenName}`

    const page = await this.scraper.getScraperPage()
    await page.goto(url)

    let lastResponseAt = Date.now()
    const results = []
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
      const parser = new UserTweetsParser(response)
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

    await page.close()
    return results
  }

  /**
   * ユーザーのいいねしたツイートを取得する
   *
   * @param options ユーザーいいねツイート取得オプション
   * @returns ユーザーのツイート
   */
  public async getUserLikeTweets(options: GetUserLikeTweetsOptions) {
    if (!options.screenName) {
      throw new IllegalArgumentError('screenName is required')
    }
    if (options.screenName.includes('/')) {
      throw new IllegalArgumentError('screenName must not include "/"')
    }

    const limit = options.limit || 20
    const url = `https://twitter.com/${options.screenName}/likes`

    const page = await this.scraper.getScraperPage()
    await page.goto(url)

    let lastResponseAt = Date.now()
    const results = []
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
      const parser = new UserLikeTweetsParser(response)
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

    await page.close()
    return results
  }

  /**
   * ツイートをいいねする
   *
   * @param options いいねオプション
   * @returns いいねしたツイート
   */
  public async likeTweet(options: LikeTweetOptions) {
    if (!options.tweetId) {
      throw new IllegalArgumentError('tweetId is required')
    }
    const page = await this.scraper.getScraperPage()
    const responseDetail = page.waitSingleResponse(
      `https://twitter.com/intent/like?tweet_id=${options.tweetId}`,
      'GET',
      'GRAPHQL',
      'TweetDetail'
    )
    if (!responseDetail) {
      throw new TwitterOperationError('Failed to get tweet detail')
    }
    if (this.isErrorResponse(responseDetail)) {
      throw new TwitterOperationError(responseDetail.errors[0].message)
    }

    await page.waitAndClick(
      'div[role="button"][data-testid="confirmationSheetConfirm"]'
    )
    const responseFavorite = page.shiftResponse(
      'POST',
      'GRAPHQL',
      'FavoriteTweet'
    )
    if (!responseFavorite) {
      throw new AlreadyLikedError()
    }
    await page.close()

    if (this.isErrorResponse(responseFavorite)) {
      throw new TwitterOperationError(responseFavorite.errors[0].message)
    }
    return responseFavorite.data.favorite_tweet
  }

  /**
   * ブラウザを閉じる
   */
  public async close() {
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
}
