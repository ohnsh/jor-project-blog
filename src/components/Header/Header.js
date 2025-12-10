'use client'

import React from 'react';
import clsx from 'clsx';
import { Rss, Sun, Moon } from 'react-feather';

import Logo from '@/components/Logo';
import VisuallyHidden from '@/components/VisuallyHidden';

import { LIGHT_TOKENS, DARK_TOKENS } from '@/constants';

import styles from './Header.module.css';

function Header({ initialTheme, className, ...delegated }) {
  const [theme, setTheme] = React.useState(initialTheme);

  React.useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme) {
      updateTheme(savedTheme);
    }
  }, []);

  function updateTheme(theme) {
    const html = document.documentElement
    const TOKENS = theme === 'light' ? LIGHT_TOKENS : DARK_TOKENS
    Object.keys(TOKENS).forEach(key => {
      html.style.setProperty(key, TOKENS[key])
    })
    html.dataset.colorTheme = theme

    setTheme(theme)
    window.localStorage.setItem('theme', theme);
  }

  return (
    <header className={clsx(styles.wrapper, className)} {...delegated}>
      <Logo />

      <div className={styles.actions}>
        <button className={styles.action}>
          <Rss
            size="1.5rem"
            style={{
              // Optical alignment
              transform: 'translate(2px, -2px)',
            }}
          />
          <VisuallyHidden>View RSS feed</VisuallyHidden>
        </button>
        <button
          className={styles.action}
          onClick={() => updateTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}
          <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
        </button>
      </div>
    </header>
  );
}

export default Header;
