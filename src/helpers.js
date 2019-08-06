const filterPostsByWord = (posts, str) => (
  posts.filter(post => post.title.includes(str) || post.body.includes(str))
);

export default filterPostsByWord;
