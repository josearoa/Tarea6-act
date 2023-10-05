import React from 'react';
import './App.css';
import Navbar from './Componentes/Navbar';
import JifSection from './Componentes/JifSection';
import MainSection from './Componentes/MainSection';
import Footer from './Componentes/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <JifSection />
      <MainSection />
      <Footer />
    </div>
  );
}

export default App;
