import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Privacy = () => {
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
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last Updated: March 12, 2026</p>
          
          <div className="legal-text">
            <h2>1. Information We Collect</h2>
            <p>At SnapStep, we prioritize your privacy. When you use our camera-based AI assistant, we process image data locally or securely on our servers to provide you with instant solutions. We do not sell your personal data to third parties.</p>
            
            <h2>2. How We Use Your Data</h2>
            <p>The images you capture are used solely for analysis and problem-solving purposes. We may use anonymized data to improve our AI models and provide a better user experience.</p>
            
            <h2>3. Data Security</h2>
            <p>We implement industry-standard security measures to protect your information. Your connection to our services is encrypted, and we regularly audit our systems for potential vulnerabilities.</p>
            
            <h2>4. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal information at any time. If you have any questions about your data, please contact our support team.</p>
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

export default Privacy;
