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
import SubHeaderText from "../../components/ui/sub-header-text";

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
        "relative mb-[80px] mt-[65px] flex h-[calc(100vh-145px)]  w-full flex-col  items-center overflow-y-auto p-10 px-8 "
      }
    >
      <HeaderText
        text={"Toolbox of Technical Mastery"}
        className="pt-0 md:justify-center"
      />
      <SubHeaderText
        text={"Building Innovative Apps with the Latest Technologies"}
        className="justify-start"
      />

      <div className=" grid w-full grid-rows-3 items-center justify-start gap-y-8 md:justify-center">
        <ImageWrapper images={skillsFirstRowData} />
        <ImageWrapper images={skillsSecondRowData} />
        <ImageWrapper images={skillsThirdRowData} />
      </div>
    </div>
  );
}

const ImageWrapper = ({ images }: { images: ImageProp[] }) => {
  return (
    <div className={" grid grid-cols-2 gap-8 md:grid-cols-4 "}>
      {images?.map((imageData, index) => (
        <ImageComponent key={index} {...imageData} />
      ))}
    </div>
  );
};

const ImageComponent: React.FC<ImageProp> = ({ src, alt, width, height }) => {
  return (
    <motion.div
      className="inline-flex h-[100px] min-h-[100px] w-[150px] min-w-[150px]  items-center justify-center rounded-xl border bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]  bg-[length:200%_100%] px-10 py-4  font-medium text-slate-400 transition-colors hover:animate-shimmer focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 "
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Image className={""} src={src} alt={alt} width={width} height={height} />
    </motion.div>
  );
};
