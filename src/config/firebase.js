import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

let app = null;
let analytics = null;

export const initializeFirebase = async () => {
  if (app) return { app, analytics };

  // Validate required config
  if (!firebaseConfig.apiKey) {
    console.warn('Firebase config missing. Analytics disabled.');
    return { app: null, analytics: null };
  }

  try {
    app = initializeApp(firebaseConfig);

    // Only initialize analytics in production and if supported
    if (import.meta.env.PROD && await isSupported()) {
      analytics = getAnalytics(app);
      console.log('Firebase Analytics initialized');
    } else if (import.meta.env.DEV) {
      console.log('Firebase Analytics disabled in development mode');
    }
  } catch (error) {
    console.error('Firebase initialization error:', error);
  }

  return { app, analytics };
};

export const getAnalyticsInstance = () => analytics;
