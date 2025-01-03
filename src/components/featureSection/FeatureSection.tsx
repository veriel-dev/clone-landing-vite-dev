'use client';
import gsap from 'gsap';
import React, { useRef, useEffect, useState } from 'react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { SvgNode } from '../heroSection/heroDiagram/elements/SvgNode';

gsap.registerPlugin(ScrollTrigger);

interface FeatureSectionProps {
  title: string;
  description?: string;
  type?: 'blue' | 'pink';
  children: React.ReactNode;
  className?: string;
}

export const FeatureSection = ({
  title,
  description,
  type = 'blue',
  children,
  className,
}: FeatureSectionProps) => {
  const [animationPercentage, setAnimationPercentage] = useState(0);
  const [animationVisible, setAnimationVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Create the timeline for animations
    timelineRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: `#feature_section_${type}`,
        start: 'top 80%',
        once: true,
      },
    });

    // Start animation
    timelineRef.current
      .call(() => setAnimationVisible(true), [], 0)
      .to(
        { value: 0 },
        {
          value: 0.55,
          duration: 2,
          ease: 'expo.out',
          onUpdate: function () {
            setAnimationPercentage(this.targets()[0].value);
          },
        },
        0,
      );
    // Cleanup
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [type]);
  return (
    <section
      className={`feature-section ${className || ''}`}
      id={`feature_section_${type}`}
      ref={sectionRef}
    >
      <div className="feature-section__title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="61"
          viewBox="0 0 70 61"
          fill="none"
          style={{ overflow: 'visible' }}
        >
          <path
            d="M38.5 0.772461V60.5215M22.6301 60.7725V38.7905C22.6301 25.3784 17.3675 12.5156 8 3.03184M54.3699 60.7725V38.7905C54.3699 25.3784 59.6325 12.5156 69 3.03184"
            stroke="url(#linear-gradient-bg-lines)"
            strokeWidth="2"
          />
          {type === 'blue' && (
            <SvgNode
              path="M22.6301 80.7725V38.7905C22.6301 25.3784 17.3675 12.5156 8 3.03184L-20 -20"
              position={animationPercentage}
              visible={animationVisible}
            />
          )}
          {type === 'pink' && (
            <SvgNode
              path="M54.3699 80.7725V38.7905C54.3699 25.3784 59.6325 12.5156 69 3.03184L90 -20"
              position={animationPercentage}
              visible={animationVisible}
              dotColor="#ce9bf4"
              glowColor="#BD34FE"
            />
          )}
          <defs>
            <linearGradient
              id="linear-gradient-bg-lines"
              x1="38.5"
              y1="0.772461"
              x2="38.5"
              y2="60.7725"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#404040" stopOpacity="0" />
              <stop offset="0.5" stopColor="#737373" />
              <stop offset="1" stopColor="#404040" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <h2
          style={
            {
              '--text-color': type === 'blue' ? '#41D1FF' : '#BD34FE',
            } as React.CSSProperties
          }
        >
          {title}
        </h2>
        {description && <h3>{description}</h3>}
      </div>

      <div className="feature-section__grid">{children}</div>
    </section>
  );
};
