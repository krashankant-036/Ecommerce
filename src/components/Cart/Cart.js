import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, total }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>${item.price}</p>
          </div>
        ))
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;


