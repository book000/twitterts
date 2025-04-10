import { Logger } from '@book000/node-utils'
import { BulkAddTypeRecord, ResponseDatabase } from './saving-responses'
import { createSchema } from 'genson-js/dist'
import { Awaitable } from 'puppeteer-core'

class GenerateSchema {
  async runRemoveOldPartitions(
    responseDatabase: ResponseDatabase
  ): Promise<void> {
    const logger = Logger.configure('GenerateTypes:runRemoveOldPartitions')

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
      logger.info(`🚮 Dropping partition...: ${targetPartition}`)
      await responseDatabase.dropPartition(targetPartition)
    }
  }

  async runOptimizeTableRecords(
    responseDatabase: ResponseDatabase
  ): Promise<void> {
    const logger = Logger.configure('GenerateTypes:runOptimizeTableRecords')

    logger.info('🚀 Optimize table records...')
    const { deletedTypeMappingCount, deletedSchemataCount } =
      await responseDatabase.optimizeTableRecords().catch((error: unknown) => {
        logger.error('🚨 Failed to optimize table records', error as Error)
        return {
          deletedTypeMappingCount: 0,
          deletedSchemataCount: 0,
        }
      })
    logger.info(`⚡ Delete from type_mapping: ${deletedTypeMappingCount}`)
    logger.info(`⚡ Delete from schemata: ${deletedSchemataCount}`)
  }

  public async run() {
    const logger = Logger.configure('GenerateSchema:run')

    const pageLimit = process.env.PAGE_LIMIT
      ? Number(process.env.PAGE_LIMIT)
      : 100

    const skipRemoveOldPartitions =
      process.env.SKIP_REMOVE_OLD_PARTITIONS === 'true'
    const skipOptimizeTableRecords =
      process.env.SKIP_OPTIMIZE_TABLE_RECORDS === 'true'

    logger.info('🔧 Options')
    logger.info(`  📌 Page limit: ${pageLimit}`)
    logger.info('⏭️ Skip functions')
    logger.info(`  🚀 Remove old partitions: ${skipRemoveOldPartitions}`)
    logger.info(`  🚀 Optimize table records: ${skipOptimizeTableRecords}`)

    const responseDatabase = new ResponseDatabase()
    try {
      logger.info('🚀 Initialize responses database')
      const result = await responseDatabase.init()
      if (!result) {
        return
      }

      if (!skipRemoveOldPartitions) {
        await this.calculateTime('RemoveOldPartitions', () =>
          this.runRemoveOldPartitions(responseDatabase)
        )
      }

      if (!skipOptimizeTableRecords) {
        await this.calculateTime('OptimizeTableRecords', () =>
          this.runOptimizeTableRecords(responseDatabase)
        )
      }

      let processedCount = 0
      let page = 0
      while (true) {
        page++
        logger.info(
          `🚀 Generating #${page} : Loading not generated schema count`
        )
        const getStartTimestamp = Date.now()
        const notGeneratedSchemaResponsesCount =
          await this.getNotGeneratedSchemaResponsesCount(responseDatabase)
        const getEndTimestamp = Date.now()
        const getTime = getEndTimestamp - getStartTimestamp
        const formattedGetTime = this.formatTime(getTime)
        logger.info(
          `⏳ Remaining #${page} : ${notGeneratedSchemaResponsesCount} (${formattedGetTime})`
        )

        logger.info(
          `🚀 Generating #${page} : Loading not generated schema responses`
        )
        const loadStartTimestamp = Date.now()
        const responses =
          await responseDatabase.getNotGeneratedSchemaResponses(pageLimit)
        const loadEndTimestamp = Date.now()

        const filteredResponses = responses.filter(
          (response) =>
            response.responseBody.trim().length > 0 &&
            response.responseType === 'JSON'
        )
        if (filteredResponses.length === 0) {
          break
        }

        logger.info(`🚀 Generating #${page} : Generating schema`)
        const generateStartTimestamp = Date.now()
        const records: BulkAddTypeRecord[] = []
        for (const response of responses) {
          const { responseBody } = response
          const responseJson = JSON.parse(responseBody)

          const isErrorResponse =
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            'errors' in responseJson && responseJson.errors.length > 0
          const schema = createSchema(responseJson)

          records.push({
            response,
            isErrorResponse,
            schema,
          })

          processedCount++
        }
        const generateEndTimestamp = Date.now()

        logger.info(`🚀 Generating #${page} : Bulk add schema`)
        const addStartTimestamp = Date.now()
        await responseDatabase.bulkAddSchema(records)
        const addEndTimestamp = Date.now()

        const loadTime = loadEndTimestamp - loadStartTimestamp
        const formattedLoadTime = this.formatTime(loadTime)
        const generateTime = generateEndTimestamp - generateStartTimestamp
        const formattedGenerateTime = this.formatTime(generateTime)
        const addTime = addEndTimestamp - addStartTimestamp
        const formattedAddTime = this.formatTime(addTime)

        logger.info(
          `🆗 Generated #${page} : Processed: ${processedCount} / Load: ${formattedLoadTime} / Generate: ${formattedGenerateTime} / Add: ${formattedAddTime}`
        )
      }
    } catch (error) {
      logger.error('🚨 Failed to generate schema', error as Error)
    } finally {
      await responseDatabase.close()
    }
  }

  async getNotGeneratedSchemaResponsesCount(
    responseDatabase: ResponseDatabase
  ): Promise<number> {
    const logger = Logger.configure(
      'GenerateSchema:getNotGeneratedSchemaResponsesCount'
    )
    try {
      const countResponses = await responseDatabase.getResponsesCount()
      const countGeneratedSchemaResponsesCount =
        await responseDatabase.getResponsesCountFromMapping()

      const notGeneratedSchemaResponsesCount =
        countResponses - countGeneratedSchemaResponsesCount

      return notGeneratedSchemaResponsesCount
    } catch (error) {
      logger.error(
        '🚨 Failed to fetch not generated schema responses count',
        error as Error
      )
      return -1
    }
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

  formatDateTime(date: Date): string {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    // yyyy/MM/dd hh:mm:ss形式でフォーマット
    return (
      [
        year.toString().padStart(4, '0'),
        month.toString().padStart(2, '0'),
        day.toString().padStart(2, '0'),
      ].join('/') +
      ' ' +
      [
        hour.toString().padStart(2, '0'),
        minute.toString().padStart(2, '0'),
        second.toString().padStart(2, '0'),
      ].join(':')
    )
  }

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
}

;(async () => {
  await new GenerateSchema().run()
})()
