'use client';

import styles from './header.module.css';
import { Languages } from './languages';
import { Logo } from './logo';
import { NavBar } from './navBar';
import { Search } from './search';
import { SocialLinks } from './socialLinks';
export const Header = () => {
  return (
    <header id="header" className={styles.header}>
      <div className={styles.navBar}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <Logo />
            <div className={styles.content}>
              <div className={styles.contentBody}>
                <Search />
                <NavBar />
                <Languages />
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
