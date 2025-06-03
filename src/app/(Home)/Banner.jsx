"use client";

import { Images } from "@/data/images";
import React, { useCallback, useRef, useState } from "react";
import { Play } from "lucide-react";
import MailchimpForm from "@/components/MailChimpForm";
import Image from "next/image";

const Banner = ({ id }) => {
  const [isForm, setIsForm] = useState(false);
  const [email, setEmail] = useState("");
  const [isVideo, setIsVideo] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const handleOpen = useCallback(() => {
    setShowVideo(true); // Show the <video> tag
  }, []);

  const handleVideoReady = useCallback(() => {
    setVideoReady(true); // Reveal the video only after it's ready
    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  }, []);

  const handleVideoEnd = useCallback(() => {
    setIsVideo(true);
    setVideoReady(false);
    setShowVideo(false);
  }, []);

  const handleOpenForm = useCallback(() => {
    setIsForm(true);
  }, []);

  const handleCloseForm = useCallback(() => setIsForm(false), []);

  return (
    <>
      <section id={id} className="bg-spring-wood">
        <div className="main-container relative pb-[4%] pt-[2%] md:pt-[3%]">
          <div className="grid items-center md:grid-cols-[45%_55%] xl:grid-cols-[40%_60%]">
            <div>
              <h1
                data-aos="fade-up"
                className="text-[32px] md:text-[44px] lg:text-[48px] font-semibold text-black leading-tight mb-4"
              >
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
              <span
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-sm block sm:text-md md:text-lg text-davy-gray"
              >
                Join our early access to discover a smarter way to feel better.
              </span>

              <div
                data-aos="fade-up"
                data-aos-delay="500"
                className="flex mt-6 mb-4 sm:mb-10 md:mb-0 sm:mt-10 md:mt-12 bg-white shadow-md rounded-md overflow-hidden max-w-[500px]"
              >
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 border !border-none focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-500 placeholder:font-semibold text-sm md:text-md"
                />
                <button
                  onClick={handleOpenForm}
                  type="submit"
                  className="bg-dark-primary hover:bg-light-primary px-7 text-white rounded-md hover:bg-primary-dark transition-colors text-nowrap font-bold text-sm md:text-[15px]"
                >
                  Try it Now
                </button>
              </div>
            </div>

            {/* Video / Image section */}
            <div className="relative md:ps-5">
              <span className="relative block mx-auto banner-content rounded-xl overflow-hidden">
                {isVideo && !showVideo ? (
                  <span onClick={handleOpen} className="cursor-pointer">
                    <img
                      data-aos="zoom-out"
                      style={{ objectFit: "cover", objectPosition: "top" }}
                      src={Images.banner}
                      className="mx-auto relative z-[1] w-full h-full"
                      alt="Banner"
                    />
                    <button className="flex items-center gap-2 sm:gap-3 absolute top-0 right-0 z-[1] text-white font-semibold bg-black/10 sm:bg-black/12 backdrop-blur-[64px] px-4 sm:px-4 py-3 sm:py-4 rounded-xl m-4 play-animation">
                      <Play size={24} />
                      <span className="text-start hidden">
                        <span className="block text-sm sm:text-base">
                          Watch Demo
                        </span>
                        <span className="text-xs sm:text-sm">2 min</span>
                      </span>
                    </button>
                  </span>
                ) : (
                  <>
                    {/* Show image fallback until video is ready */}
                    {!videoReady && (
                      <img
                        style={{ objectFit: "cover", objectPosition: "top" }}
                        src={Images.banner}
                        className="mx-auto relative z-[1] w-full h-full absolute top-0 left-0"
                        alt="Fallback Banner"
                      />
                    )}
                    <video
                      ref={videoRef}
                      onCanPlay={handleVideoReady}
                      onEnded={handleVideoEnd}
                      autoPlay
                      playsInline
                      controls
                      controlsList="nodownload"
                      className={`h-full w-full object-cover transition-opacity duration-300 ${
                        videoReady ? "opacity-100" : "opacity-0"
                      }`}
                      src="/video.mp4"
                    />
                  </>
                )}
              </span>

              <img
                src={Images.pattern}
                className="absolute hidden sm:block top-[-70px] z-[0] right-0"
                alt=""
              />
            </div>
            <img
              src={Images.pattern}
              className="absolute hidden xl:block xl:bottom-[0%] left-[50%] translate-x-[-50%] z-[0]"
              alt=""
            />
          </div>
        </div>
      </section>

      <MailchimpForm email={email} isOpen={isForm} onHide={handleCloseForm} />
    </>
  );
};

export default Banner;
