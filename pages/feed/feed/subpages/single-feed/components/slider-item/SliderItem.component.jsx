import React from "react";

// BASE COMPONENTS
import Image from "components/image/Image.component";
import IsVisible from "components/is-visible/IsVisible.component";

// IMAGES
import heart from "assets/images/feed/heart.svg";
import heartIcon from "assets/images/feed/heart-icon.svg";
import chatIcon from "assets/images/feed/chat-icon.svg";
import shareIcon from "assets/images/feed/share-icon.svg";

const SliderItem = ({
  poll,
  height,
  styles,
  isSocialButtons = false,
  socialButtonsOptions = {},
}) => {
  return (
    <div
      className="slider-item"
      style={{
        width: "100%",
        height: height,
        backgroundImage: "url(" + poll?.mediaURL[0] + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        ...styles,
      }}>
      <div className="vote-block">
        <Image imgClassName="vote-icon" src={heart.src} />{" "}
        <span>{poll?.voteCount}</span>
      </div>
      <IsVisible isVisible={isSocialButtons}>
        <div className="social-icons__block">
          <div className="social-icons">
            <Image
              src={heartIcon.src}
              alt="heartIcon"
              onClick={socialButtonsOptions.onHeartClick}
            />
          </div>
          <div className="social-icons">
            <Image
              src={chatIcon.src}
              alt="chatIcon"
              onClick={socialButtonsOptions.onChatClick}
            />
          </div>
          <div className="social-icons">
            <Image src={shareIcon.src} alt="shareIcon" />
          </div>
        </div>
      </IsVisible>
    </div>
  );
};

export default SliderItem;
