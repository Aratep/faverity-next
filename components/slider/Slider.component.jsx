import React, { Fragment } from "react";
import ReactSlick from "react-slick";
//SLICK CAROUSEL STYLES
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// BASE COMPONENTS
import IsVisible from "components/is-visible/IsVisible.component";
// IMAGES
import heartIcon from "assets/images/feed/heart-icon.svg";
import chatIcon from "assets/images/feed/chat-icon.svg";
import shareIcon from "assets/images/feed/share-icon.svg";
import Image from "../image/Image.component";

const Slider = ({
  items,
  hasDots = false,
  isInfinite = false,
  slidesToShow = 1,
  autoplay = false, // must be true
  arrows = true,
  rows = 1,
  fade = false,
  isSocialButtons = false,
  socialButtonsOptions = {},
}) => {
  const settings = {
    dots: hasDots,
    isInfinite,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay,
    autoplaySpeed: 2000,
    arrows,
    rows,
    fade,
    // prevArrow: null,
    // nextArrow: null,
  };

  return (
    <div className="slider">
      <ReactSlick {...settings}>
        {items?.length > 0 &&
          items.map((item, idx) => (
            <Fragment key={item?.id || idx}>{item.item}</Fragment>
          ))}
      </ReactSlick>
      <IsVisible isVisible={isSocialButtons}>
        <div className="social-icons__block">
          <div className="social-icons">
            <Image
              src={heartIcon}
              alt="heartIcon"
              onClick={socialButtonsOptions.onHeartClick}
            />
          </div>
          <div className="social-icons">
            <Image
              src={chatIcon}
              alt="chatIcon"
              onClick={socialButtonsOptions.onChatClick}
            />
          </div>
          <div className="social-icons">
            <Image src={shareIcon} alt="shareIcon" />
          </div>
        </div>
      </IsVisible>
    </div>
  );
};

export default Slider;
