import React from "react";
import Image from "next/image";
import { professionalAchievements, coreCompetencies, professionalValues } from "@/data/achievements";

export default function ProfessionalAchievements() {
  return (
    <section className="tmp-section-gapTop tmp-section-gapBottom">
      <div className="container">
        {/* Professional Values */}
        <div className="section-head text-center mb--50">
          <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Core Values & Approach</span>
          </div>
          <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-2">
            Professional Philosophy{" "}
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
          {professionalValues.map((value) => (
            <div className="col-lg-3 col-md-6" key={value.id}>
              <div className="about-us-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-1" style={{ textAlign: 'center', height: '100%' }}>
                <div className="logo-img" style={{ marginBottom: '1rem' }}>
                  <i className={value.icon} style={{ fontSize: '3rem', color: 'var(--color-primary)' }}></i>
                </div>
                <h3 className="card-title" style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
                  {value.value}
                </h3>
                <p className="card-para">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Achievements */}
        <div className="section-head text-center mb--50 mt--80">
          <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
            Key Responsibilities & Achievements{" "}
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
            Comprehensive approach to pediatric healthcare excellence
          </p>
        </div>

        <div className="row g-4">
          {professionalAchievements.map((achievement) => (
            <div className="col-lg-6" key={achievement.id}>
              <div
                className={`service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order-${achievement.animationOrder}`}
                style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  padding: '1.5rem',
                  height: '100%'
                }}
              >
                <div className="service-card-icon" style={{ marginRight: '1.5rem', marginTop: '0' }}>
                  <i className={achievement.icon} style={{ fontSize: '2rem' }} />
                </div>
                <div>
                  <span className="badge badge-info mb-2" style={{ fontSize: '0.75rem' }}>
                    {achievement.category}
                  </span>
                  <h4 className="service-title" style={{ fontSize: '1.15rem', marginBottom: '0.8rem' }}>
                    {achievement.title}
                  </h4>
                  <p className="service-para" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="section-head text-center mb--50 mt--80">
          <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
            Core Competencies{" "}
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

        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="progress-wrapper">
              {coreCompetencies.map((competency, index) => (
                <div className="progress-charts" key={index}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h6 className="heading heading-h6">{competency.competency}</h6>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.8rem' }}>
                    {competency.description}
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar wow fadeInLeft"
                      data-wow-duration="0.5s"
                      data-wow-delay={`${0.15 * (index + 1)}s`}
                      role="progressbar"
                      style={{
                        width: `${competency.proficiency}%`,
                        visibility: "visible",
                        animationDuration: "0.5s",
                        animationDelay: `${0.15 * (index + 1)}s`,
                        animationName: "fadeInLeft",
                      }}
                      aria-valuenow={competency.proficiency}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <span className="percent-label">{competency.proficiency}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
