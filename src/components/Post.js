import React from 'react';
import User from './User';

const Post = ({ postData }) => {
  const { title, body, user } = postData;

  return (
    <li className="post">
      <h2 className="post__title">{title}</h2>
      <p className="post__body">{body}</p>
      <User
        userData={user}
        showFullData
      />
    </li>
  );
};


export default Post;
