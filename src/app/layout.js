import React from 'react';
import { BLOG_TITLE } from '@/constants';
import GlobalConfig from './GlobalConfig';

import './styles.css';

export const metadata = {
  title: BLOG_TITLE,
  description: 'A blog about JavaScript',
};

function RootLayout({ children }) {
  return <GlobalConfig>{children}</GlobalConfig>;
}

export default RootLayout;
