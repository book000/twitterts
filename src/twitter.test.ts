import { Twitter } from './twitter'

jest.setTimeout(60_000)

describe('Twitter', () => {
  let twitter: Twitter

  test('login', async () => {
    const username = process.env.TWITTER_USERNAME
    const password = process.env.TWITTER_PASSWORD
    const otpSecret = process.env.TWITTER_OTP_SECRET
    if (!username || !password || !otpSecret) {
      throw new Error('Failed to get environment variables.')
    }

    twitter = await Twitter.login({
      username,
      password,
      otpSecret,
      puppeteerOptions: {
        userDataDirectory: './data/userdata',
      },
      debugOptions: {
        outputResponse: {
          enable: true,
          outputDirectory: './data/responses',
        },
      },
    })
  })

  test('getUserByScreenName', async () => {
    const response = await twitter.getUserByScreenName('book000')
    expect(response).toBeTruthy()
  })

  afterAll(async () => {
    await twitter.close()
  })
})
