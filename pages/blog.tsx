import type { InferGetStaticPropsType, NextPage } from 'next';
import React from 'react';
import ReactPaginate from 'react-paginate';
import PostCard from '../containers/post';
import { Post } from '../lib/types';
import Layout from '../src/layout';

const Blog: NextPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>,
) => {
  console.log(props);

  const renderPosts = () => {
    return (
      <>
        {props.posts.map((post: Post, index: number) => (
          <React.Fragment key={index}>
            <PostCard post={post} />
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <Layout>
      <div className="overflow-y-auto">{renderPosts()}</div>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={props.pageCount}
        initialPage={props.currentPage - 1}
        pageRangeDisplayed={3}
      />
    </Layout>
  );
};

export default Blog;

Blog.getInitialProps = async ({ query }) => {
  const page = query.page || 1;
  const response = await fetch(`${process.env.HOSTNAME}/api/posts/${page}`);
  const result = await response.json();
  return {
    currentPage: result.currentPage,
    totalCount: result.totalCount,
    pageCount: result.pageCount,
    perPage: result.perPage,
    posts: result.posts,
  };
};
