"use client";
import * as React from "react";
import HeaderText from "@/components/ui/header-text";
import SubHeaderText from "@/components/ui/sub-header-text";

export default function Contact() {
  return (
    <div className="mb-[80px] mt-[65px] h-[calc(100vh-145px)] w-full overflow-y-auto p-8 md:px-20">
      <HeaderText text="Chat with me" className="pt-0 md:justify-center" />
      <SubHeaderText
        text={"Reach Out: Let's Start Your Journey Together"}
      />

      <div className="flex w-full items-center justify-center py-8">
        <form
          action="mailto:rashikasuresh312@gmail.com"
          className="w-full  max-w-xl space-y-4  "
        >
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium  text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="focus:ring-primary-500  focus:border-primary-500   focus:ring-primary-500 focus:border-primary-500 shadow-sm-light block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 shadow-sm"
              placeholder="name@youremail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="focus:ring-primary-500 focus:border-primary-500 focus:ring-primary-500 focus:border-primary-500  shadow-sm-light block  w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-sm text-white placeholder-gray-400 shadow-sm"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-400"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="focus:ring-primary-500 focus:border-primary-500 focus:ring-primary-500 focus:border-primary-500 block min-h-[50px] w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white shadow-sm dark:placeholder-gray-400"
              placeholder="Leave a comment..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="rounded-full border border-black bg-white/[0.2] px-4 py-2 text-sm backdrop-blur-sm transition duration-200 hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)]"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
