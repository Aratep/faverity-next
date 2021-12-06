import React, { useState } from "react";

// BASE COMPONENTS
import IsVisible from "components/is-visible/IsVisible.component";
import Image from "components/image/Image.component";
import Slider from "components/slider/Slider.component";
import Cropper from "components/cropper/Cropper.component";
// EFFECTS
import useToolkit from "effects/useToolkit.effect";
// ACTIONS
import { changeStep2TabParam } from "redux/create-poll/create-poll.actions";
// SLICES
import { setGlobalMessage } from "redux/common/common.slice";
// IMAGES
import cameraIcon from "assets/images/feed/camera-icon.svg";
import checkmarkIcon from "assets/images/feed/checkmark-icon.svg";
// CROPPER STYLES
import "cropperjs/dist/cropper.css";

const EditImage = ({ selectedImage, hasEditButton = false }) => {
  const {
    dispatch,
    reduxStore: { createPoll: createPollStore },
  } = useToolkit("createPoll");

  const {
    step2TabParams: { images },
  } = createPollStore;

  const [cropper, setCropper] = useState("");

  const getCropData = () => {
    if (typeof cropper !== "undefined" && selectedImage) {
      // edit selected image
      const editedImage = {
        ...selectedImage,
        image: cropper.getCroppedCanvas().toDataURL(),
      };

      // generate new list by removing edited image object from list
      // and adding new edited image
      const imagesNewList = [
        ...images.filter((img) => img.id !== editedImage.id),
        editedImage,
      ];

      dispatch(changeStep2TabParam("images", imagesNewList));
      dispatch(setGlobalMessage({ severity: "success", text: "Photo edited" }));
    }
  };

  const generateSliderItems = (images) => {
    return (
      images.length > 0 &&
      images.map((data) => {
        return { id: data?.id, item: <Image src={data.image} alt={data.id} /> };
      })
    );
  };

  return (
    <div className="edit-image">
      <IsVisible isVisible={hasEditButton}>
        <div className="edit-image__heading">
          <div className="edit-image__heading-checkmark">
            <Image src={checkmarkIcon.src} onClick={getCropData} />
          </div>
        </div>
      </IsVisible>
      <div className="edit-image__camera-block">
        <IsVisible isVisible={images.length === 0}>
          <div className="edit-image__camera-block__camera">
            <Image src={cameraIcon.src} />
          </div>
        </IsVisible>
        <IsVisible isVisible={images.length > 0 && !selectedImage?.image}>
          <div className="edit-image__camera-block__slider">
            <Slider items={generateSliderItems(images)} arrows={false} />
          </div>
        </IsVisible>
        <IsVisible isVisible={selectedImage?.image}>
          <Cropper
            selectedImage={selectedImage}
            setCropper={(instance) => setCropper(instance)}
          />
        </IsVisible>
      </div>
    </div>
  );
};

export default EditImage;
