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
