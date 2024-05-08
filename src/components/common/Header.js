import React from 'react';
import './Header.css'; // Importieren des CSS-Moduls

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="left-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Destinations</a></li>
          <li><a href="#">Über uns</a></li>
          <li><a href="#">Kontact</a></li>
        </ul>
        <ul className="right-links">
          <li><a href="#" className="sign-in">Sign In</a></li>
          <li><a href="#" className="register">Registrierung</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

