import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchRentalListing } from "../services/api";
import Collapse from "../components/ui/Collapse";
import Banner from "../components/ui/Banner";
import Tag from "../components/ui/Tag";
import starActive from "../assets/images/icons/star-active.svg";
import starInactive from "../assets/images/icons/star-inactive.svg";

function RentingPage() {
  // ON RECUPERE L'ID DE L'URL GRACE A USEPARAMS
  const { id } = useParams();

  // ON STOCKE LA REDIRECTION DANS LA VARIABLE NAVIGATE
  const navigate = useNavigate();
  // STATE
  const [renting, setRenting] = useState(null);

  // ON CHARGE LES DONNEES DE LOCATION AU MONTAGE DU COMPOSANT
  useEffect(() => {
    const loadRenting = async () => {
      try {
        const data = await fetchRentalListing();
        const selectedRenting = data.find((item) => item.id === id);
        if (!selectedRenting) {
          navigate("/error");
          // MISE A JOUR DU STATE
        } else {
          setRenting(selectedRenting);
        }
      } catch (error) {
        console.error("Échec du chargement des détails de la location:", error);
      }
    };

    loadRenting();
  }, [id, navigate]); // A CHAQUE CHANGEMENT DE L'ID L'EFFET SE DECLENCHE + CONVENTION REACT = inclure les dépendances externes utilisées dans l'effet pour éviter les bugs

  // MESSAGE D'ERREUR
  if (!renting) {
    return <div>Chargement en cours...</div>;
  }

  // RENDER
  return (
    <div className="renting-page">
      <Banner images={renting.pictures} isCarousel={true} />

      {/* LES INFOS DU LOGEMENTS */}
      <div className="rentingInfo-wrapper">
        <div className="tag-and-title-container">
          <h2 className="renting__title">{renting.title}</h2>
          <figcaption className="renting__figcaption">
            {renting.location}
          </figcaption>

          {/* LES TAGS */}
          <div className="tag-container">
            {renting.tags.map((tag, index) => (
              <Tag key={index} tagContent={tag} />
            ))}
          </div>
        </div>
        <div className="host-and-stars-container">
          <div className="host-name-and-picture-container">
            {/* NOM DE lHOTE AVEC SAUT DE LIGNE */}
            <p className="host-name">
              {renting.host.name.split(" ").map((namePart, index) => (
                <span key={index} className={index !== 0 ? "move-down" : ""}>
                  {namePart}
                </span>
              ))}
            </p>

            {/* IMAGE DE L'HOTE */}
            <img
              src={renting.host.picture}
              className="host-picture"
              alt={renting.host.name}
            />
          </div>

          {/* ETOILES DE NOTATION */}
          <div className="stars">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src={
                  index < parseInt(renting.rating) ? starActive : starInactive
                }
                alt={
                  index < parseInt(renting.rating)
                    ? "étoile active"
                    : "étoile inactive"
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* DESCRIPTION ET EQUIPEMENTS */}
      <div className="collapse-wrapper">
        <Collapse title="Description" content={renting.description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {renting.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default RentingPage;
