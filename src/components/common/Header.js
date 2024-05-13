import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

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
        <Link to="/signin"className="white-link">Sign In</Link> 
      <Link to="/register"className="white-link">Register</Link> 
        </ul>
      </nav>
    </header>
  );
};

export default Header;

