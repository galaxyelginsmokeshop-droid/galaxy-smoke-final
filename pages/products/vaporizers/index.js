import Link from 'next/link';

const products = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: 'Vaporizers for Cannabis Products Product ' + (i + 1),
  slug: 'vaporizers-product-' + (i + 1),
  image: 'https://via.placeholder.com/300x200?text=vaporizers+' + (i + 1),
  price: (10 + i * 2).toFixed(2)
}));

export default function vaporizersPage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Vaporizers for Cannabis Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map(product => (
          <Link key={product.id} href={`/products/vaporizers/${product.slug}`}>
            <div className="border p-4 text-center hover:shadow-lg transition">
              <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
              <h2 className="font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
