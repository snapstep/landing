import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../i18n/LanguageContext';

const TiltCard = ({ children, className }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / centerY * -8;
    const rotateY = (x - centerX) / centerX * 8;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(59, 130, 246, 0.12), rgba(18, 21, 31, 0.6))`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    card.style.background = 'rgba(18, 21, 31, 0.6)';
  };

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.15s ease, background 0.3s ease' }}
    >
      {children}
    </div>
  );
};

const Features = () => {
  const { t } = useTranslation();
  const features = [
    { titleKey: 'features.arTitle', descKey: 'features.arDesc', icon: '👁️', size: 'large' },
    { titleKey: 'features.aiTitle', descKey: 'features.aiDesc', icon: '⚡', size: 'large' },
    { titleKey: 'features.stepTitle', descKey: 'features.stepDesc', icon: '📋', size: 'medium' },
    { titleKey: 'features.verifyTitle', descKey: 'features.verifyDesc', icon: '✅', size: 'medium' },
    { titleKey: 'features.shopTitle', descKey: 'features.shopDesc', icon: '🛒', size: 'medium' },
    { titleKey: 'features.costTitle', descKey: 'features.costDesc', icon: '💰', size: 'medium' },
    { titleKey: 'features.safetyTitle', descKey: 'features.safetyDesc', icon: '⚠️', size: 'small' },
    { titleKey: 'features.toolboxTitle', descKey: 'features.toolboxDesc', icon: '🔧', size: 'small' },
    { titleKey: 'features.journalTitle', descKey: 'features.journalDesc', icon: '📅', size: 'small' },
    { titleKey: 'features.tipsTitle', descKey: 'features.tipsDesc', icon: '💡', size: 'small' }
  ];

  return (
    <section id="features" className="section features">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>{t('features.title')}</h2>
          <p className="section-subtitle">{t('features.subtitle')}</p>
        </motion.div>

        <div className="features-bento">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className={`feature-${feature.size}`}
            >
              <TiltCard className={`feature-card glass-card feature-card-${feature.size}`}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{t(feature.titleKey)}</h3>
                <p>{t(feature.descKey)}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .features {
          background: linear-gradient(180deg, rgba(59, 130, 246, 0.03), transparent);
        }

        .section-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 4rem;
        }

        .section-subtitle {
          margin-top: 1rem;
          font-size: 1.2rem;
        }

        .features-bento {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
          grid-auto-rows: minmax(200px, auto);
        }

        @media (min-width: 768px) {
          .features-bento {
            grid-template-columns: repeat(4, 1fr);
          }

          .feature-large {
            grid-column: span 2;
            grid-row: span 2;
          }

          .feature-medium {
            grid-column: span 2;
          }

          .feature-small {
            grid-column: span 1;
          }
        }

        .feature-card {
          padding: 2rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-radius: 24px;
          overflow: hidden;
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1.25rem;
          display: inline-block;
        }

        .feature-card-large .feature-icon {
          font-size: 4rem;
        }

        .feature-card h3 {
          font-size: 1.4rem;
          margin-bottom: 0.75rem;
          color: var(--text);
        }

        .feature-card-large h3 {
          font-size: 1.75rem;
        }

        .feature-card p {
          font-size: 1rem;
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
};

export default Features;
