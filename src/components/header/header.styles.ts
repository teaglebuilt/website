import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledHeader = styled.header`
  ${tw`
    h-24
    sm:h-32
    flex
    items-center
    z-30
    w-full
  `}
`;

export const Title = styled.div`
  ${tw`
    font-semibold
    font-sans
    text-lg
    p-4
  `}
`;

export const Navigation = styled.div`
  ${tw`
    font-sans
    text-gray-800
    dark:text-white
    uppercase
    text-lg
    lg:flex
    items-center
    hidden
  `}
`;

export const NavLink = styled.a`
  ${tw`
    flex
    py-2
    px-6
  hover:text-green-200
  `}
`;
