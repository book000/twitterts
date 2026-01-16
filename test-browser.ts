import { connect } from 'puppeteer-real-browser'

async function main() {
  console.log('Starting browser test...')
  console.log('Platform:', process.platform)
  console.log('CI:', process.env.CI)
  console.log('DISPLAY:', process.env.DISPLAY)
  console.log('CHROME_PATH:', process.env.CHROME_PATH)

  try {
    console.log('Connecting to browser...')
    const result = await connect({
      headless: false,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      turnstile: true,
      disableXvfb: true,
    })

    console.log('Browser connected!')
    const { browser, page } = result

    console.log('Navigating to example.com...')
    await page.goto('https://example.com')

    const title = await page.title()
    console.log('Page title:', title)

    console.log('Closing browser...')
    await browser.close()

    console.log('Test completed successfully!')
  } catch (error) {
    console.error('Error:', error)
    process.exit(1)
  }
}

main()
