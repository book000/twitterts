import fs from 'node:fs'
import puppeteer, {
  Browser,
  ElementHandle,
  HTTPResponse,
  Page,
} from 'puppeteer-core'
import { authenticator } from 'otplib'
import { dirname, join } from 'node:path'
import {
  EndPointResponseType,
  GraphQLEndpoint,
} from './models/responses/endpoints'
import {
  TwitterOperationError,
  TwitterRateLimitError,
  TwitterTimeoutError,
} from './models/exceptions'
import { setTimeout } from 'node:timers/promises'

/**
 * HTTP メソッド
 */
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

/**
 * レスポンス種別
 */
export type RequestType = 'REST' | 'GRAPHQL'

/**
 * レスポンスの詳細
 */
interface ResponseDetails {
  /**
   * リクエストのキー（${type}_${name}_${method} の大文字）
   */
  key: string

  /**
   * リクエストの種別（REST | GRAPHQL）
   */
  type: RequestType

  /**
   * リクエストの HTTP メソッド（GET | POST | PUT | DELETE | PATCH）
   */
  method: HttpMethod

  /**
   * リクエスト名
   */
  name: string

  /**
   * レスポンステキスト
   */
  text: string
}

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

  /**
   * レスポンス時に実行されるコールバック関数
   *
   * @param details レスポンスの詳細
   */
  onResponse?: (details: ResponseDetails) => void
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
 * Puppeteer プロキシオプション
 */
export interface PuppeteerProxyOptions {
  /**
   * プロキシサーバー URL
   */
  server: string
  /**
   * プロキシサーバーのユーザー名
   */
  username?: string
  /**
   * プロキシサーバーのパスワード
   */
  password?: string
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

  /**
   * プロキシ設定
   */
  proxy?: PuppeteerProxyOptions
}

/**
 * {@link TwitterScraper} オプション
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
 * 対象 URL 定義
 */
interface TargetUrl {
  /**
   * レスポンスの種別
   */
  type: RequestType

  /**
   * ホスト名
   */
  hostname: string

  /**
   * パス名の配列。ワイルドカードとして * が使用できる。
   */
  pathnames: string[]

  /**
   * エンドポイント名の上書き
   */
  overrideName?: string
}

/**
 * レスポンスの URL として対象とする URL の定義
 */
const targetUrls: TargetUrl[] = [
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
  {
    type: 'REST',
    hostname: 'twitter.com',
    pathnames: ['i', 'api', '1.1', '<NAME*>'],
    overrideName: 'V1<NAME>',
  },
  {
    type: 'REST',
    hostname: 'twitter.com',
    pathnames: ['i', 'api', '2', '<NAME*>'],
    overrideName: 'V2<NAME>',
  },
]

function getEndpoint(url: string): {
  type: RequestType
  name: string
  overrideName?: string
} | null {
  const urlObject = new URL(url)
  if (!urlObject) {
    return null
  }

  const targets = targetUrls.filter(
    (targetUrl) => targetUrl.hostname === urlObject.hostname
  )
  if (!targets || targets.length === 0) {
    return null
  }

  for (const target of targets) {
    const pathnames = target.pathnames
    const pathname = urlObject.pathname
    const pathnameParts = pathname.split('/').filter((part) => part !== '')

    let name
    for (const [index, path] of pathnames.entries()) {
      const part = pathnameParts[index]
      if (path === '*') {
        continue
      }
      if (path === '<NAME>') {
        if (!part) {
          break
        }
        name = part
        continue
      }
      if (path === '<NAME*>') {
        if (!part) {
          break
        }
        // 以降の値を結合。但し拡張子は除く
        // 例: blocks/create.json -> blocks/create
        name = pathnameParts
          .slice(index)
          .join('/')
          .replace(/\.json$/, '')
        continue
      }
      if (path !== part) {
        break
      }
    }

    if (name) {
      return {
        type: target.type,
        name,
        overrideName: target.overrideName,
      }
    }
  }

  return null
}

/**
 * 取得したレスポンスのチェックを行い、詳細を返します。
 * レスポンスのチェックに失敗した場合は null を返します。
 *
 * @param response チェックし、詳細を返したいレスポンス
 * @returns レスポンスの詳細。チェックに失敗した場合は null
 */
