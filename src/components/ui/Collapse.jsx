import React, { useState } from "react";
import arrowUp from "../../assets/images/icons/arrow-up.svg";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className={`collapse ${isOpen ? "is-open" : ""}`}>
        <div className="collapse__title">
          {title}
          <img
            src={arrowUp}
            alt={isOpen ? "Fermer" : "Ouvrir"}
            className="collapse__arrow"
            onClick={toggleOpen}
          />
        </div>
        <div className="collapse__content">{content}</div>
      </div>
    </div>
  );
}

export default Collapse;
