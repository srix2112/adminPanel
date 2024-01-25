// MainContent.js
import React from 'react';
import './MainContent.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Service from '../../pages/Service';
import About from '../../pages/About';
import Settings from '../../pages/Settings';

const MainContent = () => {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        {/* Add more routes as needed */}
        {/* <Route path="/" exact>
          <p>Welcome! Click on a sidebar link to view content.</p>
        </Route> */}
        </Routes>
    </div>
  );
};

export default MainContent;
