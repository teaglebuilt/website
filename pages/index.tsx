import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../src/layout';
import { Post } from '../lib/types';
import CardComponent from '../src/components/card';
import ButtonContainer from '../src/components/button'

const Home: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      {posts.map((post: Post, index: number) => (
        <CardComponent key={index}>
          <h2>{post.metaData.title}</h2>
          <p>{post.metaData.excerpt}</p>
          <ButtonContainer
            text={"Read More"}
            route={`/post/${post.slug}`} />
        </CardComponent>
      ))}
    </Layout>
  );
};

export default Home;

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
