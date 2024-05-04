import "./index.css";
import { Link } from "react-router-dom";

function Card({ card }) {
  return (
    <Link to={`/logement/${card.id}`} className="card">
      <img src={card.cover} alt={card.title} />
      <h2>{card.title}</h2>
    </Link>
  );
}

export default Card;
