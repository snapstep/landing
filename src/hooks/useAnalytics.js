import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackSectionView, trackPageView } from '../utils/analytics';

// Hook to track when a section comes into view
export const useTrackSectionView = (sectionName, options = {}) => {
  const { threshold = 0.5, triggerOnce = true } = options;
  const ref = useRef(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!triggerOnce || !hasTracked.current)) {
            trackSectionView(sectionName);
            hasTracked.current = true;
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [sectionName, threshold, triggerOnce]);

  return ref;
};

// Hook to track page views on route changes
export const usePageViewTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Get the current path from hash router
    const path = location.pathname || '/';
    const pageName = path === '/' ? 'home' : path.substring(1);
    const pageTitle = document.title;

    trackPageView(pageName, pageTitle);
  }, [location]);
};
