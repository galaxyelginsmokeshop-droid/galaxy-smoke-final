
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const products = [{'name': 'Hemp Wrap #1', 'price': '$31.99', 'image': 'wrap1.jpg'}, {'name': 'Hemp Wrap #2', 'price': '$45.99', 'image': 'wrap2.jpg'}, {'name': 'Hemp Wrap #3', 'price': '$39.99', 'image': 'wrap3.jpg'}, {'name': 'Hemp Wrap #4', 'price': '$56.99', 'image': 'wrap4.jpg'}, {'name': 'Hemp Wrap #5', 'price': '$10.99', 'image': 'wrap5.jpg'}, {'name': 'Hemp Wrap #6', 'price': '$43.99', 'image': 'wrap1.jpg'}, {'name': 'Hemp Wrap #7', 'price': '$58.99', 'image': 'wrap2.jpg'}, {'name': 'Hemp Wrap #8', 'price': '$65.99', 'image': 'wrap3.jpg'}, {'name': 'Hemp Wrap #9', 'price': '$38.99', 'image': 'wrap4.jpg'}, {'name': 'Hemp Wrap #10', 'price': '$67.99', 'image': 'wrap5.jpg'}, {'name': 'Hemp Wrap #11', 'price': '$28.99', 'image': 'wrap1.jpg'}, {'name': 'Hemp Wrap #12', 'price': '$54.99', 'image': 'wrap2.jpg'}, {'name': 'Hemp Wrap #13', 'price': '$67.99', 'image': 'wrap3.jpg'}, {'name': 'Hemp Wrap #14', 'price': '$23.99', 'image': 'wrap4.jpg'}, {'name': 'Hemp Wrap #15', 'price': '$14.99', 'image': 'wrap5.jpg'}, {'name': 'Hemp Wrap #16', 'price': '$40.99', 'image': 'wrap1.jpg'}, {'name': 'Hemp Wrap #17', 'price': '$44.99', 'image': 'wrap2.jpg'}, {'name': 'Hemp Wrap #18', 'price': '$50.99', 'image': 'wrap3.jpg'}];

export default function HempWraps() {
  const { addToCart } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">HempWraps</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, idx) => (
          <div key={idx} className="border p-4 rounded shadow hover:shadow-lg">
            <Image src={`/${product.image}`} alt={product.name} width={300} height={300} className="object-cover rounded" />
            <h2 className="text-xl mt-2 font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <button onClick={() => addToCart(product)} className="mt-2 bg-black text-white px-4 py-2 rounded">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
