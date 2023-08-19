import { GraphQLGetArticleNudgeDomainsSuccessResponse } from './graphql/get/article-nudge-domains-success'
import { GraphQLGetArticleNudgeDomainsErrorResponse } from './graphql/get/article-nudge-domains-error'
import { GraphQLGetAudioSpaceByIdSuccessResponse } from './graphql/get/audio-space-by-id-success'
import { GraphQLGetAuthenticatedUserTFListsSuccessResponse } from './graphql/get/authenticated-user-tflists-success'
import { GraphQLGetCommunitiesTabBarItemQuerySuccessResponse } from './graphql/get/communities-tab-bar-item-query-success'
import { GraphQLPostCreateRetweetSuccessResponse } from './graphql/post/create-retweet-success'
import { GraphQLGetDataSaverModeSuccessResponse } from './graphql/get/data-saver-mode-success'
import { GraphQLGetDataSaverModeErrorResponse } from './graphql/get/data-saver-mode-error'
import { GraphQLPostDeleteRetweetSuccessResponse } from './graphql/post/delete-retweet-success'
import { GraphQLPostFavoriteTweetSuccessResponse } from './graphql/post/favorite-tweet-success'
import { GraphQLGetFollowHostButtonQuerySuccessResponse } from './graphql/get/follow-host-button-query-success'
import { GraphQLGetGetAltTextPromptPreferenceSuccessResponse } from './graphql/get/get-alt-text-prompt-preference-success'
import { GraphQLGetGetAltTextPromptPreferenceErrorResponse } from './graphql/get/get-alt-text-prompt-preference-error'
import { GraphQLGetGetUserClaimsSuccessResponse } from './graphql/get/get-user-claims-success'
import { GraphQLGetGetUserClaimsErrorResponse } from './graphql/get/get-user-claims-error'
import { GraphQLGetHomeLatestTimelineSuccessResponse } from './graphql/get/home-latest-timeline-success'
import { GraphQLPostHomeLatestTimelineSuccessResponse } from './graphql/post/home-latest-timeline-success'
import { GraphQLPostHomeLatestTimelineErrorResponse } from './graphql/post/home-latest-timeline-error'
import { GraphQLGetHomeTimelineSuccessResponse } from './graphql/get/home-timeline-success'
import { GraphQLPostHomeTimelineSuccessResponse } from './graphql/post/home-timeline-success'
import { GraphQLGetLikesSuccessResponse } from './graphql/get/likes-success'
import { GraphQLGetLikesErrorResponse } from './graphql/get/likes-error'
import { GraphQLGetListPinsSuccessResponse } from './graphql/get/list-pins-success'
import { GraphQLGetListPinsErrorResponse } from './graphql/get/list-pins-error'
import { GraphQLGetProfileSpotlightsQuerySuccessResponse } from './graphql/get/profile-spotlights-query-success'
import { GraphQLGetQuickPromoteEligibilitySuccessResponse } from './graphql/get/quick-promote-eligibility-success'
import { GraphQLGetSearchTimelineSuccessResponse } from './graphql/get/search-timeline-success'
import { GraphQLGetTweetDetailSuccessResponse } from './graphql/get/tweet-detail-success'
import { GraphQLGetTweetDetailErrorResponse } from './graphql/get/tweet-detail-error'
import { GraphQLPostUnfavoriteTweetSuccessResponse } from './graphql/post/unfavorite-tweet-success'
import { GraphQLGetUserByRestIdSuccessResponse } from './graphql/get/user-by-rest-id-success'
import { GraphQLGetUserByScreenNameSuccessResponse } from './graphql/get/user-by-screen-name-success'
import { GraphQLGetUserMediaSuccessResponse } from './graphql/get/user-media-success'
import { GraphQLGetUsersByRestIdsSuccessResponse } from './graphql/get/users-by-rest-ids-success'
import { GraphQLGetUsersVerifiedAvatarsSuccessResponse } from './graphql/get/users-verified-avatars-success'
import { GraphQLGetUserTweetsSuccessResponse } from './graphql/get/user-tweets-success'
import { GraphQLGetUserTweetsErrorResponse } from './graphql/get/user-tweets-error'
import { GraphQLGetUserTweetsAndRepliesSuccessResponse } from './graphql/get/user-tweets-and-replies-success'

import { HttpMethod, RequestType } from '../../scraper'

/** GraphQL articleNudgeDomains GET レスポンスモデル */
export type GraphQLGetArticleNudgeDomainsResponse =
  | GraphQLGetArticleNudgeDomainsSuccessResponse
  | GraphQLGetArticleNudgeDomainsErrorResponse
/** GraphQL AudioSpaceById GET レスポンスモデル */
export type GraphQLGetAudioSpaceByIdResponse =
  GraphQLGetAudioSpaceByIdSuccessResponse
