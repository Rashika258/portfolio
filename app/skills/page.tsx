"use client";

import Image from "next/image";
import * as React from "react";
import { motion } from "framer-motion";
import {
  skillsFirstRowData,
  skillsSecondRowData,
  skillsThirdRowData,
} from "@/components/data";
import HeaderText from "@/components/ui/header-text";

export default function Skills() {
  return (
    <div
      className={
        "flex relative h-[calc(100vh-145px)] mt-[65px] mb-[80px]  px-8 flex-col  p-10 w-full items-center "
      }
    >
      <HeaderText
        text={"Toolbox of Technical Mastery"}
        className="justify-center pt-0"
      />
      <div className="pt-4 pb-8 text-base flex w-full items-center justify-center">
        Building Innovative Apps with the Latest Technologies
      </div>
      <div className=" grid grid-rows-3 gap-y-8 items-center justify-center">
        <div className={"grid grid-cols-4 gap-8 "}>
          {skillsFirstRowData?.map((imageData, index) => (
            <ImageComponent key={index} {...imageData} />
          ))}
        </div>
        <div className={" grid grid-cols-4 gap-8 "}>
          {skillsSecondRowData?.map((imageData, index) => (
            <ImageComponent key={index} {...imageData} />
          ))}
        </div>
        <div className={" grid grid-cols-4 gap-8 "}>
          {skillsThirdRowData?.map((imageData, index) => (
            <ImageComponent key={index} {...imageData} />
          ))}
        </div>
      </div>
    </div>
  );
}

const ImageComponent: React.FC<{
  src: string;
  alt: string;
  width: number;
  height: number;
}> = ({ src, alt, width, height }) => {
  return (
    <motion.div
      className="inline-flex  hover:animate-shimmer items-center justify-center rounded-xl border  bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-10  py-4 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 "
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Image className={""} src={src} alt={alt} width={width} height={height} />
    </motion.div>
  );
};
