import React from "react";

// BASE COMPONENTS
import IsVisible from "components/is-visible/IsVisible.component";
import Button from "components/button/Button.component";
import Slider from "components/slider/Slider.component";
// CREATE POLL COMPONENTS
import EditImage from "../../components/edit-image/EditImage.component";
import ImageUploader from "../../components/image-uploader/ImageUploader.component";
import SliderItem from "../../components/slider-item/SliderItem.component";
// ACTIONS
import { setSelectedTabIndex } from "redux/common/common.actions";
import { changeStep2TabParam } from "redux/create-poll/create-poll.actions";
// SLICES
import { setGlobalMessage } from "redux/common/common.slice";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";

const StepTwoTab = () => {
  const {
    dispatch,
    reduxStore: { createPoll: createPollStore },
  } = useToolkit("createPoll");

  const {
    step2TabParams: { images },
  } = createPollStore;

  const onImageUpload = (files) => {
    const imagesNewList = [...images, ...files];

    if (imagesNewList.length <= 9) {
      dispatch(changeStep2TabParam("images", imagesNewList));
    } else {
      dispatch(setGlobalMessage({ severity: "error", text: "Max 9 images" }));
    }
  };

  const onImageRemove = (idx) => {
    const newImages = images.filter((image) => image.id !== idx);
    dispatch(changeStep2TabParam("images", newImages));
  };

  const onNextClick = (e) => {
    e.preventDefault();
    dispatch(setSelectedTabIndex(2));
  };

  const generateSliderItems = (images) => {
    return (
      images.length > 0 &&
      images.map((img) => {
        return {
          id: img?.id,
          item: (
            <SliderItem
              src={img.image}
              removable={true}
              onImageRemove={() => onImageRemove(img.id)}
            />
          ),
        };
      })
    );
  };

  // to fix slides to show bug of react-slick
  const slidesToShow =
    images.length >= 3 ? 3 : images.length <= 0 && images.length === 1 ? 1 : 1;

  return (
    <div className="step-two-tab">
      <h3>Choose the photos</h3>
      <EditImage />
      <IsVisible isVisible={images.length > 0}>
        <div className="step-two-tab__upload-block">
          <Slider
            items={generateSliderItems(images)}
            slidesToShow={slidesToShow}
            arrows={false}
          />
        </div>
      </IsVisible>
      <ImageUploader handleUpload={onImageUpload} />
      <div className="fy-flex__center">
        <Button type="submit" onClick={onNextClick}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default StepTwoTab;
