import { useEffect, useMemo, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CloseIcon from "@mui/icons-material/Close";

import "../assets/partiels/item-slider.scss";

function ItemSilder(props) {
  const slides = props.images;

  const [visibleSlide, setVisibleSlide] = useState(1);
  const [hasTransitionClass, setHasTransitionClass] = useState(true);
  const [stateSlides, setStateSlides] = useState(slides);
  const [leftAndRightDisabled, setLeftAndRightDisabled] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const slidesWithClones = [...slides];
    slidesWithClones.unshift(slidesWithClones[slidesWithClones.length - 1]);
    slidesWithClones.push(slidesWithClones[1]);
    setStateSlides(slidesWithClones);
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

  const conditionalMargin = useMemo(() => {
    if (props.large) {
      return screenWidth;
    } else {
      if (screenWidth <= 576) {
        return screenWidth - 30;
      } else if (screenWidth > 576 && screenWidth <= 768) {
        return 510;
      } else if (screenWidth > 768 && screenWidth <= 992) {
        return 690;
      } else if (screenWidth > 992 && screenWidth <= 1200) {
        return 600;
      } else {
        return 750;
      }
    }
  }, [screenWidth]);

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

  useEffect(() => {
    if (leftAndRightDisabled) {
      setTimeout(() => {
        setLeftAndRightDisabled(false);
      }, 1000);
    }
  }, [leftAndRightDisabled]);

  const slideLeftMargin = () => {
    return "-" + visibleSlide * conditionalMargin + "px";
  };

  const scrollLeft = () => {
    setVisibleSlide(visibleSlide - 1);
  };

  const scrollRight = () => {
    setVisibleSlide(visibleSlide + 1);
  };

  const slideIsActive = (index) => {
    return (
      index === visibleSlide ||
      (index === 1 && visibleSlide === stateSlides.length - 1) ||
      (index === stateSlides.length - 2 && visibleSlide === 0)
    );
  };

  return (
    <div className={"image-container " + props.class}>
      <div className={"image-slider " + props.class}>
        <div
          className={`scroll-right ${leftAndRightDisabled ? "disabled" : ""}`}
        >
          <ArrowForwardIosIcon
            onClick={!leftAndRightDisabled ? scrollRight : null}
            className={props.class}
          />
        </div>
        <div
          className={`scroll-left ${leftAndRightDisabled ? "disabled" : ""}`}
        >
          <ArrowBackIosNewIcon
            onClick={!leftAndRightDisabled ? scrollLeft : null}
            className={props.class}
          />
        </div>
        <div
          id="slides"
          className={`slides ${hasTransitionClass ? "transition " : ""}`}
          style={{ left: slideLeftMargin() }}
        >
          {stateSlides.map((slide, index) => {
            return (
              <div
                key={index}
                className="slide"
                style={{ width: conditionalMargin + "px" }}
              >
                <img
                  src={slide}
                  alt="slide"
                  className={"slide-inner " + props.class}
                  onClick={() => props.enlarge(true)}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className={"close-image " + props.class}>
        <CloseIcon onClick={() => props.enlarge(false)} />
      </div>
      <div className={"sub-images " + props.class}>
        {stateSlides.map((slide, index) => {
          if (index === 0 || index === stateSlides.length - 1) {
            return null;
          }
          return (
            <div
              key={index}
              className={`sub-image ${slideIsActive(index) ? "active" : ""}`}
              onClick={() => setVisibleSlide(index)}
            >
              <img src={slide} alt="sub-image" />
            </div>
          );
        })}
      </div>
      <div className={"imageNum " + props.class}>
        <p>
          {visibleSlide == 0
            ? stateSlides.length - 2
            : visibleSlide == stateSlides.length - 1
            ? 1
            : visibleSlide}{" "}
          of {stateSlides.length - 2}
        </p>
      </div>
    </div>
  );
}

export default ItemSilder;
