import React, { useEffect, useRef, useState } from 'react';

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);

      // Parse the end value (remove commas and + signs)
      const endValue = parseFloat(end.toString().replace(/[,+]/g, ''));
      setCount(Math.floor(easeOutQuart * endValue));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isVisible]);

  // Format the count based on the original end format
  const formatCount = () => {
    const endStr = end.toString();
    if (endStr.includes(',')) {
      return count.toLocaleString();
    }
    if (endStr.includes('+')) {
      return `${count}+`;
    }
    return count;
  };

  return <span ref={ref}>{formatCount()}{suffix}</span>;
};

export default AnimatedCounter;
