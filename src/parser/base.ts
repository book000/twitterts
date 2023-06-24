import {
  GraphQLGETEndPointResponseType,
  GraphQLGETEndpoint,
} from '../models/responses/endpoints'

export abstract class BaseParser<T extends GraphQLGETEndpoint> {
  abstract parse(response: GraphQLGETEndPointResponseType<T>): void
}
