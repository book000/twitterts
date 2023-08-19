import fs from 'node:fs'
import { join } from 'node:path'
import { SearchTimelineParser } from './search-timeline'
import { UserTweetsParser } from './user-tweets'
import { Utils } from '../generate-types/utils'
import { HomeTimelineParser } from './home-timeline-parser'
import { UserLikeTweetsParser } from './user-like-tweets'

jest.setTimeout(60_000)

describe('Parser', () => {
  const debugOutputDirectory =
    process.env.DEBUG_OUTPUT_DIRECTORY || './data/responses'

  test('HomeTimelineParser:HomeTimeline', () => {
    const baseDirectory = `${debugOutputDirectory}/graphql/HomeTimeline/GET/200/`
    if (!fs.existsSync(baseDirectory)) {
      return
    }
    const files = fs
      .readdirSync(baseDirectory)
      .filter(
        (file) =>
          !['.', '..'].includes(file) &&
          fs.statSync(join(baseDirectory, file)).isFile() &&
          file.endsWith('.json')
      )
      .map((file) => join(baseDirectory, file))

    for (const file of files) {
      const response = Utils.parseJsonc(fs.readFileSync(file, 'utf8'))

      expect(
        () => new HomeTimelineParser(response),
        `Failed parse ${file}`
      ).not.toThrow()
    }
  })

  test('HomeTimelineParser:HomeLatestTimeline', () => {
    const baseDirectory = `${debugOutputDirectory}/graphql/HomeLatestTimeline/GET/200/`
    if (!fs.existsSync(baseDirectory)) {
      return
    }
    const files = fs
      .readdirSync(baseDirectory)
      .filter(
        (file) =>
          !['.', '..'].includes(file) &&
          fs.statSync(join(baseDirectory, file)).isFile() &&
          file.endsWith('.json')
      )
      .map((file) => join(baseDirectory, file))

    for (const file of files) {
      const response = Utils.parseJsonc(fs.readFileSync(file, 'utf8'))

      expect(
        () => new HomeTimelineParser(response),
        `Failed parse ${file}`
      ).not.toThrow()
    }
  })

  test('SearchTimelineParser', () => {
    const baseDirectory = `${debugOutputDirectory}/graphql/SearchTimeline/GET/200/`
    if (!fs.existsSync(baseDirectory)) {
      return
    }
    const files = fs
      .readdirSync(baseDirectory)
      .filter(
        (file) =>
          !['.', '..'].includes(file) &&
          fs.statSync(join(baseDirectory, file)).isFile() &&
          file.endsWith('.json')
      )
      .map((file) => join(baseDirectory, file))

    for (const file of files) {
      const response = Utils.parseJsonc(fs.readFileSync(file, 'utf8'))

      expect(
        () => new SearchTimelineParser(response),
        `Failed parse ${file}`
      ).not.toThrow()
    }
  })

  test('UserLikeTweetsParser', () => {
    const baseDirectory = `${debugOutputDirectory}/graphql/Likes/GET/200/`
    if (!fs.existsSync(baseDirectory)) {
      return
    }
    const files = fs
      .readdirSync(baseDirectory)
      .filter(
        (file) =>
          !['.', '..'].includes(file) &&
          fs.statSync(join(baseDirectory, file)).isFile() &&
          file.endsWith('.json')
      )
      .map((file) => join(baseDirectory, file))

    for (const file of files) {
      const response = Utils.parseJsonc(fs.readFileSync(file, 'utf8'))

      if (
        'errors' in response &&
        !!response.errors &&
        response.errors.length > 0
      ) {
        continue
      }

      expect(
        () => new UserLikeTweetsParser(response),
        `Failed parse ${file}`
      ).not.toThrow()
    }
  })

  test('UserTweetsParser', () => {
    const baseDirectory = `${debugOutputDirectory}/graphql/UserTweets/GET/200/`
    if (!fs.existsSync(baseDirectory)) {
      return
    }
    const files = fs
      .readdirSync(baseDirectory)
      .filter(
        (file) =>
          !['.', '..'].includes(file) &&
          fs.statSync(join(baseDirectory, file)).isFile() &&
          file.endsWith('.json')
      )
      .map((file) => join(baseDirectory, file))

    for (const file of files) {
      const response = Utils.parseJsonc(fs.readFileSync(file, 'utf8'))

      expect(
        () => new UserTweetsParser(response),
        `Failed parse ${file}`
      ).not.toThrow()
    }
  })
})
