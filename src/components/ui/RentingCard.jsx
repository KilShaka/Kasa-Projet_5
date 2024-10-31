import { Link } from "react-router-dom";
import React, { useState } from "react";

function RentingCard({ location }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link to={`/renting/${location.id}`} className="rentings-card">
      <div className="rentings-card__image-container">
        <img
          src={location.cover}
          alt={location.title}
          onLoad={() => setImageLoaded(true)}
        />
        {imageLoaded && (
          <h3 className="rentings-card__title">{location.title}</h3>
        )}
      </div>
    </Link>
  );
}

export default RentingCard;