async function getResponseDetails(
  response: HTTPResponse
): Promise<ResponseDetails | null> {
  if (response.request().method() === 'OPTIONS') {
    return null
  }

  let text
  try {
    text = await response.text()
  } catch {
    return null
  }

  const endpoint = getEndpoint(response.url())
  if (!endpoint) {
    return null
  }

  const method = response.request().method() as HttpMethod
  const type = endpoint.type

  // name に / がある場合は、その次の文字を大文字にする
  // name に _ がある場合は、その次の文字を大文字にする
  let name = endpoint.name.replaceAll(/[/_](.)/g, (_, p1) =>
    p1.toLocaleUpperCase()
  )

  const overrideName = endpoint.overrideName
  if (overrideName) {
    name = overrideName.replace('<NAME>', name)
  }

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

/**
 * レスポンスのキーを作成・取得します。
 *
 * @param input レスポンスのキーを作成・取得したいレスポンス
 * @param input.method レスポンスの HTTP メソッド
 * @param input.type レスポンスの種別
 * @param input.name リクエストの名前
 */
function getResponseKey(input: {
  method: HttpMethod
  type: RequestType
  name: string
}): string {
  return `${input.type}_${input.method}_${input.name}`.toLocaleUpperCase()
}

/**
 * Twitter スクレイピング ページクラス
 */
export class TwitterScraperPage {
  /**
   * Puppeteer のページインスタンス
   */
  public readonly page: Page

  /**
   * レスポンスの保持オブジェクト
   */
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
    N extends GraphQLEndpoint,
  >(
    url: string | null,
    method: M,
    type: T,
    name: N,
    timeout?: number
  ): Promise<EndPointResponseType<M, T, N>> {
    // レスポンスを待つ
    const promise = new Promise<EndPointResponseType<M, T, N>>(
      (resolve, reject) => {
        const abortController = new AbortController()
        setTimeout(timeout || 30_000, null, {
          signal: abortController.signal,
        })
          .then(() => {
            reject(new TwitterTimeoutError('Response timeout.'))
          })
          .catch((error) => {
            // ignore abort error
            if (abortController.signal.aborted) {
              return
            }
            reject(error)
          })

        const key = getResponseKey({
          method,
          type,
          name,
        })
        setInterval(() => {
          const responses = this.responses[key]
          if (responses && responses.length > 0) {
            const response = responses.shift()
            if (response) {
              abortController.abort()

              if (response === 'Rate limit exceeded') {
                reject(new TwitterRateLimitError())
                return
              }

              if (
                !response.trimStart().startsWith('[') &&
                !response.trimStart().startsWith('{')
              ) {
                reject(
                  new TwitterOperationError(
                    `Invalid response: ${response.slice(0, 100)}`
                  )
                )
                return
              }
              resolve(JSON.parse(response))
            }
          }
        }, 500)
      }
    )

    // ページ遷移
    if (url) {
      await this.page.goto(url)
    }

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
    N extends GraphQLEndpoint,
  >(method: M, type: T, name: N): EndPointResponseType<M, T, N> | null {
    const key = getResponseKey({
      method,
      type,
      name,
    })
    const responses = this.responses[key]
    if (!responses || responses.length === 0) {
      return null
    }
    const response = responses.shift()

    if (!response) {
      return null
    }

    if (response === 'Rate limit exceeded') {
      throw new TwitterRateLimitError()
    }

    if (
      !response.trimStart().startsWith('[') &&
      !response.trimStart().startsWith('{')
    ) {
      throw new TwitterOperationError(
        `Invalid response: ${response.slice(0, 100)}`
      )
    }

    return JSON.parse(response)
  }

  /**
   * 指定した URL に遷移します。
   *
   * @param url 遷移先 URL
   */
  public async goto(url: string): Promise<void> {
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
  public async waitAndClick(
    selector: string,
    isEvaluate = false,
    timeout?: number
  ): Promise<void> {
    const element = await this.page
      .waitForSelector(selector, {
        timeout: timeout || 30_000,
      })
      .catch(() => null)
    if (!element) {
      throw new TwitterOperationError(`Element not found: ${selector}`)
    }
    await this.page.evaluate((element) => element?.scrollIntoView(), element)
    await (isEvaluate
      ? this.page.evaluate((selector) => {
          const element = document.querySelector(selector)
          if (element) {
            // @ts-ignore
            element.click()
          }
        }, selector)
      : element.click())
  }

  /**
   * リダイレクトを待ち、リダイレクト先の URL を返します。
   *
   * @param sourceUrl リダイレクト前の URL
   * @returns リダイレクト先の URL
   */
  public async getRedirectTo(
    sourceUrl: string,
    timeout = 30_000
  ): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const abortController = new AbortController()
      setTimeout(timeout || 30_000, null, {
        signal: abortController.signal,
      })
        .then(() => {
          clearInterval(intervalId)
          reject(new TwitterTimeoutError('Redirect timeout.'))
        })
        .catch((error) => {
          // ignore abort error
          if (abortController.signal.aborted) {
            return
          }
          throw error
        })

      const intervalId = setInterval(async () => {
        const url = await this.page.evaluate(() => document.location.href)
        if (url === sourceUrl) {
          return
        }
        clearInterval(intervalId)
        abortController.abort()
        resolve(url)
      }, 500)
    })
  }

  /**
   * ページの最下部までスクロールします。
   */
  public async scrollToBottom(): Promise<void> {
    await this.page.evaluate(() => {
      const scrollHeight = document.documentElement.scrollHeight
      window.scrollTo({
        top: scrollHeight,
        behavior: 'smooth',
      })
    })
    await setTimeout(1000)
  }

  /**
   * ページを閉じます。
   */
  public async close(): Promise<void> {
    await this.page.close()
  }

  /**
   * レスポンスを保持するようにハンドラを設定します。
   *
   * @param page Puppeteer ページインスタンス
   */
  private setRetentionResponse(page: Page): void {
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
  /**
   * Twitter スクレイピングオプション
   */
  private readonly options: TwitterScraperOptions

  /**
   * Puppeteer ブラウザインスタンス
   */
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
  public async login(): Promise<void> {
    // ブラウザ作成
    this.browser = await this.createBrowser()

    // ログイン処理
    const loginPage = await this.newPage()

    await loginPage.goto('https://twitter.com', {
      waitUntil: ['load', 'networkidle2'],
    })
    await setTimeout(3000)

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
        .catch(
          (error) =>
            new TwitterOperationError('Username input not found.', error)
        )

      // next button
      await loginPage
        .waitForSelector('div[role="button"]:not([data-testid])')
        .then((element) => element?.click())
        .catch(
          (error) => new TwitterOperationError('Next button not found.', error)
        )

      const password = this.options.password
      // password
      await loginPage
        .waitForSelector('input[autocomplete="current-password"]')
        .then((element) => element?.type(password, { delay: 100 }))
        .catch(
          (error) =>
            new TwitterOperationError('Password input not found.', error)
        )

      // login button
      await loginPage
        .waitForSelector(
          'div[role="button"][data-testid="LoginForm_Login_Button"]'
        )
        .then((element) => element?.click())
        .catch(
          (error) => new TwitterOperationError('Login button not found.', error)
        )

      // need auth code ?
      const authCodeInput = await this.getElement(
        loginPage,
        'input[data-testid="ocfEnterTextTextInput"]',
        3000
      )
      if (authCodeInput) {
        const authCodeSecret = this.options.otpSecret
        if (!authCodeSecret) {
          throw new TwitterOperationError('OTP secret not found.')
        }
        const authCode = this.getOneTimePassword(authCodeSecret)
        await authCodeInput.type(authCode, { delay: 100 })
        await loginPage
          .waitForSelector(
            'div[role="button"][data-testid="ocfEnterTextNextButton"]'
          )
          .then((element) => element?.click())
          .catch(
            (error) =>
              new TwitterOperationError('OTP next button not found.', error)
          )

        await new Promise<void>((resolve, reject) => {
          const abortController = new AbortController()
          setTimeout(10_000, null, {
            signal: abortController.signal,
          })
            .then(() => {
              reject(new TwitterTimeoutError('Login timeout.'))
            })
            .catch((error) => {
              // ignore abort error
              if (abortController.signal.aborted) {
                return
              }
              throw error
            })
          const interval = setInterval(() => {
            if (loginPage.url() === 'https://twitter.com/home') {
              clearInterval(interval)
              abortController.abort()
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
  public async getScraperPage(): Promise<TwitterScraperPage> {
    const page = await this.newPage()
    return new TwitterScraperPage(page)
  }

  /**
   * ブラウザを閉じます。
   */
  public async close(): Promise<void> {
    if (!this.browser) {
      return
    }
    await this.browser.close()
  }

  public getBrowser(): Browser | undefined {
    return this.browser
  }

  /**
   * Puppeteer ブラウザインスタンスを作成します。
   *
   * @returns Puppeteer ブラウザインスタンス
   */
  private async createBrowser(): Promise<Browser> {
    const width = this.options.puppeteerOptions?.defaultViewport?.width || 600
    const height =
      this.options.puppeteerOptions?.defaultViewport?.height || 1000
    const puppeteerArguments = [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--disable-gpu',
      '--lang=ja',
      `--window-size=${width},${height}`,
      '--disable-session-crashed-bubble',
    ]

    if (this.options.puppeteerOptions?.enableDevtools) {
      puppeteerArguments.push('--auto-open-devtools-for-tabs')
    }
    if (
      this.options.puppeteerOptions?.proxy &&
      this.options.puppeteerOptions?.proxy.server
    ) {
      puppeteerArguments.push(
        '--proxy-server=' + this.options.puppeteerOptions.proxy.server
      )
    }

    const userDataDirectory =
      this.options.puppeteerOptions?.userDataDirectory || '/data/userdata'
    const browser = await puppeteer.launch({
      headless: false,
      executablePath: this.options.puppeteerOptions?.executablePath,
      channel: 'chrome',
      args: puppeteerArguments,
      defaultViewport: {
        width,
        height,
      },
      userDataDir: userDataDirectory,
    })

    process.on('SIGINT', async () => {
      await browser.close()
      process.exit(0)
    })

    return browser
  }

  /**
   * 新しいページを作成します。
   */
  private async newPage(): Promise<Page> {
    if (!this.browser) {
      throw new TwitterOperationError(
        'Failed to create page. Browser is not initialized.'
      )
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

    if (
      this.options.puppeteerOptions?.proxy &&
      this.options.puppeteerOptions?.proxy.username &&
      this.options.puppeteerOptions?.proxy.password
    ) {
      await page.authenticate({
        username: this.options.puppeteerOptions.proxy.username,
        password: this.options.puppeteerOptions.proxy.password,
      })
    }

    this.setAutoSaveResponse(page)

    return page
  }

  /**
   * レスポンスを自動保存するハンドラを設定します。
   *
   * @param page Puppeteer ページインスタンス
   */
  private setAutoSaveResponse(page: Page): void {
    if (!this.options.debugOptions?.outputResponse?.enable) {
      return
    }
    page.on('response', async (response) => {
      const details = await getResponseDetails(response)
      if (!details) {
        return
      }
      const url = response.url()
      const { type, name, method, text } = details

      const onResponse = this.options.debugOptions?.outputResponse?.onResponse
      if (onResponse) {
        onResponse(details)
      }

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
        const body = `// ${method} ${url}\n\n${JSON.stringify(data, null, 2)}`
        fs.writeFileSync(path, body)
      } catch {
        const path = `${pathNotIncludedExtension}txt`
        fs.writeFileSync(path, text)
      }
    })
  }

  /**
   * 指定したセレクタの要素を取得します。
   *
   * @param page Puppeteer ページインスタンス
   * @param selector セレクタ
   * @param timeout タイムアウトミリ秒
   * @returns 要素。見つからなかった場合は null
   */
  private async getElement(
    page: Page,
    selector: string,
    timeout = 3000
  ): Promise<ElementHandle<Element> | null> {
    try {
      return await page.waitForSelector(selector, { timeout })
    } catch {
      return null
    }
  }

  /**
   * シークレットをもとに OTP を生成します。
   *
   * @param secret シークレット
   * @returns OTP コード
   */
  private getOneTimePassword(secret: string): string {
    return authenticator.generate(secret)
  }
}
