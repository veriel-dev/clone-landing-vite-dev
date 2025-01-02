"use client"
import { useEffect, useId, useRef, useState } from 'react'
import { gsap } from 'gsap'
const GRADIENT_WIDTH = 30;
export interface SvgNodeProps {
  path?: string
  position?: number
  visible?: boolean
  labelVisible?: boolean
  label?: string
  glowColor?: string | null
  dotColor?: string | boolean | null
}
export const SvgNode = ({
  path,
  position = 0,
  visible = false,
  labelVisible = false,
  label,
  glowColor = '#41D1FF',
  dotColor = '#9fe6fd'
}: SvgNodeProps) => {
  // Create refs for path element and animations
  const pathElement = useRef<SVGPathElement | null>(null);
  const gradientWidthScaleFactorRef = useRef(visible ? 1 : 0);
  const dotRadiusRef = useRef(visible ? 3 : 0);
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });
  const pathId =  useId();
  
  const updateDotPosition = () => {
    if (!pathElement.current) return;
    const length = pathElement.current.getTotalLength();
    const point = pathElement.current.getPointAtLength((1 - position) * length);
    setDotPosition({ x: point.x, y: point.y });
  };
  useEffect(() => {
    updateDotPosition();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);
  useEffect(() => {
    gsap.to(gradientWidthScaleFactorRef, {
      duration: 0.5,
      ease: 'power2.inOut',
      value: visible ? 1 : 0,
    });

    gsap.to(dotRadiusRef, {
      duration: 0.6,
      ease: 'power2.inOut',
      value: visible ? 3 : 0,
    });
  }, [visible]);

  return (
    <g>
      <path
        ref={pathElement}
        d={path}
        stroke={`url(#glow_gradient_${pathId})`}
        strokeWidth="1.2"
        mask={`url(#glow_mask_${pathId})`}
        className="svg-path"
      />
      {dotColor && (
        <circle
          cx={dotPosition.x}
          cy={dotPosition.y}
          r={`${visible ? 3 : 0}`}
          fill={`${dotColor ? dotColor.toString(): 'transparent'}`}
          className="circle-dot"
          style={{ '--dot-color': dotColor } as React.CSSProperties}
        />
      )}
      {label && (
        <text
          x={dotPosition.x}
          y={dotPosition.y + 15}
          fill="#a3a3a3"
          fontFamily="Inter, sans-serif"
          fontSize="11px"
          fontStyle="normal"
          fontWeight="400"
          textAnchor="middle"
          alignmentBaseline="hanging"
          className={`label ${labelVisible && "label--visible"}`}
        >
          {label}
        </text>
      )}
      <defs>
        <mask id={`glow_mask_${pathId}`}>
          <path d={path} fill="black" />
          <circle
            cx={dotPosition.x}
            cy={dotPosition.y}
            r={GRADIENT_WIDTH * gradientWidthScaleFactorRef.current}
            fill="white"
          />
        </mask>
        <radialGradient
          id={`glow_gradient_${pathId}`}
          cx={dotPosition.x}
          cy={dotPosition.y}
          r={GRADIENT_WIDTH * gradientWidthScaleFactorRef.current}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={glowColor as string} stopOpacity="1" />
          <stop offset="100%" stopColor={glowColor as string} stopOpacity="0" />
        </radialGradient>
      </defs>
    </g>
  )
}


