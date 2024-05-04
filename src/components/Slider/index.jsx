import "./index.css";
import { useState } from "react";

function Slider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    setCurrentSlide(() =>
      // Si dernière slide, revenir à la première, sinon passer à la suivante
      currentSlide === slides.length - 1 ? 0 : currentSlide + 1
    );
  }

  function prevSlide() {
    setCurrentSlide(() =>
      // Si première slide, passer à la dernière, sinon passer à la précédente
      currentSlide === 0 ? slides.length - 1 : currentSlide - 1
    );
  }

  return (
    <div className="slider">
      <div className="containerImg">
        <img src={slides[currentSlide]} alt={[currentSlide]} />
      </div>

      {/* && signifie que le code entre les parenthèses sera rendu si la condition slides.length !== 1 est vraie */}
      {slides.length !== 1 && (
        <p onClick={prevSlide} className="prev-slide">
          <i className="fa-solid fa-chevron-left"></i>
        </p>
      )}

      {slides.length !== 1 && (
        <p onClick={nextSlide} className="next-slide">
          <i className="fa-solid fa-chevron-right"></i>
        </p>
      )}

      <p className="counter">
        {currentSlide + 1}/{slides.length}
      </p>
    </div>
  );
}

export default Slider;
