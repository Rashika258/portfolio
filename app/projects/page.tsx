import * as React from "react";
import { Lamp } from "./_components/lamp";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import HeaderText from "@/components/ui/header-text";
import { projects } from "@/components/data";

export interface IProjectsProps {}



export function Projects(props: IProjectsProps) {
  return (
    <div className="relative flex w-full">
      <div className="absolute w-full inset-0 mt-[-100px]">
        <Lamp>
          <></>
        </Lamp>
      </div>
      <div className=" mt-[10rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden w-full">
        <HeaderText text={"Projects"} />
        <div className="pt-4  w-full flex items-center justify-center pb-16">Transforming ideas into captivating online experiences.</div>
        <InfiniteMovingCards
          items={projects}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}
