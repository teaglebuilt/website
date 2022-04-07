import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import PostComponents from './post.styles';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import imageSize from "rehype-img-size";
import Layout from '../../src/layout';
import rehypeImgSize from 'rehype-img-size';

export default function Post({
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <div style={{ width: '600px', margin: 'auto' }}>
        <MDXRemote {...source} components={PostComponents} />
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articlesDirectory = path.join('posts');

  const files = fs.readdirSync(articlesDirectory);

  const paths = files.map((fileName: string) => ({
    params: {
      slug: fileName.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false, // if access path/slug that doesn't exist -> 404 page
  };
};

type Params = {
  [param: string]: any;
};

export const getStaticProps: GetStaticProps<Params> = async ({
  params: { slug },
}: Params) => {
  const article = fs.readFileSync(path.join('posts', slug + '.mdx'));

  const { data: metaData, content } = matter(article);

  const mdxSource = await serialize(content, 
    { 
      scope: metaData,
      mdxOptions: {
        rehypePlugins: [
          [rehypeImgSize, { dir: "public"}]
        ]
      }
    }
  );
  return { props: { source: mdxSource } };
};
