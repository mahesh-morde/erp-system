// src/Calendar/Calendar.js
import React, { useState } from 'react';

const Calendar = () => {
  const [orders] = useState([
    {
      id: 1,
      orderDate: '2024-03-01',
      expectedDeliveryDate: '2024-03-10',
      customerName: 'Mahesh',
      products: [
        { name: 'Product A', quantity: 2, price: 25.99 },
        { name: 'Product B', quantity: 1, price: 15.49 },
      ],
    },
    {
      id: 2,
      orderDate: '2024-03-15',
      expectedDeliveryDate: '2024-03-25',
      customerName: 'Jack',
      products: [
        { name: 'Product C', quantity: 3, price: 10.99 },
      ],
    },
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
        const deliveryDay = new Date(order.expectedDeliveryDate).getDate();
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
    <div className="Calendar-align">
      <div className="calendar">
        <h1>Orders Calendar View</h1>
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
      {selectedDate && (
        <div className="selected-orders">
          <h3>Orders on date: {selectedDate}</h3>
          <ul>
            {orders
              .filter(
                (order) =>
                  new Date(order.expectedDeliveryDate).getDate() === selectedDate
              )
              .map((order) => (
                <li key={order.id}>
                  <strong>Order ID:</strong> {order.id}<br />
                  <strong>Order Date:</strong> {order.orderDate}<br />
                  <strong>Expected Delivery Date:</strong> {order.expectedDeliveryDate}<br />
                  <strong>Products:</strong>
                  <ul>
                    {order.products.map((product, index) => (
                      <li key={index}>
                        {product.name} - Quantity: {product.quantity} - Price: ${product.price}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Calendar;
