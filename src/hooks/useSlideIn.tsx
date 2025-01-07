'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export function useSlideIn(initialX: number = 100) {
  gsap.registerPlugin(ScrollTrigger);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;
    // Configuramos el estado inicial del elemento
    gsap.set(elementRef.current, {
      x: initialX,
    });
    const animation = gsap.to(elementRef.current, {
      x: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: elementRef.current,
        start: 'top 100%',
        once: true,
      },
    });
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [initialX]);

  return elementRef;
}
