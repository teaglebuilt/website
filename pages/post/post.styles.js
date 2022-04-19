import NextImage from 'next/image';
import styled from 'styled-components';
import tw from 'twin.macro';
import CodeBlock from '../../src/components/codeBlock';

const H1Post = styled.h1`
  ${tw`
    text-white
    text-4xl
    font-semibold
    text-center
    py-2
    font-akshar
  `}
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
  ${tw`
    p-2
    align-middle
  `}
`;

const HR = styled.hr`
  ${tw`
    mb-4
  `}
`;

const PostComponents = {
  h1: H1Post,
  h2: H2Post,
  h3: H3Post,
  img: (props) => <PostImage {...props} loading="lazy" />,
  p: (props) => <Paragraph {...props} />,
  hr: HR,
  CodeBlock,
};

export default PostComponents;
