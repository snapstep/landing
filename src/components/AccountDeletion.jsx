import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from '../i18n/LanguageContext';

const AccountDeletion = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Generate mailto link dynamically based on form input
  const getMailtoLink = () => {
    const subject = encodeURIComponent('SnapStep Account Deletion Request');
    const body = encodeURIComponent(
      `Account Email: ${email || '[Your email here]'}\n\n` +
      `Reason for deletion: ${reason || '[Optional]'}\n\n` +
      `I request the deletion of my SnapStep account and all associated data as described in the Account Deletion Policy.`
    );
    return `mailto:snapstep.help@gmail.com?subject=${subject}&body=${body}`;
  };

  // Get email template text
  const getEmailTemplate = () => {
    return `To: snapstep.help@gmail.com
Subject: SnapStep Account Deletion Request

Account Email: ${email || '[Your email here]'}

Reason for deletion: ${reason || '[Optional]'}

I request the deletion of my SnapStep account and all associated data as described in the Account Deletion Policy.`;
  };

  // Copy template to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(getEmailTemplate());
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className="legal-page section account-deletion-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card legal-content"
        >
          <Link to="/" className="back-link">{t('accountDeletion.backToHome')}</Link>

          <div className="deletion-header">
            <div className="app-info">
              <div className="logo-icon" />
              <span className="brand-name">SnapStep</span>
            </div>
            <h1>{t('accountDeletion.title')}</h1>
            <p className="developer-info">{t('accountDeletion.developerInfo')}</p>
          </div>


          <div className="legal-text">
            <div className="warning-box">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              <div>
                <strong>{t('accountDeletion.warningTitle')}</strong>
                <p>{t('accountDeletion.warningText')}</p>
              </div>
            </div>

            <h2>{t('accountDeletion.howToTitle')}</h2>
            <div className="steps-list">
              <div className="step-item">
                <div className="step-number">1</div>
                <div>
                  <strong>{t('accountDeletion.step1Title')}</strong>
                  <p>{t('accountDeletion.step1Text')}</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div>
                  <strong>{t('accountDeletion.step2Title')}</strong>
                  <p>{t('accountDeletion.step2Text')}</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div>
                  <strong>{t('accountDeletion.step3Title')}</strong>
                  <p>{t('accountDeletion.step3Text')}</p>
                </div>
              </div>
            </div>

            <h2>{t('accountDeletion.dataDeletedTitle')}</h2>
            <ul className="data-list">
              <li>{t('accountDeletion.dataDeleted1')}</li>
              <li>{t('accountDeletion.dataDeleted2')}</li>
              <li>{t('accountDeletion.dataDeleted3')}</li>
              <li>{t('accountDeletion.dataDeleted4')}</li>
              <li>{t('accountDeletion.dataDeleted5')}</li>
              <li>{t('accountDeletion.dataDeleted6')}</li>
            </ul>

            <h2>{t('accountDeletion.dataRetainedTitle')}</h2>
            <p>{t('accountDeletion.dataRetainedText')}</p>
            <ul className="data-list">
              <li>{t('accountDeletion.dataRetained1')}</li>
              <li>{t('accountDeletion.dataRetained2')}</li>
            </ul>

            <h2>{t('accountDeletion.timelineTitle')}</h2>
            <ul className="data-list">
              <li>{t('accountDeletion.timeline1')}</li>
              <li>{t('accountDeletion.timeline2')}</li>
              <li>{t('accountDeletion.timeline3')}</li>
            </ul>

            <h2>{t('accountDeletion.formTitle')}</h2>
            <p>{t('accountDeletion.formSubtitle')}</p>

            <div className="deletion-form">
              <div className="form-group">
                <label htmlFor="email">{t('accountDeletion.emailLabel')}</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('accountDeletion.emailPlaceholder')}
                />
              </div>

              <div className="form-group">
                <label htmlFor="reason">{t('accountDeletion.reasonLabel')}</label>
                <textarea
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder={t('accountDeletion.reasonPlaceholder')}
                  rows="4"
                />
              </div>

              <div className="button-group">
                <a
                  href={getMailtoLink()}
                  className="submit-button primary"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  {t('accountDeletion.submitButton')}
                </a>

                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="submit-button secondary"
                >
                  {copied ? (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {t('accountDeletion.copied')}
                    </>
                  ) : (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                      </svg>
                      {t('accountDeletion.copyTemplate')}
                    </>
                  )}
                </button>
              </div>

              <div className="email-info">
                <p><strong>{t('accountDeletion.sendTo')}</strong> <a href="mailto:snapstep.help@gmail.com">snapstep.help@gmail.com</a></p>
                <p className="hint">{t('accountDeletion.manualHint')}</p>
              </div>
            </div>

            <div className="contact-info">
              <h3>{t('accountDeletion.contactTitle')}</h3>
              <p>
                {t('accountDeletion.contactText')}{' '}
                <a href="mailto:snapstep.help@gmail.com">snapstep.help@gmail.com</a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .account-deletion-page {
          padding-top: 140px;
          min-height: 100vh;
        }

        .legal-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: left;
        }

        .back-link {
          display: inline-block;
          color: var(--primary);
          text-decoration: none;
          font-weight: 600;
          margin-bottom: 2rem;
          transition: var(--transition);
        }

        .back-link:hover {
          transform: translateX(-4px);
        }

        .deletion-header {
          margin-bottom: 2rem;
        }

        .app-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .logo-icon {
          width: 32px;
          height: 32px;
          background: var(--primary);
          border-radius: 8px;
          box-shadow: 0 0 15px var(--primary-glow);
        }

        .brand-name {
          font-weight: 700;
          font-size: 1.5rem;
          color: var(--text);
        }

        .developer-info {
          font-size: 0.95rem;
          color: var(--text-dim);
          margin-top: 0.5rem;
        }

        .warning-box {
          display: flex;
          gap: 1rem;
          padding: 1.5rem;
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(220, 38, 38, 0.1) 100%);
          border: 1px solid rgba(239, 68, 68, 0.3);
          border-radius: 12px;
          margin: 2rem 0;
        }

        .warning-box svg {
          color: #ef4444;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .warning-box strong {
          display: block;
          color: #ef4444;
          margin-bottom: 0.5rem;
          font-size: 1.05rem;
        }

        .warning-box p {
          margin: 0;
          color: var(--text-dim);
          line-height: 1.6;
        }

        .legal-text h2 {
          font-size: 1.5rem;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          color: var(--text);
        }

        .legal-text h3 {
          font-size: 1.2rem;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: var(--text);
        }

        .legal-text p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
          color: var(--text-dim);
        }

        .steps-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin: 1.5rem 0;
        }

        .step-item {
          display: flex;
          gap: 1rem;
          align-items: start;
        }

        .step-number {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .step-item strong {
          display: block;
          color: var(--text);
          margin-bottom: 0.25rem;
          font-size: 1.05rem;
        }

        .step-item p {
          margin: 0;
          color: var(--text-dim);
          line-height: 1.6;
        }

        .data-list {
          margin: 1rem 0 1.5rem 1.5rem;
          line-height: 1.8;
        }

        .data-list li {
          margin-bottom: 0.75rem;
          color: var(--text-dim);
        }

        .deletion-form {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 2rem;
          margin: 2rem 0;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group:last-of-type {
          margin-bottom: 2rem;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.875rem 1rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          color: var(--text);
          font-size: 1rem;
          font-family: inherit;
          transition: var(--transition);
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .button-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 640px) {
          .button-group {
            grid-template-columns: 1fr;
          }
        }

        .submit-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          padding: 1rem 1.5rem;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
          text-decoration: none;
          text-align: center;
        }

        .submit-button.primary {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
        }

        .submit-button.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
          color: white;
        }

        .submit-button.secondary {
          background: var(--surface);
          color: var(--text);
          border: 2px solid var(--border);
        }

        .submit-button.secondary:hover {
          background: rgba(59, 130, 246, 0.1);
          border-color: var(--primary);
          color: var(--primary);
          transform: translateY(-2px);
        }

        .submit-button:active {
          transform: translateY(0);
        }

        .submit-button svg {
          flex-shrink: 0;
        }

        .email-info {
          padding: 1rem;
          background: rgba(59, 130, 246, 0.05);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 8px;
          margin-top: 1rem;
        }

        .email-info p {
          margin: 0.5rem 0;
          font-size: 0.95rem;
        }

        .email-info strong {
          color: var(--text);
        }

        .email-info a {
          color: var(--primary);
          text-decoration: none;
          font-weight: 600;
        }

        .email-info .hint {
          font-size: 0.85rem;
          color: var(--text-dim);
          margin-top: 0.5rem;
        }

        .contact-info {
          background: rgba(59, 130, 246, 0.05);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          padding: 1.5rem;
          margin-top: 2rem;
        }

        .contact-info h3 {
          margin-top: 0;
          color: var(--primary);
        }

        .contact-info p {
          margin: 0;
          line-height: 1.6;
        }

        .contact-info a {
          color: var(--primary);
          text-decoration: none;
          font-weight: 600;
          transition: var(--transition);
        }

        .contact-info a:hover {
          color: var(--secondary);
        }

        @media (max-width: 768px) {
          .account-deletion-page {
            padding-top: 100px;
          }

          .deletion-form {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AccountDeletion;
