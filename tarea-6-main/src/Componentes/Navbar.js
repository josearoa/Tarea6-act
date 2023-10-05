import React from 'react';
import '../style.css';
import logo from '../Imagenes/Diseño sin título (1).png'

function Navbar() {
  return (
    <nav className="primarynav">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-icons">
        <a href="/">Inicio</a>
        <a href="https://comfy-heliotrope-7e08c2.netlify.app/">José</a>
        <a href="https://remarkable-kheer-6d2300.netlify.app">Francisco</a>
        <a href="https://monumental-pavlova-356238.netlify.app">Isadora</a>
      </div>
    </nav>
  );
}

export default Navbar;
