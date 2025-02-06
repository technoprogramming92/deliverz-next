"use client";

import React from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartProps {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  setShowCart: (value: boolean) => void;
}

export default function Cart({
  cartItems,
  setCartItems,
  setShowCart,
}: CartProps) {
  const handleIncrease = (id: number) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id: number) => {
    setCartItems((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(1, item.quantity - 1) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemove = (id: number) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const getTotalPrice = () =>
    cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);

  return (
    <div className="cart-overlay">
      <div className="cart-modal">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="close-cart" onClick={() => setShowCart(false)}>
            ✖
          </button>
        </div>

        {/* Cart Items */}
        <div className="cart-content">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-img"
                />
                <div className="cart-details">
                  <h4 className="text-black">{item.name}</h4>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="cart-actions">
                    <button onClick={() => handleDecrease(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrease(item.id)}>+</button>
                  </div>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item.id)}
                >
                  🗑
                </button>
              </div>
            ))
          ) : (
            <p className="empty-cart">Your cart is empty.</p>
          )}
        </div>

        {/* Cart Footer */}
        <div className="cart-footer">
          <h3>Total: ${getTotalPrice()}</h3>
          {cartItems.length > 0 && (
            <button className="checkout-btn">Proceed to Checkout</button>
          )}
        </div>
      </div>
    </div>
  );
}
