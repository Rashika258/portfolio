"use client";

import Link from "next/link";
import React, { useState } from "react";
import { navItems } from "../data";

const Navbar = () => {
  const [selectedNav, setSelectedNav] = useState("Home");

  return (
    <nav className="w-full max-w-full flex min-w-full max-h-[65px] h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10 items-center justify-between ">
      <div
        className=" flex w-full max-w-full min-w-full  items-center justify-between mx-auto p-4"
        onClick={() => {
          setSelectedNav("Home");
        }}
      >
        <Link href="/">
          <div className="logo__font text-3xl  font-bold text-yellowcolor whitespace-nowrap">
            Rashika Suresh
          </div>
        </Link>

        <div className="hidden md:flex items-center justify-center md:w-auto" id="navbar-default">
          <div className="flex">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  mr-10  border-gray-700">
              {navItems &&
                navItems?.length > 0 &&
                navItems?.map((navItem, idx) => {
                  return (
                    <li
                      key={idx}
                      className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                        selectedNav === navItem?.navItem
                          ? "bg-accent text-accent-foreground"
                          : "bg-background text-default"
                      } hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
                      onClick={(e) => {
                        e?.stopPropagation()
                        setSelectedNav(navItem?.navItem);
                      }}
                    >
                      <Link href={navItem?.navLink}>{navItem?.navItem}</Link>
                    </li>
                  );
                })}
            </ul>
            </div>
            <div
              className="p-[1px] relative"
              onClick={(e) => {
                e?.stopPropagation();
                setSelectedNav("Contact");
              }}
            >
              <Link href={"/contact"}>
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full ${
                    selectedNav === "Contact" ? "opacity-100" : "opacity-0"
                  }`}
                />
                <div
                  className={`px-8 py-2 bg-black rounded-full relative group transition duration-200 text-white hover:bg-transparent ${
                    selectedNav === "Contact"
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500"
                      : ""
                  }`}
                >
                  {"Let's talk"}
                </div>
              </Link>
            </div>
      
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
