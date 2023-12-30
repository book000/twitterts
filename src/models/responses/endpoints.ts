import { GraphQLGetArticleNudgeDomainsSuccessResponse } from './graphql/get/article-nudge-domains-success'
import { GraphQLGetAudioSpaceByIdSuccessResponse } from './graphql/get/audio-space-by-id-success'
import { GraphQLGetDataSaverModeSuccessResponse } from './graphql/get/data-saver-mode-success'
import { GraphQLGetDataSaverModeErrorResponse } from './graphql/get/data-saver-mode-error'
import { GraphQLGetFollowHostButtonQuerySuccessResponse } from './graphql/get/follow-host-button-query-success'
import { GraphQLGetGetAltTextPromptPreferenceSuccessResponse } from './graphql/get/get-alt-text-prompt-preference-success'
import { GraphQLGetGetAltTextPromptPreferenceErrorResponse } from './graphql/get/get-alt-text-prompt-preference-error'
import { GraphQLGetGetUserClaimsSuccessResponse } from './graphql/get/get-user-claims-success'
import { GraphQLGetGetUserClaimsErrorResponse } from './graphql/get/get-user-claims-error'
import { GraphQLGetHomeLatestTimelineSuccessResponse } from './graphql/get/home-latest-timeline-success'
import { GraphQLGetHomeLatestTimelineErrorResponse } from './graphql/get/home-latest-timeline-error'
import { GraphQLGetHomeTimelineSuccessResponse } from './graphql/get/home-timeline-success'
import { GraphQLGetLikesSuccessResponse } from './graphql/get/likes-success'
import { GraphQLGetLikesErrorResponse } from './graphql/get/likes-error'
import { GraphQLGetListLatestTweetsTimelineSuccessResponse } from './graphql/get/list-latest-tweets-timeline-success'
import { GraphQLGetListPinsSuccessResponse } from './graphql/get/list-pins-success'
import { GraphQLGetPinnedTimelinesSuccessResponse } from './graphql/get/pinned-timelines-success'
import { GraphQLGetPinnedTimelinesErrorResponse } from './graphql/get/pinned-timelines-error'
import { GraphQLGetProfileSpotlightsQuerySuccessResponse } from './graphql/get/profile-spotlights-query-success'
import { GraphQLGetProfileSpotlightsQueryErrorResponse } from './graphql/get/profile-spotlights-query-error'
import { GraphQLGetSearchTimelineSuccessResponse } from './graphql/get/search-timeline-success'
import { GraphQLGetSearchTimelineErrorResponse } from './graphql/get/search-timeline-error'
import { GraphQLGetTweetDetailSuccessResponse } from './graphql/get/tweet-detail-success'
import { GraphQLGetTweetDetailErrorResponse } from './graphql/get/tweet-detail-error'
import { GraphQLGetTweetResultByRestIdSuccessResponse } from './graphql/get/tweet-result-by-rest-id-success'
import { GraphQLGetUseFetchProfileBlocksProfileExistsQuerySuccessResponse } from './graphql/get/use-fetch-profile-blocks-profile-exists-query-success'
import { GraphQLGetUseFetchProfileBlocksProfileExistsQueryErrorResponse } from './graphql/get/use-fetch-profile-blocks-profile-exists-query-error'
import { GraphQLGetUserByRestIdSuccessResponse } from './graphql/get/user-by-rest-id-success'
import { GraphQLGetUserByRestIdErrorResponse } from './graphql/get/user-by-rest-id-error'
import { GraphQLGetUserByScreenNameSuccessResponse } from './graphql/get/user-by-screen-name-success'
import { GraphQLGetUserByScreenNameErrorResponse } from './graphql/get/user-by-screen-name-error'
import { GraphQLGetUsersVerifiedAvatarsSuccessResponse } from './graphql/get/users-verified-avatars-success'
import { GraphQLGetUserTweetsSuccessResponse } from './graphql/get/user-tweets-success'
import { GraphQLGetUserTweetsErrorResponse } from './graphql/get/user-tweets-error'
import { GraphQLGetViewerSuccessResponse } from './graphql/get/viewer-success'
import { GraphQLGetViewerErrorResponse } from './graphql/get/viewer-error'
import { GraphQLPostFavoriteTweetSuccessResponse } from './graphql/post/favorite-tweet-success'
import { GraphQLPostHomeLatestTimelineSuccessResponse } from './graphql/post/home-latest-timeline-success'
import { GraphQLPostHomeTimelineSuccessResponse } from './graphql/post/home-timeline-success'

