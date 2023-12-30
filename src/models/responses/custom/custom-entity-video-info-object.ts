/* eslint-disable @typescript-eslint/ban-types */

/** エンティティ動画情報オブジェクト */

export type CustomEntityVideoInfoObject = null | {
  aspect_ratio: number[]
  duration_millis?: number
  variants: {
    bitrate?: number
    content_type: string
    url: string
  }[]
}
