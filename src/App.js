// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Products from './Products/Products';
import Orders from './Orders/Orders';
import Calendar from './Calendar/Calendar';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="content-container">
          <Sidebar />
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
  );
};

export default App;