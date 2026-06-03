import Copyright from "@/components/footers/Copyright";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import Services from "@/components/services/Services";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
export const metadata = {
  title:
    "Pediatric Services | Comprehensive Child Healthcare by Dr. Vishrut Singh",
  description:
    "Expert pediatric care including vaccinations, growth monitoring, acute illness management, allergy treatment, developmental assessment, newborn care, and preventive health programs",
};
export default function page() {
  return (
    <>
      <div className="tmp-white-version">
        <Header1 />
        <div className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner text-center">
                  <h1 className="title split-collab">Pediatric Services</h1>
                  <ul className="page-list">
                    <li className="tmp-breadcrumb-item">
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li className="icon">
                      <i className="fa-solid fa-angle-right" />
                    </li>
                    <li className="tmp-breadcrumb-item active">Services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Services isLight />

        {/* Call to Action Section */}
        <section style={{ background: '#FEDD8E', padding: '12px 0' }}>
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-8">
                <h2 style={{ color: '#141414', fontSize: '16px', fontWeight: '700', marginBottom: '3px' }}>
                  Ready to Schedule Your Child's Appointment?
                </h2>
                <p style={{ color: '#2a2d31', fontSize: '12px', marginBottom: '0', lineHeight: '1.2' }}>
                  Expert pediatric care is just a call away. Book your consultation today and give your child the quality healthcare they deserve.
                </p>
              </div>
              <div className="col-lg-3 text-right" style={{ textAlign: 'right' }}>
                <Link
                  href="/contact#book-appointment"
                  className="tmp-btn"
                  style={{
                    background: '#141414',
                    color: 'var(--color-primary)',
                    padding: '6px 18px',
                    borderRadius: '50px',
                    fontWeight: '600',
                    fontSize: '11px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.12)'
                  }}
                >
                  Book Appointment
                  <i className="fa-solid fa-calendar-check" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer2 />
        <Copyright /> <CommonComponents />
      </div>
    </>
  );
}
