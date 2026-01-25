import React from "react";
import Image from "next/image";
export default function ServiceDetails({ serviceItem }) {
  return (
    <div className="service-details-area-wrapper tmp-section-gap">
      <div className="container">
        <div className="row row--40">
          <div className="col-lg-8">
            <div className="service-thumnail-wrap">
              <Image
                alt="thumnail-img"
                src="/assets/images/services/service-detials-thumnail-wrap.png"
                width={850}
                height={476}
              />
            </div>
            <h2 className="title split-collab">{serviceItem.title}</h2>
            <p className="doc-para">
              Dr. Vishrut Singh provides comprehensive pediatric care with a focus on evidence-based medicine and compassionate treatment. With over 9 years of experience in treating children from birth to 18 years, he specializes in managing complex respiratory disorders, infectious diseases, and critical care conditions.
            </p>
            <h2 className="title-mini split-collab">
              Areas of Medical Expertise
            </h2>
            <p className="doc-para">
              Dr. Singh's practice encompasses a wide range of pediatric specializations, including respiratory disorders such as asthma, bronchitis, and pneumonia. His expertise in infectious disease management helps families navigate common childhood illnesses as well as complex infections requiring specialized care.
            </p>
            <p className="doc-para">
              With advanced training in Pediatric Critical Care Medicine (IDPCCM) from Fortis Memorial Research Institute, Dr. Singh is equipped to handle emergency pediatric situations and provide intensive care for critically ill children. His training includes management of severe respiratory distress, sepsis, and other life-threatening conditions.
            </p>
            <h2 className="title-mini split-collab">
              Comprehensive Patient Care Approach
            </h2>
            <p className="doc-para">
              Every consultation focuses on understanding the child's complete medical history, conducting thorough physical examinations, and developing personalized treatment plans. Dr. Singh believes in partnering with families to ensure the best possible outcomes for their children's health and development.
            </p>
            <p className="doc-para">
              The practice emphasizes preventive care, including vaccination schedules, growth monitoring, developmental assessments, and nutrition counseling. Regular follow-ups and clear communication help families feel supported throughout their child's healthcare journey.
            </p>
            <p className="doc-para">
              Dr. Singh's patient-centered approach combines clinical excellence with empathy, ensuring that both children and parents feel comfortable and well-informed about treatment options. His commitment to continuing medical education ensures that patients benefit from the latest advances in pediatric medicine.
            </p>
          </div>
          <div className="col-lg-4">
            <div className="signle-side-bar service-list-area tmponhover">
              <div className="header">
                <h3 className="title">Medical Services</h3>
              </div>
              <div className="body">
                <a href="#" className="single-service">
                  <p className="service-title">Respiratory Care</p>
                  <span className="service-icon">
                    <i className="fa-solid fa-angle-right" />
                  </span>
                </a>
                <a href="#" className="single-service">
                  <p className="service-title">Infectious Diseases</p>
                  <span className="service-icon">
                    <i className="fa-solid fa-angle-right" />
                  </span>
                </a>
                <a href="#" className="single-service">
                  <p className="service-title">Critical Care</p>
                  <span className="service-icon">
                    <i className="fa-solid fa-angle-right" />
                  </span>
                </a>
                <a href="#" className="single-service">
                  <p className="service-title">Asthma Management</p>
                  <span className="service-icon">
                    <i className="fa-solid fa-angle-right" />
                  </span>
                </a>
                <a href="#" className="single-service">
                  <p className="service-title">Allergy Treatment</p>
                  <span className="service-icon">
                    <i className="fa-solid fa-angle-right" />
                  </span>
                </a>
                <a href="#" className="single-service">
                  <p className="service-title">Vaccination & Immunization</p>
                  <span className="service-icon">
                    <i className="fa-solid fa-angle-right" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
