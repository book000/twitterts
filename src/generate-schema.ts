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

      logger.info('🔍 Getting not generated schema count...')
      const count = await responseDatabase.getNotGeneratedSchemaResponseCount()
      logger.info(`🔍 Found ${count} responses`)

      let remaining = count
      while (true) {
        logger.info(`🚀 Generate schema...: ${pageLimit}`)
        const responses =
          await responseDatabase.getNotGeneratedSchemaResponses(pageLimit)
        if (responses.length === 0) {
          break
        }

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
        }

        await responseDatabase.bulkAddSchema(records)

        remaining -= responses.length

        logger.info(`Remaining: ${remaining}`)
      }
    } catch (error) {
      logger.error('🚨 Failed to generate schema', error as Error)
    } finally {
      await responseDatabase.close()
    }
  }
}

;(async () => {
  await new GenerateSchema().run()
})()
