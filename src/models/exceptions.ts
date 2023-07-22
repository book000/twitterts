/**
 * メソッドに無効または不適切な引数が渡された場合
 */
export class IllegalArgumentError extends Error {}

/**
 * ユーザーがすでに「いいね！」をしているツイートに「いいね！」をしようとした場合
 */
export class AlreadyLikedError extends Error {
  constructor() {
    super('Already liked')
  }
}

/**
 * Twitterでの操作に失敗した場合
 */
export class TwitterOperationError extends Error {}
