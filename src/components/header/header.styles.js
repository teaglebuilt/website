import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  color: white;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.navbar};
  height: 10vh;
  width: 100vw;
`;

const Title = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 100%;
  padding: 0;
  margin: 0;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
`;

const NavLink = styled.a`
  margin: 5px;
  padding: 10px;
`

module.exports = {
  HeaderContainer,
  Title,
  Navigation,
  NavLink
}