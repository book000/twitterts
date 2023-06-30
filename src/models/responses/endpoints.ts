import { GraphQLGetArticleNudgeDomainsSuccessResponse } from './graphql/get/article-nudge-domains-success'
import { GraphQLGetArticleNudgeDomainsErrorResponse } from './graphql/get/article-nudge-domains-error'
import { GraphQLGetAuthenticatedUserTFListsSuccessResponse } from './graphql/get/authenticated-user-tflists-success'
import { GraphQLGetBookmarksSuccessResponse } from './graphql/get/bookmarks-success'
import { GraphQLGetConnectTabTimelineSuccessResponse } from './graphql/get/connect-tab-timeline-success'
import { GraphQLGetDataSaverModeSuccessResponse } from './graphql/get/data-saver-mode-success'
import { GraphQLGetDataSaverModeErrorResponse } from './graphql/get/data-saver-mode-error'
import { GraphQLGetDMPinnedInboxQuerySuccessResponse } from './graphql/get/dmpinned-inbox-query-success'
import { GraphQLGetGetAltTextPromptPreferenceSuccessResponse } from './graphql/get/get-alt-text-prompt-preference-success'
import { GraphQLGetGetAltTextPromptPreferenceErrorResponse } from './graphql/get/get-alt-text-prompt-preference-error'
import { GraphQLGetGetUserClaimsSuccessResponse } from './graphql/get/get-user-claims-success'
import { GraphQLGetGetUserClaimsErrorResponse } from './graphql/get/get-user-claims-error'
import { GraphQLGetHomeLatestTimelineSuccessResponse } from './graphql/get/home-latest-timeline-success'
import { GraphQLPostHomeLatestTimelineSuccessResponse } from './graphql/post/home-latest-timeline-success'
import { GraphQLPostHomeLatestTimelineErrorResponse } from './graphql/post/home-latest-timeline-error'
import { GraphQLGetHomeTimelineSuccessResponse } from './graphql/get/home-timeline-success'
import { GraphQLPostHomeTimelineSuccessResponse } from './graphql/post/home-timeline-success'
import { GraphQLGetListLatestTweetsTimelineSuccessResponse } from './graphql/get/list-latest-tweets-timeline-success'
import { GraphQLGetListPinsSuccessResponse } from './graphql/get/list-pins-success'
import { GraphQLGetListPinsErrorResponse } from './graphql/get/list-pins-error'
import { GraphQLGetListsManagementPageTimelineSuccessResponse } from './graphql/get/lists-management-page-timeline-success'
import { GraphQLGetProfileSpotlightsQuerySuccessResponse } from './graphql/get/profile-spotlights-query-success'
import { GraphQLPostPutClientEducationFlagSuccessResponse } from './graphql/post/put-client-education-flag-success'
import { GraphQLGetSearchTimelineSuccessResponse } from './graphql/get/search-timeline-success'
import { GraphQLGetTweetDetailSuccessResponse } from './graphql/get/tweet-detail-success'
import { GraphQLGetUserByScreenNameSuccessResponse } from './graphql/get/user-by-screen-name-success'
import { GraphQLGetUserByScreenNameErrorResponse } from './graphql/get/user-by-screen-name-error'
import { GraphQLGetUserTweetsSuccessResponse } from './graphql/get/user-tweets-success'
import { GraphQLGetViewerSuccessResponse } from './graphql/get/viewer-success'

import { HttpMethod, RequestType } from '../../scraper'

/** GraphQL articleNudgeDomains GET レスポンスモデル */
export type GraphQLGetArticleNudgeDomainsResponse =
  | GraphQLGetArticleNudgeDomainsSuccessResponse
  | GraphQLGetArticleNudgeDomainsErrorResponse
/** GraphQL AuthenticatedUserTFLists GET レスポンスモデル */
export type GraphQLGetAuthenticatedUserTFListsResponse =
  GraphQLGetAuthenticatedUserTFListsSuccessResponse
