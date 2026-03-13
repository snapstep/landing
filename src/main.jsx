import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LanguageProvider } from './i18n/LanguageContext'
import './index.css'
import App from './App.jsx'
import { initializeFirebase } from './config/firebase'

// Initialize Firebase before rendering
initializeFirebase().then(() => {
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </StrictMode>,
  )
}).catch((error) => {
  console.error('Failed to initialize Firebase:', error);
  // Still render the app even if Firebase fails
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </StrictMode>,
  )
})
