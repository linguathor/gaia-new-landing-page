// components/fx/FloatingElements.tsx
'use client';

import { useEffect, useState } from 'react';

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  amplitude?: number;
  className?: string;
}

export function FloatingElement({ 
  children, 
  delay = 0, 
  duration = 3000, 
  amplitude = 10,
  className = '' 
}: FloatingElementProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const startTime = Date.now() + delay;
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = (elapsed % duration) / duration;
      const newOffset = Math.sin(progress * Math.PI * 2) * amplitude;
      setOffset(newOffset);
      requestAnimationFrame(animate);
    };

    const timeoutId = setTimeout(() => {
      requestAnimationFrame(animate);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [delay, duration, amplitude]);

  return (
    <div 
      className={`transition-transform duration-1000 ease-in-out ${className}`}
      style={{ 
        transform: `translateY(${offset}px)`,
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
}

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxElement({ children, speed = 0.5, className = '' }: ParallaxElementProps) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      setOffset(scrolled * speed);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div 
      className={className}
      style={{ 
        transform: `translateY(${offset}px)`,
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
}

// Animated background gradients
export function AnimatedGradientBg({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/5 to-accent-500/10 animate-gradient-shift"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-success-500/5 via-transparent to-primary-500/5 animate-gradient-shift-reverse"></div>
    </div>
  );
}

// Floating icons/shapes
export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <FloatingElement delay={0} duration={4000} amplitude={15} className="absolute top-20 left-10">
        <div className="w-4 h-4 bg-primary-300/20 rounded-full blur-sm"></div>
      </FloatingElement>
      <FloatingElement delay={1000} duration={5000} amplitude={20} className="absolute top-40 right-20">
        <div className="w-6 h-6 bg-secondary-300/20 rounded-full blur-sm"></div>
      </FloatingElement>
      <FloatingElement delay={2000} duration={3500} amplitude={12} className="absolute bottom-32 left-1/4">
        <div className="w-3 h-3 bg-accent-300/30 rounded-full blur-sm"></div>
      </FloatingElement>
      <FloatingElement delay={500} duration={4500} amplitude={18} className="absolute bottom-20 right-1/3">
        <div className="w-5 h-5 bg-success-300/20 rounded-full blur-sm"></div>
      </FloatingElement>
    </div>
  );
}