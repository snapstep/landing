import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from '../i18n/LanguageContext';

const Terms = () => {
  const { t } = useTranslation();
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
          <Link to="/" className="back-link">{t('terms.backToHome')}</Link>
          <h1>{t('terms.title')}</h1>
          <p className="last-updated">{t('terms.lastUpdated')}</p>

          <div className="legal-text">
            <h2>{t('terms.section1Title')}</h2>
            <p>{t('terms.section1Text')}</p>

            <h2>{t('terms.section2Title')}</h2>
            <p>{t('terms.section2Text')}</p>

            <h2>{t('terms.section3Title')}</h2>
            <p>{t('terms.section3Text')}</p>

            <h2>{t('terms.section4Title')}</h2>
            <p>{t('terms.section4Text')}</p>

            <h2>{t('terms.section5Title')}</h2>
            <p>{t('terms.section5Text')}</p>
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
