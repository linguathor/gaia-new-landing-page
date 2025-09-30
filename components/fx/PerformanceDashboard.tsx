"use client";
import { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number;
  largestContentfulPaint?: number;
  firstInputDelay?: number;
  cumulativeLayoutShift?: number;
}

export default function PerformanceDashboard() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const collectMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.fetchStart;
        const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart;
        const firstPaint = navigation.responseStart - navigation.fetchStart;
        
        setMetrics({
          loadTime: Math.round(loadTime),
          domContentLoaded: Math.round(domContentLoaded),
          firstPaint: Math.round(firstPaint)
        });
      }
    };

    // Collect metrics after page load
    if (document.readyState === 'complete') {
      setTimeout(collectMetrics, 1000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(collectMetrics, 1000);
      });
    }

    // Toggle visibility with keyboard shortcut
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(!isVisible);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isVisible]);

  if (process.env.NODE_ENV !== 'development' || !isVisible || !metrics) {
    return null;
  }

  const getScoreColor = (value: number, thresholds: [number, number]) => {
    if (value <= thresholds[0]) return 'text-success-600 bg-success-100';
    if (value <= thresholds[1]) return 'text-accent-600 bg-accent-100';
    return 'text-red-600 bg-red-100';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-xl shadow-primary border border-neutral-200 p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-bold text-primary-600">Performance Metrics</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-neutral-400 hover:text-neutral-600 text-xl"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex justify-between items-center">
          <span className="text-neutral-600">Page Load:</span>
          <span className={`px-2 py-1 rounded-full font-semibold ${getScoreColor(metrics.loadTime, [2000, 4000])}`}>
            {metrics.loadTime}ms
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-neutral-600">DOM Ready:</span>
          <span className={`px-2 py-1 rounded-full font-semibold ${getScoreColor(metrics.domContentLoaded, [1500, 3000])}`}>
            {metrics.domContentLoaded}ms
          </span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-neutral-600">First Paint:</span>
          <span className={`px-2 py-1 rounded-full font-semibold ${getScoreColor(metrics.firstPaint, [1000, 2000])}`}>
            {metrics.firstPaint}ms
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-neutral-200 text-xs text-neutral-500">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
}