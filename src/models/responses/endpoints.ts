import { GraphQLGetAffiliatesQuerySuccessResponse } from './graphql/get/affiliates-query-success'
import { GraphQLGetArticleNudgeDomainsSuccessResponse } from './graphql/get/article-nudge-domains-success'
import { GraphQLGetAudioSpaceByIdSuccessResponse } from './graphql/get/audio-space-by-id-success'
import { GraphQLGetAuthenticatePeriscopeSuccessResponse } from './graphql/get/authenticate-periscope-success'
import { GraphQLGetBookmarksSuccessResponse } from './graphql/get/bookmarks-success'
import { GraphQLGetBroadcastQuerySuccessResponse } from './graphql/get/broadcast-query-success'
import { GraphQLGetCarouselQuerySuccessResponse } from './graphql/get/carousel-query-success'
import { GraphQLGetCommunitiesCreateButtonQuerySuccessResponse } from './graphql/get/communities-create-button-query-success'
import { GraphQLGetCommunitiesExploreTimelineSuccessResponse } from './graphql/get/communities-explore-timeline-success'
import { GraphQLGetCommunitiesFetchOneQuerySuccessResponse } from './graphql/get/communities-fetch-one-query-success'
import { GraphQLGetCommunitiesRankedTimelineSuccessResponse } from './graphql/get/communities-ranked-timeline-success'
import { GraphQLGetDataSaverModeSuccessResponse } from './graphql/get/data-saver-mode-success'
import { GraphQLGetDelegatedAccountListQuerySuccessResponse } from './graphql/get/delegated-account-list-query-success'
import { GraphQLGetDMPinnedInboxQuerySuccessResponse } from './graphql/get/dmpinned-inbox-query-success'
import { GraphQLGetExplorePageSuccessResponse } from './graphql/get/explore-page-success'
import { GraphQLGetFetchDraftTweetsSuccessResponse } from './graphql/get/fetch-draft-tweets-success'
import { GraphQLGetFetchScheduledTweetsSuccessResponse } from './graphql/get/fetch-scheduled-tweets-success'
import { GraphQLGetFollowHostButtonQuerySuccessResponse } from './graphql/get/follow-host-button-query-success'
import { GraphQLGetGetAltTextPromptPreferenceSuccessResponse } from './graphql/get/get-alt-text-prompt-preference-success'
import { GraphQLGetGetUserClaimsSuccessResponse } from './graphql/get/get-user-claims-success'
import { GraphQLGetGrokHomeSuccessResponse } from './graphql/get/grok-home-success'
import { GraphQLGetHomeLatestTimelineSuccessResponse } from './graphql/get/home-latest-timeline-success'
import { GraphQLGetHomeTimelineSuccessResponse } from './graphql/get/home-timeline-success'
import { GraphQLGetIsEligibleForAnalyticsUpsellQuerySuccessResponse } from './graphql/get/is-eligible-for-analytics-upsell-query-success'
import { GraphQLGetIsEligibleForVoButtonUpsellQuerySuccessResponse } from './graphql/get/is-eligible-for-vo-button-upsell-query-success'
import { GraphQLGetLikesSuccessResponse } from './graphql/get/likes-success'
import { GraphQLGetListLatestTweetsTimelineSuccessResponse } from './graphql/get/list-latest-tweets-timeline-success'
import { GraphQLGetListsManagementPageTimelineSuccessResponse } from './graphql/get/lists-management-page-timeline-success'
import { GraphQLGetNotificationsTimelineSuccessResponse } from './graphql/get/notifications-timeline-success'
import { GraphQLGetPinnedTimelinesSuccessResponse } from './graphql/get/pinned-timelines-success'
import { GraphQLGetPremiumContentQuerySuccessResponse } from './graphql/get/premium-content-query-success'
import { GraphQLGetProfileSpotlightsQuerySuccessResponse } from './graphql/get/profile-spotlights-query-success'
import { GraphQLGetSearchTimelineSuccessResponse } from './graphql/get/search-timeline-success'
import { GraphQLGetTopicCarouselQuerySuccessResponse } from './graphql/get/topic-carousel-query-success'
import { GraphQLGetTweetDetailSuccessResponse } from './graphql/get/tweet-detail-success'
import { GraphQLGetTweetResultByRestIdSuccessResponse } from './graphql/get/tweet-result-by-rest-id-success'
import { GraphQLGetUseFetchProductSubscriptionsQuerySuccessResponse } from './graphql/get/use-fetch-product-subscriptions-query-success'
import { GraphQLGetUseFetchProfileSectionsCanViewExpandedProfileQuerySuccessResponse } from './graphql/get/use-fetch-profile-sections-can-view-expanded-profile-query-success'
import { GraphQLGetUsePricesQuerySuccessResponse } from './graphql/get/use-prices-query-success'
import { GraphQLGetUseProductSkuQuerySuccessResponse } from './graphql/get/use-product-sku-query-success'
import { GraphQLGetUserByRestIdSuccessResponse } from './graphql/get/user-by-rest-id-success'
import { GraphQLGetUserByRestIdErrorResponse } from './graphql/get/user-by-rest-id-error'
import { GraphQLGetUserByScreenNameSuccessResponse } from './graphql/get/user-by-screen-name-success'
import { GraphQLGetUseRelayDelegateDataPendingQuerySuccessResponse } from './graphql/get/use-relay-delegate-data-pending-query-success'
import { GraphQLGetUserPreferencesSuccessResponse } from './graphql/get/user-preferences-success'
import { GraphQLGetUsersVerifiedAvatarsSuccessResponse } from './graphql/get/users-verified-avatars-success'
import { GraphQLGetUserTweetsSuccessResponse } from './graphql/get/user-tweets-success'
import { GraphQLGetUserTweetsErrorResponse } from './graphql/get/user-tweets-error'
import { GraphQLGetUseSubscriptionProductDetailsQuerySuccessResponse } from './graphql/get/use-subscription-product-details-query-success'
import { GraphQLGetUseVerifiedOrgFeatureHelperQuerySuccessResponse } from './graphql/get/use-verified-org-feature-helper-query-success'
import { GraphQLGetViewerErrorResponse } from './graphql/get/viewer-error'
import { GraphQLGetViewerUserQuerySuccessResponse } from './graphql/get/viewer-user-query-success'
import { GraphQLGetVOCardsQuerySuccessResponse } from './graphql/get/vocards-query-success'
import { GraphQLPostDeleteRetweetSuccessResponse } from './graphql/post/delete-retweet-success'
import { GraphQLPostFavoriteTweetSuccessResponse } from './graphql/post/favorite-tweet-success'
import { GraphQLPostHomeLatestTimelineSuccessResponse } from './graphql/post/home-latest-timeline-success'
import { GraphQLPostHomeTimelineSuccessResponse } from './graphql/post/home-timeline-success'
import { GraphQLPostUnfavoriteTweetSuccessResponse } from './graphql/post/unfavorite-tweet-success'

