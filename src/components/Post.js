import React from 'react';
import User from './User';

const Post = ({ postData }) => (
  <li className="post">
    <h2 className="post__title">{postData.title}</h2>
    <p className="post__body">{postData.body}</p>
    <User userData={postData.user} />
  </li>
);

export default Post;
