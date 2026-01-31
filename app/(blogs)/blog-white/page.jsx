import Blogs from "@/components/blog/Blogs";
import Copyright from "@/components/footers/Copyright";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
import { allBlogs } from "@/data/blogs";
export const metadata = {
  title:
    "Blog - Pediatric Health Articles | Dr. Vishrut Singh MD",
  description:
    "Read expert insights on child health, vaccination, respiratory care, and pediatric wellness by Dr. Vishrut Singh, a board-certified Pediatrician with 9+ years of experience.",
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
                  <h1 className="title split-collab">Blog</h1>
                  <ul className="page-list">
                    <li className="tmp-breadcrumb-item">
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li className="icon">
                      <i className="fa-solid fa-angle-right" />
                    </li>
                    <li className="tmp-breadcrumb-item active">Blog</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Blogs allBlogs={allBlogs} isLight />
        <Footer2
          darkLogo="/assets/images/logo/logo-yello.svg"
          lightLogo="/assets/images/logo/logo-yello.svg"
        />
        <Copyright /> <CommonComponents />
      </div>
    </>
  );
}
