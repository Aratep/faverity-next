import React from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";

// BASE COMPONENTS
import IsVisible from "components/is-visible/IsVisible.component";

const Image = ({
  src,
  alt = "icon",
  imgClassName,
  hasLink = false,
  link = "/",
  removable = false,
  onImageRemove,
  ...rest
}) => {
  const onCloseClick = () => {
    onImageRemove();
  };

  return (
    <>
      <IsVisible isVisible={hasLink}>
        <Link href={link}>
          <img src={src} alt={alt} className={imgClassName} {...rest} />
        </Link>
      </IsVisible>
      <IsVisible isVisible={!hasLink}>
        <div className="image-component">
          <IsVisible isVisible={removable}>
            <div className="image-component__close-btn" onClick={onCloseClick}>
              X
            </div>
          </IsVisible>
          <img src={src} alt={alt} className={imgClassName} {...rest} />
        </div>
      </IsVisible>
    </>
  );
};

export default Image;
