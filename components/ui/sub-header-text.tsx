"use client"
import { cn } from "@/lib/utils";
import React from "react";

const SubHeaderText = ({ text , className}: { text: string , className?: string}) => {
  return (
    <div className={cn("py-4 w-full flex text-sm items-center justify-start md:justify-center md:text-base", className)}>
      <p>{text}</p>
    </div>
  );
};

export default SubHeaderText;
