import Link from 'next/link';
import React from 'react';
import DarkModeToggle from '../../theme/DarkMode';
import {
  StyledHeader,
  Navigation,
  NavLink,
  Title,
} from './header.styles'

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Title>Dillan Teagle</Title>
      <Navigation>
        <Link href="/">
          <NavLink>home</NavLink>
        </Link>
        <Link href="/blog">
          <NavLink>blog</NavLink>
        </Link>
        <Link href="/projects">
          <NavLink>blog</NavLink>
        </Link>
        <Link href="/contact">
          <NavLink>contact me</NavLink>
        </Link>
      </Navigation>
      <DarkModeToggle />
    </StyledHeader>
  );
};

export default Header;
