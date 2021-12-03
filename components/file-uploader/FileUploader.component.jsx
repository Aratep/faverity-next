import React, { useState } from "react";

// IMAGES
import defaultAvatar from "assets/images/profile/avatar-default-icon.png";

const FileUploader = ({
  name = "avatar",
  id = "avatar",
  type = "file",
  image,
  accept = "image/*",
  onUpload = () => true,
}) => {
  const [avatar, setAvatar] = useState(() => (image ? image : defaultAvatar));

  const handleChange = (event) => {
    const files = event.target.files;

    onUpload();

    if (files.length > 0) {
      setAvatar(URL.createObjectURL(files[0]));
    }
  };

  return (
    <div className="file-uploader">
      <input
        accept={accept}
        type={type}
        name={name}
        id={id}
        onChange={handleChange}
      />
      <label htmlFor={id}>
        <img src={avatar} alt={name} className="file-uploader__preview" />
      </label>
      <div>Change photo</div>
    </div>
  );
};

export default FileUploader;
