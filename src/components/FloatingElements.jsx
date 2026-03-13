import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const elements = [
    { size: 80, duration: 20, delay: 0, left: '10%', color: 'rgba(59, 130, 246, 0.15)' },
    { size: 60, duration: 15, delay: 2, left: '80%', color: 'rgba(16, 185, 129, 0.15)' },
    { size: 100, duration: 25, delay: 4, left: '50%', color: 'rgba(139, 92, 246, 0.1)' },
    { size: 40, duration: 18, delay: 1, left: '25%', color: 'rgba(59, 130, 246, 0.2)' },
    { size: 70, duration: 22, delay: 3, left: '70%', color: 'rgba(16, 185, 129, 0.12)' },
  ];

  return (
    <div className="floating-elements">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="floating-element"
          style={{
            width: el.size,
            height: el.size,
            left: el.left,
            background: `radial-gradient(circle, ${el.color} 0%, transparent 70%)`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 30, -30, 0],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
      <style>{`
        .floating-elements {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .floating-element {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
};

export default FloatingElements;
