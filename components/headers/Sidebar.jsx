"use client";

import { closeSidebar } from "@/utlis/toggleSidebar";

export default function Sidebar() {
  return (
    <div className="d-none d-xl-block">
      <div className="tmp-sidebar-area tmp_side_bar">
        <div className="inner">
          <div className="top-area" style={{
            paddingBottom: '15px',
            borderBottom: '1px solid rgba(0,0,0,0.08)',
            marginBottom: '0'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <a href="/" className="logo" style={{
                display: 'inline-block',
                flexShrink: 0,
                transition: 'transform 0.3s ease'
              }}>
                <img
                  className="logo-dark"
                  alt="Dr. Vishrut Singh - Pediatrician in Dubai"
                  src="/assets/images/logo/vishrut-singh-site-logo-without-background.png"
                  width={70}
                  height={70}
                  style={{ objectFit: 'contain' }}
                />
                <img
                  className="logo-white"
                  alt="Dr. Vishrut Singh - Pediatrician in Dubai"
                  src="/assets/images/logo/vishrut-singh-site-logo-without-background.png"
                  width={70}
                  height={70}
                  style={{ objectFit: 'contain' }}
                />
              </a>
              <a href="/" style={{
                textDecoration: 'none',
                flex: 1,
                transition: 'opacity 0.3s ease'
              }}>
                <h6 style={{
                  fontSize: '15px',
                  fontWeight: '700',
                  marginBottom: '4px',
                  color: '#141414',
                  lineHeight: '1.3',
                  letterSpacing: '0.3px'
                }}>
                  Dr. Vishrut Singh
                </h6>
                <p style={{
                  fontSize: '12px',
                  color: '#666',
                  margin: 0,
                  lineHeight: '1.3',
                  fontWeight: '500'
                }}>
                  Pediatrician & Child Specialist
                </p>
                <p style={{
                  fontSize: '10.5px',
                  color: '#999',
                  margin: 0,
                  marginTop: '3px',
                  fontWeight: '400',
                  letterSpacing: '0.2px'
                }}>
                  MBBS, MD Pediatrics, IDPCCM
                </p>
              </a>
            </div>
            <div className="close-icon-area">
              <button
                className="tmp-round-action-btn close_side_menu_active"
                onClick={closeSidebar}
              >
                <i className="fa-sharp fa-light fa-xmark" />
              </button>
            </div>
          </div>
          <div className="content-wrapper">
            <div style={{ marginBottom: '25px', textAlign: 'center' }}>
              <a href="/">
                <img
                  alt="Dr. Vishrut Singh - Pediatrician in Dubai"
                  src="/assets/images/vishrut-singh.png"
                  width={180}
                  height={90}
                  style={{
                    objectFit: 'cover'
                  }}
                />
              </a>
            </div>
            <h5 className="title" style={{
              fontSize: '17px',
              marginTop: '0',
              marginBottom: '15px',
              fontWeight: '700',
              lineHeight: '1.5',
              color: '#141414'
            }}>
              Expert Pediatric Care for Your Child's Health & Development
            </h5>
            <p className="disc" style={{
              fontSize: '13.5px',
              lineHeight: '1.7',
              marginBottom: '25px',
              color: '#666',
              fontWeight: '400'
            }}>
              Dr. Vishrut Singh is a dedicated pediatrician with over 9 years of experience providing comprehensive healthcare for children from birth through adolescence.
            </p>

            {/* Divider */}
            <div style={{
              height: '1px',
              background: 'linear-gradient(90deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.05) 100%)',
              marginBottom: '25px'
            }} />

            <div className="short-contact-area" style={{ marginBottom: '25px' }}>
              {/* single contact information */}
              <div className="single-contact" style={{
                marginBottom: '18px',
                padding: '12px',
                borderRadius: '8px',
                transition: 'background 0.3s ease'
              }}>
                <i className="fa-solid fa-phone" style={{
                  fontSize: '16px',
                  color: '#141414'
                }} />
                <div className="information tmp-link-animation">
                  <span style={{
                    fontSize: '11px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>Call Now</span>
                  <a href="tel:+971504961514" className="number" style={{
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    +971 504 961 514
                  </a>
                </div>
              </div>
              {/* single contact information end */}
              {/* single contact information */}
              <div className="single-contact" style={{
                marginBottom: '18px',
                padding: '12px',
                borderRadius: '8px',
                transition: 'background 0.3s ease'
              }}>
                <i className="fa-solid fa-envelope" style={{
                  fontSize: '16px',
                  color: '#141414'
                }} />
                <div className="information tmp-link-animation">
                  <span style={{
                    fontSize: '11px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>Email Us</span>
                  <a href="mailto:vishruts261@gmail.com" className="number" style={{
                    fontSize: '13px',
                    fontWeight: '500',
                    wordBreak: 'break-all'
                  }}>
                    vishruts261@gmail.com
                  </a>
                </div>
              </div>
              {/* single contact information end */}
              {/* single contact information */}
              <div className="single-contact" style={{
                marginBottom: '0',
                padding: '12px',
                borderRadius: '8px',
                transition: 'background 0.3s ease'
              }}>
                <i className="fa-solid fa-location-dot" style={{
                  fontSize: '16px',
                  color: '#141414'
                }} />
                <div className="information tmp-link-animation">
                  <span style={{
                    fontSize: '11px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>Clinic Location</span>
                  <a href="https://www.google.com/maps/place/Aster+Clinic/data=!4m2!3m1!1s0x0:0xdbe0fa6f3ac30033?sa=X&ved=1t:2428&ictx=111" target="_blank" rel="noopener noreferrer" className="number" style={{
                    fontSize: '12.5px',
                    lineHeight: '1.6',
                    fontWeight: '500'
                  }}>
                    Aster Clinic, Bur Dubai, Sharaf DG Metro Station, Dubai, UAE
                  </a>
                </div>
              </div>
              {/* single contact information end */}
            </div>

            {/* Divider */}
            <div style={{
              height: '1px',
              background: 'linear-gradient(90deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.05) 100%)',
              marginBottom: '20px'
            }} />

            {/* social area start */}
            <div className="social-wrapper">
              <span className="subtitle" style={{
                fontSize: '11px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '12px',
                display: 'block'
              }}>Connect With Us</span>
              <div className="social-link" style={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap'
              }}>
                <a href="https://www.instagram.com/drvishrut" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{
                  width: '42px',
                  height: '42px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  transition: 'all 0.3s ease',
                  fontSize: '18px'
                }}>
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="https://www.linkedin.com/in/drvishrut" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{
                  width: '42px',
                  height: '42px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  transition: 'all 0.3s ease',
                  fontSize: '18px'
                }}>
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                <a href="https://twitter.com/drvishrut" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{
                  width: '42px',
                  height: '42px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  transition: 'all 0.3s ease',
                  fontSize: '18px'
                }}>
                  <i className="fa-brands fa-twitter" />
                </a>
                <a href="https://www.facebook.com/drvishrut" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{
                  width: '42px',
                  height: '42px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  transition: 'all 0.3s ease',
                  fontSize: '18px'
                }}>
                  <i className="fa-brands fa-facebook-f" />
                </a>
              </div>
            </div>
            {/* social area end */}
          </div>
        </div>
      </div>
      <a
        className="overlay_close_side_menu close_side_menu_active"
        onClick={closeSidebar}
        href="#"
      />
    </div>
  );
}
