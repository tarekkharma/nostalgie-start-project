import { useEffect, useMemo, useState, useRef } from "react";
import { getSlides } from "../stores/store";
import { useSelector } from "react-redux/es/hooks/useSelector";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "../assets/partiels/home-slider.scss";

function HomeSlider() {
  const slides = useSelector(getSlides());

  const [visibleSlide, setVisibleSlide] = useState(1);
  const [hasTransitionClass, setHasTransitionClass] = useState(true);
  const [stateSlides, setStateSlides] = useState(slides);
  const [leftAndRightDisabled, setLeftAndRightDisabled] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const intervalId = useRef(null);

  useEffect(() => {
    const slidesWithClones = [...slides];
    slidesWithClones.unshift(slidesWithClones[slidesWithClones.length - 1]);
    slidesWithClones.push(slidesWithClones[1]);
    setStateSlides(slidesWithClones);
    startScroll();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(() => {
        return window.innerWidth;
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (visibleSlide == stateSlides.length - 1) {
      setLeftAndRightDisabled(true);
      setTimeout(() => {
        setHasTransitionClass(false);
        setVisibleSlide(1);
      }, 500);
    }

    if (visibleSlide === 1) {
      setTimeout(() => {
        setHasTransitionClass(true);
      }, 500);
    }

    if (visibleSlide === 0) {
      setLeftAndRightDisabled(true);
      setTimeout(() => {
        setHasTransitionClass(false);
        setVisibleSlide(stateSlides.length - 2);
      }, 500);
    }

    if (visibleSlide == stateSlides.length - 2) {
      setTimeout(() => {
        setHasTransitionClass(true);
      }, 500);
    }
  }, [visibleSlide]);

  const startScroll = () => {
    if (intervalId.current != null) {
      return;
    }
    intervalId.current = setInterval(() => {
      setVisibleSlide((prevVisibleSlide) => {
        return prevVisibleSlide + 1;
      });
    }, 3000);
  };

  const stopScroll = () => {
    clearInterval(intervalId.current);
  };

  useEffect(() => {
    if (leftAndRightDisabled) {
      setTimeout(() => {
        setLeftAndRightDisabled(false);
      }, 1000);
    }
  }, [leftAndRightDisabled]);

  const slideLeftMargin = () => {
    return "-" + visibleSlide * screenWidth + "px";
  };

  const scrollLeft = () => {
    setVisibleSlide(visibleSlide - 1);
    stopScroll();
  };

  const scrollRight = () => {
    setVisibleSlide(visibleSlide + 1);
    stopScroll();
  };

  return (
    <div
      className="home-slider-container"
      style={{ width: screenWidth + "px" }}
    >
      <div className="home-slider">
        <div
          className={`right-arrow ${leftAndRightDisabled ? "disabled" : ""}`}
        >
          <ArrowForwardIosIcon
            onClick={!leftAndRightDisabled ? scrollRight : null}
          />
        </div>
        <div className={`left-arrow ${leftAndRightDisabled ? "disabled" : ""}`}>
          <ArrowBackIosNewIcon
            onClick={!leftAndRightDisabled ? scrollLeft : null}
          />
        </div>
        <div
          id="slides"
          className={`home-slides ${hasTransitionClass ? "transition" : ""}`}
          style={{ left: slideLeftMargin() }}
        >
          {stateSlides.map((slide, index) => {
            return (
              <div
                key={index}
                className="slide-container"
                style={{ width: screenWidth + "px" }}
              >
                <img src={slide.imageUrl} alt="slide" className="slide-image" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeSlider;
