'use client';
import { useMemo } from 'react';
import { GridSize, SpornsorsGrid } from './SpornsorsGrid';

interface Sponsor {
  name: string;
  img: string;
  url: string;
  gridCols?: number;
}

interface Sponsors {
  tier?: string;
  size?: GridSize;
  items: Sponsor[];
  gridCols?: number;
}

interface SponsorsProps {
  mode?: 'normal' | 'aside';
  tier?: string;
  size?: GridSize;
  data: Sponsors[] | Sponsor[];
}

export const Sponsors = ({ mode = 'normal', tier, size, data }: SponsorsProps) => {
  const sponsors = useMemo(() => {
    const isSponsors = data.some(s => 'items' in s);

    if (isSponsors) {
      return data as Sponsors[];
    }

    return [
      {
        tier: tier,
        size: size,
        items: data as Sponsor[],
      },
    ];
  }, [data, tier, size]);

  return (
    <div className={`VPSponsors vp-sponsor ${mode}`}>
      {sponsors.map((sponsor, index) => (
        <section key={index} className="vp-sponsor-section">
          {sponsor.tier && <h3 className="vp-sponsor-tier">{sponsor.tier}</h3>}
          <SpornsorsGrid size={sponsor.size} data={sponsor.items} gridCols={sponsor.gridCols} />
        </section>
      ))}
    </div>
  );
};
