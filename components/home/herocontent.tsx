"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { firstHeroSubTextArray, firstHeroTextArray } from "../data";
import HeaderText from "../ui/header-text";

const HeroContent = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === firstHeroTextArray?.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" w-full h-full flex relative p-20 ">
    
        <div className="flex hero__image__wrapper border border-slate-500 rounded-2xl shadow-lg ">
          <Image className="rounded-2xl" width={300} height={300} src={"/avatar_2.png"} alt="avatar" />
        </div>
   
      <div className=" py-8 px-16 flex flex-col items-center  w-[calc(100%-300px)]">
      <div className="w-full py-4">
          <div className="relative inline-flex h-12 max-w-[350px] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Full Stack Developer Portfolio
            </span>
          </div>
        </div>
        <div className="py-4 w-full  flex ">
          <div className="text-4xl  font-bold  ">
            <div className="h-18 min-h-18 flex items-center  text-[#DAD5D5] justify-start p-2">
              {firstHeroTextArray[index]}
            </div>

            <div className="gradient__text h-18 min-h-18 flex items-center  justify-start p-2">
              {" "}
              {firstHeroSubTextArray[index]}
            </div>
          </div>
        </div>
        <div className="text-gray-400 flex items-center text-justify py-8">
          {`I'm a seasoned Full Stack Software Engineer renowned for my ability to engineer dynamic solutions that transcend industry boundaries. With a meticulous focus on performance optimization, user experience enhancement, and security fortification, I excel in crafting robust digital experiences that leave a lasting impact.`}
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
