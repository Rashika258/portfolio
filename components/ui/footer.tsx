"use client";

import Image from "next/image";
import React from "react";
import { footerSocialLinks } from "../data";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-[80px] footer__wrapper backdrop-blur-md z-50  px-10 bottom-0 flex items-center justify-between fixed w-full">
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

      <div className="text-sm text-slate-500">Copyright &#169; 2024</div>

      <div className="opacity-40 ">
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
