'use client';

import React, { useRef } from 'react';
import styles from './languages.module.css';
import { ChevronDown, OptionIcon } from '@/components/svg';
import { Menu } from './menu/Menu';

export const Languages = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseEnter = (): void => buttonRef.current?.setAttribute('aria-expanded', 'true');

  const handleMouseLeave = (): void => buttonRef.current?.setAttribute('aria-expanded', 'false');

  return (
    <div
      className={`${styles.navBarTranslations} translations`}
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative' }}
    >
      <button
        id="button-lang"
        type="button"
        className={styles.button}
        aria-haspopup="true"
        aria-expanded="false"
        aria-label="Change language"
        ref={buttonRef}
      >
        <span className={styles.text}>
          <span className={styles.optionIcon}>
            <OptionIcon />
          </span>
          <span className={styles.cheveronDown}>
            <ChevronDown />
          </span>
        </span>
      </button>
      <div className={styles.menu}>
        <Menu />
      </div>
    </div>
  );
};
