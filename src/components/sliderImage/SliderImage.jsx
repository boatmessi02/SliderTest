import React from "react";
import "./SliderImage.css";
const SliderImage = (props) => {
  return (
    <>
      <div ref={props.handleRef} className="childSlide">
        <img src={props.sliderList} alt="images" />
      </div>
    </>
  );
};

export default SliderImage;
