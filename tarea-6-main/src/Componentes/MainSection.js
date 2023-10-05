import React, { useState } from 'react';
import '../style.css';
import imgjose from '../Imagenes/jose.jpeg';
import imgisa from '../Imagenes/isa2.png';
import imgfrancisco from '../Imagenes/francisco.jpeg';

function MainSection() {
  const [zoomedImg, setZoomedImg] = useState(null);

  const handleImageClick = (imgSrc) => {
    setZoomedImg(imgSrc);
  };

  const closeZoomedImage = () => {
    setZoomedImg(null);
  };

  return (
    <main className="main">
      <h2 className="titlenames">Integrantes del equipo</h2>
      <div className="names">
        <section className="name">
          <div className="img-name" onClick={() => handleImageClick(imgjose)}>
            <img src={imgjose} alt="foto-jose" />
          </div>
          <h3>José        Aguilera</h3>
          <p>Ingeniería Civil Industrial - Informática</p>
        </section>

        <section className="name">
          <div className="img-name" onClick={() => handleImageClick(imgisa)}>
            <img src={imgisa} alt="foto-isa" />
          </div>
          <h3>Isadora Ahumada</h3>
          <p>Ingeniería Civil Industrial - Informática</p>
        </section>

        <section className="name">
          <div className="img-name" onClick={() => handleImageClick(imgfrancisco)}>
            <img src={imgfrancisco} alt="foto-francisco" />
          </div>
          <h3>Francisco Delgado</h3>
          <p>Ingeniería Civil Informática</p>
        </section>
      </div>

      {zoomedImg && (
        <div className="image-zoom">
          <img src={zoomedImg} alt="zoomed" onClick={closeZoomedImage} />
        </div>
      )}
    </main>
  );
}

export default MainSection;