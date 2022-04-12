import { SidebarContainer } from './sidebar.styles';

const Sidebar: React.FC = ({ children }) => {

  return (
    <SidebarContainer>
      {children}
    </SidebarContainer>
  );
};

export default Sidebar;

