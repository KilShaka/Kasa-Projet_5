import chevronRight from "../../assets/images/icons/chevron-right.svg";
import chevronLeft from "../../assets/images/icons/chevron-left.svg";

function Chevron({ direction = "right", onClick }) {
  const isRight = direction === "right";

  return (
    <button
      onClick={onClick}
      className={`chevron chevron-${direction}`}
      aria-label={isRight ? "Prochaine image" : "Image précédente"}
    >
      <img
        src={isRight ? chevronRight : chevronLeft}
        alt={isRight ? "Flèche droite" : "Flèche gauche"}
      />
    </button>
  );
}

export default Chevron;
