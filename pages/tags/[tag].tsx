import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { getAllTags } from '../../lib/api';

export default function Tag({
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {}

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await getAllTags();
  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  };
};

type Params = {
  [param: string]: any;
};

export const getStaticProps: GetStaticProps<Params> = async ({
  params: { tag },
}: Params) => {
  const postsByTag = await getPostsByTag(tag);
};
