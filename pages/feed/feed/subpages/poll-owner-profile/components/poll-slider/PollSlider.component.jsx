import React from "react";

// BASE COMPONENTS
import Slider from "components/slider/Slider.component";

const PollSlider = ({ images }) => (
  <div className="poll-slider">
    <Slider items={images} arrows={false} slidesToShow={2} />
  </div>
);

export default PollSlider;
