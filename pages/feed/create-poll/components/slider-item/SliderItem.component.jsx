import React from "react";

// BASE COMPONENTS
import Image from "components/image/Image.component";

const SliderItem = ({ src, onClick, removable = false, onImageRemove }) => {
  return (
    <div className="slider-preview-item">
      <Image
        src={src}
        alt={src}
        onClick={onClick}
        removable={removable}
        onImageRemove={onImageRemove}
      />
    </div>
  );
};

export default SliderItem;
