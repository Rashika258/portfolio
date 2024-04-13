"use client";

import { experiences } from "@/components/data";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/3d-card-effect";
import HeaderText from "@/components/ui/header-text";
import VerticalTimelineComponent from "@/components/ui/vertical-timeline-component";
import React from "react";

interface ExperienceProps {
  id: number;
  companyName: string;
  title: string;
  workDescription: string[];
  timeLineIcon: string;
  date: string;
}

export default function Experience() {
  return (
    <div className="h-[calc(100vh-145px)] w-full relative mt-[65px] mb-[80px] flex   px-8 flex-col   items-center justify-center overflow-y-auto">
      <div className="flex h-full flex-col w-full">
      <HeaderText text="Experience" className="md:justify-center" />
      <div className="py-8 w-full flex text-sm items-center justify-start md:justify-center md:text-base">
        {`Charting the Map of Experience: Navigating Through Life's Terrain`}
      </div>
      <div className="flex w-full  md:px-20 ">
        <VerticalTimelineComponent experiences={experiences} />
      </div>

      </div>

    </div>
  );
}

export function ThreeDCard({ experience }: { experience: ExperienceProps }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="50" className="text-xl font-bold  text-white">
          {experience?.companyName}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className=" text-sm max-w-sm mt-2 text-neutral-300"
        >
          {experience?.title}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <div className="text-gray-400 py-6 text-sm">
            <ul className="list-disc">
              {experience?.workDescription &&
                experience?.workDescription?.length > 0 &&
                experience?.workDescription?.map((item, idx) => {
                  return <li key={idx}>{item}</li>;
                })}
            </ul>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
