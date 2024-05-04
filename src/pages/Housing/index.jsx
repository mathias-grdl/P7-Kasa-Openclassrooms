import Accordion from "../../components/Accordion";
import Profil from "../../components/Profil";
import Rating from "../../components/Rating";
import Slider from "../../components/Slider";
import Tags from "../../components/Tags";
import { Navigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./index.css";

function Housing() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3000/data.json");

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données.");
      }

      const jsonData = await response.json();

      setData(jsonData);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  const housing = data && data.find((housing) => housing.id === id);
  if (!housing) {
    return <Navigate to="*" />;
  }

  const dataDescription = [
    {
      title: "Description",
      content: housing.description,
    },
  ];

  const dataEquipments = [
    {
      title: "Équipements",
      content: housing.equipments,
    },
  ];

  return (
    <div className="housing">
      <Slider slides={housing.pictures} />
      <div className="housingInfo">
        <div className="housingTitle">
          <h1>{housing.title}</h1>
          <p>{housing.location}</p>
          <Tags tags={housing.tags} />
        </div>

        <div className="housingProfil">
          <Profil name={housing.host.name} picture={housing.host.picture} />
          <Rating rating={housing.rating} />
        </div>
      </div>
      <div className="housingAccordionContainer">
        <div className="housingAccordion">
          <Accordion data={dataDescription} />
        </div>
        <div className="housingAccordion">
          <Accordion data={dataEquipments} />
        </div>
      </div>
    </div>
  );
}

export default Housing;
