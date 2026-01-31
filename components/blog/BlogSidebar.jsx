"use client";

import { allBlogs, categories, tags } from "@/data/blogs";
import Image from "next/image";
import React, { useState } from "react";

import Link from "next/link";
import { slugify } from "@/utlis/slugify";
import { useRouter } from "next/navigation";

export default function BlogSidebar({ isLight = false }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/blog${isLight ? "-white" : ""}/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // Get 3 most recent posts dynamically
  const recentPosts = allBlogs
    .filter(blog => blog.date) // Only include blogs with dates
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date, newest first
    .slice(0, 3); // Take top 3

  return (
    <div className="tmp-sidebar">
      <div className="signle-side-bar tmponhover" style={{
        marginTop: '0',
        position: 'relative',
        marginBottom: '25px',
        background: 'linear-gradient(135deg, rgba(255, 228, 230, 0.15) 0%, rgba(255, 249, 246, 0.15) 100%)',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(255, 182, 193, 0.12)'
      }}>
        <div className="header" style={{
          background: 'transparent',
          paddingBottom: '8px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '6px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #FFE5F0 0%, #FDB900 100%)',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 6px rgba(255, 229, 240, 0.3)'
            }}>
              <i className="fa-solid fa-magnifying-glass" style={{
                fontSize: '16px',
                color: 'white'
              }} />
            </div>
            <h3 className="title" style={{ margin: 0, color: '#333' }}>Search Articles</h3>
          </div>
          <p style={{
            margin: 0,
            fontSize: '12px',
            color: '#666',
            lineHeight: '1.4'
          }}>
            Find the information you need
          </p>
        </div>
        <div className="body" style={{ position: 'relative', paddingTop: '10px' }}>
          <form onSubmit={handleSearch} style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="Type to search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              required
              style={{
                width: '100%',
                height: '55px',
                borderRadius: '12px',
                paddingRight: '60px',
                paddingLeft: '18px',
                border: '2px solid rgba(253, 185, 0, 0.2)',
                background: 'white',
                fontSize: '14px',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#FDB900';
                e.target.style.boxShadow = '0 0 0 3px rgba(253, 185, 0, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(253, 185, 0, 0.2)';
                e.target.style.boxShadow = 'none';
              }}
            />
            <button type="submit" style={{
              position: 'absolute',
              right: '4px',
              top: '4px',
              background: 'linear-gradient(135deg, #FFE5F0 0%, #FDB900 100%)',
              border: 'none',
              width: '47px',
              height: '47px',
              borderRadius: '10px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '18px',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(255, 229, 240, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 229, 240, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(255, 207, 125, 0.3)';
            }}>
              <i className="fa-solid fa-magnifying-glass" />
            </button>
          </form>
        </div>
      </div>
      <div className="signle-side-bar tmponhover" style={{
        position: 'relative',
        marginBottom: '25px',
        background: 'linear-gradient(135deg, rgba(255, 228, 230, 0.15) 0%, rgba(255, 249, 246, 0.15) 100%)',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(255, 182, 193, 0.12)'
      }}>
        <div className="header" style={{
          background: 'transparent',
          paddingBottom: '8px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '6px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #FFE5F0 0%, #FDB900 100%)',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 6px rgba(255, 229, 240, 0.3)'
            }}>
              <i className="fa-solid fa-folder-open" style={{
                fontSize: '16px',
                color: 'white'
              }} />
            </div>
            <h3 className="title" style={{ margin: 0, color: '#333' }}>Categories</h3>
          </div>
          <p style={{
            margin: 0,
            fontSize: '12px',
            color: '#666',
            lineHeight: '1.4'
          }}>
            Browse by category
          </p>
        </div>
        <div className="body" style={{ position: 'relative', paddingTop: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {categories.map((post, index) => (
              <Link
                href={`/blog${isLight ? "-white" : ""}/category/${slugify(
                  post.title
                )}`}
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 16px',
                  background: 'white',
                  border: '2px solid rgba(253, 185, 0, 0.2)',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
                }}
              >
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#555',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                  <i className="fa-solid fa-arrow-right" style={{
                    fontSize: '12px',
                    color: '#FDB900'
                  }} />
                  {post.title}
                </span>
                <span style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#FDB900',
                  background: 'rgba(253, 185, 0, 0.1)',
                  padding: '4px 10px',
                  borderRadius: '12px'
                }}>
                  {allBlogs.filter((blog) =>
                    blog.categories?.includes(post.title)
                  ).length}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="signle-side-bar recent-post-area tmponhover" style={{
        background: 'linear-gradient(135deg, rgba(255, 228, 230, 0.15) 0%, rgba(255, 249, 246, 0.15) 100%)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 182, 193, 0.12)'
      }}>
        <div className="header" style={{
          background: 'transparent',
          paddingBottom: '8px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '6px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #FFE5F0 0%, #FDB900 100%)',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 6px rgba(255, 229, 240, 0.3)'
            }}>
              <i className="fa-solid fa-clock-rotate-left" style={{
                fontSize: '16px',
                color: 'white'
              }} />
            </div>
            <h3 className="title" style={{ margin: 0, color: '#333' }}>Recent Post</h3>
          </div>
          <p style={{
            margin: 0,
            fontSize: '12px',
            color: '#666',
            lineHeight: '1.4',
            paddingLeft: '48px'
          }}>
            Latest articles and updates
          </p>
        </div>
        <div className="body">
          {recentPosts.map((post) => (
            <div key={post.id} className="single-post-card tmp-hover-link">
              <div className="single-post-card-img" style={{
                width: '82px',
                height: '92px',
                overflow: 'hidden',
                borderRadius: '8px',
                flexShrink: 0,
                backgroundColor: '#f5f5f5'
              }}>
                <Image
                  alt=""
                  src={post.imageSrc}
                  width={82}
                  height={92}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div className="single-post-right">
                <div className="single-post-top">
                  <i className="fa-regular fa-folder-open" />
                  <p className="post-title">
                    {post.categories && post.categories[0] ? post.categories[0] : "Blog"}
                  </p>
                </div>
                <h3 className="post-title">
                  <Link
                    className="link"
                    href={`/blog-details${isLight ? "-white" : ""}/${
                      post.slug
                    }`}
                  >
                    {post.title}
                  </Link>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="signle-side-bar tmponhover" style={{
        background: 'linear-gradient(135deg, rgba(255, 228, 230, 0.15) 0%, rgba(255, 249, 246, 0.15) 100%)',
        borderRadius: '15px',
        overflow: 'hidden',
        border: '1px solid rgba(255, 182, 193, 0.12)'
      }}>
        <div className="header" style={{
          background: 'transparent',
          paddingBottom: '8px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '6px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #FFE5F0 0%, #FDB900 100%)',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 6px rgba(255, 229, 240, 0.3)'
            }}>
              <i className="fa-solid fa-user-pen" style={{
                fontSize: '16px',
                color: 'white'
              }} />
            </div>
            <h3 className="title" style={{ margin: 0, color: '#333' }}>About the Author</h3>
          </div>
          <p style={{
            margin: 0,
            fontSize: '12px',
            color: '#666',
            lineHeight: '1.4',
            paddingLeft: '48px'
          }}>
            Expert pediatric care specialist
          </p>
        </div>
        <div className="body">
          <div className="about-me-details">
            <div className="about-me-details-head" style={{
              marginBottom: '15px'
            }}>
              <div className="about-me-img" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(253, 185, 0, 0.1)',
                borderRadius: '50%',
                width: '70px',
                height: '70px',
                boxShadow: '0 2px 8px rgba(253, 185, 0, 0.15)',
                flexShrink: 0
              }}>
                <i className="fa-solid fa-user-doctor" style={{
                  fontSize: '32px',
                  color: '#FDB900'
                }} />
              </div>
              <div className="about-me-right-content">
                <h3 className="title" style={{ marginBottom: '5px' }}>Dr. Vishrut Singh</h3>
                <p className="para" style={{ marginBottom: '10px', fontWeight: '500' }}>MD Pediatrician</p>
                <div className="social-link">
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
            <p className="about-me-para" style={{
              lineHeight: '1.7',
              fontSize: '14px'
            }}>
              With over 9 years of experience as a board-certified MD Pediatrician, Dr. Vishrut Singh specializes in Pediatric Critical Care Medicine. He is dedicated to providing compassionate, comprehensive healthcare for children of all ages, from newborns to adolescents.
            </p>
          </div>
        </div>
      </div>
      <div className="signle-side-bar tmponhover" style={{
        background: 'linear-gradient(135deg, rgba(255, 228, 230, 0.15) 0%, rgba(255, 249, 246, 0.15) 100%)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 182, 193, 0.12)'
      }}>
        <div className="header" style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            left: '0',
            top: '0',
            background: 'linear-gradient(135deg, #FFE5F0 0%, #FDB900 100%)',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 6px rgba(255, 229, 240, 0.3)'
          }}>
            <i className="fa-solid fa-calendar-check" style={{
              fontSize: '16px',
              color: 'white'
            }} />
          </div>
          <h3 className="title" style={{ paddingLeft: '50px' }}>Quick Consultation</h3>
        </div>
        <div className="body">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
            <div style={{
              background: 'rgba(253, 185, 0, 0.1)',
              borderRadius: '8px',
              padding: '12px',
              textAlign: 'center'
            }}>
              <i className="fa-solid fa-clock" style={{
                fontSize: '20px',
                color: '#FDB900',
                marginBottom: '8px'
              }} />
              <p style={{
                fontSize: '12px',
                fontWeight: '600',
                color: 'var(--color-heading)',
                margin: '0',
                lineHeight: '1.4'
              }}>Available<br/>Mon-Sat</p>
            </div>
            <div style={{
              background: 'rgba(253, 185, 0, 0.1)',
              borderRadius: '8px',
              padding: '12px',
              textAlign: 'center'
            }}>
              <i className="fa-solid fa-circle-check" style={{
                fontSize: '20px',
                color: '#FDB900',
                marginBottom: '8px'
              }} />
              <p style={{
                fontSize: '12px',
                fontWeight: '600',
                color: 'var(--color-heading)',
                margin: '0',
                lineHeight: '1.4'
              }}>Response<br/>within 24hrs</p>
            </div>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="tmp-btn hover-icon-reverse radius-round btn-border btn-md"
            style={{
              width: '100%',
              cursor: 'pointer'
            }}
          >
            <span className="icon-reverse-wrapper">
              <span className="btn-text">Book Appointment</span>
              <span className="btn-icon">
                <i className="fa-sharp fa-regular fa-arrow-right" />
              </span>
              <span className="btn-icon">
                <i className="fa-sharp fa-regular fa-arrow-right" />
              </span>
            </span>
          </button>
        </div>
      </div>
      <div className="signle-side-bar tmponhover" style={{
        position: 'relative',
        marginBottom: '25px',
        background: 'linear-gradient(135deg, rgba(255, 228, 230, 0.15) 0%, rgba(255, 249, 246, 0.15) 100%)',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(255, 182, 193, 0.12)'
      }}>
        <div className="header" style={{
          background: 'transparent',
          paddingBottom: '8px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '6px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #FFE5F0 0%, #FDB900 100%)',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 6px rgba(255, 229, 240, 0.3)'
            }}>
              <i className="fa-solid fa-tags" style={{
                fontSize: '16px',
                color: 'white'
              }} />
            </div>
            <h3 className="title" style={{ margin: 0, color: '#333' }}>Popular Tags</h3>
          </div>
          <p style={{
            margin: 0,
            fontSize: '12px',
            color: '#666',
            lineHeight: '1.4'
          }}>
            Browse articles by topic
          </p>
        </div>
        <div className="body" style={{ position: 'relative', paddingTop: '10px', maxHeight: '280px', overflowY: 'auto' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px'
          }}>
            {tags.map((tag, index) => (
              <Link
                href={`/blog${isLight ? "-white" : ""}/tag/${slugify(tag)}`}
                key={index}
                style={{
                  display: 'inline-block',
                  padding: '8px 16px',
                  background: 'white',
                  border: '2px solid rgba(253, 185, 0, 0.2)',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#555',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
                }}
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="signle-side-bar tmponhover" style={{
        position: 'relative',
        marginBottom: '25px',
        background: 'linear-gradient(135deg, rgba(255, 228, 230, 0.15) 0%, rgba(255, 249, 246, 0.15) 100%)',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid rgba(255, 182, 193, 0.12)'
      }}>
        <div className="header" style={{
          background: 'transparent',
          paddingBottom: '8px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '6px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #FFE5F0 0%, #FDB900 100%)',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 6px rgba(255, 229, 240, 0.3)'
            }}>
              <i className="fa-solid fa-envelope-open-text" style={{
                fontSize: '16px',
                color: 'white'
              }} />
            </div>
            <h3 className="title" style={{ margin: 0, color: '#333' }}>Subscribe</h3>
          </div>
          <p style={{
            margin: 0,
            fontSize: '12px',
            color: '#666',
            lineHeight: '1.4'
          }}>
            Get latest pediatric health tips
          </p>
        </div>
        <div className="body" style={{ position: 'relative', paddingTop: '10px' }}>
          <form onSubmit={(e) => {
            e.preventDefault();
            alert('Thank you for subscribing! You will receive our latest pediatric health articles.');
          }} style={{ position: 'relative' }}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              style={{
                width: '100%',
                height: '55px',
                borderRadius: '12px',
                paddingRight: '60px',
                paddingLeft: '18px',
                border: '2px solid rgba(253, 185, 0, 0.2)',
                background: 'white',
                fontSize: '14px',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#FDB900';
                e.target.style.boxShadow = '0 0 0 3px rgba(253, 185, 0, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(253, 185, 0, 0.2)';
                e.target.style.boxShadow = 'none';
              }}
            />
            <button type="submit" style={{
              position: 'absolute',
              right: '4px',
              top: '4px',
              background: 'linear-gradient(135deg, #FFE5F0 0%, #FDB900 100%)',
              border: 'none',
              width: '47px',
              height: '47px',
              borderRadius: '10px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '18px',
              transition: 'all 0.3s ease',
              boxShadow: '0 2px 8px rgba(255, 229, 240, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 229, 240, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(255, 207, 125, 0.3)';
            }}>
              <i className="fa-solid fa-paper-plane" />
            </button>
          </form>
          <p style={{
            marginTop: '12px',
            fontSize: '11px',
            color: '#999',
            textAlign: 'center',
            marginBottom: '0'
          }}>
            <i className="fa-solid fa-shield-halved" style={{ marginRight: '4px' }} />
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
      <div style={{ height: '1px', marginBottom: '0' }}></div>

      {/* Appointment Modal */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'white',
              borderRadius: '20px',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              position: 'relative',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
            }}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(253, 185, 0, 0.15)',
                border: 'none',
                color: '#FDB900',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 10,
                fontWeight: '300'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(253, 185, 0, 0.25)';
                e.currentTarget.style.transform = 'rotate(90deg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(253, 185, 0, 0.15)';
                e.currentTarget.style.transform = 'rotate(0deg)';
              }}
            >
              ×
            </button>

            {/* Horizontal Layout */}
            <div style={{ display: 'grid', gridTemplateColumns: '400px 1fr', minHeight: '500px' }}>
              {/* Left Side - Info Panel */}
              <div style={{
                background: 'linear-gradient(135deg, #FF8FC7 0%, #FFC947 100%)',
                padding: '40px 30px',
                borderRadius: '20px 0 0 20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <div style={{
                  background: 'white',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '25px',
                  boxShadow: '0 4px 15px rgba(253, 185, 0, 0.2)'
                }}>
                  <i className="fa-solid fa-calendar-check" style={{
                    fontSize: '36px',
                    color: '#FF8FC7'
                  }} />
                </div>
                <h3 style={{ color: 'white', margin: '0 0 15px 0', fontSize: '28px', fontWeight: '700' }}>
                  Book Your Appointment
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.9)', margin: '0 0 30px 0', fontSize: '15px', lineHeight: '1.6' }}>
                  Schedule a consultation with Dr. Vishrut Singh, MD Pediatrician
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      background: 'white',
                      width: '45px',
                      height: '45px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <i className="fa-solid fa-clock" style={{ color: '#FF8FC7', fontSize: '18px' }} />
                    </div>
                    <div>
                      <p style={{ margin: 0, fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)', fontWeight: '600' }}>AVAILABLE</p>
                      <p style={{ margin: 0, fontSize: '14px', color: 'white', fontWeight: '600' }}>Monday - Saturday</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      background: 'white',
                      width: '45px',
                      height: '45px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <i className="fa-solid fa-phone" style={{ color: '#FF8FC7', fontSize: '18px' }} />
                    </div>
                    <div>
                      <p style={{ margin: 0, fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)', fontWeight: '600' }}>RESPONSE TIME</p>
                      <p style={{ margin: 0, fontSize: '14px', color: 'white', fontWeight: '600' }}>Within 24 hours</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      background: 'white',
                      width: '45px',
                      height: '45px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <i className="fa-solid fa-user-doctor" style={{ color: '#FF8FC7', fontSize: '18px' }} />
                    </div>
                    <div>
                      <p style={{ margin: 0, fontSize: '13px', color: 'rgba(255, 255, 255, 0.8)', fontWeight: '600' }}>EXPERIENCE</p>
                      <p style={{ margin: 0, fontSize: '14px', color: 'white', fontWeight: '600' }}>9+ Years in Pediatrics</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div style={{ padding: '40px' }}>
              <form onSubmit={(e) => {
                e.preventDefault();
                alert('Appointment request submitted! We will contact you shortly.');
                setIsModalOpen(false);
              }}>
                <h4 style={{ margin: '0 0 25px 0', fontSize: '20px', color: '#333', fontWeight: '600' }}>
                  Fill in Your Details
                </h4>

                <div style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#555', fontSize: '13px' }}>
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    style={{
                      width: '100%',
                      padding: '14px',
                      border: '2px solid #f0f0f0',
                      borderRadius: '10px',
                      fontSize: '14px',
                      transition: 'all 0.3s ease',
                      background: '#FAFAFA'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#FDB900';
                      e.target.style.background = '#FFFDF5';
                      e.target.style.boxShadow = '0 0 0 3px rgba(253, 185, 0, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#f0f0f0';
                      e.target.style.background = '#FAFAFA';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '18px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#555', fontSize: '13px' }}>
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      style={{
                        width: '100%',
                        padding: '14px',
                        border: '2px solid #f0f0f0',
                        borderRadius: '10px',
                        fontSize: '14px',
                        transition: 'all 0.3s ease',
                        background: '#FAFAFA'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#FDB900';
                        e.target.style.background = '#FFFDF5';
                        e.target.style.boxShadow = '0 0 0 3px rgba(253, 185, 0, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#f0f0f0';
                        e.target.style.background = '#FAFAFA';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#555', fontSize: '13px' }}>
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+971 XX XXX XXXX"
                      style={{
                        width: '100%',
                        padding: '14px',
                        border: '2px solid #f0f0f0',
                        borderRadius: '10px',
                        fontSize: '14px',
                        transition: 'all 0.3s ease',
                        background: '#FAFAFA'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#FDB900';
                        e.target.style.background = '#FFFDF5';
                        e.target.style.boxShadow = '0 0 0 3px rgba(253, 185, 0, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#f0f0f0';
                        e.target.style.background = '#FAFAFA';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '18px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#555', fontSize: '13px' }}>
                      PREFERRED DATE *
                    </label>
                    <input
                      type="date"
                      required
                      style={{
                        width: '100%',
                        padding: '14px',
                        border: '2px solid #f0f0f0',
                        borderRadius: '10px',
                        fontSize: '14px',
                        transition: 'all 0.3s ease',
                        background: '#FAFAFA'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#FDB900';
                        e.target.style.background = '#FFFDF5';
                        e.target.style.boxShadow = '0 0 0 3px rgba(253, 185, 0, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#f0f0f0';
                        e.target.style.background = '#FAFAFA';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#555', fontSize: '13px' }}>
                      PREFERRED TIME *
                    </label>
                    <input
                      type="time"
                      required
                      style={{
                        width: '100%',
                        padding: '14px',
                        border: '2px solid #f0f0f0',
                        borderRadius: '10px',
                        fontSize: '14px',
                        transition: 'all 0.3s ease',
                        background: '#FAFAFA'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#FDB900';
                        e.target.style.background = '#FFFDF5';
                        e.target.style.boxShadow = '0 0 0 3px rgba(253, 185, 0, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#f0f0f0';
                        e.target.style.background = '#FAFAFA';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: '#555', fontSize: '13px' }}>
                    REASON FOR VISIT
                  </label>
                  <textarea
                    placeholder="Brief description of the reason for consultation..."
                    rows={3}
                    style={{
                      width: '100%',
                      padding: '14px',
                      border: '2px solid #f0f0f0',
                      borderRadius: '10px',
                      fontSize: '14px',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      transition: 'all 0.3s ease',
                      background: '#FAFAFA'
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = '#FDB900';
                      e.target.style.background = '#FFFDF5';
                      e.target.style.boxShadow = '0 0 0 3px rgba(253, 185, 0, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#f0f0f0';
                      e.target.style.background = '#FAFAFA';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '16px',
                    background: 'linear-gradient(135deg, #FF8FC7 0%, #FFC947 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '16px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 20px rgba(255, 143, 199, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(255, 143, 199, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 143, 199, 0.35)';
                  }}
                >
                  <i className="fa-solid fa-calendar-check" />
                  <span>Book Appointment</span>
                </button>
              </form>
            </div>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}
