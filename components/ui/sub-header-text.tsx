"use client";
import { cn } from "@/lib/utils";
import React from "react";

const SubHeaderText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-start py-4 text-sm md:justify-center md:text-base",
        className,
      )}
    >
      <p>{text}</p>
    </div>
  );
};

export default SubHeaderText;
