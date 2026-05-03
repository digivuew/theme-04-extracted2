"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
import Comment from "./Comment";
import { slugify } from "@/utlis/slugify";
import { allBlogs } from "@/data/blogs";
import { calculateReadTime, formatReadTime } from "@/utlis/readTime";

export default function BlogDetails({ blog, isLight = false }) {
  const [showCopied, setShowCopied] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  // Find current blog index for prev/next navigation
  const currentIndex = allBlogs.findIndex(b => b.slug === blog.slug);
  const previousBlog = currentIndex > 0 ? allBlogs[currentIndex - 1] : null;
  const nextBlog = currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : null;

  const handleCopyLink = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(currentUrl);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  };
  return (
    <div className="blog-classic-area-wrapper tmp-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-details-left-area" style={{
              background: 'linear-gradient(135deg, rgba(255, 249, 246, 0.2) 0%, rgba(255, 252, 240, 0.2) 100%)',
              borderRadius: '12px',
              padding: '20px',
              border: '1px solid rgba(255, 182, 193, 0.15)'
            }}>
              <div className="thumbnail-top" style={{
                aspectRatio: '16/9',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                backgroundColor: '#f5f5f5'
              }}>
                <Image
                  alt="Corporate_business"
                  src={blog.imageSrc}
                  width={750}
                  height={390}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div className="blog-details-discription">
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
                <h3 className="title split-collab">{blog.title}</h3>
                <p className="disc">{blog.content.intro}</p>
                {blog.content.sections && blog.content.sections.map((section, index) => (
                  <div key={index} style={{ marginTop: '30px' }}>
                    <h4 className="title">{section.title}</h4>
                    <p className="disc">{section.text}</p>
                  </div>
                ))}
              </div>
              <div className="quote-area-blog-details" style={{
                background: 'linear-gradient(135deg, rgba(255, 228, 230, 0.2) 0%, rgba(255, 249, 230, 0.2) 100%)',
                borderLeft: '4px solid rgba(255, 143, 199, 0.5)'
              }}>
                <p className="disc">
                  Every child deserves the highest quality healthcare. My mission is to provide compassionate, evidence-based pediatric care that helps children thrive and gives parents peace of mind.
                </p>
                <h3 className="author">Dr. Vishrut Singh</h3>
                <span>
                  <i className="fa-solid fa-quote-right" />
                </span>
              </div>
              <div className="blog-details-discription">
                <h3 className="title split-collab">
                  Comprehensive Pediatric Care Services
                </h3>
                <p className="disc">
                  My practice offers a full range of pediatric services including preventive care, diagnosis and treatment of acute and chronic illnesses, growth and development monitoring, and specialized care for respiratory and infectious diseases.
                </p>
                <div className="our-portfolio-swiper">
                  <div className="blog-details-swiper">
                    <div className="our-portfoli-swiper-card">
                      <div className="card-left-content">
                        <p className="disc">
                          With specialized training in Pediatric Critical Care Medicine (IDPCCM) from Fortis Memorial Research Institute, I am equipped to handle complex medical situations and provide intensive care when needed.
                        </p>
                        <p className="disc">
                          My approach emphasizes clear communication with families, ensuring parents understand their child's condition and treatment plan. I believe in building long-term relationships with families based on trust and mutual respect.
                        </p>
                        <p className="disc">
                          Regular follow-ups and preventive care are essential components of pediatric practice, helping identify and address health concerns before they become serious problems.
                        </p>
                      </div>
                      <div className="card-right-content">
                        <Image
                          alt="Comprehensive Pediatric Care Services"
                          src="/assets/images/Comprehensive Pediatric Care Services2.png"
                          width={300}
                          height={280}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-details-navigation">
                  <div className="navigation-tags">
                    <h3 className="tag-title">Keywords:</h3>
                    <ul>
                      {blog.tags && blog.tags.slice(0, 3).map((tag, index) => (
                        <li key={index}>
                          <p className="tag">
                            <Link
                              href={`/blog${
                                isLight ? "-white" : ""
                              }/tag/${slugify(tag)}`}
                            >
                              {tag}
                            </Link>
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="blog-details-navigation" style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px', position: 'relative' }}>
                  {showCopied && (
                    <div style={{
                      position: 'fixed',
                      top: '20px',
                      right: '20px',
                      background: '#4CAF50',
                      color: 'white',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                      zIndex: 9999,
                      fontSize: '14px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <i className="fa-solid fa-check-circle" />
                      <span>Link copied!</span>
                    </div>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--color-heading)' }}>Share:</span>
                    <div className="social-link footer" style={{ marginTop: 0 }}>
                      <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(currentUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Share on Twitter"
                      >
                        <i className="fa-brands fa-twitter" />
                      </a>
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Share on LinkedIn"
                      >
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Share on Facebook"
                      >
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                      <a
                        href="#"
                        onClick={handleCopyLink}
                        title="Copy link"
                      >
                        <i className="fa-solid fa-link" />
                      </a>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--color-heading)' }}>Follow:</span>
                    <div className="social-link footer" style={{ marginTop: 0 }}>
                      <a href="https://www.instagram.com/dr_vishrut_singh_md/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-instagram" />
                      </a>
                      <a href="https://www.linkedin.com/in/dr-vishrut-singh-4b671113a" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                      <a href="https://x.com/vishruts261" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-twitter" />
                      </a>
                      <a href="https://www.facebook.com/DrVishrutSingh" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </div>
                  </div>
                </div>
                {/* Previous/Next Article Navigation */}
                {(previousBlog || nextBlog) && (
                  <div style={{
                    marginTop: '50px',
                    paddingTop: '30px',
                    borderTop: '1px solid var(--color-border)',
                    display: 'grid',
                    gridTemplateColumns: previousBlog && nextBlog ? '1fr 1fr' : '1fr',
                    gap: '20px'
                  }}>
                    {previousBlog && (
                      <Link
                        href={`/blog-details${isLight ? "-white" : ""}/${previousBlog.slug}`}
                        className="blog-nav-link"
                      >
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          marginBottom: '10px',
                          color: '#FDB900',
                          fontSize: '14px',
                          fontWeight: '600'
                        }}>
                          <i className="fa-solid fa-arrow-left" />
                          <span>Previous Article</span>
                        </div>
                        <h4 style={{
                          fontSize: '16px',
                          fontWeight: '700',
                          color: 'var(--color-heading)',
                          margin: '0',
                          lineHeight: '1.4'
                        }}>
                          {previousBlog.title}
                        </h4>
                      </Link>
                    )}
                    {nextBlog && (
                      <Link
                        href={`/blog-details${isLight ? "-white" : ""}/${nextBlog.slug}`}
                        className="blog-nav-link"
                        style={{ textAlign: 'right' }}
                      >
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-end',
                          gap: '10px',
                          marginBottom: '10px',
                          color: '#FDB900',
                          fontSize: '14px',
                          fontWeight: '600'
                        }}>
                          <span>Next Article</span>
                          <i className="fa-solid fa-arrow-right" />
                        </div>
                        <h4 style={{
                          fontSize: '16px',
                          fontWeight: '700',
                          color: 'var(--color-heading)',
                          margin: '0',
                          lineHeight: '1.4'
                        }}>
                          {nextBlog.title}
                        </h4>
                      </Link>
                    )}
                  </div>
                )}
                <style jsx>{`
                  .blog-nav-link {
                    display: block;
                    padding: 20px;
                    borderRadius: 8px;
                    border: 1px solid var(--color-border);
                    textDecoration: none;
                    transition: all 0.3s ease;
                    background: var(--color-bg-card);
                  }
                  .blog-nav-link:hover {
                    border-color: #FDB900;
                    box-shadow: 0 4px 12px rgba(253, 185, 0, 0.15);
                  }
                `}</style>
                {/* Comment Area Main Wrapper Start */}
                <div className="comment-area-main-wrapper mt--30" style={{ display: 'none' }}>
                  <h3 className="title">Comments (3)</h3>
                  <div className="single-comment-audience">
                    <div className="author-image tmponhover">
                      <Image
                        alt="Corporate_business"
                        src="/assets/images/blog/comments-img-1.png"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="right-area-commnet">
                      <div className="top-area-comment">
                        <div className="left">
                          <h6 className="title">Stanio lainto</h6>
                          <span>September 16, 2023</span>
                        </div>
                        <div className="social-link-inner">
                          <a href="#">
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-twitter" />
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-instagram" />
                          </a>
                        </div>
                      </div>
                      <p className="disc">
                        Very informative article! Dr. Singh's expertise and clear explanations help parents understand complex medical topics. Looking forward to more helpful content.
                      </p>
                      <a href="#" className="reply-btn">
                        reply
                      </a>
                    </div>
                  </div>
                  <div className="single-comment-audience pl--100">
                    <div className="author-image tmponhover">
                      <Image
                        alt="Corporate_business"
                        src="/assets/images/blog/comments-img-2.png"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="right-area-commnet">
                      <div className="top-area-comment">
                        <div className="left">
                          <h6 className="title">Court Henry</h6>
                          <span>September 16, 2023</span>
                        </div>
                        <div className="social-link-inner">
                          <a href="#">
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-twitter" />
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-instagram" />
                          </a>
                        </div>
                      </div>
                      <p className="disc">
                        Thank you for sharing this valuable information. It's reassuring to have access to expert pediatric guidance online.
                      </p>
                      <a href="#" className="reply-btn">
                        reply
                      </a>
                    </div>
                  </div>
                  <div className="single-comment-audience">
                    <div className="author-image tmponhover">
                      <Image
                        alt="Corporate_business"
                        src="/assets/images/blog/comments-img-2.png"
                        width={300}
                        height={300}
                      />
                    </div>
                    <div className="right-area-commnet">
                      <div className="top-area-comment">
                        <div className="left">
                          <h6 className="title">Court Henry</h6>
                          <span>September 16, 2023</span>
                        </div>
                        <div className="social-link-inner">
                          <a href="#">
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-twitter" />
                          </a>
                          <a href="#">
                            <i className="fa-brands fa-instagram" />
                          </a>
                        </div>
                      </div>
                      <p className="disc">
                        Very informative article! Dr. Singh's expertise and clear explanations help parents understand complex medical topics. Looking forward to more helpful content.
                      </p>
                      <a href="#" className="reply-btn">
                        reply
                      </a>
                    </div>
                  </div>
                </div>
                {/* Comment Area Main Wrapper End */}
                {/* Blog Details Form Wrapper Start */}
                <div style={{ display: 'none' }}>
                  <Comment />
                </div>
                {/* Blog Details Form Wrapper End */}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <BlogSidebar isLight={isLight} />
          </div>
        </div>
      </div>
    </div>
  );
}