import { HttpMethod, RequestType } from '../../scraper'

/** GraphQL affiliatesQuery GET レスポンスモデル */
export type GraphQLGetAffiliatesQueryResponse =
  GraphQLGetAffiliatesQuerySuccessResponse
/** GraphQL articleNudgeDomains GET レスポンスモデル */
export type GraphQLGetArticleNudgeDomainsResponse =
  GraphQLGetArticleNudgeDomainsSuccessResponse
/** GraphQL AudioSpaceById GET レスポンスモデル */
export type GraphQLGetAudioSpaceByIdResponse =
  GraphQLGetAudioSpaceByIdSuccessResponse
/** GraphQL AuthenticatePeriscope GET レスポンスモデル */
export type GraphQLGetAuthenticatePeriscopeResponse =
  GraphQLGetAuthenticatePeriscopeSuccessResponse
/** GraphQL Bookmarks GET レスポンスモデル */
export type GraphQLGetBookmarksResponse = GraphQLGetBookmarksSuccessResponse
/** GraphQL BroadcastQuery GET レスポンスモデル */
export type GraphQLGetBroadcastQueryResponse =
  GraphQLGetBroadcastQuerySuccessResponse
/** GraphQL CarouselQuery GET レスポンスモデル */
export type GraphQLGetCarouselQueryResponse =
  GraphQLGetCarouselQuerySuccessResponse
