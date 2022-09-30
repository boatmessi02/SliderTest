import React, { useRef } from "react";
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
  {
    url: "./images/Art.png",
    title: "6",
  },
];

const AppSlider = () => {
  const revalRef = useRef([]);
  revalRef.current = [];

  const handlePrevious = () => {
    let left = document.querySelector(".wrapperSlide");
    left.scrollBy(-550, 0);
  };

  const handleNext = () => {
    let right = document.querySelector(".wrapperSlide");
    right.scrollBy(550, 0);
  };

  const handleRef = (ref) => {
    if (ref && !revalRef.current.includes(ref)) {
      revalRef.current.push(ref);
    }
  };

  const handleScroll = (index) => {
    const itemRef = revalRef.current;
    itemRef.map((item, i) => {
      if (index === i) {
        item.scrollIntoView();
      }
    });
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
          <div className="wp">
            <div className="wrapper">
              <div className="icon">
                <FaAngleLeft onClick={handlePrevious} />
              </div>
              <div className="wrapperSlide">
                {sliderList.map((slider, index) => (
                  <div key={index} className="wrapperSlideImage">
                    <SliderImage
                      handleRef={handleRef}
                      sliderList={slider.url}
                    />
                  </div>
                ))}
              </div>
              <div className="icon">
                <FaAngleRight onClick={handleNext} />
              </div>
            </div>
            <div className="wrapperDot">
              {sliderList.map((slide, index) => (
                <div
                  key={index}
                  className="dots"
                  onClick={() => handleScroll(index)}
                >
                  <h1>●</h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppSlider;
