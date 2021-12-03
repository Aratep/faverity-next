import React, { useEffect } from "react";

// BASE COMPONENTS
import GridContainer from "components/grid-container/GridContainer.component";
import GridItem from "components/grid-item/GridItem.component";
import LoaderWrapper from "components/loader-wrapper/LoaderWrapper.component";
// FEED COMPONENTS
import Hashtags from "./components/hashtags/Hashtags.component";
import FeedPreview from "./components/feed-preview/FeedPreview.component";
// LAYOUTS
import { withToolbar } from "layouts/page-with-toolbar/PageWithToolbar.layout";
import BackArrowHeader from "layouts/back-arrow-header/BackArrowHeader.layout";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
import useAuthSession from "effects/useAuthSession.effect";
// ACTIONS
import {
  getHomeFeedDataAsync,
  resetFeedsList,
  setFeedType,
} from "redux/feed/feeds.actions";

const FeedPage = () => {
  const {
    dispatch,
    reduxStore: { feeds: feedsStore },
  } = useToolkit("feeds");
  const authToken = useAuthSession();

  const {
    feedsLoading,
    tagFeedsLoading,
    feedsByCategoryLoading,
    feedType,
    feeds,
  } = feedsStore;

  useEffect(() => {
    if (window.performance) {
      if (window.performance.navigation.type === 1) {
        dispatch(setFeedType("general"));
      }
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    return () => {
      dispatch(resetFeedsList());
    };
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (feeds.length === 0 && authToken) {
      dispatch(getHomeFeedDataAsync(authToken));
    }
    // eslint-disable-next-line
  }, [])


  const isLoading =
    feedType === "tag"
      ? tagFeedsLoading
      : feedType === "category"
      ? feedsByCategoryLoading
      : feedsLoading;

  return (
    <section className="feed-page">
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <BackArrowHeader isMainPage />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <Hashtags />
        </GridItem>
        <LoaderWrapper isLoading={isLoading}>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <FeedPreview />
          </GridItem>
        </LoaderWrapper>
      </GridContainer>
    </section>
  );
};

export default withToolbar(FeedPage);
