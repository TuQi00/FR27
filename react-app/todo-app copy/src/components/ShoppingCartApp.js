import React, {useState, useEffect, useContext, useCallback, useMemo, useRef} from 'react';

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 15 },
  { id: 3, name: 'Product 3', price: 20 },
]

const cart = [
  { id: 1, name: "Product 1", price: 10, quantity: 1 },
  { id: 2, name: "Product 2", price: 15, quantity: 2 }
];

function ProductList() {

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="product-item">
            {product.name} - ${product.price}
            <button onClick={()=>{} }>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Cart() {

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id} className="product-item">
            {product.name} - ${product.price} x {product.quantity}
            <div className="quantity-buttons">
              <button onClick={()=>{} }>+</button>
              <button onClick={ ()=>{}}>-</button>
            </div>
            <button className="remove-button" onClick={()=>{} }>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p className="total">Total: ${0}</p>
    </div>
  );
}

function ShoppingCartApp() {

  return (
    <>
      <ProductList />
      <Cart />
    </>
  );
}

export default ShoppingCartApp;