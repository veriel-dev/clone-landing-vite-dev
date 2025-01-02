"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Registramos el plugin ScrollTrigger con GSAP
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useSlideIn(initialX: number = 100) {
  // Creamos una referencia para el elemento que queremos animar
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Verificamos que estemos en el navegador y que la referencia exista
    if (typeof window === 'undefined' || !elementRef.current) return;

    // Configuramos el estado inicial del elemento
    gsap.set(elementRef.current, {
      x: initialX,
    });

    // Creamos la animación
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

    // Limpieza cuando el componente se desmonta
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [initialX]); // La dependencia asegura que la animación se actualice si cambia initialX

  return elementRef;
}
