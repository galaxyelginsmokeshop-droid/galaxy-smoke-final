import Image from "next/image";

export default function HempWraps() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Hemp Wraps</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Image src="/images/products/hemp-wraps/hemp-wrap-1.jpg" width={300} height={300} alt="Hemp Wrap 1" />
        <Image src="/images/products/hemp-wraps/hemp-wrap-2.jpg" width={300} height={300} alt="Hemp Wrap 2" />
      </div>
    </div>
  );
}