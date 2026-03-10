import React from "react";
import Image from "next/image";
import Link from "next/link";
import { services4 } from "@/data/services";

export default function ServiceDetails({ serviceItem }) {
  const detailContent = serviceItem.detailContent || {
    overview: serviceItem.description,
    sections: []
  };

  return (
    <div className="service-details-area-wrapper tmp-section-gap">
      <div className="container">
        <div className="row row--40">
          <div className="col-lg-8">
            <div className="service-thumnail-wrap" style={{ marginBottom: '35px' }}>
              <Image
                alt={serviceItem.title}
                src={serviceItem.image || "/assets/images/services/service-detials-thumnail-wrap.png"}
                width={850}
                height={476}
                style={{ borderRadius: '8px', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', objectFit: 'cover' }}
              />
            </div>

            {/* Title with icon */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
              {serviceItem.icon && (
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '10px',
                  background: '#FEDD8E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#141414',
                  fontSize: '22px',
                  flexShrink: 0
                }}>
                  <i className={serviceItem.icon} />
                </div>
              )}
              <h2 className="title split-collab" style={{ margin: 0 }}>{serviceItem.title}</h2>
            </div>

            <p className="doc-para" style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '30px' }}>
              {detailContent.overview}
            </p>

            {detailContent.sections && detailContent.sections.map((section, index) => (
              <div key={index} style={{ marginBottom: '30px' }}>
                <h2 className="title-mini split-collab" style={{
                  borderLeft: '3px solid #FEDD8E',
                  paddingLeft: '15px',
                  marginBottom: '15px'
                }}>
                  {section.title}
                </h2>
                <p className="doc-para" style={{ fontSize: '15px', lineHeight: '1.8' }}>
                  {section.content}
                </p>
              </div>
            ))}

            {detailContent.sections.length === 0 && (
              <>
                <h2 className="title-mini split-collab">
                  Expert Pediatric Care
                </h2>
                <p className="doc-para">
                  Dr. Vishrut Singh provides comprehensive pediatric care with a focus on evidence-based medicine and compassionate treatment. With over 9 years of experience in treating children from birth to 18 years, he specializes in managing complex respiratory disorders, infectious diseases, and critical care conditions.
                </p>
                <p className="doc-para">
                  Every consultation focuses on understanding the child's complete medical history, conducting thorough physical examinations, and developing personalized treatment plans. Dr. Singh believes in partnering with families to ensure the best possible outcomes for their children's health and development.
                </p>
              </>
            )}
          </div>
          <div className="col-lg-4">
            <div className="signle-side-bar service-list-area tmponhover" style={{
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 2px 15px rgba(0,0,0,0.06)'
            }}>
              <div className="header" style={{
                background: '#FEDD8E',
                padding: '18px 20px'
              }}>
                <h3 className="title" style={{ margin: 0, color: '#141414', fontSize: '18px' }}>Medical Services</h3>
              </div>
              <div className="body">
                {services4.map((service) => (
                  <Link
                    key={service.id}
                    href={`/service-details-white/${service.slug}`}
                    className={`single-service ${serviceItem.slug === service.slug ? 'active' : ''}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 20px',
                      textDecoration: 'none',
                      borderBottom: '1px solid #f0f0f0',
                      background: serviceItem.slug === service.slug ? '#fef9f0' : 'transparent',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <p className="service-title" style={{
                      margin: 0,
                      fontSize: '14px',
                      fontWeight: serviceItem.slug === service.slug ? '600' : '500',
                      color: serviceItem.slug === service.slug ? '#141414' : '#2a2d31'
                    }}>
                      {service.title}
                    </p>
                    <span className="service-icon" style={{
                      color: serviceItem.slug === service.slug ? '#FEDD8E' : '#999'
                    }}>
                      <i className="fa-solid fa-angle-right" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
