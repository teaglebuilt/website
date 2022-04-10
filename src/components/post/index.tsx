import CardComponent from '../card';
import ButtonContainer from '../button'
import Tagbar from '../tags';

const PostCard: React.FC = ({ post }) => {
  return(
    <CardComponent>
      <h2>{post.metaData.title}</h2>
      <p>{post.metaData.excerpt}</p>
        {post.metaData.tags ? <Tagbar tags={post.metaData.tags} /> : ""}
      <ButtonContainer
        text={"Read More"}
        route={`/post/${post.slug}`} />
    </CardComponent>
  )
}

export default PostCard;
