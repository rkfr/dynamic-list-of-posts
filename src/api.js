export const getPosts = () => fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json());

export const getUsers = () => fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json());

export const getComments = () => fetch('https://jsonplaceholder.typicode.com/comments')
  .then(res => res.json());
