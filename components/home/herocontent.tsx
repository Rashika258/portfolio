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
        <Image
          className="rounded-2xl"
          width={300}
          height={300}
          src={"/avatar_2.png"}
          alt="avatar"
        />
      </div>

      <div className=" py-8 px-16 flex flex-col items-center justify-center  w-[calc(100%-300px)]">
        <HeaderText text={"Full Stack Developer Portfolio"} />

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
