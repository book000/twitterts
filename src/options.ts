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
 * {@link Twitter.getScreenNameByUserId} のオプション
 */
export interface GetScreenNameByUserIdOptions {
  /** ユーザー ID */
  userId: string
}

/**
 * {@link Twitter.getUserByUserId} のオプション
 */
export interface GetUserByUserIdOptions {
  /** ユーザー ID */
  userId: string
}

/**
 * {@link Twitter.getHomeTimelineTweets} のタイムライン種別
 */
export const TimelineType = {
  /** おすすめ */
  RECOMMEND: 'recommend',
  /** フォロー中 */
  FOLLOWING: 'following',
} as const

/**
 * {@link Twitter.getHomeTimelineTweets} のオプション
 */
export interface GetHomeTimelineTweetsOptions {
  /** タイムライン種別 */
  timelineType: (typeof TimelineType)[keyof typeof TimelineType]

  /** 取得するツイートの最大数。デフォルトは 20 */
  limit?: number
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

/**
 * {@link Twitter["getUserLikeTweets"]} のオプション
 */
export interface UserLikeTweetsOptions {
  /** スクリーンネーム */
  screenName: string
  /** 取得するツイートの最大数。デフォルトは 20 */
  limit?: number
}

/**
 * {@link Twitter["likeTweet"]} のオプション
 */
export interface LikeTweetOptions {
  /** ツイート ID */
  tweetId: string
}

/**
 * {@link Twitter["unlikeTweet"]} のオプション
 */
export interface UnlikeTweetOptions {
  /** ツイート ID */
  tweetId: string
}
