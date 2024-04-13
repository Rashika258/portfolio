"use client";

import * as React from "react";
import { Lamp } from "../../components/ui/lamp";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import HeaderText from "@/components/ui/header-text";
import { projects } from "@/components/data";
import SubHeaderText from "@/components/ui/sub-header-text";

export default function Projects() {
  return (
    <div className="relative flex items-start justify-start p-8 h-[calc(100vh-145px)] w-full  xl:px-20 mt-[65px] mb-[80px] overflow-y-auto">
      <div className="hidden xl:block absolute w-full h-[calc(100vh-145px)]  inset-0 mt-[-215px]">
        <Lamp />
      </div>
      <div className=" md:mt-[2rem] rounded-md flex flex-col antialiased items-center md:justify-center relative overflow-hidden w-full">
        <HeaderText text={"Projects"} className="md:justify-center pt-4" />
        <SubHeaderText text={' Transforming ideas into captivating online experiences.'} />
        <InfiniteMovingCards items={projects} direction="right" speed="slow" />
      </div>
    </div>
  );
}
