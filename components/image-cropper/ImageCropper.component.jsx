import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";

// GET CROPPED IMAGE
import getCroppedImg from "./cropImage";

const ImageCropper = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState({
    width: 1000,
    height: 1000,
    x: 456,
    y: 0,
  });
  const [croppedImage, setCroppedImage] = useState(null);

  console.log(croppedAreaPixels);

  const onCropChange = (e) => {
    setCrop(e);
    showCroppedImage();
  };

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        dogImg,
        croppedAreaPixels,
        rotation
      );
      console.log("donee", { croppedImage });
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, rotation]);

  const onCropComplete = useCallback(
    (croppedArea, croppedAreaPixels) => {
      setCroppedAreaPixels(croppedAreaPixels);
      // showCroppedImage();
    },
    //eslint-disable-next-line
    []
  );

  const dogImg =
    "https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000";

  console.log(croppedImage);

  return (
    <div className="ooooooooooooooooooooooooo">
      <Cropper
        image={dogImg}
        crop={crop}
        rotation={rotation}
        zoom={zoom}
        aspect={4 / 4}
        onCropChange={(e) => onCropChange(e)}
        onRotationChange={setRotation}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
      <button onClick={showCroppedImage}>show</button>
      <img src={croppedImage} alt="dfsf" />
    </div>
  );
};

export default ImageCropper;
