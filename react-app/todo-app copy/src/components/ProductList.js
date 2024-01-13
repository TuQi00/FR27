import React from 'react';

function ProductList() {

    return (
      <div className="product-list">
        <h1>Product List</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id} className="product-item">
              {product.name} - ${product.price}
              <button onClick={()=>{}}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }