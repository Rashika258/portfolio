import { Encryption } from "@/components/main/Encryption";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full flex">
      <Image src={"/avatar1.png"} alt="avatar" width={500} height={500} />
      <Encryption />
    </main>
  );
}
