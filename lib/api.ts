import { promises as fsPromises } from 'fs';
import matter from 'gray-matter';
import * as path from 'path';
import { TagCount } from './types';

export async function getAllPosts() {
  const postFilePath = path.join('content/posts');
  const files = await fsPromises.readdir(postFilePath);
  const blogPosts = files.map(async (fileName: string) => {
    const slug = fileName.replace('.mdx', '');
    const article = await fsPromises.readFile(
      path.join('content/posts', fileName),
    );
    const { data: metaData } = matter(article);
    return { slug, metaData };
  });
  return { props: { posts: blogPosts } };
}

export async function getAllTags() {
  const { props } = await getAllPosts();
  let tagCount: TagCount = {};
  props.posts.forEach(async (post) => {
    const data = await post;
    if (data.metaData.tags) {
      data.metaData.tags.forEach(async (item: string) => {
        const tag = await item;
        if (tag in tagCount) {
          tagCount[tag] += 1;
        } else {
          tagCount[tag] = 1;
        }
      });
    }
  });
  return tagCount;
}

export async function getPostsByTag(param: string) {
  const { props } = await getAllPosts();
  const filteredPosts = props.posts.filter(async (post) => {
    const data = await post;
    data.metaData.draft !== true &&
      data.metaData.tags.map(async (t: string) => {
        const tag = await t;
        tag == param;
      });
  });
  return filteredPosts;
}

export const getIcons = () => {
  const icons = [
    'Webpack',
    'Python',
    'Raspberry Pi',
    'Kubernetes',
    'Consul',
    'Cloudfare',
    'Pihole',
  ];
  return icons;
};
