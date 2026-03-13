import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../i18n/LanguageContext';

const ComingSoon = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder - no actual submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  const upcomingFeatures = [
    { icon: '👥', titleKey: 'comingSoon.feature1Title', descKey: 'comingSoon.feature1Desc', badge: 'Q2 2026' },
    { icon: '🛠️', titleKey: 'comingSoon.feature2Title', descKey: 'comingSoon.feature2Desc', badge: 'Q3 2026' },
    { icon: '🎓', titleKey: 'comingSoon.feature3Title', descKey: 'comingSoon.feature3Desc', badge: 'Q4 2026' },
    { icon: '🤝', titleKey: 'comingSoon.feature4Title', descKey: 'comingSoon.feature4Desc', badge: 'Q4 2026' }
  ];

  return (
    <section id="coming-soon" className="coming-soon section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t('comingSoon.badge')}</span>
          <h2>{t('comingSoon.title')}</h2>
          <p className="section-intro">
            {t('comingSoon.subtitle')}
          </p>
        </div>

        <div className="features-grid">
          {upcomingFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card upcoming"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="feature-badge">{feature.badge}</div>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{t(feature.titleKey)}</h3>
              <p>{t(feature.descKey)}</p>
            </motion.div>
          ))}
        </div>

        <div className="notify-box">
          <div className="notify-content">
            <h3>{t('comingSoon.notifyTitle')}</h3>
            <p>{t('comingSoon.notifySubtitle')}</p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="notify-form">
                <div className="form-group">
                  <input
                    type="email"
                    placeholder={t('comingSoon.emailPlaceholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="email-input"
                  />
                  <button type="submit" className="btn-primary">
                    {t('comingSoon.notifyButton')}
                  </button>
                </div>
                <p className="form-hint">
                  {t('comingSoon.notifyHint')}
                </p>
              </form>
            ) : (
              <div className="success-message">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 12l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{t('comingSoon.successMessage')}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .coming-soon {
          background: var(--bg);
          position: relative;
          overflow: hidden;
        }

        .coming-soon::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 10;
        }

        .section-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(59, 130, 246, 0.1);
          color: var(--primary);
          border-radius: 2rem;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1rem;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .section-intro {
          max-width: 600px;
          margin: 1rem auto 0;
          color: var(--text-dim);
          font-size: 1.1rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
          position: relative;
          z-index: 10;
        }

        .feature-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 1rem;
          padding: 2rem;
          position: relative;
          transition: var(--transition);
        }

        .feature-card.upcoming {
          opacity: 0.85;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
          border-color: var(--primary);
          opacity: 1;
        }

        .feature-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          padding: 0.35rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          line-height: 1;
        }

        .feature-card h3 {
          font-size: 1.35rem;
          margin-bottom: 0.75rem;
          color: var(--text);
        }

        .feature-card p {
          color: var(--text-dim);
          line-height: 1.6;
          margin: 0;
        }

        .notify-box {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 1.5rem;
          padding: 3rem;
          text-align: center;
          position: relative;
          z-index: 10;
        }

        .notify-content h3 {
          font-size: 2rem;
          margin-bottom: 0.75rem;
        }

        .notify-content > p {
          color: var(--text-dim);
          font-size: 1.1rem;
          margin-bottom: 2rem;
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
        }

        .notify-form {
          max-width: 500px;
          margin: 0 auto;
        }

        .form-group {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        @media (max-width: 640px) {
          .form-group {
            flex-direction: column;
          }
        }

        .email-input {
          flex: 1;
          padding: 1rem 1.5rem;
          border: 2px solid var(--border);
          border-radius: 0.75rem;
          font-size: 1rem;
          background: var(--bg);
          color: var(--text);
          transition: var(--transition);
        }

        .email-input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .email-input::placeholder {
          color: var(--text-dark);
        }

        .btn-primary {
          padding: 1rem 2rem;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          border: none;
          border-radius: 0.75rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
          white-space: nowrap;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.3);
        }

        .form-hint {
          color: var(--text-dark);
          font-size: 0.875rem;
          margin: 0;
        }

        .success-message {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1.5rem;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 0.75rem;
          color: var(--secondary);
          font-weight: 600;
          animation: slideIn 0.3s ease-out;
        }

        .success-message svg {
          color: var(--secondary);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ComingSoon;
