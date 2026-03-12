import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero section">
      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="badge"
          >
            AI-Powered Problem Solver
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Snap. Solve. <br />
            <span className="gradient-text">Get it done.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hero-description"
          >
            Transform your camera into an intelligent assistant. 
            Snap a photo of any problem and get step-by-step solutions instantly.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hero-actions"
          >
            <button className="btn btn-primary">Try SnapStep Free</button>
            <button className="btn btn-outline">Watch Demo</button>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="hero-glow" />
      </div>

      <style>{`
        .hero {
          position: relative;
          text-align: center;
          padding-top: 180px;
          padding-bottom: 100px;
          overflow: hidden;
        }
        
        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .badge {
          display: inline-flex;
          padding: 0.5rem 1.25rem;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 100px;
          color: var(--primary);
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 2rem;
        }
        
        .hero-description {
          font-size: 1.25rem;
          margin: 2rem auto 3rem;
          max-width: 600px;
        }
        
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }
        
        .hero-glow {
          position: absolute;
          top: 20%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, var(--primary-glow) 0%, transparent 70%);
          z-index: 1;
          pointer-events: none;
          filter: blur(80px);
          opacity: 0.5;
        }
        
        @media (max-width: 640px) {
          .hero-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
