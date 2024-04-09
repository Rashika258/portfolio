
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const HeroContent = () => {
  const firstHeroTextArray = [
    "Implementing innovative solutions for",
    "Creating scalable architectures for",
    "Developing dynamic applications for",
    "Designing intuitive interfaces for",
    "Optimizing performance for",
    "Securing networks for",
    "Integrating cutting-edge technologies for",
    "Collaborating with teams for",
    "Troubleshooting issues for",
    "Enhancing accessibility for",
  ];

  const firstHeroSubTextArray = [
    " seamless user experiences.",
    " efficient data management.",
    " diverse platforms.",
    " optimal user interaction.",
    " high-traffic websites.",
    " robust cybersecurity measures.",
    " enhanced functionality.",
    " streamlined project delivery.",
    " uninterrupted system operations.",
    " inclusive user engagement.",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === firstHeroTextArray.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" w-full h-[700px] min-h-[700px] flex relative pt-16 px-20 pb-8 ">
      <div className="flex items-center justify-center">
        <div className="flex ">
          <Image width={300} height={300} src={"/avatar_2.png"} alt="avatar" />
        </div>
      </div>
      <div className=" py-8 px-16 flex flex-col items-center content-center justify-center w-[calc(100%-300px)]">
        <div className="w-full pt-8 pb-2">
          <div className="relative inline-flex h-12 max-w-[350px] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Full Stack Developer Portfolio
            </span>
          </div>
        </div>
        <div className="pb-4 pt-2 w-full  flex ">
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
        <div>
          {`I'm a seasoned Full Stack Software Engineer renowned for my ability to engineer dynamic solutions that transcend industry boundaries. With a meticulous focus on performance optimization, user experience enhancement, and security fortification, I excel in crafting robust digital experiences that leave a lasting impact.`}
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
