import Image from "next/image";

export default function Vaporizers() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Vaporizers</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Image src="/images/products/vaporizers/vaporizer-1.jpg" width={300} height={300} alt="Vaporizer 1" />
        <Image src="/images/products/vaporizers/vaporizer-2.jpg" width={300} height={300} alt="Vaporizer 2" />
      </div>
    </div>
  );
}