'use client';
import React from 'react';

import { Work_Sans, Spline_Sans_Mono } from 'next/font/google';
import clsx from 'clsx';
import { MotionConfig } from 'framer-motion';

import { LIGHT_TOKENS, DARK_TOKENS } from '@/constants';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const mainFont = Work_Sans({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family',
});
const monoFont = Spline_Sans_Mono({
  subsets: ['latin'],
  display: 'fallback',
  weight: 'variable',
  variable: '--font-family-mono',
});

export default function GlobalConfig ({ children }) {
  const [theme, setTheme] = React.useState('light');

  React.useLayoutEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <MotionConfig reducedMotion="user">
      <html
        lang="en"
        className={clsx(mainFont.variable, monoFont.variable)}
        data-color-theme={theme}
        style={theme === 'light' ? LIGHT_TOKENS : DARK_TOKENS}
      >
        <body>
          <Header theme={theme} setTheme={setTheme} />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </MotionConfig>
  );
}
