import { promises as fsPromises } from 'fs';
import * as path from 'path';
import matter from 'gray-matter';

export async function getAllPosts() {
  const postFilePath = path.join('posts')
  const files = await fsPromises.readdir(postFilePath);
  const blogPosts = files.map(async (fileName: string) => {
    const slug = fileName.replace('.mdx', '');
    const article = await fsPromises.readFile(path.join('posts', fileName));
    const { data: metaData } = matter(article);
    return { slug, metaData };
  });
  return { props: { posts: blogPosts } };
}

export function getAllTags() {
  const posts = getAllPosts()
  console.log(posts)
}