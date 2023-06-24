import fs from 'node:fs'
import puppeteer, { Browser, HTTPResponse, Page } from 'puppeteer-core'
import { authenticator } from 'otplib'
import { dirname, join } from 'node:path'
import {
  EndPointResponseType,
  GraphQLEndpoint,
  RESTEndpoint,
} from './models/endpoints'

/**
 * レスポンスデバッグ出力オプション
 *
 * ${outputDirectory}/${type}/${name}/${method}/${timestamp}.json に出力されます。
 */
export interface TwitterScraperDebugOutputResponseOptions {
  /**
   * レスポンスをファイルに出力するか
   */
  enable: boolean

  /**
   * レスポンスを出力するディレクトリ
   */
  outputDirectory: string
}

/**
 * デバッグオプション
 */
export interface TwitterScraperDebugOptions {
  /**
   * レスポンスデバッグ出力オプション
   *
   * 指定しない場合はデバッグ出力されません。
   */
  outputResponse?: TwitterScraperDebugOutputResponseOptions
}

/**
 * Puppeteer オプション
 */
export interface PuppeteerOptions {
  /**
   * Puppeteer の実行ファイルパス
   *
   * 指定しない場合は chrome channel が使用されます。
   */
  executablePath?: string

  /**
   * デフォルトのビューポート
   */
  defaultViewport?: {
    /**
     * ビューポートの幅
     */
    width: number

    /**
     * ビューポートの高さ
     */
    height: number
  }

  /**
   * ユーザーデータディレクトリ
   *
   * 指定しない場合は /data/userdata が使用されます。
   */
  userDataDirectory?: string

  /**
   * DevTools を有効にするか
   */
  enableDevtools?: boolean
}

/**
 * TwitterScraper オプション
 */
export interface TwitterScraperOptions {
  /**
   * Twitter ユーザー名
   */
  username: string

  /**
   * Twitter パスワード
   */
  password: string

  /**
   * Twitter One Time Password シークレット
   */
  otpSecret?: string

  /**
   * デバッグオプション
   */
  debugOptions?: TwitterScraperDebugOptions

  /**
   * Puppeteer オプション
   */
  puppeteerOptions?: PuppeteerOptions
}

/**
 * HTTP メソッド
 */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

/**
 * レスポンス種別
 */
export type RequestType = 'REST' | 'GRAPHQL'

/**
 * レスポンス取得オプション
 */
export interface TwitterScraperGetResponseOptions {
  /**
   * ページ遷移先 URL
   */
  url: string

  /**
   * レスポンスを取得したいリクエストの HTTP メソッド
   */
  method: HttpMethod

  /**
   * レスポンスを取得したいリクエストの種別
   */
  type: RequestType

  /**
   * 取得処理のタイムアウト (ミリ秒)
   *
   * 指定しない場合は 30 秒でタイムアウトします。
   * タイムアウトした場合は 'Response timeout.' Error が throw されます。
   */
  timeout?: number
}

/**
 * レスポンスの URL として対象とする URL の定義
 *
 * hostname: ホスト名
 * pathnames: パス名の配列。ワイルドカードとして * が使用できる。<NAME> のパス箇所は name として利用する
 */
const targetUrls: {
  type: RequestType
  hostname: string
  pathnames: string[]
}[] = [
  {
    type: 'GRAPHQL',
    hostname: 'api.twitter.com',
    pathnames: ['graphql', '*', '<NAME>'],
  },
  {
    type: 'GRAPHQL',
    hostname: 'twitter.com',
    pathnames: ['i', 'api', 'graphql', '*', '<NAME>'],
  },
]

/**
 * 取得したレスポンスのチェックを行い、詳細を返します。
 * レスポンスのチェックに失敗した場合は null を返します。
 *
 * @param response チェックし、詳細を返したいレスポンス
 * @returns レスポンスの詳細。チェックに失敗した場合は null
 */
async function getResponseDetails(response: HTTPResponse) {
  if (response.request().method() === 'OPTIONS') {
    return null
  }

  const url = new URL(response.url())
  if (!url) {
    return null
  }

  const targetUrl = targetUrls.find(
    (targetUrl) => targetUrl.hostname === url.hostname
  )
  if (!targetUrl) {
    return null
  }

  const pathnames = targetUrl.pathnames
  const pathname = url.pathname
  const pathnameParts = pathname.split('/').filter((part) => part !== '')

  let name
  for (const [index, path] of pathnames.entries()) {
    const part = pathnameParts[index]
    if (path === '*') {
      continue
    }
    if (path === '<NAME>') {
      if (!part) {
        return null
      }
      name = part
      continue
    }
    if (path !== part) {
      return null
    }
  }
  if (!name) {
    return null
  }

  let text
  try {
    text = await response.text()
  } catch {
    return null
  }

  const type = targetUrl.type
  const method = response.request().method() as HttpMethod

  const key = getResponseKey({
    method,
    type,
    name,
  })

  return {
    key,
    type,
    method,
    name,
    text,
  }
}

