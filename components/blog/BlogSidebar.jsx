"use client";

import { allBlogs, categories, tags } from "@/data/blogs";
import Image from "next/image";
import React, { useState } from "react";

import Link from "next/link";
import { slugify } from "@/utlis/slugify";
import { useRouter } from "next/navigation";

export default function BlogSidebar({ isLight = false }) {
  const [searchQuery, setSearchQuery] = useState("");
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
      <div className="signle-side-bar recent-post-area tmponhover" style={{
        background: 'linear-gradient(135deg, rgba(255, 228, 230, 0.15) 0%, rgba(255, 249, 246, 0.15) 100%)',
        borderRadius: '12px',
        border: '1px solid rgba(255, 182, 193, 0.12)',
        marginBottom: '25px'
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
          <Link
            href="/contact-white#book-appointment"
            className="tmp-btn hover-icon-reverse radius-round btn-border btn-md"
            style={{
              width: '100%',
              cursor: 'pointer',
              display: 'inline-block',
              textAlign: 'center'
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
          </Link>
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
    </div>
  );
}
