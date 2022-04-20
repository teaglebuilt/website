'use strict';
const { getAllTags, getPostsByTag } = require('../lib/api');

describe('test library api', () => {
  it('get all tags', async () => {
    const tags = await getAllTags();
    console.log(JSON.stringify(tags));
  });

  it('gets posts by tag', async () => {
    const posts = await getPostsByTag('Python');
    const data = await posts;
    console.log(data);
    expect(JSON.stringify(data)).toEqual([]);
  });
});
