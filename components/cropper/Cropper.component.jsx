import React from "react";
import Cropper from "react-cropper";

const FyCropper = ({ selectedImage, setCropper }) => {
  return (
    <Cropper
      style={{
        height: "100%",
        width: "100%",
        maxHeight: "100%",
        maxWidth: "100%",
      }}
      zoomTo={0.5}
      initialAspectRatio={1}
      preview=".img-preview"
      src={selectedImage?.image}
      dragMode={"crop"}
      viewMode={1}
      minCropBoxHeight={10}
      minCropBoxWidth={10}
      background={false}
      responsive={true}
      autoCropArea={1}
      checkOrientation={true}
      onInitialized={(instance) => {
        setCropper(instance);
      }}
      guides={true}
      center={false}
    />
  );
};

export default FyCropper;
