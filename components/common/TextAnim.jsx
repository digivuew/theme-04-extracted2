import Image from "next/image";

export default function TextAnim() {
  return (
    <div className="about-content-area">
      <div className="container tmp-section-gap">
        <div className="text-para-doc-wrap">
          <h2 className="text-para-documents tmp-scroll-trigger tmp-fade-in inv-title-animation-wrap animation-order-1">
            Providing <span>comprehensive</span> pediatric care for children from birth to 18 years,
            specializing in <span>respiratory disorders</span>, infectious diseases, and critical care.
            Committed to delivering compassionate, evidence-based treatment with{" "}
            <span>9+ years</span> of dedicated medical practice in pediatrics
          </h2>
          <div className="right-bg-text-para">
            <Image
              alt=""
              src="/assets/images/banner/right-bg-text-para-doc.png"
              width={614}
              height={268}
            />
          </div>
          <div className="left-bg-text-para">
            <Image
              alt=""
              src="/assets/images/banner/left-bg-text-para-doc.png"
              width={614}
              height={268}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
