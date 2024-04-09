"use client";

import Image from "next/image";
import * as React from "react";
import { motion } from "framer-motion";

export function Technologies() {
  const imagesFirstRowData = [
    { src: "/javascript-logo.svg", alt: "JavaScript", width: 70, height: 70 },
    { src: "/mongodb_1.svg", alt: "MongoDB", width: 70, height: 70 },
    { src: "/mysql-official.svg", alt: "MySQL", width: 70, height: 70 },
    { src: "/reactjs.svg", alt: "React.js", width: 70, height: 70 },
  ];
  const imagesSecondRowData = [
    { src: "/expressjs.svg", alt: "Express.js", width: 70, height: 70 },
    { src: "/nextjs.svg", alt: "Next.js", width: 70, height: 70 },
    { src: "/nodejs_1.svg", alt: "Node.js", width: 70, height: 70 },

    { src: "/java.svg", alt: "Java", width: 70, height: 70 },
  ];

  const imagesThirdRowData = [
    { src: "/typescript.svg", alt: "TypeScript", width: 70, height: 70 },
    { src: "/python.svg", alt: "Python", width: 40, height: 40 },
    { src: "/html.svg", alt: "HTML5", width: 70, height: 70 },
    { src: "/css.svg", alt: "CSS3", width: 70, height: 70 },
  ];
  return (
    <div
      className={
        "flex relative  px-8 flex-col  py-10 w-full items-center justify-center "
      }
    >
      <div className="  w-full pt-8 pb-2 flex items-center justify-center">
        <div className="relative inline-flex h-12 max-w-[350px] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Toolbox of Technical Mastery
          </span>
        </div>
      </div>
      <div className="pt-4   pb-16">
        Building Innovative Apps with the Latest Technologies
      </div>
      <div className=" grid grid-rows-3 gap-y-8 items-center justify-center">
        <div className={"grid grid-cols-4 gap-8 "}>
          {imagesFirstRowData.map((imageData, index) => (
            <ImageComponent key={index} {...imageData} />
          ))}
        </div>
        <div className={" grid grid-cols-4 gap-8 "}>
          {imagesSecondRowData.map((imageData, index) => (
            <ImageComponent key={index} {...imageData} />
          ))}
        </div>
        <div className={" grid grid-cols-4 gap-8 "}>
          {imagesThirdRowData.map((imageData, index) => (
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
      className="inline-flex  hover:animate-shimmer items-center justify-center rounded-xl border border-[#6012b3] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-10  py-4 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Image className={""} src={src} alt={alt} width={width} height={height} />
    </motion.div>
  );
};
