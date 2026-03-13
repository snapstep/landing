import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../i18n/LanguageContext';

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = [
    { quoteKey: 'testimonials.quote1', authorKey: 'testimonials.author1', contextKey: 'testimonials.context1', rating: 5 },
    { quoteKey: 'testimonials.quote2', authorKey: 'testimonials.author2', contextKey: 'testimonials.context2', rating: 5 },
    { quoteKey: 'testimonials.quote3', authorKey: 'testimonials.author3', contextKey: 'testimonials.context3', rating: 5 },
    { quoteKey: 'testimonials.quote4', authorKey: 'testimonials.author4', contextKey: 'testimonials.context4', rating: 5 }
  ];

  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <section className="section testimonials">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>{t('testimonials.title')}</h2>
          <p className="section-subtitle">{t('testimonials.subtitle')}</p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="testimonial-card glass-card"
            >
              <div className="testimonial-rating">{renderStars(test.rating)}</div>
              <p className="testimonial-quote">"{t(test.quoteKey)}"</p>
              <div className="testimonial-author">
                <strong>{t(test.authorKey)}</strong>
                <span>{t(test.contextKey)}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials {
          background: radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 70%);
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

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        .testimonial-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .testimonial-rating {
          font-size: 1.2rem;
          line-height: 1;
        }

        .testimonial-quote {
          flex: 1;
          font-size: 1.05rem;
          line-height: 1.6;
          color: var(--text);
        }

        .testimonial-author {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
        }

        .testimonial-author strong {
          color: var(--text);
          font-weight: 600;
        }

        .testimonial-author span {
          font-size: 0.9rem;
          color: var(--text-dim);
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
