'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const GetStartedSection = () => {
  return (
    <div className="get-started-section">
      <div className="vite-chip-30">
        <svg
          width="134"
          height="134"
          viewBox="0 0 134 134"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <rect
              className="vite-chip__background"
              x="1"
              y="1"
              width="132"
              height="132"
              rx="10"
              fill="black"
              fillOpacity="0.3"
            />
            <rect
              className="vite-chip__highlight"
              x="1"
              y="1"
              width="132"
              height="132"
              rx="10"
              fill="url(#linear-vite-chip-highlight)"
              fillOpacity="0.1"
            />
            <rect
              x="1"
              y="1"
              width="132"
              height="132"
              rx="10"
              stroke="#111111"
              strokeOpacity="0.2"
              strokeWidth="1"
            />
          </g>
          <g opacity="0.6">
            <rect x="1" y="1" width="132" height="132" rx="10" fill="#1E1E1E" fillOpacity="0.4" />
            <rect
              x="1"
              y="1"
              width="132"
              height="132"
              rx="10"
              stroke="url(#radial-edge)"
              strokeWidth="1.15417"
            />
            <rect
              x="1"
              y="1"
              width="132"
              height="132"
              rx="10"
              stroke="url(#radial-edge-2)"
              strokeOpacity="0.1"
              strokeWidth="1.15417"
            />
          </g>
          <defs>
            <linearGradient
              id="linear-vite-chip-highlight"
              x1="6.92498"
              y1="15.5812"
              x2="113.685"
              y2="116.571"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopOpacity="0" />
              <stop offset="0.37" stopColor="white" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="radial-edge"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(95.2187 56.5541) rotate(110.653) scale(80.173)"
            >
              <stop offset="0" stopColor="white" />
              <stop offset="1" stopOpacity="0" />
            </radialGradient>
            <radialGradient
              id="radial-edge-2"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(8.65624 122.919) rotate(-21.5713) scale(80.0504)"
            >
              <stop offset="0" stopColor="white" />
              <stop offset="1" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
        <Image
          src="https://vite.dev/logo.svg"
          alt="Vite Logo"
          className="vite-chip__logo"
          width={40}
          height={40}
        />
      </div>
      <h2>Start building with Vite</h2>
      <h3>
        Prepare for a development environment that can finally keep pace with the speed of your
        mind.
      </h3>
      <Link href="/guide/" className="btn btn--primary">
        Get started
      </Link>
      <div className="glow glow--purple" />
      <div className="glow glow--blue" />
    </div>
  );
};
