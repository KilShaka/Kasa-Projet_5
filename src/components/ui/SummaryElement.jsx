import React, { useState, useRef, useEffect } from "react";
import arrowUp from "../../assets/images/icons/arrow-up.svg";

function SummaryElement({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const detailsRef = useRef(null);

  const toggleOpen = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (detailsRef.current) {
      detailsRef.current.open = isOpen;
    }
  }, [isOpen]);

  return (
    <div className="summary-container">
      <details
        ref={detailsRef}
        className={`summary ${isOpen ? "is-open" : ""}`}
      >
        <summary className="summary__title" onClick={toggleOpen}>
          {title}
          <img
            src={arrowUp}
            alt={isOpen ? "Fermer" : "Ouvrir"}
            className="summary__arrow"
          />
        </summary>
        <div className="summary__content">{content}</div>
      </details>
    </div>
  );
}

export default SummaryElement;