/** GraphQL AuthenticatedUserTFLists GET レスポンスモデル */
export type GraphQLGetAuthenticatedUserTFListsResponse =
  GraphQLGetAuthenticatedUserTFListsSuccessResponse
/** GraphQL CommunitiesTabBarItemQuery GET レスポンスモデル */
export type GraphQLGetCommunitiesTabBarItemQueryResponse =
  GraphQLGetCommunitiesTabBarItemQuerySuccessResponse
/** GraphQL DataSaverMode GET レスポンスモデル */
export type GraphQLGetDataSaverModeResponse =
  | GraphQLGetDataSaverModeSuccessResponse
  | GraphQLGetDataSaverModeErrorResponse
/** GraphQL FollowHostButtonQuery GET レスポンスモデル */
export type GraphQLGetFollowHostButtonQueryResponse =
  GraphQLGetFollowHostButtonQuerySuccessResponse
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
/** GraphQL Likes GET レスポンスモデル */
export type GraphQLGetLikesResponse =
  | GraphQLGetLikesSuccessResponse
  | GraphQLGetLikesErrorResponse
/** GraphQL ListPins GET レスポンスモデル */
export type GraphQLGetListPinsResponse =
  | GraphQLGetListPinsSuccessResponse
  | GraphQLGetListPinsErrorResponse
/** GraphQL ProfileSpotlightsQuery GET レスポンスモデル */
export type GraphQLGetProfileSpotlightsQueryResponse =
  GraphQLGetProfileSpotlightsQuerySuccessResponse
/** GraphQL QuickPromoteEligibility GET レスポンスモデル */
export type GraphQLGetQuickPromoteEligibilityResponse =
  GraphQLGetQuickPromoteEligibilitySuccessResponse
/** GraphQL SearchTimeline GET レスポンスモデル */
export type GraphQLGetSearchTimelineResponse =
  GraphQLGetSearchTimelineSuccessResponse
/** GraphQL TweetDetail GET レスポンスモデル */
export type GraphQLGetTweetDetailResponse =
  | GraphQLGetTweetDetailSuccessResponse
  | GraphQLGetTweetDetailErrorResponse
/** GraphQL UserByRestId GET レスポンスモデル */
export type GraphQLGetUserByRestIdResponse =
  GraphQLGetUserByRestIdSuccessResponse
/** GraphQL UserByScreenName GET レスポンスモデル */
export type GraphQLGetUserByScreenNameResponse =
  GraphQLGetUserByScreenNameSuccessResponse
/** GraphQL UserMedia GET レスポンスモデル */
export type GraphQLGetUserMediaResponse = GraphQLGetUserMediaSuccessResponse
/** GraphQL UsersByRestIds GET レスポンスモデル */
export type GraphQLGetUsersByRestIdsResponse =
  GraphQLGetUsersByRestIdsSuccessResponse
/** GraphQL UsersVerifiedAvatars GET レスポンスモデル */
export type GraphQLGetUsersVerifiedAvatarsResponse =
  GraphQLGetUsersVerifiedAvatarsSuccessResponse
/** GraphQL UserTweets GET レスポンスモデル */
export type GraphQLGetUserTweetsResponse =
  | GraphQLGetUserTweetsSuccessResponse
  | GraphQLGetUserTweetsErrorResponse
/** GraphQL UserTweetsAndReplies GET レスポンスモデル */
export type GraphQLGetUserTweetsAndRepliesResponse =
  GraphQLGetUserTweetsAndRepliesSuccessResponse

export type GraphQLGETEndpoint =
  | 'articleNudgeDomains'
  | 'AudioSpaceById'
  | 'AuthenticatedUserTFLists'
  | 'CommunitiesTabBarItemQuery'
  | 'DataSaverMode'
  | 'FollowHostButtonQuery'
  | 'getAltTextPromptPreference'
  | 'GetUserClaims'
  | 'HomeLatestTimeline'
  | 'HomeTimeline'
  | 'Likes'
  | 'ListPins'
  | 'ProfileSpotlightsQuery'
  | 'QuickPromoteEligibility'
  | 'SearchTimeline'
  | 'TweetDetail'
  | 'UserByRestId'
  | 'UserByScreenName'
  | 'UserMedia'
  | 'UsersByRestIds'
  | 'UsersVerifiedAvatars'
  | 'UserTweets'
  | 'UserTweetsAndReplies'

