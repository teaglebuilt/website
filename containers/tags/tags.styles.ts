import styled from 'styled-components';

export const TagList = styled.ul`
  display: flex;
  background: ${props => props.primaryGray};
  flex-direction: ${props => props.direction};
  width: 100%;
  align-items: start;
  border-radius: 4px;
  padding: .2em;
  margin: ${props => props.margin};
  overflow-y: auto;
`;

export const TagItem = styled.li`
  display: flex;
  padding: .2rem;
  color: ${props => props.secondaryGray};
`;
