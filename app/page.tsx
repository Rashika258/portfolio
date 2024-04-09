"use client"

import HeroContent from "@/components/home/herocontent";

import { Technologies } from "@/components/home/technologies";
import { Navbar } from "@/components/ui/navbar";
import { Projects } from "./projects/page";
import { About } from "./about/page";
import Footer from "@/components/ui/footer";


export default function Home() {
  return (
    <div className="flex flex-row h-full w-full ">
      <Navbar />

      <div className="pt-[65px] flex flex-col">
        <HeroContent />
        <Technologies />
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
