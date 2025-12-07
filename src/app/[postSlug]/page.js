import React from 'react';

import BlogHero from '@/components/BlogHero';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { loadBlogPost as _loadBlogPost } from '@/helpers/file-helpers';
import CodeSnippet from '@/components/CodeSnippet';

import styles from './postSlug.module.css';

const loadBlogPost = React.cache(_loadBlogPost);

export async function generateMetadata({ params }) {
  const { postSlug } = await params;
  const { frontmatter } = await loadBlogPost(postSlug);
  const { title, abstract: description } = frontmatter;

  return { title, description };
}

async function BlogPost({ params }) {
  const { postSlug } = await params;
  const {
    frontmatter: { title, publishedOn },
    content,
  } = await loadBlogPost(postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero title={title} publishedOn={publishedOn} />
      <div className={styles.page}>
        <MDXRemote source={content} components={{ pre: CodeSnippet }} />
      </div>
    </article>
  );
}

export default BlogPost;