import { HttpMethod, RequestType } from '../../scraper'
import { GraphQLPostUnfavoriteTweetSuccessResponse } from './graphql/post/unfavorite-tweet-success'

/** GraphQL articleNudgeDomains GET レスポンスモデル */
export type GraphQLGetArticleNudgeDomainsResponse =
  GraphQLGetArticleNudgeDomainsSuccessResponse
/** GraphQL AudioSpaceById GET レスポンスモデル */
export type GraphQLGetAudioSpaceByIdResponse =
  GraphQLGetAudioSpaceByIdSuccessResponse
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
  | GraphQLGetHomeLatestTimelineSuccessResponse
  | GraphQLGetHomeLatestTimelineErrorResponse
/** GraphQL HomeTimeline GET レスポンスモデル */
export type GraphQLGetHomeTimelineResponse =
  GraphQLGetHomeTimelineSuccessResponse
/** GraphQL Likes GET レスポンスモデル */
export type GraphQLGetLikesResponse =
  | GraphQLGetLikesSuccessResponse
  | GraphQLGetLikesErrorResponse
/** GraphQL ListLatestTweetsTimeline GET レスポンスモデル */
export type GraphQLGetListLatestTweetsTimelineResponse =
  GraphQLGetListLatestTweetsTimelineSuccessResponse
/** GraphQL ListPins GET レスポンスモデル */
export type GraphQLGetListPinsResponse = GraphQLGetListPinsSuccessResponse
/** GraphQL PinnedTimelines GET レスポンスモデル */
export type GraphQLGetPinnedTimelinesResponse =
  | GraphQLGetPinnedTimelinesSuccessResponse
  | GraphQLGetPinnedTimelinesErrorResponse
/** GraphQL ProfileSpotlightsQuery GET レスポンスモデル */
export type GraphQLGetProfileSpotlightsQueryResponse =
  | GraphQLGetProfileSpotlightsQuerySuccessResponse
  | GraphQLGetProfileSpotlightsQueryErrorResponse
/** GraphQL SearchTimeline GET レスポンスモデル */
export type GraphQLGetSearchTimelineResponse =
  | GraphQLGetSearchTimelineSuccessResponse
  | GraphQLGetSearchTimelineErrorResponse
/** GraphQL TweetDetail GET レスポンスモデル */
export type GraphQLGetTweetDetailResponse =
  | GraphQLGetTweetDetailSuccessResponse
  | GraphQLGetTweetDetailErrorResponse
/** GraphQL TweetResultByRestId GET レスポンスモデル */
export type GraphQLGetTweetResultByRestIdResponse =
  GraphQLGetTweetResultByRestIdSuccessResponse
/** GraphQL useFetchProfileBlocksProfileExistsQuery GET レスポンスモデル */
export type GraphQLGetUseFetchProfileBlocksProfileExistsQueryResponse =
  | GraphQLGetUseFetchProfileBlocksProfileExistsQuerySuccessResponse
  | GraphQLGetUseFetchProfileBlocksProfileExistsQueryErrorResponse
/** GraphQL UserByRestId GET レスポンスモデル */
export type GraphQLGetUserByRestIdResponse =
  | GraphQLGetUserByRestIdSuccessResponse
  | GraphQLGetUserByRestIdErrorResponse
/** GraphQL UserByScreenName GET レスポンスモデル */
export type GraphQLGetUserByScreenNameResponse =
  | GraphQLGetUserByScreenNameSuccessResponse
  | GraphQLGetUserByScreenNameErrorResponse
/** GraphQL UsersVerifiedAvatars GET レスポンスモデル */
export type GraphQLGetUsersVerifiedAvatarsResponse =
  GraphQLGetUsersVerifiedAvatarsSuccessResponse
/** GraphQL UserTweets GET レスポンスモデル */
export type GraphQLGetUserTweetsResponse =
  | GraphQLGetUserTweetsSuccessResponse
  | GraphQLGetUserTweetsErrorResponse
