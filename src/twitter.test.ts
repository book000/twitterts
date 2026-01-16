import { TwitterOperationError } from './models/exceptions'
import { SearchType, TimelineType } from './options'
import { Twitter } from './twitter'

jest.setTimeout(90_000)

describe('Twitter', () => {
  let twitter: Twitter | undefined

  // ログインが成功している場合のみ、他のテストを実行
  // ログイン失敗時は twitter が undefined のためテストがスキップされる
  const getTwitter = (): Twitter => {
    if (!twitter) {
      throw new Error('Twitter not initialized - login may have failed')
    }
    return twitter
  }

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

    twitter = await Twitter.login({
      username,
      password,
      otpSecret,
      emailAddress,
      puppeteerOptions: {
        userDataDirectory: './data/userdata-twitter',
        proxy: proxyConfiguration,
      },
      debugOptions: {
        outputResponse: {
          enable: true,
        },
      },
    })
  })

  test('getUserByScreenName', async () => {
    const response = await getTwitter().getUserByScreenName({
      screenName: 'book000',
    })
    expect(response).toBeTruthy()
    expect(response.data).toBeTruthy()
    expect(response.data.user?.result.rest_id).toBe('286048624')
  })

  test('getScreenNameByUserId', async () => {
    const response = await getTwitter().getScreenNameByUserId({
      userId: '286048624',
    })
    expect(response).toBeTruthy()
    expect(response).toBe('book000')
  })

  test('getUserByUserId', async () => {
    const response = await getTwitter().getUserByUserId({
      userId: '286048624',
    })
    expect(response).toBeTruthy()
    expect(response.screen_name).toBe('book000')
  })

  test('getRawUserByUserId', async () => {
    const response = await getTwitter().getRawUserByUserId({
      userId: '286048624',
    })
    expect(response).toBeTruthy()
    expect(response.data).toBeTruthy()
    const user = response.data.user?.result
    const legacyOrCore =
      user?.legacy.name === undefined ? user?.core : user.legacy
    expect(legacyOrCore?.screen_name).toBe('book000')
  })

  test('getHomeTimelineRawTweets', async () => {
    const response = await getTwitter().getHomeTimelineRawTweets({
      timelineType: TimelineType.RECOMMEND,
    })
    expect(response).toBeTruthy()
    expect(response.length).toBeGreaterThan(0)
  })

  test('getHomeTimelineTweets:recommend', async () => {
    const response = await getTwitter().getHomeTimelineTweets({
      timelineType: TimelineType.RECOMMEND,
    })
    expect(response).toBeTruthy()
    expect(response.length).toBeGreaterThan(0)
  })

  test('getHomeTimelineTweets:following', async () => {
    const response = await getTwitter().getHomeTimelineTweets({
      timelineType: TimelineType.FOLLOWING,
    })
    expect(response).toBeTruthy()
    expect(response.length).toBeGreaterThan(0)
  })

  test('searchRawTweets', async () => {
    const response = await getTwitter().searchRawTweets({
      query: 'from:book000',
    })
    expect(response).toBeTruthy()
    expect(response.length).toBeGreaterThan(0)
  })

  test('searchTweets:popular', async () => {
    const response = await getTwitter().searchTweets({
      query: 'from:book000',
    })
    expect(response).toBeTruthy()
    expect(response.length).toBeGreaterThan(0)
  })

  test('searchTweets:live(limit100)', async () => {
    const response = await getTwitter().searchTweets({
      query: 'from:book000',
      searchType: SearchType.LIVE,
      limit: 100,
    })
    expect(response).toBeTruthy()
    expect(response.length).toBeGreaterThan(0)
  })

  test('searchTweets:image', async () => {
    const response = await getTwitter().searchTweets({
      query: 'from:book000',
      searchType: SearchType.IMAGE,
    })
    expect(response).toBeTruthy()
    expect(response.length).toBeGreaterThan(0)
  })

  test('searchTweets:video', async () => {
    const response = await getTwitter().searchTweets({
      query: 'from:book000',
      searchType: SearchType.VIDEO,
    })
    expect(response).toBeTruthy()
    expect(response.length).toBeGreaterThan(0)
  })

  test('getUserTweets', async () => {
    const response = await getTwitter().getUserTweets({
      screenName: 'book000',
    })
    expect(response).toBeTruthy()
    expect(response.length).toBeGreaterThan(0)
  })

  test('getTweet', async () => {
    const response = await getTwitter().getTweet({
      tweetId: '1685608131618086912',
    })
    expect(response).toBeTruthy()
    expect(response.id_str).toBe('1685608131618086912')
    expect(response.user.id).toBe(286_048_624)
    expect(response.full_text).toBe('test')
  })

  test('likeTweet', async () => {
    await expect(
      getTwitter().likeTweet({
        tweetId: '1685608131618086912',
      })
    ).resolves.toBe('Done')
  })

  test('unlikeTweet', async () => {
    await expect(
      getTwitter().unlikeTweet({
        tweetId: '1685608131618086912',
      })
    ).resolves.toBe('Done')
  })

  test('blockUser', async () => {
    await expect(
      getTwitter().blockUser({
        screenName: 'X',
      })
    ).resolves.not.toThrow(TwitterOperationError)
  })

  test('unblockUser', async () => {
    await expect(
      getTwitter().unblockUser({
        screenName: 'X',
      })
    ).resolves.not.toThrow(TwitterOperationError)
  })

  afterAll(async () => {
    // ログイン失敗時でもブラウザを確実にクリーンアップ
    if (twitter) {
      await twitter.close().catch(() => {
        // close() が失敗してもエラーを無視
      })
    }
  })
})
