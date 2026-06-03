import Copyright from "@/components/footers/Copyright";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import Contact from "@/components/others/Contact";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
export const metadata = {
  title:
    "Contact Dr. Vishrut Singh | Book Appointment at Aster Clinic Dubai",
  description:
    "Schedule an appointment with Dr. Vishrut Singh, Pediatrician at Aster Clinic, Bur Dubai. Mon-Sat 9AM-1PM, 5PM-9PM. Expert pediatric care for your child's health.",
};
export default function page() {
  return (
    <>
      <div className="tmp-white-version">
        <Header1 />
        <div className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner text-center">
                  <h1 className="title split-collab">Contact</h1>
                  <ul className="page-list">
                    <li className="tmp-breadcrumb-item">
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li className="icon">
                      <i className="fa-solid fa-angle-right" />
                    </li>
                    <li className="tmp-breadcrumb-item active">Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Contact />
        <Footer2 />
        <Copyright /> <CommonComponents />
      </div>
    </>
  );
}
