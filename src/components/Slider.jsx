import { useEffect, useState, useRef } from "react";
import Slide from "../assets/img/slide.jpeg";
import "../assets/partiels/slider.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Slider() {
  const [slideNum, setSlideNum] = useState(0);
  const [nextActiveBtn, setNextActiveBtn] = useState("");
  const [prevActiveBtn, setPrevActiveBtn] = useState("end");
  const [operation, setOperation] = useState(0);
  useEffect(() => {
    const myInterval = setInterval(() => {
      if (slideNum === -8) {
        setOperation(1);
      }
      if (slideNum === -1) {
        setOperation(0);
      }
      if (operation === 0) {
        setSlideNum((prev) => prev - 1);
        console.log(operation, slideNum);
      } else {
        setSlideNum((prev) => prev + 1);
        console.log(operation, slideNum);
      }
    }, 3000);
    return () => clearInterval(myInterval);
  }, [operation, slideNum]);

  const nextSlide = () => {
    if (slideNum > -9) {
      setNextActiveBtn("");
      setPrevActiveBtn("");
      setSlideNum(slideNum - 1);
    } else {
      setNextActiveBtn("end");
    }
  };

  const prevSlide = () => {
    if (slideNum < 0) {
      setPrevActiveBtn("");
      setNextActiveBtn("");
      setSlideNum(slideNum + 1);
    } else {
      setPrevActiveBtn("end");
    }
  };

  return (
    <div
      className="slider-container"
      style={{ "--slide": slideNum * 100 + "%" }}
    >
      <div className="images-slider">
        <div className="image">
          <img src={Slide} alt="slider-image" />
        </div>
        <div className="image">
          <img src={Slide} alt="slider-image" />
        </div>
        <div className="image">
          <img src={Slide} alt="slider-image" />
        </div>
        <div className="image">
          <img src={Slide} alt="slider-image" />
        </div>
        <div className="image">
          <img src={Slide} alt="slider-image" />
        </div>
        <div className="image">
          <img src={Slide} alt="slider-image" />
        </div>
        <div className="image">
          <img src={Slide} alt="slider-image" />
        </div>
        <div className="image">
          <img src={Slide} alt="slider-image" />
        </div>
        <div className="image">
          <img src={Slide} alt="slider-image" />
        </div>
        <div className="image">
          <img src={Slide} alt="slider-image" />
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
