import React, { useEffect } from "react";
import { useRouter } from "next/router";

// BASE COMPONENTS
import GridContainer from "components/grid-container/GridContainer.component";
import GridItem from "components/grid-item/GridItem.component";
import IsVisible from "components/is-visible/IsVisible.component";
import MenuItemsModal from "components/menu-items/MenuItemsModal.component";
import LoaderWrapper from "components/loader-wrapper/LoaderWrapper.component";
// FEED's COMPONENTS
import FeedOwnerInfo from "../../../feed/components/feed-preview/owner-info/OwnerInfo.component";
import FeedSlider from "../../../feed/components/feed-preview/feed-slider/FeedSlider.component";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
// ACTIONS
import { getCommonPollsAsync } from "redux/chat/chat.actions";
import {
  reportPollAsync,
  setSingleFeedData,
  togglePollReportMenu,
} from "redux/feed/feeds.actions";
// LAYOUTS
import { withToolbar } from "layouts/page-with-toolbar/PageWithToolbar.layout";
import BackArrowHeader from "layouts/back-arrow-header/BackArrowHeader.layout";

const CommonPolls = () => {
  const {
    dispatch,
    reduxStore: {
      authentication: authStore,
      chat: chatStore,
      feeds: feedsStore,
    },
  } = useToolkit("authentication", "chat", "feeds");

  const router = useRouter();

  const { userInfo } = authStore;
  const { commonPolls, commonPollsLoading, selectedUser } = chatStore;
  const { reportPollLoading, isPollReportMenu, singleFeedData } = feedsStore;

  // added temporary
  useEffect(() => {
    dispatch(
      getCommonPollsAsync(userInfo.accessToken, { userId: selectedUser.userId })
    );
    // eslint-disable-next-line
  }, []);

  const onFeedClick = (feedData) => {
    router.push(`/feed/single-feed/${feedData.id}`);
    dispatch(setSingleFeedData(feedData));
  };

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
    <section className="common-polls-subpage">
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <BackArrowHeader />
        </GridItem>
      </GridContainer>
      <GridContainer>
        <LoaderWrapper isLoading={commonPollsLoading}>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <IsVisible isVisible={commonPolls.length > 0}>
              <MenuItemsModal
                itemsList={menuItemsList}
                isOpen={isPollReportMenu}
                toggleOpen={() => dispatch(togglePollReportMenu(false))}
              />
              {commonPolls.map((feed) => {
                return (
                  <div className="feed-preview" key={feed?.id}>
                    <FeedOwnerInfo feed={feed} />
                    <FeedSlider
                      polls={feed?.pollOptions}
                      feedId={feed.id}
                      onFeedClick={() => onFeedClick(feed)}
                    />
                  </div>
                );
              })}
            </IsVisible>
            <IsVisible isVisible={commonPolls.length === 0}>
              <div className="no-data__block">No common polls</div>
            </IsVisible>
          </GridItem>
        </LoaderWrapper>
      </GridContainer>
    </section>
  );
};

export default withToolbar(CommonPolls);
