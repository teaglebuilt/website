import styled from 'styled-components';
import tw from 'twin.macro';

export const SidebarContainer = styled.aside`
  ${tw`
    flex
    flex-col
    align-middle
    sticky
    top-0
    z-auto
    overflow-y-auto
    w-1/4
    p-2
    order-2
  `}
`;
