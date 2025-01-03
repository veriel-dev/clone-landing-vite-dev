import Link from 'next/link';
import React from 'react';
import styles from './social.module.css';
import { BlueSkyIcon, DiscordIcon, GithubIcon, MastodonIcon, XIcon } from '@/components/svg';

interface SocialLink {
  platform: 'bluesky' | 'mastodon' | 'x' | 'discord' | 'github';
  url: string;
  label: string;
  icon: React.ReactNode;
}

export const SocialLinks = () => {
  const socialLinks: SocialLink[] = [
    {
      platform: 'bluesky',
      url: 'https://bsky.app/profile/vite.dev',
      label: 'Bluesky',
      icon: <BlueSkyIcon />,
    },
    {
      platform: 'mastodon',
      url: 'https://elk.zone/m.webtoo.ls/@vite',
      label: 'Mastodon',
      icon: <MastodonIcon />,
    },
    {
      platform: 'x',
      url: 'https://x.com/vite_js',
      label: 'X',
      icon: <XIcon />,
    },
    {
      platform: 'discord',
      url: 'https://chat.vite.dev',
      label: 'Discord',
      icon: <DiscordIcon />,
    },
    {
      platform: 'github',
      url: 'https://github.com/vitejs/vite',
      label: 'GitHub',
      icon: <GithubIcon />,
    },
  ];
  const {
    'navbar-social': navBarSocial,
    'social-links': socialLinksClass,
    'social-link': socialLink,
    'social-icon': socialIcon,
  } = styles;
  return (
    <div className={navBarSocial}>
      <div className={socialLinksClass}>
        {socialLinks.map(({ platform, url, label, icon }) => (
          <Link
            key={platform}
            href={url}
            className={socialLink}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={socialIcon}>{icon}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
