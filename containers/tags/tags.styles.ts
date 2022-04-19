import styled from 'styled-components';

export const TagList = styled.ul`
  display: flex;
  background: ${(props) => props.primaryGray};
  flex-direction: ${(props) => props.direction};
  width: 100%;
  align-items: start;
  border-radius: 4px;
  padding: 0.2em;
  margin: ${(props) => props.margin};
  overflow-y: auto;
`;

export const TagItem = styled.li`
  display: flex;
  padding: 0.2rem;
  align-items: center;
  margin: 4px 0;
  color: ${(props) => props.secondaryGray};
`;

export const IconSpan = styled.span`
  margin-right: ${(props) => props.right};
  transform: ${(props) => props.scale};
`;
