// Header.js
import React from 'react';
import './Header.css';
import logo from '../../assets/globe.jpg';

const Header = () => {
  return (
    <div className="header">
       <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <p className="logo-text">India</p>
      </div>
    </div>
  );
};

export default Header;

