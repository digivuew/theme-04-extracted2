import React from "react";
import Image from "next/image";
import Appointment from "./Appointment";
export default function ProjectDetails({ portfolioItem }) {
  const detailContent = portfolioItem.detailContent || {};

  return (
    <div className="project-details-area-wrapper tmp-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="project-details-thumnail-wrap" style={{ marginBottom: '40px' }}>
              <Image
                alt={portfolioItem.altText || portfolioItem.title}
                src={portfolioItem.imageSrc}
                width={1290}
                height={560}
                style={{ borderRadius: '12px', objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="project-details-content-wrap">
              <h2 className="title">{portfolioItem.title}</h2>

              {detailContent.overview && (
                <p className="docs" style={{ fontSize: '17px', fontWeight: '500', color: '#333', marginBottom: '25px' }}>
                  {detailContent.overview}
                </p>
              )}

              {detailContent.story && (
                <>
                  <h3 className="mini-title" style={{ marginTop: '30px', marginBottom: '20px' }}>Case Summary</h3>
                  <p className="docs" style={{ lineHeight: '1.8', marginBottom: '25px' }}>
                    {detailContent.story}
                  </p>
                </>
              )}

              {detailContent.keyPoints && detailContent.keyPoints.length > 0 && (
                <>
                  <h3 className="mini-title" style={{ marginTop: '30px', marginBottom: '20px' }}>Key Clinical Features</h3>
                  <div className="check-box-wrap">
                    <ul>
                      {detailContent.keyPoints.map((point, index) => (
                        <li key={index}>
                          <h4 className="check-box-item">
                            <span>
                              <i className="fa-solid fa-circle-check" />
                            </span>
                            {point}
                          </h4>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {detailContent.outcome && (
                <>
                  <h3 className="mini-title" style={{ marginTop: '30px', marginBottom: '20px' }}>Outcome</h3>
                  <p className="docs" style={{ lineHeight: '1.8', marginBottom: '25px' }}>
                    {detailContent.outcome}
                  </p>
                </>
              )}
            </div>
            {/* Appointment section */}
            <Appointment />
          </div>
          <div className="col-lg-4">
            <div className="signle-side-bar project-details-area tmponhover">
              <div className="header">
                <h3 className="title">Case Details</h3>
              </div>
              <div className="body">
                <div className="project-details-info">
                  Type: <span>{portfolioItem.tags && portfolioItem.tags[0]}</span>
                </div>
                <div className="project-details-info">
                  Specialty: <span>Pediatric Critical Care</span>
                </div>
                <div className="project-details-info">
                  Provider: <span>Dr. Vishrut Singh</span>
                </div>
                <div className="project-details-info">
                  Tags: <span>{portfolioItem.tags && portfolioItem.tags.join(", ")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
