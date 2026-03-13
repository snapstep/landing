import React, { createContext, useContext, useState, useCallback } from 'react';
import en from './en.json';
import uk from './uk.json';

const translations = { en, uk };

const LanguageContext = createContext();

function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj);
}

function detectLanguage() {
  const saved = localStorage.getItem('snapstep-lang');
  if (saved && translations[saved]) return saved;
  const browserLang = navigator.language || '';
  return browserLang.startsWith('uk') ? 'uk' : 'en';
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(detectLanguage);

  const setLanguage = useCallback((lang) => {
    setLanguageState(lang);
    localStorage.setItem('snapstep-lang', lang);
    document.documentElement.lang = lang;
  }, []);

  const t = useCallback((key) => {
    const value = getNestedValue(translations[language], key);
    if (value === undefined) {
      return getNestedValue(translations.en, key) ?? key;
    }
    return value;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}
