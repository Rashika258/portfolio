"use client";

import { experiences } from "@/components/data";
import HeaderText from "@/components/ui/header-text";
import SubHeaderText from "@/components/ui/sub-header-text";
import VerticalTimelineComponent from "@/components/ui/vertical-timeline-component";
import React from "react";

export default function Experience() {
  return (
    <div className="h-[calc(100vh-145px)] w-full relative mt-[65px] mb-[80px] flex   px-8 flex-col   items-center justify-center overflow-y-auto">
      <div className="flex h-full flex-col w-full">
        <HeaderText text="Experience"  className="md:justify-center pt-0" />
        <SubHeaderText
          text={`Charting the Map of Experience: Navigating Through Life's Terrain`}
        />
        <div className="flex w-full  xl:px-20 ">
          <VerticalTimelineComponent experiences={experiences} />
        </div>
      </div>
    </div>
  );
}
