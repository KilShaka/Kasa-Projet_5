import { Link } from "react-router-dom";
import { fetchRentalListing } from "../../services/api";
import React, { useState, useEffect } from "react";
import RentingCard from "./RentingCard";

function Rentings() {
  // STATE
  const [rentings, setRentings] = useState(null);
  const [loading, setLoading] = useState(true);

  // LOGIQUE
  useEffect(() => {
    const loadRentings = async () => {
      try {
        const data = await fetchRentalListing();
        setRentings(data);
      } catch (error) {
        console.error("Echec lors du chargement des locations:", error);
      } finally {
        setLoading(false);
      }
    };

    loadRentings();
  }, []);

  // RENDER
  if (loading)
    return (
      <div className="rentings-wrapper">
        <div>Chargement en cours...</div>
      </div>
    );
  return (
    <div className="rentings-wrapper">
      {rentings.map((location) => (
        <RentingCard key={location.id} location={location} />
      ))}
    </div>
  );
}

export default Rentings;
