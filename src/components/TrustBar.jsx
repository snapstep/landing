import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '../i18n/LanguageContext';

const AnimatedValue = ({ target, suffix = '' }) => {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    let start;
    const animate = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      setValue(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target]);

  return <span ref={ref}>{value.toLocaleString()}{suffix}</span>;
};

const TrustBar = () => {
  const { t } = useTranslation();
  const stats = [
    { value: 48000, suffix: '+', display: null, descKey: 'trustbar.stat1Desc' },
    { value: null, suffix: '', displayKey: 'trustbar.stat2Value', descKey: 'trustbar.stat2Desc' },
    { value: null, suffix: '', displayKey: 'trustbar.stat3Value', descKey: 'trustbar.stat3Desc' },
    { value: null, suffix: '', displayKey: 'trustbar.stat4Value', descKey: 'trustbar.stat4Desc' }
  ];

  return (
    <section className="trust-bar section" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="trust-stats"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="stat-card"
            >
              <div className="stat-value">
                {stat.value !== null
                  ? <AnimatedValue target={stat.value} suffix={stat.suffix} />
                  : t(stat.displayKey)
                }
              </div>
              <div className="stat-desc">{t(stat.descKey)}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .trust-bar {
          background: linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.02) 100%);
        }

        .trust-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
        }

        @media (min-width: 768px) {
          .trust-stats {
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
          }
        }

        .stat-card {
          background: rgba(18, 21, 31, 0.5);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 1.75rem 1.5rem;
          text-align: center;
          transition: var(--transition);
        }

        .stat-card:hover {
          border-color: var(--primary);
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 8px 24px rgba(59, 130, 246, 0.15), 0 0 40px rgba(59, 130, 246, 0.08);
        }

        .stat-value {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 800;
          background: linear-gradient(135deg, var(--primary) 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
          line-height: 1;
        }

        .stat-desc {
          font-size: 0.9rem;
          color: var(--text-dim);
          font-weight: 500;
        }
      `}</style>
    </section>
  );
};

export default TrustBar;
