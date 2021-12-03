import React from "react";
// SINGLE FEED SLIDER ITEM
import SliderItem from "./subpages/single-feed/components/slider-item/SliderItem.component";

const FeedServices = {
  generateImagesData(userPolls) {
    const images = [];

    userPolls.length > 0 &&
      userPolls.forEach((poll) => {
        poll.pollOptions.forEach((item) => {
          images.push({
            id: item?.id,
            item: (
              <SliderItem
                poll={item}
                height="30rem"
                styles={{ borderRadius: "2.5rem" }}
              />
            ),
          });
        });
      });
    return { images, imagesCount: images.length };
  },
};

export default FeedServices;
