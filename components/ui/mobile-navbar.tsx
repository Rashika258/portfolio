import React from "react";
import { navItems } from "../data";
import Image from "next/image";
import Link from "next/link";

const MobileNavbar = () => {
  return (
    <div className="flex items-center justify-between p-4 w-full md:hidden bottom-0 z-50 fixed">
      {navItems &&
        navItems?.map((navItem, idx) => {
          return (
            <div key={idx}>
              <Link href={navItem?.navLink}>
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

      <div>
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
