"use client";
import { aboutContent, aboutWords } from "@/components/data";
import HeaderText from "@/components/ui/header-text";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import Image from "next/image";
import * as React from "react";

export default function About() {
  return (
    <div className="relative flex h-[calc(100vh-145px)] w-full  px-20 mt-[65px] mb-[80px] overflow-y-auto">
      <div className="relative min-w-[300px] min-h-[300px] ">
        <Image
          src={"/about_bg.svg"}
          alt="about-bg"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="pl-20 py-4 flex flex-col items-center justify-between">
        <HeaderText text="My story" />

        <TextGenerateEffect words={aboutWords}  className="w-full"/>
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
