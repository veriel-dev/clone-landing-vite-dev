import React from 'react';

export interface Framework {
  name?: string;
  logo?: React.JSX.Element;
  color?: string;
  url?: string;
  visible?: boolean;
}
export const FrameworkCard = ({ logo, color, url, visible }: Framework) => {
  return (
    <>
      {url ? (
        <a
          href={url}
          rel="noopener"
          className={`framework-card ${visible ? 'active' : ''}`}
          style={{ '--glow-color': color } as React.CSSProperties}
        >
          {logo && <>{logo}</>}
        </a>
      ) : (
        <div
          rel="noopener"
          className={`framework-card active`}
          style={{ '--glow-color': color, height: '96px', width: '96px' } as React.CSSProperties}
        />
      )}
    </>
  );
};
