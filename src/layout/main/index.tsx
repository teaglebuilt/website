import Subscribe from '../../../containers/subscribe';
import Tagbar from '../../../containers/tags';
import Sidebar from '../../components/sidebar';
import { MainStyles, PageContainer } from './main.styles';

const MainContent: React.FC = ({ children, route }) => {
  const icons = [
    'Webpack',
    'Python',
    'Raspberry Pi',
    'Kubernetes',
    'Consul',
    'Cloudfare',
    'Pihole',
  ];

  switch (route) {
    case '/blog':
      return (
        <MainStyles isHidden>
          <PageContainer>{children}</PageContainer>
          <Sidebar>
            <Tagbar tags={icons} direction="column" margin={'2rem 2rem'} />
            <Subscribe />
          </Sidebar>
        </MainStyles>
      );
    case '/services':
      return <MainStyles>{children}</MainStyles>;
    default:
      return;
  }
};

export default MainContent;
