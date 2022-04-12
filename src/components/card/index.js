import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: ${props => props.theme.secondaryGray};
  font-size: 1rem;
  padding: 1em;
  margin: 1em 2em;
  border: none;
  border-radius: 4px;
`;

const CardComponent = props => <Card>{props.children}</Card>;

export default CardComponent;
