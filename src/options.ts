export interface GetUserByScreenNameOptions {
  screenName: string
}

export const SearchType = {
  /** 話題のツイート */
  POPULAR: null,
  /** 最新 */
  LIVE: 'live',
  /** アカウント */
  USER: 'user',
  /** 画像 */
  IMAGE: 'image',
  /** 動画 */
  VIDEO: 'video',
} as const

export interface SearchTweetsOptions {
  /** 検索クエリ */
  query: string
  /** 検索種別。デフォルトは「話題のツイート」 */
  searchType?: (typeof SearchType)[keyof typeof SearchType]
}
