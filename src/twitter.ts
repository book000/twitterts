import {
  GetUserByScreenNameOptions,
  SearchTweetsOptions,
  SearchType,
} from './options'
import { TwitterScraper, TwitterScraperOptions } from './scraper'

export type TwitterOptions = TwitterScraperOptions

export class Twitter {
  private readonly scraper: TwitterScraper

  private constructor(scraper: TwitterScraper) {
    this.scraper = scraper
  }

  public static async login(options: TwitterOptions) {
    const scraper = new TwitterScraper(options)
    await scraper.login()
    return new Twitter(scraper)
  }

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
    return response
  }

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
    return await page.waitSingleResponse(
      url.toString(),
      'GET',
      'GRAPHQL',
      'SearchTimeline'
    )
  }

  public async close() {
    await this.scraper.close()
  }
}