/** GraphQL CommunitiesCreateButtonQuery GET レスポンスモデル */
export type GraphQLGetCommunitiesCreateButtonQueryResponse =
  GraphQLGetCommunitiesCreateButtonQuerySuccessResponse
/** GraphQL CommunitiesExploreTimeline GET レスポンスモデル */
export type GraphQLGetCommunitiesExploreTimelineResponse =
  GraphQLGetCommunitiesExploreTimelineSuccessResponse
/** GraphQL CommunitiesFetchOneQuery GET レスポンスモデル */
export type GraphQLGetCommunitiesFetchOneQueryResponse =
  GraphQLGetCommunitiesFetchOneQuerySuccessResponse
/** GraphQL CommunitiesRankedTimeline GET レスポンスモデル */
export type GraphQLGetCommunitiesRankedTimelineResponse =
  GraphQLGetCommunitiesRankedTimelineSuccessResponse
/** GraphQL DataSaverMode GET レスポンスモデル */
export type GraphQLGetDataSaverModeResponse =
  GraphQLGetDataSaverModeSuccessResponse
/** GraphQL DelegatedAccountListQuery GET レスポンスモデル */
export type GraphQLGetDelegatedAccountListQueryResponse =
  GraphQLGetDelegatedAccountListQuerySuccessResponse
/** GraphQL DMPinnedInboxQuery GET レスポンスモデル */
export type GraphQLGetDMPinnedInboxQueryResponse =
  GraphQLGetDMPinnedInboxQuerySuccessResponse
/** GraphQL ExplorePage GET レスポンスモデル */
export type GraphQLGetExplorePageResponse = GraphQLGetExplorePageSuccessResponse
/** GraphQL FetchDraftTweets GET レスポンスモデル */
export type GraphQLGetFetchDraftTweetsResponse =
  GraphQLGetFetchDraftTweetsSuccessResponse
/** GraphQL FetchScheduledTweets GET レスポンスモデル */
export type GraphQLGetFetchScheduledTweetsResponse =
  GraphQLGetFetchScheduledTweetsSuccessResponse
/** GraphQL FollowHostButtonQuery GET レスポンスモデル */
export type GraphQLGetFollowHostButtonQueryResponse =
  GraphQLGetFollowHostButtonQuerySuccessResponse
/** GraphQL getAltTextPromptPreference GET レスポンスモデル */
export type GraphQLGetGetAltTextPromptPreferenceResponse =
  GraphQLGetGetAltTextPromptPreferenceSuccessResponse
/** GraphQL GetUserClaims GET レスポンスモデル */
export type GraphQLGetGetUserClaimsResponse =
  GraphQLGetGetUserClaimsSuccessResponse
/** GraphQL GrokHome GET レスポンスモデル */
export type GraphQLGetGrokHomeResponse = GraphQLGetGrokHomeSuccessResponse
/** GraphQL HomeLatestTimeline GET レスポンスモデル */
export type GraphQLGetHomeLatestTimelineResponse =
  GraphQLGetHomeLatestTimelineSuccessResponse
/** GraphQL HomeTimeline GET レスポンスモデル */
export type GraphQLGetHomeTimelineResponse =
  GraphQLGetHomeTimelineSuccessResponse
