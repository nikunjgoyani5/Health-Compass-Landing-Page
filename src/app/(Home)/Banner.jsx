"use client";

import { Images } from "@/data/images";
import React, { useCallback, useRef, useState } from "react";
import { Play } from "lucide-react";
import MailchimpForm from "@/components/MailChimpForm";
import Image from "next/image";

const Banner = () => {
  const [isForm, setIsForm] = useState(false);
  const [isVideo, setIsVideo] = useState(true);
  const videoRef = useRef(null);

  const handleOpen = useCallback(() => {
    setIsVideo(false);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  }, []);

  const handleVideoEnd = useCallback(() => {
    setIsVideo(true); // Reset to show image again
  }, []);

  const handleOpenForm = useCallback(() => setIsForm(true), []);
  const handleCloseForm = useCallback(() => setIsForm(false), []);

  return (
    <>
      <section className="bg-spring-wood">
        <div className="main-container section-p-y">
          <div className="grid items-center md:grid-cols-[45%_55%] xl:grid-cols-[40%_60%]">
            <div>
              <h1 className="text-[32px]  md:text-[44px] lg:text-[48px] font-semibold text-black leading-tight mb-4">
                Tired of{" "}
                <span className="text-primary relative">
                  feeling{" "}
                  <Image
                    src={Images.other.titlePattern}
                    width={175}
                    height={12}
                    alt="title pattern"
                    className="absolute left-0 mt-[-4px]"
                  />
                </span>{" "}
                stuck with your health issues?
              </h1>
              <span className="text-sm sm:text-md md:text-lg text-davy-gray">
                Join our early access to discover a smarter way to feel better.
              </span>

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
            </div>

            <div className="relative md:ps-5">
              <span className="relative block mx-auto banner-content rounded-xl overflow-hidden">
                {isVideo ? (
                  <span onClick={handleOpen} className="cursor-pointer">
                    <img
                      style={{ objectFit: "cover", objectPosition: "top" }}
                      src={Images.banner}
                      className="mx-auto relative z-[1] w-full h-full"
                      alt="Banner"
                    />
                    <button className="flex items-center gap-2 sm:gap-3 absolute top-0 right-0 z-[1] text-white font-semibold bg-white/15 backdrop-blur-[64px] px-4 sm:px-2 py-1 sm:py-1 rounded-xl m-4 play-animation">
                      <Play size={24} />
                      <span className="text-start">
                        <span className="block text-sm sm:text-base">
                          Watch Demo
                        </span>
                        <span className="text-xs sm:text-sm">2 min</span>
                      </span>
                    </button>
                  </span>
                ) : (
                  <video
                    ref={videoRef}
                    onEnded={handleVideoEnd}
                    autoPlay
                    muted
                    controls
                    controlsList="nodownload"
                    className="h-full w-full object-cover"
                    src="/video.mp4"
                  />
                )}
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

      <MailchimpForm isOpen={isForm} onHide={handleCloseForm} />
    </>
  );
};

export default Banner;
