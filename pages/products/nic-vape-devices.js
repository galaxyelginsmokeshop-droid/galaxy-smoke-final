import Image from "next/image";

export default function NicVapeDevices() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Nicotine Vape Devices</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Image src="/images/products/nic-vape-devices/nic-vape-device-1.jpg" width={300} height={300} alt="Nicotine Vape Device 1" />
        <Image src="/images/products/nic-vape-devices/nic-vape-device-2.jpg" width={300} height={300} alt="Nicotine Vape Device 2" />
      </div>
    </div>
  );
}