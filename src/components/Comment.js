import React from 'react';
import User from './User';

const Comment = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <div className="comment">
      <User
        name={name}
        email={email}
      />
      <div>{body}</div>
    </div>
  );
};

export default Comment;
