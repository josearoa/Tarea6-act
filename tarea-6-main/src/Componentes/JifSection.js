import React from 'react';
import '../style.css';
import jifimg from '../Imagenes/img jif.png'

function JifSection() {
  return (
    <section className="jif">
      <div className="contenido">
        <p>Este grupo unido por la determinación de tres brillantes mentes, José, Isadora y Francisco, se esfuerza incansablemente por alcanzar la excelencia académica. Su objetivo es sobresalir en el campo de la programación, colaborando estrechamente para superar desafíos y lograr calificaciones sobresalientes mientras trabajan juntos para aprobar el curso con éxito.</p>
      </div>
      <div className="img-jif">
        <img src={jifimg} alt="imagen jif" />
      </div>
    </section>
  );
}

export default JifSection;
