const filterPostsByString = (posts, str) => (
  posts.filter(post => (post.title.toLowerCase().includes(str.toLowerCase())
    || post.body.toLowerCase().includes(str.toLowerCase())))
);

export default filterPostsByString;
