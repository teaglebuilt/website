import Link from 'next/link';
import DarkModeToggle from '../../theme/DarkMode';
import {
  HeaderContainer,
  Navigation,
  NavLink,
  Title
} from './header.styles'

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Dillan Teagles</Title>
      <Navigation>
        <Link href="/">
          <NavLink>Home</NavLink>
        </Link>
        <Link href="/contact">
          <NavLink>Contact</NavLink>
        </Link>
      </Navigation>
      <DarkModeToggle />
    </HeaderContainer>
  );
};

export default Header;
