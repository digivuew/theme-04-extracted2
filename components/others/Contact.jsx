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
                <h3 className="title">Dubai Clinic</h3>
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
                <h3 className="title">Phone</h3>
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
      {/* Tpm Get In touch start */}
      <section id="book-appointment" className="get-in-touch-area tmp-section-gapTop">
        <div className="container">
          <div className="contact-get-in-touch-wrap">
            <div className="get-in-touch-wrapper tmponhover" style={{
              background: 'linear-gradient(135deg, #FFE4E6 0%, #FFF9E6 50%, #FFECB3 100%)',
              borderRadius: '16px',
              padding: '30px 25px',
              boxShadow: '0 8px 30px rgba(255, 182, 193, 0.15)'
            }}>
              <div className="row g-3">
                <div className="col-lg-12">
                  <div className="section-head text-center" style={{ marginBottom: '15px' }}>
                    <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <span className="subtitle" style={{
                        background: 'linear-gradient(135deg, #FF8FC7 0%, #FFC947 100%)',
                        padding: '8px 20px',
                        borderRadius: '25px',
                        fontSize: '12px',
                        fontWeight: '700',
                        letterSpacing: '1.2px',
                        color: '#fff',
                        display: 'inline-block',
                        boxShadow: '0 3px 12px rgba(255, 143, 199, 0.3)'
                      }}>GET IN TOUCH</span>
                    </div>
                    <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2" style={{
                      marginTop: '10px',
                      marginBottom: '8px',
                      fontSize: '34px',
                      fontWeight: '700'
                    }}>
                      Book Your Appointment Today
                    </h2>
                    <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3" style={{
                      lineHeight: '1.6',
                      color: '#555',
                      fontSize: '14px',
                      maxWidth: '650px',
                      margin: '0 auto 0'
                    }}>
                      Schedule a consultation with Dr. Vishrut Singh for comprehensive pediatric care. We provide expert medical services for children from birth to 18 years.
                    </p>
                  </div>
                </div>

                {/* Quick Info Cards */}
                <div className="col-lg-12">
                  <div style={{
                    maxWidth: '900px',
                    margin: '10px auto 0'
                  }}>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(3, 1fr)',
                      gap: '10px'
                    }}
                    className="quick-info-cards">
                      <div style={{
                        background: 'white',
                        padding: '10px 14px',
                        borderRadius: '12px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}>
                        <div style={{
                          background: 'linear-gradient(135deg, #FF8FC7 0%, #FFC947 100%)',
                          width: '36px',
                          height: '36px',
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <i className="fa-solid fa-clock" style={{ color: 'white', fontSize: '16px' }} />
                        </div>
                        <div style={{ textAlign: 'left' }}>
                          <p style={{ margin: 0, fontSize: '11px', color: '#999', fontWeight: '600' }}>CLINIC HOURS</p>
                          <p style={{ margin: 0, fontSize: '13px', color: '#333', fontWeight: '600' }}>Mon-Sat: 9AM-9PM</p>
                        </div>
                      </div>

                      <div style={{
                        background: 'white',
                        padding: '10px 14px',
                        borderRadius: '12px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}>
                        <div style={{
                          background: 'linear-gradient(135deg, #FF8FC7 0%, #FFC947 100%)',
                          width: '36px',
                          height: '36px',
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <i className="fa-solid fa-user-doctor" style={{ color: 'white', fontSize: '16px' }} />
                        </div>
                        <div style={{ textAlign: 'left' }}>
                          <p style={{ margin: 0, fontSize: '11px', color: '#999', fontWeight: '600' }}>EXPERIENCE</p>
                          <p style={{ margin: 0, fontSize: '13px', color: '#333', fontWeight: '600' }}>9+ Years Pediatrics</p>
                        </div>
                      </div>

                      <div style={{
                        background: 'white',
                        padding: '10px 14px',
                        borderRadius: '12px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}>
                        <div style={{
                          background: 'linear-gradient(135deg, #FF8FC7 0%, #FFC947 100%)',
                          width: '36px',
                          height: '36px',
                          borderRadius: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <i className="fa-solid fa-phone" style={{ color: 'white', fontSize: '16px' }} />
                        </div>
                        <div style={{ textAlign: 'left' }}>
                          <p style={{ margin: 0, fontSize: '11px', color: '#999', fontWeight: '600' }}>RESPONSE TIME</p>
                          <p style={{ margin: 0, fontSize: '13px', color: '#333', fontWeight: '600' }}>Within 24 Hours</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="contact-inner" style={{
                    maxWidth: '900px',
                    margin: '0 auto'
                  }}>
                    <div className="contact-form">
                      <div id="form-messages" className="error" />
                      <style jsx>{`
                        .input-field {
                          background: white !important;
                          border: 2px solid rgba(255, 182, 193, 0.3) !important;
                          border-radius: 12px !important;
                          padding: 14px 18px !important;
                          width: 100% !important;
                          transition: all 0.3s ease !important;
                          font-size: 15px !important;
                          box-shadow: 0 2px 8px rgba(255, 182, 193, 0.08) !important;
                        }
                        .input-field:focus {
                          border-color: #FF69B4 !important;
                          outline: none !important;
                          box-shadow: 0 0 0 4px rgba(255, 105, 180, 0.1), 0 4px 12px rgba(253, 185, 0, 0.15) !important;
                          background: #FFFAF0 !important;
                        }
                        .input-field::placeholder {
                          color: #999 !important;
                        }
                        textarea.input-field {
                          min-height: 100px !important;
                          resize: vertical !important;
                        }
                        @media (max-width: 992px) {
                          .quick-info-cards {
                            grid-template-columns: 1fr !important;
                            max-width: 500px !important;
                            padding: 0 !important;
                            margin: 0 auto !important;
                            gap: 12px !important;
                          }
                        }
                        @media (min-width: 993px) and (max-width: 1200px) {
                          .quick-info-cards {
                            grid-template-columns: repeat(3, 1fr) !important;
                            gap: 12px !important;
                            padding: 0 !important;
                          }
                        }
                        @media (max-width: 768px) {
                          .get-in-touch-wrapper {
                            padding: 20px 15px !important;
                          }
                          .contact-inner {
                            max-width: 100% !important;
                          }
                          .input-field {
                            padding: 12px 16px !important;
                          }
                        }
                      `}</style>
                      <form
                        className="tmp-dynamic-form"
                        id="contact-form"
                        ref={form}
                        onSubmit={sandMail}
                      >
                        <div className="contact-form-wrapper row" style={{
                          rowGap: '12px'
                        }}>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label style={{
                                display: 'block',
                                marginBottom: '6px',
                                fontWeight: '700',
                                color: '#333',
                                fontSize: '13px',
                                letterSpacing: '0.3px'
                              }}>Your Name *</label>
                              <input
                                className="input-field"
                                name="name"
                                id="contact-name"
                                placeholder="Enter your full name"
                                type="text"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label style={{
                                display: 'block',
                                marginBottom: '6px',
                                fontWeight: '700',
                                color: '#333',
                                fontSize: '13px',
                                letterSpacing: '0.3px'
                              }}>Phone Number *</label>
                              <input
                                className="input-field"
                                id="contact-phone"
                                placeholder="+971 XX XXX XXXX"
                                type="tel"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label style={{
                                display: 'block',
                                marginBottom: '6px',
                                fontWeight: '700',
                                color: '#333',
                                fontSize: '13px',
                                letterSpacing: '0.3px'
                              }}>Email Address *</label>
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
                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label style={{
                                display: 'block',
                                marginBottom: '6px',
                                fontWeight: '700',
                                color: '#333',
                                fontSize: '13px',
                                letterSpacing: '0.3px'
                              }}>Subject</label>
                              <input
                                className="input-field"
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Appointment subject"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <label style={{
                                display: 'block',
                                marginBottom: '6px',
                                fontWeight: '700',
                                color: '#333',
                                fontSize: '13px',
                                letterSpacing: '0.3px'
                              }}>Your Message *</label>
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
                            <div className="tmp-button-here" style={{
                              marginTop: '3px'
                            }}>
                              <button
                                className="tmp-btn hover-icon-reverse radius-round"
                                name="submit"
                                type="submit"
                                id="submit"
                                style={{
                                  background: 'linear-gradient(135deg, #FF8FC7 0%, #FFC947 100%)',
                                  border: 'none',
                                  padding: '14px 28px',
                                  fontSize: '15px',
                                  fontWeight: '700',
                                  color: '#fff',
                                  boxShadow: '0 6px 25px rgba(255, 143, 199, 0.4)',
                                  transition: 'all 0.3s ease',
                                  width: '100%',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.transform = 'translateY(-3px)';
                                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(255, 143, 199, 0.5)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.transform = 'translateY(0)';
                                  e.currentTarget.style.boxShadow = '0 6px 25px rgba(255, 143, 199, 0.4)';
                                }}
                              >
                                <span className="icon-reverse-wrapper" style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  gap: '10px'
                                }}>
                                  <span className="btn-text">
                                    Book Appointment Now
                                  </span>
                                  <span className="btn-icon">
                                    <i className="fa-sharp fa-regular fa-arrow-right" />
                                  </span>
                                  <span className="btn-icon">
                                    <i className="fa-sharp fa-regular fa-arrow-right" />
                                  </span>
                                </span>
                              </button>

                              {/* What Happens Next */}
                              <div style={{
                                marginTop: '15px',
                                padding: '10px 16px',
                                background: 'rgba(255, 255, 255, 0.7)',
                                borderRadius: '12px',
                                border: '1px solid rgba(255, 182, 193, 0.3)',
                                width: '100%'
                              }}>
                                <div style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '10px',
                                  flexWrap: 'wrap'
                                }}>
                                  <i className="fa-solid fa-circle-info" style={{
                                    color: '#FF8FC7',
                                    fontSize: '18px'
                                  }} />
                                  <span style={{
                                    fontSize: '13px',
                                    color: '#555',
                                    lineHeight: '1.6'
                                  }}>
                                    <strong style={{ color: '#333', fontWeight: '700' }}>What Happens Next?</strong> We'll review your request within 24 hours <span style={{ color: '#FF8FC7', margin: '0 6px' }}>•</span> Our team will contact you to confirm <span style={{ color: '#FF8FC7', margin: '0 6px' }}>•</span> You'll receive confirmation with clinic details
                                  </span>
                                </div>
                              </div>
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
