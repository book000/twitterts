import {
  GetUserByScreenNameOptions,
  SearchTweetsOptions,
  SearchType,
} from './options'
import { SearchTimelineParser } from './parser/search-timeline'
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
    if (!options.screenName) {
      throw new Error('screenName is required')
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
      throw new Error(response.errors[0].message)
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
      throw new Error('query is required')
    }
    const searchType = options.searchType || SearchType.POPULAR

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
      if (results.length >= (options.limit || 20)) {
        break
      }
      lastResponseAt = Date.now()
    }

    await page.close()
    return results
  }

  /**
   * ブラウザを閉じる
   */
  public async close() {
    await this.scraper.close()
  }

  public isErrorResponse(response: any): response is { errors: any[] } {
    return response.errors && response.errors.length > 0
  }
}
