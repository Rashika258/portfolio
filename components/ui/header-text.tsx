"use client";
import { cn } from "@/lib/utils";
import React from "react";

const HeaderText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-start pb-2 pt-8 ",
        className,
      )}
    >
      <div className="w-fit">
        <div className="gradient__header__text text-2xl font-bold text-gray-500  md:text-3xl">
          {text}
        </div>
      </div>
    </div>
  );
};

export default HeaderText;
