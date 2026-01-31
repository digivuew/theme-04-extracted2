"use client";

import Blogs from "@/components/blog/Blogs";
import Copyright from "@/components/footers/Copyright";
import Footer2 from "@/components/footers/Footer2";
import Header1 from "@/components/headers/Header1";
import { allBlogs } from "@/data/blogs";
import Link from "next/link";
import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import CommonComponents from "@/components/common/CommonComponents";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    if (query) {
      const lowerQuery = query.toLowerCase();
      const results = allBlogs.filter((blog) => {
        const titleMatch = blog.title?.toLowerCase().includes(lowerQuery);
        const descriptionMatch = blog.description?.toLowerCase().includes(lowerQuery);
        const tagsMatch = blog.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery));
        const categoriesMatch = blog.categories?.some((cat) => cat.toLowerCase().includes(lowerQuery));

        return titleMatch || descriptionMatch || tagsMatch || categoriesMatch;
      });
      setFilteredBlogs(results);
    } else {
      setFilteredBlogs([]);
    }
  }, [query]);

  return (
    <>
      <div className="breadcrumb-area breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-inner text-center">
                <h1 className="title split-collab">
                  Search Results {query && `for "${query}"`}
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
                  <li className="tmp-breadcrumb-item active">Search</li>
                </ul>
                {query && (
                  <p className="disc" style={{ marginTop: "20px", opacity: 0.8 }}>
                    Found {filteredBlogs.length} {filteredBlogs.length === 1 ? "article" : "articles"}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Blogs allBlogs={filteredBlogs} isLight />
    </>
  );
}

export default function SearchPage() {
  return (
    <>
      <div className="tmp-white-version">
        <Header1 />
        <Suspense fallback={<div>Loading search results...</div>}>
          <SearchContent />
        </Suspense>
        <Footer2
          darkLogo="/assets/images/logo/logo-yello.svg"
          lightLogo="/assets/images/logo/logo-yello.svg"
        />
        <Copyright /> <CommonComponents />
      </div>
    </>
  );
}
