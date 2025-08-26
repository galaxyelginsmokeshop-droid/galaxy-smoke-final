// Home page placeholder

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <h1 className="text-5xl font-bold text-gray-800 mb-6 text-center">
        Welcome to Galaxy Smoke Shop
      </h1>
      <p className="text-xl text-gray-600 mb-8 text-center max-w-xl">
        Your one-stop shop for premium vapes, hemp wraps, glass pipes, and more!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        <Link href="/products/nicotine-vape">
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl cursor-pointer text-center">
            <h2 className="text-lg font-semibold text-gray-700">Nicotine Vapes</h2>
          </div>
        </Link>
        <Link href="/products/nic-vape-devices">
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl cursor-pointer text-center">
            <h2 className="text-lg font-semibold text-gray-700">Nicotine Vape Devices</h2>
          </div>
        </Link>
        <Link href="/products/hemp-wraps">
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl cursor-pointer text-center">
            <h2 className="text-lg font-semibold text-gray-700">Hemp Wraps</h2>
          </div>
        </Link>
        <Link href="/products/glass-pipes">
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl cursor-pointer text-center">
            <h2 className="text-lg font-semibold text-gray-700">Glass Pipes</h2>
          </div>
        </Link>
        <Link href="/products/vaporizers">
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl cursor-pointer text-center">
            <h2 className="text-lg font-semibold text-gray-700">Vaporizers</h2>
          </div>
        </Link>
      </div>
    </main>
  );
}