/**
 * twitterts ライブラリのエラー
 */
export class TwitterTsError extends Error {}

/**
 * メソッドに無効または不適切な引数が渡された場合
 */
export class IllegalArgumentError extends TwitterTsError {}

/**
 * ユーザーがすでに「いいね！」をしているツイートに「いいね！」をしようとした場合
 */
export class AlreadyLikedError extends TwitterTsError {
  constructor() {
    super('Already liked')
  }
}

/**
 * ユーザーが存在しない場合
 */
export class UserNotFoundError extends TwitterTsError {
  constructor() {
    super('User not found')
  }
}

/**
 * レスポンスのパースに失敗した場合
 */
export class ResponseParseError extends TwitterTsError {}

/**
 * Twitterでの操作に失敗した場合
 */
export class TwitterOperationError extends TwitterTsError {}

/**
 * Twitterでの操作でタイムアウトした場合
 */
export class TwitterTimeoutError extends TwitterTsError {}
