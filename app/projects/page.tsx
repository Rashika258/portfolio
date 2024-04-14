"use client";

import * as React from "react";
import { Lamp } from "../../components/ui/lamp";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import HeaderText from "@/components/ui/header-text";
import { projects } from "@/components/data";
import SubHeaderText from "@/components/ui/sub-header-text";

export default function Projects() {
  return (
    <div className="relative mb-[80px] mt-[65px] flex h-[calc(100vh-145px)] w-full items-start  justify-start overflow-y-auto p-8 xl:px-20">
      <div className="absolute inset-0 mt-[-215px] hidden h-[calc(100vh-145px)]  w-full xl:block">
        <Lamp />
      </div>
      <div className=" relative flex w-full flex-col items-center overflow-hidden rounded-md antialiased md:justify-center xl:mt-[2rem]">
        <HeaderText
          text={"Projects"}
          className="py-0 md:justify-center md:pt-4"
        />
        <SubHeaderText
          text={" Transforming ideas into captivating online experiences."}
          className="pb-0"
        />
        <InfiniteMovingCards items={projects} direction="right" speed="slow" />
      </div>
    </div>
  );
}
