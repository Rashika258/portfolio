"use client";
import { educationDetails } from "@/components/data";
import EducationTimeLine from "@/components/ui/education-timeline";
import HeaderText from "@/components/ui/header-text";
import SubHeaderText from "@/components/ui/sub-header-text";
import React from "react";

export default function Education() {
  return (
    <div className="h-[calc(100vh-145px)]   w-full relative mt-[65px] mb-[80px] flex   px-8 flex-col   items-center justify-center ">
      <div className="flex flex-col w-full h-full">
        <HeaderText text="Education"  className="md:justify-center pt-0" />
        <SubHeaderText
          text={`On the path of self-realization, education served as both guide and companion.`}
        />

        <div className="flex w-full items-center justify-start mb-10 md:justify-center">
          <EducationTimeLine educationDetails={educationDetails} />
        </div>
      </div>
    </div>
  );
}
