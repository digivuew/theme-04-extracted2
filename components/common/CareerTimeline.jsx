import React from "react";
import Image from "next/image";
import { careerTimeline } from "@/data/careerTimeline";

export default function CareerTimeline() {
  return (
    <section className="education-experience tmp-section-gapTop tmp-section-gapBottom">
      <div className="container">
        <div className="section-head text-center mb--50">
          <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
            Career Timeline{" "}
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
            Over 7 years of progressive experience in pediatric and neonatal care across premier healthcare institutions
          </p>
        </div>

        <div className="row g-5">
          {careerTimeline.map((item) => (
            <div className="col-lg-6 col-md-6" key={item.id}>
              <div
                className={`education-experience-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${item.animationOrder}`}
              >
                <div className="card-head">
                  <span className={`badge ${item.type === 'current' ? 'badge-primary' : 'badge-secondary'} mb-3`}>
                    {item.type === 'current' ? 'Current Position' : item.duration}
                  </span>
                  <h4 className="edu-sub-title">{item.position}</h4>
                  <h3 className="edu-title">
                    {item.organization}
                    <span className="location" style={{ fontSize: '0.9rem', color: '#888', display: 'block', marginTop: '0.5rem' }}>
                      <i className="fa-light fa-location-dot" style={{ marginRight: '0.5rem' }}></i>
                      {item.location}
                    </span>
                  </h3>
                  {item.type === 'current' && (
                    <p className="duration" style={{ color: '#666', marginTop: '0.5rem' }}>
                      {item.duration}
                    </p>
                  )}
                </div>
                <p className="edu-para" style={{ marginTop: '1rem' }}>
                  {item.description}
                </p>
                {item.responsibilities && item.responsibilities.length > 0 && (
                  <ul className="responsibilities-list" style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx} style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: '#666' }}>
                        {resp}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
