import React, { useEffect, useState, useRef } from 'react';

interface AnimatedCounterProps {
  value: string;
  trigger?: boolean;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  trigger = true,
  duration = 1200,
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState<string>(() => {
    // If not triggered yet or reduced motion, show start or target
    return value;
  });
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!trigger || hasAnimatedRef.current) return;

    // Respect reduced motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayValue(value);
      hasAnimatedRef.current = true;
      return;
    }

    // Try to extract numeric part and prefix/suffix
    // Handles formats like: "4.2x", "-28%", "+35%", "1,480", "1.8M+", "$1M+", "11%+"
    const match = value.match(/^([+\-$~]*)(\d+(?:,\d+)*(?:\.\d+)?)(.*)$/);

    if (!match) {
      // For complex values like "26% → 37%", display directly
      setDisplayValue(value);
      hasAnimatedRef.current = true;
      return;
    }

    const prefix = match[1] || '';
    const numString = match[2].replace(/,/g, '');
    const suffix = match[3] || '';
    const targetNum = parseFloat(numString);
    const hasDecimal = numString.includes('.');
    const decimalPlaces = hasDecimal ? numString.split('.')[1].length : 0;
    const hasComma = match[2].includes(',');

    if (isNaN(targetNum)) {
      setDisplayValue(value);
      hasAnimatedRef.current = true;
      return;
    }

    hasAnimatedRef.current = true;
    let startTime: number | null = null;
    let rafId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease-out cubic curve: 1 - pow(1 - progress, 3)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentNum = targetNum * easeProgress;

      let formattedNum = currentNum.toFixed(decimalPlaces);
      if (hasComma) {
        const parts = formattedNum.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        formattedNum = parts.join('.');
      }

      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        rafId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, [trigger, value, duration]);

  return <span className={`font-mono tabular-nums ${className}`}>{displayValue}</span>;
};
