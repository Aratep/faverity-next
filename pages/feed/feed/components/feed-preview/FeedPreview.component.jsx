import React, { useEffect } from "react";
import { useRouter } from "next/router";

// BASE COMPONENTS
import IsVisible from "components/is-visible/IsVisible.component";
import MenuItemsModal from "components/menu-items/MenuItemsModal.component";
// FEED's COMPONENTS
import FeedOwnerInfo from "./owner-info/OwnerInfo.component";
import FeedSlider from "./feed-slider/FeedSlider.component";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
import useAuthSession from "effects/useAuthSession.effect";
// ACTIONS
import {
  // getHomeFeedDataAsync,
  reportPollAsync,
  setSingleFeedData,
  togglePollReportMenu,
} from "redux/feed/feeds.actions";

const FeedPreview = () => {
  const {
    dispatch,
    reduxStore: { authentication: authStore, feeds: feedsStore },
  } = useToolkit("authentication", "feeds");
  const authToken = useAuthSession();

  const {
    feeds,
    tagFeeds,
    feedsByCategory,
    feedType,
    reportPollLoading,
    isPollReportMenu,
    singleFeedData,
  } = feedsStore;
  const { userInfo } = authStore;

  const router = useRouter();

  // useEffect(() => {
  //   if (feeds.length === 0) {
  //     dispatch(getHomeFeedDataAsync(userInfo.accessToken));
  //   }
  //   // eslint-disable-next-line
  //   }, [])

  const onFeedClick = (feedData) => {
    router.push(`/feed/single-feed`);
    dispatch(setSingleFeedData(feedData));
  };

  const feedsList =
    feedType === "tag"
      ? tagFeeds
      : feedType === "category"
      ? feedsByCategory
      : feeds;

  const onPollReport = () => {
    dispatch(reportPollAsync(userInfo.accessToken, singleFeedData.id));
  };

  const menuItemsList = [
    {
      id: 1,
      label: "Report poll",
      onClick: onPollReport,
      isLoading: reportPollLoading,
    },
  ];

  return (
    <div className="feed-preview-page">
      <IsVisible isVisible={feedsList.length > 0}>
        <MenuItemsModal
          itemsList={menuItemsList}
          isOpen={isPollReportMenu}
          toggleOpen={() => dispatch(togglePollReportMenu(false))}
        />
        {feedsList.map((feed) => {
          return (
            <div className="feed-preview" key={feed.id}>
              <FeedOwnerInfo feed={feed} />
              <FeedSlider
                polls={feed.pollOptions}
                feedId={feed.id}
                onFeedClick={() => onFeedClick(feed)}
              />
            </div>
          );
        })}
      </IsVisible>
      <IsVisible isVisible={feedsList.length === 0}>
        <div className="no-data__block">No data for selected</div>
      </IsVisible>
    </div>
  );
};

export default FeedPreview;
