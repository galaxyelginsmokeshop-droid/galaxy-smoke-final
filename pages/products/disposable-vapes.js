import React from 'react';
import Image from 'next/image';

const products = [
  { name: "Sample Product 1", image: "/images/sample1.jpg" },
  { name: "Sample Product 2", image: "/images/sample2.jpg" },
  { name: "Sample Product 3", image: "/images/sample3.jpg" }
];

export default function DisposableVapes() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Disposable Vapes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="border p-4 rounded shadow">
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="object-cover w-full h-64"
            />
            <p className="mt-2 text-lg font-semibold">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
