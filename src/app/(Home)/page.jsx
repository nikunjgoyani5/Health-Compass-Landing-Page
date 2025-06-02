import React from "react";
import Banner from "./Banner";
import Supplement from "./Supplement";
import TestimonialsSection from "./TestimonialSection";
import HealthCompanion from "./HealthCompanion";

const page = () => {
  return (
    <main>
      <Banner id="banner" />
      <HealthCompanion
        id="health_companion_mobile"
        className="section-p-t block md:hidden"
      />
      <Supplement id="supplement" />
      <HealthCompanion
        id="health_companion_desktop"
        className="section-p-b hidden md:block"
      />
      <TestimonialsSection id="testimonials" />
    </main>
  );
};

export default page;
