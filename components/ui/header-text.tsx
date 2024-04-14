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
      <div className="relative cursor-default inline-flex h-12 max-w-[350px] overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex cursor-default h-full w-full  items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          {text}
        </span>
      </div>
    </div>
  );
};

export default HeaderText;
