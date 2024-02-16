import React, { useState, useEffect } from 'react';
import data from '../../sample.json';
import './Peliculas.css'; 
import Carga from '../Carga/Carga';  
  
function Peliculas() {
  const peliculas = data.entries.filter(item => item.programType === 'movie');
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 20;
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = peliculas.slice(indexOfFirstMovie, indexOfLastMovie);
  const totalPages = Math.ceil(peliculas.length / moviesPerPage);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Carga />; 
  }

  return (
    <div>
      <div className="peliculas-container">
        {currentMovies.map((pelicula, index) => (
          <div key={index} className="card">
            <img src={pelicula.images['Poster Art'].url} alt={pelicula.title} />
            <h2>{pelicula.title}</h2>
            <p>Año de lanzamiento: {pelicula.releaseYear}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {[...Array(totalPages).keys()].map(number => (
          <button key={number} onClick={() => setCurrentPage(number + 1)}>
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Peliculas;