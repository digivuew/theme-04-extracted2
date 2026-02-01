import Contact from "@/components/common/Contact2";
import Education from "@/components/common/Education";
import Footer2 from "@/components/footers/Footer2";
import Copyright from "@/components/footers/Copyright";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
export const metadata = {
  title:
    "About Dr. Vishrut Singh | Pediatrician in Dubai - Medical Background & Expertise",
  description:
    "Learn about Dr. Vishrut Singh, board-certified Pediatrician with 9+ years of experience. MBBS Gold Medallist, MD Pediatrics, IDPCCM Critical Care certified. Serving at Aster Clinic, Dubai.",
};
export default function page() {
  return (
    <>
      <div className="tmp-white-version">
        <Header1 />
        <div className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner text-center">
                  <h1 className="title split-collab">About Dr. Vishrut Singh</h1>
                  <ul className="page-list">
                    <li className="tmp-breadcrumb-item">
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li className="icon">
                      <i className="fa-solid fa-angle-right" />
                    </li>
                    <li className="tmp-breadcrumb-item active">About</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Introduction Section */}
        <section className="tmp-section-gapTop tmp-section-gapBottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about-us-left-content-wrap bg-vactor-one">
                  <div className="years-of-experience-card tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <h2 className="counter card-title">7+</h2>
                    <p className="card-para">Years of Experience</p>
                  </div>
                  <div className="design-card tmp-scroll-trigger tmp-fade-in animation-order-2">
                    <div className="design-card-img">
                      <div className="icon">
                        <i className="fa-sharp fa-thin fa-award" />
                      </div>
                    </div>
                    <div className="card-info">
                      <h3 className="card-title">MBBS Gold Medallist</h3>
                      <p className="card-para">King George's Medical University</p>
                    </div>
                  </div>
                  <div className="design-card tmp-scroll-trigger tmp-fade-in animation-order-3">
                    <div className="design-card-img">
                      <div className="icon">
                        <i className="fa-sharp fa-thin fa-hospital" />
                      </div>
                    </div>
                    <div className="card-info">
                      <h3 className="card-title">DHA Licensed Specialist</h3>
                      <p className="card-para">Pediatrician, Dubai</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-us-right-content-wrap">
                  <div className="section-head text-align-left mb--50">
                    <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <span className="subtitle">Paediatrics</span>
                    </div>
                    <h2 className="custom-title tmp-scroll-trigger tmp-fade-in animation-order-2" style={{ fontFamily: "'Rubik', sans-serif" }}>
                      Compassionate & Evidence-Based<br />
                      Pediatric Care
                    </h2>
                  </div>
                  
                  <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                    Dr. Vishrut specializes in diagnosing and treating a wide range of health conditions in children from birth to 18 years of age. His areas of expertise include <strong>pediatric respiratory disorders, asthma management, infectious diseases, allergies, and gastrointestinal disorders</strong>. Dr. Vishrut is committed to delivering compassionate, evidence-based care to ensure the optimal health and well-being of every child under his care.
                  </p>
                  
                  <p className="description tmp-scroll-trigger tmp-fade-in animation-order-4">
                    His approach is patient-centered, focusing on both preventive care and effective treatment, with an emphasis on educating parents and guardians about their child's health needs. Dr. Vishrut is dedicated to staying current with the latest advancements in pediatrics, ensuring that his patients receive the highest standard of care.
                  </p>

                  {/* Key Highlights */}
                  <div className="row g-4 tmp-scroll-trigger tmp-fade-in animation-order-5">
                    <div className="col-md-6">
                      <div className="education-experience-card tmponhover">
                        <div className="education-card-icon">
                          <i className="fa-light fa-baby" />
                        </div>
                        <h4 className="edu-sub-title">Specialist</h4>
                        <h2 className="edu-title">Neonatologist</h2>
                        <p className="edu-para">
                          Specialized in NICU management, preterm care, and neonatal critical care
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="education-experience-card tmponhover">
                        <div className="education-card-icon">
                          <i className="fa-light fa-medal" />
                        </div>
                        <h4 className="edu-sub-title">Certifications</h4>
                        <h2 className="edu-title">Advanced Credentials</h2>
                        <p className="edu-para">
                          IDPCCM, MRCPCH I & II, PALS, BLS, NRP certified
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Education />
        <Contact />
        <Footer2
          darkLogo="/assets/images/logo/logo-yello.svg"
          lightLogo="/assets/images/logo/logo-yello.svg"
        />
        <Copyright />
        <CommonComponents />
      </div>
    </>
  );
}
