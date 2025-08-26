import React from "react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cartItems } = useCart() || {}; // ✅ fallback to empty object

if (!cartItems) return <p>Your cart is loading or empty.</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item, index) => (
            <li key={index} className="border p-4 rounded">
              <p className="font-semibold">{item.name}</p>
              <p>${item.price}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
