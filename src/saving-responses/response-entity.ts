import { BaseEntity, Column, Entity, Index, PrimaryColumn } from 'typeorm'

@Entity('responses')
@Index('idx_endpoint_method_status', [
  'endpointType',
  'method',
  'endpoint',
  'statusCode',
])
@Index('idx_created_at', ['createdAt'])
export class DBResponse extends BaseEntity {
  @PrimaryColumn({
    type: 'varchar',
    length: 10,
    comment: 'エンドポイントの種別',
  })
  endpointType!: string

  @PrimaryColumn({
    type: 'varchar',
    length: 10,
    comment: 'エンドポイントのメソッド',
  })
  method!: string

  @PrimaryColumn({
    type: 'varchar',
    length: 255,
    comment: 'エンドポイントの名前',
  })
  endpoint!: string

  @Column({
    type: 'text',
    comment: 'リクエストURL',
    nullable: true,
  })
  url!: string | null

  @PrimaryColumn({
    type: 'varchar',
    length: 255,
    comment: 'リクエストURLのハッシュ値',
  })
  urlHash!: string

  @Column({
    type: 'longtext',
    comment: 'リクエストヘッダー',
    nullable: true,
  })
  requestHeaders!: string | null

  @Column({
    type: 'longtext',
    comment: 'リクエストボディ',
    nullable: true,
  })
  requestBody!: string | null

  @Column({
    type: 'varchar',
    length: 10,
    comment: 'レスポンスの種別',
  })
  responseType!: string

  @Column({
    type: 'int',
    comment: 'レスポンスのステータスコード',
  })
  statusCode!: number

  @Column({
    type: 'longtext',
    comment: 'レスポンスヘッダー',
    nullable: true,
  })
  responseHeaders!: string | null

  @Column({
    type: 'longtext',
    comment: 'レスポンスボディ',
  })
  responseBody!: string

  @PrimaryColumn({
    type: 'datetime',
    comment: 'データ登録日時',
    precision: 3,
  })
  createdAt!: Date
}
