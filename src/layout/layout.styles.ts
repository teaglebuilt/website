import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div(({ isHidden }) => [
  tw`bg-white dark:bg-gray-800 font-mono relative h-screen`,
  isHidden ? tw`overflow-hidden` : tw``,
]);
