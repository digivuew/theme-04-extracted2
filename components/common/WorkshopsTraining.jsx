import React from "react";
import Image from "next/image";
import { workshops, specialRecognitions } from "@/data/certifications";

export default function WorkshopsTraining() {
  // Group workshops by type
  const groupedWorkshops = workshops.reduce((acc, workshop) => {
    if (!acc[workshop.type]) {
      acc[workshop.type] = [];
    }
    acc[workshop.type].push(workshop);
    return acc;
  }, {});

  return (
    <section className="tmp-section-gapTop tmp-section-gapBottom" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="section-head text-center mb--50">
          <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
            Workshops & Conferences{" "}
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
            Continuous professional development through specialized training programs and conferences
          </p>
        </div>

        {/* Special Recognitions */}
        {specialRecognitions && specialRecognitions.length > 0 && (
          <div className="row g-4 mb--60">
            {specialRecognitions.map((recognition) => (
              <div className="col-lg-6" key={recognition.id}>
                <div 
                  className="about-us-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-1"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    padding: '2rem',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: '#fff'
                  }}
                >
                  <div style={{ fontSize: '3rem', marginRight: '1.5rem', opacity: 0.9 }}>
                    <i className={recognition.icon}></i>
                  </div>
                  <div>
                    <span className="badge" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', marginBottom: '0.5rem' }}>
                      {recognition.type}
                    </span>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#fff' }}>
                      {recognition.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '0.95rem', opacity: 0.95 }}>
                      {recognition.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Workshops by Type */}
        {Object.entries(groupedWorkshops).map(([type, items], typeIndex) => (
          <div key={type} className="mb--60">
            <h3 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1" style={{ fontSize: '1.8rem' }}>
              {type}s
              <span style={{ marginLeft: '1rem' }}>
                <Image
                  alt="custom-line"
                  width={60}
                  height={4}
                  src="/assets/images/custom-line/custom-line.png"
                />
              </span>
            </h3>
            
            <div className="row g-4">
              {items.map((workshop, index) => (
                <div className="col-lg-6" key={workshop.id}>
                  <div 
                    className="education-experience-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-1"
                    style={{ height: '100%' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <h4 className="edu-sub-title" style={{ marginBottom: '0.5rem', flex: 1 }}>
                        {workshop.title}
                      </h4>
                      <span 
                        className="badge badge-primary" 
                        style={{ 
                          fontSize: '0.85rem',
                          padding: '0.4rem 0.8rem',
                          marginLeft: '1rem'
                        }}
                      >
                        {workshop.year}
                      </span>
                    </div>
                    <p className="edu-para">{workshop.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
