import React, { useState } from "react";
import { useRouter } from "next/router";

// BASE COMPONENTS
import IsVisible from "components/is-visible/IsVisible.component";
import Button from "components/button/Button.component";
import Slider from "components/slider/Slider.component";
// CREATE POLL COMPONENTS
import EditImage from "../../components/edit-image/EditImage.component";
import SliderItem from "../../components/slider-item/SliderItem.component";
// ACTIONS
import { setSelectedTabIndex } from "redux/common/common.actions";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";

const StepThreeTab = () => {
  const {
    dispatch,
    reduxStore: { createPoll: createPollStore },
  } = useToolkit("authentication", "createPoll");
  const router = useRouter();

  const [selectedImage, setSelectedImage] = useState(null);

  const {
    step2TabParams: { images },
  } = createPollStore;

  const onImageClick = (idx) => {
    const selectedImg = images.filter((img) => img.id === idx)[0];
    setSelectedImage(selectedImg);
  };

  const onNextClick = (e) => {
    e.preventDefault();
    dispatch(setSelectedTabIndex(2));
    router.push("/feed/poll-preview");
  };

  // to fix slides to show bug of react-slick
  const slidesToShow =
    images.length >= 3 ? 3 : images.length <= 0 && images.length === 1 ? 1 : 1;

  const generateSliderItems = (images) => {
    return (
      images.length > 0 &&
      images.map((data) => {
        return {
          id: data?.id,
          item: (
            <SliderItem
              src={data.image}
              onClick={() => onImageClick(data.id)}
            />
          ),
        };
      })
    );
  };

  return (
    <div className="step-three-tab">
      <div className="step-three-tab__heading">
        <h3>Edit photo</h3>
      </div>
      <EditImage selectedImage={selectedImage} hasEditButton={true} />
      <div className="step-three-tab__upload-block">
        <IsVisible isVisible={images.length > 0}>
          <Slider
            items={generateSliderItems(images)}
            slidesToShow={slidesToShow}
            arrows={false}
          />
        </IsVisible>
      </div>
      <div className="fy-flex__center">
        <Button type="submit" onClick={onNextClick}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepThreeTab;
