"use client"

import HeroContent from "@/components/home/herocontent";

import { Navbar } from "@/components/ui/navbar";
import { Projects } from "./projects/page";
import { About } from "./about/page";
import Footer from "@/components/ui/footer";
import Experience from "./experience/page";
import Education from "./education/page";
import { Skills } from "./skills/page";


export default function Home() {
  return (
    <div className="flex flex-row h-full w-full overflow-x-hidden">
      <Navbar />

      <div className="pt-[65px] flex flex-col">
        <HeroContent />
        <Skills />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Footer />
      </div>
    </div>
  );
}
