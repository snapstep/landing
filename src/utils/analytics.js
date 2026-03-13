import { logEvent } from 'firebase/analytics';
import { getAnalyticsInstance } from '../config/firebase';

// Helper to safely log events
const trackEvent = (eventName, eventParams = {}) => {
  const analytics = getAnalyticsInstance();

  if (analytics) {
    logEvent(analytics, eventName, eventParams);
  }

  // Always log to console in development
  if (import.meta.env.DEV) {
    console.log('📊 Analytics Event:', eventName, eventParams);
  }
};

// Page view tracking
export const trackPageView = (pageName, pageTitle) => {
  trackEvent('page_view', {
    page_title: pageTitle,
    page_location: window.location.href,
    page_path: window.location.hash,
    page_name: pageName,
  });
};

// Download button clicks
export const trackDownloadClick = (platform, location) => {
  trackEvent('landing_download_click', {
    platform: platform, // 'ios' or 'android'
    location: location, // 'hero', 'cta', 'navbar'
    button_type: 'store_button',
  });

  // Also track as conversion event
  trackEvent('generate_lead', {
    platform: platform,
    source: location,
  });
};

// Section scrolls
export const trackSectionView = (sectionName) => {
  trackEvent('landing_section_view', {
    section_name: sectionName,
  });
};

// Navigation clicks
export const trackNavigationClick = (linkName, destination) => {
  trackEvent('landing_nav_click', {
    link_text: linkName,
    link_destination: destination,
  });
};

// Pricing interaction
export const trackPricingInteraction = (action, planName = null) => {
  trackEvent('landing_pricing_interaction', {
    action: action, // 'view', 'select', 'compare'
    plan_name: planName,
  });
};

// FAQ interaction
export const trackFAQClick = (question) => {
  trackEvent('landing_faq_click', {
    question_text: question.substring(0, 100), // Limit length
  });
};
