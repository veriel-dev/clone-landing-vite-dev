import Link from 'next/link';
import React from 'react';

import styles from './menu.module.css';
interface Props {
  lang: string;
  href: string;
}

export const LinkLang = ({ lang, href }: Props) => {
  return (
    <div className="VPMenuLink">
      <Link className={styles['menu-link-lang']} href={href} target="_blank" rel="noreferrer">
        {lang}
      </Link>
    </div>
  );
};

export const Menu = () => {
  const languages = [
    { lang: '简体中文', href: 'https://cn.vite.dev/' },
    { lang: '日本語', href: 'https://ja.vite.dev/' },
    { lang: 'Español', href: 'https://es.vite.dev/' },
    { lang: 'Português', href: 'https://pt.vite.dev/' },
    { lang: '한국어', href: 'https://ko.vite.dev/' },
    { lang: 'Deutsch', href: 'https://de.vite.dev/' },
  ];
  return (
    <div className={styles.VPMenu}>
      <div className={styles.items}>
        <p className={styles.title}>English</p>
        {languages.map(({ lang, href }) => (
          <LinkLang lang={lang} href={href} key={lang} />
        ))}
      </div>
    </div>
  );
};
