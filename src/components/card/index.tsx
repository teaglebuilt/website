import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Card = styled.div`
  ${tw`
    container
    flex
    flex-col
    bg-white
    w-1/2
    shadow-lg
    text-gray-800
    my-4
    mx-auto
    rounded
  `}
`;

const CardComponent: React.FC = (props) => <Card>{props.children}</Card>;

export default CardComponent;
