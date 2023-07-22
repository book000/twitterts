// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Twitter } from './twitter'

/**
 * {@link Twitter.getUserByScreenName} のオプション
 */
export interface GetUserByScreenNameOptions {
  /** スクリーンネーム */
  screenName: string
}

/**
 * {@link Twitter.searchTweets} の検索種別
 */
export const SearchType = {
  /** 話題のツイート */
  POPULAR: null,
  /** 最新 */
  LIVE: 'live',
  /** アカウント */
  // USER: 'user', // searchTweets として適切ではない（ツイートではない）ため
  /** 画像 */
  IMAGE: 'image',
  /** 動画 */
  VIDEO: 'video',
} as const

/**
 * {@link Twitter.searchTweets} のオプション
 */
export interface SearchTweetsOptions {
  /** 検索クエリ */
  query: string
  /** 検索種別。デフォルトは「話題のツイート」 */
  searchType?: (typeof SearchType)[keyof typeof SearchType]
  /** 取得するツイートの最大数。デフォルトは 20 */
  limit?: number
}

/**
 * {@link Twitter["getUserTweets"]} のオプション
 */
export interface UserTweetsOptions {
  /** スクリーンネーム */
  screenName: string
  /** 取得するツイートの最大数。デフォルトは 20 */
  limit?: number
}
