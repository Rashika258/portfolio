"use client";
import { aboutContent, aboutWords } from "@/components/data";
import { DirectionAwareHoverCard } from "@/components/ui/direction-aware-hover-card";
import HeaderText from "@/components/ui/header-text";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import * as React from "react";

export default function About() {
  return (
    <div className="relative flex flex-col md:flex-row md:min-h-[300px] h-[calc(100vh-145px)] w-full px-8 md:px-20 mt-[65px] mb-[80px] overflow-y-auto">
      <div className="relative hidden  md:flex items-center justify-center">
        <DirectionAwareHoverCard imageUrl={"/about_bg.svg"}>
          <p className="font-bold text-xl">Rashika</p>
          <p className="font-normal text-sm">25, August, 2000</p>
        </DirectionAwareHoverCard>
      </div>
      <div className="md:pl-20 md:py-10 flex flex-col items-center justify-center">
        <HeaderText text="My story" />

        <TextGenerateEffect words={aboutWords} className="w-full" />
        <div className="py-2 text-base w-full items-center justify-start flex ">
          Peek behind the curtain of my life.
        </div>

        <div
          className="
            flex w-full py-4 text-gray-400 text-sm  text-left "
        >
          {aboutContent}
        </div>
      </div>
    </div>
  );
}