/** GraphQL Viewer GET レスポンスモデル */
export type GraphQLGetViewerResponse =
  | GraphQLGetViewerSuccessResponse
  | GraphQLGetViewerErrorResponse

export type GraphQLGETEndpoint =
  | 'articleNudgeDomains'
  | 'AudioSpaceById'
  | 'DataSaverMode'
  | 'FollowHostButtonQuery'
  | 'getAltTextPromptPreference'
  | 'GetUserClaims'
  | 'HomeLatestTimeline'
  | 'HomeTimeline'
  | 'Likes'
  | 'ListLatestTweetsTimeline'
  | 'ListPins'
  | 'PinnedTimelines'
  | 'ProfileSpotlightsQuery'
  | 'SearchTimeline'
  | 'TweetDetail'
  | 'TweetResultByRestId'
  | 'useFetchProfileBlocksProfileExistsQuery'
  | 'UserByRestId'
  | 'UserByScreenName'
  | 'UsersVerifiedAvatars'
  | 'UserTweets'
  | 'Viewer'

export type GraphQLGETEndPointResponseType<T extends GraphQLGETEndpoint> =
  T extends 'articleNudgeDomains'
    ? GraphQLGetArticleNudgeDomainsResponse
    : T extends 'AudioSpaceById'
      ? GraphQLGetAudioSpaceByIdResponse
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
                    : T extends 'ListLatestTweetsTimeline'
                      ? GraphQLGetListLatestTweetsTimelineResponse
                      : T extends 'ListPins'
                        ? GraphQLGetListPinsResponse
                        : T extends 'PinnedTimelines'
                          ? GraphQLGetPinnedTimelinesResponse
                          : T extends 'ProfileSpotlightsQuery'
                            ? GraphQLGetProfileSpotlightsQueryResponse
                            : T extends 'SearchTimeline'
                              ? GraphQLGetSearchTimelineResponse
                              : T extends 'TweetDetail'
                                ? GraphQLGetTweetDetailResponse
                                : T extends 'TweetResultByRestId'
                                  ? GraphQLGetTweetResultByRestIdResponse
                                  : T extends 'useFetchProfileBlocksProfileExistsQuery'
                                    ? GraphQLGetUseFetchProfileBlocksProfileExistsQueryResponse
                                    : T extends 'UserByRestId'
                                      ? GraphQLGetUserByRestIdResponse
                                      : T extends 'UserByScreenName'
                                        ? GraphQLGetUserByScreenNameResponse
                                        : T extends 'UsersVerifiedAvatars'
                                          ? GraphQLGetUsersVerifiedAvatarsResponse
                                          : T extends 'UserTweets'
                                            ? GraphQLGetUserTweetsResponse
                                            : T extends 'Viewer'
                                              ? GraphQLGetViewerResponse
                                              : never

/** GraphQL HomeLatestTimeline POST レスポンスモデル */
export type GraphQLPostHomeLatestTimelineResponse =
  GraphQLPostHomeLatestTimelineSuccessResponse
/** GraphQL HomeTimeline POST レスポンスモデル */
export type GraphQLPostHomeTimelineResponse =
  GraphQLPostHomeTimelineSuccessResponse
/** GraphQL FavoriteTweet POST レスポンスモデル */
export type GraphQLPostFavoriteTweetResponse =
  GraphQLPostFavoriteTweetSuccessResponse
/** GraphQL UnfavoriteTweet POST レスポンスモデル */
export type GraphQLPostUnfavoriteTweetResponse =
  GraphQLPostUnfavoriteTweetSuccessResponse

export type GraphQLPOSTEndpoint =
  | 'FavoriteTweet'
  | 'UnfavoriteTweet'
  | 'HomeLatestTimeline'
  | 'HomeTimeline'

export type GraphQLPOSTEndPointResponseType<T extends GraphQLPOSTEndpoint> =
  T extends 'FavoriteTweet'
    ? GraphQLPostFavoriteTweetResponse
    : T extends 'UnfavoriteTweet'
      ? GraphQLPostUnfavoriteTweetResponse
      : T extends 'HomeLatestTimeline'
        ? GraphQLPostHomeLatestTimelineResponse
        : T extends 'HomeTimeline'
          ? GraphQLPostHomeTimelineResponse
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
