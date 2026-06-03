'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function FloatingAppointmentButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle scrolling when on contact page with hash
  useEffect(() => {
    const hash = window.location.hash;
    if (pathname === '/contact' && hash === '#book-appointment') {
      setTimeout(() => {
        const element = document.getElementById('book-appointment');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  }, [pathname]);

  const handleClick = (e) => {
    if (pathname === '/contact') {
      e.preventDefault();
      const element = document.getElementById('book-appointment');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const buttonStyle = {
    position: 'fixed',
    bottom: isScrolled ? '150px' : '90px',
    right: '20px',
    background: '#FFD54F',
    color: 'white',
    width: '55px',
    height: '55px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22px',
    boxShadow: isHovered ? '0 4px 15px rgba(255, 213, 79, 0.4)' : '0 2px 10px rgba(255, 213, 79, 0.3)',
    cursor: 'pointer',
    zIndex: '999',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    transform: isHovered ? 'translateY(-3px)' : 'translateY(0)',
  };

  const tooltipStyle = {
    position: 'absolute',
    bottom: '70px',
    right: '0',
    background: 'white',
    color: '#333',
    padding: '10px 16px',
    borderRadius: '10px',
    fontSize: '13px',
    fontWeight: '600',
    whiteSpace: 'nowrap',
    opacity: isHovered ? '1' : '0',
    visibility: isHovered ? 'visible' : 'hidden',
    transition: 'all 0.3s ease',
    pointerEvents: 'none',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
    border: '1px solid rgba(255, 213, 79, 0.3)',
  };

  const arrowStyle = {
    position: 'absolute',
    bottom: '-6px',
    right: '17px',
    width: '0',
    height: '0',
    borderLeft: '6px solid transparent',
    borderRight: '6px solid transparent',
    borderTop: '6px solid white',
  };

  return (
    <div className={`floating-appointment-wrap${isScrolled ? ' is-scrolled' : ''}`} style={{ position: 'fixed', bottom: isScrolled ? '150px' : '90px', right: '20px', zIndex: '999' }}>
      <div style={tooltipStyle}>
        Book Appointment
        <div style={arrowStyle}></div>
      </div>
      <Link
        href="/contact#book-appointment"
        onClick={handleClick}
        className="floating-appointment-btn"
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Book Appointment"
      >
        <i className="fa-solid fa-calendar-check"></i>
      </Link>
    </div>
  );
}
