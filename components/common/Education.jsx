import React from "react";
import Image from "next/image";
import { educationExperienceData, professionalExperienceTimeline, significantAchievements } from "@/data/education";

export default function Education() {
  return (
    <section className="education-experience tmp-section-gapTop">
      <div className="container">
        <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
          Education{" "}
          <span>
            <Image
              alt="custom-line"
              width={81}
              height={6}
              src="/assets/images/custom-line/custom-line.png"
            />
          </span>
        </h2>
        <div className="row g-5">
          {educationExperienceData.map((item, index) => (
            <div className="col-lg-6 col-sm-6" key={index}>
              <div
                className={`education-experience-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${item.animationOrder}`}
              >
                <h4 className="edu-sub-title">{item.role} {item.emoji}</h4>
                <h2 className="edu-title">{item.duration}</h2>
                <p className="edu-para"><strong>{item.institution}</strong></p>
                <p className="edu-para">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="experiences-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="experiences-wrap-left-content">
                <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Professional Experience{" "}
                  <span>
                    <Image
                      alt="custom-line"
                      width={81}
                      height={6}
                      src="/assets/images/custom-line/custom-line.png"
                    />
                  </span>
                </h2>
                {professionalExperienceTimeline.slice(0, 4).map((item, index) => (
                  <div
                    key={index}
                    className={`experience-content tmp-scroll-trigger tmp-fade-in animation-order-${item.animationOrder}`}
                  >
                    <h2 className="ex-name">{item.title}</h2>
                    <h3 className="ex-title">{item.hospital}</h3>
                    <p className="ex-para">{item.year}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="experiences-wrap-right-content">
                <Image
                  className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                  alt="Happy healthy child - pediatric wellness"
                  width={630}
                  height={479}
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1260&h=958&fit=crop"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="experiences-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="experiences-wrap-right-content">
                <Image
                  className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                  alt="Newborn baby receiving pediatric care"
                  width={630}
                  height={479}
                  src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1260&h=958&fit=crop"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="experiences-wrap-left-content">
                {professionalExperienceTimeline.slice(4, 8).map((item, index) => (
                  <div 
                    key={index}
                    className={`experience-content tmp-scroll-trigger tmp-fade-in animation-order-${item.animationOrder}`}
                  >
                    <h2 className="ex-name">{item.title}</h2>
                    <h3 className="ex-title">{item.hospital}</h3>
                    <p className="ex-para">{item.year}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="achievements-section tmp-section-gapTop">
          <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
            Significant Achievements{" "}
            <span>
              <Image
                alt="custom-line"
                width={81}
                height={6}
                src="/assets/images/custom-line/custom-line.png"
              />
            </span>
          </h2>
          <div className="row g-4">
            {significantAchievements.map((achievement) => (
              <div className="col-lg-6 col-md-6" key={achievement.id}>
                <div className="achievement-card tmp-scroll-trigger tmp-fade-in">
                  <div className="achievement-icon">
                    <i className={achievement.icon} />
                  </div>
                  <div className="achievement-content">
                    <h3 className="achievement-title">{achievement.title}</h3>
                    <p className="achievement-description">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
