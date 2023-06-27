import {
  GraphQLGETEndPointResponseType,
  GraphQLGETEndpoint,
} from '../models/responses/endpoints'

export abstract class BaseParser<T extends GraphQLGETEndpoint> {
  protected readonly response: GraphQLGETEndPointResponseType<T>

  constructor(response: GraphQLGETEndPointResponseType<T>) {
    this.response = response
  }
}
