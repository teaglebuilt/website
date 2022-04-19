import { useRouter } from 'next/router';
import Subscribe from '../../containers/subscribe';
import Tagbar from '../../containers/tags';
import { MetaProps } from '../../lib/types';
import Sidebar from '../components/sidebar';
import RootThemeProvider from '../theme';
import TerminalGlyph from './glyph';
import Header from './header';
import IndexHero from './hero';
import { Container, PageContainer } from './layout.styles';
import MainContent from './main';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const router = useRouter();
  const icons = [
    'Webpack',
    'Python',
    'Raspberry Pi',
    'Kubernetes',
    'Consul',
    'Cloudfare',
    'Pihole',
  ];

  const mainComponents = (route) => {
    switch (route) {
      case '/':
        return <IndexHero />;
      case '/blog':
        return (
          <>
            <PageContainer>{children}</PageContainer>
            <Sidebar>
              <Tagbar tags={icons} direction="column" margin={'2rem 2rem'} />
              <Subscribe />
            </Sidebar>
          </>
        );
      default:
        return '';
    }
  };
  return (
    <>
      <RootThemeProvider>
        <Container>
          {router.pathname === '/' ? <TerminalGlyph /> : ''}
          <Header />
          <MainContent>{mainComponents(router.route)}</MainContent>
        </Container>
      </RootThemeProvider>
    </>
  );
};

export default Layout;
