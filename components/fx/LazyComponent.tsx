"use client";
import { useEffect, useRef, useState } from 'react';

interface LazyComponentProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
  className?: string;
}

export default function LazyComponent({
  children,
  fallback,
  rootMargin = '100px',
  threshold = 0.1,
  className = ''
}: LazyComponentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasIntersected) {
          setIsVisible(true);
          setHasIntersected(true);
          // Disconnect after first intersection to prevent re-loading
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [rootMargin, threshold, hasIntersected]);

  return (
    <div ref={elementRef} className={className}>
      {isVisible ? children : (fallback || (
        <div className="animate-pulse bg-neutral-100 rounded-lg h-96 w-full flex items-center justify-center">
          <div className="text-neutral-400 text-lg font-medium">Loading...</div>
        </div>
      ))}
    </div>
  );
}