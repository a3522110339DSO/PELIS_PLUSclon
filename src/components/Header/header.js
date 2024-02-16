import React from 'react';
import './header.css'; 

function Header() {
  return (
    <header>
      <div className="header-top">
        <div className="header-text">
          <h1>PELIS PLUS</h1>
        </div>
        <div className="header-buttons">
          <div className="login-button">
            <button>Log in</button>
          </div>
          <div className="trial-button">
            <button>Start your free trial</button>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <h1>TITULOS MAS POPULARES</h1>
      </div>
    </header>
  );
}

export default Header;