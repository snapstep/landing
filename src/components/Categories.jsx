import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../i18n/LanguageContext';

const Categories = () => {
  const { t } = useTranslation();
  const categories = [
    { icon: '🏠', titleKey: 'categories.homeTitle', examplesKey: 'categories.homeExamples', color: '#3b82f6' },
    { icon: '🚗', titleKey: 'categories.autoTitle', examplesKey: 'categories.autoExamples', color: '#ef4444' },
    { icon: '💻', titleKey: 'categories.electronicsTitle', examplesKey: 'categories.electronicsExamples', color: '#8b5cf6' },
    { icon: '🌱', titleKey: 'categories.plantsTitle', examplesKey: 'categories.plantsExamples', color: '#10b981' },
    { icon: '🍳', titleKey: 'categories.cookingTitle', examplesKey: 'categories.cookingExamples', color: '#f59e0b' },
    { icon: '📄', titleKey: 'categories.docsTitle', examplesKey: 'categories.docsExamples', color: '#06b6d4' },
    { icon: '🔧', titleKey: 'categories.otherTitle', examplesKey: 'categories.otherExamples', color: '#64748b' }
  ];

  return (
    <section id="categories" className="section categories">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>{t('categories.title')}</h2>
          <p className="section-subtitle">{t('categories.subtitle')}</p>
        </motion.div>

        <div className="categories-grid">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="category-card glass-card"
              style={{ '--category-color': cat.color }}
            >
              <div className="category-icon">{cat.icon}</div>
              <h3>{t(cat.titleKey)}</h3>
              <ul className="category-examples">
                {t(cat.examplesKey).map((ex, i) => (
                  <li key={i}>{ex}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .categories {
          background: linear-gradient(180deg, transparent, rgba(16, 185, 129, 0.02));
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

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .category-card {
          text-align: center;
          padding: 2.5rem 2rem;
          transition: var(--transition);
        }

        .category-card:hover {
          border-color: var(--category-color);
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
        }

        .category-icon {
          font-size: 3.5rem;
          margin-bottom: 1.25rem;
          transition: transform 0.3s ease;
        }

        .category-card:hover .category-icon {
          transform: scale(1.1) rotate(5deg);
        }

        .category-card h3 {
          margin-bottom: 1rem;
          font-size: 1.4rem;
          color: var(--text);
        }

        .category-examples {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }

        .category-examples li {
          background: rgba(255, 255, 255, 0.05);
          padding: 0.4rem 0.9rem;
          border-radius: 20px;
          font-size: 0.85rem;
          color: var(--text-dim);
          border: 1px solid var(--border);
          transition: var(--transition);
        }

        .category-card:hover .category-examples li {
          border-color: var(--category-color);
          color: var(--text);
        }
      `}</style>
    </section>
  );
};

export default Categories;
