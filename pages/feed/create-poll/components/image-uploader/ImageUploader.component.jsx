import React from "react";

// BASE COMPONENTS
import Image from "components/image/Image.component";
// IMAGES
import addPhotoIcon from "assets/images/feed/add-photo-icon.svg";
// UTILITIES
import { generateUID } from "utilities/helper-functions";

const ImageUploader = ({
  name = "photo",
  id = "photo",
  type = "file",
  accept = "image/*",
  handleUpload,
  multiple = true,
}) => {
  const handleChange = (event) => {
    const files = event.target.files;

    if (files.length > 0) {
      const filesList = Array.from(files).map((file) => {
        return {
          id: generateUID(),
          image: URL.createObjectURL(file),
          file: file,
        };
      });
      const uniqueFilesList = new Set(filesList);
      handleUpload(uniqueFilesList);
    }
  };

  return (
    <div className="image-uploader">
      <input
        accept={accept}
        type={type}
        name={name}
        id={id}
        onChange={handleChange}
        multiple={multiple}
      />
      <label htmlFor={id}>
        <Image
          src={addPhotoIcon.src}
          alt={name}
          className="image-uploader__preview"
        />
      </label>
    </div>
  );
};

export default ImageUploader;
