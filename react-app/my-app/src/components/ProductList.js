import React, {useContext} from 'react';
import { ShoppingCartContext } from './ShoppingCartContext';

function ProductList() {
  const { products, addToCart } = useContext(ShoppingCartContext)

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="product-item">
            {product.name} - ${product.price}
            <button onClick={() => { addToCart(product) }}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductList