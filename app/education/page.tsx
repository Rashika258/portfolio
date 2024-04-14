"use client";
import * as React from "react";
import { educationDetails } from "@/components/data";
import EducationTimeLine from "@/components/ui/education-timeline";
import HeaderText from "@/components/ui/header-text";
import SubHeaderText from "@/components/ui/sub-header-text";

export default function Education() {
  return (
    <div className="relative   mb-[80px] mt-[65px] flex h-[calc(100vh-145px)] w-full   overflow-y-auto px-8 py-4">
      <div className="flex w-full flex-col ">
        <HeaderText text="Education" className="pt-0 md:justify-center" />
        <SubHeaderText
          text={`On the path of self-realization, education served as both guide and companion.`}
        />

        <div className="mb-10 flex w-full items-center justify-start md:justify-center">
          <EducationTimeLine educationDetails={educationDetails} />
        </div>
      </div>
    </div>
  );
}
