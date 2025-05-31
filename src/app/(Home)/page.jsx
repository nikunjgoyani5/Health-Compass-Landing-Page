import React from "react";
import Banner from "./Banner";
import Supplement from "./Supplement";
import TestimonialsSection from "./TestimonialSection";
import HealthCompanion from "./HealthCompanion";

const page = () => {
  return (
    <main>
      <Banner />
      <HealthCompanion className="section-p-t block md:hidden" />
      <Supplement />
      <HealthCompanion className="section-p-b hidden md:block"/>
      <TestimonialsSection />
    </main>
  );
};

export default page;
