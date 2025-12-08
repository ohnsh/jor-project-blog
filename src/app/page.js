import React from 'react';

import BlogSummaryCard from '@/components/BlogSummaryCard';
import { getBlogPostList } from '@/helpers/file-helpers';

import styles from './homepage.module.css';

async function Home() {
  const posts = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>Latest Content:</h1>

      {posts.map(({ slug, ...delegated }) => (
        <BlogSummaryCard slug={slug} key={slug} {...delegated} />
      ))}
    </div>
  );
}

export default Home;
