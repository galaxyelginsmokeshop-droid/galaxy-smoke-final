import { useRouter } from 'next/router';

export default function ProductDetail() {
  const router = useRouter();
  const { product } = router.query;

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold mb-4">Hemp Wraps - {product}</h1>
      <img src="https://via.placeholder.com/500x300?text=hemp+wraps+Product" alt={product} className="mx-auto mb-4" />
      <p className="text-gray-700 text-lg">
        This is a placeholder description for the product: <strong>{product}</strong>. More details can be added later.
      </p>
    </div>
  );
}
