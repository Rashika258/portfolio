"use client";
import { aboutContent, aboutWords } from "@/components/data";
import HeaderText from "@/components/ui/header-text";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import Image from "next/image";
import * as React from "react";

export default function About() {
  return (
    <div className="relative flex flex-col px-20 py-20">
      <div className="flex w-full items-center justify-center flex-col">
        <HeaderText text="My story" />

        <div className="pt-4  w-full items-center justify-center flex  pb-16">
          Peek behind the curtain of my life.
        </div>
        <div className="w-full grid grid-cols-2">
          <div className="relative min-w-[300px] min-h-[300px]">
            <Image
              src={"/about_bg.svg"}
              alt="about-bg"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="px-20 py-4">
            <div>
              <TextGenerateEffect words={aboutWords} />
            </div>
            <div
              className="
            flex text-left py-10"
            >
              {aboutContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
