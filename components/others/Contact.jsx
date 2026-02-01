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
        <div className="contact-info-wrap" style={{ marginBottom: '40px' }}>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-1" style={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div className="contact-icon">
                  <i className="fa-solid fa-location-dot" />
                </div>
                <h3 className="title">Clinic Location</h3>
                <a href="https://www.google.com/maps/place/Aster+Clinic/data=!4m2!3m1!1s0x0:0xdbe0fa6f3ac30033?sa=X&ved=1t:2428&ictx=111"
                   target="_blank" rel="noopener noreferrer">
                  <p className="para" style={{ marginBottom: '8px' }}>
                    <i className="fa-solid fa-building" style={{ marginRight: '8px', fontSize: '14px', color: '#FF8FC7' }} />
                    Aster Clinic, Bur Dubai
                  </p>
                  <p className="para">
                    <i className="fa-solid fa-clock" style={{ marginRight: '8px', fontSize: '14px', color: '#FDB900' }} />
                    Mon-Sat: 9AM-1PM, 5PM-9PM
                  </p>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-2" style={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div className="contact-icon">
                  <i className="fa-solid fa-envelope" />
                </div>
                <h3 className="title">E-mail</h3>
                <a href="mailto:vishruts261@gmail.com">
                  <p className="para">
                    <i className="fa-solid fa-at" style={{ marginRight: '8px', fontSize: '14px', color: '#FF8FC7' }} />
                    vishruts261@gmail.com
                  </p>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-3" style={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div className="contact-icon">
                  <i className="fa-solid fa-phone" />
                </div>
                <h3 className="title">Contact</h3>
                <a href="tel:+971504961514">
                  <p className="para">
                    <i className="fa-solid fa-mobile-screen-button" style={{ marginRight: '8px', fontSize: '14px', color: '#FF8FC7' }} />
                    +971 504 961 514
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Appointment Form start */}
      <section id="book-appointment" className="get-in-touch-area tmp-section-gapTop">
        <div className="container">
          <div className="get-in-touch-wrapper tmponhover">
            <div className="row g-5 align-items-center">
              <div className="col-lg-5">
                <div className="contact-inner">
                  <div className="section-head section-head-one-side text-align-left tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <span className="title-left">Schedule Your Appointment</span>
                  </div>
                  <ul className="ft-link v2">
                    <li className="tmp-scroll-trigger tmp-fade-in animation-order-1 tmp-link-animation">
                      <span className="ft-icon">
                        <i className="fa-solid fa-envelope" />
                      </span>
                      <div className="ft-link-wrap">
                        <h4 className="link-title">E-mail:</h4>
                        <a href="mailto:vishruts261@gmail.com">vishruts261@gmail.com</a>
                        <p style={{ fontSize: '14px', color: '#666', marginTop: '5px', marginBottom: '0' }}>Send us your inquiries anytime</p>
                      </div>
                    </li>
                    <li className="tmp-scroll-trigger tmp-fade-in animation-order-2">
                      <span className="ft-icon">
                        <i className="fa-solid fa-location-dot" />
                      </span>
                      <div className="ft-link-wrap">
                        <h4 className="link-title">Clinic Location:</h4>
                        <a href="https://www.google.com/maps/place/Aster+Clinic/data=!4m2!3m1!1s0x0:0xdbe0fa6f3ac30033?sa=X&ved=1t:2428&ictx=111" target="_blank" rel="noopener noreferrer">
                          Aster Clinic, Bur Dubai, Sharaf DG Metro Station, Khalid Bin Al Waleed Road, Dubai, UAE
                        </a>
                        <p style={{ fontSize: '14px', color: '#666', marginTop: '5px', marginBottom: '0' }}>Open Mon-Sat: 9AM-1PM, 5PM-9PM</p>
                      </div>
                    </li>
                    <li className="tmp-scroll-trigger tmp-fade-in animation-order-3 tmp-link-animation">
                      <span className="ft-icon">
                        <i className="fa-solid fa-phone" />
                      </span>
                      <div className="ft-link-wrap">
                        <h4 className="link-title">Contact:</h4>
                        <a href="tel:+971504961514">+971 504 961 514</a>
                        <p style={{ fontSize: '14px', color: '#666', marginTop: '5px', marginBottom: '0' }}>Call us during clinic hours for immediate assistance</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="contact-inner">
                  <div className="section-head section-head-one-side text-align-left tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <span className="title">BOOK AN APPOINTMENT</span>
                  </div>
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
                              placeholder="Enter Name"
                              type="text"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              className="input-field"
                              name="phone"
                              id="contact-phone"
                              placeholder="Phone Number"
                              type="tel"
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
                              placeholder="your@email.com"
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
                              placeholder="Tell us about your child's health concern or reason for appointment..."
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
                                <span className="btn-text">Book appointment now</span>
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
      </section>
      {/* Appointment Form End */}
    </div>
  );
}
