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

interface ImageProp {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function Skills() {
  return (
    <div
      className={
        "flex relative h-[calc(100vh-145px)] mt-[65px] mb-[80px]  px-8 flex-col  p-10 w-full items-center overflow-y-auto "
      }
    >
      <HeaderText
        text={"Toolbox of Technical Mastery"}
        className="md:justify-center pt-0"
      />
      <div className="pt-4 pb-8 whitespace-nowrap text-sm md:text-base flex w-full items-center justify-start md:justify-center">
        Building Innovative Apps with the Latest Technologies
      </div>
      <div className=" grid grid-rows-3 gap-y-8 items-center justify-center">
        <ImageWrapper images={skillsFirstRowData} />
        <ImageWrapper images={skillsSecondRowData} />
        <ImageWrapper images={skillsThirdRowData} />
      </div>
    </div>
  );
}

const ImageWrapper = ({ images }: { images: ImageProp[] }) => {
  return (
    <div className={" grid grid-cols-2 md:grid-cols-4 gap-8 "}>
      {images?.map((imageData, index) => (
        <ImageComponent key={index} {...imageData} />
      ))}
    </div>
  );
};

const ImageComponent: React.FC<ImageProp> = ({ src, alt, width, height }) => {
  return (
    <motion.div
      className="inline-flex min-h-[100px] h-[100px] w-[150px] min-w-[150px]  hover:animate-shimmer items-center justify-center rounded-xl border  bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-10  py-4 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 "
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Image className={""} src={src} alt={alt} width={width} height={height} />
    </motion.div>
  );
};
