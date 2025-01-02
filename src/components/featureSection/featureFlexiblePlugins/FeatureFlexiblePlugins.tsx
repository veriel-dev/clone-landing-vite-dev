"use client"
import { useCardAnimation, useSlideIn } from '@/hooks'
import React from 'react'
import "./FeatureFlexiblePlugins.css"
export const FeatureFlexiblePlugins = () => {
  const cardRef = useSlideIn(-100);
  const { isCardActive, startAnimation } = useCardAnimation(cardRef, () => {
    return null
  }, { once: true });
  return (
    <div
      className='feature-card'
      id="flexible-plugin-system"
      ref={cardRef}
      onMouseOver={startAnimation}
    >
      <div className={`feature__visualization ${isCardActive ? 'active' : ''}`}>
        {/* Diagram */}
        <div className="diagram">
          <svg
            width="686"
            height="218"
            viewBox="0 0 686 218"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <g className="pink-chip__base">
                <rect
                  width="35.0955"
                  height="35.0923"
                  rx="5.87331"
                  transform="matrix(-0.845602 0.533814 -0.895247 -0.44557 611.937 102.855)"
                  fill="#1F1F1F"
                />
                <rect
                  width="35.0955"
                  height="35.0923"
                  rx="5.87331"
                  transform="matrix(-0.845602 0.533814 -0.895247 -0.44557 611.937 102.855)"
                  stroke="#2C2C2C"
                  strokeOpacity="0.4"
                  strokeWidth="4"
                />
              </g>
              <g className="pink-chip__cube">
                <path
                  d="M573.798 105.165L573.684 96.2398L581.79 90.9291L590.029 96.0306L590.143 104.956L582.027 109.523L573.798 105.165Z"
                  fill="#BD34FE"
                />
                <path
                  d="M573.798 105.165L573.684 96.2398L581.79 90.9291L590.029 96.0306L590.143 104.956L582.027 109.523L573.798 105.165Z"
                  fill="white"
                  fillOpacity="0.5"
                />
              </g>
              <path
                className="pink-chip__connection"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M440.083 64.7972L456.9 53.3972C463.204 49.4177 473.724 48.8842 480.397 52.2055L565 94.5L562.717 95.9411L478.114 53.6466C472.776 50.9895 464.359 51.4164 459.316 54.6L442.5 66L440.083 64.7972Z"
                fill="#BD34FE"
                strokeWidth="1.2"
                stroke="#BD34FE"
              />
              <path
                className="blue-chip__connection"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M270 130L230.567 154.669C224.263 158.648 213.743 159.182 207.07 155.86L122.717 113.941L125 112.5L209.353 154.419C214.691 157.076 223.108 156.65 228.151 153.466L267.583 128.797L270 130Z"
                fill="#41d1ff"
                strokeWidth="1.2"
                stroke="#41d1ff"
              />
              <g className="blue-chip__base">
                <rect
                  width="35.0955"
                  height="35.0923"
                  rx="5.87331"
                  transform="matrix(0.845602 -0.533814 0.895247 0.44557 76.1337 105.512)"
                  fill="#1F1F1F"
                  shapeRendering="crispEdges"
                />
                <rect
                  width="35.0955"
                  height="35.0923"
                  rx="5.87331"
                  transform="matrix(0.845602 -0.533814 0.895247 0.44557 76.1337 105.512)"
                  stroke="#2C2C2C"
                  strokeOpacity="0.4"
                  strokeWidth="4.39073"
                  shapeRendering="crispEdges"
                />
              </g>
              <g className="blue-chip__cube">
                <path
                  d="M99.902 97.3307L99.7304 90.3097L106.066 86.0571L112.601 89.995L112.773 97.016L106.423 100.684L99.902 97.3307Z"
                  fill="#41D1FF"
                />
                <path
                  d="M99.902 97.3307L99.7304 90.3097L106.066 86.0571L112.601 89.995L112.773 97.016L106.423 100.684L99.902 97.3307Z"
                  fill="white"
                  fillOpacity="0.5"
                />
                <path
                  d="M110.272 103.431L110.1 96.4099L116.435 92.1574L122.971 96.0953L123.143 103.116L116.793 106.784L110.272 103.431Z"
                  fill="#41D1FF"
                />
                <path
                  d="M110.272 103.431L110.1 96.4099L116.435 92.1574L122.971 96.0953L123.143 103.116L116.793 106.784L110.272 103.431Z"
                  fill="white"
                  fillOpacity="0.5"
                />
                <path
                  d="M89.6627 103.976L89.491 96.9545L95.8263 92.7019L102.362 96.6398L102.533 103.661L96.1839 107.328L89.6627 103.976Z"
                  fill="#41D1FF"
                />
                <path
                  d="M89.6627 103.976L89.491 96.9545L95.8263 92.7019L102.362 96.6398L102.533 103.661L96.1839 107.328L89.6627 103.976Z"
                  fill="white"
                  fillOpacity="0.5"
                />
                <path
                  d="M99.4817 109.323L99.31 102.302L105.645 98.0495L112.181 101.987L112.352 109.008L106.003 112.676L99.4817 109.323Z"
                  fill="#41D1FF"
                />
                <path
                  d="M99.4817 109.323L99.31 102.302L105.645 98.0495L112.181 101.987L112.352 109.008L106.003 112.676L99.4817 109.323Z"
                  fill="white"
                  fillOpacity="0.5"
                />
              </g>
              <g className="vite-chip" filter="url(#filter-chip-shadow)">
                <g
                  className="vite-chip__highlight"
                  filter="url(#filter-vite-chip-highlight)"
                >
                  <rect
                    width="153.998"
                    height="153.998"
                    rx="12.1578"
                    transform="matrix(0.895247 0.44557 -0.845602 0.533814 330.524 11.7643)"
                    fill="black"
                    fillOpacity="0.3"
                  />
                  <rect
                    width="153.998"
                    height="153.998"
                    rx="12.1578"
                    transform="matrix(0.895247 0.44557 -0.845602 0.533814 330.524 11.7643)"
                    fill="url(#gradient-vite-chip-highlight)"
                    fillOpacity="0.1"
                  />
                  <rect
                    x="-0.0335319"
                    y="-0.661506"
                    width="155.349"
                    height="155.349"
                    rx="12.8332"
                    transform="matrix(0.895247 0.44557 -0.845602 0.533814 329.961 11.4709)"
                    stroke="#111111"
                    strokeOpacity="0.2"
                    strokeWidth="1.35086"
                  />
                </g>
                <g className="vite-chip__base" opacity="0.6">
                  <rect
                    x="-0.0335319"
                    y="-0.661506"
                    width="152.647"
                    height="152.647"
                    rx="11.4823"
                    transform="matrix(0.895247 0.44557 -0.845602 0.533814 330.028 12.7942)"
                    fill="#1E1E1E"
                    fillOpacity="0.4"
                  />
                  <rect
                    x="-0.0335319"
                    y="-0.661506"
                    width="152.647"
                    height="152.647"
                    rx="11.4823"
                    transform="matrix(0.895247 0.44557 -0.845602 0.533814 330.028 12.7942)"
                    stroke="url(#gradient-vite-chip-right-specular)"
                    strokeWidth="1.2"
                  />
                  <rect
                    x="-0.0335319"
                    y="-0.661506"
                    width="152.647"
                    height="152.647"
                    rx="11.4823"
                    transform="matrix(0.895247 0.44557 -0.845602 0.533814 330.028 12.7942)"
                    stroke="url(#gradient-vite-chip-left-specular)"
                    strokeOpacity="0.1"
                    strokeWidth="1.2"
                  />
                </g>
                <g className="vite-chip__logo">
                  <path
                    className="vite-chip__v"
                    opacity="0.8"
                    d="M395.642 83.0289L299.921 103.639C297.944 104.064 296.066 103.138 296.569 101.986L321.062 45.9169C321.611 44.6617 324.458 44.2276 325.784 45.1971L355.04 66.5878C355.227 66.7242 355.458 66.8388 355.722 66.926L396.329 80.3179C398.203 80.9357 397.789 82.5664 395.642 83.0289Z"
                    fill="url(#gradient-vite-chip-logo-v)"
                  />
                  <path
                    className="vite-chip__bolt"
                    d="M385.841 66.1307L354.84 56.2356C354.33 56.0729 353.664 56.1348 353.22 56.386L325.622 71.9952C324.972 72.3629 325.084 72.9547 325.845 73.178L334.719 75.7797C335.549 76.0232 335.589 76.6913 334.794 77.0355L322.502 82.3582C321.675 82.7165 321.759 83.4171 322.656 83.6352L328.452 85.0438C329.35 85.2623 329.434 85.9642 328.604 86.3219L309.255 94.6628C308.045 95.1845 308.884 96.2149 310.314 95.9628L311.269 95.7944L373.22 80.696C374.258 80.4432 374.42 79.6472 373.495 79.3499L364.632 76.5008C363.799 76.233 363.829 75.5392 364.686 75.2218L385.79 67.4107C386.649 67.0927 386.677 66.3975 385.841 66.1307Z"
                    fill="url(#gradient-vite-chip-logo-bolt)"
                  />
                </g>
              </g>
            </g>
            <defs>
              <filter
                id="filter-chip-shadow"
                x="158.878"
                y="-7.1193"
                width="350.919"
                height="231.696"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="21.6138" />
                <feGaussianBlur stdDeviation="19.5875" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_0_5"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_0_5"
                  result="shape"
                />
              </filter>
              <filter
                id="filter-vite-chip-highlight"
                x="177.815"
                y="-12.739"
                width="313.063"
                height="199.83"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="13.5086" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_0_5"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_0_5"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="gradient-vite-chip-highlight"
                x1="6.7543"
                y1="16.8858"
                x2="131.709"
                y2="135.086"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopOpacity="0" />
                <stop offset="0.4" stopColor="white" />
                <stop offset="1" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="gradient-vite-chip-right-specular"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(108.744 63.4905) rotate(110.653) scale(93.8362)"
              >
                <stop offset="0" stopColor="white" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
              <radialGradient
                id="gradient-vite-chip-left-specular"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(7.42974 141.165) rotate(-21.5713) scale(93.6927)"
              >
                <stop offset="0" stopColor="white" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
              <linearGradient
                id="gradient-vite-chip-logo-v"
                x1="325.064"
                y1="42.3995"
                x2="323.283"
                y2="100.669"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#41D1FF" />
                <stop offset="1" stopColor="#BD34FE" />
              </linearGradient>
              <linearGradient
                id="gradient-vite-chip-logo-bolt"
                x1="365.666"
                y1="57.5919"
                x2="348.858"
                y2="104.372"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#FFEA83" />
                <stop offset="0.08" stopColor="#FFDD35" />
                <stop offset="1" stopColor="#FFA800" />
              </linearGradient>
            </defs>
          </svg>
          <div className="blue-glow" />
          <div className="pink-glow" />
        </div>
      </div>
      <div className="feature__meta">
        <div className="meta__title">Flexible plugin system</div>
        <div className="meta__description">
          {`Vite plugins extends Rollup's well-designed plugin interface with a few
          extra Vite-specific options.`}
        </div>
      </div>
      
    </div>
  )
}
