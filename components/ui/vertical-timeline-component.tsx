"use client"

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { ThreeDCard } from "./3d-card-effect";

interface ExperienceProps {
  id: number;
  companyName: string;
  title: string;
  workDescription: string[];
  timeLineIcon: string;
  date: string;
}

export default function VerticalTimelineComponent({
  experiences,
}: {
  experiences: ExperienceProps[];
}) {
  return (
    <div className="container border-gray-500 mb-10  rounded-3xl p-0 md:p-10 md:border w-full ">
      <div className="relative wrap overflow-hidden  h-full">
        <div className="border-2-2 absolute border-opacity-20 border-white h-full border left-4 md:left-[50%]"></div>

        {experiences &&
          experiences?.length > 0 &&
          experiences?.map((item, idx) => {
            return (
              <Timeline
                className={idx % 2 === 1 ? "md:flex-row-reverse" : ""}
                key={idx}
                experience={item}
              />
            );
          })}
      </div>
    </div>
  );
};


const Timeline = ({
  experience,
  className,
}: {
  experience: ExperienceProps;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mb-8 flex justify-start md:justify-between items-center w-full",
        className
      )}
    >
      <div className="order-1  md:w-5/12"></div>
      <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
        <Image height={32} width={32} className="rounded-full" src={experience?.timeLineIcon} alt={experience?.companyName} />
        
      </div>
      <div className="order-1 shadow-xl ml-10 md:ml-0 md:w-5/12 w-9/12 ">
        <ThreeDCard experience={experience} />
      </div>
    </div>
  );
};