function getResponseKey(input: {
  method: HttpMethod
  type: RequestType
  name: string
}) {
  return `${input.type}_${input.method}_${input.name}`.toLocaleUpperCase()
}

/**
 * Twitter スクレイピング ページクラス
 */
export class TwitterScraperPage {
  public readonly page: Page
  private readonly responses: {
    [key: string]: string[]
  } = {}

  /**
   * @param page Puppeteer のページ
   */
  constructor(page: Page) {
    this.page = page

    this.setRetentionResponse(page)
  }

  /**
   * 条件に一致するレスポンスをひとつのみ取得します。
   * 指定した timeout 値 (ミリ秒) でタイムアウトします。指定しない場合は 30 秒でタイムアウトします。
   *
   * @param options レスポンス取得オプション
   * @returns レスポンス
   */
  public async waitSingleResponse<
    M extends HttpMethod,
    T extends RequestType,
    N extends T extends 'GRAPHQL' ? GraphQLEndpoint : RESTEndpoint
  >(
    url: string,
    method: M,
    type: T,
    name: N,
    timeout?: number
  ): Promise<EndPointResponseType<M, T, N>> {
    setTimeout(() => {
      throw new Error('Response timeout.')
    }, timeout || 30_000)

    const key = getResponseKey({
      method,
      type,
      name,
    })

    // レスポンスを待つ
    const promise = new Promise<EndPointResponseType<M, T, N>>((resolve) => {
      setInterval(() => {
        const responses = this.responses[key]
        if (responses && responses.length > 0) {
          const response = responses.shift()
          if (response) {
            resolve(JSON.parse(response))
          }
        }
      }, 500)
    })

    // ページ遷移
    await this.page.goto(url)

    return await promise
  }

  /**
   * 条件に一致するレスポンスをひとつ取得します。繰り返し呼び出すことで複数のレスポンスを取得できます。
   * waitSingleResponse と異なり、レスポンス待ちを行わず、ページ遷移もしません（goto メソッドによるページ遷移が必要です）。
   *
   * @param options レスポンス取得オプション
   * @returns レスポンス。一致するレスポンスがない場合は null
   */
  public shiftResponse<
    M extends HttpMethod,
    T extends RequestType,
    N extends T extends 'GRAPHQL' ? GraphQLEndpoint : RESTEndpoint
  >(method: M, type: T, name: N): EndPointResponseType<M, T, N> | null {
    const key = getResponseKey({
      method,
      type,
      name,
    })
    const response = this.responses[key].shift()

    return response ? JSON.parse(response) : null
  }

  /**
   * 指定した URL に遷移します。
   *
   * @param url 遷移先 URL
   */
  public async goto(url: string) {
    await this.page.goto(url, {
      waitUntil: ['load', 'networkidle2'],
    })
  }

  /**
   * 要素を探し、描画範囲内に表示されるようにスクロールしたあと、クリックします。
   * 要素が検索処理は、指定した timeout 値 (ミリ秒) でタイムアウトします。指定しない場合は 30 秒でタイムアウトします。
   *
   * @param selector 要素のセレクタ
   */
  public async waitAndClick(selector: string, timeout?: number) {
    const element = await this.page
      .waitForSelector(selector, {
        timeout: timeout || 30_000,
      })
      .catch(() => null)
    if (!element) {
      throw new Error(`Element not found: ${selector}`)
    }
    await this.page.evaluate((element) => element?.scrollIntoView(), element)
    await element.click()
  }

  /**
   * ページの最下部までスクロールします。
   */
  public async scrollToBottom() {
    await this.page.evaluate(() => {
      const scrollHeight = document.documentElement.scrollHeight
      window.scrollTo({
        top: scrollHeight,
        behavior: 'smooth',
      })
    })
  }

  /**
   * ページを閉じます。
   */
  public async close() {
    await this.page.close()
  }

  private setRetentionResponse(page: Page) {
    page.on('response', async (response) => {
      const details = await getResponseDetails(response)
      if (!details) {
        return
      }
      const { key, text } = details

      this.responses[key] = this.responses[key] || []
      this.responses[key].push(text)
    })
  }
}

/**
 * Twitter スクレイピングクラス
 */
export class TwitterScraper {
  private readonly options: TwitterScraperOptions
  private browser: Browser | undefined

  /**
   * @param options Twitter スクレイピングオプション
   */
  constructor(options: TwitterScraperOptions) {
    this.options = options
  }

