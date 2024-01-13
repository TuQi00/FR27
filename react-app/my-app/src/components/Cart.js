import React, {useContext, } from 'react';
import { ShoppingCartContext } from './ShoppingCartContext';

function Cart() {
  const { cart, removeFromCart, decreaseQuantity, increaseQuantity } = useContext(ShoppingCartContext)

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id} className="product-item">
            {product.name} - ${product.price} x {product.quantity}
            <div className="quantity-buttons">
              <button onClick={() => { increaseQuantity(product.id) }}>+</button>
              <button onClick={() => { decreaseQuantity(product.id) }}>-</button>
            </div>
            <button className="remove-button" onClick={() => removeFromCart(product.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p className="total">Total: ${total}</p>
    </div>
  );
}
export default Cart