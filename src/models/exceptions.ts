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
 * ユーザーがすでに「いいね！」をしていないツイートに「いいね！」を解除しようとした場合
 */
export class NotLikedError extends TwitterTsError {
  constructor() {
    super('Not liked')
  }
}

/**
 * ユーザーがすでにブロックしているユーザーをブロックしようとした場合
 */
export class AlreadyBlockedError extends TwitterTsError {
  constructor() {
    super('Already blocked')
  }
}

/**
 * ユーザーがブロックしていないユーザーをブロック解除しようとした場合
 */
export class NotBlockedError extends TwitterTsError {
  constructor() {
    super('Not blocked')
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
export class TwitterTimeoutError extends TwitterOperationError {}

/**
 * Twitterのレートリミット制限に引っかかった場合
 */
export class TwitterRateLimitError extends TwitterOperationError {}