/** GraphQL isEligibleForAnalyticsUpsellQuery GET レスポンスモデル */
export type GraphQLGetIsEligibleForAnalyticsUpsellQueryResponse =
  GraphQLGetIsEligibleForAnalyticsUpsellQuerySuccessResponse
/** GraphQL isEligibleForVoButtonUpsellQuery GET レスポンスモデル */
export type GraphQLGetIsEligibleForVoButtonUpsellQueryResponse =
  GraphQLGetIsEligibleForVoButtonUpsellQuerySuccessResponse
/** GraphQL Likes GET レスポンスモデル */
export type GraphQLGetLikesResponse = GraphQLGetLikesSuccessResponse
/** GraphQL ListLatestTweetsTimeline GET レスポンスモデル */
export type GraphQLGetListLatestTweetsTimelineResponse =
  GraphQLGetListLatestTweetsTimelineSuccessResponse
/** GraphQL ListsManagementPageTimeline GET レスポンスモデル */
export type GraphQLGetListsManagementPageTimelineResponse =
  GraphQLGetListsManagementPageTimelineSuccessResponse
/** GraphQL NotificationsTimeline GET レスポンスモデル */
export type GraphQLGetNotificationsTimelineResponse =
  GraphQLGetNotificationsTimelineSuccessResponse
/** GraphQL PinnedTimelines GET レスポンスモデル */
export type GraphQLGetPinnedTimelinesResponse =
  GraphQLGetPinnedTimelinesSuccessResponse
/** GraphQL PremiumContentQuery GET レスポンスモデル */
export type GraphQLGetPremiumContentQueryResponse =
  GraphQLGetPremiumContentQuerySuccessResponse
/** GraphQL ProfileSpotlightsQuery GET レスポンスモデル */
export type GraphQLGetProfileSpotlightsQueryResponse =
  GraphQLGetProfileSpotlightsQuerySuccessResponse
/** GraphQL SearchTimeline GET レスポンスモデル */
export type GraphQLGetSearchTimelineResponse =
  GraphQLGetSearchTimelineSuccessResponse
/** GraphQL TopicCarouselQuery GET レスポンスモデル */
export type GraphQLGetTopicCarouselQueryResponse =
  GraphQLGetTopicCarouselQuerySuccessResponse
/** GraphQL TweetDetail GET レスポンスモデル */
export type GraphQLGetTweetDetailResponse = GraphQLGetTweetDetailSuccessResponse
/** GraphQL TweetResultByRestId GET レスポンスモデル */
export type GraphQLGetTweetResultByRestIdResponse =
  GraphQLGetTweetResultByRestIdSuccessResponse
/** GraphQL useFetchProductSubscriptionsQuery GET レスポンスモデル */
export type GraphQLGetUseFetchProductSubscriptionsQueryResponse =
  GraphQLGetUseFetchProductSubscriptionsQuerySuccessResponse
/** GraphQL useFetchProfileSectionsCanViewExpandedProfileQuery GET レスポンスモデル */
export type GraphQLGetUseFetchProfileSectionsCanViewExpandedProfileQueryResponse =
  GraphQLGetUseFetchProfileSectionsCanViewExpandedProfileQuerySuccessResponse
/** GraphQL usePricesQuery GET レスポンスモデル */
export type GraphQLGetUsePricesQueryResponse =
  GraphQLGetUsePricesQuerySuccessResponse
/** GraphQL useProductSkuQuery GET レスポンスモデル */
export type GraphQLGetUseProductSkuQueryResponse =
  GraphQLGetUseProductSkuQuerySuccessResponse
/** GraphQL UserByRestId GET レスポンスモデル */
export type GraphQLGetUserByRestIdResponse =
  | GraphQLGetUserByRestIdSuccessResponse
  | GraphQLGetUserByRestIdErrorResponse
/** GraphQL UserByScreenName GET レスポンスモデル */
export type GraphQLGetUserByScreenNameResponse =
  GraphQLGetUserByScreenNameSuccessResponse
