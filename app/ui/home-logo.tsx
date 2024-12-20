import Image from "next/image";

export default function HomeLogo() {
  return (
    <>
      <Image
        src="/assets/EC2.png"
        width={100}
        height={100}
        alt="logo1"
        className="hidden md:block"
      />
      <Image
        src="/assets/EC.png"
        width={40}
        height={40}
        alt="logo2"
        className="left-2 md:hidden"
      />
    </>
  );
}
