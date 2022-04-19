import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`
  bg-white
  dark:bg-gray-800
    font-mono
    relative
    overflow-hidden
    h-screen
  `}
`;

export const MainContent = styled.main`
  ${tw`
    container
    flex
    flex-row
    h-screen
    overflow-hidden
    relative
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
