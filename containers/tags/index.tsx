import Icon from '../../src/theme/icons';
import { TagItem, TagList } from './tags.styles';


const Tagbar: React.FC = ({ tags, direction, margin }) => {
  console.log(tags)
  return (
      <TagList direction={direction} margin={margin} >
        {tags.map((tag, index) => {
          return (
          <TagItem key={index}>
            <Icon name={tag} width={20} />
            {tag}
          </TagItem>
          )
        })}
      </TagList>
  );
};

export default Tagbar;
