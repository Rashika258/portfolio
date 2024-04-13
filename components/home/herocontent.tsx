"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  firstHeroSubTextArray,
  firstHeroTextArray,
  footerSocialLinks,
  heroWords,
} from "../data";
import HeaderText from "../ui/header-text";
import Link from "next/link";

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
    <div className=" w-full h-full flex md:items-center md:justify-center relative p-8 flex-col overflow-y-auto md:flex-row md:p-20 ">
      <div className="hidden md:flex hero__image__wrapper relative border  border-slate-500 rounded-2xl shadow-lg ">
        <Image
          className="rounded-2xl"
          width={300}
          height={300}
          src={"/avatar_2.png"}
          alt="avatar"
        />
      </div>

      <div className=" md:py-8 md:px-16 flex flex-col md:items-center md:justify-center  md:w-[calc(100%-300px)]">
        <HeaderText text={"Full Stack Developer Portfolio"} />

        <div className="py-4 w-full sm:h-52 md:h-auto  flex flex-col text-4xl  font-bold  ">
          <div className="h-18 min-h-18 flex items-center  text-[#DAD5D5] justify-start p-2">
            {firstHeroTextArray[index]}
        </div>

          <div className="gradient__text h-18 min-h-18 flex items-center  justify-start p-2">
            {" "}
            {firstHeroSubTextArray[index]}
          </div>
        </div>
        <div className="text-gray-400 flex items-center text-left md:text-justify py-8">
          {heroWords}
        </div>
      </div>

      <div className="flex z-50 md:hidden">
        {footerSocialLinks &&
          footerSocialLinks?.length > 0 &&
          footerSocialLinks?.map((footerItem, idx) => {
            return (
              <Link
                className="pr-4"
                target="blank"
                key={idx}
                href={footerItem?.socialLink}
              >
                <Image
                  className="hover:opacity-50"
                  src={footerItem?.socialIcon}
                  alt={footerItem?.socialName}
                  width={30}
                  height={30}
                />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default HeroContent;
