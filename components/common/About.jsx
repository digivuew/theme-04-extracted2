import React from "react";
import Image from "next/image";
import Link from "next/link";
import OdometerComponent from "./OdometerComponent";
export default function About({ parentClass = "about-us-area" }) {
  return (
    <section className={parentClass} id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-us-left-content-wrap bg-vactor-one">
              <div className="years-of-experience-card tmp-scroll-trigger tmp-fade-in animation-order-1">
                <h2 className="counter card-title">
                  <OdometerComponent max={9} /> +
                </h2>
                <p className="card-para">Years of Experience</p>
              </div>
              <div className="design-card tmp-scroll-trigger tmp-fade-in animation-order-2">
                <div className="design-card-img">
                  <div className="icon">
                    <i className="fa-sharp fa-thin fa-user-doctor" />
                  </div>
                </div>
                <div className="card-info">
                  <h3 className="card-title">Pediatric & Neonatal Care</h3>
                  <p className="card-para">5000+ Patients Treated</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-us-right-content-wrap">
              <div className="section-head text-align-left mb--50">
                <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <span className="subtitle">About Dr. Vishrut</span>
                </div>
                <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                  Compassionate Care for <br />
                  Your Child's Health
                </h2>
                <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                  Dr. Vishrut Singh is a dedicated paediatrician and neonatologist with over 9 years of specialized experience in pediatric and neonatal critical care.
                  He provides comprehensive, evidence-based medical care for children from birth to 18 years, with expertise in NICU management, respiratory disorders, infectious diseases, and critical care.
                </p>
              </div>
              <div className="about-us-section-card row g-5">
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="about-us-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-4">
                    <div className="card-head">
                      <div className="logo-img">
                        <Image
                          alt="logo"
                          src="/assets/images/about/logo-1.svg"
                          width={24}
                          height={24}
                        />
                      </div>
                      <h3 className="card-title">Gold Medallist</h3>
                    </div>
                    <p className="card-para">
                      MBBS Gold Medallist from King George's Medical University, Lucknow
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="about-us-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-5">
                    <div className="card-head">
                      <div className="logo-img">
                        <Image
                          alt="logo"
                          src="/assets/images/about/logo-2.svg"
                          width={24}
                          height={24}
                        />
                      </div>
                      <h3 className="card-title">Specialized Training</h3>
                    </div>
                    <p className="card-para">
                      MD Pediatrics, IDPCCM, MRCPCH I & II, and DHA Licensed Specialist
                    </p>
                  </div>
                </div>
              </div>
              <div className="about-btn mt--40 tmp-scroll-trigger tmp-fade-in animation-order-6">
                <Link
                  className="tmp-btn hover-icon-reverse radius-round"
                  href={`/about-white`}
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Read More About Dr. Vishrut</span>
                    <span className="btn-icon">
                      <i className="fa-sharp fa-regular fa-arrow-right" />
                    </span>
                    <span className="btn-icon">
                      <i className="fa-sharp fa-regular fa-arrow-right" />
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
