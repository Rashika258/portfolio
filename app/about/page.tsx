"use client";
import { aboutContent, aboutWords } from "@/components/data";
import { DirectionAwareHoverCard } from "@/components/ui/direction-aware-hover-card";
import HeaderText from "@/components/ui/header-text";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import Image from "next/image";
import * as React from "react";

export default function About() {
  return (
    <div className="relative flex h-[calc(100vh-145px)] w-full  px-20 mt-[65px] mb-[80px] overflow-y-auto">
      <div className="relative  flex items-center justify-center">
        <DirectionAwareHoverCard imageUrl={"/about_bg.svg"}>
          <p className="font-bold text-xl">Rashika</p>
          <p className="font-normal text-sm">25, August, 2000</p>
        </DirectionAwareHoverCard>
      </div>
      <div className="pl-20 py-10 flex flex-col items-center">
        <HeaderText text="My story" />

        <TextGenerateEffect words={aboutWords} className="w-full" />
        <div className="py-2  w-full items-center justify-start flex ">
          Peek behind the curtain of my life.
        </div>

        <div
          className="
            flex w-full py-4 text-gray-400 text-base text-justify"
        >
          {aboutContent}
        </div>
      </div>
    </div>
  );
}
