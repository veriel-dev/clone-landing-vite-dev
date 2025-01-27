import * as React from 'react';

const LogoVue = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={51}
      height={44}
      viewBox="0 0 51 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_724_8519)">
        <path
          d="M40.984 0.385498H50.9991L25.9615 43.5754L0.923828 0.385498H20.0776L25.9615 10.4005L31.7201 0.385498H40.984Z"
          fill="#41B883"
        />
        <path
          d="M0.923828 0.385498L25.9615 43.5754L50.9991 0.385498H40.984L25.9615 26.2994L10.8137 0.385498H0.923828Z"
          fill="#41B883"
        />
        <path
          d="M10.8135 0.385498L25.9612 26.4246L40.9838 0.385498H31.7199L25.9612 10.4005L20.0774 0.385498H10.8135Z"
          fill="#35495E"
        />
      </g>
      <defs>
        <clipPath>
          <rect
            width={50.0781}
            height={43.229}
            fill="white"
            transform="translate(0.921875 0.385498)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LogoVue;
