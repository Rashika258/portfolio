"use client";
import { aboutContent, aboutWords } from "@/components/data";
import { DirectionAwareHoverCard } from "@/components/ui/direction-aware-hover-card";
import HeaderText from "@/components/ui/header-text";
import SubHeaderText from "@/components/ui/sub-header-text";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import * as React from "react";

export default function About() {
  return (
    <div className="relative flex flex-col p-8 xl:flex-row xl:min-h-[300px] h-[calc(100vh-145px)] w-full xl:px-20 mt-[65px] mb-[80px] overflow-y-auto">
      <div className="relative   flex items-center pb-8 xl:py-0 justify-start xl:justify-center">
        <DirectionAwareHoverCard imageUrl={"/about_bg.svg"}>
          <p className="font-bold text-xl">Rashika</p>
          <p className="font-normal text-sm">25, August, 2000</p>
        </DirectionAwareHoverCard>
      </div>
      <div className="xl:pl-20 xl:py-10 flex flex-col items-center justify-center">
        <HeaderText text="My story"  className="r pt-0" />

        <TextGenerateEffect words={aboutWords} className="w-full" />
        <SubHeaderText text={'Peek behind the curtain of my life.'}  className="md:justify-start" />
  

        <div
          className="
            flex w-full py-4 text-gray-400 text-sm  text-left "
        >
          <p>{aboutContent}</p>
        </div>
      </div>
    </div>
  );
}
