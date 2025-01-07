import * as React from 'react';

const LogoRemix = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={800}
      height={800}
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_4_2)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M657.27 575.205C663.098 650.067 663.098 685.159 663.098 723.465H489.89C489.89 715.121 490.039 707.488 490.19 699.749C490.658 675.689 491.147 650.599 487.249 599.932C482.097 525.753 450.154 509.27 391.419 509.27H339.382H119V374.307H399.663C473.853 374.307 510.949 351.738 510.949 291.983C510.949 239.441 473.853 207.601 399.663 207.601H119V75.5353H430.576C598.535 75.5353 682 154.865 682 281.585C682 376.368 623.266 438.183 543.923 448.485C610.9 461.878 650.057 499.998 657.27 575.205Z"
          fill="white"
        />
        <path
          d="M119 723.465V622.855H302.142C332.733 622.855 339.375 645.543 339.375 659.075V723.465H119Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath>
          <rect width={800} height={800} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LogoRemix;