"use client";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { toast } from "react-toastify";

export default function Contact() {
  const form = useRef();

  const sandMail = (e) => {
    e.preventDefault();
    // Email sending is currently disabled
    toast.info("Coming Soon", {
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    form.current.reset();
  };
  return (
    <div className="contact-area-wrapper tmp-section-gap">
      <div className="container">
        <div className="contact-info-wrap">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-1">
                <div className="contact-icon">
                  <i className="fa-solid fa-location-dot" />
                </div>
                <h3 className="title">Dubai Clinic</h3>
                <a href="https://www.google.com/maps/place/Aster+Clinic/data=!4m2!3m1!1s0x0:0xdbe0fa6f3ac30033?sa=X&ved=1t:2428&ictx=111"
                   target="_blank" rel="noopener noreferrer">
                  <p className="para">Aster Clinic, Bur Dubai</p>
                  <p className="para">Mon-Sat: 9AM-1PM, 5PM-9PM</p>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-2">
                <div className="contact-icon">
                  <i className="fa-solid fa-envelope" />
                </div>
                <h3 className="title">E-mail</h3>
                <a href="mailto:vishruts261@gmail.com">
                  <p className="para">vishruts261@gmail.com</p>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-3">
                <div className="contact-icon">
                  <i className="fa-solid fa-phone" />
                </div>
                <h3 className="title">Phone</h3>
                <a href="tel:+971504961514">
                  <p className="para">+971504961514</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Tpm Get In touch start */}
      <section className="get-in-touch-area tmp-section-gapTop">
        <div className="container">
          <div className="contact-get-in-touch-wrap">
            <div className="get-in-touch-wrapper tmponhover">
              <div className="row g-5 align-items-center">
                <div className="col-lg-5">
                  <div className="section-head text-align-left">
                    <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <span className="subtitle">GET IN TOUCH</span>
                    </div>
                    <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                      Book Your Appointment Today
                    </h2>
                    <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                      Schedule a consultation with Dr. Vishrut Singh for comprehensive pediatric care. We provide expert medical services for children from birth to 18 years, specializing in respiratory disorders, infectious diseases, and critical care.
                    </p>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="contact-inner">
                    <div className="contact-form">
                      <div id="form-messages" className="error" />
                      <form
                        className="tmp-dynamic-form"
                        id="contact-form"
                        ref={form}
                        onSubmit={sandMail}
                      >
                        <div className="contact-form-wrapper row">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <input
                                className="input-field"
                                name="name"
                                id="contact-name"
                                placeholder="Your Name"
                                type="text"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <input
                                className="input-field"
                                id="contact-phone"
                                placeholder="Phone Number"
                                type="number"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <input
                                className="input-field"
                                id="contact-email"
                                name="email"
                                placeholder="Your Email"
                                type="email"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <input
                                className="input-field"
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Subject"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <textarea
                                className="input-field"
                                placeholder="Your Message"
                                name="message"
                                id="contact-message"
                                required
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="tmp-button-here">
                              <button
                                className="tmp-btn hover-icon-reverse radius-round w-100"
                                name="submit"
                                type="submit"
                                id="submit"
                              >
                                <span className="icon-reverse-wrapper">
                                  <span className="btn-text">
                                    Book appointment now
                                  </span>
                                  <span className="btn-icon">
                                    <i className="fa-sharp fa-regular fa-arrow-right" />
                                  </span>
                                  <span className="btn-icon">
                                    <i className="fa-sharp fa-regular fa-arrow-right" />
                                  </span>
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tpm Get In touch End */}
    </div>
  );
}
