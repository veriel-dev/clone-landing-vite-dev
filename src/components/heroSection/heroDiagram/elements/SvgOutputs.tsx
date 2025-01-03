import React from 'react';
import { SvgNode } from './SvgNode';
import type { SvgNodeProps } from './SvgNode';
interface OutputLinesProps {
  outputLines: SvgNodeProps[];
}
export const SvgOutputs = ({ outputLines }: OutputLinesProps) => {
  const pathString = 'M843.463 1.3315L245.316 5.47507L0.633077 4.69725';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="844"
      height="80"
      viewBox="0 0 844 40"
      fill="none"
      className={'output-line'}
      style={{ opacity: 0.8 }}
    >
      <path d={pathString} stroke="url(#output_gradient)" strokeWidth="1.2" />
      {outputLines.map((outputLine, index) => (
        <g key={index}>
          <SvgNode
            path={pathString}
            position={outputLine.position}
            visible={outputLine.visible}
            labelVisible={outputLine.labelVisible}
            label={outputLine.label}
            dotColor="#d499ff"
            glowColor="#BD34FE"
          />
        </g>
      ))}
      <defs>
        <linearGradient id="output_gradient" gradientUnits="userSpaceOnUse">
          <stop offset="0.1" stopColor="#E0C8FF" stopOpacity="0" />
          <stop offset="0.4" stopColor="#E0C8FF" stopOpacity="0.4" />
          <stop offset="1" stopColor="#E0C8FF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
