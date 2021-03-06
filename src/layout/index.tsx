import { useRouter } from 'next/router';
import { MetaProps } from '../../lib/types';
import RootThemeProvider from '../theme';
import Header from './header';
import { Container } from './layout.styles';
import MainContent from './main';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const router = useRouter();
  switch (router.route) {
    case '/services':
      return (
        <>
          <RootThemeProvider>
            <Container>
              <Header />
              <MainContent children={children} route={router.route} />
            </Container>
          </RootThemeProvider>
        </>
      );
    default:
      return (
        <>
          <RootThemeProvider>
            <Container isHidden>
              <Header />
              <MainContent children={children} route={router.route} />
            </Container>
          </RootThemeProvider>
        </>
      );
  }
};

export default Layout;
