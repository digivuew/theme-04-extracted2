import Blogs from "@/components/blog/Blogs";
import Copyright from "@/components/footers/Copyright";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import { allBlogs } from "@/data/blogs";
import { slugify } from "@/utlis/slugify";
import Link from "next/link";
import React from "react";
import CommonComponents from "@/components/common/CommonComponents";
export const metadata = {
  title:
    "Blog Tag | Dr. Vishrut Singh MD - Pediatric Health Topics",
  description:
    "Explore pediatric health articles by tag. Find expert insights on child health topics from Dr. Vishrut Singh, MD Pediatrician.",
};
export default async function TagPage({ params }) {
  let tagTitle = "";
  const { tag } = await params;
  const blogs = allBlogs.filter((blog) =>
    blog.tags?.some((el) => slugify(el) == tag)
  );

  // Find tag title from all blogs
  for (const blog of allBlogs) {
    if (blog.tags) {
      const foundTag = blog.tags.find((element) => slugify(element) == tag);
      if (foundTag) {
        tagTitle = foundTag;
        break;
      }
    }
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
                  <h1 className="title split-collab">
                    {tagTitle ? tagTitle : <> {tag}</>}
                  </h1>
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
                    <li className="tmp-breadcrumb-item active">Tag</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Blogs allBlogs={blogs} isLight />
        <Footer2 />
        <Copyright /> <CommonComponents />
      </div>
    </>
  );
}
