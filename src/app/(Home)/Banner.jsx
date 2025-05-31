"use client";

import { Images } from "@/data/images";
import React, { useCallback, useState } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import { Play } from "lucide-react";
import MailchimpForm from "@/components/MailChimpForm";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isForm, setIsForm] = useState(false);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);

  const handleOpenForm = useCallback(() => setIsForm(true), []);
  const handleCloseForm = useCallback(() => setIsForm(false), []);
  return (
    <>
      <section className="bg-spring-wood pt-[80px] sm:pt-[93px]">
        <div className="main-container section-p-y">
          <div className="grid items-center md:grid-cols-[45%_55%] xl:grid-cols-[40%_60%]">
            <div>
              <h1 className="text-[32px] md:text-[44px] lg:text-[48px] font-semibold text-black leading-tight mb-4">
                Your <span className="text-primary">trusted</span> partner in
                better health.
              </h1>
              <span className="text-sm sm:text-md md:text-lg text-davy-gray">
                Join the early access list and get exclusive launch updates
              </span>
              {/* <form> */}
              <div className="flex mt-6 mb-4 sm:mb-10 md:mb-0 sm:mt-10 md:mt-12 bg-white shadow-md rounded-md overflow-hidden max-w-[500px]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 border border-none focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-500 placeholder:font-semibold text-sm md:text-md"
                />
                <button
                  onClick={handleOpenForm}
                  type="submit"
                  className="bg-dark-primary hover:bg-primary px-5 text-white rounded-md hover:bg-primary-dark transition-colors text-nowrap font-semibold text-sm md:text-md"
                >
                  Get Early Access
                </button>
              </div>
              {/* </form> */}
            </div>
            <div className="relative md:ps-5">
              <span className="relative block mx-auto banner-content rounded-xl overflow-hidden">
                <img
                  src={Images.banner}
                  className="mx-auto relative z-[1] w-full h-full "
                  alt=""
                />
                <button
                  onClick={handleOpen}
                  className="flex items-center gap-2 sm:gap-3 absolute top-0 right-0 md:right-auto md:left-0 z-[1] text-white font-semibold bg-white/10 backdrop-blur-[44px] px-4 sm:px-6 py-1 sm:py-2 rounded-xl m-4 play-animation"
                >
                  <Play size={24} />
                  <span className="text-start">
                    <span className="block text-sm sm:text-base">Watch Demo</span>
                    <span className="text-xs sm:text-sm">2 min</span>
                  </span>
                </button>
              </span>
              <img
                src={Images.pattern}
                className="absolute hidden sm:block bottom-[-60px] z-[0]"
                alt=""
              />
              <img
                src={Images.pattern}
                className="absolute hidden sm:block top-[-70px] z-[0] right-0"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <VideoPlayer isOpen={isOpen} onHide={handleClose} />
      <MailchimpForm isOpen={isForm} onHide={handleCloseForm} />
    </>
  );
};

export default Banner;
