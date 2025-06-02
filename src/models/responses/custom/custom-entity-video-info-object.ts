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
