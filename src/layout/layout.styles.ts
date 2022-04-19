import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`
    flex
    flex-col
    bg-gray-100
    text-gray-800
    dark:bg-gray-800
    dark:text-gray-50
    font-mono
    relative
    w-screen
    h-screen
    flex-1
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
    w-3/4
  `}
`;
