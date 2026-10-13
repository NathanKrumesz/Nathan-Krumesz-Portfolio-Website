import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  as?: React.ElementType;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  threshold = 0.12,
  as: Component = 'div',
}) => {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>({ delay, threshold });

  return (
    <Component
      ref={ref}
      className={`reveal-fade-up ${isRevealed ? 'is-revealed' : ''} ${className}`}
    >
      {children}
    </Component>
  );
};
