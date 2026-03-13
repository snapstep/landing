import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../i18n/LanguageContext';

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { qKey: 'faq.q1', aKey: 'faq.a1' },
    { qKey: 'faq.q2', aKey: 'faq.a2' },
    { qKey: 'faq.q3', aKey: 'faq.a3' },
    { qKey: 'faq.q4', aKey: 'faq.a4' },
    { qKey: 'faq.q5', aKey: 'faq.a5' },
    { qKey: 'faq.q6', aKey: 'faq.a6' },
    { qKey: 'faq.q7', aKey: 'faq.a7' },
    { qKey: 'faq.q8', aKey: 'faq.a8' }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section faq">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>{t('faq.title')}</h2>
          <p className="section-subtitle">{t('faq.subtitle')}</p>
        </motion.div>

        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="faq-item"
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(idx)}
                aria-expanded={openIndex === idx}
              >
                <span>{t(faq.qKey)}</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`faq-icon ${openIndex === idx ? 'faq-icon-open' : ''}`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="faq-answer-wrapper"
                  >
                    <div className="faq-answer">{t(faq.aKey)}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .faq {
          background: radial-gradient(circle at 50% 100%, rgba(59, 130, 246, 0.05) 0%, transparent 50%);
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

        .faq-list {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          border: 1px solid var(--border);
          border-radius: 16px;
          margin-bottom: 1rem;
          background: rgba(18, 21, 31, 0.4);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          overflow: hidden;
          transition: var(--transition);
        }

        .faq-item:hover {
          border-color: var(--border-hover);
        }

        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem 2rem;
          background: transparent;
          border: none;
          color: var(--text);
          font-size: 1.1rem;
          font-weight: 600;
          text-align: left;
          cursor: pointer;
          transition: var(--transition);
        }

        .faq-question:hover {
          color: var(--primary);
        }

        .faq-icon {
          flex-shrink: 0;
          transition: transform 0.3s ease;
          color: var(--primary);
        }

        .faq-icon-open {
          transform: rotate(180deg);
        }

        .faq-answer-wrapper {
          overflow: hidden;
        }

        .faq-answer {
          padding: 0 2rem 1.5rem;
          color: var(--text-dim);
          line-height: 1.7;
          font-size: 1rem;
        }
      `}</style>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": t(faq.qKey),
            "acceptedAnswer": {
              "@type": "Answer",
              "text": t(faq.aKey)
            }
          }))
        })}
      </script>
    </section>
  );
};

export default FAQ;
