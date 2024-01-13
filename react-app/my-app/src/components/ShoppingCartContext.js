import { useState, useEffect, createContext } from "react";


const ShoppingCartContext = createContext()

function useShoppingCart() {
    const [products, setProducts] = useState([
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 15 },
      { id: 3, name: 'Product 3', price: 20 },
    ]);
    const [cart, setCart] = useState([]);
  
    useEffect(() => {
      const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCart(savedCart);
    }, []);
  
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
  
    const addToCart = (product) => {
      const existingProduct = cart.find((item) => item.id === product.id);
  
      if (existingProduct) {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.id === existingProduct.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
      }
    };
  
    const decreaseQuantity = (productId) => {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      )
    }
  
    const increaseQuantity = (productId) => {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    };
  
    const removeFromCart = (productId) => {
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };
  
  
    return {
      products,
      cart,
      addToCart,
      removeFromCart,
      decreaseQuantity,
      increaseQuantity,
    };
  }
export {useShoppingCart, ShoppingCartContext }