/** GraphQL Bookmarks GET レスポンスモデル */
export type GraphQLGetBookmarksResponse = GraphQLGetBookmarksSuccessResponse
/** GraphQL ConnectTabTimeline GET レスポンスモデル */
export type GraphQLGetConnectTabTimelineResponse =
  GraphQLGetConnectTabTimelineSuccessResponse
/** GraphQL DataSaverMode GET レスポンスモデル */
export type GraphQLGetDataSaverModeResponse =
  | GraphQLGetDataSaverModeSuccessResponse
  | GraphQLGetDataSaverModeErrorResponse
/** GraphQL DMPinnedInboxQuery GET レスポンスモデル */
export type GraphQLGetDMPinnedInboxQueryResponse =
  GraphQLGetDMPinnedInboxQuerySuccessResponse
/** GraphQL getAltTextPromptPreference GET レスポンスモデル */
export type GraphQLGetGetAltTextPromptPreferenceResponse =
  | GraphQLGetGetAltTextPromptPreferenceSuccessResponse
  | GraphQLGetGetAltTextPromptPreferenceErrorResponse
/** GraphQL GetUserClaims GET レスポンスモデル */
export type GraphQLGetGetUserClaimsResponse =
  | GraphQLGetGetUserClaimsSuccessResponse
  | GraphQLGetGetUserClaimsErrorResponse
/** GraphQL HomeLatestTimeline GET レスポンスモデル */
export type GraphQLGetHomeLatestTimelineResponse =
  GraphQLGetHomeLatestTimelineSuccessResponse
/** GraphQL HomeTimeline GET レスポンスモデル */
export type GraphQLGetHomeTimelineResponse =
  GraphQLGetHomeTimelineSuccessResponse
/** GraphQL ListLatestTweetsTimeline GET レスポンスモデル */
export type GraphQLGetListLatestTweetsTimelineResponse =
  GraphQLGetListLatestTweetsTimelineSuccessResponse
/** GraphQL ListPins GET レスポンスモデル */
export type GraphQLGetListPinsResponse =
  | GraphQLGetListPinsSuccessResponse
  | GraphQLGetListPinsErrorResponse
/** GraphQL ListsManagementPageTimeline GET レスポンスモデル */
export type GraphQLGetListsManagementPageTimelineResponse =
  GraphQLGetListsManagementPageTimelineSuccessResponse
/** GraphQL ProfileSpotlightsQuery GET レスポンスモデル */
export type GraphQLGetProfileSpotlightsQueryResponse =
  GraphQLGetProfileSpotlightsQuerySuccessResponse
/** GraphQL SearchTimeline GET レスポンスモデル */
export type GraphQLGetSearchTimelineResponse =
  GraphQLGetSearchTimelineSuccessResponse
/** GraphQL TweetDetail GET レスポンスモデル */
export type GraphQLGetTweetDetailResponse = GraphQLGetTweetDetailSuccessResponse
/** GraphQL UserByScreenName GET レスポンスモデル */
export type GraphQLGetUserByScreenNameResponse =
  | GraphQLGetUserByScreenNameSuccessResponse
  | GraphQLGetUserByScreenNameErrorResponse
/** GraphQL UserTweets GET レスポンスモデル */
export type GraphQLGetUserTweetsResponse = GraphQLGetUserTweetsSuccessResponse
/** GraphQL Viewer GET レスポンスモデル */
export type GraphQLGetViewerResponse = GraphQLGetViewerSuccessResponse

export type GraphQLGETEndpoint =
  | 'articleNudgeDomains'
  | 'AuthenticatedUserTFLists'
  | 'Bookmarks'
  | 'ConnectTabTimeline'
  | 'DataSaverMode'
  | 'DMPinnedInboxQuery'
  | 'getAltTextPromptPreference'
  | 'GetUserClaims'
  | 'HomeLatestTimeline'
  | 'HomeTimeline'
  | 'ListLatestTweetsTimeline'
  | 'ListPins'
  | 'ListsManagementPageTimeline'
  | 'ProfileSpotlightsQuery'
  | 'SearchTimeline'
  | 'TweetDetail'
  | 'UserByScreenName'
  | 'UserTweets'
  | 'Viewer'

