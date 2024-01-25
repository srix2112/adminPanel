// App.js
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Header from "./components/header/Header";
import MainContent from "./components/maincontent/MainContent";
import "./App.css";
// index.js or App.js
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />

        <div className="content-container">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </Router>
  );
};

export default App;
