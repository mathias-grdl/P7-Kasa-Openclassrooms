import { useState, useEffect } from "react";
import "./index.css";
import Card from "../../components/Card";

function Cards() {
  // Stocker les données de l'API. La valeur initiale de useState est un tableau vide
  const [data, setData] = useState(null);

  // Fonction asynchrone pour récupérer les données
  const getData = async () => {
    try {
      // Effectue une requête pour récupérer le fichier JSON
      const response = await fetch("http://localhost:3000/data.json");

      if (!response.ok) {
        //.ok est une propriété booléenne de l'objet Response
        throw new Error("Erreur lors de la récupération des données.");
      }

      const jsonData = await response.json(); //Extrait les données JSON de la réponse

      setData(jsonData); // Met à jour l'état avec les données récupérées
    } catch (error) {
      console.error(error);
    }
  };

  // Execute getData() au chargement de la page.
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="cards">
      {data &&
        data.length > 0 &&
        data.map((dataCard, i) => <Card card={dataCard} key={i} />)}
    </div>
  );
}

export default Cards;
