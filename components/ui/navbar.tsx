"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { navItems } from "../data";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [selectedNav, setSelectedNav] = useState("Home");
  const pathName = usePathname();

  useEffect(() => {
    if (pathName === "/") {
      setSelectedNav("Home");
    } else if (pathName === "/contact") {
      setSelectedNav("Contact");
    } else {
      const filteredNav = navItems?.find((item) => item?.navLink === pathName);
      if (filteredNav) {
        setSelectedNav(filteredNav?.navItem);
      }
    }
  }, [pathName]);

  return (
    <nav className="fixed top-0 z-50 flex h-[65px]  w-full min-w-full max-w-full items-center justify-between bg-[#03001417] px-4 shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md md:px-4 xl:px-10 ">
      <div
        className=" mx-auto flex w-full min-w-full max-w-full flex-wrap items-center justify-between p-4"
        onClick={(e) => {
          e?.stopPropagation();
          setSelectedNav("Home");
        }}
      >
        <Link href="/">
          <div className="logo__font whitespace-nowrap text-2xl font-bold text-yellowcolor xl:text-3xl">
            Rashika Suresh
          </div>
        </Link>

        <div
          className="hidden items-center justify-center md:flex md:w-auto"
          id="navbar-default"
        >
          <div className="flex">
            <ul className="mr-5 mt-4 flex flex-col rounded-lg border border-gray-700 py-4  font-medium  md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0  xl:mr-10  rtl:space-x-reverse">
              {navItems &&
                navItems?.length > 0 &&
                navItems?.map((navItem, idx) => {
                  return (
                    <li
                      key={idx}
                      className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors md:text-sm ${
                        selectedNav === navItem?.navItem
                          ? "bg-accent text-accent-foreground"
                          : "text-default bg-background"
                      } hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
                      onClick={(e) => {
                        e?.stopPropagation();
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
            className="relative p-[1px]"
            onClick={(e) => {
              e?.stopPropagation();
              setSelectedNav("Contact");
            }}
          >
            <Link href={"/contact"}>
              <div
                className={`absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 ${
                  selectedNav === "Contact" ? "opacity-100" : "opacity-0"
                }`}
              />
              <div
                className={`group relative whitespace-nowrap rounded-full bg-black px-8  py-2 text-base text-white transition duration-200 hover:bg-transparent md:text-sm ${
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
