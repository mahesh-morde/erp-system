// src/Calendar/Calendar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Calendar.css';

const Calendar = () => {
  // Mock data for order list with delivery dates
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'Customer 1', deliveryDate: '2024-03-15' },
    { id: 2, customerName: 'Customer 100', deliveryDate: '2024-03-20' },
    // Add more orders as needed
  ]);

  // Function to render days of the month
  const renderCalendarDays = () => {
    // Assuming a month view for simplicity
    const daysInMonth = 30; // Adjust this based on the month and year

    // Array to hold the calendar days
    const calendarDays = [];

    // Loop through each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      // Check if there are any orders on this day
      const ordersOnDay = orders.filter((order) => {
        const deliveryDay = new Date(order.deliveryDate).getDate();
        return deliveryDay === day;
      });

      // Render a list of orders for this day
      const orderList = ordersOnDay.map((order) => (
        <li key={order.id}>{order.customerName}</li>
      ));

      // Add the day to the calendar with orders if any
      calendarDays.push(
        <div key={day}>
          <span>{day}</span>
          <ul>{orderList}</ul>
        </div>
      );
    }

    return calendarDays;
  };

  return (
    <div>
      <h2>Orders Calendar View</h2>
      {/* Calendar view displaying orders based on delivery dates */}
      <div className="calendar">
        <div className="calendar-header main">
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>
        <div className="calendar-days main">{renderCalendarDays()}</div>
      </div>
      
      <div className="navigation-links">
        <Link to="/">Back To Dashboard</Link>
      </div>
    </div>
  );
};

export default Calendar;
