import Image from "next/image";

export default function GlassPipes() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Glass Pipes</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Image src="/images/products/glass-pipes/glass-pipe-1.jpg" width={300} height={300} alt="Glass Pipe 1" />
        <Image src="/images/products/glass-pipes/glass-pipe-2.jpg" width={300} height={300} alt="Glass Pipe 2" />
      </div>
    </div>
  );
}