export type GraphQLGETEndPointResponseType<T extends GraphQLGETEndpoint> =
  T extends 'articleNudgeDomains'
    ? GraphQLGetArticleNudgeDomainsResponse
    : T extends 'AuthenticatedUserTFLists'
    ? GraphQLGetAuthenticatedUserTFListsResponse
    : T extends 'Bookmarks'
    ? GraphQLGetBookmarksResponse
    : T extends 'ConnectTabTimeline'
    ? GraphQLGetConnectTabTimelineResponse
    : T extends 'DataSaverMode'
    ? GraphQLGetDataSaverModeResponse
    : T extends 'DMPinnedInboxQuery'
    ? GraphQLGetDMPinnedInboxQueryResponse
    : T extends 'getAltTextPromptPreference'
    ? GraphQLGetGetAltTextPromptPreferenceResponse
    : T extends 'GetUserClaims'
    ? GraphQLGetGetUserClaimsResponse
    : T extends 'HomeLatestTimeline'
    ? GraphQLGetHomeLatestTimelineResponse
    : T extends 'HomeTimeline'
    ? GraphQLGetHomeTimelineResponse
    : T extends 'ListLatestTweetsTimeline'
    ? GraphQLGetListLatestTweetsTimelineResponse
    : T extends 'ListPins'
    ? GraphQLGetListPinsResponse
    : T extends 'ListsManagementPageTimeline'
    ? GraphQLGetListsManagementPageTimelineResponse
    : T extends 'ProfileSpotlightsQuery'
    ? GraphQLGetProfileSpotlightsQueryResponse
    : T extends 'SearchTimeline'
    ? GraphQLGetSearchTimelineResponse
    : T extends 'TweetDetail'
    ? GraphQLGetTweetDetailResponse
    : T extends 'UserByScreenName'
    ? GraphQLGetUserByScreenNameResponse
    : T extends 'UserTweets'
    ? GraphQLGetUserTweetsResponse
    : T extends 'Viewer'
    ? GraphQLGetViewerResponse
    : never

/** GraphQL HomeLatestTimeline POST レスポンスモデル */
export type GraphQLPostHomeLatestTimelineResponse =
  | GraphQLPostHomeLatestTimelineSuccessResponse
  | GraphQLPostHomeLatestTimelineErrorResponse
/** GraphQL HomeTimeline POST レスポンスモデル */
export type GraphQLPostHomeTimelineResponse =
  GraphQLPostHomeTimelineSuccessResponse
/** GraphQL PutClientEducationFlag POST レスポンスモデル */
export type GraphQLPostPutClientEducationFlagResponse =
  GraphQLPostPutClientEducationFlagSuccessResponse

export type GraphQLPOSTEndpoint =
  | 'HomeLatestTimeline'
  | 'HomeTimeline'
  | 'PutClientEducationFlag'

export type GraphQLPOSTEndPointResponseType<T extends GraphQLPOSTEndpoint> =
  T extends 'HomeLatestTimeline'
    ? GraphQLPostHomeLatestTimelineResponse
    : T extends 'HomeTimeline'
    ? GraphQLPostHomeTimelineResponse
    : T extends 'PutClientEducationFlag'
    ? GraphQLPostPutClientEducationFlagResponse
    : never

export type GraphQLEndpoint = GraphQLGETEndpoint | GraphQLPOSTEndpoint

export type RESTEndpoint = never

export type EndPointResponseType<
  M extends HttpMethod,
  T extends RequestType,
  N extends GraphQLEndpoint | RESTEndpoint
> = T extends 'GRAPHQL'
  ? M extends 'GET'
    ? N extends GraphQLGETEndpoint
      ? GraphQLGETEndPointResponseType<N>
      : never
    : never
  : M extends 'POST'
  ? N extends GraphQLPOSTEndpoint
    ? GraphQLPOSTEndPointResponseType<N>
    : never
  : never