/** GraphQL useRelayDelegateDataPendingQuery GET レスポンスモデル */
export type GraphQLGetUseRelayDelegateDataPendingQueryResponse =
  GraphQLGetUseRelayDelegateDataPendingQuerySuccessResponse
/** GraphQL UserPreferences GET レスポンスモデル */
export type GraphQLGetUserPreferencesResponse =
  GraphQLGetUserPreferencesSuccessResponse
/** GraphQL UsersVerifiedAvatars GET レスポンスモデル */
export type GraphQLGetUsersVerifiedAvatarsResponse =
  GraphQLGetUsersVerifiedAvatarsSuccessResponse
/** GraphQL UserTweets GET レスポンスモデル */
export type GraphQLGetUserTweetsResponse =
  | GraphQLGetUserTweetsSuccessResponse
  | GraphQLGetUserTweetsErrorResponse
/** GraphQL useSubscriptionProductDetailsQuery GET レスポンスモデル */
export type GraphQLGetUseSubscriptionProductDetailsQueryResponse =
  GraphQLGetUseSubscriptionProductDetailsQuerySuccessResponse
/** GraphQL useVerifiedOrgFeatureHelperQuery GET レスポンスモデル */
export type GraphQLGetUseVerifiedOrgFeatureHelperQueryResponse =
  GraphQLGetUseVerifiedOrgFeatureHelperQuerySuccessResponse
/** GraphQL Viewer GET レスポンスモデル */
export type GraphQLGetViewerResponse = GraphQLGetViewerErrorResponse
/** GraphQL viewerUserQuery GET レスポンスモデル */
export type GraphQLGetViewerUserQueryResponse =
  GraphQLGetViewerUserQuerySuccessResponse
/** GraphQL VOCardsQuery GET レスポンスモデル */
export type GraphQLGetVOCardsQueryResponse =
  GraphQLGetVOCardsQuerySuccessResponse

export type GraphQLGETEndpoint =
  | 'affiliatesQuery'
  | 'articleNudgeDomains'
  | 'AudioSpaceById'
  | 'AuthenticatePeriscope'
  | 'Bookmarks'
  | 'BroadcastQuery'
  | 'CarouselQuery'
  | 'CommunitiesCreateButtonQuery'
  | 'CommunitiesExploreTimeline'
  | 'CommunitiesFetchOneQuery'
  | 'CommunitiesRankedTimeline'
  | 'DataSaverMode'
  | 'DelegatedAccountListQuery'
  | 'DMPinnedInboxQuery'
  | 'ExplorePage'
  | 'FetchDraftTweets'
  | 'FetchScheduledTweets'
  | 'FollowHostButtonQuery'
  | 'getAltTextPromptPreference'
  | 'GetUserClaims'
  | 'GrokHome'
  | 'HomeLatestTimeline'
  | 'HomeTimeline'
  | 'isEligibleForAnalyticsUpsellQuery'
  | 'isEligibleForVoButtonUpsellQuery'
  | 'Likes'
  | 'ListLatestTweetsTimeline'
  | 'ListsManagementPageTimeline'
  | 'NotificationsTimeline'
  | 'PinnedTimelines'
  | 'PremiumContentQuery'
  | 'ProfileSpotlightsQuery'
  | 'SearchTimeline'
  | 'TopicCarouselQuery'
  | 'TweetDetail'
  | 'TweetResultByRestId'
  | 'useFetchProductSubscriptionsQuery'
  | 'useFetchProfileSectionsCanViewExpandedProfileQuery'
  | 'usePricesQuery'
  | 'useProductSkuQuery'
  | 'UserByRestId'
  | 'UserByScreenName'
  | 'useRelayDelegateDataPendingQuery'
  | 'UserPreferences'
  | 'UsersVerifiedAvatars'
  | 'UserTweets'
  | 'useSubscriptionProductDetailsQuery'
  | 'useVerifiedOrgFeatureHelperQuery'
  | 'Viewer'
  | 'viewerUserQuery'
  | 'VOCardsQuery'

