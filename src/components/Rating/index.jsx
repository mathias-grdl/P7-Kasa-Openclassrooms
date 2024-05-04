import "./index.css";

function Rating({ rating }) {

// Crée un tableau contenant les notes possibles de 1 à 5.
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="stars">
      {stars.map((star, i) => (
        //  Si la note est inférieure ou égale à la valeur de "rating" = class="active", sinon class="inactive"
        <span key={i} className={rating >= star ? "active" : "inactive"}>
          <i className="fa-solid fa-star"></i>
        </span>
      ))}
    </div>
  );
}

export default Rating;