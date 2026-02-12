import ReactGA4 from 'react-ga4';

const TRACKING_ID = process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'; // Replace with your GA4 Measurement ID

const initializeAnalytics = () => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA4.initialize(TRACKING_ID);
  }
};

const trackPageView = (path) => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA4.send({ 
      hitType: 'pageview', 
      page: path,
      title: document.title
    });
  }
};

const trackEvent = (action, category, label, value) => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA4.event({
      action,
      category,
      label,
      value
    });
  } else {
    // Log events in development for testing
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