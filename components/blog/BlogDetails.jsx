import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
import Comment from "./Comment";
import { tags } from "@/data/blogs";
import { slugify } from "@/utlis/slugify";
export default function BlogDetails({ blog, isLight = false }) {
  return (
    <div className="blog-classic-area-wrapper tmp-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-details-left-area">
              <div className="thumbnail-top">
                <Image
                  alt="Corporate_business"
                  src={blog.imageSrc}
                  width={850}
                  height={440}
                />
              </div>
              <div className="blog-details-discription">
                <div className="blog-classic-tag">
                  <h4 className="title">By Dr. Vishrut Singh</h4>
                  <ul>
                    <li>
                      <div className="tag-wrap">
                        <i className="fa-solid fa-tag" />
                        <h4 className="tag-title">Child Health</h4>
                      </div>
                    </li>
                    <li>
                      <div className="tag-wrap">
                        <i className="fa-solid fa-calendar-day" />
                        <h4 className="tag-title">Comments (05)</h4>
                      </div>
                    </li>
                  </ul>
                </div>
                <h3 className="title split-collab">{blog.title}</h3>
                <p className="disc">
                  As a board-certified Pediatrician with over 9 years of experience, I've dedicated my career to providing comprehensive healthcare for children from birth to 18 years. My approach combines evidence-based medicine with compassionate care, ensuring every child receives the attention and treatment they deserve.
                </p>
                <p className="disc">
                  In my practice, I focus on preventive care, early diagnosis, and effective treatment of pediatric conditions. From routine check-ups and vaccinations to managing complex respiratory disorders and critical care situations, I work closely with families to ensure optimal health outcomes for every child.
                </p>
              </div>
              <div className="quote-area-blog-details">
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
                          alt="blog-swip-img"
                          src="/assets/images/blog/blog-details-swiper-img.jpg"
                          width={300}
                          height={280}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-details-navigation">
                  <div className="navigation-tags">
                    <h3 className="tag-title">Keyword:</h3>
                    <ul>
                      {tags.slice(1, 4).map((tag, index) => (
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
                  <div className="social-link footer">
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
                {/* Comment Area Main Wrapper Start */}
                <div className="comment-area-main-wrapper mt--30">
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
                <Comment />
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
