"use client";

import { Images } from "@/data/images";
import React, { useCallback, useState } from "react";
import VideoPlayer from "@/components/VideoPlayer";
import { Play } from "lucide-react";

const Banner = () => {
  const [isOpen, setIsOpen] = useState();

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);
  return (
    <>
      <section className="bg-spring-wood">
        <div className="main-container section-p-y">
          <div className="grid items-center md:grid-cols-[45%_55%] xl:grid-cols-[40%_60%] ">
            <div>
              <h1 className="text-[38px] md:text-[44px] lg:text-[52px] font-semibold text-black leading-tight mb-4">
                Your <span className="text-primary">trusted</span> partner in
                better health.
              </h1>
              <span className="text-md md:text-xl text-davy-gray">
                Join the early access list and get exclusive launch updates
              </span>
              <form action="">
                <div className="flex mt-6 mb-4 sm:mb-10 md:mb-0 sm:mt-10 md:mt-12 bg-white shadow-md rounded-md overflow-hidden max-w-[500px]">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-5 py-4 border border-none focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-500 placeholder:font-semibold text-sm md:text-md"
                  />
                  <button
                    type="submit"
                    className="bg-dark-primary hover:bg-primary px-5 text-white rounded-md hover:bg-primary-dark transition-colors text-nowrap font-semibold text-sm md:text-md"
                  >
                    Get Early Access
                  </button>
                </div>
              </form>
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
                  className="flex items-center gap-3 absolute top-0 left-0 z-[1] text-white font-semibold bg-white/10 backdrop-blur-[44px] px-6 py-2 rounded-xl m-4 play-animation"
                >
                  <Play size={24} />
                  <span className="text-start">
                    <span className="block">Watch Demo</span>
                    <span className="text-sm">2 min</span>
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
    </>
  );
};

export default Banner;
