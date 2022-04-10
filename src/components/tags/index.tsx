import { TagList, TagItem } from './tags.styles';
import Icon from '../../theme/icons';


const Tagbar: React.FC = ({ tags, direction }) => {
  console.log(tags)
  return (
      <TagList direction={direction} >
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