import React from "react";
import { useRouter } from "next/router";

// BASE COMPONENTS
import Button from "components/button/Button.component";
import IsVisible from "components/is-visible/IsVisible.component";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
// ACTIONS
import { followUserAsync, unFollowUserAsync } from "redux/feed/feeds.actions";
import { setSelectedTabIndex } from "redux/common/common.actions";

const FollowersTab = ({ imagesCount, profileType = "FEEDOWNER" }) => {
  const {
    dispatch,
    reduxStore: { authentication: authStore, feeds: feedStore },
  } = useToolkit("authentication", "feeds");

  const { userInfo } = authStore;
  const { selectedOwnerID, userFollowers, feedOwnerData } = feedStore;

  const router = useRouter();

  const followersCount = feedOwnerData.faversCount || 0;
  const subscribersCount = feedOwnerData.aboCount || 0;

  const onEditClick = (e) => {
    e.preventDefault();
    router.push("/feed/change-profile");
  };

  const onFollowClick = () => {
    dispatch(followUserAsync(userInfo?.accessToken, selectedOwnerID));
  };

  const onUnfollowClick = () => {
    dispatch(unFollowUserAsync(userInfo?.accessToken, selectedOwnerID));
  };

  const onSubscribersClick = (tabIndex) => {
    router.push("/feed/subscribers");
    dispatch(setSelectedTabIndex(tabIndex));
  };

  // get followers ids
  let followersIds = [];

  userFollowers.forEach((follower) => {
    followersIds.push(follower.userId);
  });

  return (
    <div className="followers-block">
      <div className="followers-block__statistics">
        <div className="followers-block__statistics-card">
          <div className="followers-block__statistics-card--number">
            {imagesCount}
          </div>
          <div>Images</div>
        </div>
        <div
          className="followers-block__statistics-card"
          onClick={() => onSubscribersClick(0)}>
          <div className="followers-block__statistics-card--number">
            {followersCount}
          </div>
          <div>Followers</div>
        </div>
        <div
          className="followers-block__statistics-card"
          onClick={() => onSubscribersClick(1)}>
          <div className="followers-block__statistics-card--number">
            {subscribersCount}
          </div>
          <div>Following</div>
        </div>
      </div>
      <IsVisible isVisible={profileType === "FEEDOWNER"}>
        <div className="followers-block__btn">
          <IsVisible isVisible={userInfo.id !== feedOwnerData.userId}>
            <IsVisible isVisible={!followersIds.includes(userInfo.id)}>
              <Button onClick={onFollowClick}>Follow</Button>
            </IsVisible>
            <IsVisible isVisible={followersIds.includes(userInfo.id)}>
              <Button onClick={onUnfollowClick}>Unfollow</Button>
            </IsVisible>
            <Button>Appeal</Button>
          </IsVisible>
        </div>
      </IsVisible>
      <div className="followers-block__edit-btn">
        <IsVisible isVisible={profileType === "PERSONALPROFILE"}>
          <Button onClick={onEditClick}>Edit</Button>
        </IsVisible>
      </div>
    </div>
  );
};

export default FollowersTab;
