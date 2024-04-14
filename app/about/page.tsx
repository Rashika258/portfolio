"use client";
import React from "react";
import { aboutContent, aboutWords } from "@/components/data";
import { DirectionAwareHoverCard } from "@/components/ui/direction-aware-hover-card";
import HeaderText from "@/components/ui/header-text";
import SubHeaderText from "@/components/ui/sub-header-text";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function About() {
  return (
    <div className="relative mb-[80px] mt-[65px] flex h-[calc(100vh-145px)] w-full flex-col overflow-y-auto p-8 xl:min-h-[300px] xl:flex-row xl:px-20">
      <div className="relative   flex items-center justify-start pb-8 xl:justify-center xl:py-0">
        <DirectionAwareHoverCard imageUrl={"/about_bg.svg"}>
          <p className="text-xl font-bold">Rashika</p>
          <p className="text-sm font-normal">25, August, 2000</p>
        </DirectionAwareHoverCard>
      </div>
      <div className="flex flex-col items-center justify-center xl:py-10 xl:pl-20">
        <HeaderText text="My story" className="r pt-0" />

        <TextGenerateEffect words={aboutWords} className="w-full" />
        <SubHeaderText
          text={"Peek behind the curtain of my life."}
          className="md:justify-start"
        />

        <div className="flex w-full py-4 text-left text-sm  text-gray-400 ">
          <p>{aboutContent}</p>
        </div>
      </div>
    </div>
  );
}
