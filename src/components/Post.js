import React from 'react';
import User from './User';
import CommentList from './CommentList';

const Post = ({ postData }) => {
  const { title, body, user, comments } = postData;

  return (
    <li className="post">
      <h2 className="post__title">{title}</h2>
      <p className="post__body">{body}</p>
      <User
        userData={user}
        showFullData
      />
      <CommentList comments={comments} />
    </li>
  );
};


export default Post;
