"use client";
import React from "react";
import Nav1 from "./Nav1";
import Image from "next/image";
import Link from "next/link";
import { openSidebar } from "@/utlis/toggleSidebar";
import { openMobilemenu } from "@/utlis/toggleMobilemenu";
export default function Header1() {
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
                  gap: '0px'
                }}>
                  <Image
                    src="/assets/images/logo/vishrut-singh-site-logo-without-background.png"
                    alt="Vishrut Singh logo"
                    width={56}
                    height={56}
                    style={{
                      display: 'block',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 6px 14px rgba(0, 0, 0, 0.25))'
                    }}
                  />
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
