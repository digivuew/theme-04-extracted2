import BlogDetails from "@/components/blog/BlogDetails";
import Copyright from "@/components/footers/Copyright";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import { allBlogs } from "@/data/blogs";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
export const metadata = {
  title:
    "Blog Article | Dr. Vishrut Singh MD - Pediatric Health Insights",
  description:
    "Expert pediatric health advice and insights from Dr. Vishrut Singh, board-certified Pediatrician specializing in child health, respiratory care, and preventive medicine.",
};
export default async function page({ params }) {
  const { slug } = await params;
  const blog = allBlogs.find((blog) => blog.slug == slug) || allBlogs[0];
  return (
    <>
      <div className="tmp-white-version">
        <Header1 />
        <div className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb-inner text-center">
                  <h1 className="title split-collab">{blog.title}</h1>
                  <ul className="page-list">
                    <li className="tmp-breadcrumb-item">
                      <Link href={`/`}>Home</Link>
                    </li>
                    <li className="icon">
                      <i className="fa-solid fa-angle-right" />
                    </li>
                    <li className="tmp-breadcrumb-item">
                      <Link href={`/blog-white`}>Blog</Link>
                    </li>
                    <li className="icon">
                      <i className="fa-solid fa-angle-right" />
                    </li>
                    <li className="tmp-breadcrumb-item active">Blog Details</li>
                  </ul>
                  {/* <div class="circle-1"></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <BlogDetails isLight blog={blog} />
        <Footer2
          darkLogo="/assets/images/logo/logo-yello.svg"
          lightLogo="/assets/images/logo/logo-yello.svg"
        />
        <Copyright /> <CommonComponents />
      </div>
    </>
  );
}
