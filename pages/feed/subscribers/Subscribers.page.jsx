import React, { useEffect } from "react";

// BASE COMPONENTS
import GridContainer from "components/grid-container/GridContainer.component";
import GridItem from "components/grid-item/GridItem.component";
import Tab from "components/tab/Tab.component";
// SERVICES
import SubscribersServices from "services/subscribers.services";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
// ACTIONS
import { setSearchText } from "redux/subscribers/subscribers.actions";
import {
  getUserFollowersDataAsync,
  getUserSubscribersDataAsync,
} from "redux/feed/feeds.actions";
import { setSelectedTabIndex } from "redux/common/common.actions";
// LAYOUTS
import { withToolbar } from "layouts/page-with-toolbar/PageWithToolbar.layout";
import BackArrowHeader from "layouts/back-arrow-header/BackArrowHeader.layout";

const SubscribersPage = () => {
  const {
    dispatch,
    reduxStore: {
      authentication: authStore,
      subscribers: subscribersStore,
      feeds: feedStore,
    },
  } = useToolkit("authentication", "subscribers", "feeds");

  const { userInfo } = authStore;
  const {
    // followings
    userSubscribers,
    // followers
    userFollowers,
    // feed owner data
    feedOwnerData,
  } = feedStore;

  useEffect(() => {
    if (userSubscribers.length === 0) {
      dispatch(
        getUserSubscribersDataAsync(userInfo?.accessToken, feedOwnerData.userId)
      );
    }
    if (userFollowers.length === 0) {
      dispatch(
        getUserFollowersDataAsync(userInfo?.accessToken, feedOwnerData.userId)
      );
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    return () => {
      dispatch(setSelectedTabIndex(0));
    };
    // eslint-disable-next-line
  }, []);

  const { searchText } = subscribersStore;

  const { generateTabLabels, tabPanels } = SubscribersServices;
  const tabLabels = generateTabLabels(
    feedOwnerData.faversCount,
    feedOwnerData.aboCount
  );

  const onSearchTextChange = (text) => {
    dispatch(setSearchText(text));
  };

  return (
    <section className="subscribers-page">
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <BackArrowHeader />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <Tab
            tabLabels={tabLabels}
            tabPanels={tabPanels}
            isSearchInput={true}
            onSearchTextChange={onSearchTextChange}
            text={searchText}
          />
        </GridItem>
      </GridContainer>
    </section>
  );
};

export default withToolbar(SubscribersPage);
