
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const products = [{'name': 'Cannabis Vaporizer #1', 'price': '$24.99', 'image': 'cannabis1.jpg'}, {'name': 'Cannabis Vaporizer #2', 'price': '$24.99', 'image': 'cannabis2.jpg'}, {'name': 'Cannabis Vaporizer #3', 'price': '$45.99', 'image': 'cannabis3.jpg'}, {'name': 'Cannabis Vaporizer #4', 'price': '$53.99', 'image': 'cannabis4.jpg'}, {'name': 'Cannabis Vaporizer #5', 'price': '$32.99', 'image': 'cannabis5.jpg'}, {'name': 'Cannabis Vaporizer #6', 'price': '$69.99', 'image': 'cannabis1.jpg'}, {'name': 'Cannabis Vaporizer #7', 'price': '$66.99', 'image': 'cannabis2.jpg'}, {'name': 'Cannabis Vaporizer #8', 'price': '$9.99', 'image': 'cannabis3.jpg'}, {'name': 'Cannabis Vaporizer #9', 'price': '$23.99', 'image': 'cannabis4.jpg'}, {'name': 'Cannabis Vaporizer #10', 'price': '$47.99', 'image': 'cannabis5.jpg'}, {'name': 'Cannabis Vaporizer #11', 'price': '$21.99', 'image': 'cannabis1.jpg'}, {'name': 'Cannabis Vaporizer #12', 'price': '$40.99', 'image': 'cannabis2.jpg'}, {'name': 'Cannabis Vaporizer #13', 'price': '$18.99', 'image': 'cannabis3.jpg'}, {'name': 'Cannabis Vaporizer #14', 'price': '$46.99', 'image': 'cannabis4.jpg'}, {'name': 'Cannabis Vaporizer #15', 'price': '$12.99', 'image': 'cannabis5.jpg'}, {'name': 'Cannabis Vaporizer #16', 'price': '$49.99', 'image': 'cannabis1.jpg'}, {'name': 'Cannabis Vaporizer #17', 'price': '$43.99', 'image': 'cannabis2.jpg'}, {'name': 'Cannabis Vaporizer #18', 'price': '$15.99', 'image': 'cannabis3.jpg'}, {'name': 'Cannabis Vaporizer #19', 'price': '$49.99', 'image': 'cannabis4.jpg'}, {'name': 'Cannabis Vaporizer #20', 'price': '$42.99', 'image': 'cannabis5.jpg'}];

export default function VaporizerForCannabisProducts() {
  const { addToCart } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">VaporizerForCannabis Products</h1>
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
