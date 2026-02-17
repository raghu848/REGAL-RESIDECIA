// Use gtag.js (already loaded in index.html) instead of react-ga4
// This prevents double initialization and works in all environments

const TRACKING_ID = 'G-81FCQ3MSYD'; // Same ID as in index.html

// Wait for gtag to be available (since script loads async)
const waitForGtag = (callback, maxAttempts = 50) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    callback();
  } else if (maxAttempts > 0) {
    setTimeout(() => waitForGtag(callback, maxAttempts - 1), 100);
  } else {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('Google Analytics (gtag.js) failed to load after 5 seconds');
    }
  }
};

// Check if gtag is available
const isGtagAvailable = () => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

const initializeAnalytics = () => {
  // Wait for gtag to load, then verify
  waitForGtag(() => {
    if (process.env.NODE_ENV !== 'production') {
      console.log('Google Analytics initialized (gtag.js)');
    }
  });
};

const trackPageView = (path) => {
  waitForGtag(() => {
    if (isGtagAvailable()) {
      window.gtag('config', TRACKING_ID, {
        page_path: path,
        page_title: document.title
      });
    }
  });
  
  if (process.env.NODE_ENV !== 'production' && !isGtagAvailable()) {
    console.log('Analytics PageView:', { path, title: document.title });
  }
};

const trackEvent = (action, category, label, value) => {
  waitForGtag(() => {
    if (isGtagAvailable()) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
    }
  });
  
  if (process.env.NODE_ENV !== 'production' && !isGtagAvailable()) {
    console.log('Analytics Event:', { action, category, label, value });
  }
};

const trackFormSubmission = (formName) => {
  trackEvent('form_submit', 'engagement', formName);
};

const trackVideoInteraction = (videoName, action) => {
  trackEvent(action, 'video', videoName);
};

const trackDownload = (fileName) => {
  trackEvent('download', 'engagement', fileName);
};

export {
  initializeAnalytics,
  trackPageView,
  trackEvent,
  trackFormSubmission,
  trackVideoInteraction,
  trackDownload
};
