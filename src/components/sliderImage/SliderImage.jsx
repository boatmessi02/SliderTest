import React from "react";
import "./SliderImage.css";
const SliderImage = ({ sliderList, indexImage, setIndexImage }) => {
  const handleDots = (index) => {
    setIndexImage(index);
  };
  return (
    <>
      <div className="slideImage">
        {sliderList.map((slider, index) => (
          <div className="wrapperImageMapping">
            <div key={slider.id} className="coverAllImages">
              <img src={slider.url} alt="images" />
            </div>
            <div className="dots" onClick={() => handleDots(index)}>
              ●
            </div>
          </div>
        ))}
        <div className="coverImage">
          <img src={sliderList[indexImage].url} alt="imageSelected" />
        </div>
      </div>
    </>
  );
};

export default SliderImage;
