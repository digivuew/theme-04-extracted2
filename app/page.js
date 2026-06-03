import About from "@/components/common/About";
import Contact from "@/components/common/Contact";
import Experiences2 from "@/components/common/Experiences2";
import Skills3 from "@/components/common/Skills3";
import Testimonials from "@/components/common/Testimonials";
import TextAnim from "@/components/common/TextAnim";
import Copyright from "@/components/footers/Copyright";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import Blogs from "@/components/homes/home-4/Blogs";
import Hero from "@/components/homes/home-4/Hero";
import Portfolios2 from "@/components/homes/home-4/Portfolios2";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";

export const metadata = {
  title:
    "Dr. Vishrut Singh - Pediatrician in Dubai | Child Health Specialist at Aster Clinic",
  description:
    "Dr. Vishrut Singh is a board-certified Pediatrician specializing in pediatric respiratory disorders, infectious diseases, asthma, allergy management, and critical care. Located at Aster Clinic, Bur Dubai with 9+ years of experience.",
};

export default function Home() {
  return (
    <>
      <div className="tmp-white-version">
        <div className="color-primary-3rd">
          <Header1 />
          <Hero />
          <TextAnim />
          <About />
          <Experiences2 />
          <Testimonials />
          <Skills3 />
          <Portfolios2 isLight />
          <Contact />
          <Blogs isLight />
          <Footer2 />
          <Copyright />
          <CommonComponents />
        </div>
      </div>
    </>
  );
}
