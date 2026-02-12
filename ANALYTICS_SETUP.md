# Google Analytics Implementation for Regal Residencia

## Overview
This document outlines the implementation of Google Analytics 4 (GA4) for the Regal Residencia website to provide live insights into user behavior, engagement, and conversion metrics.

## Implemented Tracking Features

### 1. Page Views
- Automatic tracking of all page views
- Tracks URL changes and hash navigation
- Captures page titles for better insights

### 2. Event Tracking
- Form submissions (both main inquiry form and popup form)
- Navigation clicks (About, Amenities, Location, etc.)
- Download events (brochure downloads)
- Contact interactions (call, WhatsApp, social media clicks)
- Video interactions (if implemented)

### 3. Conversion Tracking
- Inquiry form submissions
- Brochure downloads
- Location map views
- Contact method selections

## Configuration

### Google Analytics Measurement ID
The GA4 tracking is configured using the Measurement ID stored in the `.env` file:
```
REACT_APP_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Environment Handling
- Analytics only runs in production environment
- Development events are logged to console for testing
- Tracking automatically initializes on app load

## Tracked Events

### Engagement Events
- `click_navigation`: When users click navigation links
- `click_location`: When users click the location link
- `click_download`: When users click to download brochure
- `form_start`: When users begin filling out forms
- `form_error`: When form submissions fail
- `form_submit`: When forms are successfully submitted

### Custom Events
- `download`: When brochures are downloaded
- `pageview`: When pages are viewed

## Components with Analytics

### App.js
- Initializes Google Analytics
- Tracks page views on URL changes
- Handles hash navigation tracking

### InquiryForm.js
- Tracks form start, success, and error events
- Monitors user engagement with inquiry forms

### PopupEnquiryForm.js
- Tracks popup form interactions
- Monitors popup form submissions

### Navbar.js
- Tracks navigation clicks
- Monitors user movement between sections

### DownloadBrochureButton.js
- Tracks brochure download attempts
- Monitors successful downloads

## Setting Up Live Insights

### In Google Analytics Dashboard:
1. Navigate to your GA4 property for Regal Residencia
2. Access "Reports" section for standard insights
3. Use "Exploration" for custom analysis
4. Check "Real-time" reports for immediate visitor data
5. Set up custom dashboards for key metrics

### Key Metrics to Monitor:
- Real-time visitors and their locations
- Page views and engagement rates
- Form submission conversion rates
- Brochure download frequency
- Top traffic sources
- User demographics and interests

## Testing Analytics

During development, analytics events are logged to the browser console in non-production environments. Look for messages like "Analytics Event: { ... }" when interactions occur.

## Privacy Compliance
All tracking complies with privacy regulations and only collects anonymized user interaction data. No personal information is transmitted to Google Analytics.

## Troubleshooting
- Ensure the Measurement ID is correctly set in the environment
- Check browser console for analytics events during development
- Verify that ad blockers aren't interfering with tracking
- Confirm that tracking is working in production environment