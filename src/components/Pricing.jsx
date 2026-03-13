import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../i18n/LanguageContext';

const Pricing = () => {
  const { t } = useTranslation();
  const tiers = [
    {
      nameKey: 'pricing.freeName', priceKey: 'pricing.freePrice', periodKey: 'pricing.freePeriod',
      featuresKey: 'pricing.freeFeatures', ctaKey: 'pricing.freeCta', highlighted: false
    },
    {
      nameKey: 'pricing.proName', priceKey: 'pricing.proPrice', periodKey: 'pricing.proPeriod',
      badgeKey: 'pricing.proBadge', featuresKey: 'pricing.proFeatures', ctaKey: 'pricing.proCta', highlighted: true
    },
    {
      nameKey: 'pricing.packsName', priceKey: 'pricing.packsPrice', periodKey: 'pricing.packsPeriod',
      featuresKey: 'pricing.packsFeatures', ctaKey: 'pricing.packsCta', highlighted: false
    }
  ];

  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>{t('pricing.title')}</h2>
          <p className="section-subtitle">{t('pricing.subtitle')}</p>
        </motion.div>

        <div className="pricing-grid">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`pricing-card glass-card ${tier.highlighted ? 'pricing-card-highlighted' : ''}`}
            >
              {tier.badgeKey && <div className="pricing-badge">{t(tier.badgeKey)}</div>}
              <h3 className="pricing-name">{t(tier.nameKey)}</h3>
              <div className="pricing-price">
                <span className="price">{t(tier.priceKey)}</span>
                <span className="period">/{t(tier.periodKey)}</span>
              </div>
              <ul className="pricing-features">
                {t(tier.featuresKey).map((feature, i) => (
                  <li key={i}>
                    <span className="checkmark">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`btn ${tier.highlighted ? 'btn-primary' : 'btn-outline'} pricing-cta`}>
                {t(tier.ctaKey)}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pricing-footer"
        >
          <p>{t('pricing.footer')}</p>
          <div className="hero-actions" style={{ marginTop: '2rem' }}>
            <a href="#" className="store-btn google-play" aria-label="Download SnapStep on Google Play">
              <svg viewBox="0 0 512 512" width="24" height="24" aria-hidden="true">
                <path fill="#fff" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-10.1 18-26.7-1.2-36.8zM325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z"/>
              </svg>
              <div className="store-text">
                <span className="store-label">{t('hero.googlePlayLabel')}</span>
                <span className="store-name">{t('hero.googlePlay')}</span>
              </div>
            </a>
            <a href="#" className="store-btn app-store" aria-label="Download SnapStep on App Store">
              <svg viewBox="0 0 384 512" width="24" height="24" aria-hidden="true">
                <path fill="#fff" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.1-77.5-19.1-36.9 0-106.3 31.5-125.6 114.5-15.8 68.1 32.7 175.2 73.6 230.1 20.5 27.5 45 54.8 71.3 54.8 24.8 0 34.4-15.3 64.9-15.3 30.5 0 39.1 15.3 64.9 15.3 26.8 0 47.7-24.5 68.2-54.7 23.5-35 33-68.8 33.2-70.5-.8-.4-64.1-24.3-64.4-91.2zm-70.3-157.3c15.1-18.2 25.8-43.8 23.3-68.4-21.5.8-47.5 14-63 32-13.9 15.9-26 42.4-22.7 66.2 23.8 1.9 47.5-11.6 62.4-29.8z"/>
              </svg>
              <div className="store-text">
                <span className="store-label">{t('hero.appStoreLabel')}</span>
                <span className="store-name">{t('hero.appStore')}</span>
              </div>
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        .pricing {
          background: linear-gradient(180deg, rgba(59, 130, 246, 0.02), transparent);
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

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1100px;
          margin: 0 auto 3rem;
        }

        .pricing-card {
          padding: 2.5rem 2rem;
          position: relative;
          display: flex;
          flex-direction: column;
          transition: var(--transition);
        }

        .pricing-card-highlighted {
          border-color: var(--primary);
          box-shadow: 0 12px 48px rgba(59, 130, 246, 0.2);
          transform: scale(1.05);
        }

        .pricing-card:hover {
          transform: translateY(-8px);
        }

        .pricing-card-highlighted:hover {
          transform: scale(1.05) translateY(-8px);
        }

        .pricing-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--primary);
          color: white;
          padding: 0.4rem 1rem;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .pricing-name {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          text-align: center;
        }

        .pricing-price {
          text-align: center;
          margin-bottom: 2rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border);
        }

        .price {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--primary);
        }

        .period {
          font-size: 1rem;
          color: var(--text-dim);
          font-weight: 500;
        }

        .pricing-features {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem;
          flex: 1;
        }

        .pricing-features li {
          padding: 0.75rem 0;
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: var(--text-dim);
          font-size: 0.95rem;
        }

        .checkmark {
          color: var(--accent);
          font-weight: 700;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .pricing-cta {
          width: 100%;
          justify-content: center;
        }

        .pricing-footer {
          text-align: center;
          max-width: 700px;
          margin: 3rem auto 0;
          padding-top: 3rem;
          border-top: 1px solid var(--border);
        }

        .pricing-footer p {
          margin-bottom: 1rem;
        }
      `}</style>
    </section>
  );
};

export default Pricing;
