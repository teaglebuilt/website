import Icon from '../../src/theme/icons';
import { IconSpan, TagItem, TagList } from './tags.styles';

const Tagbar: React.FC = ({ tags, direction, margin }) => {
  console.log(tags);
  return (
    <TagList direction={direction} margin={margin}>
      {tags.map((tag, index) => {
        return (
          <TagItem key={index}>
            {direction === 'column' ? (
              <IconSpan right={'10px'} scale="scale(1.8)">
                <Icon name={tag} width={20} />
              </IconSpan>
            ) : (
              <IconSpan right={'5px'} scale="scale(1.4)">
                <Icon name={tag} width={20} />
              </IconSpan>
            )}
            <p className="font-sans text-xl">{tag}</p>
          </TagItem>
        );
      })}
    </TagList>
  );
};

export default Tagbar;
