import { SearchType } from './options'
import { SearchTimelineParser } from './parser/search-timeline'
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
    const response = await twitter.getUserByScreenName({
      screenName: 'book000',
    })
    expect(response).toBeTruthy()
    expect(response.data).toBeTruthy()
    expect(response.data.user.result.rest_id).toBe('286048624')
  })

  test('searchTweets:popular', async () => {
    const response = await twitter.searchTweets({
      query: 'from:book000',
    })
    expect(response).toBeTruthy()
    expect(response.data).toBeTruthy()
    expect(
      response.data.search_by_raw_query.search_timeline.timeline.instructions
        .length
    ).toBeGreaterThan(0)

    const parser = new SearchTimelineParser(response)
    expect(parser).toBeTruthy()
    expect(parser.getTweets().length).toBeGreaterThan(0)
  })

  test('searchTweets:live', async () => {
    const response = await twitter.searchTweets({
      query: 'from:book000',
      searchType: SearchType.LIVE,
    })
    expect(response).toBeTruthy()
    expect(response.data).toBeTruthy()
    expect(
      response.data.search_by_raw_query.search_timeline.timeline.instructions
        .length
    ).toBeGreaterThan(0)

    const parser = new SearchTimelineParser(response)
    expect(parser).toBeTruthy()
    expect(parser.getTweets().length).toBeGreaterThan(0)
  })

  test('searchTweets:user', async () => {
    const response = await twitter.searchTweets({
      query: 'from:book000',
      searchType: SearchType.USER,
    })
    expect(response).toBeTruthy()
    expect(response.data).toBeTruthy()
    expect(
      response.data.search_by_raw_query.search_timeline.timeline.instructions
        .length
    ).toBeGreaterThan(0)
  })

  test('searchTweets:image', async () => {
    const response = await twitter.searchTweets({
      query: 'from:book000',
      searchType: SearchType.IMAGE,
    })
    expect(response).toBeTruthy()
    expect(response.data).toBeTruthy()
    expect(
      response.data.search_by_raw_query.search_timeline.timeline.instructions
        .length
    ).toBeGreaterThan(0)

    const parser = new SearchTimelineParser(response)
    expect(parser).toBeTruthy()
    expect(parser.getTweets().length).toBeGreaterThan(0)
  })

  test('searchTweets:video', async () => {
    const response = await twitter.searchTweets({
      query: 'from:book000',
      searchType: SearchType.VIDEO,
    })
    expect(response).toBeTruthy()
    expect(response.data).toBeTruthy()
    expect(
      response.data.search_by_raw_query.search_timeline.timeline.instructions
        .length
    ).toBeGreaterThan(0)

    const parser = new SearchTimelineParser(response)
    expect(parser).toBeTruthy()
    expect(parser.getTweets().length).toBeGreaterThan(0)
  })

  afterAll(async () => {
    await twitter.close()
  })
})
