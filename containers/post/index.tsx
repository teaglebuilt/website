import ButtonContainer from '../../src/components/button';
import CardComponent from '../../src/components/card';
import Tagbar from '../tags';

const PostCard: React.FC = ({ post }) => {
  return(
    <CardComponent>
      <h2>{post.metaData.title}</h2>
      <p>{post.metaData.excerpt}</p>
        {post.metaData.tags ? <Tagbar tags={post.metaData.tags} direction="row" margin={0} /> : ""}
      <ButtonContainer
        text={"Read More"}
        route={`/post/${post.slug}`} />
    </CardComponent>
  )
}

export default PostCard;
