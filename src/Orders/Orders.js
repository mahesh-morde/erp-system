// src/Orders/Orders.js
import React, { useState } from 'react';

const Orders = () => {
  // Mock data for order list
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'Customer 1', orderDate: '2024-03-09', status: 'Pending' },
    { id: 2, customerName: 'Customer 2', orderDate: '2024-03-10', status: 'Shipped' },
    { id: 3, customerName: 'Customer ', orderDate: '2024-03-21', status: 'Pending' },
    // Add more orders as needed
  ]);

  // State for viewing order details (optional)
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Function to view order details (optional)
  const handleViewOrderDetails = (orderId) => {
    const foundOrder = orders.find((order) => order.id === orderId);
    setSelectedOrder(foundOrder);
  };

  // Function to update order status (optional)
  const handleUpdateOrderStatus = (orderId, newStatus) => {
    const orderToUpdate = orders.find((order) => order.id === orderId);
    orderToUpdate.status = newStatus;
    setOrders([...orders]);
  };

  // Function to delete an order (optional)
  const handleDeleteOrder = (orderId) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
  };

  // Function to close order details view (optional)
  const handleCloseOrderDetails = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="orders-container">
      <h2>Orders Management</h2>
      <br></br>
      <br></br>
      {selectedOrder ? (
        <div className="order-details">
          <h3>Order Details</h3>
          <p>Order ID: {selectedOrder.id}</p>
          <p>Customer: {selectedOrder.customerName}</p>
          <p>Order Date: {selectedOrder.orderDate}</p>
          <p>Status: {selectedOrder.status}</p>
          <button onClick={handleCloseOrderDetails}>Close Details</button>
        </div>
      ) : (
        <ul className="orders-list">
          {orders.map((order) => (
            <li key={order.id} className="order-item">
              Order ID: {order.id} - Customer: {order.customerName} - Order Date: {order.orderDate} - Status: {order.status}
              <div className="order-actions">
                <button className="view-details-btn" onClick={() => handleViewOrderDetails(order.id)}>View Details</button>
                <button className="shipped-btn" onClick={() => handleUpdateOrderStatus(order.id, 'Shipped')}>Mark as Shipped</button>
                <button className="delete-btn" onClick={() => handleDeleteOrder(order.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
     
    </div>
    
  );
};

export default Orders;
