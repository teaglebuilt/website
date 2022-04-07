import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  background: ${props => props.theme.footer};
  height: 10vh;
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  color: #fdfdff;
`;

const Footer = () => {
  return <FooterContainer>Footer</FooterContainer>;
};

export default Footer;
