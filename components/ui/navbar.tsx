"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Navbar() {
  return (
    <NavigationMenu className="w-full max-w-full min-w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 items-center justify-between">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className="logo__font text-3xl  font-bold text-yellowcolor">
              Rashika Suresh
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild></NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>test</NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {"Let's talk"}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem></NavigationMenuItem>
      </NavigationMenuList>

      <NavigationMenuList>
        <NavigationMenuItem>
          <button className="p-[1px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
            <div className="px-8 py-2  bg-black rounded-full  relative group transition duration-200 text-white hover:bg-transparent">
              {"Let's talk"}
            </div>
          </button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
