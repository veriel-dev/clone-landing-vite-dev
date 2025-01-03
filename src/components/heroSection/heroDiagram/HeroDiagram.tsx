'use client';
import { useAnimationHeroDiagram } from '@/hooks/useAnimationHeroDiagram';
import React from 'react';
import { SvgInput } from './elements/SvgInput';
import { SvgOutputs } from './elements/SvgOutputs';
import { SvgBlueIndicator } from './elements/SvgBlueIndicator';
import { SvgPinkIndicator } from './elements/SvgPinkIndicator';
import Image from 'next/image';

export const HeroDiagram = () => {
  const {
    blueIndicator,
    pinkIndicator,
    illuminateLogo,
    isChromiumBrowser,
    isUwu,
    inputLines,
    outputLines,
  } = useAnimationHeroDiagram();
  return (
    <>
      <div className="hero__diagram" id="hero-diagram">
        <SvgInput inputLines={inputLines} />
        <SvgOutputs outputLines={outputLines} />
        <SvgBlueIndicator active={blueIndicator} />
        <SvgPinkIndicator active={pinkIndicator} />
        <div className={`vite-chip ${illuminateLogo && 'active'}`}>
          <div className={'vite-chip__background'}>
            <div className={'vite-chip__border'} />
            <div className={`vite-chip__edge ${isChromiumBrowser && 'edge--animated'}`} />
          </div>
          <div className={'vite-chip__filter'} />
          <Image
            src={isUwu ? 'https://vite.dev/logo-uwu.png' : 'https://vite.dev/logo.svg'}
            alt={isUwu ? 'Vite Kawaii Logo by @icarusgkx' : 'Vite Logo'}
            width={65}
            height={65}
            className={`vite-chip__logo ${isUwu && 'uwu'}`}
          />
        </div>
      </div>
      <div className={`hero__background ${illuminateLogo && 'active'}`} />
    </>
  );
};
