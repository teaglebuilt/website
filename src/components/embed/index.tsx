import { CodePen, Gist, MDXEmbedProvider } from 'mdx-embed';
import React from 'react';

const components = {
  CodePen,
  Gist,
};

export default (props) => <MDXEmbedProvider>{props.children}</MDXEmbedProvider>;
