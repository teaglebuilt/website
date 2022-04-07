import styled from 'styled-components';
import Icon from '../../theme/icons';

const Sidebar = styled.aside`
  display: flex;
  position: sticky;
  overflow-y: scroll;
  align-items: center;
  width: 20vw;
  padding: 2em;
  order: 2;
`;

const TagList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TagItem = styled.li`
  display: flex;
  flex-direction: row;
  color: #022b3a;
`;

const Tagbar = () => {
  const tags = ['Python'];
  return (
    <Sidebar>
      <TagList>
        {tags.map((tag, index) => {
          return (
          <TagItem key={index}>
            <Icon name={tag} />
            {tag}
          </TagItem>
          )
        })}
      </TagList>
    </Sidebar>
  );
};

export default Tagbar;
