import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Terms from './components/Terms';
import Privacy from './components/Privacy';

function App() {
  return (
    <Router>
      <div className="app-main">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Features />
                {/* Simplified Contact CTA */}
                <section className="cta section">
                  <div className="container">
                    <div className="glass-card cta-content">
                      <h2>Ready to solve?</h2>
                      <p>SnapStep helps you analyze and solve any problem in seconds with AI power.</p>
                      <div className="hero-actions" style={{ marginTop: '2rem' }}>
                        <a href="#" className="store-btn google-play">
                          <svg viewBox="0 0 512 512" width="24" height="24">
                            <path fill="#fff" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-10.1 18-26.7-1.2-36.8zM325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z"/>
                          </svg>
                          <div className="store-text">
                            <span className="store-label">GET IT ON</span>
                            <span className="store-name">Google Play</span>
                          </div>
                        </a>
                        <a href="#" className="store-btn app-store">
                          <svg viewBox="0 0 384 512" width="24" height="24">
                            <path fill="#fff" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.1-77.5-19.1-36.9 0-106.3 31.5-125.6 114.5-15.8 68.1 32.7 175.2 73.6 230.1 20.5 27.5 45 54.8 71.3 54.8 24.8 0 34.4-15.3 64.9-15.3 30.5 0 39.1 15.3 64.9 15.3 26.8 0 47.7-24.5 68.2-54.7 23.5-35 33-68.8 33.2-70.5-.8-.4-64.1-24.3-64.4-91.2zm-70.3-157.3c15.1-18.2 25.8-43.8 23.3-68.4-21.5.8-47.5 14-63 32-13.9 15.9-26 42.4-22.7 66.2 23.8 1.9 47.5-11.6 62.4-29.8z"/>
                          </svg>
                          <div className="store-text">
                            <span className="store-label">Download on the</span>
                            <span className="store-name">App Store</span>
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
          </Routes>
        </main>
        
        {/* Simple Footer */}
        <footer className="footer">
          <div className="container footer-content">
            <div className="footer-brand">
              <div className="logo-dot" />
              <span className="brand-name">SnapStep</span>
            </div>
            <div className="footer-links">
              <Link to="/terms">Terms</Link>
              <Link to="/privacy">Privacy</Link>
              <a href="#">Twitter</a>
            </div>
            <p className="copyright">&copy; 2026 SnapStep AI.</p>
          </div>
        </footer>

        <style>{`
          .app-main {
            min-height: 100vh;
          }
          
          .cta-content {
            text-align: center;
            max-width: 900px;
            margin: 0 auto;
            border-color: var(--primary-glow);
            background: linear-gradient(135deg, rgba(10, 12, 18, 0.8) 0%, rgba(59, 130, 246, 0.05) 100%);
          }
          
          .cta-content h2 {
            margin-bottom: 1rem;
          }
          
          .cta-content p {
            margin-bottom: 2.5rem;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
          }
          
          .footer {
            padding: 5rem 0;
            border-top: 1px solid var(--border);
          }
          
          .footer-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
          }
          
          @media (min-width: 768px) {
            .footer-content {
              flex-direction: row;
            }
          }
          
          .footer-brand {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          
          .logo-dot {
            width: 12px;
            height: 12px;
            background: var(--primary);
            border-radius: 50%;
          }
          
          .brand-name {
            font-weight: 700;
            font-size: 1.25rem;
          }
          
          .footer-links {
            display: flex;
            gap: 2.5rem;
          }
          
          .footer-links a {
            color: var(--text-dim);
            text-decoration: none;
            font-size: 0.9rem;
            transition: var(--transition);
          }
          
          .footer-links a:hover {
            color: var(--text);
          }
          
          .copyright {
            font-size: 0.85rem;
            color: var(--text-dark);
          }
        `}</style>
      </div>
    </Router>
  );
}

export default App;
