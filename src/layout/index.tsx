import 'tailwindcss/tailwind.css';
import styled from 'styled-components';
import Header from '../components/header';
import Tagbar from '../components/sidebar';
import Footer from '../components/footer';
import { MetaProps } from '../../lib/types';
import RootThemeProvider from '../theme';
import tw from "twin.macro";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 80%;
  width: 80%;
`;

// const PageContainer = styled.section`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding: 1em;
//   order: 1;
// `;
const PageContainer = styled.div`${tw`flex flex-col items-center justify-center w-screen h-screen`}`;


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
          <Tagbar />
        </MainContent>
        <Footer />
      </Container>
    </RootThemeProvider>
    </>
  );
};

export default Layout;
