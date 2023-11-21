import { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "../assets/partiels/item-slider.scss";

function ItemSilder(props) {
  const slides = props.images;

  const [visibleSlide, setVisibleSlide] = useState(1);
  const [hasTransitionClass, setHasTransitionClass] = useState(true);
  const [stateSlides, setStateSlides] = useState(slides);
  const [leftAndRightDisabled, setLeftAndRightDisabled] = useState(false);

  useEffect(() => {
    const slidesWithClones = [...slides];
    slidesWithClones.unshift(slidesWithClones[slidesWithClones.length - 1]);
    slidesWithClones.push(slidesWithClones[1]);
    setStateSlides(slidesWithClones);
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

  useEffect(() => {
    if (leftAndRightDisabled) {
      setTimeout(() => {
        setLeftAndRightDisabled(false);
      }, 1000);
    }
  }, [leftAndRightDisabled]);

  const slideLeftMargin = () => {
    return "-" + visibleSlide * 600 + "px";
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
    <div className="image-container">
      <div className="image-slider">
        <div
          className={`scroll-right ${leftAndRightDisabled ? "disabled" : ""}`}
        >
          <ArrowForwardIosIcon
            onClick={!leftAndRightDisabled ? scrollRight : null}
          />
        </div>
        <div
          className={`scroll-left ${leftAndRightDisabled ? "disabled" : ""}`}
        >
          <ArrowBackIosNewIcon
            onClick={!leftAndRightDisabled ? scrollLeft : null}
          />
        </div>
        <div
          id="slides"
          className={`slides ${hasTransitionClass ? "transition" : ""}`}
          style={{ left: slideLeftMargin() }}
        >
          {stateSlides.map((slide, index) => {
            return (
              <div key={index} className="slide">
                <img src={slide} alt="slide" className="slide-inner" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="sub-images">
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
    </div>
  );
}

export default ItemSilder;