export type GraphQLGETEndPointResponseType<T extends GraphQLGETEndpoint> =
  T extends 'affiliatesQuery'
    ? GraphQLGetAffiliatesQueryResponse
    : T extends 'articleNudgeDomains'
      ? GraphQLGetArticleNudgeDomainsResponse
      : T extends 'AudioSpaceById'
        ? GraphQLGetAudioSpaceByIdResponse
        : T extends 'AuthenticatePeriscope'
          ? GraphQLGetAuthenticatePeriscopeResponse
          : T extends 'Bookmarks'
            ? GraphQLGetBookmarksResponse
            : T extends 'BroadcastQuery'
              ? GraphQLGetBroadcastQueryResponse
              : T extends 'CarouselQuery'
                ? GraphQLGetCarouselQueryResponse
                : T extends 'CommunitiesCreateButtonQuery'
                  ? GraphQLGetCommunitiesCreateButtonQueryResponse
                  : T extends 'CommunitiesExploreTimeline'
                    ? GraphQLGetCommunitiesExploreTimelineResponse
                    : T extends 'CommunitiesFetchOneQuery'
                      ? GraphQLGetCommunitiesFetchOneQueryResponse
                      : T extends 'CommunitiesRankedTimeline'
                        ? GraphQLGetCommunitiesRankedTimelineResponse
                        : T extends 'DataSaverMode'
                          ? GraphQLGetDataSaverModeResponse
                          : T extends 'DelegatedAccountListQuery'
                            ? GraphQLGetDelegatedAccountListQueryResponse
                            : T extends 'DMPinnedInboxQuery'
                              ? GraphQLGetDMPinnedInboxQueryResponse
                              : T extends 'ExplorePage'
                                ? GraphQLGetExplorePageResponse
                                : T extends 'FetchDraftTweets'
                                  ? GraphQLGetFetchDraftTweetsResponse
                                  : T extends 'FetchScheduledTweets'
                                    ? GraphQLGetFetchScheduledTweetsResponse
                                    : T extends 'FollowHostButtonQuery'
                                      ? GraphQLGetFollowHostButtonQueryResponse
                                      : T extends 'getAltTextPromptPreference'
                                        ? GraphQLGetGetAltTextPromptPreferenceResponse
                                        : T extends 'GetUserClaims'
                                          ? GraphQLGetGetUserClaimsResponse
                                          : T extends 'GrokHome'
                                            ? GraphQLGetGrokHomeResponse
                                            : T extends 'HomeLatestTimeline'
                                              ? GraphQLGetHomeLatestTimelineResponse
                                              : T extends 'HomeTimeline'
                                                ? GraphQLGetHomeTimelineResponse
                                                : T extends 'isEligibleForAnalyticsUpsellQuery'
                                                  ? GraphQLGetIsEligibleForAnalyticsUpsellQueryResponse
                                                  : T extends 'isEligibleForVoButtonUpsellQuery'
                                                    ? GraphQLGetIsEligibleForVoButtonUpsellQueryResponse
                                                    : T extends 'Likes'
                                                      ? GraphQLGetLikesResponse
                                                      : T extends 'ListLatestTweetsTimeline'
                                                        ? GraphQLGetListLatestTweetsTimelineResponse
                                                        : T extends 'ListsManagementPageTimeline'
                                                          ? GraphQLGetListsManagementPageTimelineResponse
                                                          : T extends 'NotificationsTimeline'
                                                            ? GraphQLGetNotificationsTimelineResponse
                                                            : T extends 'PinnedTimelines'
                                                              ? GraphQLGetPinnedTimelinesResponse
                                                              : T extends 'PremiumContentQuery'
                                                                ? GraphQLGetPremiumContentQueryResponse
                                                                : T extends 'ProfileSpotlightsQuery'
                                                                  ? GraphQLGetProfileSpotlightsQueryResponse
                                                                  : T extends 'SearchTimeline'
                                                                    ? GraphQLGetSearchTimelineResponse
                                                                    : T extends 'TopicCarouselQuery'
                                                                      ? GraphQLGetTopicCarouselQueryResponse
                                                                      : T extends 'TweetDetail'
                                                                        ? GraphQLGetTweetDetailResponse
                                                                        : T extends 'TweetResultByRestId'
                                                                          ? GraphQLGetTweetResultByRestIdResponse
                                                                          : T extends 'useFetchProductSubscriptionsQuery'
                                                                            ? GraphQLGetUseFetchProductSubscriptionsQueryResponse
                                                                            : T extends 'useFetchProfileSectionsCanViewExpandedProfileQuery'
                                                                              ? GraphQLGetUseFetchProfileSectionsCanViewExpandedProfileQueryResponse
                                                                              : T extends 'usePricesQuery'
                                                                                ? GraphQLGetUsePricesQueryResponse
                                                                                : T extends 'useProductSkuQuery'
                                                                                  ? GraphQLGetUseProductSkuQueryResponse
                                                                                  : T extends 'UserByRestId'
                                                                                    ? GraphQLGetUserByRestIdResponse
                                                                                    : T extends 'UserByScreenName'
                                                                                      ? GraphQLGetUserByScreenNameResponse
                                                                                      : T extends 'useRelayDelegateDataPendingQuery'
                                                                                        ? GraphQLGetUseRelayDelegateDataPendingQueryResponse
                                                                                        : T extends 'UserPreferences'
                                                                                          ? GraphQLGetUserPreferencesResponse
                                                                                          : T extends 'UsersVerifiedAvatars'
                                                                                            ? GraphQLGetUsersVerifiedAvatarsResponse
                                                                                            : T extends 'UserTweets'
                                                                                              ? GraphQLGetUserTweetsResponse
                                                                                              : T extends 'useSubscriptionProductDetailsQuery'
                                                                                                ? GraphQLGetUseSubscriptionProductDetailsQueryResponse
                                                                                                : T extends 'useVerifiedOrgFeatureHelperQuery'
                                                                                                  ? GraphQLGetUseVerifiedOrgFeatureHelperQueryResponse
                                                                                                  : T extends 'Viewer'
                                                                                                    ? GraphQLGetViewerResponse
                                                                                                    : T extends 'viewerUserQuery'
                                                                                                      ? GraphQLGetViewerUserQueryResponse
                                                                                                      : T extends 'VOCardsQuery'
                                                                                                        ? GraphQLGetVOCardsQueryResponse
                                                                                                        : never

