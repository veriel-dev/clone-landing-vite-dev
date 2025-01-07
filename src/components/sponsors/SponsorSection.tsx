'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Sponsors } from './components';

interface Sponsor {
  name: string;
  img: string;
  url: string;
  hasDark?: true;
}

export const voidZero = {
  name: 'VoidZero',
  url: 'https://voidzero.dev',
  img: 'https://vite.dev/voidzero.svg',
} satisfies Sponsor;

const viteSponsors = {
  special: [
    {
      name: 'StackBlitz',
      url: 'https://stackblitz.com',
      img: 'https://vite.dev/stackblitz.svg',
    },
    {
      name: 'NuxtLabs',
      url: 'https://nuxtlabs.com',
      img: 'https://vite.dev/nuxtlabs.svg',
    },
    {
      name: 'Astro',
      url: 'https://astro.build',
      img: 'https://vite.dev/astro.svg',
    },
  ],
  platinum: [
    {
      name: 'Storyblok',
      url: 'https://www.storyblok.com',
      img: 'https://sponsors.vuejs.org/images/storyblok.png',
    },
    {
      name: 'Bit',
      url: 'https://bit.dev',
      img: 'https://sponsors.vuejs.org/images/bit.svg?v2',
      priority: false,
    },
  ],
  gold: [
    {
      name: 'Tailwind Labs',
      url: 'https://tailwindcss.com',
      img: 'https://sponsors.vuejs.org/images/tailwind_labs.svg',
    },
    {
      name: 'divriots',
      url: 'https://divriots.com/',
      img: 'https://sponsors.vuejs.org/images/divriots.png',
    },
    {
      name: 'Prefect.io',
      url: 'https://www.prefect.io/',
      img: 'https://sponsors.vuejs.org/images/prefect_io.svg',
    },
    {
      name: 'JetBrains',
      url: 'https://www.jetbrains.com/',
      img: 'https://sponsors.vuejs.org/images/jetbrains.svg?v3',
    },
    {
      name: 'Mux',
      url: 'https://mux.com?ref=vitejs',
      img: 'https://sponsors.vuejs.org/images/mux.svg',
    },
    {
      name: 'Remix',
      url: 'https://remix.run/',
      img: 'https://sponsors.vuejs.org/images/remix.svg',
    },
    {
      name: 'Nx',
      url: 'https://nx.dev/',
      img: 'https://sponsors.vuejs.org/images/nx.svg',
    },
    {
      name: 'Transloadit',
      url: 'https://transloadit.com/?utm_source=vite&utm_medium=referral&utm_campaign=sponsorship&utm_content=website',
      img: 'https://sponsors.vuejs.org/images/transloadit.svg',
      hasDark: true,
    },
    {
      name: 'Huly',
      url: 'https://huly.io',
      img: 'https://sponsors.vuejs.org/images/huly.svg',
    },
    {
      name: 'Handsontable',
      url: 'https://handsontable.com/docs/react-data-grid/?utm_source=vite_docs&utm_medium=sponsorship&utm_campaign=library_sponsorship_2024',
      img: 'https://sponsors.vuejs.org/images/handsontable.svg',
    },
    {
      name: 'LatchBio',
      url: 'https://latch.bio/',
      img: 'https://sponsors.vuejs.org/images/latchbio.svg',
    },
  ],
};

const data = [
  {
    tier: 'in partnership with',
    size: 'big',
    items: viteSponsors['special'],
    gridCols: 3,
  },
  {
    tier: 'Platinum Sponsors',
    size: 'big',
    items: viteSponsors['platinum'],
    gridCols: 2,
  },
  {
    tier: 'Gold Sponsors',
    size: 'medium',
    items: viteSponsors['gold'],
    gridCols: 5,
  },
];

