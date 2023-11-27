import {
  BaseEntity,
  Column,
  Entity,
  Index,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('responses')
@Index(
  ['endpointType', 'method', 'endpoint', 'statusCode', 'urlHash', 'createdAt'],
  {
    unique: true,
  }
)
export class DBResponse extends BaseEntity {
  @PrimaryGeneratedColumn('increment', {
    type: 'int',
    comment: 'レスポンスID',
  })
  id!: number

  @Column({
    type: 'varchar',
    length: 10,
    comment: 'エンドポイントの種別',
  })
  endpointType!: string

  @Column({
    type: 'varchar',
    length: 10,
    comment: 'エンドポイントのメソッド',
  })
  method!: string

  @Column({
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

  @Column({
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

  @Column({
    type: 'datetime',
    comment: 'データ登録日時',
    precision: 3,
  })
  createdAt!: Date
}
