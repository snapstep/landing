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
                      <button className="btn btn-primary">Get SnapStep Free</button>
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
