import React from 'react';
import { Work_Sans, Spline_Sans_Mono } from 'next/font/google';
import clsx from 'clsx';

import { LIGHT_TOKENS, DARK_TOKENS, BLOG_TITLE } from '@/constants';
import { MotionConfig } from 'framer-motion';
import MotionConfigProvider from './MotionConfigProvider';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
  // TODO: Dynamic theme depending on user preference
  const theme = 'light';

  return (
    <html
      lang="en"
      className={clsx(mainFont.variable, monoFont.variable)}
      data-color-theme={theme}
      style={theme === 'light' ? LIGHT_TOKENS : DARK_TOKENS}
    >
      <body>
        <MotionConfigProvider>
          <Header theme={theme} />
          <main>{children}</main>
          <Footer />
        </MotionConfigProvider>
      </body>
    </html>
  );
}

export default RootLayout;
