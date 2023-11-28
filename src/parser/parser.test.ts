import { SearchTimelineParser } from './search-timeline'
import { UserTweetsParser } from './user-tweets'
import { HomeTimelineParser } from './home-timeline-parser'
import { UserLikeTweetsParser } from './user-like-tweets'
import { ResponseDatabase } from '../saving-responses'

jest.setTimeout(60_000)

describe('Parser', () => {
  let responseDatabase: ResponseDatabase

  beforeAll(async () => {
    responseDatabase = new ResponseDatabase()
    await responseDatabase.init()
    await responseDatabase.sync()
  })

  afterAll(async () => {
    await responseDatabase.close()
  })

  test('HomeTimelineParser:HomeTimeline', async () => {
    const responses = await responseDatabase.getResponses({
      endpointType: 'GRAPHQL',
      method: 'GET',
      endpoint: 'HomeTimeline',
      statusCode: 200,
    })

    for (const response of responses) {
      const data = JSON.parse(response.responseBody)
      expect(
        () => new HomeTimelineParser(data, true),
        `Failed parse [endpoint_type=${response.endpointType}, method=${response.method}, endpoint=${response.endpoint}, status_code=${response.statusCode}, created_at=${response.createdAt}]`
      ).not.toThrow()
    }
  })

  test('HomeTimelineParser:HomeLatestTimeline', async () => {
    const responses = await responseDatabase.getResponses({
      endpointType: 'GRAPHQL',
      method: 'GET',
      endpoint: 'HomeLatestTimeline',
      statusCode: 200,
    })

    for (const response of responses) {
      const data = JSON.parse(response.responseBody)

      expect(
        () => new HomeTimelineParser(data, true),
        `Failed parse [endpoint_type=${response.endpointType}, method=${response.method}, endpoint=${response.endpoint}, status_code=${response.statusCode}, created_at=${response.createdAt}]`
      ).not.toThrow()
    }
  })

  test('SearchTimelineParser', async () => {
    const responses = await responseDatabase.getResponses({
      endpointType: 'GRAPHQL',
      method: 'GET',
      endpoint: 'SearchTimeline',
      statusCode: 200,
    })

    for (const response of responses) {
      const data = JSON.parse(response.responseBody)

      expect(
        () => new SearchTimelineParser(data, true),
        `Failed parse [endpoint_type=${response.endpointType}, method=${response.method}, endpoint=${response.endpoint}, status_code=${response.statusCode}, created_at=${response.createdAt}]`
      ).not.toThrow()
    }
  })

  test('UserLikeTweetsParser', async () => {
    const responses = await responseDatabase.getResponses({
      endpointType: 'GRAPHQL',
      method: 'GET',
      endpoint: 'Likes',
      statusCode: 200,
    })

    for (const response of responses) {
      const data = JSON.parse(response.responseBody)

      if (
        'errors' in response &&
        !!response.errors &&
        Array.isArray(response.errors) &&
        response.errors.length > 0
      ) {
        continue
      }

      expect(
        () => new UserLikeTweetsParser(data, true),
        `Failed parse [endpoint_type=${response.endpointType}, method=${response.method}, endpoint=${response.endpoint}, status_code=${response.statusCode}, created_at=${response.createdAt}]`
      ).not.toThrow()
    }
  })

  test('UserTweetsParser', async () => {
    const responses = await responseDatabase.getResponses({
      endpointType: 'GRAPHQL',
      method: 'GET',
      endpoint: 'UserTweets',
      statusCode: 200,
    })

    for (const response of responses) {
      const data = JSON.parse(response.responseBody)

      if (
        'errors' in response &&
        !!response.errors &&
        Array.isArray(response.errors) &&
        response.errors.length > 0
      ) {
        continue
      }

      expect(
        () => new UserTweetsParser(data, true),
        `Failed parse [endpoint_type=${response.endpointType}, method=${response.method}, endpoint=${response.endpoint}, status_code=${response.statusCode}, created_at=${response.createdAt}]`
      ).not.toThrow()
    }
  })
})
