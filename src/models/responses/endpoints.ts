import { GraphQLGetArticleNudgeDomainsSuccessResponse } from './graphql/get/article-nudge-domains-success'
import { GraphQLGetDataSaverModeSuccessResponse } from './graphql/get/data-saver-mode-success'
import { GraphQLPostFavoriteTweetSuccessResponse } from './graphql/post/favorite-tweet-success'
import { GraphQLGetGetAltTextPromptPreferenceSuccessResponse } from './graphql/get/get-alt-text-prompt-preference-success'
import { GraphQLGetGetUserClaimsSuccessResponse } from './graphql/get/get-user-claims-success'
import { GraphQLGetHomeLatestTimelineSuccessResponse } from './graphql/get/home-latest-timeline-success'
import { GraphQLPostHomeLatestTimelineSuccessResponse } from './graphql/post/home-latest-timeline-success'
import { GraphQLGetHomeTimelineSuccessResponse } from './graphql/get/home-timeline-success'
import { GraphQLGetLikesSuccessResponse } from './graphql/get/likes-success'
import { GraphQLGetPinnedTimelinesSuccessResponse } from './graphql/get/pinned-timelines-success'
import { GraphQLGetProfileSpotlightsQuerySuccessResponse } from './graphql/get/profile-spotlights-query-success'
import { GraphQLGetSearchTimelineSuccessResponse } from './graphql/get/search-timeline-success'
import { GraphQLGetTweetDetailSuccessResponse } from './graphql/get/tweet-detail-success'
import { GraphQLPostUnfavoriteTweetSuccessResponse } from './graphql/post/unfavorite-tweet-success'
import { GraphQLGetUserByRestIdSuccessResponse } from './graphql/get/user-by-rest-id-success'
import { GraphQLGetUserByScreenNameSuccessResponse } from './graphql/get/user-by-screen-name-success'
import { GraphQLGetUserTweetsSuccessResponse } from './graphql/get/user-tweets-success'

import { HttpMethod, RequestType } from '../../scraper'

/** GraphQL articleNudgeDomains GET レスポンスモデル */
export type GraphQLGetArticleNudgeDomainsResponse =
  GraphQLGetArticleNudgeDomainsSuccessResponse
/** GraphQL DataSaverMode GET レスポンスモデル */
export type GraphQLGetDataSaverModeResponse =
  GraphQLGetDataSaverModeSuccessResponse
/** GraphQL getAltTextPromptPreference GET レスポンスモデル */
export type GraphQLGetGetAltTextPromptPreferenceResponse =
  GraphQLGetGetAltTextPromptPreferenceSuccessResponse
/** GraphQL GetUserClaims GET レスポンスモデル */
export type GraphQLGetGetUserClaimsResponse =
  GraphQLGetGetUserClaimsSuccessResponse
/** GraphQL HomeLatestTimeline GET レスポンスモデル */
export type GraphQLGetHomeLatestTimelineResponse =
  GraphQLGetHomeLatestTimelineSuccessResponse
/** GraphQL HomeTimeline GET レスポンスモデル */
export type GraphQLGetHomeTimelineResponse =
  GraphQLGetHomeTimelineSuccessResponse
/** GraphQL Likes GET レスポンスモデル */
export type GraphQLGetLikesResponse = GraphQLGetLikesSuccessResponse
/** GraphQL PinnedTimelines GET レスポンスモデル */
export type GraphQLGetPinnedTimelinesResponse =
  GraphQLGetPinnedTimelinesSuccessResponse
/** GraphQL ProfileSpotlightsQuery GET レスポンスモデル */
export type GraphQLGetProfileSpotlightsQueryResponse =
  GraphQLGetProfileSpotlightsQuerySuccessResponse
/** GraphQL SearchTimeline GET レスポンスモデル */
export type GraphQLGetSearchTimelineResponse =
  GraphQLGetSearchTimelineSuccessResponse
/** GraphQL TweetDetail GET レスポンスモデル */
export type GraphQLGetTweetDetailResponse = GraphQLGetTweetDetailSuccessResponse
/** GraphQL UserByRestId GET レスポンスモデル */
export type GraphQLGetUserByRestIdResponse =
  GraphQLGetUserByRestIdSuccessResponse
/** GraphQL UserByScreenName GET レスポンスモデル */
export type GraphQLGetUserByScreenNameResponse =
  GraphQLGetUserByScreenNameSuccessResponse
/** GraphQL UserTweets GET レスポンスモデル */
export type GraphQLGetUserTweetsResponse = GraphQLGetUserTweetsSuccessResponse

export type GraphQLGETEndpoint =
  | 'articleNudgeDomains'
  | 'DataSaverMode'
  | 'getAltTextPromptPreference'
  | 'GetUserClaims'
  | 'HomeLatestTimeline'
  | 'HomeTimeline'
  | 'Likes'
  | 'PinnedTimelines'
  | 'ProfileSpotlightsQuery'
  | 'SearchTimeline'
  | 'TweetDetail'
  | 'UserByRestId'
  | 'UserByScreenName'
  | 'UserTweets'

export type GraphQLGETEndPointResponseType<T extends GraphQLGETEndpoint> =
  T extends 'articleNudgeDomains'
    ? GraphQLGetArticleNudgeDomainsResponse
    : T extends 'DataSaverMode'
      ? GraphQLGetDataSaverModeResponse
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
                : T extends 'PinnedTimelines'
                  ? GraphQLGetPinnedTimelinesResponse
                  : T extends 'ProfileSpotlightsQuery'
                    ? GraphQLGetProfileSpotlightsQueryResponse
                    : T extends 'SearchTimeline'
                      ? GraphQLGetSearchTimelineResponse
                      : T extends 'TweetDetail'
                        ? GraphQLGetTweetDetailResponse
                        : T extends 'UserByRestId'
                          ? GraphQLGetUserByRestIdResponse
                          : T extends 'UserByScreenName'
                            ? GraphQLGetUserByScreenNameResponse
                            : T extends 'UserTweets'
                              ? GraphQLGetUserTweetsResponse
                              : never

/** GraphQL FavoriteTweet POST レスポンスモデル */
export type GraphQLPostFavoriteTweetResponse =
  GraphQLPostFavoriteTweetSuccessResponse
/** GraphQL HomeLatestTimeline POST レスポンスモデル */
export type GraphQLPostHomeLatestTimelineResponse =
  GraphQLPostHomeLatestTimelineSuccessResponse
/** GraphQL UnfavoriteTweet POST レスポンスモデル */
export type GraphQLPostUnfavoriteTweetResponse =
  GraphQLPostUnfavoriteTweetSuccessResponse

export type GraphQLPOSTEndpoint =
  | 'FavoriteTweet'
  | 'HomeLatestTimeline'
  | 'UnfavoriteTweet'

export type GraphQLPOSTEndPointResponseType<T extends GraphQLPOSTEndpoint> =
  T extends 'FavoriteTweet'
    ? GraphQLPostFavoriteTweetResponse
    : T extends 'HomeLatestTimeline'
      ? GraphQLPostHomeLatestTimelineResponse
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
