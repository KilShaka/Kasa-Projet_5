import React, { useState } from "react";
import Chevron from "./Chevron";

function Banner({ text, backgroundImage, images, isCarousel = false }) {
  // STATE
  const [indexActuel, setIndexActuel] = useState(0);

  // LOGIQUE
  const next = () => {
    if (images && images.length > 1) {
      setIndexActuel((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prev = () => {
    if (images && images.length > 1) {
      setIndexActuel((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    }
  };

  // RENDER
  if (!isCarousel) {
    return (
      <div
        className="banner"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {text}
      </div>
    );
  }

  if (isCarousel && images && images.length > 0) {
    return (
      <div className="banner banner-carousel">
        <img src={images[indexActuel]} alt={`Slide ${indexActuel + 1}`} />
        {images.length > 1 && (
          <>
            <Chevron direction="left" onClick={prev} />
            <Chevron direction="right" onClick={next} />
            <div className="slide-counter">
              {indexActuel + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    );
  }

  // Fallback si isCarousel est true mais qu'il n'y a pas d'images
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {text}
    </div>
  );
}

export default Banner;
