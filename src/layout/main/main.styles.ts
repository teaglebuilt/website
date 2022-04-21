import styled from 'styled-components';
import tw from 'twin.macro';

export const MainStyles = styled.main(({ isHidden }) => [
  tw`container flex flex-row w-full mx-auto relative h-screen`,
  isHidden ? tw`overflow-hidden` : tw``,
]);

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
