"use client"

import Image from "next/image";
import * as React from "react";
import { motion } from "framer-motion";

export interface ITechnologiesProps {}

export function Technologies(props: ITechnologiesProps) {
  const imagesFirstRowData = [
    { src: "/java.svg", alt: "Java", width: 70, height: 70 },
    { src: "/javascript-logo.svg", alt: "JavaScript", width: 70, height: 70 },
    { src: "/mongodb_1.svg", alt: "MongoDB", width: 70, height: 70 },
    { src: "/mysql-official.svg", alt: "MySQL", width: 70, height: 70 },
  ];
  const imagesSecondRowData = [
    { src: "/expressjs.svg", alt: "Express.js", width: 70, height: 70 },
    { src: "/nextjs.svg", alt: "Next.js", width: 70, height: 70 },
    { src: "/nodejs_1.svg", alt: "Node.js", width: 70, height: 70 },
    { src: "/reactjs.svg", alt: "React.js", width: 70, height: 70 },
  ];

  const imagesThirdRowData = [
    { src: "/typescript.svg", alt: "TypeScript", width: 70, height: 70 },
    { src: "/python.svg", alt: "Python", width: 40, height: 40 },
    { src: "/html.svg", alt: "HTML5", width: 70, height: 70 },
    { src: "/css.svg", alt: "CSS3", width: 70, height: 70 },
  ];
  return (
    <div className={"grid grid-rows-3 gap-y-4 items-center justify-center"}>
      <div className={"grid grid-cols-4 gap-4 "}>
        {imagesFirstRowData.map((imageData, index) => (
          <ImageComponent key={index} {...imageData} />
        ))}
      </div>
      <div className={"grid grid-cols-4 gap-4 "}>
        {imagesSecondRowData.map((imageData, index) => (
          <ImageComponent key={index} {...imageData} />
        ))}
      </div>
      <div className={"grid grid-cols-4 gap-4 "}>
        {imagesThirdRowData.map((imageData, index) => (
          <ImageComponent key={index} {...imageData} />
        ))}
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
      className="inline-flex  hover:animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-10  py-4 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Image className={""} src={src} alt={alt} width={width} height={height} />
    </motion.div>
  );
};
