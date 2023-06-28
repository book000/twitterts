import {
  GraphQLGETEndPointResponseType,
  GraphQLGETEndpoint,
} from '../models/responses/endpoints'

/**
 * パーサーの基底クラス
 */
export abstract class BaseParser<T extends GraphQLGETEndpoint> {
  protected readonly response: GraphQLGETEndPointResponseType<T>

  /**
   * @param response パースしたいエンドポイントのレスポンス
   */
  constructor(response: GraphQLGETEndPointResponseType<T>) {
    this.response = response
  }
}
