import Subscribe from '../../containers/subscribe';
import Tagbar from '../../containers/tags';
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
  const icons = ['Webpack', 'Python']
  return (
    <>
    <RootThemeProvider>
      <Container>
        <Header />
        <MainContent>
          <PageContainer>{children}</PageContainer>
          <Sidebar>
            <Tagbar
              tags={icons}
              direction="column"
              margin={"2rem 0"} />
            <Subscribe />
        </Sidebar>
        </MainContent>

        <Footer />
      </Container>
    </RootThemeProvider>
    </>
  );
};

export default Layout;
