import React, { useEffect } from "react";

// BASE COMPONENTS
import GridContainer from "components/grid-container/GridContainer.component";
import GridItem from "components/grid-item/GridItem.component";
import LoaderWrapper from "components/loader-wrapper/LoaderWrapper.component";
import IsVisible from "components/is-visible/IsVisible.component";
// FEED OWNER PROFILE's  COMPONENTS
import AvatarBlock from "./components/avatar/AvatarBlock.component";
import FollowersBlock from "./components/followers-block/FollowersBlock.component";
import PollSlider from "./components/poll-slider/PollSlider.component";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
import useAuthSession from "effects/useAuthSession.effect";
// ACTIONS
import {
  getFeedOwnerDataAsync,
  getFeedsByProfileAsync,
  getUserFollowersDataAsync,
  getUserSubscribersDataAsync,
} from "redux/feed/feeds.actions";
// LAYOUTS
import { withToolbar } from "layouts/page-with-toolbar/PageWithToolbar.layout";
import BackArrowHeader from "layouts/back-arrow-header/BackArrowHeader.layout";
// SERVICES
import FeedServices from "services/feed.services";

const FeedOwnerProfile = () => {
  const {
    dispatch,
    reduxStore: { feeds: feedStore },
  } = useToolkit("feeds");

  const authToken = useAuthSession("/feed/feed-owner-profile");

  const { generateImagesData } = FeedServices;

  const {
    // owner data
    feedOwnerData,
    selectedOwnerID,
    // user polls
    userPollsLoading,
    userPolls,
    // user followers
    userFollowersLoading,
    // user subscribers
    userSubscribersLoading,
  } = feedStore;

  const imagesData = generateImagesData(userPolls);

  useEffect(() => {
    if (authToken) {
      dispatch(getFeedsByProfileAsync(authToken, selectedOwnerID));
      dispatch(getUserFollowersDataAsync(authToken, selectedOwnerID));
      dispatch(getUserSubscribersDataAsync(authToken, selectedOwnerID));
      dispatch(getFeedOwnerDataAsync(authToken, selectedOwnerID));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <section className="feed-owner-profile">
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <BackArrowHeader />
        </GridItem>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <AvatarBlock owner={feedOwnerData} />
        </GridItem>
        <LoaderWrapper
          isLoading={userFollowersLoading || userSubscribersLoading}>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <FollowersBlock imagesCount={imagesData.imagesCount} />
          </GridItem>
        </LoaderWrapper>
        <LoaderWrapper isLoading={userPollsLoading}>
          <IsVisible isVisible={userPolls.length > 0}>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <PollSlider images={imagesData.images} />
            </GridItem>
          </IsVisible>
          <IsVisible isVisible={userPolls.length === 0}>
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <div className="feed-owner-profile__no-polls">
                Dieser User hat noch keine Polls erstellt
              </div>
            </GridItem>
          </IsVisible>
        </LoaderWrapper>
      </GridContainer>
    </section>
  );
};

export default withToolbar(FeedOwnerProfile);
