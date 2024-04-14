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
        prevIndex === firstHeroTextArray?.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" relative mb-[80px] mt-[65px] flex   h-[calc(100vh-145px)] w-full flex-col justify-start overflow-y-auto p-8  md:items-center md:justify-center  xl:p-20 ">
      <div className="flex w-full">
        <div className="hero__image__wrapper relative hidden rounded-2xl border  border-slate-500 shadow-lg md:flex ">
          <img
            className="min-w-[300px] rounded-2xl"
            src={"/avatar_2.png"}
            alt="avatar"
          />
        </div>

        <div className=" flex flex-col md:items-center md:justify-center  md:pl-8  ">
          <div className="w-full items-center justify-start">
          <Link href={"/resume.pdf"} className="z-50" target="blank">
            <button className="group relative mb-2 me-2 inline-flex items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 to-blue-500 p-0.5 text-sm font-medium text-white hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-800 group-hover:from-purple-600  group-hover:to-blue-500">
              <span className="relative rounded-3xl bg-gray-900 px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0">
                Download Resume
              </span>
            </button>
          </Link>
          </div>


          <p className="flex items-center py-8 text-left text-sm text-gray-400 md:text-base ">
            {heroWords}
          </p>

          <div className="flex h-52 w-full flex-col">
            <div className="flex w-full flex-col py-4 text-2xl font-bold sm:h-52 md:h-auto  md:text-4xl  ">
              <p className="text-[#DAD5D5] ">
                {firstHeroTextArray[index]}
                <span className="gradient__text">
                  {firstHeroSubTextArray[index]}
                </span>
              </p>
            </div>
          </div>

          <div className="z-50 flex md:hidden">
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
