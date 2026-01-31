"use client";
import { useState } from 'react';

export default function Chat() {
  const [isHovered, setIsHovered] = useState(false);

  const tooltipStyle = {
    position: 'absolute',
    bottom: '70px',
    right: '0',
    background: 'white',
    color: '#333',
    padding: '10px 16px',
    borderRadius: '10px',
    fontSize: '13px',
    fontWeight: '600',
    whiteSpace: 'nowrap',
    opacity: isHovered ? '1' : '0',
    visibility: isHovered ? 'visible' : 'hidden',
    transition: 'all 0.3s ease',
    pointerEvents: 'none',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
    border: '1px solid rgba(122, 37, 158, 0.2)',
    zIndex: '1020',
  };

  const arrowStyle = {
    position: 'absolute',
    bottom: '-6px',
    right: '17px',
    width: '0',
    height: '0',
    borderLeft: '6px solid transparent',
    borderRight: '6px solid transparent',
    borderTop: '6px solid white',
  };

  return (
    <div className="ready-chatting-option tmp-ready-chat">
      <input type="checkbox" id="click" />
      <div style={tooltipStyle}>
        Send Message
        <div style={arrowStyle}></div>
      </div>
      <label
        htmlFor="click"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <i className="fab fa-facebook-messenger" />
        <i className="fas fa-times" />
      </label>
      <div className="wrapper">
        <div className="head-text">Let's chat with me? - Online</div>
        <div className="chat-box">
          <div className="desc-text">
            Please fill out the form below to start chatting with me directly.
          </div>
          <form
            className="tmp-dynamic-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="field">
              <input
                className="input-field"
                name="name"
                placeholder="Your Name"
                type="text"
                required
              />
            </div>
            <div className="field">
              <input
                className="input-field"
                name="email"
                placeholder="Your Email"
                type="email"
                required
              />
            </div>
            <div className="field textarea">
              <textarea
                className="input-field"
                placeholder="Your Message"
                name="message"
                required
                defaultValue={""}
              />
            </div>
            <div className="field">
              <button name="submit" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