export type GraphQLGETEndPointResponseType<T extends GraphQLGETEndpoint> =
  T extends 'articleNudgeDomains'
    ? GraphQLGetArticleNudgeDomainsResponse
    : T extends 'AudioSpaceById'
    ? GraphQLGetAudioSpaceByIdResponse
    : T extends 'AuthenticatedUserTFLists'
    ? GraphQLGetAuthenticatedUserTFListsResponse
    : T extends 'CommunitiesTabBarItemQuery'
    ? GraphQLGetCommunitiesTabBarItemQueryResponse
    : T extends 'DataSaverMode'
    ? GraphQLGetDataSaverModeResponse
    : T extends 'FollowHostButtonQuery'
    ? GraphQLGetFollowHostButtonQueryResponse
    : T extends 'getAltTextPromptPreference'
    ? GraphQLGetGetAltTextPromptPreferenceResponse
    : T extends 'GetUserClaims'
    ? GraphQLGetGetUserClaimsResponse
    : T extends 'HomeLatestTimeline'
    ? GraphQLGetHomeLatestTimelineResponse
    : T extends 'HomeTimeline'
    ? GraphQLGetHomeTimelineResponse
    : T extends 'Likes'
    ? GraphQLGetLikesResponse
    : T extends 'ListPins'
    ? GraphQLGetListPinsResponse
    : T extends 'ProfileSpotlightsQuery'
    ? GraphQLGetProfileSpotlightsQueryResponse
    : T extends 'QuickPromoteEligibility'
    ? GraphQLGetQuickPromoteEligibilityResponse
    : T extends 'SearchTimeline'
    ? GraphQLGetSearchTimelineResponse
    : T extends 'TweetDetail'
    ? GraphQLGetTweetDetailResponse
    : T extends 'UserByRestId'
    ? GraphQLGetUserByRestIdResponse
    : T extends 'UserByScreenName'
    ? GraphQLGetUserByScreenNameResponse
    : T extends 'UserMedia'
    ? GraphQLGetUserMediaResponse
    : T extends 'UsersByRestIds'
    ? GraphQLGetUsersByRestIdsResponse
    : T extends 'UsersVerifiedAvatars'
    ? GraphQLGetUsersVerifiedAvatarsResponse
    : T extends 'UserTweets'
    ? GraphQLGetUserTweetsResponse
    : T extends 'UserTweetsAndReplies'
    ? GraphQLGetUserTweetsAndRepliesResponse
    : never

/** GraphQL CreateRetweet POST レスポンスモデル */
export type GraphQLPostCreateRetweetResponse =
  GraphQLPostCreateRetweetSuccessResponse
/** GraphQL DeleteRetweet POST レスポンスモデル */
export type GraphQLPostDeleteRetweetResponse =
  GraphQLPostDeleteRetweetSuccessResponse
/** GraphQL FavoriteTweet POST レスポンスモデル */
export type GraphQLPostFavoriteTweetResponse =
  GraphQLPostFavoriteTweetSuccessResponse
/** GraphQL HomeLatestTimeline POST レスポンスモデル */
export type GraphQLPostHomeLatestTimelineResponse =
  | GraphQLPostHomeLatestTimelineSuccessResponse
  | GraphQLPostHomeLatestTimelineErrorResponse
/** GraphQL HomeTimeline POST レスポンスモデル */
export type GraphQLPostHomeTimelineResponse =
  GraphQLPostHomeTimelineSuccessResponse
/** GraphQL UnfavoriteTweet POST レスポンスモデル */
export type GraphQLPostUnfavoriteTweetResponse =
  GraphQLPostUnfavoriteTweetSuccessResponse

export type GraphQLPOSTEndpoint =
  | 'CreateRetweet'
  | 'DeleteRetweet'
  | 'FavoriteTweet'
  | 'HomeLatestTimeline'
  | 'HomeTimeline'
  | 'UnfavoriteTweet'

export type GraphQLPOSTEndPointResponseType<T extends GraphQLPOSTEndpoint> =
  T extends 'CreateRetweet'
    ? GraphQLPostCreateRetweetResponse
    : T extends 'DeleteRetweet'
    ? GraphQLPostDeleteRetweetResponse
    : T extends 'FavoriteTweet'
    ? GraphQLPostFavoriteTweetResponse
    : T extends 'HomeLatestTimeline'
    ? GraphQLPostHomeLatestTimelineResponse
    : T extends 'HomeTimeline'
    ? GraphQLPostHomeTimelineResponse
    : T extends 'UnfavoriteTweet'
    ? GraphQLPostUnfavoriteTweetResponse
    : never

export type GraphQLEndpoint = GraphQLGETEndpoint | GraphQLPOSTEndpoint

export type EndPointResponseType<
  M extends HttpMethod,
  T extends RequestType,
  N extends GraphQLEndpoint,
> = T extends 'GRAPHQL'
  ? M extends 'GET'
    ? N extends GraphQLGETEndpoint
      ? GraphQLGETEndPointResponseType<N>
      : never
    : M extends 'POST'
    ? N extends GraphQLPOSTEndpoint
      ? GraphQLPOSTEndPointResponseType<N>
      : never
    : never
  : never
