import { Logger } from '@book000/node-utils'
import { BulkAddTypeRecord, ResponseDatabase } from './saving-responses'
import { createSchema } from 'genson-js/dist'

class GenerateSchema {
  public async run() {
    const logger = Logger.configure('GenerateSchema:run')

    const pageLimit = process.env.PAGE_LIMIT
      ? Number(process.env.PAGE_LIMIT)
      : 100

    logger.info('🔧 Options')
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

      let processedCount = 0
      let page = 0
      while (true) {
        page++
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
