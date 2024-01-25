// Sidebar.js
import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfo, faCog, faGear, faDatabase } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/home"><FontAwesomeIcon icon={faHome} />Home</Link></li>
        <li><Link to="/settings"><FontAwesomeIcon icon={faGear} />Settings</Link></li>
        <li><Link to="/service"><FontAwesomeIcon icon={faDatabase} />Service</Link></li>
        <li><Link to="/about"><FontAwesomeIcon icon={faInfo} />About</Link></li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
