import React, { useState } from "react";
import "./appSlider.css";
import Typewriter from "typewriter-effect";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import SliderImage from "./components/sliderImage/SliderImage";
const sliderList = [
  {
    url: "./images/Genshin.png",
    title: "1",
  },
  {
    url: "./images/ape.jpg",
    title: "2",
  },
  {
    url: "./images/AZUKI.png",
    title: "3",
  },
  {
    url: "./images/Nerd.png",
    title: "4",
  },
  {
    url: "./images/พี่เหยิน.jpg",
    title: "5",
  },
];

const AppSlider = () => {
  const [indexImage, setIndexImage] = useState(0);

  const handlePrevious = () => {
    const slideImage = indexImage === 0;
    const newImage = slideImage ? sliderList.length - 1 : indexImage - 1;
    setIndexImage(newImage);
  };

  const handleNext = () => {
    const slideImage = indexImage === sliderList.length - 1;
    const newImage = slideImage ? 0 : indexImage + 1;
    setIndexImage(newImage);
  };

  return (
    <>
      <div className="section">
        <div className="container">

          {/* Introduce */}
          <div className="wrapperIntroduce">
            <Typewriter
              options={{
                delay: 50,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    "สวัสดีครับ ผมนายธีรภัทร์ จันทร์ชื่น เป็นคนน่ารัก ):"
                  )
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
                typewriter
                  .typeString(
                    "ผมชอบเด็กดีครับเพราะเป็นเด็กดีแล้วผู้ใหญ่จะรักและเอ็นดู."
                  )
                  .pauseFor(5000)
                  .start();
              }}
            />
            <img
              src="./images/boateiei.jpg"
              alt="profile"
              width={150}
              height={150}
            />
            <p className="textRole">Front-end Developer — Intern</p>
            <p>การบ้านที่ต้องส่ง</p>
          </div>

          {/* Slider */}
          
          <div className="WrapperSlide">
            <div className="icon">
              <FaAngleLeft onClick={handlePrevious} />
            </div>
            <div className="wrapperSlideImage">
              <SliderImage sliderList={sliderList} indexImage={indexImage} setIndexImage={setIndexImage} />
            </div>
            <div className="icon">
              <FaAngleRight onClick={handleNext} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppSlider;
