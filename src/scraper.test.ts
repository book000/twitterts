import { TwitterScraper } from './scraper'

jest.setTimeout(60_000)

describe('Scraper', () => {
  let scraper: TwitterScraper

  test('login', async () => {
    const username = process.env.TWITTER_USERNAME
    const password = process.env.TWITTER_PASSWORD
    const otpSecret = process.env.TWITTER_OTP_SECRET
    if (!username || !password || !otpSecret) {
      throw new Error('Failed to get environment variables.')
    }

    scraper = new TwitterScraper({
      username,
      password,
      otpSecret,
      puppeteerOptions: {
        userDataDirectory: './data/userdata',
      },
    })
    await expect(scraper.login()).resolves.not.toThrow()
  })

  afterAll(async () => {
    await scraper.close()
  })
})
