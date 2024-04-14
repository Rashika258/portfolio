"use client";
import * as React from "react";
import { experiences } from "@/components/data";
import HeaderText from "@/components/ui/header-text";
import SubHeaderText from "@/components/ui/sub-header-text";
import VerticalTimelineComponent from "@/components/ui/vertical-timeline-component";

export default function Experience() {
  return (
    <div className="relative mb-[80px] mt-[65px] flex h-[calc(100vh-145px)] w-full   flex-col items-center   justify-center overflow-y-auto p-8">
      <div className="flex h-full w-full flex-col ">
        <HeaderText text="Experience" className="pt-0 md:justify-center" />
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
