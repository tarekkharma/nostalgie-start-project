import { useEffect, useMemo, useState } from "react";
import { getSlides } from "../stores/store";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "../assets/partiels/slider.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { NavLink } from "react-router-dom";

function Slider() {
  const slides = useSelector(getSlides());

  const [slideNum, setSlideNum] = useState(0);
  const [operation, setOperation] = useState("forward");
  const [isRunning, setIsRunning] = useState(1);

  useEffect(() => {
    if (isRunning === 1) {
      const interval = setInterval(() => {
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
  }, [operation, slideNum, isRunning, slides.length]);

  const nextSlide = () => {
    if (slideNum > slides.length * -1 + 1) {
      setSlideNum(slideNum - 1);
      setIsRunning(0);
    } else {
      setSlideNum(0);
    }
  };

  const prevSlide = () => {
    if (slideNum < 0) {
      setSlideNum(slideNum + 1);
      setIsRunning(0);
    } else {
      setSlideNum(-(slides.length - 1));
    }
  };

  const newSlides = useMemo(() => {
    return slides.map((slide, index) => {
      return (
        <div className={`image ${-slideNum === index ? "shown" : "hidden"}`}>
          <img src={slide.imageUrl} alt="slider" />
        </div>
      );
    });
  }, [slideNum, slides]);

  const newCaptions = useMemo(() => {
    return slides.map((slide, index) => {
      return (
        <div className={`info ${-slideNum === index ? "shown" : "hidden"}`}>
          <h2 className="title">{slide.title}</h2>
          <p className="subtitle">{slide.subtitle}</p>
          <NavLink to="/item">Discover</NavLink>
        </div>
      );
    });
  }, [slideNum, slides]);

  return (
    <div
      className="slider-container"
      style={{ "--slide": slideNum * 100 + "%" }}
    >
      <div className="images-slider">{newSlides}</div>
      <div className="next-btn">
        <ArrowForwardIosIcon onClick={() => nextSlide()} />
      </div>
      <div className="prev-btn">
        <ArrowBackIosNewIcon onClick={() => prevSlide()} />
      </div>
      <div className="info-slider">{newCaptions}</div>
    </div>
  );
}

export default Slider;
