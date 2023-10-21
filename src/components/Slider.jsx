import { useEffect, useRef, useState } from "react";
import { getSlides } from "../stores/savedItems";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "../assets/partiels/slider.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { NavLink } from "react-router-dom";

function Slider() {
  const slides = useSelector(getSlides());

  const [slideNum, setSlideNum] = useState(0);
  const [nextActiveBtn, setNextActiveBtn] = useState("");
  const [prevActiveBtn, setPrevActiveBtn] = useState("");
  const [operation, setOperation] = useState("forward");
  const [isRunning, setIsRunning] = useState(1);

  useEffect(() => {
    if (isRunning === 1) {
      const interval = setInterval(() => {
        console.log(slideNum);
        console.log(slides.length * -1 + 2);
        if (slideNum <= slides.length * -1 + 2) {
          setOperation("backward");
        }
        if (slideNum >= -1) {
          setOperation("forward");
        }
        if (operation === "forward") {
          setSlideNum((prev) => prev - 1);
        } else {
          setSlideNum((prev) => prev + 1);
        }
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [operation, slideNum, isRunning]);

  const nextSlide = () => {
    if (slideNum > slides.length * -1 + 1) {
      setNextActiveBtn("");
      setPrevActiveBtn("");
      setSlideNum(slideNum - 1);
      setIsRunning(0);
      setTimeout(() => {
        setIsRunning(1);
      }, 3000);
    } else {
      setNextActiveBtn("end");
    }
    console.log(slideNum + "next");
  };

  const prevSlide = () => {
    if (slideNum < 0) {
      setPrevActiveBtn("");
      setNextActiveBtn("");
      setSlideNum(slideNum + 1);
      setIsRunning(0);
      setTimeout(() => {
        setIsRunning(1);
      }, 3000);
    } else {
      setPrevActiveBtn("end");
    }
    console.log(slideNum + "prev");
  };

  return (
    <div
      className="slider-container"
      style={{ "--slide": slideNum * 100 + "%" }}
    >
      <div className="images-slider">
        {slides.map((slide) => {
          return (
            <div className="image">
              <img src={slide.imageUrl} alt="slider" />
            </div>
          );
        })}
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
      <div className="info-slider">
        {slides.map((slide) => {
          return (
            <div className="info">
              <h2 className="title">{slide.title}</h2>
              <p className="subtitle">{slide.subtitle}</p>
              <NavLink to="/item">Discover</NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
