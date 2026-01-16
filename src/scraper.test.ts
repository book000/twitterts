import { TwitterScraper } from './scraper'

jest.setTimeout(60_000)

describe('Scraper', () => {
  let scraper: TwitterScraper

  test('login', async () => {
    const username = process.env.TWITTER_USERNAME
    const password = process.env.TWITTER_PASSWORD
    if (!username || !password) {
      throw new Error('Failed to get environment variables.')
    }

    const otpSecret = process.env.TWITTER_OTP_SECRET
    const emailAddress = process.env.TWITTER_EMAIL_ADDRESS

    const proxyServer = process.env.PROXY_SERVER
    const proxyUsername = process.env.PROXY_USERNAME
    const proxyPassword = process.env.PROXY_PASSWORD
    const proxyConfiguration = proxyServer
      ? {
          server: proxyServer,
          username: proxyUsername,
          password: proxyPassword,
        }
      : undefined

    scraper = new TwitterScraper({
      username,
      password,
      otpSecret,
      emailAddress,
      puppeteerOptions: {
        userDataDirectory: './data/userdata',
        proxy: proxyConfiguration,
      },
      debugOptions: {
        debugLog: true,
      },
    })
    await expect(scraper.login()).resolves.not.toThrow()
  })

  afterAll(async () => {
    await scraper.close()
  })
})
