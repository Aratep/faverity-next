import React, { useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import debounce from "lodash.debounce";

// BASE COMPONENTS
import GridContainer from "components/grid-container/GridContainer.component";
import GridItem from "components/grid-item/GridItem.component";
import LoaderWrapper from "components/loader-wrapper/LoaderWrapper.component";
import IsVisible from "components/is-visible/IsVisible.component";
import Image from "components/image/Image.component";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
import useAuthSession from "effects/useAuthSession.effect";
// ACTIONS
import {
  getFeedOwnerDataAsync,
  getUserFollowersDataAsync,
  setSelectedOwnerID,
  getUserSubscribersDataAsync,
} from "redux/feed/feeds.actions";
// UTILITIES
import { generateUserInfo } from "utilities/feed.utilities";

const SubscribersTab = ({ subscribersType }) => {
  const {
    dispatch,
    reduxStore: {
      authentication: authStore,
      feeds: feedStore,
      subscribers: subscribersStore,
    },
  } = useToolkit("authentication", "feeds", "subscribers");
  useAuthSession("/feed/subscribers");

  const router = useRouter();

  const {
    // followings
    userSubscribers,
    userSubscribersLoading,
    // followers
    userFollowers,
    userFollowersLoading,
    // feed owner data
    feedOwnerData,
  } = feedStore;
  const { userInfo } = authStore;
  const { searchText } = subscribersStore;

  const onUserClick = (userId) => {
    dispatch(getFeedOwnerDataAsync(userInfo?.accessToken, userId, router));
    dispatch(setSelectedOwnerID(userId));
  };

  /* debounce input handler */
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSubscribersSearch = useCallback(
    debounce((searchVal) => {
      // send the server request here
      if (subscribersType === "FOLLOWINGS") {
        dispatch(
          getUserSubscribersDataAsync(
            userInfo.accessToken,
            feedOwnerData.userId,
            searchVal
          )
        );
      }
      if (subscribersType === "FOLLOWERS") {
        dispatch(
          getUserFollowersDataAsync(
            userInfo.accessToken,
            feedOwnerData.userId,
            searchVal
          )
        );
      }
    }, 900),
    []
  );

  useEffect(() => {
    debouncedSubscribersSearch(searchText);
  }, [searchText, debouncedSubscribersSearch]);

  const subscribersList =
    subscribersType === "FOLLOWINGS" ? userSubscribers : userFollowers;

  const isLoading =
    subscribersType === "FOLLOWINGS"
      ? userSubscribersLoading
      : userFollowersLoading;

  return (
    <div className="subscribers-tab">
      <GridContainer>
        <GridItem xs={12} sm={12} md={12} lg={12}>
          <LoaderWrapper isLoading={isLoading}>
            <IsVisible isVisible={subscribersList.length > 0}>
              {subscribersList.map((user) => {
                const { name, avatar } = generateUserInfo(user);

                return (
                  <div
                    key={user.userId}
                    className="subscribers-tab__item"
                    onClick={() => onUserClick(user.userId)}>
                    <div className="subscribers-tab__item-info">
                      <Image
                        src={avatar}
                        imgClassName="subscribers-tab__item-info-avatar"
                      />
                      <div className="subscribers-tab__item-info-fullname">
                        {name}
                      </div>
                    </div>
                  </div>
                );
              })}
            </IsVisible>
            <IsVisible isVisible={subscribersList.length === 0}>
              <div className="subscribers-tab__no-item">No items</div>
            </IsVisible>
          </LoaderWrapper>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default SubscribersTab;
