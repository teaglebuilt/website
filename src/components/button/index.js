import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Button = styled.a`
  ${tw`
    border-b-2
    border-b-gray-200
    text-gray-800
    w-1/5
    mx-auto
    text-center
  `}
`;

const ButtonContainer = ({ text, route }) => {
  return (
    <Link href={route} passHref>
      <Button>{text}</Button>
    </Link>
  );
};

export default ButtonContainer;