  /**
   * Twitter にログインします。
   */
  public async login() {
    // ブラウザ作成
    this.browser = await this.getBrowser()

    // ログイン処理
    const loginPage = await this.newPage()

    await loginPage.goto('https://twitter.com', {
      waitUntil: ['load', 'networkidle2'],
    })
    await new Promise<void>((resolve) => setTimeout(resolve, 3000))

    const href = await loginPage.evaluate(() => {
      return document.location.href
    })
    if (href !== 'https://twitter.com/home') {
      await loginPage.goto('https://twitter.com/i/flow/login', {
        waitUntil: ['load', 'networkidle2'],
      })

      const username = this.options.username
      await loginPage
        .waitForSelector('input[autocomplete="username"]')
        .then((element) => element?.type(username, { delay: 100 }))
        .catch((error) => new Error('Username input not found.', error))

      // next button
      await loginPage
        .waitForSelector('div[role="button"]:not([data-testid])')
        .then((element) => element?.click())
        .catch((error) => new Error('Next button not found.', error))

      const password = this.options.password
      // password
      await loginPage
        .waitForSelector('input[autocomplete="current-password"]')
        .then((element) => element?.type(password, { delay: 100 }))
        .catch((error) => new Error('Password input not found.', error))

      // login button
      await loginPage
        .waitForSelector(
          'div[role="button"][data-testid="LoginForm_Login_Button"]'
        )
        .then((element) => element?.click())
        .catch((error) => new Error('Login button not found.', error))

      // need auth code ?
      const authCodeInput = await this.getElement(
        loginPage,
        'input[data-testid="ocfEnterTextTextInput"]',
        3000
      )
      if (authCodeInput) {
        const authCodeSecret = this.options.otpSecret
        if (!authCodeSecret) {
          throw new Error('OTP secret not found.')
        }
        const authCode = this.getOneTimePassword(authCodeSecret)
        await authCodeInput.type(authCode, { delay: 100 })
        await loginPage
          .waitForSelector(
            'div[role="button"][data-testid="ocfEnterTextNextButton"]'
          )
          .then((element) => element?.click())
          .catch((error) => new Error('OTP next button not found.', error))

        await new Promise<void>((resolve, reject) => {
          setTimeout(() => {
            reject(new Error('Login timeout.'))
          }, 10_000)
          const interval = setInterval(() => {
            if (loginPage.url() === 'https://twitter.com/home') {
              clearInterval(interval)
              resolve()
            }
          }, 500)
        })
      }
      await loginPage.close()
    }
  }

  /**
   * TwitterScraperPage インスタンスを作成します。
   *
   * @returns TwitterScraperPage インスタンス
   */
  public async getScraperPage() {
    const page = await this.newPage()
    return new TwitterScraperPage(page)
  }

  /**
   * ブラウザを閉じます。
   */
  public async close() {
    if (!this.browser) {
      return
    }
    await this.browser.close()
  }

  private async getBrowser() {
    const puppeteerArguments = [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--disable-gpu',
      '--lang=ja',
      '--window-size=600,1000',
    ]

    if (this.options.puppeteerOptions?.enableDevtools) {
      puppeteerArguments.push('--auto-open-devtools-for-tabs')
    }

    const userDataDirectory =
      this.options.puppeteerOptions?.userDataDirectory || '/data/userdata'
    const browser = await puppeteer.launch({
      headless: false,
      executablePath: this.options.puppeteerOptions?.executablePath,
      channel: 'chrome',
      args: puppeteerArguments,
      defaultViewport: {
        width: this.options.puppeteerOptions?.defaultViewport?.width || 600,
        height: this.options.puppeteerOptions?.defaultViewport?.height || 1000,
      },
      userDataDir: userDataDirectory,
    })

    process.on('SIGINT', async () => {
      await browser.close()
      process.exit(0)
    })

    return browser
  }

  private async newPage() {
    if (!this.browser) {
      throw new Error('Failed to create page. Browser is not initialized.')
    }
    const page = await this.browser.newPage()

    page.setDefaultNavigationTimeout(120 * 1000)

    await page.evaluateOnNewDocument(() => {
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      Object.defineProperty(navigator, 'webdriver', () => {})
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line no-proto
      delete navigator.__proto__.webdriver
    })

    this.setAutoSaveResponse(page)

    return page
  }

  private setAutoSaveResponse(page: Page) {
    if (!this.options.debugOptions?.outputResponse?.enable) {
      return
    }
    page.on('response', async (response) => {
      const details = await getResponseDetails(response)
      if (!details) {
        return
      }
      const { type, name, method, text } = details

      const pathNotIncludedExtension = join(
        this.options.debugOptions?.outputResponse?.outputDirectory ||
          '/data/debug',
        type.toLowerCase(),
        name,
        method,
        response.status().toString(),
        `${Date.now()}.`
      )
      fs.mkdirSync(dirname(pathNotIncludedExtension), { recursive: true })

      try {
        const data = JSON.parse(text)
        const path = `${pathNotIncludedExtension}json`
        fs.writeFileSync(path, JSON.stringify(data, null, 2))
      } catch {
        const path = `${pathNotIncludedExtension}txt`
        fs.writeFileSync(path, text)
      }
    })
  }

  private async getElement(page: Page, selector: string, timeout = 3000) {
    try {
      return await page.waitForSelector(selector, { timeout })
    } catch {
      return null
    }
  }

  private getOneTimePassword(secret: string) {
    return authenticator.generate(secret)
  }
}
