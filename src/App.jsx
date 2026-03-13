import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Categories from './components/Categories';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import ComingSoon from './components/ComingSoon';

import Terms from './components/Terms';
import Privacy from './components/Privacy';
import AccountDeletion from './components/AccountDeletion';
import { usePageViewTracking } from './hooks/useAnalytics';
import { trackDownloadClick } from './utils/analytics';
import { useTranslation } from './i18n/LanguageContext';

// Component to track page views (must be inside Router)
function PageViewTracker() {
  usePageViewTracking();
  return null;
}

function App() {
  const { t } = useTranslation();
  return (
    <Router>
      <PageViewTracker />
      <div className="app-main">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <TrustBar />
                <HowItWorks />
                <Features />
                <Categories />
                <Testimonials />
                <Pricing />
                <FAQ />
                <ComingSoon />

                {/* Final CTA */}
                <section className="final-cta section">
                  <div className="container">
                    <div className="cta-content">
                      <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                      >
                        {t('cta.title')}
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                      >
                        {t('cta.subtitle')}
                      </motion.p>
                      <div className="hero-actions" style={{ marginTop: '2.5rem' }}>
                        <a
                          href="#"
                          className="store-btn google-play"
                          aria-label="Download SnapStep on Google Play"
                          onClick={(e) => {
                            e.preventDefault();
                            trackDownloadClick('android', 'cta');
                            // Add actual store URL when available
                            // window.open('https://play.google.com/store/apps/...', '_blank');
                          }}
                        >
                          <svg viewBox="0 0 512 512" width="24" height="24" aria-hidden="true">
                            <path fill="#fff" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-10.1 18-26.7-1.2-36.8zM325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z"/>
                          </svg>
                          <div className="store-text">
                            <span className="store-label">{t('hero.googlePlayLabel')}</span>
                            <span className="store-name">{t('hero.googlePlay')}</span>
                          </div>
                        </a>
                        <a
                          href="#"
                          className="store-btn app-store"
                          aria-label="Download SnapStep on App Store"
                          onClick={(e) => {
                            e.preventDefault();
                            trackDownloadClick('ios', 'cta');
                            // Add actual store URL when available
                            // window.open('https://apps.apple.com/app/...', '_blank');
                          }}
                        >
                          <svg viewBox="0 0 384 512" width="24" height="24" aria-hidden="true">
                            <path fill="#fff" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.1-77.5-19.1-36.9 0-106.3 31.5-125.6 114.5-15.8 68.1 32.7 175.2 73.6 230.1 20.5 27.5 45 54.8 71.3 54.8 24.8 0 34.4-15.3 64.9-15.3 30.5 0 39.1 15.3 64.9 15.3 26.8 0 47.7-24.5 68.2-54.7 23.5-35 33-68.8 33.2-70.5-.8-.4-64.1-24.3-64.4-91.2zm-70.3-157.3c15.1-18.2 25.8-43.8 23.3-68.4-21.5.8-47.5 14-63 32-13.9 15.9-26 42.4-22.7 66.2 23.8 1.9 47.5-11.6 62.4-29.8z"/>
                          </svg>
                          <div className="store-text">
                            <span className="store-label">{t('hero.appStoreLabel')}</span>
                            <span className="store-name">{t('hero.appStore')}</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            } />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/account-deletion" element={<AccountDeletion />} />
          </Routes>
        </main>

        {/* Enhanced Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-col">
                <div className="footer-brand">
                  <div className="logo-icon" />
                  <span className="brand-name">SnapStep</span>
                </div>
                <p className="footer-tagline">{t('footer.tagline')}</p>
              </div>

              <div className="footer-col">
                <h4>{t('footer.product')}</h4>
                <a href="#features">{t('footer.features')}</a>
                <a href="#pricing">{t('footer.pricing')}</a>
                <a href="#how-it-works">{t('footer.howItWorks')}</a>
                <a href="#categories">{t('footer.categories')}</a>
                <a href="#coming-soon">{t('navbar.comingSoon')}</a>
              </div>

              <div className="footer-col">
                <h4>{t('footer.support')}</h4>
                <a href="mailto:snapstep.help@gmail.com">{t('footer.emailSupport')}</a>
                <a href="https://t.me/snapstep_support" target="_blank" rel="noopener noreferrer">{t('footer.telegram')}</a>
                <a href="#faq">{t('footer.faq')}</a>
              </div>

              <div className="footer-col">
                <h4>{t('footer.legal')}</h4>
                <Link to="/terms">{t('footer.terms')}</Link>
                <Link to="/privacy">{t('footer.privacy')}</Link>
                <Link to="/account-deletion">{t('footer.accountDeletion')}</Link>
                <a href="#">{t('footer.gdpr')}</a>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="footer-social">
                <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://t.me/snapstep_support" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                  </svg>
                </a>
              </div>
              <p className="copyright">{t('footer.copyright')}</p>
            </div>
          </div>
        </footer>

        <style>{`
          .app-main {
            min-height: 100vh;
          }

          .final-cta {
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%);
            position: relative;
          }

          .final-cta::before {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%);
            pointer-events: none;
          }

          .cta-content {
            text-align: center;
            max-width: 700px;
            margin: 0 auto;
            position: relative;
            z-index: 10;
          }

          .cta-content h2 {
            font-size: clamp(2rem, 5vw, 3rem);
            margin-bottom: 1rem;
          }

          .cta-content p {
            font-size: 1.25rem;
            margin-bottom: 0;
          }

          .footer {
            padding: 5rem 0 3rem;
            border-top: 1px solid var(--border);
            background: var(--surface);
          }

          .footer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 3rem 2rem;
            margin-bottom: 3rem;
          }

          .footer-col {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .footer-brand {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 0.5rem;
          }

          .logo-icon {
            width: 20px;
            height: 20px;
            background: var(--primary);
            border-radius: 6px;
            box-shadow: 0 0 10px var(--primary-glow);
          }

          .brand-name {
            font-weight: 700;
            font-size: 1.25rem;
          }

          .footer-tagline {
            color: var(--text-dim);
            font-size: 0.95rem;
            margin: 0;
          }

          .footer-col h4 {
            font-weight: 700;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text);
            margin-bottom: 0.5rem;
          }

          .footer-col a {
            color: var(--text-dim);
            text-decoration: none;
            font-size: 0.95rem;
            transition: var(--transition);
          }

          .footer-col a:hover {
            color: var(--primary);
            transform: translateX(4px);
          }

          .footer-bottom {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            padding-top: 3rem;
            border-top: 1px solid var(--border);
          }

          @media (min-width: 768px) {
            .footer-bottom {
              flex-direction: row;
              justify-content: space-between;
            }
          }

          .footer-social {
            display: flex;
            gap: 1.5rem;
          }

          .footer-social a {
            color: var(--text-dim);
            transition: var(--transition);
          }

          .footer-social a:hover {
            color: var(--primary);
            transform: translateY(-2px);
          }

          .copyright {
            font-size: 0.85rem;
            color: var(--text-dark);
            text-align: center;
            margin: 0;
          }
        `}</style>
      </div>
    </Router>
  );
}

export default App;
