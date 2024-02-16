import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

function Home() {
  return (
    <div className="home">
      <div className="container">
        <Link to="/peliculas" className="box" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + 'https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-movie-board-icon-image_1455346.jpg'})` }}>
          <h2 style={{ textAlign: 'center' }}></h2>
        </Link>
        
        <div className="description">Popular en Películas</div>

        <Link to="/series" className="box" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + 'https://png.pngtree.com/element_our/20190603/ourlarge/pngtree-movie-board-icon-image_1455346.jpg'})` }}>
          <h2 style={{ textAlign: 'center' }}></h2>
        </Link>
        <div className="description">Popular en Series</div>

      </div>
    </div>
  );
}

export default Home;