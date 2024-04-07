import HeroContent from "@/components/home/herocontent";
import { ModeToggle } from "@/components/home/mode-toggle";
import StarsCanvas from "@/components/home/StarBackground";
import { Technologies } from "@/components/home/technologies";
import { Navbar } from "@/components/navbar/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row h-full w-full ">
      <Navbar />
      <div className="pt-[65px] w-full" >
        {/* <div className="flex">
          <Image src={"/avatar.png"} alt="avatar" width={400} height={500} />
        </div> */}
        <HeroContent />
        <Technologies />
      </div>
    </div>
  );
}
