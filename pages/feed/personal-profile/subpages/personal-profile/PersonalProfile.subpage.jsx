import React, { useEffect } from "react";

// BASE COMPONENTS
import GridContainer from "components/grid-container/GridContainer.component";
import GridItem from "components/grid-item/GridItem.component";
import LoaderWrapper from "components/loader-wrapper/LoaderWrapper.component";
import IsVisible from "components/is-visible/IsVisible.component";
// FEED OWNER PROFILE's  COMPONENTS
import AvatarBlock from "../../../feed/subpages/poll-owner-profile/components/avatar/AvatarBlock.component";
import FollowersBlock from "../../../feed/subpages/poll-owner-profile/components/followers-block/FollowersBlock.component";
import PollSlider from "../../../feed/subpages/poll-owner-profile/components/poll-slider/PollSlider.component";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
import useAuthSession from "effects/useAuthSession.effect";
// ACTIONS
import {
  getFeedsByProfileAsync,
  getUserFollowersDataAsync,
  getUserSubscribersDataAsync,
  getFeedOwnerDataAsync,
} from "redux/feed/feeds.actions";
// LAYOUTS
import { withToolbar } from "layouts/page-with-toolbar/PageWithToolbar.layout";
import BackArrowHeader from "layouts/back-arrow-header/BackArrowHeader.layout";
// SERVICES
import FeedServices from "services/feed.services";

const PersonalProfile = () => {
  const {
    dispatch,
    reduxStore: { authentication: authStore, feeds: feedStore },
  } = useToolkit("authentication", "feeds");
  const authToken = useAuthSession();

  const { generateImagesData } = FeedServices;

  const { userInfo } = authStore;
  const {
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
      dispatch(getFeedsByProfileAsync(authToken, userInfo?.id));
      dispatch(getUserFollowersDataAsync(authToken, userInfo?.id));
      dispatch(getUserSubscribersDataAsync(authToken, userInfo?.id));
      dispatch(getFeedOwnerDataAsync(authToken, userInfo?.id));
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
          <AvatarBlock owner={userInfo} />
        </GridItem>
        <LoaderWrapper
          isLoading={userFollowersLoading || userSubscribersLoading}>
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <FollowersBlock
              imagesCount={imagesData.imagesCount}
              profileType="PERSONALPROFILE"
            />
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
                Sie haben noch keinen Poll erstellt
              </div>
            </GridItem>
          </IsVisible>
        </LoaderWrapper>
      </GridContainer>
    </section>
  );
};

export default withToolbar(PersonalProfile);
