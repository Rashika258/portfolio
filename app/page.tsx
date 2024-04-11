"use client";

import HeroContent from "@/components/home/herocontent";

import Footer from "@/components/ui/footer";
import Experience from "./experience/page";
import Education from "./education/page";
import Contact from "./contact/page";
import Projects from "./projects/page";
import Skills from "./skills/page";
import About from "./about/page";

export default function Home() {
  return (
    <div className="pt-[65px] pb-[50px] h-full flex flex-col">
      <HeroContent />
      <Skills />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
