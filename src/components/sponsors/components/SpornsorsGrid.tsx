'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
export type GridSize = 'mini' | 'small' | 'medium' | 'big';

interface Sponsor {
  name: string;
  img: string;
  url: string;
}

interface SponsorsGridProps {
  size?: GridSize;
  data: Sponsor[];
  gridCols: number | undefined;
}

export const SpornsorsGrid = ({ size = 'medium', data, gridCols }: SponsorsGridProps) => {
  const [dataVpGrid, setDataVpGrid] = useState(gridCols);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setDataVpGrid(1);
      } else {
        setDataVpGrid(gridCols);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [gridCols]);
  return (
    <div className={`VPSponsorsGrid vp-sponsor-grid ${size}`} data-vp-grid={dataVpGrid}>
      {data.map(sponsor => (
        <div key={sponsor.name} className="vp-sponsor-grid-item">
          <Link
            className="vp-sponsor-grid-link"
            href={sponsor.url}
            target="_blank"
            rel="sponsored noopener"
          >
            <article className="vp-sponsor-grid-box">
              <h4 className="visually-hidden">{sponsor.name}</h4>
              <Image
                className="vp-sponsor-grid-image"
                src={sponsor.img}
                alt={sponsor.name}
                width={192}
                height={96}
                unoptimized={sponsor.img.startsWith('http')}
              />
            </article>
          </Link>
        </div>
      ))}
    </div>
  );
};
