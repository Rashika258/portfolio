"use client";

import React, { useEffect, useState } from "react";

const HeroContent = () => {
const firstHeroTextArray = [
  "Implementing innovative solutions",
  "Creating scalable architectures",
  "Developing dynamic applications",
  "Designing intuitive interfaces",
  "Optimizing performance",
  "Securing networks",
  "Integrating cutting-edge technologies",
  "Collaborating with teams",
  "Troubleshooting issues",
  "Enhancing accessibility",
];



const firstHeroSubTextArray = [
  "for seamless user experiences.",
  "for efficient data management.",
  "for diverse platforms.",
  "for optimal user interaction.",
  "for high-traffic websites.",
  "for robust cybersecurity measures.",
  "for enhanced functionality.",
  "for streamlined project delivery.",
  "for uninterrupted system operations.",
  "for inclusive user engagement.",
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

console.log("index============================", index);

return (
  <div className=" w-full  pt-16 px-8 pb-8">
    <div className="flex items-center justify-center">
      <div className="relative inline-flex h-12 max-w-[350px] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Full Stack Developer Portfolio
        </span>
      </div>
    </div>

    <div className="py-8 ">
      <div className="text-4xl  font-bold ">
        <div className="w-full min-w-full flex items-center text-[#DAD5D5] justify-center p-2">{firstHeroTextArray[index]}</div>
        
        <div className="gradient__text w-full min-w-full flex items-center  justify-center p-2">
          {" "}
          {firstHeroSubTextArray[index]}
        </div>
      </div>

  
    </div>
  </div>
);
};

export default HeroContent;
