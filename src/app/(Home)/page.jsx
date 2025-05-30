import React from "react";
import Banner from "./Banner";
import Supplement from "./Supplement";
import TestimonialsSection from "./TestimonialSection";
import HealthCompanion from "./HealthCompanion";

const page = () => {
  return (
    <main>
      <Banner />
      <Supplement />
      <HealthCompanion />
      <TestimonialsSection />
    </main>
  );
};

export default page;
