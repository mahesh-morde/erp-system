// src/Dashboard/Dashboard.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = () => {
  // State for key metrics
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalStock, setTotalStock] = useState(0);

  // Fetch key metrics data (mock data for now)
  useEffect(() => {
    // Simulate API calls to fetch metrics data
    const fetchMetricsData = async () => {
      // Mock data for total products and total orders
      const mockMetricsData = {
        totalProducts: 75,
        totalOrders: 30,
        totalStock: 100,
      };

      // Update state with fetched data
      setTotalProducts(mockMetricsData.totalProducts);
      setTotalOrders(mockMetricsData.totalOrders);
      setTotalStock(mockMetricsData.totalStock);
    };

    fetchMetricsData();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      
      <div className="total-box">
        <div className="total-products">
          <p>Total Products</p>
          <p>{totalProducts}</p>
        </div>

        <div className="total-stock">
          <p>Total Stock</p>
          <p>{totalStock}</p>
        </div>

        <div className="total-orders">
          <p>Total Orders</p>
          <p>{totalOrders}</p>
        </div>
      </div>
      
      <div className="metric-card">
        {/* Display key metrics */}
        
      </div>

      <div className="navigation-links">
        {/* Add navigation links/buttons for Products, Calendar, and Orders */}
        <Link to="/products">Go to Products</Link>
        <Link to="/calendar">Go to Calendar</Link>
        <Link to="/orders">Go to Orders</Link>
      </div>
    </div>
  );
};

export default Dashboard;
