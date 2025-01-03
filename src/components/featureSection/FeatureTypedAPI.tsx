'use client';
import React from 'react';
import { useCardAnimation, useSlideIn } from '@/hooks';

import '../../css/featureSection/featureTypedAPI.css';
export const FeatureTypedAPI = () => {
  const cardRef = useSlideIn();

  const { isCardActive, startAnimation } = useCardAnimation(
    cardRef,
    () => {
      return null;
    },
    { once: true },
  );
  return (
    <div className="feature-card" id="fully-typed-api" onMouseEnter={startAnimation} ref={cardRef}>
      <div className={`feature__visualization ${isCardActive ? 'active' : ''}`}>
        <div className="ide">
          <span className="code code__inactive">
            <span className="code--red">import</span> {'{ createServer }'}
            <span className="code--red"> from</span>
            <span className="code--blue"> {`'vite'`}</span>
            <br />
            <br />
            <span className="code--red">const</span> server =
            <span className="code--red"> await</span>
            <span className="code--purple"> createServer</span>({'])'}
            <br />
            <span className="code--grey">{'  // user config options'}</span>
            <br />
            {'}'}
          </span>
          <span className="code code__feature">
            <span className="code--red">await</span> server.
            <span className="code--highlight">listen</span>()
            <br />
            <span className="code--extra">
              server.<span className="code--purple">printUrls</span>()
            </span>
          </span>
        </div>
        <div className="tooltip">
          <span className="code">
            (method) ViteDevServer.<span className="code--blue">listen</span>
            (port<span className="code--blue">?:</span> number
            <span className="code--blue">| undefined,</span> isRestart
            <span className="code--blue">?:</span> boolean
            <span className="code--blue">| undefined</span>):
            <span className="code--yellow">Promise</span>
            <span className="code--blue">&lt;</span>ViteDevServer
            <span className="code--blue">&gt;</span>
            <br />
            <span className="code--descriptor">Start the server.</span>
          </span>
        </div>
      </div>
      <div className="feature__meta meta--center">
        <div className="meta__title">Fully typed API</div>
        <div className="meta__description">Designed to be built on top of.</div>
      </div>
    </div>
  );
};
