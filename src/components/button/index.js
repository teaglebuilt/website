import styled from "styled-components";
import Link from 'next/link';

const Button = styled.a`
  background: "#D8315B";
  color: white;
  font-size: 1rem;
  padding: 0 3px 5px rgba(0,0,0,0.1);
  cursor: pointer;
  border: none;
  border-radius: 4px;
  display: flex;
  flex-direction: row-reverse;
`;


const ButtonContainer = ({ text, route }) => {
  return(
    <Link href={route} passHref>
      <Button>{text}</Button>
    </Link>
  )
}

export default ButtonContainer;