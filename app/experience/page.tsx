"use client";

import { experiences } from "@/components/data";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/3d-card-effect";
import HeaderText from "@/components/ui/header-text";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
    <div className="flex relative  px-8 flex-col  py-10 w-full items-center justify-center ">
      <HeaderText text="Experience" />
      <div className="pt-4 pb-16">
        {`Charting the Map of Experience: Navigating Through Life's Terrain`}
      </div>
      <div>
        <VerticalTimeline>
          {experiences?.map((experience, idx) => {
            return (
              <VerticalTimelineElement
                visible={true}
                key={idx}
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#050609",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  #050609",
                }}
                date={experience?.date}
                iconStyle={{
                  background: "#fff",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
                icon={
                  <Image
                    src={experience?.timeLineIcon}
                    alt={experience?.companyName}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-full"
                  />
                }
              >
            
                <ThreeDCard experience={experience} />
                  <div className="text-gray-400 text-sm invisible">
                    <ul className="list-disc">
                      {experience?.workDescription &&
                        experience?.workDescription?.length > 0 &&
                        experience?.workDescription?.map((item, idx) => {
                          return <li key={idx}>{item}</li>;
                        })}
                    </ul>
                  </div>
              
            
             
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
}

function ThreeDCard({ experience }: { experience: ExperienceProps }) {
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
