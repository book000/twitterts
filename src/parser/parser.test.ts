import fs from 'node:fs'
import { join } from 'node:path'
import { SearchTimelineParser } from './search-timeline'
import { UserTweetsParser } from './user-tweets'

jest.setTimeout(60_000)

describe('Parser', () => {
  const debugOutputDirectory =
    process.env.DEBUG_OUTPUT_DIRECTORY || './data/responses'

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
      const response = JSON.parse(fs.readFileSync(file, 'utf8'))

      expect(
        () => new SearchTimelineParser(response),
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
      const response = JSON.parse(fs.readFileSync(file, 'utf8'))

      expect(
        () => new UserTweetsParser(response),
        `Failed parse ${file}`
      ).not.toThrow()
    }
  })
})
