import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, id) => {
    e.preventDefault();
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

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <Link to="/" className="nav-logo">
          <div className="logo-icon" />
          <span>SnapStep</span>
        </Link>
        <div className="nav-links">
          <a href="#product" onClick={(e) => handleNavClick(e, 'product')} className="nav-link">Product</a>
          <a href="#features" onClick={(e) => handleNavClick(e, 'features')} className="nav-link">Features</a>
          <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="nav-link">Pricing</a>
        </div>
        <button className="btn btn-primary nav-cta" onClick={(e) => handleNavClick(e, 'pricing')}>Download</button>
      </div>
      
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--header-height);
          background: rgba(3, 4, 6, 0.7);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
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
        
        .nav-cta {
          padding: 0.6rem 1.5rem;
          font-size: 0.9rem;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
