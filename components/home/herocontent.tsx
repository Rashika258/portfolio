/* eslint-disable @next/next/no-img-element */
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
    <div className=" w-full mt-[65px] mb-[80px] h-[calc(100vh-145px)]   flex justify-start xl:items-center xl:justify-center relative p-8  flex-col   xl:p-20 ">
      <div className="w-full flex">
        <div className="hidden md:flex hero__image__wrapper relative border  border-slate-500 rounded-2xl shadow-lg ">
          <img className="rounded-2xl" src={"/avatar_2.png"} alt="avatar" />
        </div>

        <div className=" md:py-8 md:pl-16 flex flex-col md:items-center md:justify-center  ">
          <HeaderText text={"Full Stack Developer Portfolio"}  className="md:justify-center pt-0" />

          <p className="text-gray-400 flex items-center text-left py-8 ">
            {heroWords}
          </p>

          <div className="flex w-full flex-col h-52">
            <div className="py-4 w-full sm:h-52 md:h-auto  flex flex-col text-4xl  font-bold  ">
              <p className="text-[#DAD5D5] ">
                {firstHeroTextArray[index]}
                <span className="gradient__text">
                  {firstHeroSubTextArray[index]}
                </span>
              </p>
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

    
      </div>
    </div>
  );
};

export default HeroContent;
