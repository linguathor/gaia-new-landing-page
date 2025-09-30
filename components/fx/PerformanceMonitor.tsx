// components/fx/PerformanceMonitor.tsx
'use client';

import { useEffect } from 'react';

interface WebVitalsData {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta?: number;
  navigationType?: string;
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Basic performance monitoring without web-vitals dependency
    if (typeof window !== 'undefined') {
      // Monitor page load performance
      const observePageLoad = () => {
        if ('performance' in window) {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          
          if (navigation) {
            const metrics = {
              dns: Math.round(navigation.domainLookupEnd - navigation.domainLookupStart),
              connect: Math.round(navigation.connectEnd - navigation.connectStart),
              request: Math.round(navigation.responseStart - navigation.requestStart),
              response: Math.round(navigation.responseEnd - navigation.responseStart),
              dom: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
              load: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
              total: Math.round(navigation.loadEventEnd - navigation.fetchStart)
            };
            
            console.log('Performance Metrics:', metrics);
            
            // Send to analytics if available
            if ((window as any).gtag) {
              (window as any).gtag('event', 'page_performance', {
                event_category: 'Performance',
                total_load_time: metrics.total,
                dom_load_time: metrics.dom,
              });
            }
          }
        }
      };

      // Wait for page to load
      if (document.readyState === 'complete') {
        setTimeout(observePageLoad, 100);
      } else {
        window.addEventListener('load', () => {
          setTimeout(observePageLoad, 100);
        });
      }
    }
  }, []);

  // This component doesn't render anything visible
  return null;
}