import styled from 'styled-components';
import tw from 'twin.macro';

export const TagList = styled.ul`
  display: flex;
  background: #e4e9f2;
  flex-direction: ${props => props.direction};
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: .2em;
  margin: 0;
  overflow-x: auto;
`;

export const TagItem = styled.li`
  display: flex;
  flex-direction: row;
  color: #022b3a;
`;