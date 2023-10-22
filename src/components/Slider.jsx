import { useEffect, useState, useRef } from "react";
import Slide from "../assets/img/slide.jpeg";
import "../assets/partiels/slider.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Slider() {
  const [currentSlideNum, setcurrentSlideNum] = useState(0);
  const [nextActiveBtn, setNextActiveBtn] = useState(true);
  const [prevActiveBtn, setPrevActiveBtn] = useState(false);
  const [operation, setOperation] = useState(0);
  useEffect(() => {
    const myInterval = setInterval(() => {
      if (currentSlideNum === -2) {
        setOperation(1);
      }
      if (currentSlideNum === -1) {
        setOperation(0);
      }
      if (operation === 0) {
        setcurrentSlideNum((prev) => prev - 1);
        console.log(operation, currentSlideNum);
      } else {
        setcurrentSlideNum((prev) => prev + 1);
        console.log(operation, currentSlideNum);
      }
    }, 3000);
    return () => clearInterval(myInterval);
  }, []);

  const nextSlide = () => {
    if (currentSlideNum > -9) {
      setNextActiveBtn("");
      setPrevActiveBtn("");
      setcurrentSlideNum(currentSlideNum - 1);
    } else {
      setNextActiveBtn("end");
    }
  };

  const prevSlide = () => {
    if (currentSlideNum < 0) {
      setPrevActiveBtn("");
      setNextActiveBtn("");
      setcurrentSlideNum(currentSlideNum + 1);
    } else {
      setPrevActiveBtn("end");
    }
  };

  return (
    <div
      className="slider-container"
      style={{ "--slide": currentSlideNum * 100 + "%" }}
    >
      <div className="images-slider">
        <div className="image">
          <img
            src="https://dummyimage.com/600x400/000/fff
"
            alt="slider-image"
          />
        </div>
        <div className="image">
          <img
            src="https://dummyimage.com/600x400/000/fff
"
            alt="slider-image"
          />
        </div>
        <div className="image">
          <img
            src="https://dummyimage.com/600x400/000/fff
"
            alt="slider-image"
          />
        </div>
        <div className="image">
          <img
            src="https://dummyimage.com/600x400/000/fff
"
            alt="slider-image"
          />
        </div>
      </div>
      <div className="next-btn">
        <ArrowForwardIosIcon
          className={nextActiveBtn}
          onClick={() => nextSlide()}
        />
      </div>
      <div className="prev-btn">
        <ArrowBackIosNewIcon
          className={prevActiveBtn}
          onClick={() => prevSlide()}
        />
      </div>
    </div>
  );
}

export default Slider;
