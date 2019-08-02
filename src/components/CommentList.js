import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => {
  console.log(comments);


  return (
    <div className="comments-list">
      <ul>
        {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
      </ul>
    </div>
  );
};

export default CommentList;
