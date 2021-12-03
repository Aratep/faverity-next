import React from "react";
import ShowMoreText from "react-show-more-text";
import { useRouter } from "next/router";

// BASE COMPONENTS
import Image from "components/image/Image.component";
import IsVisible from "components/is-visible/IsVisible.component";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
// ACTIONS
import {
  setSelectedOwnerID,
  getFeedsByTagNameAsync,
  setFeedType,
  getFeedOwnerDataAsync,
  setSingleFeedData,
  togglePollReportMenu,
} from "redux/feed/feeds.actions";
// UTILITIES
import { fixTagName } from "utilities/helper-functions";
import { generateUserInfo } from "pages/feed/feed.utilities";
// ICONS
import VerticalMenuIcon from "components/icons/VerticalMenuIcon";
// IMAGES
import smile from "assets/images/feed/smile.svg";

const FeedOwnerInfo = ({ feed, isTags = true }) => {
  const router = useRouter();

  const {
    dispatch,
    reduxStore: { authentication: authStore },
  } = useToolkit("authentication", "feeds");

  const { userInfo } = authStore;

  const { name, avatar } = generateUserInfo(feed?.owner);

  const onAvatarClick = () => {
    dispatch(setSelectedOwnerID(feed?.owner.userId));
    dispatch(
      getFeedOwnerDataAsync(userInfo?.accessToken, feed?.owner.userId, router)
    );
  };

  const onTagNameClick = (tagName) => {
    dispatch(getFeedsByTagNameAsync(userInfo?.accessToken, tagName));
    dispatch(setFeedType("tag"));
  };

  const onMenuClick = (feedData) => {
    dispatch(togglePollReportMenu(true));
    dispatch(setSingleFeedData(feedData));
  };

  return (
    <div className="feed-owner-info">
      <div className="feed-owner-info_user">
        <div
          className="feed-owner-info_user__img-block"
          onClick={onAvatarClick}>
          <Image src={avatar} alt={feed?.owner.bio} />
        </div>
        <div className="feed-owner-info_user__block">
          <div
            className="feed-owner-info_user__block-name"
            onClick={onAvatarClick}>
            {name}
          </div>
          <div className="feed-owner-info_user__block-bio">
            <ShowMoreText
              lines={2}
              more="See more"
              less="See less"
              className="content-css"
              anchorClass="my-anchor-css-class"
              expanded={false}
              width={280}
              truncatedEndingComponent={
                <span>
                  ... <Image src={smile} /> &nbsp;
                </span>
              }>
              {feed?.question}
            </ShowMoreText>
          </div>
          <IsVisible isVisible={isTags && feed}>
            <div className="feed-owner-info_user__block-tags">
              {feed &&
                feed?.tags.length > 0 &&
                feed?.tags.map((tag, idx) => (
                  <IsVisible isVisible={tag !== ""} key={idx}>
                    <span
                      key={idx}
                      onClick={() => onTagNameClick(fixTagName(tag))}>
                      {tag}
                    </span>
                  </IsVisible>
                ))}
            </div>
          </IsVisible>
        </div>
      </div>
      <div className="feed-owner-info__menu-dots">
        <VerticalMenuIcon onClick={() => onMenuClick(feed)} />
      </div>
    </div>
  );
};

export default FeedOwnerInfo;
