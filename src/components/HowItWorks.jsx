import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../i18n/LanguageContext';

const HowItWorks = () => {
  const { t } = useTranslation();
  const steps = [
    { number: '01', titleKey: 'howItWorks.step1Title', descKey: 'howItWorks.step1Desc', icon: '📸' },
    { number: '02', titleKey: 'howItWorks.step2Title', descKey: 'howItWorks.step2Desc', icon: '🧠' },
    { number: '03', titleKey: 'howItWorks.step3Title', descKey: 'howItWorks.step3Desc', icon: '📋' },
    { number: '04', titleKey: 'howItWorks.step4Title', descKey: 'howItWorks.step4Desc', icon: '✅' },
    { number: '05', titleKey: 'howItWorks.step5Title', descKey: 'howItWorks.step5Desc', icon: '👁️' }
  ];

  return (
    <section id="how-it-works" className="section how-it-works">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>{t('howItWorks.title')}</h2>
          <p className="section-subtitle">{t('howItWorks.subtitle')}</p>
        </motion.div>

        <div className="steps-timeline">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className={`step-item ${idx % 2 === 0 ? 'step-left' : 'step-right'}`}
            >
              <div className="step-content glass-card">
                <div className="step-icon">{step.icon}</div>
                <div className="step-number">{step.number}</div>
                <h3>{t(step.titleKey)}</h3>
                <p>{t(step.descKey)}</p>
              </div>
            </motion.div>
          ))}
          <div className="timeline-line" />
        </div>
      </div>

      <style>{`
        .how-it-works {
          background: radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
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

        .steps-timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem 0;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, transparent, var(--primary), transparent);
          transform: translateX(-50%);
          display: none;
        }

        @media (min-width: 768px) {
          .timeline-line {
            display: block;
          }
        }

        .step-item {
          margin-bottom: 3rem;
          position: relative;
        }

        @media (min-width: 768px) {
          .step-left .step-content {
            margin-right: auto;
            margin-left: 0;
            max-width: 420px;
          }

          .step-right .step-content {
            margin-left: auto;
            margin-right: 0;
            max-width: 420px;
          }
        }

        .step-content {
          position: relative;
          padding: 2rem;
          text-align: center;
        }

        @media (min-width: 768px) {
          .step-content {
            text-align: left;
          }
        }

        .step-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: inline-block;
        }

        .step-number {
          position: absolute;
          top: 2rem;
          right: 2rem;
          font-size: 3rem;
          font-weight: 800;
          color: rgba(59, 130, 246, 0.2);
          line-height: 1;
        }

        .step-content h3 {
          margin-bottom: 0.75rem;
          font-size: 1.5rem;
        }

        .step-content p {
          font-size: 1rem;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
