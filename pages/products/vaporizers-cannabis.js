
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const products = [{'name': 'Puffco Peak Pro', 'image': 'puffco-peak.jpg', 'price': '$349.99'}, {'name': 'Yocan Evolve Plus', 'image': 'yocan-evolve.jpg', 'price': '$39.99'}];

export default function VaporizersCannabis() {
  const { addToCart } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">VaporizersCannabis</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
