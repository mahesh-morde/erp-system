// src/Dashboard/Dashboard.js
import React, { useState, useEffect, PureComponent } from 'react';
import './Dashboard.css';
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from 'react-icons/bs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


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

  const data = [
    {
      name: 'Products',
      Jan: 4000,
      Feb: 2400,
      March: 2400,
    },
    {
      name: 'Order',
      Jan: 3000,
      Feb: 1398,
      March: 2210,
    },
    {
      name: 'Stock',
      Jan: 2000,
      Feb: 9800,
      March: 2290,
    },
    {
      name: 'Alerts',
      Jan: 2780,
      Feb: 3908,
      March: 2000,
    },
    {
      name: 'Inventory',
      Jan: 1890,
      Feb: 4800,
      March: 2181,
    },
    {
      name: 'Customers',
      Jan: 2390,
      Feb: 3800,
      March: 8000,
    },
    {
      name: 'Orderstatus',
      Jan: 3490,
      Feb: 4300,
      March: 3283,
      
    },
  ];

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

      <div className='chart-restrict'> 
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Jan" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Feb" stroke="#82ca9d" />
          <Line type="monotone" dataKey="March" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
