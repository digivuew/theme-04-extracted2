import React from "react";
import Image from "next/image";
import { nicuExpertise, nicuStats, proceduresExpertise } from "@/data/nicuExpertise";

export default function NicuExpertise() {
  return (
    <section className="tmp-section-gapTop tmp-section-gapBottom" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        {/* Header */}
        <div className="section-head text-center mb--50">
          <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">{nicuExpertise.subtitle}</span>
          </div>
          <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-2">
            {nicuExpertise.title}{" "}
            <span>
              <Image
                alt="custom-line"
                width={81}
                height={6}
                src="/assets/images/custom-line/custom-line.png"
              />
            </span>
          </h2>
          <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {nicuExpertise.description}
          </p>
        </div>

        {/* NICU Stats */}
        <div className="row g-4 mb--80">
          {nicuStats.map((stat) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={stat.id}>
              <div
                className={`counter-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${stat.animationOrder}`}
                style={{ textAlign: 'center', padding: '2rem 1rem' }}
              >
                <div className="icon" style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>
                  <i className={stat.icon}></i>
                </div>
                <h3 className="counter counter-title" style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  {stat.number}{stat.suffix}
                </h3>
                <p className="counter-para" style={{ fontWeight: '600', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                  {stat.label}
                </p>
                <p style={{ fontSize: '0.9rem', color: '#666' }}>
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* NICU Expertise Categories */}
        <div className="row g-5 mb--80">
          {nicuExpertise.categories.map((category) => (
            <div className="col-lg-6" key={category.id}>
              <div
                className={`service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order-${category.animationOrder}`}
                style={{ height: '100%', padding: '2rem' }}
              >
                <div className="service-card-icon" style={{ marginBottom: '1.5rem' }}>
                  <i className={category.icon} style={{ fontSize: '2.5rem' }} />
                </div>
                <h4 className="service-title" style={{ fontSize: '1.5rem', marginBottom: '0.8rem' }}>
                  {category.title}
                </h4>
                <p className="service-para" style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
                  {category.description}
                </p>
                <ul style={{ paddingLeft: '1.5rem', listStyleType: 'disc' }}>
                  {category.skills.map((skill, idx) => (
                    <li key={idx} style={{ marginBottom: '0.8rem', fontSize: '0.95rem', color: '#555', lineHeight: '1.6' }}>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Procedures Expertise */}
        <div className="section-head text-center mb--50">
          <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
            Procedures Proficiency{" "}
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
          <div className="col-lg-8 offset-lg-2">
            <div className="progress-wrapper">
              {proceduresExpertise.map((procedure, index) => (
                <div className="progress-charts" key={index}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <h6 className="heading heading-h6">{procedure.procedure}</h6>
                    <span style={{ fontSize: '0.85rem', color: '#666' }}>{procedure.count} procedures</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: '#888', marginBottom: '0.5rem' }}>
                    {procedure.description}
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar wow fadeInLeft"
                      data-wow-duration="0.5s"
                      data-wow-delay={`${0.2 * (index + 1)}s`}
                      role="progressbar"
                      style={{
                        width: `${procedure.proficiency}%`,
                        visibility: "visible",
                        animationDuration: "0.5s",
                        animationDelay: `${0.2 * (index + 1)}s`,
                        animationName: "fadeInLeft",
                      }}
                      aria-valuenow={procedure.proficiency}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <span className="percent-label">{procedure.proficiency}%</span>
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
