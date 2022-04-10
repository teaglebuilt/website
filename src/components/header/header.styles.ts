import styled from 'styled-components';
import tw from 'twin.macro';

export const StyledHeader = styled.header`
  ${tw`
    flex
    flex-row
    flex-shrink-0
    sticky
    top-0
    z-50
    justify-start
    align-middle
    bg-gray-50
    w-full
    py-2
    mb-10
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
    flex
    flex-row
    p-4
  `}
`;

export const NavLink = styled.a`
  ${tw`
    px-6
  `}
`;