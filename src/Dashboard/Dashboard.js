// src/Dashboard/Dashboard.js
import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from 'react-icons/bs';

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
    <div className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>
      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>{totalProducts}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>ORDERS</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>{totalOrders}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>STOCK</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>{totalStock}</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>ALERTS</h3>
            <BsFillBellFill className='card_icon' />
          </div>
          <h1>42</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
