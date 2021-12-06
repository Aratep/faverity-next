import React from "react";

// BASE COMPONENTS
import Image from "components/image/Image.component";
import Slider from "components/slider/Slider.component";
import IsVisible from "components/is-visible/IsVisible.component";

const PollDetails = ({ question, hashtags, images }) => {
  const generateSliderItems = (images) => {
    return (
      images &&
      images?.length > 0 &&
      images?.map((img) => {
        return {
          id: img?.id,
          item: <Image src={img.image} />,
        };
      })
    );
  };

  // to fix slides to show bug of react-slick
  const slidesToShow =
    images && images?.length >= 3
      ? 2
      : images && images?.length <= 0 && images && images?.length === 1
      ? 1
      : 1;

  return (
    <div className="poll-details">
      <div className="poll-details__question">{question}</div>
      <div className="poll-details__hashtags">
        {hashtags &&
          hashtags?.length > 0 &&
          hashtags?.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      <IsVisible isVisible={images && images?.length > 0}>
        <div className="poll-details__slider">
          <Slider
            items={generateSliderItems(images)}
            slidesToShow={slidesToShow}
            arrows={false}
          />
        </div>
      </IsVisible>
    </div>
  );
};

export default PollDetails;
