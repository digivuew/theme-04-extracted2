import React from "react";
import Image from "next/image";

export default function ProfileSummary() {
  return (
    <section className="tmp-section-gapTop tmp-section-gapBottom" style={{ backgroundColor: '#fff' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="about-us-left-content-wrap" style={{ position: 'relative' }}>
              <div className="years-of-experience-card tmp-scroll-trigger tmp-fade-in animation-order-1" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '2.5rem' }}>
                <h2 className="card-title" style={{ fontSize: '3.5rem', color: '#fff', marginBottom: '0.5rem' }}>
                  7<span style={{ fontSize: '2rem' }}>+</span>
                </h2>
                <p className="card-para" style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1rem' }}>
                  Years of Experience
                </p>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem' }}>
                  in Pediatric & Neonatal Critical Care
                </p>
              </div>
              
              <div className="design-card tmp-scroll-trigger tmp-fade-in animation-order-2" style={{ marginTop: '1.5rem' }}>
                <div className="design-card-img">
                  <div className="icon">
                    <i className="fa-sharp fa-light fa-hospital" />
                  </div>
                </div>
                <div className="card-info">
                  <h3 className="card-title">International Experience</h3>
                  <p className="card-para">DHA Licensed Specialist Paediatrician, Dubai</p>
                </div>
              </div>

              <div className="design-card tmp-scroll-trigger tmp-fade-in animation-order-3" style={{ marginTop: '1rem' }}>
                <div className="design-card-img">
                  <div className="icon">
                    <i className="fa-sharp fa-light fa-baby" />
                  </div>
                </div>
                <div className="card-info">
                  <h3 className="card-title">NICU Specialist</h3>
                  <p className="card-para">Expert in Neonatal Intensive Care</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="about-us-right-content-wrap">
              <div className="section-head text-align-left">
                <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <span className="subtitle">About Dr. Vishrut Singh</span>
                </div>
                <h2 className="title tmp-scroll-trigger tmp-fade-in animation-order-2" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                  Passionate & Dedicated<br />
                  <span style={{ color: 'var(--color-primary)' }}>Paediatrician & Neonatologist</span>
                </h2>
                
                <div className="tmp-scroll-trigger tmp-fade-in animation-order-3">
                  <p className="description" style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                    Dr. Vishrut Singh is a highly qualified and experienced paediatrician and neonatologist with <strong>over 7 years of comprehensive experience</strong> in paediatric and neonatal care across premier healthcare institutions.
                  </p>
                  
                  <p className="description" style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                    Specializing in <strong>paediatric and neonatal critical care</strong>, Dr. Singh is adept at handling complex medical cases, managing international patients, and fostering strong interpersonal relationships within multidisciplinary healthcare teams.
                  </p>

                  <div style={{ 
                    background: '#f8f9fa', 
                    padding: '1.5rem', 
                    borderRadius: '8px',
                    borderLeft: '4px solid var(--color-primary)',
                    marginBottom: '1.5rem'
                  }}>
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#333' }}>
                      <i className="fa-light fa-star" style={{ color: 'var(--color-primary)', marginRight: '0.5rem' }}></i>
                      Academic Excellence
                    </h4>
                    <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>
                        <strong>MBBS Gold Medallist</strong> - King George's Medical University, Lucknow
                      </li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>
                        <strong>MD in Paediatrics</strong> - Lady Hardinge Medical College, New Delhi
                      </li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>
                        <strong>IDPCCM</strong> - Pediatric Critical Care Medicine Certification
                      </li>
                      <li style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>
                        <strong>MRCPCH Part I & II</strong> - Royal College of Paediatrics, UK
                      </li>
                      <li style={{ fontSize: '1rem' }}>
                        <strong>DHA Licensed</strong> - Specialist Paediatrician, Dubai
                      </li>
                    </ul>
                  </div>

                  <div className="row g-4">
                    <div className="col-md-6">
                      <div style={{ display: 'flex', alignItems: 'center', padding: '1rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                        <i className="fa-light fa-stethoscope" style={{ fontSize: '2rem', color: 'var(--color-primary)', marginRight: '1rem' }}></i>
                        <div>
                          <h5 style={{ margin: 0, fontSize: '1.1rem' }}>5000+</h5>
                          <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>Patients Treated</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div style={{ display: 'flex', alignItems: 'center', padding: '1rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                        <i className="fa-light fa-baby-carriage" style={{ fontSize: '2rem', color: 'var(--color-primary)', marginRight: '1rem' }}></i>
                        <div>
                          <h5 style={{ margin: 0, fontSize: '1.1rem' }}>500+</h5>
                          <p style={{ margin: 0, fontSize: '0.9rem', color: '#666' }}>Deliveries Attended</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
