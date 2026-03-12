import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="legal-page section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card legal-content"
        >
          <Link to="/" className="back-link">← Back to Home</Link>
          <h1>Terms of Service</h1>
          <p className="last-updated">Last Updated: March 12, 2026</p>
          
          <div className="legal-text">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using SnapStep, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.</p>
            
            <h2>2. Use of Service</h2>
            <p>SnapStep provides an AI-powered assistant that analyzes images to provide information and solutions. You agree to use this service only for lawful purposes and in accordance with these terms.</p>
            
            <h2>3. Intellectual Property</h2>
            <p>All content, features, and functionality of SnapStep are owned by SnapStep AI and are protected by international copyright, trademark, and other intellectual property laws.</p>
            
            <h2>4. Limitation of Liability</h2>
            <p>SnapStep AI shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.</p>
            
            <h2>5. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. We will notify users of any significant changes by posting the new terms on this page.</p>
          </div>
        </motion.div>
      </div>

      <style>{`
        .legal-page {
          padding-top: 140px;
          min-height: 100vh;
        }
        
        .legal-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: left;
        }
        
        .back-link {
          display: inline-block;
          color: var(--primary);
          text-decoration: none;
          font-weight: 600;
          margin-bottom: 2rem;
          transition: var(--transition);
        }
        
        .back-link:hover {
          transform: translateX(-4px);
        }
        
        .last-updated {
          font-size: 0.9rem;
          color: var(--text-dark);
          margin-bottom: 3rem;
        }
        
        .legal-text h2 {
          font-size: 1.5rem;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          color: var(--text);
        }
        
        .legal-text p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }
      `}</style>
    </section>
  );
};

export default Terms;
