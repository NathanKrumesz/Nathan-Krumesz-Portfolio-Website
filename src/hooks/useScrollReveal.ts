import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  delay?: number;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(options: ScrollRevealOptions = {}) {
  const { threshold = 0.12, rootMargin = '0px 0px -40px 0px', once = true, delay = 0 } = options;
  const ref = useRef<T>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Support reduced motion preference
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true);
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            const timer = setTimeout(() => setIsRevealed(true), delay);
            return () => clearTimeout(timer);
          } else {
            setIsRevealed(true);
          }
          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          setIsRevealed(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once, delay]);

  return { ref, isRevealed };
}
