import BlogDetails from "@/components/blog/BlogDetails";
import Copyright from "@/components/footers/Copyright";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import { allBlogs } from "@/data/blogs";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = allBlogs.find((blog) => blog.slug === slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Dr. Vishrut Singh MD",
      description: "The requested blog article could not be found.",
    };
  }

  return {
    title: `${blog.title} | Dr. Vishrut Singh MD - Pediatric Health Insights`,
    description: blog.description,
  };
}

export default async function page({ params }) {
  const { slug } = await params;
  const blog = allBlogs.find((blog) => blog.slug === slug);

  if (!blog) {
    notFound();
  }
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
        <Footer2 />
        <Copyright /> <CommonComponents />
      </div>
    </>
  );
}
