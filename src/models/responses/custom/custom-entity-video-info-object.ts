/* eslint-disable @typescript-eslint/no-empty-object-type */

/** エンティティ動画情報オブジェクト */

export type CustomEntityVideoInfoObject = null | {
  aspect_ratio: number[]
  duration_millis?: number
  variants: {
    content_type: string
    url: string
    bitrate?: number
  }[]
}
