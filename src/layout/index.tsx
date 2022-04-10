import { MetaProps } from '../../lib/types';
import Footer from '../components/footer';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import RootThemeProvider from '../theme';
import { Container, MainContent, PageContainer } from './layout.styles';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
    <RootThemeProvider>
      <Container>
        <Header />
        <MainContent>
          <PageContainer>{children}</PageContainer>
          <Sidebar />
        </MainContent>
        <Footer />
      </Container>
    </RootThemeProvider>
    </>
  );
};

export default Layout;
