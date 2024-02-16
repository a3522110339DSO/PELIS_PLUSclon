import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Home from './components/Home/Home';
import Program from './features/program/program'; 
import Peliculas from './components/Peliculas/Peliculas'; 
import Series from './components/Series/Series'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header className="App-header" />
        <div className="main-content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/program" element={<Program />} />
            <Route path="/peliculas" element={<Peliculas />} />
            <Route path="/series" element={<Series />} /> {/* Agrega la ruta para las series */}
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer className="App-footer" />
      </div>
    </Router>
  );
}

export default App;