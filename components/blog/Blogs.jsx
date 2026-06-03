"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { blogData } from "@/data/blogs";
import BlogSidebar from "./BlogSidebar";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { calculateReadTime, formatReadTime } from "@/utlis/readTime";

function BlogsContent({ allBlogs = blogData, isLight = false }) {
  const blogsPerPage = 3;
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  // Initialize page from URL on mount
  useEffect(() => {
    const pageFromUrl = parseInt(searchParams.get('page')) || 1;
    setCurrentPage(pageFromUrl);
  }, [searchParams]);

  // Calculate pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = allBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(allBlogs.length / blogsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    router.push(`?page=${pageNumber}`, { scroll: false });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  // Generate page numbers to display (max 5 page buttons)
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <>
      <style jsx>{`
        .pagination-btn:hover:not(:disabled):not(.active) {
          background: rgba(255, 229, 240, 0.6) !important;
          color: #333 !important;
        }
        .pagination-btn.active {
          background: linear-gradient(135deg, #FFE5F0 0%, #FDB900 100%) !important;
          color: white !important;
        }
      `}</style>
      <div className="blog-classic-area-wrapper tmp-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
            {currentBlogs.map((blog, i) => (
              <div
                key={blog.slug || blog.id || i}
                className={`blog-classic-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-${
                  i + 1
                }`}
                style={{
                  marginTop: i === 0 ? '0' : undefined,
                  background: 'linear-gradient(135deg, rgba(255, 249, 246, 0.2) 0%, rgba(255, 252, 240, 0.2) 100%)',
                  borderRadius: '12px',
                  padding: '20px',
                  border: '1px solid rgba(255, 182, 193, 0.15)'
                }}
              >
                <div className="img-box" style={{
                  aspectRatio: '16/10',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '8px',
                  backgroundColor: '#f5f5f5'
                }}>
                  <Link
                    href={`/blog/${
                      blog.slug
                    }`}
                    style={{ width: '100%', height: '100%', display: 'block' }}
                  >
                    <Image
                      className="img-primary hidden-on-mobile"
                      alt={blog.altText || "Blog Thumbnail"}
                      src={blog.imageSrc}
                      width={700}
                      height={380}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                    <Image
                      className="img-secondary"
                      alt={blog.altText || "Blog Thumbnail"}
                      src={blog.imageSrc}
                      width={700}
                      height={380}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </Link>
                </div>
                <div className="blog-classic-content">
                  <div className="blog-classic-tag">
                    <ul>
                      {blog.categories && blog.categories.length > 0 && (
                        <li>
                          <div className="tag-wrap">
                            <i className="fa-solid fa-tag" />
                            <h4 className="tag-title">{blog.categories[0]}</h4>
                          </div>
                        </li>
                      )}
                      {blog.tags && blog.tags.length > 0 && (
                        <li>
                          <div className="tag-wrap">
                            <i className="fa-solid fa-bookmark" />
                            <h4 className="tag-title">{blog.tags[0]}</h4>
                          </div>
                        </li>
                      )}
                      {blog.date && (
                        <li>
                          <div className="tag-wrap">
                            <i className="fa-solid fa-calendar-day" />
                            <h4 className="tag-title">{blog.date}</h4>
                          </div>
                        </li>
                      )}
                      <li>
                        <div className="tag-wrap">
                          <i className="fa-solid fa-clock" />
                          <h4 className="tag-title">{formatReadTime(calculateReadTime(blog))}</h4>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <h2 className="title" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    minHeight: '70px'
                  }}>
                    <Link
                      href={`/blog/${
                        blog.slug
                      }`}
                    >
                      {blog.title}
                    </Link>
                  </h2>
                  <p className="para" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    minHeight: '72px'
                  }}>{blog.description}</p>
                  <div className="tmp-button-here">
                    <Link
                      className="tmp-btn hover-icon-reverse radius-round btn-border btn-md"
                      href={`/blog/${
                        blog.slug
                      }`}
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Read More</span>
                        <span className="btn-icon">
                          <i className="fa-sharp fa-regular fa-arrow-right" />
                        </span>
                        <span className="btn-icon">
                          <i className="fa-sharp fa-regular fa-arrow-right" />
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            {allBlogs.length > blogsPerPage && (
              <div className="tmp-pagination-button" style={{ marginTop: '40px' }}>
                <button
                  onClick={handlePreviousPage}
                  className="pagination-btn"
                  disabled={currentPage === 1}
                  style={{ opacity: currentPage === 1 ? 0.5 : 1 }}
                >
                  <i className="fa-sharp fa-regular fa-arrow-left" />
                </button>
                {getPageNumbers().map((page, index) => (
                  page === '...' ? (
                    <span key={index} className="pagination-dots">...</span>
                  ) : (
                    <button
                      key={index}
                      onClick={() => handlePageChange(page)}
                      className={`pagination-btn ${
                        currentPage === page ? "active" : ""
                      }`}
                    >
                      {page}
                    </button>
                  )
                ))}
                <button
                  onClick={handleNextPage}
                  className="pagination-btn"
                  disabled={currentPage === totalPages}
                  style={{ opacity: currentPage === totalPages ? 0.5 : 1 }}
                >
                  <i className="fa-sharp fa-regular fa-arrow-right" />
                </button>
              </div>
            )}
            {allBlogs.length === 0 && (
              <h3 className="text-center">No Blogs Found</h3>
            )}
          </div>
          <div className="col-lg-4">
            <BlogSidebar isLight={isLight} />
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Blogs(props) {
  return (
    <Suspense fallback={<div>Loading blogs...</div>}>
      <BlogsContent {...props} />
    </Suspense>
  );
}
