'use client';
import { useEffect } from 'react';

export const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleReload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('load', handleReload);
    return () => {
      window.removeEventListener('load', handleReload);
    };
  }, []);
  return null;
};
