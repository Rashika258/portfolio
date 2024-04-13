"use client";

import * as React from "react";
import { Lamp } from "../../components/ui/lamp";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import HeaderText from "@/components/ui/header-text";
import { projects } from "@/components/data";

export default function Projects() {
  return (
    <div className="relative flex  p-8 h-[calc(100vh-145px)] w-full  md:px-20 mt-[65px] mb-[80px] overflow-y-auto">
      <div className="hidden md:block absolute w-full h-[calc(100vh-145px)]  inset-0 mt-[-215px]">
        <Lamp />
      </div>
      <div className=" md:mt-[2rem] rounded-md flex flex-col antialiased items-center md:justify-center relative overflow-hidden w-full">
        <HeaderText text={"Projects"} className="md:justify-center pt-4" />
        <div className="py-4 w-full flex items-center justify-center">
          Transforming ideas into captivating online experiences.
        </div>
        <InfiniteMovingCards items={projects} direction="right" speed="slow" />
      </div>
    </div>
  );
}
