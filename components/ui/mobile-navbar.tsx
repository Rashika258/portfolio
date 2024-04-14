"use client";

import React, { useEffect, useState } from "react";
import { navItems } from "../data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
  const [selectedNav, setSelectedNav] = useState("Home");
  const pathName = usePathname();

  console.log("selectedNav", selectedNav);

  useEffect(() => {
    console.log("selectedNav", pathName);
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
    <div className="footer__wrapper fixed bottom-0 z-50 flex w-full items-center justify-between p-4 backdrop-blur-md md:hidden">
      {navItems &&
        navItems?.map((navItem, idx) => {
          return (
            <div
              key={idx}
              className={selectedNav === navItem?.navItem? "opacity-100" : "opacity-40"}
              onClick={(e) => {
                e?.stopPropagation();
                setSelectedNav(navItem?.navItem);
              }}
            >
              <Link href={navItem?.navLink} >
                <Image
                  src={navItem?.iconLink}
                  alt={navItem?.navItem}
                  width={32}
                  height={32}
                />
              </Link>
            </div>
          );
        })}

      <div
        onClick={(e) => {
          e?.stopPropagation();
          setSelectedNav("Contact");
        }}
        className={selectedNav === "Contact" ? "opacity-100" : "opacity-40"}
      >
        <Link href={"/contact"}>
          <Image
            src={"/mobile_contact_us.png"}
            alt={"mobile_contact_us"}
            width={32}
            height={32}
          />
        </Link>
      </div>
    </div>
  );
};

export default MobileNavbar;
