/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useState, useRef, useEffect, useMemo } from 'react';
import { Framework, FrameworkCard } from './FrameworkCard';
import LogoAnalog from './images/LogoAnalog';
import LogoAngular from './images/LogoAngular';
import LogoAstro from './images/LogoAstro';
import LogoEmber from './images/LogoEmber';
import LogoLaravel from './images/LogoLaravel';
import LogoMarko from './images/LogoMarko';
import LogoNuxt from './images/LogoNuxt';
import LogoPlaywright from './images/LogoPlaywright';
import LogoPreact from './images/LogoPreact';
import LogoQwik from './images/LogoQwik';
import LogoReact from './images/LogoReact';
import LogoRedwood from './images/LogoRedwood';
import LogoRemix from './images/LogoRemix';
import LogoSolid from './images/LogoSolid';
import LogoStorybook from './images/LogoStorybook';
import LogoSvelte from './images/LogoSvelte';
import LogoVitest from './images/LogoVitest';
import LogoVue from './images/LogoVue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const FrameworksSection = () => {
  const [screenWidth, setScreenWidth] = useState(1920);
  const [resizeTimeout, setResizeTimeout] = useState(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [frameworks, setFrameworks] = useState<Framework[]>([
    {
      name: 'Vitest',
      logo: <LogoVitest />,
      color: '#fac52b',
      url: 'https://vitest.dev/',
      visible: false,
    },
    {
      name: 'React',
      logo: <LogoReact />,
      color: '#00d6fd',
      url: 'https://react.dev/',
      visible: false,
    },
    {
      name: 'Angular',
      logo: <LogoAngular />,
      color: '#e03237',
      url: 'https://angular.dev/',
      visible: false,
    },
    {
      name: 'Vue',
      logo: <LogoVue />,
      color: '#40b782',
      url: 'https://vuejs.org/',
      visible: false,
    },
    {
      name: 'Solid',
      logo: <LogoSolid />,
      color: '#75b2df',
      url: 'https://www.solidjs.com/',
      visible: false,
    },
    {
      name: 'Svelte',
      logo: <LogoSvelte />,
      color: '#fd3e00',
      url: 'https://svelte.dev/',
      visible: false,
    },
    {
      name: 'Preact',
      logo: <LogoPreact />,
      color: '#673ab8',
      url: 'https://preactjs.com/',
      visible: false,
    },
    {
      name: 'Astro',
      logo: <LogoAstro />,
      color: '#FFFFFF',
      url: 'https://astro.build',
      visible: false,
    },
    {
      name: 'Remix',
      logo: <LogoRemix />,
      color: '#3991fd',
      url: 'https://remix.run/',
      visible: false,
    },
    {
      name: 'Nuxt',
      logo: <LogoNuxt />,
      color: '#00da81',
      url: 'https://nuxt.com',
      visible: false,
    },
    {
      name: 'Qwik',
      logo: <LogoQwik />,
      color: '#18b5f4',
      url: 'https://qwik.dev/',
      visible: false,
    },
    {
      name: 'Redwood',
      logo: <LogoRedwood />,
      color: '#be4622',
      url: 'https://redwoodjs.com/',
      visible: false,
    },
    {
      name: 'Analog',
      logo: <LogoAnalog />,
      color: '#c10f2e',
      url: 'https://analogjs.org/',
      visible: false,
    },
    {
      name: 'Playwright',
      logo: <LogoPlaywright />,
      color: '#d45247',
      url: 'https://playwright.dev/',
      visible: false,
    },
    {
      name: 'Storybook',
      logo: <LogoStorybook />,
      color: '#fd4684',
      url: 'https://storybook.js.org/',
      visible: false,
    },
    {
      name: 'Marko',
      logo: <LogoMarko />,
      color: '#de2a87',
      url: 'https://markojs.com/',
      visible: false,
    },
    {
      name: 'Laravel',
      logo: <LogoLaravel />,
      color: '#eb4432',
      url: 'https://laravel.com/',
      visible: false,
    },
    {
      name: 'EmberJS',
      logo: <LogoEmber />,
      color: '#e04e39',
      url: 'https://emberjs.com/',
      visible: false,
    },
  ]);

  gsap.registerPlugin(ScrollTrigger);

  const handleResize = () => setScreenWidth(window.innerWidth);

  const throttledResizeHandler = () => {
    if (resizeTimeout === null) {
      setTimeout(() => {
        handleResize();
        setResizeTimeout(null);
      }, 100);
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', throttledResizeHandler);
    timelineRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: '#frameworks-section',
        start: 'top 70%',
        once: true,
      },
    });
    frameworks.forEach((framework, index) => {
      timelineRef.current?.set(
        framework,
        {
          opacity: 1,
          duration: 0.05,
          onComplete: () => {
            setFrameworks(prevFrameworks => {
              return prevFrameworks.map((fw, i) => {
                if (i === index) {
                  return { ...fw, visible: true };
                }
                return fw;
              });
            });
          },
        },
        index * 0.05,
      );
    });
    // Cleanmup frameworks
    return () => {
      window.removeEventListener('resize', throttledResizeHandler);
      // Limpiar ScrollTrigger
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  const numBlocksPerRow = useMemo(() => {
    return Math.floor(screenWidth / (96 + 24));
  }, [screenWidth]);

  const paddedBlocksPerSide = useMemo(() => {
    if (screenWidth < 840) {
      return 0;
    }
    if (screenWidth < 1280) {
      return 1;
    }
    if (screenWidth < 1600) {
      return 2;
    }
    return Math.max(Math.floor((screenWidth - 840) / 280), 0);
  }, [screenWidth]);

  const numFrameworksPerRow = useMemo(() => {
    return numBlocksPerRow - paddedBlocksPerSide * 2;
  }, [numBlocksPerRow, paddedBlocksPerSide]);

  const numRows = useMemo(() => {
    return Math.ceil(frameworks.length / numFrameworksPerRow);
  }, [numFrameworksPerRow]);

  const centerIndexes = useMemo(() => {
    const firstRowsStartIndex = paddedBlocksPerSide;
    const frameworksPerFirstRows = numBlocksPerRow - 2 * paddedBlocksPerSide;
    const lastRowStartIndex =
      paddedBlocksPerSide +
      Math.floor((frameworksPerFirstRows - (frameworks.length % frameworksPerFirstRows)) / 2);

    return new Array(numRows + 1).fill(0).map((_, i) => {
      return i < numRows || frameworks.length % frameworksPerFirstRows === 0
        ? {
            start: firstRowsStartIndex,
            end: numBlocksPerRow - paddedBlocksPerSide,
          }
        : {
            start: lastRowStartIndex,
            end: lastRowStartIndex + (frameworks.length % frameworksPerFirstRows) + 1,
          };
    });
  }, [numRows, paddedBlocksPerSide, numBlocksPerRow]);

  const rowStyle = {
    transform: `translate3d(var(--row-offset), 0, 0)`,
  };
  const renderFrameworkRow = (rowIndex: number) => {
    return Array.from({ length: numBlocksPerRow + 2 }).map((_, columnIndex) => {
      if (
        columnIndex >= centerIndexes[rowIndex]?.start &&
        columnIndex < centerIndexes[rowIndex]?.end
      ) {
        const frameworkIndex =
          (rowIndex - 1) * numFrameworksPerRow + columnIndex - centerIndexes[rowIndex].start;
        return (
          <FrameworkCard
            key={`framework - ${rowIndex} -${columnIndex} `}
            {...frameworks[frameworkIndex]}
          />
        );
      }
      return <FrameworkCard key={`empty - ${rowIndex} -${columnIndex} `} />;
    });
  };

  return (
    <section className="frameworks-section" id="frameworks-section">
      <h2>Powering your favorite frameworks and tools</h2>
      <div className="frameworks-container">
        <div className="framework-row" style={rowStyle}>
          {Array.from({ length: numBlocksPerRow + 2 }).map((_, i) => (
            <FrameworkCard key={`top - ${i} `} />
          ))}
        </div>
        {Array.from({ length: numRows }).map((_, rowIndex) => (
          <div key={`row-${rowIndex + 1} `} className="framework-row" style={rowStyle}>
            {renderFrameworkRow(rowIndex + 1)}
          </div>
        ))}
        <div className="framework-row" style={rowStyle}>
          {Array.from({ length: numBlocksPerRow + 2 }).map((_, i) => (
            <FrameworkCard key={`bottom - ${i} `} />
          ))}
        </div>
      </div>
    </section>
  );
};
