import React, { useState, useEffect, useContext, useCallback, useMemo, useRef, createContext } from 'react';
import './ShoppingCartApp.css'
import { useShoppingCart, ShoppingCartContext } from './ShoppingCartContext.js';
import Cart from './Cart.js';
import ProductList from './ProductList.js';
// const products = [
//   { id: 1, name: 'Product 1', price: 10 },
//   { id: 2, name: 'Product 2', price: 15 },
//   { id: 3, name: 'Product 3', price: 20 },
// ]

// const cart = [
//   { id: 1, name: "Product 1", price: 10, quantity: 1 },
//   { id: 2, name: "Product 2", price: 15, quantity: 2 }
// ];

// const ShoppingCartContext = createContext()

// function ProductList() {
//   const { products, addToCart } = useContext(ShoppingCartContext)

//   return (
//     <div className="product-list">
//       <h1>Product List</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id} className="product-item">
//             {product.name} - ${product.price}
//             <button onClick={() => { addToCart(product) }}>Add to Cart</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Cart() {
//   const { cart, removeFromCart, decreaseQuantity, increaseQuantity } = useContext(ShoppingCartContext)

//   const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div className="cart">
//       <h2>Shopping Cart</h2>
//       <ul>
//         {cart.map((product) => (
//           <li key={product.id} className="product-item">
//             {product.name} - ${product.price} x {product.quantity}
//             <div className="quantity-buttons">
//               <button onClick={() => { increaseQuantity(product.id) }}>+</button>
//               <button onClick={() => { decreaseQuantity(product.id) }}>-</button>
//             </div>
//             <button className="remove-button" onClick={() => removeFromCart(product.id)}>
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>
//       <p className="total">Total: ${total}</p>
//     </div>
//   );
// }

// function useShoppingCart() {
//   const [products, setProducts] = useState([
//     { id: 1, name: 'Product 1', price: 10 },
//     { id: 2, name: 'Product 2', price: 15 },
//     { id: 3, name: 'Product 3', price: 20 },
//   ]);
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCart(savedCart);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   const addToCart = (product) => {
//     const existingProduct = cart.find((item) => item.id === product.id);

//     if (existingProduct) {
//       setCart((prevCart) =>
//         prevCart.map((item) =>
//           item.id === existingProduct.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         )
//       );
//     } else {
//       setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
//     }
//   };

//   const decreaseQuantity = (productId) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === productId && item.quantity > 1
//           ? { ...item, quantity: item.quantity - 1 }
//           : item
//       )
//     )
//   }

//   const increaseQuantity = (productId) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   const removeFromCart = (productId) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
//   };


//   return {
//     products,
//     cart,
//     addToCart,
//     removeFromCart,
//     decreaseQuantity,
//     increaseQuantity,
//   };
// }  


function ShoppingCartApp() {
  const shoppingCart = useShoppingCart()

  console.log(shoppingCart, '1');
  return (
    <>
      <ShoppingCartContext.Provider value={shoppingCart}>
        <ProductList />
        <Cart />
      </ShoppingCartContext.Provider>
    </>
  );
}

export default ShoppingCartApp;