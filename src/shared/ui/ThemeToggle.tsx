'use client';

import { useCallback, useState } from 'react';
import { THEME_STORAGE_KEY, type HudTheme } from '@shared/lib/theme';
import styles from './ThemeToggle.module.scss';

function readTheme(): HudTheme {
  if (typeof document === 'undefined') return 'dark';
  const t = document.documentElement.getAttribute('data-theme');
  return t === 'light' || t === 'dark' ? t : 'dark';
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<HudTheme>(() => readTheme());

  const cycle = useCallback(() => {
    const next: HudTheme = readTheme() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* ignore quota / private mode */
    }
    setTheme(next);
  }, []);

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={cycle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <span className={styles.toggle__glyph} aria-hidden>
        {theme === 'dark' ? '◐' : '◑'}
      </span>
      <span className={styles.toggle__text}>{theme === 'dark' ? 'LIGHT' : 'DARK'}</span>
    </button>
  );
}
