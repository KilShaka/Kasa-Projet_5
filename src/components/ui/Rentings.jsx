import { fetchRentalListing } from "../../services/api";
import React, { useState, useEffect } from "react";

function Rentings() {
  // STATE
  const [rentings, setRentings] = useState([]);

  // LOGIQUE
  useEffect(() => {
    const loadRentings = async () => {
      try {
        const data = await fetchRentalListing();
        setRentings(data);
      } catch (error) {
        console.error("Echec lors du chargement des locations:", error);
      }
    };

    loadRentings();
  }, []);

  // RENDER
  return (
    <div className="rentings-wrapper">
      {rentings.map((location) => (
        <div key={location.id} className="rentings-card">
          <div className="rentings-card__image-container">
            <img src={location.cover} alt={location.title} />
            <h3 className="rentings-card__title">{location.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rentings;
