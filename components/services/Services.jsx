import React from "react";
import Link from "next/link";
import { services4 } from "@/data/services";

export default function Services({ isLight = false }) {
  return (
    <section className="latest-service-area tmp-section-gap">
      <div className="container">
        <div className="section-head mb--50">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Comprehensive Pediatric Care</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Our Medical Services for <br /> Children & Adolescents
          </h2>
          <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3" style={{ textAlign: 'center', maxWidth: '800px', margin: '20px auto 0', color: '#666', fontSize: '18px', lineHeight: '1.7' }}>
            We provide expert pediatric care tailored to each child's unique needs, from newborns to adolescents, ensuring healthy growth and development at every stage.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-6">
            {services4
              .filter((service) => service.column === 1)
              .map((service) => (
                <Link
                  href={`/services/${
                    service.slug
                  }`}
                  className={`service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${service.animationOrder}`}
                  key={service.id}
                  style={{
                    position: 'relative',
                    paddingLeft: '80px',
                    height: '250px',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden'
                  }}
                >
                  {service.icon && (
                    <div className="service-icon-wrapper" style={{
                      position: 'absolute',
                      left: '0',
                      top: '0',
                      width: '60px',
                      height: '60px',
                      borderRadius: '12px',
                      background: '#FEDD8E',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#141414',
                      fontSize: '24px',
                      boxShadow: '0 4px 15px rgba(254, 221, 142, 0.3)',
                      transition: 'all 0.3s ease'
                    }}>
                      <i className={service.icon} />
                    </div>
                  )}
                  <h2 className="service-card-num">
                    <span>{service.num}</span>
                    {service.title}
                  </h2>
                  <p style={{
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    textOverflow: 'ellipsis',
                    fontSize: '15px',
                    lineHeight: '1.7',
                    color: '#666',
                    margin: '15px 0'
                  }}>{service.description}...</p>
                  <div style={{
                    marginTop: 'auto',
                    color: '#FEDD8E',
                    fontSize: '14px',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    Learn More
                    <i className="fa-solid fa-arrow-right" style={{ fontSize: '12px' }} />
                  </div>
                </Link>
              ))}
          </div>

          {/* Column 2 */}
          <div className="col-lg-6 col-sm-6">
            {services4
              .filter((service) => service.column === 2)
              .map((service) => (
                <Link
                  href={`/services/${
                    service.slug
                  }`}
                  className={`service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${service.animationOrder}`}
                  key={service.id}
                  style={{
                    position: 'relative',
                    paddingLeft: '80px',
                    height: '250px',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden'
                  }}
                >
                  {service.icon && (
                    <div className="service-icon-wrapper" style={{
                      position: 'absolute',
                      left: '0',
                      top: '0',
                      width: '60px',
                      height: '60px',
                      borderRadius: '12px',
                      background: '#FEDD8E',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#141414',
                      fontSize: '24px',
                      boxShadow: '0 4px 15px rgba(254, 221, 142, 0.3)',
                      transition: 'all 0.3s ease'
                    }}>
                      <i className={service.icon} />
                    </div>
                  )}
                  <h2 className="service-card-num">
                    <span>{service.num}</span>
                    {service.title}
                  </h2>
                  <p style={{
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    textOverflow: 'ellipsis',
                    fontSize: '15px',
                    lineHeight: '1.7',
                    color: '#666',
                    margin: '15px 0'
                  }}>{service.description}...</p>
                  <div style={{
                    marginTop: 'auto',
                    color: '#FEDD8E',
                    fontSize: '14px',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    Learn More
                    <i className="fa-solid fa-arrow-right" style={{ fontSize: '12px' }} />
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
