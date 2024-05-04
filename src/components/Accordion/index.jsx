import "./index.css";
import { useState } from "react";

function Accordion({ data }) {
  // index is a state variable and setIndex is the setter function.
  const [index, setIndex] = useState(null);

  const toggle = (i) => {
    // Si la valeur actuelle de index est égale à i, cela signifie que l'élément i est déjà ouvert
    if (index === i) {
      return setIndex(null);
    }
    // si la valeur actuelle de index est différente de i, cela signifie que l'élément i n'est pas ouvert, donc nous mettons à jour l'état index à i pour ouvrir
    setIndex(i);
  };

  return (
    <div className="accordion">
      {data.map((item, i) => (
        <div className="item" key={i}>
          <div className="title" onClick={() => toggle(i)}>
            <h2>{item.title}</h2>
            <span>
              {index === i ? (
                <i className="fa-solid fa-chevron-up"></i>
              ) : (
                <i className="fa-sharp fa-solid fa-chevron-down"></i>
              )}
            </span>
          </div>
          {/* Si index est égal à i, ajoutez la classe "show"  */}
          <ul className={index === i ? "content show" : "content"}>
            {Array.isArray(item.content) && item.content.length > 0 ? (
              item.content.map((content, i) => (
                <li className="equipement" key={i}>{content}</li>
              ))
            ) : (
              <p>{item.content}</p>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
