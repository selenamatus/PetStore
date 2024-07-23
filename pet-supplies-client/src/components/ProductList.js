import React from 'react';
import './ProductList.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-grid">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product._id} className="product-card">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ProductList;