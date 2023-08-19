import { Logger } from '@book000/node-utils'
import { TwitterTypesGenerator } from './generate-types/types-generator'
import { CustomTypesGenerator } from './generate-types/custom-types-generator'
import { EndPointTypeGenerator } from './generate-types/endpoint-type-generator'
import { Utils } from './generate-types/utils'

class GenerateTypes {
  calculateTime<T>(name: string, runner: () => T): T {
    const logger = Logger.configure('GenerateTypes:calculateTime')

    const startTime = Date.now()
    const result = runner()
    const endTime = Date.now()

    const time = endTime - startTime
    logger.info(`🕐 ${name}: ${time}ms`)

    return result
  }

  async awaitCalculateTime<T>(
    name: string,
    runner: () => Promise<T>
  ): Promise<T> {
    const logger = Logger.configure('GenerateTypes:awaitCalculateTime')

    const startTime = Date.now()
    const result = await runner()
    const endTime = Date.now()

    const time = endTime - startTime
    logger.info(`🕐 ${name}: ${time}ms`)

    return result
  }

  async run(): Promise<void> {
    const logger = Logger.configure('GenerateTypes:run')

    const debugOutputDirectory =
      process.env.DEBUG_OUTPUT_DIRECTORY || './data/responses'
    const schemaDirectory = process.env.SCHEMA_DIRECTORY || './data/schema'
    const typesDirectory =
      process.env.TYPES_DIRECTORY || './src/models/responses'
    const isParallel = process.env.IS_PARALLEL === 'true'

    try {
      // msで計測
      const results = this.calculateTime('GetEndPointResponses', () =>
        Utils.getEndPointResponses(debugOutputDirectory)
      )

      await this.awaitCalculateTime('TwitterTypesGenerator', () =>
        new TwitterTypesGenerator(results).generateTypes({
          directory: {
            schema: schemaDirectory,
            types: typesDirectory,
          },
          parallel: isParallel,
        })
      )

      await this.awaitCalculateTime(
        'CustomTypesGenerator',
        async () =>
          await new CustomTypesGenerator(
            results,
            schemaDirectory,
            typesDirectory
          ).generate(isParallel)
      )

      this.calculateTime('EndPointTypeGenerator', () =>
        new EndPointTypeGenerator(results, typesDirectory).generate()
      )
    } catch (error) {
      logger.error('An error occurred while generating types', error as Error)
    }
  }
}

;(async () => {
  new GenerateTypes().run()
})()
