
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const products = [{'name': 'Glass Pipe #1', 'price': '$25.99', 'image': 'glass1.jpg'}, {'name': 'Glass Pipe #2', 'price': '$54.99', 'image': 'glass2.jpg'}, {'name': 'Glass Pipe #3', 'price': '$30.99', 'image': 'glass3.jpg'}, {'name': 'Glass Pipe #4', 'price': '$44.99', 'image': 'glass4.jpg'}, {'name': 'Glass Pipe #5', 'price': '$25.99', 'image': 'glass5.jpg'}, {'name': 'Glass Pipe #6', 'price': '$39.99', 'image': 'glass1.jpg'}, {'name': 'Glass Pipe #7', 'price': '$42.99', 'image': 'glass2.jpg'}, {'name': 'Glass Pipe #8', 'price': '$17.99', 'image': 'glass3.jpg'}, {'name': 'Glass Pipe #9', 'price': '$63.99', 'image': 'glass4.jpg'}, {'name': 'Glass Pipe #10', 'price': '$38.99', 'image': 'glass5.jpg'}, {'name': 'Glass Pipe #11', 'price': '$50.99', 'image': 'glass1.jpg'}, {'name': 'Glass Pipe #12', 'price': '$17.99', 'image': 'glass2.jpg'}, {'name': 'Glass Pipe #13', 'price': '$39.99', 'image': 'glass3.jpg'}, {'name': 'Glass Pipe #14', 'price': '$58.99', 'image': 'glass4.jpg'}, {'name': 'Glass Pipe #15', 'price': '$67.99', 'image': 'glass5.jpg'}, {'name': 'Glass Pipe #16', 'price': '$55.99', 'image': 'glass1.jpg'}, {'name': 'Glass Pipe #17', 'price': '$60.99', 'image': 'glass2.jpg'}, {'name': 'Glass Pipe #18', 'price': '$18.99', 'image': 'glass3.jpg'}, {'name': 'Glass Pipe #19', 'price': '$35.99', 'image': 'glass4.jpg'}, {'name': 'Glass Pipe #20', 'price': '$68.99', 'image': 'glass5.jpg'}];

export default function GlassPipes() {
  const { addToCart } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">GlassPipes</h1>
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
