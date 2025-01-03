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
    /* Creamos la animación 
      - gsap.to() anima el elemento de su posición actual hasta los valores especificados. En este caso, animamos el elemento desde su posición actual hasta x: 0
      - x: 0 Mueve el elemento horizontalmente a la posición 0
      - duration: 1 Duración de la animación en segundos
      - ease: 'power3.out' Efecto de aceleración de la animación. Función suavizada que hace que la animación empiece rápido y termine más suava
      - scrollTrigger: Configura cuando se dispara la animación
        - trigger: elementRef.current Elemento que dispara la animación
        - start: 'top 100%' Posición en la que se activa la animación. 'top 100%' indica que la animación se activa cuando el 100% superior del elemento está en la parte superior de la ventana
        - once: true La animación se ejecuta solo una vez    
    */
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
