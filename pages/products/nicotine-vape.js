import Image from "next/image";

export default function NicotineVape() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Nicotine Vapes</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Image src="/images/products/nicotine-vape/nicotine-vape-1.jpg" width={300} height={300} alt="Nicotine Vape 1" />
        <Image src="/images/products/nicotine-vape/nicotine-vape-2.jpg" width={300} height={300} alt="Nicotine Vape 2" />
      </div>
    </div>
  );
}