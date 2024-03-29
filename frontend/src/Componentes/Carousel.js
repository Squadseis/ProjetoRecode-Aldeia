import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className={`carousel-item ${currentIndex === 0 ? 'active' : ''}`} data-bs-interval="2000">
          <img src="/Imagem/Anuncio/anuncio1.png" className="d-block w-100" alt="Anúncio 1" />
        </div>
        <div className={`carousel-item ${currentIndex === 1 ? 'active' : ''}`} data-bs-interval="2000">
          <img src="/Imagem/Anuncio/anuncio2.png" className="d-block w-100" alt="Anúncio 2" />
        </div>
        <div className={`carousel-item ${currentIndex === 2 ? 'active' : ''}`} data-bs-interval="2000">
          <img src="/Imagem/Anuncio/anuncio3.png" className="d-block w-100" alt="Anúncio 3" />
        </div>
        <div className={`carousel-item ${currentIndex === 3 ? 'active' : ''}`} data-bs-interval="2000">
          <img src="/Imagem/Anuncio/anuncio4.png" className="d-block w-100" alt="Anúncio 4" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
        onClick={() => goToIndex((currentIndex - 1 + 4) % 4)}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
        onClick={() => goToIndex((currentIndex + 1) % 4)}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
