"use client";
import { useEffect } from 'react';

interface WebVitalsData {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only load web-vitals in production and when supported
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        const sendToAnalytics = (metric: WebVitalsData) => {
          // Log to console in development, send to analytics in production
          console.log('Web Vital:', metric);
          
          // Example: Send to Google Analytics 4
          if (typeof (window as any).gtag !== 'undefined') {
            (window as any).gtag('event', metric.name, {
              event_category: 'Web Vitals',
              event_label: metric.id,
              value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
              custom_map: {
                metric_rating: metric.rating
              }
            });
          }

          // Example: Send to Vercel Analytics
          if (typeof window !== 'undefined' && (window as any).va) {
            (window as any).va('track', 'Web Vital', {
              name: metric.name,
              value: metric.value,
              rating: metric.rating
            });
          }
        };

        // Measure all Core Web Vitals
        getCLS(sendToAnalytics);
        getFID(sendToAnalytics);
        getFCP(sendToAnalytics);
        getLCP(sendToAnalytics);
        getTTFB(sendToAnalytics);
      }).catch(error => {
        console.warn('Failed to load web-vitals:', error);
      });
    }
  }, []);

  // Performance hints for development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const logPerformanceHints = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.fetchStart;
          const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
          
          console.group('🚀 Performance Metrics');
          console.log(`Page Load Time: ${Math.round(loadTime)}ms`);
          console.log(`DOM Content Loaded: ${Math.round(domContentLoaded)}ms`);
          console.log(`First Paint: ${Math.round(navigation.responseStart - navigation.fetchStart)}ms`);
          
          // Performance hints
          if (loadTime > 3000) {
            console.warn('⚠️ Page load time is over 3 seconds. Consider optimizing images and reducing bundle size.');
          }
          if (domContentLoaded > 1500) {
            console.warn('⚠️ DOM Content Loaded is over 1.5 seconds. Consider code splitting and lazy loading.');
          }
          
          console.groupEnd();
        }
      };

      // Wait for page load to complete
      if (document.readyState === 'complete') {
        setTimeout(logPerformanceHints, 1000);
      } else {
        window.addEventListener('load', () => {
          setTimeout(logPerformanceHints, 1000);
        });
      }
    }
  }, []);

  return null; // This component doesn't render anything
}

// Performance utility functions
export const preloadRoute = (href: string) => {
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
};

export const preconnect = (href: string) => {
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = href;
  document.head.appendChild(link);
};

// Initialize critical resource preconnections
export const initializePerformanceOptimizations = () => {
  if (typeof document !== 'undefined') {
    // Preconnect to external domains
    preconnect('https://images.unsplash.com');
    preconnect('https://fonts.googleapis.com');
    preconnect('https://fonts.gstatic.com');
  }
};