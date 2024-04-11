"use client";

import HeroContent from "@/components/home/herocontent";

import Footer from "@/components/ui/footer";
import Experience from "./experience/page";
import Education from "./education/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import About from "./about/page";
import ParticleCanvas from "@/components/home/Background";

export default function Home() {
  return (
    <div className="mt-[65px] mb-[80px] h-[calc(100vh-145px)] overflow-y-auto flex flex-col">
      <ParticleCanvas />
      <HeroContent />

    </div>
  );
}
