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
    flex
    flex-row
    h-full
    overflow-hidden
  `}
`;

export const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    flex-grow
    items-center
    justify-center
    w-3/4
    overflow-y-auto
    pt-60
  `}
`;
