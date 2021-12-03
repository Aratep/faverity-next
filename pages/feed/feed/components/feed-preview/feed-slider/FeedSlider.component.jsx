import React from "react";

// BASE COMPONENTS
import Slider from "components/slider/Slider.component";
import Image from "components/image/Image.component";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
// ACTIONS
import { votePollAsync } from "redux/comments/comments.actions";
// IMAGES
import heart from "assets/images/feed/heart.svg";

const FeedSlider = ({ polls, feedId, onFeedClick }) => {
  const {
    dispatch,
    reduxStore: { authentication: authStore },
  } = useToolkit("authentication");

  const { userInfo } = authStore;
  const images = [];

  const onHeartClick = (e, pollId) => {
    e.stopPropagation();
    dispatch(votePollAsync(userInfo.accessToken, feedId, pollId));
  };

  polls &&
    polls.forEach((poll) => {
      images.push({
        id: poll?.id,
        item: (
          <div>
            <div
              onClick={onFeedClick}
              style={{
                width: "100%",
                height: "35rem",
                backgroundImage: "url(" + poll?.mediaURL[0] + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}>
              <div className="vote-block">
                <Image
                  imgClassName="vote-icon"
                  src={heart.src}
                  onClick={(e) => onHeartClick(e, poll?.id)}
                />{" "}
                <span>{poll?.voteCount}</span>
              </div>
            </div>
          </div>
        ),
      });
    });

  return (
    <div className="feed-slider">
      <Slider items={images} arrows={false} slidesToShow={2} />
    </div>
  );
};

export default FeedSlider;
