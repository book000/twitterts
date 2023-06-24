import { GraphQLGetAuthenticatedUserTFListsResponse } from './graphql/get/authenticated-user-tflists'
import { GraphQLGetBookmarksResponse } from './graphql/get/bookmarks'
import { GraphQLGetDataSaverModeResponse } from './graphql/get/data-saver-mode'
import { GraphQLGetGetAltTextPromptPreferenceResponse } from './graphql/get/get-alt-text-prompt-preference'
import { GraphQLGetGetUserClaimsResponse } from './graphql/get/get-user-claims'
import { GraphQLGetHomeLatestTimelineResponse } from './graphql/get/home-latest-timeline'
import { GraphQLPostHomeLatestTimelineResponse } from './graphql/post/home-latest-timeline'
import { GraphQLPostHomeTimelineResponse } from './graphql/post/home-timeline'
import { GraphQLGetListPinsResponse } from './graphql/get/list-pins'
import { GraphQLGetListsManagementPageTimelineResponse } from './graphql/get/lists-management-page-timeline'
import { GraphQLGetProfileSpotlightsQueryResponse } from './graphql/get/profile-spotlights-query'
import { GraphQLGetSearchTimelineResponse } from './graphql/get/search-timeline'
import { GraphQLGetTweetDetailResponse } from './graphql/get/tweet-detail'
import { GraphQLGetUserByScreenNameResponse } from './graphql/get/user-by-screen-name'
import { GraphQLGetUserTweetsResponse } from './graphql/get/user-tweets'

import { HttpMethod, RequestType } from '../scraper'

export type GraphQLGETEndpoint =
  | 'AuthenticatedUserTFLists'
  | 'Bookmarks'
  | 'DataSaverMode'
  | 'getAltTextPromptPreference'
  | 'GetUserClaims'
  | 'HomeLatestTimeline'
  | 'ListPins'
  | 'ListsManagementPageTimeline'
  | 'ProfileSpotlightsQuery'
  | 'SearchTimeline'
  | 'TweetDetail'
  | 'UserByScreenName'
  | 'UserTweets'

export type GraphQLGETEndPointResponseType<T extends GraphQLGETEndpoint> =
  T extends 'AuthenticatedUserTFLists' ? GraphQLGetAuthenticatedUserTFListsResponse :
  T extends 'Bookmarks' ? GraphQLGetBookmarksResponse :
  T extends 'DataSaverMode' ? GraphQLGetDataSaverModeResponse :
  T extends 'getAltTextPromptPreference' ? GraphQLGetGetAltTextPromptPreferenceResponse :
  T extends 'GetUserClaims' ? GraphQLGetGetUserClaimsResponse :
  T extends 'HomeLatestTimeline' ? GraphQLGetHomeLatestTimelineResponse :
  T extends 'HomeLatestTimeline' ? GraphQLPostHomeLatestTimelineResponse :
  T extends 'HomeTimeline' ? GraphQLPostHomeTimelineResponse :
  T extends 'ListPins' ? GraphQLGetListPinsResponse :
  T extends 'ListsManagementPageTimeline' ? GraphQLGetListsManagementPageTimelineResponse :
  T extends 'ProfileSpotlightsQuery' ? GraphQLGetProfileSpotlightsQueryResponse :
  T extends 'SearchTimeline' ? GraphQLGetSearchTimelineResponse :
  T extends 'TweetDetail' ? GraphQLGetTweetDetailResponse :
  T extends 'UserByScreenName' ? GraphQLGetUserByScreenNameResponse :
  T extends 'UserTweets' ? GraphQLGetUserTweetsResponse :
  never

export type GraphQLPOSTEndpoint =
  | 'HomeLatestTimeline'
  | 'HomeTimeline'

export type GraphQLPOSTEndPointResponseType<T extends GraphQLPOSTEndpoint> =
  T extends 'AuthenticatedUserTFLists' ? GraphQLGetAuthenticatedUserTFListsResponse :
  T extends 'Bookmarks' ? GraphQLGetBookmarksResponse :
  T extends 'DataSaverMode' ? GraphQLGetDataSaverModeResponse :
  T extends 'getAltTextPromptPreference' ? GraphQLGetGetAltTextPromptPreferenceResponse :
  T extends 'GetUserClaims' ? GraphQLGetGetUserClaimsResponse :
  T extends 'HomeLatestTimeline' ? GraphQLGetHomeLatestTimelineResponse :
  T extends 'HomeLatestTimeline' ? GraphQLPostHomeLatestTimelineResponse :
  T extends 'HomeTimeline' ? GraphQLPostHomeTimelineResponse :
  T extends 'ListPins' ? GraphQLGetListPinsResponse :
  T extends 'ListsManagementPageTimeline' ? GraphQLGetListsManagementPageTimelineResponse :
  T extends 'ProfileSpotlightsQuery' ? GraphQLGetProfileSpotlightsQueryResponse :
  T extends 'SearchTimeline' ? GraphQLGetSearchTimelineResponse :
  T extends 'TweetDetail' ? GraphQLGetTweetDetailResponse :
  T extends 'UserByScreenName' ? GraphQLGetUserByScreenNameResponse :
  T extends 'UserTweets' ? GraphQLGetUserTweetsResponse :
  never

export type GraphQLEndpoint =
  | GraphQLGETEndpoint
  | GraphQLPOSTEndpoint

export type RESTEndpoint =
  | never

export type EndPointResponseType<M extends HttpMethod, T extends RequestType, N extends GraphQLEndpoint | RESTEndpoint> = 
T extends 'GraphQL' ?
  M extends 'GET' ?
    N extends GraphQLGETEndpoint ?
      GraphQLGETEndPointResponseType<N> :
      never :
    never
:
  M extends 'POST' ?
    N extends GraphQLPOSTEndpoint ?
      GraphQLPOSTEndPointResponseType<N> :
      never :
    never
