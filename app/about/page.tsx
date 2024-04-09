"use client";
import HeaderText from "@/components/ui/header-text";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

import Image from "next/image";
import * as React from "react";

export interface IAboutProps {}

export function About(props: IAboutProps) {
  const words = `Hey there! I'm Rashika!`;
  const aboutContent = `A tech wizard with a knack for turning complex code into sleek solutions. With over 2 years of fulltime and 2 years of freelancing experience of coding adventures under my belt, I've mastered both frontend and backend technologies, bringing ideas to life.
  
  My journey into the world of software development started with a spark of curiosity and has evolved into a passion for creating digital magic. From building apps to optimizing processes, I thrive on the thrill of problem-solving and pushing boundaries.
  
  But I'm more than just a code ninja. I'm driven by [Your Values or Principles], championing [Something Important to You]. I believe in the power of [Your Belief or Principle], guiding me to [Your Unique Approach or Perspective].
  
  When I'm not immersed in the digital realm, you'll find me [Your Interests or Hobbies], [Something Personal or Quirky]. Whether it's [Your Passion or Interest], I'm always eager to dive into new adventures and make meaningful connections.
  
  Ready to collaborate on something extraordinary? Let's chat and [Your Call to Action]!
  
  This revamped "About Me" section adds a dash of personality and energy, inviting visitors to engage with your story and explore your capabilities further.`;
  return (
    <div className="relative flex flex-col px-20 py-20">
      {/* <div className="absolute inset-0  z-0">
        <Image src={"/about_bg.svg"} alt="about-bg"  layout="fill" className="opacity-40" />
      </div> */}
      <div className="flex w-full items-center justify-center flex-col">
        <HeaderText text="My story" />

        <div className="pt-4   pb-16">Peek behind the curtain of my life.</div>
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
              <TextGenerateEffect words={words} />
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
