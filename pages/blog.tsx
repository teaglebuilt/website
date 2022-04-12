import fs from 'fs';
import matter from 'gray-matter';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import path from 'path';
import React from 'react';
import PostCard from '../containers/post';
import { Post } from '../lib/types';
import Layout from '../src/layout';

const Blog: NextPage = ({
  posts
}: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <Layout>
      {posts.map((post: Post, index: number) => (
        <React.Fragment key={index}>
          <PostCard post={post} />
        </React.Fragment>
      ))}
    </Layout>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async (context) => {
  console.log('preview', context.previewData);
  const articlesDirectory = path.join('posts');

  const files = fs.readdirSync(articlesDirectory);

  const blogPosts = files.map((fileName: string) => {
    const slug = fileName.replace('.mdx', '');
    const article = fs.readFileSync(path.join('posts', fileName));
    const { data: metaData } = matter(article);
    return { slug, metaData };
  });
  return { props: { posts: blogPosts } };
};
