import React from 'react';
import styles from './logo.module.css';
import Link from 'next/link';
import Image from 'next/image';
export const Logo = () => {
  return (
    <div className={styles.navBarTitle}>
      <Link href={'/'} className={styles.title}>
        <Image
          src={'https://vite.dev/logo.svg'}
          alt="Logo Vite JS"
          className={styles.logo}
          width={24}
          height={24}
        />
        <span>Vite</span>
      </Link>
    </div>
  );
};
