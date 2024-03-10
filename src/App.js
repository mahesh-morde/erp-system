// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Products from './Products/Products';
import Orders from './Orders/Orders';
import Calendar from './Calendar/Calendar';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import './App.css';


const App = () => {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <body>
    <Router>
      <div className="app-container">
        <Header OpenSidebar={OpenSidebar} />
        <div className="content-container">
          <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/calendar" element={<Calendar />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    </body>
  );
};

export default App;