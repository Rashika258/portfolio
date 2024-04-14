"use client";

import Image from "next/image";
import React from "react";
import { footerSocialLinks } from "../data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer__wrapper  fixed bottom-0 z-50 hidden h-[80px]  w-full items-center justify-between px-4 backdrop-blur-md md:flex md:flex-row md:px-10">
      <div className="flex ">
        {footerSocialLinks &&
          footerSocialLinks?.length > 0 &&
          footerSocialLinks?.map((footerItem, idx) => {
            return (
              <Link
                className="px-4 "
                target="blank"
                key={idx}
                href={footerItem?.socialLink}
              >
                <Image
                  className="hover:opacity-50"
                  src={footerItem?.socialIcon}
                  alt={footerItem?.socialName}
                  width={30}
                  height={30}
                />
              </Link>
            );
          })}
      </div>

      <div className="hidden text-sm text-slate-500  md:flex">
        Copyright &#169; 2024
      </div>

      <div className="hidden  opacity-40 md:flex">
        <Link href={"/"}>
          <Image
            src={"/footer_logo.png"}
            alt={"footer_logo"}
            width={80}
            height={30}
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
