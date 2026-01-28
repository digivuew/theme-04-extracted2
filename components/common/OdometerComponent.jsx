"use client";

import React, { useEffect, useRef, useState } from "react";

const OdometerComponent = ({ max }) => {
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // Simple intersection observer that works reliably
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            // Start animation after a short delay
            setTimeout(() => {
              animateValue(0, max, 1500);
            }, 200);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [max]);

  const animateValue = (start, end, duration) => {
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateValue = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(start + (end - start) * easeOutCubic);

      setValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateValue);
      } else {
        setValue(end);
      }
    };

    updateValue();
  };

  return (
    <span ref={elementRef} className="odometer">
      {value}
    </span>
  );
};

export default OdometerComponent;
