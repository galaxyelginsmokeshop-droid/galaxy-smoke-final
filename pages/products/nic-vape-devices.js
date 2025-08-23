
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const products = [{'name': 'Vape Device #1', 'price': '$36.99', 'image': 'device1.jpg'}, {'name': 'Vape Device #2', 'price': '$31.99', 'image': 'device2.jpg'}, {'name': 'Vape Device #3', 'price': '$64.99', 'image': 'device3.jpg'}, {'name': 'Vape Device #4', 'price': '$23.99', 'image': 'device4.jpg'}, {'name': 'Vape Device #5', 'price': '$57.99', 'image': 'device5.jpg'}, {'name': 'Vape Device #6', 'price': '$23.99', 'image': 'device1.jpg'}, {'name': 'Vape Device #7', 'price': '$42.99', 'image': 'device2.jpg'}, {'name': 'Vape Device #8', 'price': '$63.99', 'image': 'device3.jpg'}, {'name': 'Vape Device #9', 'price': '$44.99', 'image': 'device4.jpg'}, {'name': 'Vape Device #10', 'price': '$43.99', 'image': 'device5.jpg'}, {'name': 'Vape Device #11', 'price': '$37.99', 'image': 'device1.jpg'}, {'name': 'Vape Device #12', 'price': '$35.99', 'image': 'device2.jpg'}, {'name': 'Vape Device #13', 'price': '$42.99', 'image': 'device3.jpg'}, {'name': 'Vape Device #14', 'price': '$35.99', 'image': 'device4.jpg'}, {'name': 'Vape Device #15', 'price': '$51.99', 'image': 'device5.jpg'}, {'name': 'Vape Device #16', 'price': '$27.99', 'image': 'device1.jpg'}, {'name': 'Vape Device #17', 'price': '$65.99', 'image': 'device2.jpg'}, {'name': 'Vape Device #18', 'price': '$9.99', 'image': 'device3.jpg'}, {'name': 'Vape Device #19', 'price': '$68.99', 'image': 'device4.jpg'}, {'name': 'Vape Device #20', 'price': '$63.99', 'image': 'device5.jpg'}];

export default function NicVapeDevices() {
  const { addToCart } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Nic Vape Devices</h1>
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
