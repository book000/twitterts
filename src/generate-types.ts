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
    const isAllParallel = process.env.IS_ALL_PARALLEL === 'true'
    const isTypesGenerateParallel =
      isAllParallel || process.env.IS_TYPES_GENERATE_PARALLEL === 'true'
    const isCustomTypeGenerateParallel =
      isAllParallel || process.env.IS_CUSTOM_TYPE_GENERATE_PARALLEL === 'true'

    logger.info('📁 Directories')
    logger.info(`  📂 Debug output: ${debugOutputDirectory}`)
    logger.info(`  📂 Schema: ${schemaDirectory}`)
    logger.info(`  📂 Types: ${typesDirectory}`)
    logger.info('🔧 Options')
    logger.info(`  📌 All parallel: ${isAllParallel}`)
    logger.info(`  📌 Types generate parallel: ${isTypesGenerateParallel}`)
    logger.info(
      `  📌 Custom type generate parallel: ${isCustomTypeGenerateParallel}`
    )

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
          parallel: isTypesGenerateParallel,
        })
      )

      await this.awaitCalculateTime('CustomTypesGenerator', () =>
        new CustomTypesGenerator(
          results,
          schemaDirectory,
          typesDirectory
        ).generate(isCustomTypeGenerateParallel)
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
