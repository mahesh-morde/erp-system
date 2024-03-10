// src/Products/Products.js
import React, { useState } from 'react';

const Products = () => {
  // Mock data for product list
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', category: 'Category A', price: 20, stockQuantity: 50 },
    { id: 2, name: 'Product 2', category: 'Category B', price: 30, stockQuantity: 30 },
    // Add more products as needed
  ]);

  // State for new product (used in the add product form)
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: 0,
    stockQuantity: 0,
  });

  // Function to add a new product
  const handleAddProduct = () => {
    // Validate new product data (e.g., check if fields are not empty)
    if (!newProduct.name || !newProduct.category || newProduct.price <= 0 || newProduct.stockQuantity < 0) {
      alert('Please fill in all fields and ensure the price and stock quantity are valid.');
      return;
    }

    // Add the new product to the list
    setProducts((prevProducts) => [
      ...prevProducts,
      { id: prevProducts.length + 1, ...newProduct },
    ]);

    // Clear the newProduct state for the next entry
    setNewProduct({
      name: '',
      category: '',
      price: 0,
      stockQuantity: 0,
    });
  };

  // Function to edit a product (placeholder, implement your own logic)
  const handleEditProduct = (productId) => {
    // Placeholder for edit functionality
    alert(`Editing product with ID ${productId}`);
  };

  // Function to delete a product
  const handleDeleteProduct = (productId) => {
    // Filter out the product with the given ID and update the 'products' state
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
  };

  // Function to update the newProduct state as the user types
  const handleChange = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  return (
  <div className="products-container">
  <h2>Products Management</h2>
  <hr></hr>
  <h3>Add Products</h3>
  <hr></hr>
  {/* Form for adding products */}
  <form className="add-product-form">
    <label>
      Product Name:<br></br>
      <input type="text" name="name" value={newProduct.name} onChange={handleChange} />
    </label>
    <label><br></br>
      Category:<br></br>
      <input type="text" name="category" value={newProduct.category} onChange={handleChange} />
    </label>
    <label><br></br>
      Price:<br></br>
      <input type="number" name="price" value={newProduct.price} onChange={handleChange} />
    </label>
    <label><br></br>
      Stock Quantity:<br></br>
      <input type="number" name="stockQuantity" value={newProduct.stockQuantity} onChange={handleChange} />
    </label><br></br>
    <button type="button" onClick={handleAddProduct}>
      Add Product
    </button>
    
  </form>
  <hr></hr>
  <h3>Product Details</h3>
  <hr></hr>
  {/* List of products with details */}
  <ul className="products-list">
    {products.map((product) => (
      <li key={product.id} className="product-item">
        {product.name} - {product.category} - ${product.price} - Stock: {product.stockQuantity}
        <div className="product-actions">
          <button className="edit-btn" onClick={() => handleEditProduct(product.id)}>Edit</button>
          <button className="delete-btn" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
        </div>
      </li>
    ))}
  </ul>
</div>

  );
};

export default Products;