export const SponsorSection = () => {
  return (
    <>
      <div className="sponsor-section">
        <svg
          className="bg-lines"
          width="1793"
          height="1269"
          viewBox="0 0 1793 1269"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M752.613 0.717285L787.634 201.189C794.351 239.643 797.729 278.606 797.729 317.642L797.729 1268.54M649.493 0.717285L704.366 138.145C736.239 217.969 752.613 303.135 752.613 389.088L752.614 1268.54M572.153 0.717285L630.175 111.432C680.966 208.35 707.498 316.138 707.498 425.558L707.498 1268.54M505.862 0.717285L564.392 97.2923C628.492 203.058 662.383 324.367 662.383 448.041L662.383 1268.54M452.46 0.717285L511.009 92.4655C580.401 201.205 617.268 327.512 617.268 456.507L617.268 1268.54M407.345 0.717285L465.894 92.4655C535.286 201.205 572.153 327.512 572.153 456.507L572.153 1268.54M362.23 0.717285L420.779 92.4655C490.17 201.205 527.038 327.512 527.038 456.507L527.038 1268.54M317.115 0.717285L375.664 92.4655C445.055 201.205 481.923 327.512 481.923 456.507L481.923 1268.54M272 0.717285L330.549 92.4655C399.94 201.205 436.808 327.512 436.808 456.507L436.808 1268.54M226.885 0.717285L285.433 92.4655C354.825 201.205 391.693 327.512 391.693 456.507L391.693 1268.54M181.77 0.717285L240.318 92.4655C309.71 201.205 346.578 327.512 346.578 456.507L346.578 1268.54M136.655 0.717285L195.203 92.4655C264.595 201.205 301.463 327.512 301.463 456.507L301.463 1268.54M91.5395 0.717285L150.088 92.4655C219.48 201.205 256.348 327.512 256.348 456.507L256.348 1268.54M46.4244 0.717285L104.973 92.4655C174.365 201.205 211.233 327.512 211.233 456.507L211.233 1268.54M1.30933 0.717285L59.8581 92.4655C129.25 201.205 166.117 327.512 166.117 456.507L166.117 1268.54M1040.8 0.717285L1005.78 201.189C999.06 239.643 995.683 278.606 995.683 317.642V1268.54M1143.92 0.717285L1089.04 138.145C1057.17 217.969 1040.8 303.135 1040.8 389.088V1268.54M1221.26 0.717285L1163.24 111.432C1112.45 208.35 1085.91 316.138 1085.91 425.558V1268.54M1287.55 0.717285L1229.02 97.2923C1164.92 203.058 1131.03 324.367 1131.03 448.041V1268.54M1340.95 0.717285L1282.4 92.4655C1213.01 201.205 1176.14 327.512 1176.14 456.507V1268.54M1386.07 0.717285L1327.52 92.4655C1258.13 201.205 1221.26 327.512 1221.26 456.507V1268.54M1431.18 0.717285L1372.63 92.4655C1303.24 201.205 1266.37 327.512 1266.37 456.507V1268.54M1476.3 0.717285L1417.75 92.4655C1348.36 201.205 1311.49 327.512 1311.49 456.507V1268.54M1521.41 0.717285L1462.86 92.4655C1393.47 201.205 1356.6 327.512 1356.6 456.507V1268.54M1566.53 0.717285L1507.98 92.4655C1438.59 201.205 1401.72 327.512 1401.72 456.507V1268.54M1611.64 0.717285L1553.09 92.4655C1483.7 201.205 1446.83 327.512 1446.83 456.507V1268.54M1656.76 0.717285L1598.21 92.4655C1528.82 201.205 1491.95 327.512 1491.95 456.507V1268.54M1701.87 0.717285L1643.32 92.4655C1573.93 201.205 1537.06 327.512 1537.06 456.507V1268.54M1746.99 0.717285L1688.44 92.4655C1619.05 201.205 1582.18 327.512 1582.18 456.507V1268.54M1792.1 0.717285L1733.55 92.4655C1664.16 201.205 1627.29 327.512 1627.29 456.507V1268.54M968.061 0.717335L950.567 258.978V1268.54M893.943 0.717285L893.943 1268.54M824.89 0.717285L842.843 258.978L842.843 1268.54"
            stroke="url(#linear-sponsor-lines)"
          />
          <defs>
            <linearGradient
              id="linear-sponsor-lines"
              x1="0"
              y1="0"
              x2="0"
              y2="1200"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.1" stopColor="#1b1c20" stopOpacity="0" />
              <stop offset="0.35" stopColor="#1b1c20" />
              <stop offset="0.55" stopColor="#1b1c20" stopOpacity="0.2" />
              <stop offset="0.6" stopColor="#1b1c20" stopOpacity="0.2" />
              <stop offset="0.7" stopColor="#1b1c20" />
              <stop offset="1" stopColor="#1b1c20" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <Image
          className="icon-heart"
          src="https://vite.dev/heart.svg"
          alt="Vite is made possible by our contributors, partner companies, and sponsors"
          width="58"
          height="55"
        />
        <h2>Free &amp; open source</h2>
        <h4>
          Vite is MIT Licensed and will always be free and open source. This is made possible by our
          contributors and these companies:
        </h4>

        <h4>Brought to you by</h4>
        <div className="voidzero">
          <Link href={voidZero.url} target="_blank">
            <Image src={voidZero.img} alt={voidZero.name} height={50} width={260} />
          </Link>
        </div>

        <div className="sponsor-grid">
          <Sponsors data={data as []} />
        </div>

        <div className="sponsor-actions">
          <Link
            href="https://github.com/sponsors/vitejs"
            target="_blank"
            className="btn btn--outline btn--rounded"
          >
            Become a Sponsor
          </Link>
        </div>
      </div>
    </>
  );
};
