"use client";

import { Images } from "@/data/images";
import React, { useEffect, useRef, useState } from "react";

const Supplement = () => {
  const data = [
    { image: Images.container1, url: "1", title: "Supplement Tracking" },
    { image: Images.container2, url: "2", title: "AI Health Assistant" },
    { image: Images.container3, url: "3", title: "Share with Caregiver" },
    { image: Images.container4, url: "4", title: "Weekly Health Summaries" },
  ];

  const [activeId, setActiveId] = useState(data[0].url);
  const sectionRefs = useRef({});

  // Observe which image section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -50% 0px", // Trigger a bit earlier
        threshold: 0.1,
      }
    );

    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-p-y  bg-white">
      <div className="main-container scroll-smooth">
        <div className="max-w-[850px] mx-auto">
          <h1 className="text-center text-[26px] md:text-[44px] lg:text-[48px] font-semibold text-black leading-tight mb-4">
            Your daily wellness,{" "}
            <span className="text-primary">Organized Smarter</span>{" "}
          </h1>
          <span className="text-[13px] md:text-lg text-davy-gray text-center block md:px-10">
            No more sticky notes or missed doses. Our supplement tracker helps
            you stay on top of your health with easy logs, alerts, and helpful
            details in one clean dashboard.
          </span>
        </div>

        <div className="grid md:grid-cols-[40%_60%]  items-start mt-10 md:mt-20">
          {/* Left Side - Links */}
          <div className="space-y-8 sticky top-[200px] hidden md:block">
            {data.map((item, index) => (
              <div
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  const el = sectionRefs.current[item.url];
                  if (el) {
                    const yOffset = -120;
                    const y =
                      el.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
                className={`pl-6 block cursor-pointer border-l-4 ${
                  activeId === item.url
                    ? "border-teal-600 text-gray-900 font-semibold"
                    : "border-transparent text-gray-400 font-light"
                }`}
              >
                <h3 className="lg:text-xl mb-2">{item.title}</h3>
                <p className="text-xs lg:text-sm">
                  {item.title === "Supplement Tracking"
                    ? "Track what you take and when"
                    : item.title === "AI Health Assistant"
                    ? "Smart reminders and insights"
                    : item.title === "Share with Caregiver"
                    ? "Let loved ones stay in the loop"
                    : "Get visual reports and trends"}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side - Images */}
          <div className="relative flex flex-col gap-5 md:gap-10">
            {data.map((item, index) => (
              <div
                key={index}
                id={item.url}
                ref={(el) => (sectionRefs.current[item.url] = el)}
                className="border-b pb-5 md:pb-10"
              >
                <span className="supplement-image block rounded-lg">
                  <img
                    className="w-full h-full"
                    src={item.image}
                    alt={item.title}
                  />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Supplement;
