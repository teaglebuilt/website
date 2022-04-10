import { SidebarContainer } from './sidebar.styles';
import Tagbar from '../tags';

const Sidebar: React.FC = () => {
  const tags = ['Python', 'Webpack']
  return (
    <SidebarContainer>
      <Tagbar tags={tags} direction="column" />
    </SidebarContainer>
  );
};

export default Sidebar;

