import React from "react";
import Image from "next/image";
import Link from "next/link";
import OdometerComponent from "@/components/common/OdometerComponent";
export default function Hero() {
  return (
    <div className="rpp-banner-four-area">
      <div className="container">
        <div className="banner-four-main-wrapper">
          <div className="bg-benner-img-four">
            <Image
              className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
              alt="banner"
              src="/assets/images/1741865220786-Dr Vishruth.png"
              width={760}
              height={616}
              style={{ marginLeft: "-154px" }}
            />
          </div>
          <div className="banner-four-right-bg-img">
            <Image
              alt="banner-img-3"
              src="/assets/images/banner/banner-four-right-bg-img.png"
              width={630}
              height={830}
            />
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="inner">
                <span className="sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Pediatrician & Child Health Specialist
                </span>
                <h1 className="title tmp-scroll-trigger tmp-fade-in animation-order-2">
                  Dr. Vishrut Singh
                </h1>
                <p className="description">
                  Board-certified Pediatrician specializing in respiratory disorders, infectious diseases,
                  asthma, allergy management, and critical care. Committed to delivering compassionate,
                  evidence-based care for children.
                </p>
                <div className="button-area-banner-three tmp-scroll-trigger tmp-fade-in animation-order-4">
                  <Link
                    className="tmp-btn hover-icon-reverse radius-round"
                    href={`/contact-white`}
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Book Appointment</span>
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
            <div className="col-lg-3 col-md-6">
              <div className="banner-right-content tmp-scroll-trigger tmp-fade-in animation-order-5">
                <div className="year-expariance-wrap">
                  <h3 className="counter title">
                    <OdometerComponent max={9} />
                  </h3>
                  <p className="para">
                    Years Of <br />
                    Experience
                  </p>
                </div>
                <div className="find-me-on">
                  <h2 className="find-me-on-title">Connect With Us</h2>
                  <div className="social-link banner">
                    <a href="https://www.instagram.com/dr_vishrut_singh_md/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <i className="fa-brands fa-instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/dr-vishrut-singh-4b671113a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                    <a href="https://www.facebook.com/DrVishrutSingh" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                    <a href="https://x.com/vishruts261" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <i className="fa-brands fa-twitter" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-four-left-bg-img">
        <Image
          alt="banner-img-3"
          src="/assets/images/banner/banner-four-left-bg-img.png"
          width={865}
          height={900}
        />
      </div>
    </div>
  );
}
