"use client";
import Image from "next/image";
import Link from "next/link";
import Demomodal from "../modals/Demomodal";
import Chat from "../common/Chat";
import ScrollTop from "../common/ScrollTop";
import Sidebar from "../headers/Sidebar";
import MobileMenu from "../headers/MobileMenu";
import MobileMenuOnepage from "../headers/MobileMenuOnepage";
import { footerLinks, footerLinksWhite } from "@/data/footerLinks";
export default function Footer2({
  darkLogo = "/assets/images/logo/logo-yello.svg",
  lightLogo = "/assets/images/logo/logo-yello.svg",
}) {
  return (
    <>
      <footer className="footer-area footer-style-two-wrapper bg-color-footer bg_images tmp-section-gap">
        <div className="container">
          <div className="footer-main footer-style-two">
            <div className="row g-5">
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-footer-wrapper border-right mr--20">
                  <div className="logo">
                    <Link href={`/`} style={{
                      textDecoration: 'none',
                      fontFamily: 'inherit',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '14px'
                    }}>
                      <div style={{
                        position: 'relative',
                        width: '56px',
                        height: '56px',
                        background: 'linear-gradient(135deg, #FF9A3D 0%, #FDC448 50%, #FFE082 100%)',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 24px rgba(253, 196, 72, 0.4), 0 4px 8px rgba(0, 0, 0, 0.1)',
                        border: '2px solid rgba(255, 255, 255, 0.8)',
                        transform: 'rotate(-3deg)',
                        overflow: 'hidden'
                      }}>
                        {/* Decorative shine effect */}
                        <div style={{
                          position: 'absolute',
                          top: '-50%',
                          left: '-50%',
                          width: '200%',
                          height: '200%',
                          background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
                          transform: 'rotate(45deg)',
                          pointerEvents: 'none'
                        }}></div>

                        {/* Medical heart icon as background */}
                        <div style={{
                          position: 'absolute',
                          fontSize: '32px',
                          opacity: '0.15',
                          color: '#fff',
                          transform: 'rotate(3deg)'
                        }}>❤</div>

                        <span style={{
                          fontWeight: '900',
                          fontSize: '26px',
                          color: '#fff',
                          transform: 'rotate(3deg)',
                          letterSpacing: '-2px',
                          textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                          zIndex: 1,
                          fontFamily: 'inherit'
                        }}>
                          VS
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                        <span style={{
                          fontSize: '22px',
                          fontWeight: '800',
                          color: '#fff',
                          lineHeight: '1',
                          letterSpacing: '-0.8px'
                        }}>
                          Dr. Vishrut Singh
                        </span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{
                            width: '4px',
                            height: '4px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #FF9A3D, #FDC448)',
                            boxShadow: '0 0 8px rgba(253, 196, 72, 0.6)'
                          }}></span>
                          <span style={{
                            fontSize: '11px',
                            fontWeight: '600',
                            color: '#FDC448',
                            letterSpacing: '1px',
                            textTransform: 'uppercase'
                          }}>
                            Pediatrician
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <p className="description">
                    Board-certified Pediatrician specializing in child health and critical care in Dubai
                  </p>
                  <div className="social-link footer">
                    <a href="https://www.instagram.com/dr_vishrut_singh_md/" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-instagram" />
                    </a>
                    <a href="https://www.linkedin.com/in/dr-vishrut-singh-4b671113a" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-linkedin-in" />
                    </a>
                    <a href="https://x.com/vishruts261" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-twitter" />
                    </a>
                    <a href="https://www.facebook.com/DrVishrutSingh" target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-facebook-f" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="quick-link-wrap">
                  <h5 className="ft-title">Quick Link</h5>
                  <ul className="ft-link tmp-scroll-trigger dark-content animation-order-1 tmp-link-animation">
                    {footerLinks.map((item, index) => (
                      <li key={index}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="ft-link tmp-scroll-trigger light-content2 animation-order-1 tmp-link-animation">
                    {footerLinksWhite.map((item, index) => (
                      <li key={index}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="single-footer-wrapper contact-wrap">
                  <h5 className="ft-title">Contact</h5>
                  <ul className="ft-link tmp-scroll-trigger animation-order-1 tmp-link-animation">
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-phone" />
                      </span>
                      <a href="tel:+971504961514">+971504961514</a>
                    </li>
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-envelope" />
                      </span>
                      <a href="mailto:vishruts261@gmail.com">vishruts261@gmail.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="newslatter tmp-scroll-trigger animation-order-1">
                  <h3 className="title">Clinic Locations</h3>
                  <p className="para">
                    <strong>Dubai Clinic:</strong><br />
                    <a href="https://www.google.com/maps/place/Aster+Clinic/data=!4m2!3m1!1s0x0:0xdbe0fa6f3ac30033?sa=X&ved=1t:2428&ictx=111" target="_blank" rel="noopener noreferrer" style={{color: '#FDC448'}}>
                      Aster Clinic, Bur Dubai
                    </a><br />
                    Mon-Sat: 9AM-1PM, 5PM-9PM
                  </p>
                  <p className="para">
                    <strong>India Clinic:</strong><br />
                    <a href="https://www.google.com/search?q=kilkari+children+clinic+ghaziabad+Vishrut+Singh&sca_esv=5c1233ee610bdfb6&sxsrf=ANbL-n4VaqHl3kG_ULajPJ4pjme2KRh5wg%3A1769353869022&ei=jTJ2aZyNAeOMnesPgafkiAg&ved=0ahUKEwjch-Hm_KaSAxVjRmcHHYETGYEQ4dUDCBE&uact=5&oq=kilkari+children+clinic+ghaziabad+Vishrut+Singh&gs_lp=Egxnd3Mtd2l6LXNlcnAiL2tpbGthcmkgY2hpbGRyZW4gY2xpbmljIGdoYXppYWJhZCBWaXNocnV0IFNpbmdoSIYiUG1YliBwAXgBkAEAmAGUAaAB4w2qAQQwLjE0uAEDyAEA-AEBmAICoAKZAcICChAAGLADGNYEGEfCAgYQABgWGB7CAggQABiABBiiBJgDAIgGAZAGBZIHAzEuMaAHsQeyBwMwLjG4B5UBwgcDMC4yyAcDgAgA&sclient=gws-wiz-serp&lqi=Ci9raWxrYXJpIGNoaWxkcmVuIGNsaW5pYyBnaGF6aWFiYWQgVmlzaHJ1dCBTaW5naEjztdDr27CAgAhaQRAEEAUYARgDGAQYBSIva2lsa2FyaSBjaGlsZHJlbiBjbGluaWMgZ2hhemlhYmFkIHZpc2hydXQgc2luZ2gqAggCkgEObWVkaWNhbF9jbGluaWM#rlimm=17556755910220230808" target="_blank" rel="noopener noreferrer" style={{color: '#FDC448'}}>
                      Kilkari Children Clinic, Ghaziabad
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>{" "}
    </>
  );
}
