"use client";
import React from "react";
import Nav1 from "./Nav1";
import Image from "next/image";
import Link from "next/link";
import { openSidebar } from "@/utlis/toggleSidebar";
import { openMobilemenu } from "@/utlis/toggleMobilemenu";
export default function Header1({
  darkLogo = "/assets/images/logo/logo-yello.svg",
  lightLogo = "/assets/images/logo/logo-yello.svg",
}) {
  return (
    <header className="tmp-header-area-start header-one header--sticky header--transparent">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-content">
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
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 12px 32px rgba(253, 196, 72, 0.5), 0 6px 12px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'rotate(-3deg) scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(253, 196, 72, 0.4), 0 4px 8px rgba(0, 0, 0, 0.1)';
                  }}
                  >
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
                      background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
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
                        color: '#FF9A3D',
                        letterSpacing: '1px',
                        textTransform: 'uppercase'
                      }}>
                        Pediatrician
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
              <nav className="tmp-mainmenu-nav d-none d-xl-block">
                <Nav1 />
              </nav>
              <div className="tmp-header-right">
                <div className="social-share-wrapper d-none d-md-block">
                  <div className="social-link">
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
                <div className="actions-area">
                  <div className="tmp-side-collups-area d-none d-xl-block">
                    <button
                      className="tmp-menu-bars tmp_button_active"
                      onClick={openSidebar}
                    >
                      <i className="fa-regular fa-bars-staggered" />
                    </button>
                  </div>
                  <div className="tmp-side-collups-area d-block d-xl-none">
                    <button
                      className="tmp-menu-bars humberger_menu_active"
                      onClick={openMobilemenu}
                    >
                      <i className="fa-regular fa-bars-staggered" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
