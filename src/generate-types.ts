import { Logger } from '@book000/node-utils'
import { EndPointTypeGenerator } from './generate-types/endpoint-type-generator'
import { ResponseDatabase } from './saving-responses'
import { Awaitable } from 'puppeteer-core'
import { CustomTypesGenerator } from './generate-types/custom-types-generator'
import { TwitterTypesGenerator } from './generate-types/types-generator'

class GenerateTypes {
  formatTime(time: number): string {
    const millisecond = time % 1000
    const second = Math.floor(time / 1000) % 60
    const minute = Math.floor(time / 1000 / 60) % 60
    const hour = Math.floor(time / 1000 / 60 / 60)

    const millisecondString = millisecond.toString().padStart(3, '0')
    const secondString = second.toString().padStart(2, '0')
    const minuteString = minute.toString().padStart(2, '0')
    const hourString = hour.toString().padStart(2, '0')

    if (hour > 0) {
      return `${hourString}:${minuteString}:${secondString}.${millisecondString}`
    }
    if (minute > 0) {
      return `${minuteString}:${secondString}.${millisecondString}`
    }
    if (second > 0) {
      return `${secondString}.${millisecondString}`
    }
    return `0.${millisecondString}`
  }

  async calculateTime<T>(
    name: string,
    runner: () => Awaitable<T>
  ): Promise<Awaitable<T>> {
    const logger = Logger.configure('GenerateTypes:calculateTime')

    const startTime = Date.now()
    const result = await runner()
    const endTime = Date.now()

    const time = endTime - startTime
    const timeString = this.formatTime(time)
    logger.info(`🕐 ${name}: ${timeString}ms`)

    return result
  }

  formatSize(size: number): string {
    const kiloByte = size % 1024
    const megaByte = Math.floor(size / 1024) % 1024
    const gigaByte = Math.floor(size / 1024 / 1024) % 1024
    const teraByte = Math.floor(size / 1024 / 1024 / 1024)

    const kiloByteString = kiloByte.toString().padStart(3, '0')
    const megaByteString = megaByte.toString().padStart(3, '0')
    const gigaByteString = gigaByte.toString().padStart(3, '0')
    const teraByteString = teraByte.toString().padStart(3, '0')

    if (teraByte > 0) {
      return `${teraByteString}.${gigaByteString}GB`
    }
    if (gigaByte > 0) {
      return `${gigaByteString}.${megaByteString}MB`
    }
    if (megaByte > 0) {
      return `${megaByteString}.${kiloByteString}KB`
    }
    return `${kiloByteString}B`
  }

  async run(): Promise<void> {
    const logger = Logger.configure('GenerateTypes:run')

    const schemaDirectory = process.env.SCHEMA_DIRECTORY ?? './data/schema'
    const typesDirectory =
      process.env.TYPES_DIRECTORY ?? './src/models/responses'
    const isAllParallel = process.env.IS_ALL_PARALLEL === 'true'
    const isTypesGenerateParallel =
      isAllParallel || process.env.IS_TYPES_GENERATE_PARALLEL === 'true'
    const isCustomTypeGenerateParallel =
      isAllParallel || process.env.IS_CUSTOM_TYPE_GENERATE_PARALLEL === 'true'
    const pageLimit = process.env.PAGE_LIMIT
      ? Number(process.env.PAGE_LIMIT)
      : 100

    logger.info('📁 Directories')
    logger.info(`  📂 Schema: ${schemaDirectory}`)
    logger.info(`  📂 Types: ${typesDirectory}`)
    logger.info('🔧 Options')
    logger.info(`  📌 All parallel: ${isAllParallel}`)
    logger.info(`  📌 Types generate parallel: ${isTypesGenerateParallel}`)
    logger.info(
      `  📌 Custom type generate parallel: ${isCustomTypeGenerateParallel}`
    )
    logger.info(`  📌 Page limit: ${pageLimit}`)

    const responseDatabase = new ResponseDatabase()
    try {
      logger.info('🚀 Initialize responses database')
      const result = await responseDatabase.init()
      if (!result) {
        return
      }

      // remove old partition data
      logger.info('🚀 Remove old partition data')
      const partitions = responseDatabase.getPartitions()
      // 3か月よりも前のパーティションを削除
      const date = new Date()
      date.setMonth(date.getMonth() - 3)
      const targetPartitions = partitions.filter(
        (partition) =>
          responseDatabase.convertPartitonNameToDate(partition) < date
      )

      for (const targetPartition of targetPartitions) {
        logger.info(`🚀 Dropping partition...: ${targetPartition}`)
        await responseDatabase.dropPartition(targetPartition)
      }

      logger.info('🚀 Optimize table records...')
      const { deletedTypeMappingCount, deletedSchemataCount } =
        await responseDatabase.optimizeTableRecords()
      logger.info(`⚡ Delete from type_mapping: ${deletedTypeMappingCount}`)
      logger.info(`⚡ Delete from schemata: ${deletedSchemataCount}`)

      logger.info('🔍 Getting endpoints...')
      const rawEndpoints = await this.calculateTime('GetEndpoints', () =>
        responseDatabase.getEndpoints('GRAPHQL')
      )
      const endpoints = rawEndpoints.filter(
        (endpoint) => endpoint.count > 0 && endpoint.endpointType === 'GRAPHQL'
      )
      logger.info(`🔍 Found ${endpoints.length} endpoints`)

      // msで計測
      await this.calculateTime('TwitterTypesGenerator', async () => {
        await new TwitterTypesGenerator(responseDatabase).generateTypes({
          directory: {
            schema: schemaDirectory,
            types: typesDirectory,
          },
          parallel: isTypesGenerateParallel,
          limit: pageLimit,
          endpoints,
        })
      })

      await this.calculateTime('CustomTypesGenerator', async () => {
        await new CustomTypesGenerator(
          responseDatabase,
          schemaDirectory,
          typesDirectory,
          pageLimit
        ).generate(isCustomTypeGenerateParallel)
      })

      await this.calculateTime('EndPointTypeGenerator', () => {
        new EndPointTypeGenerator(typesDirectory).generate(endpoints)
      })

      await responseDatabase.close()
      logger.info('🎉 All done!')
    } catch (error) {
      logger.error('An error occurred while generating types', error as Error)

      await responseDatabase.close()
    }
  }
}

;(async () => {
  await new GenerateTypes().run()
})()
