import { getAllPosts } from '../../../lib/api';

export default function (req, res) {
  const posts = getAllPosts();
  console.log('posts', posts);
  const { page } = req.query;
  const perPage = 3;
  const totalPages = posts.length / perPage;
  const start = (page - 1) * perPage;
  let end = start + perPage;
  if (end > posts.length) {
    end = posts.length;
  }
  res.status(200).json({
    currentPage: page,
    perPage: perPage,
    totalCount: posts.length,
    pageCount: totalPages,
    start: start,
    end: end,
    posts: posts,
  });
}
