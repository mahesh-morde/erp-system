// src/Calendar/Calendar.js
import React, { useState } from 'react';
import './Calendar.css';

const Calendar = () => {
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'Mahesh Morde', deliveryDate: '2024-03-30' },
    { id: 2, customerName: 'Oreo Buscuit', deliveryDate: '2024-03-20' },
    // Add more orders as needed
  ]);

  const [selectedDate, setSelectedDate] = useState(null);

  const renderCalendarDays = () => {
    const daysInMonth = 30;
    const calendarDays = [];

    const handleDayClick = (day) => {
      // Set the selected date when a day is clicked
      setSelectedDate(day);
    };

    for (let day = 1; day <= daysInMonth; day++) {
      const ordersOnDay = orders.filter((order) => {
        const deliveryDay = new Date(order.deliveryDate).getDate();
        return deliveryDay === day;
      });

      const orderList = ordersOnDay.map((order) => (
        <li key={order.id}>{order.customerName}</li>
      ));
      

      // Highlight the selected date
      const dayClassName = day === selectedDate ? 'selected-day' : '';

      calendarDays.push(
        <div key={day} onClick={() => handleDayClick(day)} className={dayClassName}>
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
      {selectedDate && (
        <div className="selected-orders">
          <h3>Orders on date: {selectedDate}</h3>
          <ul>
            {orders
              .filter(
                (order) => new Date(order.deliveryDate).getDate() === selectedDate
              )
              .map((order) => (
                <li key={order.id}>{order.customerName}</li>
              ))}
          </ul>
        </div>
      )}
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
    </div>
  );
};

export default Calendar;
