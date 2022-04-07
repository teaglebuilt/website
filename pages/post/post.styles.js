import styled from 'styled-components';
import CodeBlock from '../../src/components/codeBlock';
import NextImage from 'next/image';

const H1Post = styled.h1`
  color: red;
`;

const H2Post = styled.h1`
  color: blue;
`;

const H3Post = styled.h1`
  color: green;
`;

const PostImage = styled(NextImage)`
  width: 50%;
`;

const Paragraph = styled.p`
  color: ${props => props.theme.primaryText}
`;

const PostComponents = {
  h1: H1Post,
  h2: H2Post,
  h3: H3Post,
  img: (props) => <PostImage {...props} loading="lazy" />,
  p: (props) => <Paragraph {...props} />,
  CodeBlock
};

export default PostComponents;
