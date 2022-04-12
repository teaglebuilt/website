import styled from 'styled-components';
import tw from "twin.macro";

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
    overflow-hidden
  `}
`;

export const MainContent = styled.main`
  ${tw`
    flex
    flex-row
    flex-grow
    h-screen
  `}
`;

export const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    flex-1
    items-center
    justify-center
    overflow-y-scroll
    w-3/4
    order-1
  `}
`;
