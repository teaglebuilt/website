import type { InferGetStaticPropsType, NextPage } from 'next';
import React from 'react';
import Layout from '../src/layout';

const Home: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <div>A child</div>
    </Layout>
  );
};

export default Home;
