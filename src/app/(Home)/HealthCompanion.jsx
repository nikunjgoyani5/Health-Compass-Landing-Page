import React from "react";
import Image from "next/image";
import { Images } from "@/data/images";

const HealthCompanion = () => {
  return (
    <section className="section-p-t relative overflow-hidden">
      {/* Background patterns - positioning needs refinement */}
      <Image
        src={Images.other.healthCompanionRight}
        alt="Pattern Right Top"
        width={200}
        height={200}
        className="hidden md:block absolute top-0 right-0 opacity-50 z-0"
      />

      <Image
        src={Images.other.healthCompanionLeft}
        alt="Pattern Left Bottom"
        width={200}
        height={200}
        className="hidden md:block absolute bottom-0 left-0 opacity-50 z-0"
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 relative inline-block">
          Meet Your{" "}
          <span className="relative inline-block text-dark-primary">
            AI-Powered
            {/* Line image below text */}
            <Image
              src={Images.other.titlePattern}
              width={175}
              height={12}
              alt="title pattern"
              className="absolute left-0"
            />
          </span>{" "}
          Health Companion
        </h2>
        <p className="text-gray-600 text-base max-w-2xl mx-auto mb-12">
          Get real-time health insights, smart supplement reminders, and
          personalized wellness suggestions—all powered by cutting-edge AI.
          Whether you're tracking your vitamins or improving your daily habits,
          our intelligent assistant helps you stay one step ahead.
        </p>

        {/* Main Content Block with light green background */}
        <div className="flex flex-col md:flex-row items-center bg-[#2D918C1A] rounded-lg p-6 md:p-4 max-w-4xl mx-auto shadow-xl">
          {/* Image Section */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
            <Image
              src={Images.other.healthCompanionCenter} // Replace with actual screenshot image path
              alt="Dashboard Screenshot"
              width={600}
              height={400}
              objectFit="contain"
              className="rounded-md"
            />
          </div>

          {/* Text and Button Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#004D49]">
              Your Best AI Health Companion
            </h3>
            {/* Optional: Add a small description here if needed, based on design */}
            {/* <p className="text-gray-700 mb-6">...</p> */}
            <button className="bg-dark-primary text-white px-6 py-3 rounded-full text-sm md:text-base font-semibold  hover:bg-primary transition-colors">
              Request Early Access
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthCompanion;
