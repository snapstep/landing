import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '../i18n/LanguageContext';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'uk' : 'en');
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="container navbar-content">
        <Link to="/" className="nav-logo" aria-label="SnapStep Home">
          <div className="logo-icon" aria-hidden="true" />
          <span>SnapStep</span>
        </Link>
        <div className="nav-links">
          <a href="#product" onClick={(e) => handleNavClick(e, 'product')} className="nav-link">{t('navbar.product')}</a>
          <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className="nav-link">{t('navbar.features')}</a>
          <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="nav-link">{t('navbar.pricing')}</a>
          <a href="#coming-soon" onClick={(e) => handleNavClick(e, 'coming-soon')} className="nav-link">{t('navbar.comingSoon')}</a>
        </div>
        <div className="nav-right">
          <button
            className="lang-toggle"
            onClick={toggleLanguage}
            aria-label="Switch language"
          >
            {language === 'en' ? 'UK' : 'EN'}
          </button>
          <button
            className="btn btn-primary nav-cta desktop-only"
            onClick={(e) => handleNavClick(e, 'pricing')}
            aria-label="Download SnapStep"
          >
            {t('navbar.download')}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? t('navbar.closeMenu') : t('navbar.openMenu')}
          aria-expanded={mobileMenuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="mobile-menu-content">
                <a href="#product" onClick={(e) => handleNavClick(e, 'product')} className="mobile-menu-link">
                  {t('navbar.product')}
                </a>
                <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className="mobile-menu-link">
                  {t('navbar.features')}
                </a>
                <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="mobile-menu-link">
                  {t('navbar.pricing')}
                </a>
                <a href="#coming-soon" onClick={(e) => handleNavClick(e, 'coming-soon')} className="mobile-menu-link">
                  {t('navbar.comingSoon')}
                </a>
                <button
                  className="lang-toggle mobile-lang-toggle"
                  onClick={toggleLanguage}
                >
                  {language === 'en' ? '🇺🇦 Українська' : '🇬🇧 English'}
                </button>
                <button
                  className="btn btn-primary mobile-menu-cta"
                  onClick={(e) => handleNavClick(e, 'pricing')}
                >
                  {t('navbar.download')}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--header-height);
          background: rgba(3, 4, 6, 0.5);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 1000;
          display: flex;
          align-items: center;
        }

        .navbar-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: var(--text);
          font-weight: 700;
          font-size: 1.25rem;
          transition: var(--transition);
          z-index: 1001;
        }

        .nav-logo:hover {
          opacity: 0.8;
        }

        .logo-icon {
          width: 20px;
          height: 20px;
          background: var(--primary);
          border-radius: 6px;
          box-shadow: 0 0 10px var(--primary-glow);
        }

        .nav-links {
          display: none;
          gap: 2.5rem;
        }

        @media (min-width: 768px) {
          .nav-links {
            display: flex;
          }
        }

        .nav-link {
          text-decoration: none;
          color: var(--text-dim);
          font-size: 0.9rem;
          font-weight: 500;
          transition: var(--transition);
        }

        .nav-link:hover {
          color: var(--text);
        }

        .nav-right {
          display: none;
          align-items: center;
          gap: 0.75rem;
        }

        @media (min-width: 768px) {
          .nav-right {
            display: flex;
          }
        }

        .lang-toggle {
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid var(--border);
          color: var(--text);
          padding: 0.45rem 0.75rem;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition);
          letter-spacing: 0.05em;
        }

        .lang-toggle:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: var(--primary);
          color: var(--primary);
        }

        .mobile-lang-toggle {
          width: 100%;
          padding: 1rem;
          font-size: 1rem;
          border-radius: 12px;
          text-align: center;
        }

        .nav-cta {
          padding: 0.5rem 1.25rem;
          font-size: 0.85rem;
          background: var(--primary);
          border: none;
          border-radius: 8px;
          box-shadow: none;
        }

        .nav-cta:hover {
          transform: translateY(-1px);
          filter: brightness(1.15);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
        }

        .desktop-only {
          display: none;
        }

        @media (min-width: 768px) {
          .desktop-only {
            display: inline-flex;
          }
        }

        /* Mobile Menu Button */
        .mobile-menu-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: transparent;
          border: none;
          color: var(--text);
          cursor: pointer;
          z-index: 1001;
          transition: var(--transition);
        }

        .mobile-menu-btn:hover {
          color: var(--primary);
        }

        @media (min-width: 768px) {
          .mobile-menu-btn {
            display: none;
          }
        }

        /* Mobile Menu Overlay */
        .mobile-menu-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 999;
          backdrop-filter: blur(4px);
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 80%;
          max-width: 320px;
          background: var(--surface);
          border-left: 1px solid var(--border);
          z-index: 1000;
          overflow-y: auto;
        }

        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          padding: 120px 2rem 2rem;
          gap: 1rem;
        }

        .mobile-menu-link {
          display: block;
          padding: 1rem;
          color: var(--text);
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
          border-radius: 12px;
          transition: var(--transition);
        }

        .mobile-menu-link:hover {
          background: rgba(255, 255, 255, 0.05);
          color: var(--primary);
        }

        .mobile-menu-cta {
          margin-top: 1rem;
          width: 100%;
          justify-content: center;
        }

        @media (min-width: 768px) {
          .mobile-menu-backdrop,
          .mobile-menu {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
