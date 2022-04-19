import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Image from 'next/image';
import path from 'path';
import rehypeImgSize from 'rehype-img-size';
import Layout from '../../src/layout';
import PostComponents from './post.styles';

export default function Post({
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(source);
  return (
    <Layout>
      <div className="container flex flex-col justify-center w-5/6 h-screen relative overflow-hidden">
        <div className="container overflow-y-auto mx-auto px-4">
          <Image
            src={source.scope.image}
            width={800}
            height={400}
            className="rounded object-cover py-4 my-10"
          />
          <MDXRemote {...source} components={PostComponents} />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articlesDirectory = path.join('content/posts');

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
  const article = fs.readFileSync(path.join('content/posts', slug + '.mdx'));

  const { data: metaData, content } = matter(article);

  const mdxSource = await serialize(content, {
    scope: metaData,
    mdxOptions: {
      rehypePlugins: [[rehypeImgSize, { dir: 'public' }]],
    },
  });
  return { props: { source: mdxSource } };
};
