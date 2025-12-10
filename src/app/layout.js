import React from 'react';
import { Work_Sans, Spline_Sans_Mono } from 'next/font/google';
import clsx from 'clsx';
import { MotionConfig } from 'framer-motion';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BLOG_TITLE, LIGHT_TOKENS, DARK_TOKENS } from '@/constants';

import './styles.css';

export const metadata = {
  title: BLOG_TITLE,
  description: 'A blog about JavaScript',
};

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

function RootLayout({ children }) {
  const initialTheme = 'light'

  return (
    <MotionConfig reducedMotion="user">
      <html
        lang="en"
        className={clsx(mainFont.variable, monoFont.variable)}
        data-color-theme={initialTheme}
        style={initialTheme === 'light' ? LIGHT_TOKENS : DARK_TOKENS}
      >
        <body>
          <Header initialTheme={initialTheme} />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </MotionConfig>
  )
}

export default RootLayout;
