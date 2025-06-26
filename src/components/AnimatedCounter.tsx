'use client';

import { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  startAnimation?: boolean;
  startFrom?: number;
}

export default function AnimatedCounter({ 
  target, 
  duration = 2000, 
  suffix = '', 
  prefix = '',
  className = '',
  startAnimation = true,
  startFrom = 0
}: AnimatedCounterProps) {
  const [count, setCount] = useState(startFrom);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!startAnimation) return;

    const startTime = Date.now();
    const startValue = startFrom;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOutCubic(progress);
      
      const currentValue = Math.round(startValue + (target - startValue) * easedProgress);
      setCount(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [target, duration, startAnimation, startFrom]);

  return (
    <span className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
} 