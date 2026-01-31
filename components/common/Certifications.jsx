import React from "react";
import Image from "next/image";
import { certifications, academicQualifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section className="tmp-section-gapTop tmp-section-gapBottom">
      <div className="container">
        {/* Academic Qualifications */}
        <div className="section-head text-center mb--50">
          <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
            Academic Qualifications{" "}
            <span>
              <Image
                alt="custom-line"
                width={81}
                height={6}
                src="/assets/images/custom-line/custom-line.png"
              />
            </span>
          </h2>
        </div>

        <div className="row g-5 mb--80">
          {academicQualifications.map((item) => (
            <div className="col-lg-4 col-md-6" key={item.id}>
              <div
                className={`service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order-${item.animationOrder}`}
                style={{ height: '100%' }}
              >
                <div className="service-card-icon">
                  <i className={item.icon} />
                </div>
                <h4 className="service-title" style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                  {item.degree}
                </h4>
                <p className="service-para" style={{ fontWeight: '600', marginBottom: '0.5rem' }}>
                  {item.institution}
                </p>
                <p className="service-para" style={{ color: '#888', marginBottom: '1rem' }}>
                  {item.duration}
                </p>
                {item.achievements && item.achievements.length > 0 && (
                  <ul style={{ paddingLeft: '1.2rem', marginTop: '1rem' }}>
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: '#666' }}>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications and Licenses */}
        <div className="section-head text-center mb--50 mt--80">
          <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
            Certifications & Licenses{" "}
            <span>
              <Image
                alt="custom-line"
                width={81}
                height={6}
                src="/assets/images/custom-line/custom-line.png"
              />
            </span>
          </h2>
          <p className="description tmp-scroll-trigger tmp-fade-in animation-order-2">
            Internationally recognized certifications and specialized training credentials
          </p>
        </div>

        <div className="row g-5">
          {certifications.map((cert) => (
            <div className="col-lg-4 col-md-6" key={cert.id}>
              <div
                className={`about-us-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${cert.animationOrder}`}
                style={{ height: '100%' }}
              >
                <div className="card-head">
                  <div className="logo-img" style={{ marginBottom: '1rem' }}>
                    <i className={cert.icon} style={{ fontSize: '2rem', color: 'var(--color-primary)' }}></i>
                  </div>
                  <span className="badge badge-info mb-2">{cert.category}</span>
                  <h3 className="card-title" style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                    {cert.title}
                  </h3>
                  <p style={{ fontWeight: '600', color: '#888', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    {cert.issuer}
                  </p>
                  <p style={{ color: '#666', fontSize: '0.85rem', marginBottom: '1rem' }}>
                    {cert.year}
                  </p>
                </div>
                <p className="card-para">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
