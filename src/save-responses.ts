import { Logger } from '@book000/node-utils'
import { Twitter } from './twitter'

/**
 * メイン処理
 */
async function main(): Promise<void> {
  const username = process.env.TWITTER_USERNAME
  const password = process.env.TWITTER_PASSWORD
  const otpSecret = process.env.TWITTER_OTP_SECRET
  if (!username || !password || !otpSecret) {
    throw new Error('Failed to get environment variables.')
  }

  const twitter = await Twitter.login({
    username,
    password,
    otpSecret,
    puppeteerOptions: {
      userDataDirectory: './data/userdata',
    },
    debugOptions: {
      outputResponse: {
        enable: true,
        onResponse: (details) => {
          const logger = Logger.configure('save-responses')
          logger.info(`[${details.type}] ${details.method} ${details.name}`)
        },
      },
    },
  })

  process.on('SIGINT', async () => {
    await twitter.close()
    process.exit()
  })
}

;(async () => {
  const logger = Logger.configure('save-responses')
  try {
    await main()
  } catch (error) {
    logger.error('Error occurred', error as Error)
  }
})()