/** GraphQL HomeLatestTimeline POST レスポンスモデル */
export type GraphQLPostHomeLatestTimelineResponse =
  GraphQLPostHomeLatestTimelineSuccessResponse
/** GraphQL HomeTimeline POST レスポンスモデル */
export type GraphQLPostHomeTimelineResponse =
  GraphQLPostHomeTimelineSuccessResponse
/** GraphQL DeleteRetweet POST レスポンスモデル */
export type GraphQLPostDeleteRetweetResponse =
  GraphQLPostDeleteRetweetSuccessResponse
/** GraphQL FavoriteTweet POST レスポンスモデル */
export type GraphQLPostFavoriteTweetResponse =
  GraphQLPostFavoriteTweetSuccessResponse
/** GraphQL UnfavoriteTweet POST レスポンスモデル */
export type GraphQLPostUnfavoriteTweetResponse =
  GraphQLPostUnfavoriteTweetSuccessResponse

export type GraphQLPOSTEndpoint =
  | 'DeleteRetweet'
  | 'FavoriteTweet'
  | 'HomeLatestTimeline'
  | 'HomeTimeline'
  | 'UnfavoriteTweet'

export type GraphQLPOSTEndPointResponseType<T extends GraphQLPOSTEndpoint> =
  T extends 'DeleteRetweet'
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
