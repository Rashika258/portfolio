"use client";

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
    <div className="container mb-10 w-full  rounded-3xl border-gray-500 p-0 md:border md:p-10 ">
      <div className="wrap relative h-full  overflow-hidden">
        <div className="border-2-2 absolute left-4 h-full border border-white border-opacity-20 md:left-[50%]"></div>

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
}

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
        "mb-8 flex w-full items-center justify-start md:justify-between",
        className,
      )}
    >
      <div className="order-1  md:w-5/12"></div>
      <div className="z-20 order-1 flex h-8 w-8 items-center rounded-full bg-gray-800 shadow-xl">
        <Image
          height={32}
          width={32}
          className="rounded-full"
          src={experience?.timeLineIcon}
          alt={experience?.companyName}
        />
      </div>
      <div className="order-1 ml-10 w-9/12 shadow-xl md:ml-0 md:w-5/12 ">
        <ThreeDCard experience={experience} />
      </div>
    </div>
  );
};
