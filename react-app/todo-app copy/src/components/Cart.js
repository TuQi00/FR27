import React from 'react';

function Cart() {

    return (
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((product) => (
            <li key={product.id} className="product-item">
              {product.name} - ${product.price} x {product.quantity}
              <div className="quantity-buttons">
                <button onClick={()=>{}}>+</button>
                <button onClick={()=>{}}>-</button>
              </div>
              <button className="remove-button" onClick={()=>{}}>
                Remove
              </button>
            </li>
          ))}
        </ul>
        <p className="total">Total: ${0}</p>
      </div>
    );
  }