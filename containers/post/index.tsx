import ButtonContainer from '../../src/components/button';
import CardComponent from '../../src/components/card';
import Tagbar from '../tags';

const PostCard: React.FC = ({ post }) => {
  return (
    <CardComponent>
      <article className="container">
        <img
          alt="blog photo"
          src={post.metaData.image}
          className="max-h-40 w-full h-full object-cover rounded-t"
        />
        <div className="flex flex-col w-full p-4">
          <h2 className="text-gray-800 text-md font-bold text-xl text-center">
            {post.metaData.title}
          </h2>
          <p className="text-gray-400 dark:text-gray-300 font-light text-md text-center">
            {post.metaData.excerpt}
          </p>
          {post.metaData.tags ? (
            <Tagbar tags={post.metaData.tags} direction="row" margin={0} />
          ) : (
            ''
          )}
          <ButtonContainer text={'Read More'} route={`/post/${post.slug}`} />
        </div>
      </article>
    </CardComponent>
  );
};

export default PostCard;
