import { ChevronDown } from '@/components/svg';
import styles from './navbar.module.css';
import Link from 'next/link';
export const NavBar = () => {
  return (
    <nav aria-labelledby="main-nav-aria-label" className={styles.navMenu}>
      <span id="main-nav-aria-label" className="visually-hidden">
        Main Navigation{' '}
      </span>
      <Link className={styles.navBarMenuLink} href="#guide/">
        Guide
      </Link>
      <Link className={styles.navBarMenuLink} href="#config/">
        Config
      </Link>
      <Link className={styles.navBarMenuLink} href="#plugins/">
        Plugins
      </Link>
      <div className="VPFlyout VPNavBarMenuGroup">
        <button
          type="button"
          className={styles.navBarMenuButton}
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className={styles.text}>
            <span>Version</span>
            <span className={styles.cheveronDown}>
              <ChevronDown />
            </span>
          </span>
        </button>
      </div>
    </nav>
  );
};
