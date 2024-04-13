"use client";

import HeaderText from "@/components/ui/header-text";
import SubHeaderText from "@/components/ui/sub-header-text";
import * as React from "react";

export default function Contact() {
  return (
    <div className="h-[calc(100vh-145px)] w-full p-8 md:px-20 mt-[65px] mb-[80px] overflow-y-auto">
      <HeaderText text="Chat with me" className="md:justify-center pt-0" />
      <SubHeaderText
        text={"Transforming ideas into captivating online experiences."}
      />

      <form action="#" className="space-y-8 py-8  max-w-xl">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium  text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm  border   text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="block p-3 w-full text-sm  rounded-lg border  shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-400"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={6}
            className="block min-h-[50px] p-2.5 w-full text-sm rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 dark:placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>

        <button className="px-4 py-2 backdrop-blur-sm border border-black rounded-full hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200">
          Send Message
        </button>
      </form>
    </div>
  );
}
