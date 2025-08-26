import React from "react";
import Image from "next/image";

const products = [
  {
    name: "Vaporizers Example",
    image: "/products/vaporizers.jpg",
  },
];

export default function VaporizersPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Vaporizers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="w-full h-auto object-cover mb-2"
            />
            <p className="text-center">{product.name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}