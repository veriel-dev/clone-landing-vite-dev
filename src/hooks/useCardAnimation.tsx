'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

interface UseCardAnimationOptions {
  once?: boolean;
}

/**
 * A custom hook for animating a card element in Next.js.
 *
 * @param element - The element or selector for the element to be animated
 * @param animation - A function that returns a GSAP timeline for the animation
 * @param options - Options for the animation
 */

type AnimationType = (() => gsap.core.Timeline) | undefined | (() => void);
export const useCardAnimation = (
  element: React.RefObject<HTMLElement | null>,
  animation?: AnimationType,
  options?: UseCardAnimationOptions,
) => {
  gsap.registerPlugin(ScrollTrigger);
  // Convert the element parameter to a ref if it's a string
  const elementRef = useRef<HTMLElement | null>(
    typeof element === 'string' ? null : element.current,
  );
  const [isCardActive, setIsCardActive] = useState(false);
  const [isAnimationRunning, setIsAnimationRunning] = useState(false);
  // Refs for cleanup
  const timelineRef = useRef<GSAPTimeline | null>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const startAnimation = () => {
    if (isAnimationRunning) return;

    setIsAnimationRunning(true);
    setIsCardActive(true);

    if (timelineRef.current) timelineRef.current.kill();

    if (!animation) return;

    timelineRef.current = gsap.timeline({
      onComplete: () => {
        if (!options?.once) {
          setIsCardActive(false);
          setTimeout(() => {
            setIsAnimationRunning(false);
          }, 3000);
        }
      },
    });
    const anim = animation();
    if (anim) {
      timelineRef.current.add(anim);
    }
  };
  useEffect(() => {
    if (typeof element === 'string') elementRef.current = document.querySelector(element);

    // Set up ScrollTrigger for mobile devices
    /* 
      - window.innerWidth < 768 - Comprueba si el ancho de la ventana es menor a 768 píxeles, lo que típicamente indica un dispositivo móvil o tablet
      - elementRef.current - Verifica que existe una referencia válida al elemento del DOM
      - ScrollTrigger.create() - Crea una nueva instancia de ScrollTrigger con la siguiente configuración:
        - trigger: elementRef.current - Elemento que dispara la animación cuando es visible 
        - start: 'top 60%' - Posición en la que se activa la animación. 'top 60%' indica que la animación se activa cuando el 60% superior del elemento está en la parte superior de la ventana
        - onEnter: startAnimation - Función que se ejecuta cuando el elemento es visible en la ventana
      - scrollTriggerRef.current - Guarda la instancia de ScrollTrigger para limpiarla más tarde
    */
    if (window.innerWidth < 768 && elementRef.current) {
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: elementRef.current,
        start: 'top 60%',
        onEnter: () => {
          startAnimation();
        },
      });
    }
    // Cleanup function
    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
      if (timelineRef.current) {
        timelineRef.current.kill();
        timelineRef.current = null;
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [element, animation, options?.once]);

  return {
    startAnimation,
    isCardActive,
  };
};
