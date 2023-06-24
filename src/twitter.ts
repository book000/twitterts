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

  public async getUserByScreenName(screenName: string) {
    const page = await this.scraper.getScraperPage()
    const response = await page.waitSingleResponse(
      `https://twitter.com/${screenName}`,
      'GET',
      'GRAPHQL',
      'UserByScreenName'
    )
    return response
  }

  public async close() {
    await this.scraper.close()
  }
}
