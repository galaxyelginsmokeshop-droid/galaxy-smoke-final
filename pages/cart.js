import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const cart = useCart();
  if (!cart) return <p>Loading cart...</p>;
  const { cartItems } = cart;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item, index) => (
            <li key={index} className="border p-4 rounded shadow">
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
