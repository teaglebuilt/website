import styled from 'styled-components';
import tw from 'twin.macro';

export const MainStyles = styled.main`
  ${tw`
    container
    flex
    flex-row
    h-screen
    overflow-hidden
    relative
    w-full
    mx-auto
  `}
`;

export const PageContainer = styled.div`
  ${tw`
    container
    flex
    flex-col
    relative
    items-center
    justify-center
    overflow-y-auto
    w-3/4
  `}
`;
