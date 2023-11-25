import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity('responses')
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
  })
  url!: string

  @Column({
    type: 'text',
    comment: 'リクエストヘッダー',
  })
  requestHeaders!: string

  @Column({
    type: 'text',
    comment: 'リクエストボディ',
  })
  requestBody!: string

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
    type: 'text',
    comment: 'レスポンスヘッダー',
  })
  responseHeaders!: string

  @Column({
    type: 'text',
    comment: 'レスポンスボディ',
  })
  responseBody!: string

  @CreateDateColumn({
    comment: 'データ登録日時',
    precision: 3,
  })
  createdAt!: Date
}
