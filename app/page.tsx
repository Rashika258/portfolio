import HeroContent from "@/components/home/herocontent";

import { Technologies } from "@/components/home/technologies";
import { Navbar } from "@/components/navbar/navbar";
import Image from "next/image";
import { Projects } from "./projects/page";

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
        <Projects />
      </div>
    </div>
  );
}
