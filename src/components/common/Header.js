import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importieren des CSS-Moduls

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="left-links">
        <Link to="/" className="white-link">Home</Link>
          <Link to="/destination" className="white-link">Zu den Destinationen</Link>
          <Link to="#" className="white-link">Über uns</Link>
          <Link to="#" className="white-link">Kontakt</Link>
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

